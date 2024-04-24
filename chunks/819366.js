function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("512722"),
        a = n.n(s),
        o = n("873546"),
        l = n("442837"),
        u = n("481060"),
        d = n("239091"),
        _ = n("100527"),
        c = n("906732"),
        E = n("797610"),
        I = n("927723"),
        T = n("484459"),
        f = n("103575"),
        S = n("592125"),
        h = n("271383"),
        A = n("430824"),
        m = n("699516"),
        N = n("594174"),
        p = n("797053"),
        O = n("5192"),
        R = n("51144"),
        C = n("377668"),
        g = n("689938");

    function L(e) {
        let {
            userId: t,
            className: s
        } = e, a = r.useCallback(() => {
            (0, I.showInaccessibleLinkModal)({
                kind: "user"
            })
        }, []), o = r.useCallback(e => {
            null != t && (0, d.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("25073").then(n.bind(n, "80742"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    userId: t
                })
            })
        }, [t]);
        return (0, i.jsx)(p.default, {
            className: s,
            onClick: a,
            onContextMenu: o,
            children: "@".concat(g.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER)
        })
    }

    function D(e) {
        let {
            className: t,
            userId: r,
            channelId: s,
            parsedUserId: I,
            inlinePreview: g = !1
        } = e, {
            analyticsLocations: D
        } = (0, c.default)(_.default.USER_MENTION), v = (0, l.useStateFromStores)([N.default], () => N.default.getUser(r)), M = (0, l.useStateFromStores)([S.default], () => S.default.getChannel(s)), y = null != M ? M.getGuildId() : null, P = g || null == v || null == y || null == s ? void 0 : e => {
            null != M && (0, d.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("70866"), n.e("12435"), n.e("6696")]).then(n.bind(n, "757387"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: v,
                    channel: M,
                    guildId: y
                })
            })
        }, U = R.default.useName(v), b = (0, l.useStateFromStores)([S.default, h.default, m.default], () => O.default.getNickname(y, s, v)), G = A.default.getGuild(y), w = (0, E.useClydeEnabled)(G, M) && r === C.CLYDE_AI_USER_ID ? C.CLYDE_AI_MENTION_COLOR : null;
        if (null == v) return (0, i.jsx)(L, {
            userId: I,
            className: t
        });
        let B = e => (0, i.jsx)(p.default, {
            className: t,
            onContextMenu: P,
            color: w,
            ...e,
            children: "@".concat(null != b ? b : U)
        });
        return g ? (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: D,
            children: B()
        }) : (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: D,
            children: (0, i.jsx)(u.Popout, {
                preload: null == v ? void 0 : () => (0, T.default)(v.id, v.getAvatarURL(y, 80), {
                    guildId: null != y ? y : void 0,
                    channelId: null != s ? s : void 0
                }),
                renderPopout: e => (a()(null != v, "Unexpected missing user"), (0, i.jsx)(f.default, {
                    location: "UserMention",
                    userId: v.id,
                    guildId: null != y ? y : void 0,
                    channelId: s,
                    ...e
                })),
                position: o.isMobile ? "top" : "right",
                children: e => B(e)
            })
        })
    }
}