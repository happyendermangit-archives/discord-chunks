function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return N
        }
    }), E("222007");
    var t = E("689988"),
        o = E("870696"),
        n = E("950104"),
        r = E("385649"),
        a = E("102985"),
        i = E("800762"),
        I = E("316133"),
        T = E("709681");
    let s = (0, T.createSoundForPack)("call_calling", o.default.getSoundpack());
    class S extends t.default {
        handleSoundpackUpdate() {
            s.stop(), s = (0, T.createSoundForPack)("call_calling", o.default.getSoundpack())
        }
        handleRingUpdate() {
            let e = n.default.getCalls().filter(e => e.ringing.length > 0 && i.default.getCurrentClientVoiceChannelId(null) === e.channelId),
                _ = i.default.getCurrentClientVoiceChannelId(null),
                E = null != _ && I.default.countVoiceStatesForChannel(_) >= 2;
            E || !(e.length > 0) || r.default.isSoundDisabled("call_calling") || a.default.disableSounds ? s.stop() : s.loop()
        }
        constructor(...e) {
            super(...e), this.stores = new Map().set(n.default, this.handleRingUpdate).set(r.default, this.handleRingUpdate).set(a.default, this.handleRingUpdate).set(i.default, this.handleRingUpdate).set(o.default, this.handleSoundpackUpdate)
        }
    }
    var N = new S
}