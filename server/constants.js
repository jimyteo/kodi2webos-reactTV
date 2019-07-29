var uuid = require('shortid');

function getMovies(id){
    return `{"id":"${id}","jsonrpc":"2.0","result":{"limits":{"end":10,"start":0,"total":1131},"movies":[{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2f7rXewel4dX2JwXwdqc63iSqGsvR.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fmvUvfgoN5U9U3riyqRXHiswtDGo.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/3 Nights In The Desert (2014) [1080p] [YTS.AG]/3.Nights.In.The.Desert.2014.1080p.BluRay.x264-[YTS.AG].mp4","label":"3 Nights in the Desert","movieid":"${uuid.generate()}","playcount":0,"rating":4.3000001907348632812,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fmvUvfgoN5U9U3riyqRXHiswtDGo.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2flAnqrVXhbYJLFSsrGz6KePDstRZ.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fyRbC0uRj1RDmF0JLon83il2dkR0.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/6 Dias 2017 (1080p) WWW.BLUDV.COM/6.Dias.2017.1080p.BluRay.6CH.x264.DUAL-WWW.BLUDV.COM.mkv","label":"6 Dias","movieid":"${uuid.generate()}","playcount":0,"rating":6.0999999046325683594,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fyRbC0uRj1RDmF0JLon83il2dkR0.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fwVTYlkKPKrljJfugXN7UlLNjtuJ.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fjR9tBigjRLIwDdycTc8LQZQYAtl.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/007 Contra Spectre 2015 BLUDV/007.Contra.Spectre.2016.720p.BluRay.5.1.x264.DUAL.BLUDV.mkv","label":"007 Contra Spectre","movieid":"${uuid.generate()}","playcount":0,"rating":6.3000001907348632812,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fjR9tBigjRLIwDdycTc8LQZQYAtl.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fx449jyGofRwbnkYgUnS9VLdPkmu.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2frnGR3EHkL4ryhQd50XBrtRrV8nq.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/10.000 AC  (2008) Blu Ray 720p Dublado/10.000 A.C  (2008) Blu Ray 720p Dublado  (Top Filmes Torrent).mp4","label":"10.000 A.C.","movieid":"${uuid.generate()}","playcount":0,"rating":5.0999999046325683594,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2frnGR3EHkL4ryhQd50XBrtRrV8nq.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fxnRPoFI7wzOYviw3PmoG94X2Lnc.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fkb3X943WMIJYVg4SOAyK0pmWL5D.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/12 Anos de Escravidão (2013)/12.Anos.De.Escravidao.BRRip.720p.Dublado.SenhoreSTorrenT.mkv","label":"12 Anos de Escravidão","movieid":"${uuid.generate()}","playcount":0,"rating":7.9000000953674316406,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fkb3X943WMIJYVg4SOAyK0pmWL5D.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fwacEk5YSNE41QeKseilyytksXmv.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fj18021qCeRi3yUBtqd2UFj1c0RQ.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/12 Heróis 2018 (1080p) WWW.BLUDV.COM/12.Heróis.2018.1080p.BluRay.6CH.x264.DUAL-WWW.BLUDV.COM.mkv","label":"12 Heróis","movieid":"${uuid.generate()}","playcount":0,"rating":4.9000000953674316406,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fj18021qCeRi3yUBtqd2UFj1c0RQ.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2flPhsKTtycmbp6bzJAG662Pd5U3N.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fbjOJFjUffRZQpNQ9g3yvc9F6LBM.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/The Purge Election Year 2016 WEBRip 720p Legendado - WWW.THEPIRATEFILMES.COM/The Purge Election Year 2016 WEBRip 720p Legendado - WWW.THEPIRATEFILMES.COM.mp4","label":"12 Horas Para Sobreviver - O Ano da Eleição","movieid":"${uuid.generate()}","playcount":0,"rating":6.0,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fbjOJFjUffRZQpNQ9g3yvc9F6LBM.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2f9zsbG1oNRlxR9wpvf3osq76TDXM.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fnCtKVLCh0h8QBsPO6P4drq2vPCR.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/12 Rounds 3 Lockdown (2015) [1080p]/12.Rounds.3.Lockdown.2015.1080p.BluRay.x264.[YTS.AG].mp4","label":"12 Rounds 3: Lockdown","movieid":"${uuid.generate()}","playcount":0,"rating":4.8000001907348632812,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fnCtKVLCh0h8QBsPO6P4drq2vPCR.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fcVIb8GGPzASoN9j9z1jIJD942oJ.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2f4gpW4MkRI0BB17GHOJzXq0WamDP.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/13 Horas Os Soldados Secretos de Benghazi (2016) 5.1 CH Dublado 1080p (By-LuanHarper)/13 Horas Os Soldados Secretos de Benghazi (2016) 5.1 CH Dublado 1080p (By-LuanHarper).mp4","label":"13 Horas: Os Soldados Secretos de Benghazi","movieid":"${uuid.generate()}","playcount":0,"rating":7.0,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2f4gpW4MkRI0BB17GHOJzXq0WamDP.jpg/"},{"art":{"fanart":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fA2rIVEV2jOzb4smx8hby1u9UwAm.jpg/","poster":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2f2L8ehd95eSW9x7KINYtZmRkAlrZ.jpg/"},"file":"smb://LACIE-CLOUDBOX/Family/Videos/Filmes/Mile.22.2018.1080p.BluRay.X264-AMIABLE[rarbg]/Mile.22.2018.1080p.BluRay.X264-AMIABLE.mkv","label":"22 Milhas","movieid":"${uuid.generate()}","playcount":0,"rating":5.8000001907348632812,"thumbnail":"image://http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2f2L8ehd95eSW9x7KINYtZmRkAlrZ.jpg/"}]}}`;
}

