function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getToken: function() {
            return s
        },
        isAuthenticated: function() {
            return r
        },
        getArtForPath: function() {
            return a
        }
    });
    var i = n("171718");

    function s() {
        return i.default.getToken()
    }

    function r() {
        return null != s()
    }
    let a = e => null != e && /^\/developers/.test(e) ? n("501617") : null
}