function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getVolume: function() {
            return a
        },
        setVolume: function() {
            return s
        },
        getMuted: function() {
            return r
        },
        setMuted: function() {
            return o
        }
    });
    var l = n("95410");
    let i = "MediaPlayerVolume";

    function a() {
        var e;
        let {
            volume: t
        } = null !== (e = l.default.get(i)) && void 0 !== e ? e : {};
        return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
    }

    function s(e) {
        l.default.set(i, {
            volume: e,
            muted: r()
        })
    }

    function r() {
        var e;
        let {
            muted: t
        } = null !== (e = l.default.get(i)) && void 0 !== e ? e : {};
        return "boolean" != typeof t && (t = !1), t
    }

    function o(e) {
        l.default.set(i, {
            volume: a(),
            muted: e
        })
    }
}