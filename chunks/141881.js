function(e, t, n) {
    var r = {
        "./icon-file-acrobat.svg": "621680",
        "./icon-file-ae.svg": "725345",
        "./icon-file-ai.svg": "673762",
        "./icon-file-archive.svg": "788525",
        "./icon-file-audio.svg": "331906",
        "./icon-file-code.svg": "894990",
        "./icon-file-document.svg": "674720",
        "./icon-file-image.svg": "109837",
        "./icon-file-ps.svg": "504514",
        "./icon-file-sketch.svg": "392807",
        "./icon-file-spreadsheet.svg": "291410",
        "./icon-file-unknown.svg": "516083",
        "./icon-file-video.svg": "430539",
        "./icon-file-webcode.svg": "343305"
    };

    function o(e) {
        return n(i(e))
    }

    function i(e) {
        if (!n.o(r, e)) {
            var t = Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
    }
    o.id = '"141881"', o.keys = function() {
        return Object.keys(r)
    }, o.resolve = i, e.exports = o
}