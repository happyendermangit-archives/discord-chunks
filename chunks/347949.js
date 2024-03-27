function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileRecentGamesSection: function() {
            return A
        },
        UserProfileRecentGamesThemedSection: function() {
            return m
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("812206"),
        d = n("566454"),
        _ = n("32966"),
        c = n("768581"),
        E = n("747074"),
        I = n("659101"),
        T = n("689938"),
        f = n("458186");

    function S(e) {
        let {
            game: t
        } = e, n = (0, o.useStateFromStores)([u.default], () => u.default.getApplication(t.applicationId)), s = r.useMemo(() => null == t.duration || 0 === t.duration ? (0, d.getLastPlayedTimestamp)(t, !0) : "".concat((0, d.getLastPlayedTimestamp)(t, !0), " — ").concat((0, d.getTimePlayedLastWeek)(t)), [t]);
        if (null == n) return null;
        let a = c.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            size: 40
        });
        return (0, i.jsxs)("div", {
            className: f.recentGameContainer,
            children: [null != a && (0, i.jsx)("img", {
                alt: "",
                "aria-hidden": !0,
                src: a,
                width: 40,
                height: 40
            }), (0, i.jsxs)("div", {
                className: f.recentGameTextContainer,
                children: [(0, i.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    children: n.name
                }), (0, i.jsx)(l.Heading, {
                    variant: "heading-sm/normal",
                    children: s
                })]
            })]
        })
    }
    let h = r.memo(function(e) {
        let {
            userId: t,
            containerClassName: n,
            wrapChildren: r
        } = e, {
            recentGames: s,
            isFetching: o,
            hasError: l
        } = (0, _.useUserRecentGames)(t);
        if (o || l || null == s || 0 === s.length) return null;
        let u = (0, i.jsx)("div", {
            className: a()(f.recentGames, n),
            children: null == s ? void 0 : s.map(e => (0, i.jsx)(S, {
                game: e
            }, e.lastSessionId))
        });
        return null != r ? (0, i.jsx)(i.Fragment, {
            children: r(u)
        }) : u
    });

    function A(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, s = r.useCallback(e => (0, i.jsxs)(I.default, {
            children: [(0, i.jsx)(l.Heading, {
                variant: "eyebrow",
                className: f.recentGamesHeading,
                children: T.default.Messages.RECENT_GAMES
            }), e]
        }), []);
        return (0, i.jsx)(h, {
            userId: t,
            containerClassName: n,
            wrapChildren: s
        })
    }

    function m(e) {
        let {
            userId: t,
            containerClassName: n
        } = e, s = r.useCallback(e => (0, i.jsx)(E.default.Inner, {
            children: (0, i.jsxs)(I.default, {
                children: [(0, i.jsx)(l.Heading, {
                    variant: "eyebrow",
                    className: f.recentGamesHeading,
                    children: T.default.Messages.RECENT_GAMES
                }), e]
            })
        }), []);
        return (0, i.jsx)(h, {
            userId: t,
            containerClassName: n,
            wrapChildren: s
        })
    }
    t.default = h
}