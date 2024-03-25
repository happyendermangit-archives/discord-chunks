function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerFetchedSupplementals: function() {
            return N
        },
        JoinSourceType: function() {
            return r
        },
        getJoinSourceTypeLabel: function() {
            return T
        },
        getIntegrationLabel: function() {
            return g
        },
        useGetIntegrationIconString: function() {
            return S
        },
        fetchMemberSupplemental: function() {
            return R
        }
    }), n("424973");
    var i, r, s, l, a, o, u = n("872717"),
        c = n("819855"),
        d = n("841098"),
        f = n("376556"),
        h = n("572943"),
        E = n("49111"),
        v = n("782340");
    let C = {};

    function p(e, t) {
        return e + t
    }

    function _(e, t) {
        return t.map(t => e + t)
    }

    function I(e) {
        return e.split("-")[1]
    }(l = i || (i = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

    function m(e, t) {
        e.forEach(e => {
            C[e] = t
        })
    }

    function N(e, t) {
        t.forEach(t => (function(e, t, n) {
            C[e + t] = 3
        })(e, t, 3))
    }(a = r || (r = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.BOT = 1] = "BOT", a[a.INTEGRATION = 2] = "INTEGRATION", a[a.DISCOVERY = 3] = "DISCOVERY", a[a.HUB = 4] = "HUB", a[a.INVITE = 5] = "INVITE", a[a.VANITY_URL = 6] = "VANITY_URL";
    let T = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
            case 2:
                return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
            case 3:
                return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
            case 4:
                return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
            case 5:
                return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
            case 6:
                if (null != t && !n) return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                    vanityUrl: t
                });
                return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
            default:
                return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
        }
    };
    (o = s || (s = {})).DISCORD = "discord", o.TWITCH = "twitch", o.YOUTUBE = "youtube", o.GUILD_SUBSCRIPTION = "guild_subscription";
    let g = e => {
            switch (e) {
                case "twitch":
                    return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                case "youtube":
                    return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                default:
                    return v.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
            }
        },
        S = e => {
            let t = f.default.get((0, h.useLegacyPlatformType)(e)),
                n = (0, d.default)();
            return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
        };

    function M(e) {
        return {
            userId: e.user_id,
            sourceInviteCode: e.source_invite_code,
            joinSourceType: e.join_source_type,
            inviterId: e.inviter_id,
            integrationType: e.integration_type
        }
    }
    async function R(e, t) {
        let n = _(e, t),
            i = n.filter(e => C[e] <= 1).map(I);
        if (0 === i.length) return [];
        m(n, 2);
        try {
            let t = await u.HTTP.post({
                url: E.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                body: {
                    user_ids: i
                }
            });
            if (!Array.isArray(t.body)) return m(n, 0), [];
            let r = t.body.map(M),
                s = [];
            r.forEach(e => {
                let {
                    userId: t
                } = e;
                return s.push(t)
            });
            let l = _(e, s),
                a = i.filter(e => !s.includes(e)),
                o = _(e, a);
            return m(l, 3), m(o, 0), r
        } catch (e) {
            m(n, 0)
        }
        return []
    }
}