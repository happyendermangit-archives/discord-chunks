function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileRecentGamesSection: function() {
            return g
        },
        UserProfileRecentGamesThemedSection: function() {
            return L
        }
    }), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("692547"),
        u = n("622535"),
        d = n("298433"),
        _ = n("420166"),
        c = n("481060"),
        E = n("812206"),
        I = n("566454"),
        T = n("32966"),
        f = n("314897"),
        S = n("768581"),
        h = n("785717"),
        A = n("221292"),
        m = n("747074"),
        N = n("659101"),
        O = n("689938"),
        p = n("458186");

    function R(e) {
        let {
            game: t,
            isSharedGame: n
        } = e, s = (0, o.useStateFromStores)([E.default], () => E.default.getApplication(t.applicationId)), a = r.useMemo(() => null == t.duration || 0 === t.duration ? (0, I.getLastPlayedTimestamp)(t, !1) : "".concat((0, I.getLastPlayedTimestamp)(t, !0), " — ").concat((0, I.getTimePlayedLastWeek)(t)), [t]), u = r.useRef(null), [T, f] = r.useState(!1);
        if (r.useEffect(() => {
                let e = u.current;
                null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth)
            }, []), null == s) return null;
        let h = S.default.getApplicationIconURL({
            id: s.id,
            icon: s.icon,
            size: 40
        });
        return (0, i.jsxs)("div", {
            className: p.recentGameContainer,
            children: [(0, i.jsx)("div", {
                className: p.recentGameIcon,
                children: null != h && (0, i.jsx)("img", {
                    alt: "",
                    "aria-hidden": !0,
                    src: h,
                    width: 40,
                    height: 40
                })
            }), (0, i.jsxs)("div", {
                className: p.recentGameDetails,
                children: [(0, i.jsxs)("div", {
                    className: p.recentGameTitleContainer,
                    children: [(0, i.jsx)(c.Tooltip, {
                        text: s.name,
                        color: c.Tooltip.Colors.PRIMARY,
                        shouldShow: T,
                        children: e => (0, i.jsx)("span", {
                            ref: u,
                            ...e,
                            className: p.recentGameTitle,
                            children: s.name
                        })
                    }), n && (0, i.jsx)(c.Tooltip, {
                        text: O.default.Messages.USER_RECENT_GAMES_YOU_BOTH_PLAY,
                        color: c.Tooltip.Colors.PRIMARY,
                        children: e => (0, i.jsx)("div", {
                            className: p.sharedGameIcon,
                            ...e,
                            children: (0, i.jsx)(d.GroupIcon, {
                                height: 14,
                                width: 14,
                                color: l.default.colors.INTERACTIVE_MUTED
                            })
                        })
                    })]
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: a
                }), t.isNew && (0, i.jsxs)("div", {
                    className: p.newIcon,
                    children: [(0, i.jsx)(_.NewUserIcon, {
                        height: 12,
                        width: 12,
                        color: l.default.colors.STATUS_POSITIVE
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "status-positive",
                        children: O.default.Messages.NEW_TO_THIS_GAME
                    })]
                })]
            })]
        })
    }
    let C = r.memo(function(e) {
        let {
            userId: t,
            containerClassName: n,
            maxItems: s = 3,
            wrapChildren: o
        } = e, {
            recentGames: l,
            currentUserApplicationIds: d,
            isFetching: _,
            isError: c
        } = (0, T.useUserRecentGames)(t), E = r.useMemo(() => null == l ? void 0 : l.slice(0, s), [l, s]), {
            trackUserProfileAction: I,
            ...S
        } = (0, h.useUserProfileAnalyticsContext)(), m = _ || c || null == E || 0 === E.length, [N, O] = r.useState(!1), [C, g] = r.useState(!1);
        if (r.useEffect(() => {
                if (m || N || null == d || !C) return;
                O(!0);
                let e = [],
                    t = [],
                    n = [];
                E.forEach(i => {
                    let {
                        applicationId: r,
                        isNew: s
                    } = i;
                    e.push(r), s && t.push(r), d.has(r) && n.push(r)
                }), (0, A.trackUserProfileRecentGamesViewed)({
                    ...S,
                    applicationIds: e,
                    newApplicationIds: t,
                    sharedApplicationIds: n
                })
            }, [d, m, E, O, N, S, C]), m) return null;
        let L = (0, i.jsx)(u.VisibilitySensor, {
            onChange: g,
            threshold: .25,
            active: !N,
            children: (0, i.jsx)("div", {
                className: a()(p.recentGames, n),
                children: null == E ? void 0 : E.map(e => {
                    var n, r, s;
                    return (0, i.jsx)(R, {
                        game: e,
                        isSharedGame: (n = t, r = d, s = e.applicationId, n !== f.default.getId() && null != r && r.has(s))
                    }, e.lastSessionId)
                })
            })
        });
        return null != o ? (0, i.jsx)(i.Fragment, {
            children: o(L)
        }) : L
    });

    function g(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, s = r.useCallback(e => (0, i.jsxs)(N.default, {
            children: [(0, i.jsx)(c.Heading, {
                variant: "eyebrow",
                className: p.recentGamesHeading,
                children: O.default.Messages.RECENT_GAMES
            }), e]
        }), []);
        return (0, i.jsx)(C, {
            userId: t,
            containerClassName: n,
            wrapChildren: s
        })
    }

    function L(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, s = r.useCallback(e => (0, i.jsx)(m.default.Inner, {
            children: (0, i.jsxs)(N.default, {
                children: [(0, i.jsx)(c.Heading, {
                    variant: "eyebrow",
                    className: p.recentGamesHeading,
                    children: O.default.Messages.RECENT_GAMES
                }), e]
            })
        }), []);
        return (0, i.jsx)(C, {
            userId: t,
            containerClassName: n,
            wrapChildren: s
        })
    }
    t.default = C
}