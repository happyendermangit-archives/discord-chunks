function(e, t, n) {
    var i = {
        "./spritesheet-emoji-32.png": "63215",
        "./spritesheet-emoji-40.png": "926720",
        "./spritesheet-emoji-48.png": "332936"
    };

    function r(e) {
        return n(s(e))
    }

    function s(e) {
        if (!n.o(i, e)) {
            var t = Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return i[e]
    }
    r.id = '"273735"', r.keys = function() {
        return Object.keys(i)
    }, r.resolve = s, e.exports = r
}