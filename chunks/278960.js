function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerActiveSink: function() {
            return i
        },
        setActiveSinksChangeCallback: function() {
            return u
        },
        unregisterActiveSink: function() {
            return a
        }
    });
    var r = {},
        o = null;

    function i(e) {
        var t, n = null !== (t = r[e]) && void 0 !== t ? t : 0;
        0 === n && (null == o || o(e, !0)), r[e] = n + 1
    }

    function a(e) {
        r[e]--, 0 === r[e] && (null == o || o(e, !1))
    }

    function u(e) {
        o = null != e ? e : null
    }
}