function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("446674"),
        r = n("77078"),
        o = n("997289"),
        u = n("697218"),
        d = n("476263"),
        c = n("216422"),
        f = n("719923"),
        m = n("485422"),
        p = n("777003"),
        h = n("49111"),
        E = n("782340"),
        g = n("20010"),
        C = n("862939");

    function S(e) {
        let {
            guildName: t
        } = e;
        return (0, l.jsxs)("div", {
            className: g.guildMemberProfileTooltip,
            children: [(0, l.jsx)(c.default, {
                className: g.guildMemberProfileTooltipNitroWheel
            }), E.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                guildName: t
            })]
        })
    }

    function T(e) {
        let {
            guild: t,
            bio: i,
            hidePersonalInformation: c,
            isUsingGuildBio: T,
            lastSection: I = !1,
            animateOnHover: v = !1,
            isHovering: _ = !1,
            lineClamp: N
        } = e, {
            location: A
        } = (0, o.useAnalyticsContext)(), x = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()), y = f.default.canUsePremiumGuildMemberProfile(x);
        return c || null == i || "" === i ? null : (0, l.jsxs)(p.default, {
            lastSection: I,
            children: [(0, l.jsxs)(r.Heading, {
                variant: "eyebrow",
                className: C.title,
                children: [E.default.Messages.USER_POPOUT_ABOUT_ME, null != t && T && (0, l.jsx)(r.Tooltip, {
                    color: r.Tooltip.Colors.CUSTOM,
                    tooltipClassName: g.aboutMeGuildIconTooltip,
                    "aria-label": E.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t.name
                    }),
                    text: (0, l.jsx)(S, {
                        guildName: t.name
                    }),
                    children: e => (0, l.jsx)(d.default, {
                        ...e,
                        onClick: () => {
                            var t;
                            null == (t = e.onClick) || t(), null != x && !y && (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("414242").then(n.bind(n, "414242"));
                                return t => (0, l.jsx)(e, {
                                    ...t,
                                    source: {
                                        ...A,
                                        object: h.AnalyticsObjects.GUILD_ICON
                                    }
                                })
                            })
                        },
                        guild: t,
                        size: d.default.Sizes.SMOL,
                        className: a(g.aboutMeGuildIcon, {
                            [g.nonPremiumHoverState]: !y
                        })
                    })
                })]
            }), (0, l.jsx)(m.default, {
                userBio: i,
                animateOnHover: v,
                isHovering: _,
                lineClamp: N
            })]
        })
    }
}