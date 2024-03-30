function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        JoinSourceType: function() {
            return r
        },
        fetchMemberSupplemental: function() {
            return g
        },
        getIntegrationLabel: function() {
            return p
        },
        getJoinSourceTypeLabel: function() {
            return O
        },
        registerFetchedSupplementals: function() {
            return N
        },
        useGetIntegrationIconString: function() {
            return R
        }
    }), n("653041");
    var i, r, s, a, o, l, u = n("544891"),
        d = n("780384"),
        _ = n("410030"),
        c = n("726542"),
        E = n("122021"),
        I = n("981631"),
        T = n("689938");
    let f = {};

    function S(e, t) {
        return e + t
    }

    function h(e, t) {
        return t.map(t => e + t)
    }

    function A(e) {
        return e.split("-")[1]
    }(a = i || (i = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

    function m(e, t) {
        e.forEach(e => {
            f[e] = t
        })
    }

    function N(e, t) {
        t.forEach(t => (function(e, t, n) {
            f[e + t] = 3
        })(e, t, 3))
    }(o = r || (r = {}))[o.UNSPECIFIED = 0] = "UNSPECIFIED", o[o.BOT = 1] = "BOT", o[o.INTEGRATION = 2] = "INTEGRATION", o[o.DISCOVERY = 3] = "DISCOVERY", o[o.HUB = 4] = "HUB", o[o.INVITE = 5] = "INVITE", o[o.VANITY_URL = 6] = "VANITY_URL";
    let O = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
            case 2:
                return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
            case 3:
                return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
            case 4:
                return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
            case 5:
                return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
            case 6:
                if (null != t && !n) return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                    vanityUrl: t
                });
                return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
            default:
                return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
        }
    };
    (l = s || (s = {})).DISCORD = "discord", l.TWITCH = "twitch", l.YOUTUBE = "youtube", l.GUILD_SUBSCRIPTION = "guild_subscription";
    let p = e => {
            switch (e) {
                case "twitch":
                    return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                case "youtube":
                    return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                default:
                    return T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
            }
        },
        R = e => {
            let t = c.default.get((0, E.useLegacyPlatformType)(e)),
                n = (0, _.default)();
            return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, d.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
        };

    function C(e) {
        return {
            userId: e.user_id,
            sourceInviteCode: e.source_invite_code,
            joinSourceType: e.join_source_type,
            inviterId: e.inviter_id,
            integrationType: e.integration_type
        }
    }
    async function g(e, t) {
        let n = h(e, t),
            i = n.filter(e => f[e] <= 1).map(A);
        if (0 === i.length) return [];
        m(n, 2);
        try {
            let t = await u.HTTP.post({
                url: I.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                body: {
                    user_ids: i
                }
            });
            if (!Array.isArray(t.body)) return m(n, 0), [];
            let r = t.body.map(C),
                s = [];
            r.forEach(e => {
                let {
                    userId: t
                } = e;
                return s.push(t)
            });
            let a = h(e, s),
                o = i.filter(e => !s.includes(e)),
                l = h(e, o);
            return m(a, 3), m(l, 0), r
        } catch (e) {
            m(n, 0)
        }
        return []
    }
}