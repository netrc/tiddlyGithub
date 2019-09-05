const GH_USER = "netrc";
const GH_PAT = "5512d1c39c14828d9ce93abe5f90ac842f9ee948";
const contentsUrl = `https://api.github.com/repos/${GH_USER}/tiddly/contents/`;
const contentsOpts = { 
    headers: { 
      'User-Agent': 'tiddly',  
      'Authorization': 'Basic ' + btoa(`${GH_USER}:${GH_PAT}`),  
      'Accept': 'application/json' 
  } 
};

function doRequest(url, opts) {
  return new Promise ( (resolve, reject) => {
    console.log(`dr: fetch ${url}`);
    fetch(url, opts).then( response => {
      if (response.status !== 200) {
        console.log(`fetch problem ... Status Code: ${response.status}`);
        reject(`fetch problem ... Status Code: ${response.status}`);
      }
      response.text().then( data => {
        resolve(data);
      });
    }).catch( err => {
      console.log(`Fetch Error ${err}`);
      reject(`Fetch Error ${err}`);
    });
  }); 
}

console.log('// main...');
let body = '<!DOCTYPE html> <html> <head> <style> body { background-color: #9AA; } </style> </head> <body> ...working... </body> </html>'; // just indicates we're loading....
document.write(body);
doRequest(contentsUrl, contentsOpts).then( rawData => {
    const contents = JSON.parse(rawData);
    const indexInfo = contents.find( f => f.name==="index.html" );
    document.write(`<p> found index.html size: ${indexInfo.size} sha: ${indexInfo.sha}`);
    doRequest(indexInfo.git_url, contentsOpts).then( rawData => {
      document.write(`<p> got response...t: ${typeof(rawData)} length: ${rawData.length}  ${rawData.slice(0,32)}`);
      const indexObj = JSON.parse(rawData);
      document.write(`<p> got response object...`);
      const bodyHTML = atob(indexObj.content);
      document.write(`<p> body html ${bodyHTML.length}  ... ${bodyHTML.slice(0,48)}`);
      document.close();
      document.open();
      document.write(bodyHTML);
    }) // TODO catch
  }).catch( err => {
    document.write(`caught some error: url: ${contentsUrl}`);
  });

// TODO get compressed ? current raw size is 7MB  !!! not supported by github // Accept-Encoding: gzip
// TODO if indexInfo error write error
// TODO what is the URL? set .location ?
// TODO open in new window
// TODO set etag 0
