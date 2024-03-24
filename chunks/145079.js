function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        l = n("446674"),
        a = n("77078"),
        o = n("102985"),
        u = n("79798"),
        c = n("754474"),
        d = n("158998"),
        f = n("782340"),
        h = n("168540");

    function v(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null
    }
    let p = e => {
        let {
            primary: t,
            secondary: n,
            botType: r,
            botVerified: l,
            discriminatorClass: o,
            className: c,
            usernameClass: d,
            color: v,
            botClass: p,
            showStreamerModeTooltip: C
        } = e;
        return (0, i.jsxs)("div", {
            className: s(h.info, c),
            children: [(0, i.jsx)(a.Tooltip, {
                text: f.default.Messages.STREAMER_MODE_ENABLED,
                shouldShow: C,
                "aria-label": !!C && void 0,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: s(h.username, d),
                    style: null != v ? {
                        color: v
                    } : void 0,
                    children: t
                })
            }), null != n ? (0, i.jsx)("span", {
                className: s(h.infoSpacing, o),
                children: n
            }) : void 0, null != r && (0, i.jsx)(u.default, {
                type: r,
                className: s(h.infoSpacing, p),
                verified: l
            })]
        })
    };
    var C = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: r,
            forceUsername: s,
            showAccountIdentifier: a,
            overrideDiscriminator: u,
            forcePomelo: f,
            ...h
        } = e, C = (0, l.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), E = C || t || n.isNonUserBot(), m = n.toString(), _ = d.default.getName(n), g = s ? m : null != r ? r : _, N = n.isPomelo() || f;
        if (N || g !== m) {
            let e = g === m && N && s ? d.default.getUserTag(n, {
                    forcePomelo: f
                }) : g,
                t = a && e !== "@".concat(m) ? d.default.getUserTag(n) : void 0;
            return (0, i.jsx)(p, {
                primary: e,
                secondary: t,
                botVerified: n.isVerifiedBot(),
                botType: v(n),
                showStreamerModeTooltip: C && e !== _,
                ...h
            })
        }
        return (0, i.jsx)(c.default, {
            name: g,
            botType: v(n),
            botVerified: n.isVerifiedBot(),
            discriminator: E || g !== m ? null : null != u ? u : n.discriminator,
            ...h
        })
    }
}