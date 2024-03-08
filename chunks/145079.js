function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
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
    let E = e => {
        let {
            primary: t,
            secondary: n,
            botType: s,
            botVerified: l,
            discriminatorClass: o,
            className: c,
            usernameClass: d,
            color: v,
            botClass: E,
            showStreamerModeTooltip: C
        } = e;
        return (0, i.jsxs)("div", {
            className: r(h.info, c),
            children: [(0, i.jsx)(a.Tooltip, {
                text: f.default.Messages.STREAMER_MODE_ENABLED,
                shouldShow: C,
                "aria-label": !!C && void 0,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: r(h.username, d),
                    style: null != v ? {
                        color: v
                    } : void 0,
                    children: t
                })
            }), null != n ? (0, i.jsx)("span", {
                className: r(h.infoSpacing, o),
                children: n
            }) : void 0, null != s && (0, i.jsx)(u.default, {
                type: s,
                className: r(h.infoSpacing, E),
                verified: l
            })]
        })
    };
    var C = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: s,
            forceUsername: r,
            showAccountIdentifier: a,
            overrideDiscriminator: u,
            forcePomelo: f,
            ...h
        } = e, C = (0, l.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), p = C || t || n.isNonUserBot(), m = n.toString(), _ = d.default.getName(n), S = r ? m : null != s ? s : _, I = n.isPomelo() || f;
        if (I || S !== m) {
            let e = S === m && I && r ? d.default.getUserTag(n, {
                    forcePomelo: f
                }) : S,
                t = a && e !== "@".concat(m) ? d.default.getUserTag(n) : void 0;
            return (0, i.jsx)(E, {
                primary: e,
                secondary: t,
                botVerified: n.isVerifiedBot(),
                botType: v(n),
                showStreamerModeTooltip: C && e !== _,
                ...h
            })
        }
        return (0, i.jsx)(c.default, {
            name: S,
            botType: v(n),
            botVerified: n.isVerifiedBot(),
            discriminator: p || S !== m ? null : null != u ? u : n.discriminator,
            ...h
        })
    }
}