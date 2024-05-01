function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("442837"),
        o = n("481060"),
        l = n("2052"),
        u = n("594174"),
        d = n("346656"),
        _ = n("466111"),
        c = n("74538"),
        E = n("588822"),
        I = n("659101"),
        T = n("981631"),
        f = n("689938"),
        S = n("378882"),
        h = n("795197");

    function A(e) {
        let {
            guildName: t
        } = e;
        return (0, i.jsxs)("div", {
            className: S.guildMemberProfileTooltip,
            children: [(0, i.jsx)(_.default, {
                className: S.guildMemberProfileTooltipNitroWheel
            }), f.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                guildName: t
            })]
        })
    }

    function m(e) {
        let {
            guild: t,
            bio: r,
            hidePersonalInformation: _,
            isUsingGuildBio: m,
            lastSection: N = !1,
            animateOnHover: p = !1,
            isHovering: O = !1,
            lineClamp: R
        } = e, {
            location: C
        } = (0, l.useAnalyticsContext)(), g = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()), L = c.default.canUsePremiumGuildMemberProfile(g);
        return _ || null == r || "" === r ? null : (0, i.jsxs)(I.default, {
            lastSection: N,
            children: [(0, i.jsxs)(o.Heading, {
                variant: "eyebrow",
                className: h.title,
                children: [f.default.Messages.USER_POPOUT_ABOUT_ME, null != t && m && (0, i.jsx)(o.Tooltip, {
                    color: o.Tooltip.Colors.CUSTOM,
                    tooltipClassName: S.aboutMeGuildIconTooltip,
                    "aria-label": f.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t.name
                    }),
                    text: (0, i.jsx)(A, {
                        guildName: t.name
                    }),
                    children: e => (0, i.jsx)(d.default, {
                        ...e,
                        onClick: () => {
                            var t;
                            null == (t = e.onClick) || t(), null != g && !L && (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.e("84509").then(n.bind(n, "933696"));
                                return t => (0, i.jsx)(e, {
                                    ...t,
                                    source: {
                                        ...C,
                                        object: T.AnalyticsObjects.GUILD_ICON
                                    }
                                })
                            })
                        },
                        guild: t,
                        size: d.default.Sizes.SMOL,
                        className: a()(S.aboutMeGuildIcon, {
                            [S.nonPremiumHoverState]: !L
                        })
                    })
                })]
            }), (0, i.jsx)(E.default, {
                userBio: r,
                animateOnHover: p,
                isHovering: O,
                lineClamp: R
            })]
        })
    }
}