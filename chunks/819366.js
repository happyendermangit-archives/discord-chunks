function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("512722"),
        s = n.n(r),
        a = n("873546"),
        o = n("442837"),
        l = n("481060"),
        u = n("239091"),
        d = n("100527"),
        _ = n("906732"),
        c = n("927723"),
        E = n("484459"),
        I = n("103575"),
        T = n("592125"),
        f = n("271383"),
        S = n("430824"),
        A = n("699516"),
        h = n("594174"),
        m = n("797053"),
        N = n("5192"),
        O = n("51144"),
        p = n("377668");

    function R(e) {
        let {
            className: t,
            userId: r,
            channelId: R,
            inlinePreview: C = !1
        } = e, {
            analyticsLocations: g
        } = (0, _.default)(d.default.USER_MENTION), L = (0, o.useStateFromStores)([h.default], () => h.default.getUser(r)), D = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(R)), v = null != D ? D.getGuildId() : null, M = C || null == L || null == v || null == R ? void 0 : e => {
            null != D && (0, u.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("70866"), n.e("12435"), n.e("64578")]).then(n.bind(n, "757387"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: L,
                    channel: D,
                    guildId: v
                })
            })
        }, y = O.default.useName(L), P = (0, o.useStateFromStores)([T.default, f.default, A.default], () => N.default.getNickname(v, R, L)), U = S.default.getGuild(v), b = (0, c.useClydeEnabled)(U, D) && r === p.CLYDE_AI_USER_ID ? p.CLYDE_AI_MENTION_COLOR : null, G = e => (0, i.jsx)(m.default, {
            className: t,
            onContextMenu: M,
            color: b,
            ...e,
            children: "@".concat(null != P ? P : y)
        });
        return C ? (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: g,
            children: G()
        }) : (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: g,
            children: (0, i.jsx)(l.Popout, {
                preload: null == L ? void 0 : () => (0, E.default)(L.id, L.getAvatarURL(v, 80), {
                    guildId: null != v ? v : void 0,
                    channelId: null != R ? R : void 0
                }),
                renderPopout: e => (s()(null != L, "Unexpected missing user"), (0, i.jsx)(I.default, {
                    location: "UserMention",
                    userId: L.id,
                    guildId: null != v ? v : void 0,
                    channelId: R,
                    ...e
                })),
                position: a.isMobile ? "top" : "right",
                children: e => G(e)
            })
        })
    }
}