function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return T
        }
    });
    var l = i("37983"),
        r = i("884691"),
        a = i("446674"),
        n = i("77078"),
        s = i("716241"),
        o = i("689226"),
        d = i("95039"),
        c = i("828674"),
        h = i("393414"),
        u = i("42203"),
        f = i("305961"),
        x = i("18494"),
        m = i("98292"),
        g = i("118503"),
        j = i("483093"),
        w = i("599110"),
        p = i("933629"),
        v = i("49111"),
        C = i("724210"),
        N = i("782340"),
        y = i("805435"),
        T = t => {
            let {
                roleIcon: e,
                guild: i
            } = t, {
                name: T
            } = e;
            r.useEffect(() => {
                w.default.track(v.AnalyticEvents.OPEN_POPOUT, {
                    type: "Role Icon Popout",
                    guild_id: i.id,
                    ...(0, s.collectChannelAnalyticsMetadata)(u.default.getChannel(x.default.getChannelId(i.id)))
                })
            }, []);
            let I = (0, a.useStateFromStores)([f.default], () => null != e.roleId ? f.default.getRole(i.id, e.roleId) : void 0),
                E = (0, c.isSubscriptionRole)(I),
                _ = E ? N.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                    name: T
                }) : N.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                    name: T
                }),
                O = {
                    ...e,
                    src: null == e.src ? e.src : (0, o.replaceRoleIconSourceSize)(e.src, 40),
                    size: 40
                };
            return (0, l.jsx)(n.Dialog, {
                children: (0, l.jsx)(p.MessagePopoutContent, {
                    children: (0, l.jsxs)("div", {
                        className: y.popoutContainer,
                        children: [(0, l.jsxs)("div", {
                            className: y.mainContent,
                            children: [(0, l.jsx)("div", {
                                className: y.roleIconContainer,
                                children: (0, l.jsx)(j.default, {
                                    ...O,
                                    enableTooltip: !1,
                                    className: y.roleIcon,
                                    enableHeight: !1
                                })
                            }), (0, l.jsxs)("div", {
                                className: y.truncatingText,
                                children: [(0, l.jsx)(n.Heading, {
                                    variant: "heading-md/semibold",
                                    className: y.roleName,
                                    children: (0, l.jsx)(m.default, {
                                        children: T
                                    })
                                }), (0, l.jsx)(n.Text, {
                                    variant: "text-sm/normal",
                                    children: _
                                })]
                            })]
                        }), (0, l.jsxs)(n.Button, {
                            size: n.Button.Sizes.SMALL,
                            color: n.Button.Colors.PRIMARY,
                            className: y.ctaButton,
                            innerClassName: y.ctaButtonContent,
                            fullWidth: !0,
                            onClick: E ? () => {
                                (0, h.transitionTo)(v.Routes.CHANNEL(i.id, C.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
                            } : () => {
                                (0, d.openGuildBoostingMarketingModal)({
                                    guildId: i.id,
                                    location: {
                                        section: v.AnalyticsSections.ROLE_ICON_POPOUT
                                    }
                                })
                            },
                            autoFocus: !0,
                            children: [(0, l.jsx)(g.default, {
                                width: 14,
                                height: 14,
                                className: y.boosterBadge
                            }), N.default.Messages.ROLE_ICON_POPOUT_CTA]
                        })]
                    })
                })
            })
        }
}