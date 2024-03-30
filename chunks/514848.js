function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getArtForPath: function() {
            return a
        },
        getToken: function() {
            return o
        },
        isAuthenticated: function() {
            return i
        }
    });
    var r = n("173977");

    function o() {
        return r.getToken()
    }

    function i() {
        return null != o()
    }
    var a = function(e) {
        return null != e && /^\/developers/.test(e) ? n("376665") : null
    }
}