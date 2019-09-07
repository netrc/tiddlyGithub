

# tiddlyWiki with GitHub backend

Uses built-in github saver to store tiddlyWiki index.html and a github pages hosted page that helps to download that page to your browser.

## Step-by-Step How To

### TiddlyWiki - start up

* Go to https://tiddlywiki.com/ and save the index.html file to a local directory.

### Github - repo and tokens

* You'll need to use git to commit/push that file to a repo at GitHub under your login name
* At github, create a new repo and follow the directions to save the index.html as a file in the repo
  * You'll probably want to make this a private repo if your tiddlyWiki is for private use
  * you can add any other readme or other files if you want
* Check https://github.com/-username-/-newrepo- that your new repo looks fine and has the index.html file

Personal Access Tokens

You'll need a "PAT" in order to download and to store the GitHub index.html tiddlyWiki file.

* At GitHub, click on your user icon, select Settings, then Developer Settings
* In the Personal Access Token page, "Create a new token"
  * any name
  * *You must select the 'repo' scope (permission)*  (i've forgotten to do this more than i care to admit)
* Once created, immediately copy this string somewhere - the text of the PAT needs to be copied in to the tiddlyGithub downloader and to the GitHub save settings and the bookmarklet
* Note that once you refresh the page, you aren't allowed to see the PAT clear-text. However, it is trivial to make new PATs as needed (and delete old PATS that aren't needed).

### tiddlyGithub - downloader

* go to https://netrc.github.io/tiddlyGithub and enter your username, repo name, and the PAT, and click 'save'
  * these values are stored in browser local storage
* code running in your browser will now download the index.html and run it
* This will be the URL you use to download; bookmark this

### tiddlyWiki - GitHub Saver

* Once the tiddlyWiki is running, click on the settings icon and get to the 'Saving' panel, and the 'GitHub Saver' section
* enter all the info as shown. (Note, you can use a different PAT, doesn't matter as long as it has 'repo' scope)
* There's no explicit save button, just 'X' out of the settings control panel

Now just edit a tiddly and save it. You'll see that the circle-checkmark icon is red, indicating changes to save. You can click on it to force a save. I've found it's best to just wait for the running tiddlyWiki to schedule the save on it's own.

Almost every error I've found with this is just related to copying the PAT wrong. E.g. some control-C operations add a blank at the end of the PAT. 

And I've found some times that the tiddlyWiki GitHub saver has lost the PAT. 


## Motivation and notes

tbd

TODO
* why does downloaded index.html github saver lose the PAT?
* does the github repo have to be private? Is the saver PAT stored in the index.html file? (Seems like no, but I've been losing my saver PAT regularly)
* gitlab too?
* get a tiddlyWiki favicon?


