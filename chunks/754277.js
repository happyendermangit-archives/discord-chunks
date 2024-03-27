function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("570140");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = !1,
        l = !1;
    class u extends(i = r.default.DeviceSettingsStore) {
        initialize(e) {
            null != e && (o = e)
        }
        isMuted() {
            return o
        }
        shouldPlay() {
            return l
        }
        getUserAgnosticState() {
            return o
        }
    }
    a(u, "displayName", "StageMusicStore"), a(u, "persistKey", "StageMusicStore"), t.default = new u(s.default, {
        STAGE_MUSIC_MUTE: function(e) {
            let {
                muted: t
            } = e;
            o = t, l = !1
        },
        STAGE_MUSIC_PLAY: function(e) {
            let {
                play: t
            } = e;
            l = t
        },
        VOICE_CHANNEL_SELECT: function() {
            l = !1
        }
    })
}