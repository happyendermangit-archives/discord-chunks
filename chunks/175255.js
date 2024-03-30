function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("336197"),
        s = n("341298"),
        a = n("558921"),
        o = n("981631");
    class l extends i.default {
        async handleChannelCreate(e) {
            let {
                channel: t
            } = e;
            (0, s.isEligibleForMidjourneyRedirect)(t) && (await (0, s.hasRedirectedToGuild)(a.MIDJOURNEY_GUILD_ID), (0, r.default)(o.Routes.CHANNEL(null, t.id)))
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                CHANNEL_CREATE: this.handleChannelCreate
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new l
}