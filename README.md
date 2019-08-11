# kodi2webos ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=MX8LMBWFQY734&item_name=Donations+to+fund+application+development.&currency_code=USD&source=url)
A Kodi client for LG Smart TVs with webOS - experimental!!

## Donations to continue...
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=MX8LMBWFQY734&item_name=Donations+to+fund+application+development.&currency_code=USD&source=url)

## inspirations, tools, and more...
websocket-as-promised https://github.com/vitalets/websocket-as-promised

Kodi Web Interface Arnold https://github.com/scholtzm/arnold

React-TV https://github.com/raphamorim/react-tv

Developing for TVs with React-TV https://medium.com/@raphamorim/developing-for-tvs-with-react-tv-b5b5204964ef

React Key Navigation https://github.com/dead/react-key-navigation/

Pass the Remote: User Input on TV Devices https://medium.com/netflix-techblog/pass-the-remote-user-input-on-tv-devices-923f6920c9a8

How to implement Netflix slider with React and hooks https://levelup.gitconnected.com/how-to-implement-netflix-slider-with-react-and-hooks-bdb9b99d1ce4?gi=521ebd0d4dee

## First of all - configure!
Open src/config/index.js and edit.

Set the host and ports from your local Kodi installation

we use websockets (websocket-as-promised) to get all data, instead of "http request/get" due to CORS restrictions

See JSON-RPC-API https://kodi.wiki/view/JSON-RPC_API

if you want to emulate a local server, for testing:

$ cd /server

$ yarn install

$ node server.js

by default the server will listen on localhost and port 9090. Edit if necessary.

Notes:
1) The server will always respond with the same reply as long as the message sent contains at least one "id" and one method called "VideoLibrary.GetMovies" or "VideoLibrary.GetTVShows".

Example:
 >> send >> {"id":"CPTsgg5pv","jsonrpc":"2.0","method":"VideoLibrary.GetMovies","params":{"limits":{"start":0,"end":5},"properties":["art","genre","director","trailer","tagline","plot","plotoutline","title","originaltitle","lastplayed","runtime","year","playcount","rating","thumbnail","file"],"sort":{"method":"sorttitle","ignorearticle":true}}}
 
 >> receive >> {"id":"CPTsgg5pv","jsonrpc":"2.0","result":{"limits":{"end":10,"start":0,"total":1131},"movies":[
 {"art":{"fanart":"image:....jpg/","poster":"image://....jpg/"},"file":"smb://....mp4","label":"3 Nights in the Desert","movieid":"OTU9VdxnT","playcount":0,"rating":4.3000001907348632812,"thumbnail":"image://....jpg/"},
 {"art":{"fanart":"image://....jpg/","poster":"image://....jpg/"},"file":"smb://....mkv","label":"6 Dias","movieid":"6sB6Ff1MIG","playcount":0,"rating":6.0999999046325683594,"thumbnail":"image://....jpg/"}, ....}]}}
 

2) The websocket implementation will ensure that the reply message has the same "id" as the sent message, otherwise it will be discarded.

3) In the configuration file, change the "is_static" variable to "true" to resolve all external image urls to a static image.

## Install and run...

$ git clone

$ cd kodi2webos

$ yarn install

$ yarn run

To run on an emulator or smart tv, see: http://webostv.developer.lge.com/sdk/installation/#
Follow the steps in the article: https://medium.com/@raphamorim/developing-for-tvs-with-react-tv-b5b5204964ef

## Goal!

develop something that looks like this:

![alt text](https://img.ibxk.com.br/2019/03/22/netflix-22141026148281.jpg)

## Screenshots

![](https://github.com/valverde-marcelo/kodi2webos/raw/youtube-react-tv-branch/doc/LG-webOS-TV-Emulator-4.0.0-_Executando_-Oracle-VM-VirtualBox-10_08_2019-21_29_52.gif)

## WIP
- [x] websocket send/request communication
  - [x] list movies/tvshows
  - [x] works in browser
  - [x] works in webos
- [ ] Design interface
  - [ ] Sections: Movies | TV Shows | Settings
  - [ ] Horizontal List - Categories (Recently added, in progress, genres...)
  - [ ] Vertical List
  - [ ] Movies | TV Shows details
  - [ ] Background image
  - [ ] Create a Video Player
- [ ] Test key navigation
- [ ] Publish to LG Store 
- [ ] Documentation
