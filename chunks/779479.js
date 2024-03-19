function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("77078"),
        s = n("17551"),
        r = n("147672"),
        o = n("315102"),
        u = n("777003"),
        d = n("782340"),
        c = n("530479");

    function f(e) {
        let {
            game: t
        } = e, n = o.default.getApplicationIconURL({
            id: t.application.id,
            icon: t.application.icon,
            size: 48
        }), r = l.useMemo(() => null == t.duration || 0 === t.duration ? (0, s.getLastPlayedTimestamp)(t, !0) : "".concat((0, s.getLastPlayedTimestamp)(t, !0), " — ").concat((0, s.getTimePlayedLastWeek)(t)), [t]);
        return (0, i.jsxs)("div", {
            className: c.recentGameContainer,
            children: [null != n && (0, i.jsx)("img", {
                alt: "",
                "aria-hidden": !0,
                src: n,
                width: 48,
                height: 48
            }), (0, i.jsxs)("div", {
                className: c.recentGameTextContainer,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    children: t.application.name
                }), (0, i.jsx)(a.Heading, {
                    variant: "heading-sm/normal",
                    children: r
                })]
            })]
        })
    }
    var p = l.memo(function(e) {
        let {
            user: t
        } = e, {
            recentGames: n,
            isFetching: l,
            hasError: s
        } = (0, r.useUserRecentGames)(t.id);
        return l || s || null == n || 0 === n.length ? null : (0, i.jsxs)(u.default, {
            children: [(0, i.jsx)(a.Heading, {
                variant: "eyebrow",
                className: c.recentGamesHeading,
                children: d.default.Messages.RECENT_GAMES
            }), (0, i.jsx)("div", {
                className: c.recentGames,
                children: null == n ? void 0 : n.map(e => (0, i.jsx)(f, {
                    game: e
                }, e.lastSessionId))
            })]
        })
    })
}