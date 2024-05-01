function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMuted: function() {
            return o
        },
        getVolume: function() {
            return a
        },
        setMuted: function() {
            return l
        },
        setVolume: function() {
            return s
        }
    });
    var i = n("433517");
    let r = "MediaPlayerVolume";

    function a() {
        var e;
        let {
            volume: t
        } = null !== (e = i.Storage.get(r)) && void 0 !== e ? e : {};
        return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
    }

    function s(e) {
        i.Storage.set(r, {
            volume: e,
            muted: o()
        })
    }

    function o() {
        var e;
        let {
            muted: t
        } = null !== (e = i.Storage.get(r)) && void 0 !== e ? e : {};
        return "boolean" != typeof t && (t = !1), t
    }

    function l(e) {
        i.Storage.set(r, {
            volume: a(),
            muted: e
        })
    }
}