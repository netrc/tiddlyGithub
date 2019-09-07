
# tiddlyWiki with GitHub backend

Older experiments 

## Google Cloud Function (not used)

Use a stored google cloud function to perform the download - free hosting

See gfuncs.js - works!

Somewhat complicated to store the PATs; and hard to secure. 

Maybe need a better way to query user for repo/PAT info.  (Which is what led to putting all this in a github pages hosted index.html page)

## Bookmarklet version (not used)

Gives you a bookmarklet to retrieve tiddlyWiki index.html from github. (bookmarklets are just javascript programs stored as a bookmark).

Thus, you can just click on a bookmark, get to you tiddlyWiki and it can be saved (and autosaved) back to GitHub.

### Bookmarklet

* copy code from tgbm.js
* use a javascript minifer - this helps to make the bookmarklet smaller and removes comments. Recommend https://chriszarate.github.io/bookmarkleter/  ... make sure to use babel minify (auto removes comments...)
  * IMPORTANT: in the input field, make sure to paste-in your GitHub user name and PAT
  * The output from the bookmarkleter will need to be copied in to the new bookmark
* make the bookmark
  * open up your browsers bookmark manager
  * add a new bookmark
  * copy in the bookmarklet code - a long string starting with "javascript:(function(){..." - as the URL 
  * save

Works; a bit complicated to edit the bookmarklet

* https://chriszarate.github.io/bookmarkleter/  - use babel minify (auto removes comments...)
* https://mrcoles.com/bookmarklet/
