function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return N
        }
    });
    var l = i("37983"),
        r = i("884691"),
        n = i("77078"),
        a = i("716241"),
        s = i("689226"),
        o = i("95039"),
        d = i("828674"),
        c = i("393414"),
        h = i("42203"),
        u = i("18494"),
        f = i("98292"),
        x = i("118503"),
        m = i("483093"),
        g = i("599110"),
        j = i("933629"),
        w = i("49111"),
        p = i("724210"),
        v = i("782340"),
        C = i("805435"),
        N = t => {
            let {
                roleIcon: e,
                guild: i
            } = t, {
                name: N
            } = e;
            r.useEffect(() => {
                g.default.track(w.AnalyticEvents.OPEN_POPOUT, {
                    type: "Role Icon Popout",
                    guild_id: i.id,
                    ...(0, a.collectChannelAnalyticsMetadata)(h.default.getChannel(u.default.getChannelId(i.id)))
                })
            }, []);
            let y = null != e.roleId ? i.roles[e.roleId] : void 0,
                T = (0, d.isSubscriptionRole)(y),
                E = T ? v.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                    name: N
                }) : v.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                    name: N
                }),
                I = {
                    ...e,
                    src: null == e.src ? e.src : (0, s.replaceRoleIconSourceSize)(e.src, 40),
                    size: 40
                };
            return (0, l.jsx)(n.Dialog, {
                children: (0, l.jsx)(j.MessagePopoutContent, {
                    children: (0, l.jsxs)("div", {
                        className: C.popoutContainer,
                        children: [(0, l.jsxs)("div", {
                            className: C.mainContent,
                            children: [(0, l.jsx)("div", {
                                className: C.roleIconContainer,
                                children: (0, l.jsx)(m.default, {
                                    ...I,
                                    enableTooltip: !1,
                                    className: C.roleIcon,
                                    enableHeight: !1
                                })
                            }), (0, l.jsxs)("div", {
                                className: C.truncatingText,
                                children: [(0, l.jsx)(n.Heading, {
                                    variant: "heading-md/semibold",
                                    className: C.roleName,
                                    children: (0, l.jsx)(f.default, {
                                        children: N
                                    })
                                }), (0, l.jsx)(n.Text, {
                                    variant: "text-sm/normal",
                                    children: E
                                })]
                            })]
                        }), (0, l.jsxs)(n.Button, {
                            size: n.Button.Sizes.SMALL,
                            color: n.Button.Colors.PRIMARY,
                            className: C.ctaButton,
                            innerClassName: C.ctaButtonContent,
                            fullWidth: !0,
                            onClick: T ? () => {
                                (0, c.transitionTo)(w.Routes.CHANNEL(i.id, p.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
                            } : () => {
                                (0, o.openGuildBoostingMarketingModal)({
                                    guildId: i.id,
                                    location: {
                                        section: w.AnalyticsSections.ROLE_ICON_POPOUT
                                    }
                                })
                            },
                            autoFocus: !0,
                            children: [(0, l.jsx)(x.default, {
                                width: 14,
                                height: 14,
                                className: C.boosterBadge
                            }), v.default.Messages.ROLE_ICON_POPOUT_CTA]
                        })]
                    })
                })
            })
        }
}