function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerActiveSink: function() {
            return a
        },
        setActiveSinksChangeCallback: function() {
            return o
        },
        unregisterActiveSink: function() {
            return s
        }
    });
    let i = {},
        r = null;

    function a(e) {
        var t;
        let n = null !== (t = i[e]) && void 0 !== t ? t : 0;
        0 === n && (null == r || r(e, !0)), i[e] = n + 1
    }

    function s(e) {
        i[e]--, 0 === i[e] && (null == r || r(e, !1))
    }

    function o(e) {
        r = null != e ? e : null
    }
}