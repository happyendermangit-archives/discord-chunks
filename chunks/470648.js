function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
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
        d = n("980215"),
        c = n("506885"),
        f = n("981601"),
        p = n("42203"),
        m = n("26989"),
        h = n("305961"),
        x = n("27618"),
        E = n("697218"),
        y = n("666897"),
        g = n("387111"),
        S = n("158998"),
        C = n("680894");

    function _(e) {
        let {
            className: t,
            userId: l,
            channelId: _,
            inlinePreview: I = !1
        } = e, T = (0, r.useStateFromStores)([E.default], () => E.default.getUser(l)), v = (0, r.useStateFromStores)([p.default], () => p.default.getChannel(_)), N = null != v ? v.getGuildId() : null, A = I || null == T || null == N || null == _ ? void 0 : e => {
            null != v && (0, u.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("834247").then(n.bind(n, "834247"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: T,
                    channel: v,
                    guildId: N
                })
            })
        }, O = S.default.useName(T), R = (0, r.useStateFromStores)([p.default, m.default, x.default], () => g.default.getNickname(N, _, T)), M = h.default.getGuild(N), k = (0, d.useClydeEnabled)(M, v), L = k && l === C.CLYDE_AI_USER_ID ? C.CLYDE_AI_MENTION_COLOR : null, P = e => (0, i.jsx)(y.default, {
            className: t,
            onContextMenu: A,
            color: L,
            ...e,
            children: "@".concat(null != R ? R : O)
        });
        return I ? P() : (0, i.jsx)(o.Popout, {
            preload: null == T ? void 0 : () => (0, c.default)(T.id, T.getAvatarURL(N, 80), {
                guildId: null != N ? N : void 0,
                channelId: null != _ ? _ : void 0
            }),
            renderPopout: e => (a(null != T, "Unexpected missing user"), (0, i.jsx)(f.default, {
                userId: T.id,
                guildId: null != N ? N : void 0,
                channelId: _,
                ...e
            })),
            position: s.isMobile ? "top" : "right",
            children: e => P(e)
        })
    }
}