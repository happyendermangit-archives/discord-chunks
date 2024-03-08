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
    var i = n("95410");
    let l = "MediaPlayerVolume";

    function a() {
        var e;
        let {
            volume: t
        } = null !== (e = i.default.get(l)) && void 0 !== e ? e : {};
        return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
    }

    function s(e) {
        i.default.set(l, {
            volume: e,
            muted: r()
        })
    }

    function r() {
        var e;
        let {
            muted: t
        } = null !== (e = i.default.get(l)) && void 0 !== e ? e : {};
        return "boolean" != typeof t && (t = !1), t
    }

    function o(e) {
        i.default.set(l, {
            volume: a(),
            muted: e
        })
    }
}