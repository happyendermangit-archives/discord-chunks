function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileRecentGamesSection: function() {
            return O
        },
        UserProfileRecentGamesThemedSection: function() {
            return p
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("692547"),
        u = n("5297"),
        d = n("481060"),
        _ = n("812206"),
        c = n("566454"),
        E = n("32966"),
        I = n("314897"),
        T = n("768581"),
        f = n("747074"),
        S = n("659101"),
        A = n("689938"),
        h = n("458186");

    function m(e) {
        let {
            game: t,
            isSharedGame: n
        } = e, s = (0, o.useStateFromStores)([_.default], () => _.default.getApplication(t.applicationId)), a = r.useMemo(() => null == t.duration || 0 === t.duration ? (0, c.getLastPlayedTimestamp)(t, !1) : "".concat((0, c.getLastPlayedTimestamp)(t, !0), " — ").concat((0, c.getTimePlayedLastWeek)(t)), [t]), E = r.useRef(null), [I, f] = r.useState(!1);
        if (r.useEffect(() => {
                let e = E.current;
                null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth)
            }, []), null == s) return null;
        let S = T.default.getApplicationIconURL({
            id: s.id,
            icon: s.icon,
            size: 40
        });
        return (0, i.jsxs)("div", {
            className: h.recentGameContainer,
            children: [(0, i.jsx)("div", {
                className: h.recentGameIcon,
                children: null != S && (0, i.jsx)("img", {
                    alt: "",
                    "aria-hidden": !0,
                    src: S,
                    width: 40,
                    height: 40
                })
            }), (0, i.jsxs)("div", {
                className: h.recentGameDetails,
                children: [(0, i.jsxs)("div", {
                    className: h.recentGameTitleContainer,
                    children: [(0, i.jsx)(d.Tooltip, {
                        text: s.name,
                        color: d.Tooltip.Colors.PRIMARY,
                        shouldShow: I,
                        children: e => (0, i.jsx)("span", {
                            ref: E,
                            ...e,
                            className: h.recentGameTitle,
                            children: s.name
                        })
                    }), n && (0, i.jsx)(d.Tooltip, {
                        text: A.default.Messages.USER_RECENT_GAMES_YOU_BOTH_PLAY,
                        color: d.Tooltip.Colors.PRIMARY,
                        children: e => (0, i.jsx)("div", {
                            className: h.sharedGameIcon,
                            ...e,
                            children: (0, i.jsx)(u.SparklesIcon, {
                                height: 16,
                                width: 16,
                                color: l.default.colors.INTERACTIVE_MUTED
                            })
                        })
                    })]
                }), (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: a
                })]
            })]
        })
    }
    let N = r.memo(function(e) {
        let {
            userId: t,
            containerClassName: n,
            wrapChildren: r
        } = e, {
            recentGames: s,
            currentUserApplicationIds: o,
            isFetching: l,
            isError: u
        } = (0, E.useUserRecentGames)(t);
        if (l || u || null == s || 0 === s.length) return null;
        let d = (0, i.jsx)("div", {
            className: a()(h.recentGames, n),
            children: null == s ? void 0 : s.map(e => {
                var n, r, s;
                return (0, i.jsx)(m, {
                    game: e,
                    isSharedGame: (n = t, r = o, s = e.applicationId, n !== I.default.getId() && r.has(s))
                }, e.lastSessionId)
            })
        });
        return null != r ? (0, i.jsx)(i.Fragment, {
            children: r(d)
        }) : d
    });

    function O(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, s = r.useCallback(e => (0, i.jsxs)(S.default, {
            children: [(0, i.jsx)(d.Heading, {
                variant: "eyebrow",
                className: h.recentGamesHeading,
                children: A.default.Messages.RECENT_GAMES
            }), e]
        }), []);
        return (0, i.jsx)(N, {
            userId: t,
            containerClassName: n,
            wrapChildren: s
        })
    }

    function p(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, s = r.useCallback(e => (0, i.jsx)(f.default.Inner, {
            children: (0, i.jsxs)(S.default, {
                children: [(0, i.jsx)(d.Heading, {
                    variant: "eyebrow",
                    className: h.recentGamesHeading,
                    children: A.default.Messages.RECENT_GAMES
                }), e]
            })
        }), []);
        return (0, i.jsx)(N, {
            userId: t,
            containerClassName: n,
            wrapChildren: s
        })
    }
    t.default = N
}