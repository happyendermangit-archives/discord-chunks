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

    function I(e) {
        let {
            className: t,
            userId: l,
            channelId: I,
            inlinePreview: T = !1
        } = e, _ = (0, r.useStateFromStores)([E.default], () => E.default.getUser(l)), v = (0, r.useStateFromStores)([p.default], () => p.default.getChannel(I)), N = null != v ? v.getGuildId() : null, A = T || null == _ || null == N || null == I ? void 0 : e => {
            null != v && (0, u.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("834247").then(n.bind(n, "834247"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: _,
                    channel: v,
                    guildId: N
                })
            })
        }, O = S.default.useName(_), M = (0, r.useStateFromStores)([p.default, m.default, x.default], () => g.default.getNickname(N, I, _)), R = h.default.getGuild(N), k = (0, d.useClydeEnabled)(R, v), L = k && l === C.CLYDE_AI_USER_ID ? C.CLYDE_AI_MENTION_COLOR : null, b = e => (0, i.jsx)(y.default, {
            className: t,
            onContextMenu: A,
            color: L,
            ...e,
            children: "@".concat(null != M ? M : O)
        });
        return T ? b() : (0, i.jsx)(o.Popout, {
            preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(N, 80), {
                guildId: null != N ? N : void 0,
                channelId: null != I ? I : void 0
            }),
            renderPopout: e => (a(null != _, "Unexpected missing user"), (0, i.jsx)(f.default, {
                userId: _.id,
                guildId: null != N ? N : void 0,
                channelId: I,
                ...e
            })),
            position: s.isMobile ? "top" : "right",
            children: e => b(e)
        })
    }
}