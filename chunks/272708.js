function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return a
        }
    }), E("222007");
    var t = E("689988"),
        o = E("945956"),
        n = E("191145");
    class r extends t.default {
        handleFocusParticipant() {
            let e = o.default.getChannelId();
            if (null != e) {
                var _, E;
                let t = n.default.getSelectedParticipantId(e),
                    r = n.default.getVideoParticipants(e);
                null === (E = o.default.getRTCConnection()) || void 0 === E || E.setSelectedParticipant(null === (_ = r.find(e => e.id === t && !e.localVideoDisabled)) || void 0 === _ ? void 0 : _.id)
            }
        }
        constructor(...e) {
            super(...e), this.stores = new Map().set(n.default, this.handleFocusParticipant)
        }
    }
    var a = new r
}