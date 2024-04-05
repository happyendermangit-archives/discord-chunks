function(t, e, i) {
    "use strict";
    i.r(e);
    var l = i("735250"),
        r = i("470079"),
        a = i("442837"),
        n = i("481060"),
        s = i("367907"),
        o = i("829883"),
        d = i("623624"),
        c = i("973542"),
        h = i("703656"),
        u = i("592125"),
        f = i("430824"),
        x = i("944486"),
        m = i("514342"),
        g = i("709586"),
        j = i("176278"),
        p = i("626135"),
        w = i("524444"),
        v = i("981631"),
        C = i("176505"),
        N = i("689938"),
        y = i("523462");
    e.default = t => {
        let {
            roleIcon: e,
            guild: i
        } = t, {
            name: T
        } = e;
        r.useEffect(() => {
            p.default.track(v.AnalyticEvents.OPEN_POPOUT, {
                type: "Role Icon Popout",
                guild_id: i.id,
                ...(0, s.collectChannelAnalyticsMetadata)(u.default.getChannel(x.default.getChannelId(i.id)))
            })
        }, []);
        let _ = (0, a.useStateFromStores)([f.default], () => null != e.roleId ? f.default.getRole(i.id, e.roleId) : void 0),
            I = (0, c.isSubscriptionRole)(_),
            E = I ? N.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
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
            children: (0, l.jsx)(w.MessagePopoutContent, {
                children: (0, l.jsxs)("div", {
                    className: y.popoutContainer,
                    children: [(0, l.jsxs)("div", {
                        className: y.mainContent,
                        children: [(0, l.jsx)("div", {
                            className: y.roleIconContainer,
                            children: (0, l.jsx)(j.default, {
                                ...O,
                                enableTooltip: !1,
                                className: y.__invalid_roleIcon,
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
                                children: E
                            })]
                        })]
                    }), (0, l.jsxs)(n.Button, {
                        size: n.Button.Sizes.SMALL,
                        color: n.Button.Colors.PRIMARY,
                        className: y.ctaButton,
                        innerClassName: y.ctaButtonContent,
                        fullWidth: !0,
                        onClick: I ? () => {
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