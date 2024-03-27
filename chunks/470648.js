function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("627445"),
        a = n.n(l),
        s = n("394846"),
        r = n("446674"),
        o = n("77078"),
        u = n("272030"),
        d = n("812204"),
        c = n("685665"),
        f = n("980215"),
        m = n("506885"),
        p = n("340906"),
        h = n("42203"),
        x = n("26989"),
        E = n("305961"),
        y = n("27618"),
        g = n("697218"),
        S = n("666897"),
        C = n("387111"),
        T = n("158998"),
        _ = n("680894");

    function I(e) {
        let {
            className: t,
            userId: l,
            channelId: I,
            inlinePreview: v = !1
        } = e, {
            analyticsLocations: A
        } = (0, c.default)(d.default.USER_MENTION), N = (0, r.useStateFromStores)([g.default], () => g.default.getUser(l)), R = (0, r.useStateFromStores)([h.default], () => h.default.getChannel(I)), O = null != R ? R.getGuildId() : null, M = v || null == N || null == O || null == I ? void 0 : e => {
            null != R && (0, u.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("834247").then(n.bind(n, "834247"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: N,
                    channel: R,
                    guildId: O
                })
            })
        }, k = T.default.useName(N), L = (0, r.useStateFromStores)([h.default, x.default, y.default], () => C.default.getNickname(O, I, N)), P = E.default.getGuild(O), b = (0, f.useClydeEnabled)(P, R), j = b && l === _.CLYDE_AI_USER_ID ? _.CLYDE_AI_MENTION_COLOR : null, U = e => (0, i.jsx)(S.default, {
            className: t,
            onContextMenu: M,
            color: j,
            ...e,
            children: "@".concat(null != L ? L : k)
        });
        return v ? (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: A,
            children: U()
        }) : (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: A,
            children: (0, i.jsx)(o.Popout, {
                preload: null == N ? void 0 : () => (0, m.default)(N.id, N.getAvatarURL(O, 80), {
                    guildId: null != O ? O : void 0,
                    channelId: null != I ? I : void 0
                }),
                renderPopout: e => (a(null != N, "Unexpected missing user"), (0, i.jsx)(p.default, {
                    location: "UserMention",
                    userId: N.id,
                    guildId: null != O ? O : void 0,
                    channelId: I,
                    ...e
                })),
                position: s.isMobile ? "top" : "right",
                children: e => U(e)
            })
        })
    }
}