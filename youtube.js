function gensokyo() {
    var name = 'PREF'
    var disableAutoplay = '&f5=30000'
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match === null) {
        document.cookie = 'PREF=' + disableAutoplay + ';  path=/; domain=.youtube.com';
        location.reload();
    } else if (match[2].includes('f5=20000') == true && match !== null) {
        var newstr = match[2].replace(/f5=20000/, "f5=30000");
        document.cookie = 'PREF=' + newstr + ';  path=/; domain=.youtube.com';
        location.reload();
    } else if (match[2].includes('f5=30000') == false && match !== null) {
        document.cookie = 'PREF=' + match[2] + disableAutoplay + ';  path=/; domain=.youtube.com';
        location.reload();
    } else if (match !== null) {
        clearInterval(refreshIntervalId);
        console.log("Yeah it worked!")
    }
}
// var refreshIntervalId = setInterval(gensokyo, 1000);
// window.addEventListener("yt-navigate-finish", gensokyo);
// window.addEventListener("spfdone", gensokyo);
