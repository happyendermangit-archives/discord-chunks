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
        d = t("77078"),
        k = t("102985"),
        r = t("79798"),
        e = t("754474"),
        p = t("158998"),
        n = t("782340"),
        m = t("168540");

    function c(i) {
        if (i.isSystemUser()) return e.BotTypes.SYSTEM_DM;
        if (i.isClyde()) return e.BotTypes.AI;
        if (i.bot) return e.BotTypes.BOT;
        return null
    }
    let l = i => {
        let {
            primary: x,
            secondary: t,
            botType: a,
            botVerified: y,
            discriminatorClass: k,
            className: e,
            usernameClass: p,
            color: c,
            botClass: l,
            showStreamerModeTooltip: f
        } = i;
        return (0, s.jsxs)("div", {
            className: o(m.info, e),
            children: [(0, s.jsx)(d.Tooltip, {
                text: n.default.Messages.STREAMER_MODE_ENABLED,
                shouldShow: f,
                "aria-label": !!f && void 0,
                children: i => (0, s.jsx)("span", {
                    ...i,
                    className: o(m.username, p),
                    style: null != c ? {
                        color: c
                    } : void 0,
                    children: x
                })
            }), null != t ? (0, s.jsx)("span", {
                className: o(m.infoSpacing, k),
                children: t
            }) : void 0, null != a && (0, s.jsx)(r.default, {
                type: a,
                className: o(m.infoSpacing, l),
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
            showAccountIdentifier: d,
            overrideDiscriminator: r,
            forcePomelo: n,
            ...m
        } = i, f = (0, y.useStateFromStores)([k.default], () => k.default.hidePersonalInformation), _ = f || x || t.isNonUserBot(), u = t.toString(), h = p.default.getName(t), I = o ? u : null != a ? a : h, b = t.isPomelo() || n;
        if (b || I !== u) {
            let i = I === u && b && o ? p.default.getUserTag(t, {
                    forcePomelo: n
                }) : I,
                x = d && i !== "@".concat(u) ? p.default.getUserTag(t) : void 0;
            return (0, s.jsx)(l, {
                primary: i,
                secondary: x,
                botVerified: t.isVerifiedBot(),
                botType: c(t),
                showStreamerModeTooltip: f && i !== h,
                ...m
            })
        }
        return (0, s.jsx)(e.default, {
            name: I,
            botType: c(t),
            botVerified: t.isVerifiedBot(),
            discriminator: _ || I !== u ? null : null != r ? r : t.discriminator,
            ...m
        })
    }
}