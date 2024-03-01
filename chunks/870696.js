function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("446674"),
        u = n("913144"),
        a = n("168067"),
        i = n("157246");
    let o = {
        soundpack: i.Soundpacks.CLASSIC
    };
    class d extends s.default.PersistedStore {
        initialize(e) {
            a.default.subscribe({
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
            } = a.default.getCurrentConfig({
                location: "37bac2_1"
            }, {
                autoTrackExposure: !1
            });
            return t && (e = o.soundpack, Object.values(i.Soundpacks).includes(e)) ? o.soundpack : i.Soundpacks.CLASSIC
        }
    }
    d.displayName = "SoundpackStore", d.persistKey = "SoundpackStore";
    var c = new d(u.default, {
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