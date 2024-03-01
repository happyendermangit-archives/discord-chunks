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
        i = E("102985"),
        a = E("800762"),
        I = E("316133"),
        s = E("709681");
    let T = (0, s.createSoundForPack)("call_calling", o.default.getSoundpack());
    class S extends t.default {
        handleSoundpackUpdate() {
            T.stop(), T = (0, s.createSoundForPack)("call_calling", o.default.getSoundpack())
        }
        handleRingUpdate() {
            let e = n.default.getCalls().filter(e => e.ringing.length > 0 && a.default.getCurrentClientVoiceChannelId(null) === e.channelId),
                _ = a.default.getCurrentClientVoiceChannelId(null),
                E = null != _ && I.default.countVoiceStatesForChannel(_) >= 2;
            E || !(e.length > 0) || r.default.isSoundDisabled("call_calling") || i.default.disableSounds ? T.stop() : T.loop()
        }
        constructor(...e) {
            super(...e), this.stores = new Map().set(n.default, this.handleRingUpdate).set(r.default, this.handleRingUpdate).set(i.default, this.handleRingUpdate).set(a.default, this.handleRingUpdate).set(o.default, this.handleSoundpackUpdate)
        }
    }
    var N = new S
}