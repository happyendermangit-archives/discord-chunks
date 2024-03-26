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
        p = n("506885"),
        m = n("340906"),
        h = n("42203"),
        x = n("26989"),
        E = n("305961"),
        y = n("27618"),
        g = n("697218"),
        S = n("666897"),
        C = n("387111"),
        _ = n("158998"),
        T = n("680894");

    function I(e) {
        let {
            className: t,
            userId: l,
            channelId: I,
            inlinePreview: v = !1
        } = e, {
            analyticsLocations: N
        } = (0, c.default)(d.default.USER_MENTION), A = (0, r.useStateFromStores)([g.default], () => g.default.getUser(l)), R = (0, r.useStateFromStores)([h.default], () => h.default.getChannel(I)), O = null != R ? R.getGuildId() : null, M = v || null == A || null == O || null == I ? void 0 : e => {
            null != R && (0, u.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("834247").then(n.bind(n, "834247"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: A,
                    channel: R,
                    guildId: O
                })
            })
        }, k = _.default.useName(A), L = (0, r.useStateFromStores)([h.default, x.default, y.default], () => C.default.getNickname(O, I, A)), P = E.default.getGuild(O), b = (0, f.useClydeEnabled)(P, R), j = b && l === T.CLYDE_AI_USER_ID ? T.CLYDE_AI_MENTION_COLOR : null, U = e => (0, i.jsx)(S.default, {
            className: t,
            onContextMenu: M,
            color: j,
            ...e,
            children: "@".concat(null != L ? L : k)
        });
        return v ? (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: N,
            children: U()
        }) : (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: N,
            children: (0, i.jsx)(o.Popout, {
                preload: null == A ? void 0 : () => (0, p.default)(A.id, A.getAvatarURL(O, 80), {
                    guildId: null != O ? O : void 0,
                    channelId: null != I ? I : void 0
                }),
                renderPopout: e => (a(null != A, "Unexpected missing user"), (0, i.jsx)(m.default, {
                    location: "UserMention",
                    userId: A.id,
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