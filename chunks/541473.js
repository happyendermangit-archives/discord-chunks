function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return c
        }
    }), i("70102");
    var n = i("203288"),
        l = i("242740"),
        a = i("848848"),
        u = i("42203"),
        r = i("957255"),
        d = i("18494"),
        s = i("800762");
    class o extends Error {}
    async function c(t) {
        let {
            channelId: e,
            timeoutMs: i = 1e4,
            bypassChangeModal: c = !1
        } = t, E = u.default.getChannel(e);
        if (null == E) return !1;
        let _ = await l.default.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: c,
            channel: E,
            connected: s.default.isInChannel(e),
            needSubscriptionToAccess: (0, a.getChannelRoleSubscriptionStatus)(e, u.default, n.default, r.default).needSubscriptionToAccess
        });
        if (!_) return !1;
        let f = new Promise((t, n) => {
            let l = setTimeout(() => {
                n(new o("Joining voice channel has timed out."))
            }, i);
            d.default.addConditionalChangeListener(() => {
                let i = d.default.getVoiceChannelId();
                return i !== e || (clearTimeout(l), t(), !1)
            })
        });
        try {
            await f
        } catch (t) {
            if (t instanceof o) return !1;
            throw t
        }
        return !0
    }
}