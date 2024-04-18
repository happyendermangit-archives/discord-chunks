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
            className: t
        } = e, n = r.useCallback(() => {
            (0, I.showInaccessibleLinkModal)({
                kind: "user"
            })
        }, []);
        return (0, i.jsx)(p.default, {
            className: t,
            onClick: n,
            children: "@".concat(g.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER)
        })
    }

    function D(e) {
        let {
            className: t,
            userId: r,
            channelId: s,
            inlinePreview: I = !1
        } = e, {
            analyticsLocations: g
        } = (0, c.default)(_.default.USER_MENTION), D = (0, l.useStateFromStores)([N.default], () => N.default.getUser(r)), v = (0, l.useStateFromStores)([S.default], () => S.default.getChannel(s)), M = null != v ? v.getGuildId() : null, y = I || null == D || null == M || null == s ? void 0 : e => {
            null != v && (0, d.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("70866"), n.e("12435"), n.e("6696")]).then(n.bind(n, "757387"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: D,
                    channel: v,
                    guildId: M
                })
            })
        }, P = R.default.useName(D), U = (0, l.useStateFromStores)([S.default, h.default, m.default], () => O.default.getNickname(M, s, D)), b = A.default.getGuild(M), G = (0, E.useClydeEnabled)(b, v) && r === C.CLYDE_AI_USER_ID ? C.CLYDE_AI_MENTION_COLOR : null;
        if (null == D) return (0, i.jsx)(L, {
            className: t
        });
        let w = e => (0, i.jsx)(p.default, {
            className: t,
            onContextMenu: y,
            color: G,
            ...e,
            children: "@".concat(null != U ? U : P)
        });
        return I ? (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: g,
            children: w()
        }) : (0, i.jsx)(c.AnalyticsLocationProvider, {
            value: g,
            children: (0, i.jsx)(u.Popout, {
                preload: null == D ? void 0 : () => (0, T.default)(D.id, D.getAvatarURL(M, 80), {
                    guildId: null != M ? M : void 0,
                    channelId: null != s ? s : void 0
                }),
                renderPopout: e => (a()(null != D, "Unexpected missing user"), (0, i.jsx)(f.default, {
                    location: "UserMention",
                    userId: D.id,
                    guildId: null != M ? M : void 0,
                    channelId: s,
                    ...e
                })),
                position: o.isMobile ? "top" : "right",
                children: e => w(e)
            })
        })
    }
}