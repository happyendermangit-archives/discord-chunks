function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("627445"),
        a = n.n(i),
        s = n("394846"),
        r = n("446674"),
        o = n("77078"),
        u = n("272030"),
        d = n("980215"),
        c = n("506885"),
        f = n("981601"),
        m = n("42203"),
        p = n("26989"),
        h = n("305961"),
        E = n("27618"),
        g = n("697218"),
        C = n("666897"),
        S = n("387111"),
        T = n("158998"),
        I = n("680894");

    function v(e) {
        let {
            className: t,
            userId: i,
            channelId: v,
            inlinePreview: _ = !1
        } = e, N = (0, r.useStateFromStores)([g.default], () => g.default.getUser(i)), A = (0, r.useStateFromStores)([m.default], () => m.default.getChannel(v)), x = null != A ? A.getGuildId() : null, y = _ || null == N || null == x || null == v ? void 0 : e => {
            null != A && (0, u.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("834247").then(n.bind(n, "834247"));
                return t => (0, l.jsx)(e, {
                    ...t,
                    user: N,
                    channel: A,
                    guildId: x
                })
            })
        }, O = T.default.useName(N), R = (0, r.useStateFromStores)([m.default, p.default, E.default], () => S.default.getNickname(x, v, N)), M = h.default.getGuild(x), L = (0, d.useClydeEnabled)(M, A), P = L && i === I.CLYDE_AI_USER_ID ? I.CLYDE_AI_MENTION_COLOR : null, b = e => (0, l.jsx)(C.default, {
            className: t,
            onContextMenu: y,
            color: P,
            ...e,
            children: "@".concat(null != R ? R : O)
        });
        return _ ? b() : (0, l.jsx)(o.Popout, {
            preload: null == N ? void 0 : () => (0, c.default)(N.id, N.getAvatarURL(x, 80), {
                guildId: null != x ? x : void 0,
                channelId: null != v ? v : void 0
            }),
            renderPopout: e => (a(null != N, "Unexpected missing user"), (0, l.jsx)(f.default, {
                userId: N.id,
                guildId: null != x ? x : void 0,
                channelId: v,
                ...e
            })),
            position: s.isMobile ? "top" : "right",
            children: e => b(e)
        })
    }
}