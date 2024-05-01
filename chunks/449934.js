function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getArtForPath: function() {
            return a
        },
        getToken: function() {
            return r
        },
        isAuthenticated: function() {
            return s
        }
    });
    var i = n("213919");

    function r() {
        return i.getToken()
    }

    function s() {
        return null != r()
    }
    let a = e => null != e && /^\/developers/.test(e) ? n("376665") : null
}