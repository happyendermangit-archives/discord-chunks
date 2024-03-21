function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("866227"),
        r = n.n(s),
        o = n("446674"),
        u = n("77078"),
        d = n("442939"),
        c = n("730859"),
        f = n("697218"),
        p = n("953109"),
        m = n("449008"),
        h = n("782340"),
        x = n("291488"),
        E = function(e) {
            let {
                createdAt: t,
                participantIds: n,
                applicationId: l,
                title: s,
                guildId: E,
                className: y
            } = e, g = (0, d.useGetOrFetchApplication)(l), S = (0, o.useStateFromStoresArray)([f.default], () => {
                var e;
                return null !== (e = n.map(e => f.default.getUser(e)).filter(m.isNotNullish)) && void 0 !== e ? e : []
            }), C = null == g ? void 0 : g.name, T = r(t).fromNow();
            return null == t ? null : (0, i.jsxs)("div", {
                className: a(y, x.container),
                children: [(0, i.jsx)(p.default, {
                    game: g
                }), (0, i.jsxs)("div", {
                    className: x.textSection,
                    children: [null != s && "" !== s ? (0, i.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        children: s
                    }) : (0, i.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        color: "text-muted",
                        children: h.default.Messages.CLIPS_UNTITLED
                    }), (0, i.jsxs)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: x.subtitle,
                        children: [null != C ? "".concat(C, " • ") : null, T]
                    }), (0, i.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: x.subtitle
                    })]
                }), null != S && S.length > 0 && (0, i.jsx)(c.default, {
                    maxUsers: 4,
                    users: S,
                    className: x.facePile,
                    guildId: E
                })]
            })
        }
}