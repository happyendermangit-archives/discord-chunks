function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {},
            n = e.stopCallback;
        return e.stopCallback = function(e, r, a, i) {
            return !t[a] && !t[i] && n(e, r, a)
        }, e.bindGlobal = function(e, n, r) {
            if (this.bind(e, n, r), e instanceof Array) {
                for (var a = 0; a < e.length; a++) t[e[a]] = !0;
                return
            }
            t[e] = !0
        }, e
    }
}