const process = require('process');
const https = require('https');

const contentsUrl = `https://api.github.com/repos/${process.env.GH_USER}/tiddly/contents/`;
const contentsOpts = {
  auth: `${process.env.GH_USER}:${process.env.GH_PAT}`,   // computes Authorization for us!
  headers: { 
    'User-Agent': 'tiddly',     // a name is required for github API
    'Accept': 'application/json'
  }
};

function findIndexInfo(rawData) {
    const contents = JSON.parse(rawData);
    return contents.find( f => f.name==="index.html" );
}

function getIndexHTML(rawData) {
    let bodyHTML = "<!DOCTYPE html> <html> <body> <h1>getIndex Error </h1> <p>i is unknown or no content</p> </body> </html>";
    const i = JSON.parse(rawData);
    if (i && ('content' in i)) {
        var b = new Buffer.from(i.content, 'base64');
        bodyHTML = b.toString();
    }
    return bodyHTML;
}

function doRequest(url, opts, cb) {
  return new Promise ((resolve, reject) => {
    const response = { // default response
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    console.log('calling http');
    const req = https.get(url, opts, (res) => {
        const { statusCode } = res;
        console.log(`status code: ${statusCode}`);
        const contentType = res.headers['content-type'];
        let error;
        if (statusCode !== 200) {
            error = new Error(`Request Failed. \n Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
            error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
        }
        if (error) {
            console.error(error.message);
            // Consume response data to free up memory
            res.resume();
// main error return
          response.statusCode = 901;
          resolve( response );
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });

        res.on('end', async () => {
            try {
                resolve( rawData );
            } catch (e) {
                console.log("902 error: " + e.message);
                response.statusCode = 902;   // error with json parse
                resolve( response );
            }
        });

    });

    req.on('error', err => {
        console.error(`Got error: ${err.message}`);
      reject(err);
    });
  }); 
}

exports.gettw = (req, res) => {
  let resStatus;
  let body = ''
  
  if (req.query.id !== "123...QBC") {
    resStatus = 404
    body = '<!DOCTYPE html> <html> <body> <p> undefined</p> </body> </html>'
    res.set('Content-Type', 'text/html');
    res.status(resStatus).send(body);
    return
  }

  doRequest(contentsUrl, contentsOpts).then( rawData => {
    const indexInfo = findIndexInfo(rawData);
    //console.log(`handler: indexURL: ${indexInfo}`);
    if (indexInfo) {
      doRequest(indexInfo.git_url, contentsOpts).then( indexRaw => {
        body = getIndexHTML(indexRaw);
        console.log(`body ${body.length} bytes  snippet: ${body.slice(0,128)}`);
        resStatus = 200;
        res.set('Content-Type', 'text/html');
        res.status(resStatus).send(body);
      })
    }
  }).catch( err => {
    resStatus = 500;
    body = `<!DOCTYPE html> <html> <body> <h1> caught something! </h1> ${contentsUrl}  </body> </html>`
    res.set('Content-Type', 'text/html');
    res.status(resStatus).send(body);
  })
};