function getTVshows(id){
    return `{"id":"${id}","jsonrpc":"2.0","result":{"limits":{"end":10,"start":0,"total":18},"tvshows":[{"art":{"banner":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fgraphical%2f76461-g.jpg/","fanart":"image://http%3a%2f%2fthetvdb.com%2fbanners%2ffanart%2foriginal%2f76461-6.jpg/","poster":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fposters%2f76461-6.jpg/"},"fanart":"image://http%3a%2f%2fthetvdb.com%2fbanners%2ffanart%2foriginal%2f76461-6.jpg/","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/Família Dinossauro/","genre":["Children","Comedy","Fantasy"],"label":"A família dinossauro","originaltitle":"","playcount":0,"rating":8.1000003814697265625,"thumbnail":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fposters%2f76461-6.jpg/","title":"A família dinossauro","tvshowid":17,"year":1991},{"art":{"banner":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fgraphical%2f288926-g3.jpg/","fanart":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2ffanart%2foriginal%2f288926-1.jpg/","poster":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fposters%2f288926-3.jpg/"},"fanart":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2ffanart%2foriginal%2f288926-1.jpg/","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/Saúdem.Todos.o.Rei.Julien.1ª.Temporada.2015.720p.Dublado-WOLVERDONFILMES.COM/","genre":["Animation","Children"],"label":"All Hail King Julien","originaltitle":"","playcount":0,"rating":7.8000001907348632812,"thumbnail":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fposters%2f288926-3.jpg/","title":"All Hail King Julien","tvshowid":24,"year":2014},{"art":{},"fanart":"","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/As Aventuras do Gato de Botas/","genre":["Animation","Comedy"],"label":"As Aventuras do Gato de Botas","originaltitle":"","playcount":0,"rating":8.0,"thumbnail":"","title":"As Aventuras do Gato de Botas","tvshowid":26,"year":2015},{"art":{"banner":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fgraphical%2f101651-g.jpg/"},"fanart":"","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/Caverna do Dragão/","genre":[],"label":"Caverna do Dragão","originaltitle":"","playcount":0,"rating":10.0,"thumbnail":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fgraphical%2f101651-g.jpg/","title":"Caverna do Dragão","tvshowid":18,"year":1969},{"art":{"banner":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fgraphical%2f5cc9f74c2ddd3.jpg/","fanart":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2ffanart%2foriginal%2f5cbaf5ff5120b.jpg/","poster":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fposters%2f5cc12861c93e4.jpg/"},"fanart":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2ffanart%2foriginal%2f5cbaf5ff5120b.jpg/","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/Chernobyl/","genre":["Drama","Mini-Series"],"label":"Chernobyl","originaltitle":"","playcount":0,"rating":8.0,"thumbnail":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fposters%2f5cc12861c93e4.jpg/","title":"Chernobyl","tvshowid":29,"year":2019},{"art":{"banner":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fgraphical%2f284210-g2.jpg/","fanart":"image://http%3a%2f%2fthetvdb.com%2fbanners%2ffanart%2foriginal%2f284210-2.jpg/","poster":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fposters%2f284210-11.jpg/"},"fanart":"image://http%3a%2f%2fthetvdb.com%2fbanners%2ffanart%2foriginal%2f284210-2.jpg/","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/Colony/","genre":["Drama","Science-Fiction"],"label":"Colony","originaltitle":"","playcount":0,"rating":8.3000001907348632812,"thumbnail":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fposters%2f284210-11.jpg/","title":"Colony","tvshowid":1,"year":2016},{"art":{"banner":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fgraphical%2f121361-g22.jpg/","fanart":"image://http%3a%2f%2fthetvdb.com%2fbanners%2ffanart%2foriginal%2f121361-15.jpg/","poster":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fposters%2f121361-3.jpg/"},"fanart":"image://http%3a%2f%2fthetvdb.com%2fbanners%2ffanart%2foriginal%2f121361-15.jpg/","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/Game of Thrones/","genre":["Adventure","Drama","Fantasy"],"label":"Game of Thrones","originaltitle":"","playcount":0,"rating":9.5,"thumbnail":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fposters%2f121361-3.jpg/","title":"Game of Thrones","tvshowid":3,"year":2011},{"art":{"banner":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fgraphical%2f152831-g2.jpg/","fanart":"image://http%3a%2f%2fthetvdb.com%2fbanners%2ffanart%2foriginal%2f152831-3.jpg/","poster":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fposters%2f152831-11.jpg/"},"fanart":"image://http%3a%2f%2fthetvdb.com%2fbanners%2ffanart%2foriginal%2f152831-3.jpg/","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/Hora de Aventura/","genre":["Adventure","Animation","Children","Comedy","Family"],"label":"Hora de Aventura","originaltitle":"","playcount":0,"rating":9.6000003814697265625,"thumbnail":"image://http%3a%2f%2fthetvdb.com%2fbanners%2fposters%2f152831-11.jpg/","title":"Hora de Aventura","tvshowid":16,"year":2010},{"art":{"banner":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fgraphical%2f327417-g6.jpg/","fanart":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2ffanart%2foriginal%2f327417-1.jpg/","poster":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fposters%2f327417-11.jpg/"},"fanart":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2ffanart%2foriginal%2f327417-1.jpg/","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/La Casa de Papel/","genre":["Thriller"],"label":"La casa de papel","originaltitle":"","playcount":0,"rating":9.0,"thumbnail":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fposters%2f327417-11.jpg/","title":"La casa de papel","tvshowid":22,"year":2017},{"art":{"banner":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fgraphical%2f295685-g5.jpg/","fanart":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2ffanart%2foriginal%2f5b05ce9c77833.jpg/","poster":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fposters%2f295685-7.jpg/"},"fanart":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2ffanart%2foriginal%2f5b05ce9c77833.jpg/","file":"smb://LACIE-CLOUDBOX/Family/Videos/Séries/Lucifer/","genre":["Comedy","Crime","Fantasy"],"label":"Lucifer","originaltitle":"","playcount":0,"rating":8.3999996185302734375,"thumbnail":"image://http%3a%2f%2fwww.thetvdb.com%2fbanners%2fposters%2f295685-7.jpg/","title":"Lucifer","tvshowid":27,"year":2016}]}}`;
}

module.exports = {
    getMovies,
    getTVshows
}