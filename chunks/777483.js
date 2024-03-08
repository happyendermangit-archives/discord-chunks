function(e, t, n) {
    var i = {
        "./icon-file-acrobat.svg": "668973",
        "./icon-file-ae.svg": "124036",
        "./icon-file-ai.svg": "721569",
        "./icon-file-archive.svg": "644286",
        "./icon-file-audio.svg": "597346",
        "./icon-file-code.svg": "380499",
        "./icon-file-document.svg": "50617",
        "./icon-file-image.svg": "972094",
        "./icon-file-ps.svg": "92729",
        "./icon-file-sketch.svg": "335000",
        "./icon-file-spreadsheet.svg": "302872",
        "./icon-file-unknown.svg": "425914",
        "./icon-file-video.svg": "272477",
        "./icon-file-webcode.svg": "164059"
    };

    function l(e) {
        return n(a(e))
    }

    function a(e) {
        if (!n.o(i, e)) {
            var t = Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return i[e]
    }
    l.id = '"777483"', l.keys = function() {
        return Object.keys(i)
    }, l.resolve = a, e.exports = l
}