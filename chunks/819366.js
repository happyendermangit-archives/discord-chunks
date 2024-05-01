function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
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
        C = n("377668");

    function g(e) {
        let {
            userId: t,
            className: s,
            children: a
        } = e, o = r.useCallback(() => {
            (0, I.showInaccessibleLinkModal)({
                kind: "user"
            })
        }, []), l = r.useCallback(e => {
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
            onClick: o,
            onContextMenu: l,
            children: a
        })
    }

    function L(e) {
        let {
            className: t,
            userId: r,
            channelId: s,
            parsedUserId: I,
            content: L,
            inlinePreview: v = !1
        } = e, {
            analyticsLocations: D
        } = (0, c.default)(_.default.USER_MENTION), M = (0, l.useStateFromStores)([N.default], () => N.default.getUser(r)), y = (0, l.useStateFromStores)([S.default], () => S.default.getChannel(s)), P = null != y ? y.getGuildId() : null, U = v || null == M || null == P || null == s ? void 0 : e => {
            null != y && (0, d.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("70866"), n.e("12435"), n.e("6696")]).then(n.bind(n, "757387"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: M,
                    channel: y,
                    guildId: P
                })
            })
        }, b = R.default.useName(M), G = (0, l.useStateFromStores)([S.default, h.default, m.default], () => O.default.getNickname(P, s, M)), w = A.default.getGuild(P), B = (0, E.useClydeEnabled)(w, y) && r === C.CLYDE_AI_USER_ID ? C.CLYDE_AI_MENTION_COLOR : null;
        if (null == M) return (0, i.jsx)(g, {
            userId: I,
            className: t,
            children: L
        });
        let k = e => (0, i.jsx)(p.default, {
            className: t,
            onContextMenu: U,
            color: B,
            ...e,
            children: "@".concat(null != G ? G : b)
        });
        return v ? (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: D,
            children: k()
        }) : (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: D,
            children: (0, i.jsx)(u.Popout, {
                preload: null == M ? void 0 : () => (0, T.maybeFetchUserProfileForPopout)(M.id, M.getAvatarURL(P, 80), {
                    guildId: null != P ? P : void 0,
                    channelId: null != s ? s : void 0
                }),
                renderPopout: e => (a()(null != M, "Unexpected missing user"), (0, i.jsx)(f.default, {
                    location: "UserMention",
                    userId: M.id,
                    guildId: null != P ? P : void 0,
                    channelId: s,
                    ...e
                })),
                position: o.isMobile ? "top" : "right",
                children: e => k(e)
            })
        })
    }
}