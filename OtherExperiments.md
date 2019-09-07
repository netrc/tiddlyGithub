
# tiddlyWiki with GitHub backend

Older experiments (not used)

## Google Cloud Function

## Bookmarklet version (not used)

Gives you a bookmarklet to retrieve tiddlyWiki index.html from github. (bookmarklets are just javascript programs stored as a bookmark).

Thus, you can just click on a bookmark, get to you tiddlyWiki and it can be saved (and autosaved) back to GitHub.

### Bookmarklet

* copy code from tgbm.js
* use a javascript minifer - this helps to make the bookmarklet smaller and removes comments. Recommend https://chriszarate.github.io/bookmarkleter/  ... make sure to use babel minify (auto removes comments...)
** IMPORTANT: in the input field, make sure to paste-in your GitHub user name and PAT
** The output from the bookmarkleter will need to be copied in to the new bookmark
* make the bookmark
** open up your browsers bookmark manager
** add a new bookmark
** copy in the bookmarklet code - a long string starting with "javascript:(function(){..." - as the URL 
** save
* https://chriszarate.github.io/bookmarkleter/  - use babel minify (auto removes comments...)
* https://mrcoles.com/bookmarklet/
