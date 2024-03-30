function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("19780"),
        s = n("358221");
    class a extends i.default {
        handleFocusParticipant() {
            let e = r.default.getChannelId();
            if (null != e) {
                var t, n;
                let i = s.default.getSelectedParticipantId(e),
                    a = s.default.getVideoParticipants(e);
                null === (n = r.default.getRTCConnection()) || void 0 === n || n.setSelectedParticipant(null === (t = a.find(e => e.id === i && !e.localVideoDisabled)) || void 0 === t ? void 0 : t.id)
            }
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "stores", i = new Map().set(s.default, this.handleFocusParticipant), n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new a
}