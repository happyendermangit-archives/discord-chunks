function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getArtForPath: function() {
            return s
        },
        getToken: function() {
            return r
        },
        isAuthenticated: function() {
            return a
        }
    });
    var i = n("213919");

    function r() {
        return i.getToken()
    }

    function a() {
        return null != r()
    }
    let s = e => null != e && /^\/developers/.test(e) ? n("376665") : null
}