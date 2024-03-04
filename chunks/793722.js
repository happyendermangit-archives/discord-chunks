function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerActiveSink: function() {
            return r
        },
        unregisterActiveSink: function() {
            return a
        },
        setActiveSinksChangeCallback: function() {
            return o
        }
    });
    let i = {},
        s = null;

    function r(e) {
        var t;
        let n = null !== (t = i[e]) && void 0 !== t ? t : 0;
        0 === n && (null == s || s(e, !0)), i[e] = n + 1
    }

    function a(e) {
        i[e]--, 0 === i[e] && (null == s || s(e, !1))
    }

    function o(e) {
        s = null != e ? e : null
    }
}