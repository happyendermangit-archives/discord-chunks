function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("82085"),
        a = n("703656"),
        s = n("981631");

    function o(e) {
        var t, n, i;
        let {
            guild: o
        } = e.invite;
        if (null != o && (null == o ? void 0 : null === (t = o.features) || void 0 === t ? void 0 : t.includes(s.GuildFeatures.HUB))) {
            r.default.onOpenHubInvite(e.invite);
            return
        }
        null != o && (null == o ? void 0 : null === (n = o.features) || void 0 === n ? void 0 : n.includes(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == o ? void 0 : null === (i = o.features) || void 0 === i ? void 0 : i.includes(s.GuildFeatures.PREVIEW_ENABLED)) && (0, a.transitionTo)(s.Routes.GUILD_MEMBER_VERIFICATION(o.id, e.invite.code))
    }
    class l extends i.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                INVITE_ACCEPT_SUCCESS: o
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