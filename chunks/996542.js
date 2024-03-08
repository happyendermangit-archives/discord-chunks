function(e, t, n) {
    var i = {
        "./spritesheet-emoji-32.png": "61469",
        "./spritesheet-emoji-40.png": "642437",
        "./spritesheet-emoji-48.png": "958327"
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
    l.id = '"996542"', l.keys = function() {
        return Object.keys(i)
    }, l.resolve = a, e.exports = l
}