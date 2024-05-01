function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        a = n("570140"),
        s = n("657254"),
        o = n("871465");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = {
        soundpack: o.Soundpacks.CLASSIC
    };
    class d extends(i = r.default.PersistedStore) {
        initialize(e) {
            s.default.subscribe({
                location: "1"
            }, () => this.emitChange()), null != e && (u = e)
        }
        getState() {
            return u
        }
        getSoundpack() {
            var e;
            let {
                allowAprilFoolsSoundpack: t
            } = s.default.getCurrentConfig({
                location: "37bac2_1"
            }, {
                autoTrackExposure: !1
            });
            return t && (e = u.soundpack, Object.values(o.Soundpacks).includes(e)) ? u.soundpack : o.Soundpacks.CLASSIC
        }
    }
    l(d, "displayName", "SoundpackStore"), l(d, "persistKey", "SoundpackStore"), t.default = new d(a.default, {
        SET_SOUNDPACK: function(e) {
            let {
                soundpack: t
            } = e;
            u = {
                soundpack: t
            }
        }
    })
}