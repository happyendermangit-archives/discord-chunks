function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("446674"),
        r = n("77078"),
        o = n("997289"),
        u = n("697218"),
        d = n("476263"),
        c = n("216422"),
        f = n("719923"),
        p = n("485422"),
        m = n("777003"),
        h = n("49111"),
        x = n("782340"),
        E = n("20010"),
        y = n("862939");

    function g(e) {
        let {
            guildName: t
        } = e;
        return (0, i.jsxs)("div", {
            className: E.guildMemberProfileTooltip,
            children: [(0, i.jsx)(c.default, {
                className: E.guildMemberProfileTooltipNitroWheel
            }), x.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                guildName: t
            })]
        })
    }

    function S(e) {
        let {
            guild: t,
            bio: l,
            hidePersonalInformation: c,
            isUsingGuildBio: S,
            lastSection: C = !1,
            animateOnHover: T = !1,
            isHovering: _ = !1,
            lineClamp: I
        } = e, {
            location: v
        } = (0, o.useAnalyticsContext)(), N = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()), A = f.default.canUsePremiumGuildMemberProfile(N);
        return c || null == l || "" === l ? null : (0, i.jsxs)(m.default, {
            lastSection: C,
            children: [(0, i.jsxs)(r.Heading, {
                variant: "eyebrow",
                className: y.title,
                children: [x.default.Messages.USER_POPOUT_ABOUT_ME, null != t && S && (0, i.jsx)(r.Tooltip, {
                    color: r.Tooltip.Colors.CUSTOM,
                    tooltipClassName: E.aboutMeGuildIconTooltip,
                    "aria-label": x.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t.name
                    }),
                    text: (0, i.jsx)(g, {
                        guildName: t.name
                    }),
                    children: e => (0, i.jsx)(d.default, {
                        ...e,
                        onClick: () => {
                            var t;
                            null == (t = e.onClick) || t(), null != N && !A && (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("414242").then(n.bind(n, "414242"));
                                return t => (0, i.jsx)(e, {
                                    ...t,
                                    source: {
                                        ...v,
                                        object: h.AnalyticsObjects.GUILD_ICON
                                    }
                                })
                            })
                        },
                        guild: t,
                        size: d.default.Sizes.SMOL,
                        className: a(E.aboutMeGuildIcon, {
                            [E.nonPremiumHoverState]: !A
                        })
                    })
                })]
            }), (0, i.jsx)(p.default, {
                userBio: l,
                animateOnHover: T,
                isHovering: _,
                lineClamp: I
            })]
        })
    }
}