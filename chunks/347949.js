function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("566454"),
        o = n("32966"),
        l = n("768581"),
        u = n("659101"),
        d = n("689938"),
        _ = n("458186");

    function c(e) {
        let {
            game: t
        } = e, n = l.default.getApplicationIconURL({
            id: t.application.id,
            icon: t.application.icon,
            size: 48
        }), o = r.useMemo(() => null == t.duration || 0 === t.duration ? (0, a.getLastPlayedTimestamp)(t, !0) : "".concat((0, a.getLastPlayedTimestamp)(t, !0), " — ").concat((0, a.getTimePlayedLastWeek)(t)), [t]);
        return (0, i.jsxs)("div", {
            className: _.recentGameContainer,
            children: [null != n && (0, i.jsx)("img", {
                alt: "",
                "aria-hidden": !0,
                src: n,
                width: 48,
                height: 48
            }), (0, i.jsxs)("div", {
                className: _.recentGameTextContainer,
                children: [(0, i.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children: t.application.name
                }), (0, i.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    children: o
                })]
            })]
        })
    }
    t.default = r.memo(function(e) {
        let {
            user: t
        } = e, {
            recentGames: n,
            isFetching: r,
            hasError: a
        } = (0, o.useUserRecentGames)(t.id);
        return r || a || null == n || 0 === n.length ? null : (0, i.jsxs)(u.default, {
            children: [(0, i.jsx)(s.Heading, {
                variant: "eyebrow",
                className: _.recentGamesHeading,
                children: d.default.Messages.RECENT_GAMES
            }), (0, i.jsx)("div", {
                className: _.recentGames,
                children: null == n ? void 0 : n.map(e => (0, i.jsx)(c, {
                    game: e
                }, e.lastSessionId))
            })]
        })
    })
}