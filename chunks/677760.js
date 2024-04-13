function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    }), n("47120");
    var s, a, i = n("735250"),
        l = n("470079"),
        r = n("718017"),
        u = n("442837"),
        o = n("481060"),
        d = n("447543"),
        c = n("587444"),
        f = n("393238"),
        E = n("108427"),
        I = n("314897"),
        h = n("701190"),
        _ = n("819570"),
        p = n("626135"),
        T = n("768581"),
        m = n("823379"),
        N = n("264229"),
        g = n("230224"),
        A = n("617730"),
        S = n("258356"),
        v = n("981631"),
        O = n("689938"),
        C = n("164027");

    function R() {
        return (0, i.jsx)("div", {
            className: C.centerFlex,
            children: (0, i.jsx)(o.Spinner, {})
        })
    }(a = s || (s = {}))[a.LOADING = 0] = "LOADING", a[a.DETAILS = 1] = "DETAILS", a[a.ERROR = 2] = "ERROR";
    let x = e => {
        let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
        if (null == e || null == e.state || t) return 0;
        let n = e.state;
        switch (n) {
            case v.InviteStates.RESOLVED:
            case v.InviteStates.ACCEPTED:
            case v.InviteStates.APP_NOT_OPENED:
            case v.InviteStates.APP_OPENED:
            case v.InviteStates.ACCEPTING:
            case v.InviteStates.APP_OPENING:
                return 1;
            case v.InviteStates.EXPIRED:
            case v.InviteStates.BANNED:
            case v.InviteStates.ERROR:
                return 2;
            case v.InviteStates.RESOLVING:
                return 0;
            default:
                (0, m.assertNever)(n)
        }
    };

    function D(e) {
        let {
            invite: t,
            onAcceptInvite: n
        } = e;
        if ((null == t ? void 0 : t.state) === v.InviteStates.BANNED) return (0, i.jsx)(c.InvalidMobileCodedLinkInner, {
            text: O.default.Messages.AUTH_BANNED_INVITE_BODY,
            buttonCta: O.default.Messages.INVITE_INVALID_CTA,
            onClick: n
        });
        return (0, i.jsx)(c.InvalidMobileCodedLinkInner, {
            text: O.default.Messages.INVITE_INVALID_ERROR,
            buttonCta: O.default.Messages.INVITE_INVALID_CTA,
            onClick: n
        })
    }

    function P(e) {
        let {
            children: t,
            cardChildren: n,
            startAnimHeightPx: s,
            innerStyle: a,
            ...u
        } = e, {
            invite: o
        } = u, [d, c] = l.useState(x(o)), {
            ref: E,
            height: I
        } = (0, f.default)(), h = (0, r.useSpring)({
            height: null != I && 0 !== I ? "".concat(I, "px") : "".concat(s, "px"),
            config: r.config.stiff
        });
        return l.useEffect(() => {
            let e = x(o);
            e !== d && c(e)
        }, [o, d]), (0, i.jsxs)(r.animated.div, {
            className: C.inviteCard,
            style: h,
            children: [(0, i.jsx)(r.animated.div, {
                className: C.inviteChildContainer,
                style: h,
                children: (0, i.jsx)("section", {
                    ref: E,
                    className: null == a ? void 0 : a(d),
                    children: t(d)
                })
            }), n]
        })
    }

    function L(e) {
        let {
            invite: t
        } = e;
        if (null == t || !(0, g.isEnhancedCommunityInvite)(t)) return null;
        let n = e => {
            if (null == t) return null;
            if (1 === e) return (0, i.jsx)(S.GuildInfoCard, {
                invite: t
            });
            return null
        };
        return (0, i.jsx)(P, {
            startAnimHeightPx: 0,
            innerStyle: () => C.guildInfoInner,
            ...e,
            children: e => n(e)
        })
    }

    function M(e) {
        let {
            invite: t
        } = e, n = n => {
            if (null == t) return (0, i.jsx)(R, {});
            switch (n) {
                case 1:
                    return (0, i.jsx)(A.default, {
                        ...e,
                        invite: t
                    });
                case 2:
                    return (0, i.jsx)(D, {
                        ...e,
                        invite: t
                    });
                default:
                    return (0, i.jsx)(R, {})
            }
        }, s = {
            1: C.inviteCardInner,
            2: C.inviteCardInnerError,
            0: C.inviteCardInnerLoading
        };
        return (0, i.jsx)(P, {
            startAnimHeightPx: 200,
            innerStyle: e => s[e],
            ...e,
            children: e => n(e)
        })
    }

    function b(e) {
        let {
            invite: t,
            onAcceptInvite: n
        } = e, {
            guild: s
        } = null != t ? t : {}, a = {};
        if ((null == s ? void 0 : s.splash) != null) {
            let e = T.default.getGuildSplashURL({
                id: s.id,
                splash: s.splash
            });
            null != e && (a.backgroundImage = "url(".concat(e, ")"), a.backgroundSize = "cover")
        }
        return (0, i.jsxs)(_.default, {
            theme: v.ThemeTypes.DARK,
            className: C.splashBackground,
            style: a,
            contentClassName: C.centerAuthBoxContent,
            children: [(0, i.jsx)(M, {
                ...e,
                onAcceptInvite: n
            }), (0, i.jsx)(L, {
                ...e
            })]
        })
    }

    function j(e) {
        let {
            inviteKey: t,
            transitionTo: n
        } = e, s = (0, u.useStateFromStores)([h.default], () => h.default.getInvite(t));
        return l.useEffect(() => {
            (0, E.trackAppUIViewed)("invite_mobile")
        }, []), l.useEffect(() => {
            null != s && s.state === v.InviteStates.RESOLVED && p.default.track(v.AnalyticEvents.INVITE_VIEWED, {
                invite_code: t,
                friends_count: null == s ? void 0 : s.friends_count
            }, {
                flush: !0
            })
        }, [s, t]), (0, i.jsx)(b, {
            invite: s,
            onAcceptInvite: e => {
                ! function(e, t, n) {
                    var s, a, i;
                    null == e || e.preventDefault(), p.default.track(v.AnalyticEvents.INVITE_APP_OPENED, {
                        invite_code: (0, N.parseInviteCodeFromInviteKey)(t),
                        guild_id: null == n ? void 0 : null === (s = n.guild) || void 0 === s ? void 0 : s.id,
                        channel_id: null == n ? void 0 : null === (a = n.channel) || void 0 === a ? void 0 : a.id,
                        inviter_id: null == n ? void 0 : null === (i = n.inviter) || void 0 === i ? void 0 : i.id
                    });
                    let l = null != n && n.state !== v.InviteStates.EXPIRED && n.state !== v.InviteStates.BANNED ? t : void 0,
                        r = I.default.getFingerprint(),
                        u = null != r ? r : I.default.getId(),
                        o = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                    d.default.openApp(l, void 0, u, void 0, o)
                }(e, t, s)
            },
            transitionTo: n
        })
    }
}