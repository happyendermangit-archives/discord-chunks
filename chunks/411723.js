function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("866227"),
        r = n.n(s),
        o = n("446674"),
        u = n("77078"),
        d = n("442939"),
        c = n("730859"),
        f = n("697218"),
        m = n("953109"),
        p = n("449008"),
        h = n("782340"),
        E = n("291488"),
        g = function(e) {
            let {
                createdAt: t,
                participantIds: n,
                applicationId: i,
                title: s,
                guildId: g,
                className: C
            } = e, S = (0, d.useGetOrFetchApplication)(i), T = (0, o.useStateFromStoresArray)([f.default], () => {
                var e;
                return null !== (e = n.map(e => f.default.getUser(e)).filter(p.isNotNullish)) && void 0 !== e ? e : []
            }), I = null == S ? void 0 : S.name, v = r(t).fromNow();
            return null == t ? null : (0, l.jsxs)("div", {
                className: a(C, E.container),
                children: [(0, l.jsx)(m.default, {
                    game: S
                }), (0, l.jsxs)("div", {
                    className: E.textSection,
                    children: [null != s && "" !== s ? (0, l.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        children: s
                    }) : (0, l.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        color: "text-muted",
                        children: h.default.Messages.CLIPS_UNTITLED
                    }), (0, l.jsxs)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: E.subtitle,
                        children: [null != I ? "".concat(I, " • ") : null, v]
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: E.subtitle
                    })]
                }), null != T && T.length > 0 && (0, l.jsx)(c.default, {
                    maxUsers: 4,
                    users: T,
                    className: E.facePile,
                    guildId: g
                })]
            })
        }
}