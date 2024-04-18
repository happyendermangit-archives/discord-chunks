function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("569545"),
        s = n("19780"),
        a = n("959457"),
        o = n("358221");
    class l extends i.default {
        handleFocusParticipant() {
            let e = s.default.getChannelId();
            if (null != e) {
                var t, n;
                let i = o.default.getSelectedParticipantId(e),
                    l = o.default.getVideoParticipants(e);
                null === (n = s.default.getRTCConnection()) || void 0 === n || n.setSelectedParticipant(null === (t = l.find(e => e.id === i && !e.localVideoDisabled)) || void 0 === t ? void 0 : t.id);
                let u = (0, r.isStreamKey)(i) ? i : null;
                a.default.setFocusedGoLiveStream(u)
            }
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "stores", i = new Map().set(o.default, this.handleFocusParticipant), n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new l
}