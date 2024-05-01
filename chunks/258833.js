function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("474873"),
        a = n("523746"),
        s = n("292959"),
        o = n("246946"),
        l = n("979651"),
        u = n("938475"),
        d = n("557177");
    let _ = (0, d.createSoundForPack)("call_calling", r.default.getSoundpack());
    class c extends i.default {
        handleSoundpackUpdate() {
            _.stop(), _ = (0, d.createSoundForPack)("call_calling", r.default.getSoundpack())
        }
        handleRingUpdate() {
            let e = a.default.getCalls().filter(e => e.ringing.length > 0 && l.default.getCurrentClientVoiceChannelId(null) === e.channelId),
                t = l.default.getCurrentClientVoiceChannelId(null);
            null != t && u.default.countVoiceStatesForChannel(t) >= 2 || !(e.length > 0) || s.default.isSoundDisabled("call_calling") || o.default.disableSounds ? _.stop() : _.loop()
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "stores", i = new Map().set(a.default, this.handleRingUpdate).set(s.default, this.handleRingUpdate).set(o.default, this.handleRingUpdate).set(l.default, this.handleRingUpdate).set(r.default, this.handleSoundpackUpdate), n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new c
}