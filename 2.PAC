function FindProxyForURL(url, host) {
    if (isPlainHostName(host)) return "DIRECT";
    host = host.toLowerCase();
    
    var directDomains = {
        "youtube.com": 1, "youtu.be": 1, "yt.be": 1, "googlevideo.com": 1, "ytimg.com": 1, "ggpht.com": 1, "gvt1.com": 1, "youtube-nocookie.com": 1, "youtube-ui.l.google.com": 1, "youtubeembeddedplayer.googleapis.com": 1, "youtube.googleapis.com": 1, "youtubei.googleapis.com": 1, "yt-video-upload.l.google.com": 1, "wide-youtube.l.google.com": 1
    };
    
    if (directDomains.hasOwnProperty(host)) return "DIRECT";
    
    return "PROXY 127.0.0.1:8881";
}
