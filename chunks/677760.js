function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return b
        }
    }), s("47120");
    var n, a, l = s("735250"),
        i = s("470079"),
        r = s("718017"),
        u = s("442837"),
        o = s("481060"),
        d = s("447543"),
        c = s("587444"),
        f = s("393238"),
        E = s("108427"),
        I = s("314897"),
        _ = s("701190"),
        h = s("819570"),
        p = s("626135"),
        T = s("768581"),
        N = s("823379"),
        g = s("264229"),
        m = s("230224"),
        A = s("617730"),
        S = s("258356"),
        v = s("981631"),
        C = s("689938"),
        O = s("164027");

    function R() {
        return (0, l.jsx)("div", {
            className: O.centerFlex,
            children: (0, l.jsx)(o.Spinner, {})
        })
    }(a = n || (n = {}))[a.LOADING = 0] = "LOADING", a[a.DETAILS = 1] = "DETAILS", a[a.ERROR = 2] = "ERROR";
    let x = e => {
        let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
        if (null == e || null == e.state || t) return 0;
        let s = e.state;
        switch (s) {
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
                (0, N.assertNever)(s)
        }
    };

    function D(e) {
        let {
            invite: t,
            onAcceptInvite: s
        } = e;
        if ((null == t ? void 0 : t.state) === v.InviteStates.BANNED) return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
            text: C.default.Messages.AUTH_BANNED_INVITE_BODY,
            buttonCta: C.default.Messages.INVITE_INVALID_CTA,
            onClick: s
        });
        return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
            text: C.default.Messages.INVITE_INVALID_ERROR,
            buttonCta: C.default.Messages.INVITE_INVALID_CTA,
            onClick: s
        })
    }

    function L(e) {
        let {
            children: t,
            cardChildren: s,
            startAnimHeightPx: n,
            innerStyle: a,
            ...u
        } = e, {
            invite: o
        } = u, [d, c] = i.useState(x(o)), {
            ref: E,
            height: I
        } = (0, f.default)(), _ = (0, r.useSpring)({
            height: null != I && 0 !== I ? "".concat(I, "px") : "".concat(n, "px"),
            config: r.config.stiff
        });
        return i.useEffect(() => {
            let e = x(o);
            e !== d && c(e)
        }, [o, d]), (0, l.jsxs)(r.animated.div, {
            className: O.inviteCard,
            style: _,
            children: [(0, l.jsx)(r.animated.div, {
                className: O.inviteChildContainer,
                style: _,
                children: (0, l.jsx)("section", {
                    ref: E,
                    className: null == a ? void 0 : a(d),
                    children: t(d)
                })
            }), s]
        })
    }

    function P(e) {
        let {
            invite: t
        } = e;
        if (null == t || !(0, m.isEnhancedCommunityInvite)(t)) return null;
        let s = e => {
            if (null == t) return null;
            if (1 === e) return (0, l.jsx)(S.GuildInfoCard, {
                invite: t
            });
            return null
        };
        return (0, l.jsx)(L, {
            startAnimHeightPx: 0,
            innerStyle: () => O.guildInfoInner,
            ...e,
            children: e => s(e)
        })
    }

    function M(e) {
        let {
            invite: t
        } = e, s = s => {
            if (null == t) return (0, l.jsx)(R, {});
            switch (s) {
                case 1:
                    return (0, l.jsx)(A.default, {
                        ...e,
                        invite: t
                    });
                case 2:
                    return (0, l.jsx)(D, {
                        ...e,
                        invite: t
                    });
                default:
                    return (0, l.jsx)(R, {})
            }
        }, n = {
            1: O.inviteCardInner,
            2: O.inviteCardInnerError,
            0: O.inviteCardInnerLoading
        };
        return (0, l.jsx)(L, {
            startAnimHeightPx: 200,
            innerStyle: e => n[e],
            ...e,
            children: e => s(e)
        })
    }

    function j(e) {
        let {
            invite: t,
            onAcceptInvite: s
        } = e, {
            guild: n
        } = null != t ? t : {}, a = {};
        if ((null == n ? void 0 : n.splash) != null) {
            let e = T.default.getGuildSplashURL({
                id: n.id,
                splash: n.splash
            });
            null != e && (a.backgroundImage = "url(".concat(e, ")"), a.backgroundSize = "cover")
        }
        return (0, l.jsxs)(h.default, {
            theme: v.ThemeTypes.DARK,
            className: O.splashBackground,
            style: a,
            contentClassName: O.centerAuthBoxContent,
            children: [(0, l.jsx)(M, {
                ...e,
                onAcceptInvite: s
            }), (0, l.jsx)(P, {
                ...e
            })]
        })
    }

    function b(e) {
        let {
            inviteKey: t,
            transitionTo: s
        } = e, n = (0, u.useStateFromStores)([_.default], () => _.default.getInvite(t));
        return i.useEffect(() => {
            (0, E.trackAppUIViewed)("invite_mobile")
        }, []), i.useEffect(() => {
            null != n && n.state === v.InviteStates.RESOLVED && p.default.track(v.AnalyticEvents.INVITE_VIEWED, {
                invite_code: t,
                friends_count: null == n ? void 0 : n.friends_count
            }, {
                flush: !0
            })
        }, [n, t]), (0, l.jsx)(j, {
            invite: n,
            onAcceptInvite: e => {
                ! function(e, t, s) {
                    var n, a, l;
                    null == e || e.preventDefault(), p.default.track(v.AnalyticEvents.INVITE_APP_OPENED, {
                        invite_code: (0, g.parseInviteCodeFromInviteKey)(t),
                        guild_id: null == s ? void 0 : null === (n = s.guild) || void 0 === n ? void 0 : n.id,
                        channel_id: null == s ? void 0 : null === (a = s.channel) || void 0 === a ? void 0 : a.id,
                        inviter_id: null == s ? void 0 : null === (l = s.inviter) || void 0 === l ? void 0 : l.id
                    });
                    let i = null != s && s.state !== v.InviteStates.EXPIRED && s.state !== v.InviteStates.BANNED ? t : void 0,
                        r = I.default.getFingerprint(),
                        u = null != r ? r : I.default.getId(),
                        o = null != s && (null == s ? void 0 : s.type) != null ? Number(null == s ? void 0 : s.type) : void 0;
                    d.default.openApp(i, void 0, u, void 0, o)
                }(e, t, n)
            },
            transitionTo: s
        })
    }
}