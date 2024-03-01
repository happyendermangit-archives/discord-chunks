function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerActiveSink: function() {
            return s
        },
        unregisterActiveSink: function() {
            return a
        },
        setActiveSinksChangeCallback: function() {
            return o
        }
    });
    let i = {},
        r = null;

    function s(e) {
        var t;
        let n = null !== (t = i[e]) && void 0 !== t ? t : 0;
        0 === n && (null == r || r(e, !0)), i[e] = n + 1
    }

    function a(e) {
        i[e]--, 0 === i[e] && (null == r || r(e, !1))
    }

    function o(e) {
        r = null != e ? e : null
    }
}