function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileRecentGamesSection: function() {
            return p
        },
        UserProfileRecentGamesThemedSection: function() {
            return R
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("692547"),
        u = n("882485"),
        d = n("420166"),
        _ = n("481060"),
        c = n("812206"),
        E = n("566454"),
        I = n("32966"),
        T = n("314897"),
        f = n("768581"),
        S = n("747074"),
        h = n("659101"),
        A = n("689938"),
        m = n("458186");

    function N(e) {
        let {
            game: t,
            isSharedGame: n
        } = e, s = (0, o.useStateFromStores)([c.default], () => c.default.getApplication(t.applicationId)), a = r.useMemo(() => null == t.duration || 0 === t.duration ? (0, E.getLastPlayedTimestamp)(t, !1) : "".concat((0, E.getLastPlayedTimestamp)(t, !0), " — ").concat((0, E.getTimePlayedLastWeek)(t)), [t]), I = r.useRef(null), [T, S] = r.useState(!1);
        if (r.useEffect(() => {
                let e = I.current;
                null != e && null != e.offsetWidth && null != e.scrollWidth && S(e.offsetWidth < e.scrollWidth)
            }, []), null == s) return null;
        let h = f.default.getApplicationIconURL({
            id: s.id,
            icon: s.icon,
            size: 40
        });
        return (0, i.jsxs)("div", {
            className: m.recentGameContainer,
            children: [(0, i.jsx)("div", {
                className: m.recentGameIcon,
                children: null != h && (0, i.jsx)("img", {
                    alt: "",
                    "aria-hidden": !0,
                    src: h,
                    width: 40,
                    height: 40
                })
            }), (0, i.jsxs)("div", {
                className: m.recentGameDetails,
                children: [(0, i.jsxs)("div", {
                    className: m.recentGameTitleContainer,
                    children: [(0, i.jsx)(_.Tooltip, {
                        text: s.name,
                        color: _.Tooltip.Colors.PRIMARY,
                        shouldShow: T,
                        children: e => (0, i.jsx)("span", {
                            ref: I,
                            ...e,
                            className: m.recentGameTitle,
                            children: s.name
                        })
                    }), n && (0, i.jsx)(_.Tooltip, {
                        text: A.default.Messages.USER_RECENT_GAMES_YOU_BOTH_PLAY,
                        color: _.Tooltip.Colors.PRIMARY,
                        children: e => (0, i.jsx)("div", {
                            className: m.sharedGameIcon,
                            ...e,
                            children: (0, i.jsx)(u.CircleInformationIcon, {
                                height: 12,
                                width: 12,
                                color: l.default.colors.INTERACTIVE_MUTED
                            })
                        })
                    })]
                }), (0, i.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: a
                }), t.isNew && (0, i.jsxs)("div", {
                    className: m.newIcon,
                    children: [(0, i.jsx)(d.NewUserIcon, {
                        height: 12,
                        width: 12,
                        color: l.default.colors.STATUS_POSITIVE
                    }), (0, i.jsx)(_.Text, {
                        variant: "text-sm/normal",
                        color: "status-positive",
                        children: A.default.Messages.NEW_TO_THIS_GAME
                    })]
                })]
            })]
        })
    }
    let O = r.memo(function(e) {
        let {
            userId: t,
            containerClassName: n,
            wrapChildren: r
        } = e, {
            recentGames: s,
            currentUserApplicationIds: o,
            isFetching: l,
            isError: u
        } = (0, I.useUserRecentGames)(t);
        if (l || u || null == s || 0 === s.length) return null;
        let d = (0, i.jsx)("div", {
            className: a()(m.recentGames, n),
            children: null == s ? void 0 : s.map(e => {
                var n, r, s;
                return (0, i.jsx)(N, {
                    game: e,
                    isSharedGame: (n = t, r = o, s = e.applicationId, n !== T.default.getId() && r.has(s))
                }, e.lastSessionId)
            })
        });
        return null != r ? (0, i.jsx)(i.Fragment, {
            children: r(d)
        }) : d
    });

    function p(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, s = r.useCallback(e => (0, i.jsxs)(h.default, {
            children: [(0, i.jsx)(_.Heading, {
                variant: "eyebrow",
                className: m.recentGamesHeading,
                children: A.default.Messages.RECENT_GAMES
            }), e]
        }), []);
        return (0, i.jsx)(O, {
            userId: t,
            containerClassName: n,
            wrapChildren: s
        })
    }

    function R(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, s = r.useCallback(e => (0, i.jsx)(S.default.Inner, {
            children: (0, i.jsxs)(h.default, {
                children: [(0, i.jsx)(_.Heading, {
                    variant: "eyebrow",
                    className: m.recentGamesHeading,
                    children: A.default.Messages.RECENT_GAMES
                }), e]
            })
        }), []);
        return (0, i.jsx)(O, {
            userId: t,
            containerClassName: n,
            wrapChildren: s
        })
    }
    t.default = O
}