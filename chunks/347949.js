function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileRecentGames: function() {
            return L
        },
        UserProfileRecentGamesContainer: function() {
            return v
        },
        UserProfileRecentGamesSection: function() {
            return D
        },
        UserProfileRecentGamesThemedSection: function() {
            return M
        }
    }), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("692547"),
        u = n("622535"),
        d = n("298433"),
        _ = n("434559"),
        c = n("481060"),
        E = n("812206"),
        I = n("566454"),
        T = n("32966"),
        f = n("314897"),
        S = n("768581"),
        h = n("785717"),
        A = n("221292"),
        m = n("502762"),
        N = n("659101"),
        p = n("171368"),
        O = n("981631"),
        R = n("689938"),
        C = n("361496");

    function g(e) {
        let {
            game: t,
            isSharedGame: n
        } = e, a = (0, o.useStateFromStores)([E.default], () => E.default.getApplication(t.applicationId)), s = r.useMemo(() => null == t.duration || 0 === t.duration ? (0, I.getLastPlayedTimestamp)(t, !1) : "".concat((0, I.getLastPlayedTimestamp)(t, !0), " — ").concat((0, I.getTimePlayedLastWeek)(t)), [t]), u = r.useRef(null), [T, f] = r.useState(!1);
        if (r.useEffect(() => {
                let e = u.current;
                null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth)
            }, []), null == a) return null;
        let h = S.default.getApplicationIconURL({
            id: a.id,
            icon: a.icon,
            size: 40
        });
        return (0, i.jsxs)("div", {
            className: C.recentGameContainer,
            children: [(0, i.jsx)("div", {
                className: C.recentGameIcon,
                children: null != h && (0, i.jsx)("img", {
                    alt: "",
                    "aria-hidden": !0,
                    src: h,
                    width: 40,
                    height: 40
                })
            }), (0, i.jsxs)("div", {
                className: C.recentGameDetails,
                children: [(0, i.jsxs)("div", {
                    className: C.recentGameTitleContainer,
                    children: [(0, i.jsx)(c.Tooltip, {
                        text: a.name,
                        color: c.Tooltip.Colors.PRIMARY,
                        shouldShow: T,
                        children: e => (0, i.jsx)("span", {
                            ref: u,
                            ...e,
                            className: C.recentGameTitle,
                            children: a.name
                        })
                    }), n && (0, i.jsx)(c.Tooltip, {
                        text: R.default.Messages.USER_RECENT_GAMES_YOU_BOTH_PLAY,
                        color: c.Tooltip.Colors.PRIMARY,
                        children: e => (0, i.jsx)("div", {
                            className: C.sharedGameIcon,
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
                    children: s
                }), t.isNew && (0, i.jsxs)("div", {
                    className: C.newIcon,
                    children: [(0, i.jsx)(_.NewUserLargeIcon, {
                        height: 12,
                        width: 12,
                        color: l.default.colors.STATUS_POSITIVE
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "status-positive",
                        children: R.default.Messages.NEW_TO_THIS_GAME
                    })]
                })]
            })]
        })
    }
    let L = r.memo(function(e) {
        let {
            userId: t,
            recentGames: n,
            currentUserApplicationIds: a,
            containerClassName: o
        } = e, {
            trackUserProfileAction: l,
            ...d
        } = (0, h.useUserProfileAnalyticsContext)(), [_, c] = r.useState(!1), [E, I] = r.useState(!1);
        return r.useEffect(() => {
            if (null == a || _ || !E) return;
            c(!0);
            let e = [],
                t = [],
                i = [];
            n.forEach(n => {
                let {
                    applicationId: r,
                    isNew: s
                } = n;
                e.push(r), s && t.push(r), a.has(r) && i.push(r)
            }), (0, A.trackUserProfileRecentGamesViewed)({
                ...d,
                applicationIds: e,
                newApplicationIds: t,
                sharedApplicationIds: i
            })
        }, [a, n, c, _, d, E]), (0, i.jsx)(u.VisibilitySensor, {
            onChange: I,
            threshold: .25,
            active: !_,
            children: (0, i.jsx)("div", {
                className: s()(C.recentGames, o),
                children: null == n ? void 0 : n.map(e => {
                    var n, r, s;
                    return (0, i.jsx)(g, {
                        game: e,
                        isSharedGame: (n = t, r = a, s = e.applicationId, n !== f.default.getId() && null != r && r.has(s))
                    }, e.lastSessionId)
                })
            })
        })
    });

    function v(e) {
        let {
            userId: t,
            maxItems: n = 3,
            wrapChildren: a,
            containerClassName: s
        } = e, {
            recentGames: o,
            currentUserApplicationIds: l,
            isFetching: u
        } = (0, T.useUserRecentGames)(t), d = r.useMemo(() => null == o ? void 0 : o.slice(0, n), [o, n]), _ = r.useMemo(() => null != o && o.length > n, [o, n]), E = r.useCallback(() => {
            (0, p.openUserProfileModal)({
                userId: t,
                guildId: O.ME,
                analyticsLocation: {
                    section: O.AnalyticsSections.USER_PROFILE
                }
            })
        }, [t]);
        if (u || null == d || 0 === d.length) return null;
        let I = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: C.headerContainer,
                children: [(0, i.jsx)(c.Heading, {
                    className: C.header,
                    variant: "eyebrow",
                    children: R.default.Messages.RECENT_GAMES
                }), _ && (0, i.jsx)(c.Clickable, {
                    className: C.viewAll,
                    onClick: E,
                    children: (0, i.jsx)(c.Heading, {
                        variant: "eyebrow",
                        color: "text-link",
                        children: R.default.Messages.VIEW_ALL.toUpperCase()
                    })
                })]
            }), (0, i.jsx)(L, {
                containerClassName: s,
                userId: t,
                recentGames: d,
                currentUserApplicationIds: l
            })]
        });
        return null != a ? (0, i.jsx)(i.Fragment, {
            children: a(I)
        }) : I
    }

    function D(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, a = r.useCallback(e => (0, i.jsx)(N.default, {
            children: e
        }), []);
        return (0, i.jsx)(v, {
            userId: t,
            containerClassName: n,
            wrapChildren: a
        })
    }

    function M(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, a = r.useCallback(e => (0, i.jsx)(m.default.Overlay, {
            children: (0, i.jsx)(N.default, {
                children: e
            })
        }), []);
        return (0, i.jsx)(v, {
            userId: t,
            containerClassName: n,
            wrapChildren: a
        })
    }
}