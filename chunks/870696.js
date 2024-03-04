function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("168067"),
        a = n("157246");
    let o = {
        soundpack: a.Soundpacks.CLASSIC
    };
    class l extends i.default.PersistedStore {
        initialize(e) {
            r.default.subscribe({
                location: "1"
            }, () => this.emitChange()), null != e && (o = e)
        }
        getState() {
            return o
        }
        getSoundpack() {
            var e;
            let {
                allowAprilFoolsSoundpack: t
            } = r.default.getCurrentConfig({
                location: "37bac2_1"
            }, {
                autoTrackExposure: !1
            });
            return t && (e = o.soundpack, Object.values(a.Soundpacks).includes(e)) ? o.soundpack : a.Soundpacks.CLASSIC
        }
    }
    l.displayName = "SoundpackStore", l.persistKey = "SoundpackStore";
    var u = new l(s.default, {
        SET_SOUNDPACK: function(e) {
            let {
                soundpack: t
            } = e;
            o = {
                soundpack: t
            }
        }
    })
}