function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerFetchedSupplementals: function() {
            return I
        },
        JoinSourceType: function() {
            return r
        },
        getJoinSourceTypeLabel: function() {
            return g
        },
        getIntegrationLabel: function() {
            return N
        },
        useGetIntegrationIconString: function() {
            return M
        },
        fetchMemberSupplemental: function() {
            return m
        }
    }), n("424973");
    var l, r, a, u, s, o, i = n("872717"),
        c = n("819855"),
        E = n("841098"),
        d = n("376556"),
        _ = n("572943"),
        T = n("49111"),
        f = n("782340");
    let S = {};

    function h(e, t) {
        return e + t
    }

    function R(e, t) {
        return t.map(t => e + t)
    }

    function p(e) {
        return e.split("-")[1]
    }(u = l || (l = {}))[u.FAILED = 0] = "FAILED", u[u.UNFETCHED = 1] = "UNFETCHED", u[u.PENDING = 2] = "PENDING", u[u.SUCCEEDED = 3] = "SUCCEEDED", u[u.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

    function A(e, t) {
        e.forEach(e => {
            S[e] = t
        })
    }

    function I(e, t) {
        t.forEach(t => (function(e, t, n) {
            S[e + t] = 3
        })(e, t, 3))
    }(s = r || (r = {}))[s.UNSPECIFIED = 0] = "UNSPECIFIED", s[s.BOT = 1] = "BOT", s[s.INTEGRATION = 2] = "INTEGRATION", s[s.DISCOVERY = 3] = "DISCOVERY", s[s.HUB = 4] = "HUB", s[s.INVITE = 5] = "INVITE", s[s.VANITY_URL = 6] = "VANITY_URL";
    let g = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
            case 2:
                return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
            case 3:
                return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
            case 4:
                return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
            case 5:
                return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
            case 6:
                if (null != t && !n) return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                    vanityUrl: t
                });
                return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
            default:
                return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
        }
    };
    (o = a || (a = {})).DISCORD = "discord", o.TWITCH = "twitch", o.YOUTUBE = "youtube", o.GUILD_SUBSCRIPTION = "guild_subscription";
    let N = e => {
            switch (e) {
                case "twitch":
                    return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                case "youtube":
                    return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                default:
                    return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
            }
        },
        M = e => {
            let t = d.default.get((0, _.useLegacyPlatformType)(e)),
                n = (0, E.default)();
            return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
        };

    function y(e) {
        return {
            userId: e.user_id,
            sourceInviteCode: e.source_invite_code,
            joinSourceType: e.join_source_type,
            inviterId: e.inviter_id,
            integrationType: e.integration_type
        }
    }
    async function m(e, t) {
        let n = R(e, t),
            l = n.filter(e => S[e] <= 1).map(p);
        if (0 === l.length) return [];
        A(n, 2);
        try {
            let t = await i.default.post({
                url: T.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                body: {
                    user_ids: l
                }
            });
            if (!Array.isArray(t.body)) return A(n, 0), [];
            let r = t.body.map(y),
                a = [];
            r.forEach(e => {
                let {
                    userId: t
                } = e;
                return a.push(t)
            });
            let u = R(e, a),
                s = l.filter(e => !a.includes(e)),
                o = R(e, s);
            return A(u, 3), A(o, 0), r
        } catch (e) {
            A(n, 0)
        }
        return []
    }
}