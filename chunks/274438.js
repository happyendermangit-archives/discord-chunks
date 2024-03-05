function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var a = n("446674"),
        r = n("913144");
    let s = !1,
        i = !1;
    class l extends a.default.DeviceSettingsStore {
        initialize(e) {
            null != e && (s = e)
        }
        isMuted() {
            return s
        }
        shouldPlay() {
            return i
        }
        getUserAgnosticState() {
            return s
        }
    }
    l.displayName = "StageMusicStore", l.persistKey = "StageMusicStore";
    var u = new l(r.default, {
        STAGE_MUSIC_MUTE: function(e) {
            let {
                muted: t
            } = e;
            s = t, i = !1
        },
        STAGE_MUSIC_PLAY: function(e) {
            let {
                play: t
            } = e;
            i = t
        },
        VOICE_CHANNEL_SELECT: function() {
            i = !1
        }
    })
}