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

    function E(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null
    }
    let v = e => {
        let {
            primary: t,
            secondary: n,
            botType: r,
            botVerified: l,
            discriminatorClass: o,
            className: c,
            usernameClass: d,
            color: E,
            botClass: v,
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
                    style: null != E ? {
                        color: E
                    } : void 0,
                    children: t
                })
            }), null != n ? (0, i.jsx)("span", {
                className: s(h.infoSpacing, o),
                children: n
            }) : void 0, null != r && (0, i.jsx)(u.default, {
                type: r,
                className: s(h.infoSpacing, v),
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
        } = e, C = (0, l.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), p = C || t || n.isNonUserBot(), _ = n.toString(), I = d.default.getName(n), m = s ? _ : null != r ? r : I, N = n.isPomelo() || f;
        if (N || m !== _) {
            let e = m === _ && N && s ? d.default.getUserTag(n, {
                    forcePomelo: f
                }) : m,
                t = a && e !== "@".concat(_) ? d.default.getUserTag(n) : void 0;
            return (0, i.jsx)(v, {
                primary: e,
                secondary: t,
                botVerified: n.isVerifiedBot(),
                botType: E(n),
                showStreamerModeTooltip: C && e !== I,
                ...h
            })
        }
        return (0, i.jsx)(c.default, {
            name: m,
            botType: E(n),
            botVerified: n.isVerifiedBot(),
            discriminator: p || m !== _ ? null : null != u ? u : n.discriminator,
            ...h
        })
    }
}