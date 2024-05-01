function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("411104");
    var i = n("430198"),
        r = n("557135"),
        a = n("66999"),
        s = n("592125"),
        o = n("496675"),
        l = n("944486"),
        u = n("979651");
    class d extends Error {}
    async function _(e) {
        let {
            channelId: t,
            timeoutMs: n = 1e4,
            bypassChangeModal: _ = !1
        } = e, c = s.default.getChannel(t);
        if (null == c || !await r.default.handleVoiceConnect({
                bypassGuildIdCheck: !0,
                bypassChangeModal: _,
                channel: c,
                connected: u.default.isInChannel(t),
                needSubscriptionToAccess: (0, a.getChannelRoleSubscriptionStatus)(t, s.default, i.default, o.default).needSubscriptionToAccess
            })) return !1;
        let E = new Promise((e, i) => {
            let r = setTimeout(() => {
                i(new d("Joining voice channel has timed out."))
            }, n);
            l.default.addConditionalChangeListener(() => l.default.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1))
        });
        try {
            await E
        } catch (e) {
            if (e instanceof d) return !1;
            throw e
        }
        return !0
    }
}