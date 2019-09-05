

# tiddlyWiki with GitHub backend

Uses built-in github saver

Gives you a bookmarklet to retrieve tiddlyWiki index.html from github. (bookmarklets are just javascript programs stored as a bookmark).

Thus, you can just click on a bookmark, get to you tiddlyWiki and it can be saved (and autosaved) back to GitHub.

## Details and Usage


Click on the bookmarklet bookmark/button. 

## Step-by-Step How To

### TiddlyWiki

### GitHub Saver

* go to https://github.com and login
* Under your user icon, select Settings, then Developer Settings
* In the Personal Authentication Token page, Create a new token
* Once created, immediately copy this somewhere - the text of the PAT needs to be copied in to the GitHub save settings and the bookmarklet
* Note that once you refresh the page, you aren't allowed to see the PAT clear-text. However, it is trivial to make new PATs as needed (and delete old PATS that aren't needed).

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

Now, find the bookmark and click on it.


## Motivation and notes

## Thanks

* https://chriszarate.github.io/bookmarkleter/  - use babel minify (auto removes comments...)
* https://mrcoles.com/bookmarklet/
