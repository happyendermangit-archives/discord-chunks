function(i, x, t) {
    "use strict";
    t.r(x), t.d(x, {
        default: function() {
            return f
        }
    });
    var s = t("37983");
    t("884691");
    var a = t("414456"),
        o = t.n(a),
        y = t("446674"),
        k = t("77078"),
        d = t("102985"),
        p = t("79798"),
        r = t("754474"),
        e = t("158998"),
        m = t("782340"),
        n = t("168540");

    function c(i) {
        if (i.isSystemUser()) return r.BotTypes.SYSTEM_DM;
        if (i.isClyde()) return r.BotTypes.AI;
        if (i.bot) return r.BotTypes.BOT;
        return null
    }
    let l = i => {
        let {
            primary: x,
            secondary: t,
            botType: a,
            botVerified: y,
            discriminatorClass: d,
            className: r,
            usernameClass: e,
            color: c,
            botClass: l,
            showStreamerModeTooltip: f
        } = i;
        return (0, s.jsxs)("div", {
            className: o(n.info, r),
            children: [(0, s.jsx)(k.Tooltip, {
                text: m.default.Messages.STREAMER_MODE_ENABLED,
                shouldShow: f,
                "aria-label": !!f && void 0,
                children: i => (0, s.jsx)("span", {
                    ...i,
                    className: o(n.username, e),
                    style: null != c ? {
                        color: c
                    } : void 0,
                    children: x
                })
            }), null != t ? (0, s.jsx)("span", {
                className: o(n.infoSpacing, d),
                children: t
            }) : void 0, null != a && (0, s.jsx)(p.default, {
                type: a,
                className: o(n.infoSpacing, l),
                verified: y
            })]
        })
    };
    var f = i => {
        let {
            hideDiscriminator: x = !1,
            user: t,
            nick: a,
            forceUsername: o,
            showAccountIdentifier: k,
            overrideDiscriminator: p,
            forcePomelo: m,
            ...n
        } = i, f = (0, y.useStateFromStores)([d.default], () => d.default.hidePersonalInformation), h = f || x || t.isNonUserBot(), _ = t.toString(), u = e.default.getName(t), b = o ? _ : null != a ? a : u, I = t.isPomelo() || m;
        if (I || b !== _) {
            let i = b === _ && I && o ? e.default.getUserTag(t, {
                    forcePomelo: m
                }) : b,
                x = k && i !== "@".concat(_) ? e.default.getUserTag(t) : void 0;
            return (0, s.jsx)(l, {
                primary: i,
                secondary: x,
                botVerified: t.isVerifiedBot(),
                botType: c(t),
                showStreamerModeTooltip: f && i !== u,
                ...n
            })
        }
        return (0, s.jsx)(r.default, {
            name: b,
            botType: c(t),
            botVerified: t.isVerifiedBot(),
            discriminator: h || b !== _ ? null : null != p ? p : t.discriminator,
            ...n
        })
    }
}