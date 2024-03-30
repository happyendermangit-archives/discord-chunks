function(e, t, n) {
    var r = {
        "./spritesheet-emoji-32.png": "63215",
        "./spritesheet-emoji-40.png": "926720",
        "./spritesheet-emoji-48.png": "332936"
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
    o.id = '"273735"', o.keys = function() {
        return Object.keys(r)
    }, o.resolve = i, e.exports = o
}