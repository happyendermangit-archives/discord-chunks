function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMuted: function() {
            return u
        },
        getVolume: function() {
            return i
        },
        setMuted: function() {
            return s
        },
        setVolume: function() {
            return a
        }
    });
    var r = n("242880"),
        o = "MediaPlayerVolume";

    function i() {
        var e, t = (null !== (e = r.Storage.get(o)) && void 0 !== e ? e : {}).volume;
        return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
    }

    function a(e) {
        r.Storage.set(o, {
            volume: e,
            muted: u()
        })
    }

    function u() {
        var e, t = (null !== (e = r.Storage.get(o)) && void 0 !== e ? e : {}).muted;
        return "boolean" != typeof t && (t = !1), t
    }

    function s(e) {
        r.Storage.set(o, {
            volume: i(),
            muted: e
        })
    }
}