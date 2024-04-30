function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("367907"),
        l = n("829883"),
        u = n("623624"),
        d = n("973542"),
        _ = n("703656"),
        c = n("592125"),
        E = n("430824"),
        I = n("944486"),
        T = n("514342"),
        f = n("709586"),
        S = n("176278"),
        h = n("626135"),
        A = n("524444"),
        m = n("981631"),
        N = n("176505"),
        p = n("689938"),
        O = n("770155");
    t.default = e => {
        let {
            roleIcon: t,
            guild: n
        } = e, {
            name: R
        } = t;
        r.useEffect(() => {
            h.default.track(m.AnalyticEvents.OPEN_POPOUT, {
                type: "Role Icon Popout",
                guild_id: n.id,
                ...(0, o.collectChannelAnalyticsMetadata)(c.default.getChannel(I.default.getChannelId(n.id)))
            })
        }, []);
        let C = (0, s.useStateFromStores)([E.default], () => null != t.roleId ? E.default.getRole(n.id, t.roleId) : void 0),
            g = (0, d.isSubscriptionRole)(C),
            L = g ? p.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                name: R
            }) : p.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                name: R
            }),
            v = {
                ...t,
                src: null == t.src ? t.src : (0, l.replaceRoleIconSourceSize)(t.src, 40),
                size: 40
            };
        return (0, i.jsx)(a.Dialog, {
            children: (0, i.jsx)(A.MessagePopoutContent, {
                children: (0, i.jsxs)("div", {
                    className: O.popoutContainer,
                    children: [(0, i.jsxs)("div", {
                        className: O.mainContent,
                        children: [(0, i.jsx)("div", {
                            className: O.roleIconContainer,
                            children: (0, i.jsx)(S.default, {
                                ...v,
                                enableTooltip: !1,
                                className: O.__invalid_roleIcon,
                                enableHeight: !1
                            })
                        }), (0, i.jsxs)("div", {
                            className: O.truncatingText,
                            children: [(0, i.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                className: O.roleName,
                                children: (0, i.jsx)(T.default, {
                                    children: R
                                })
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: L
                            })]
                        })]
                    }), (0, i.jsxs)(a.Button, {
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.PRIMARY,
                        className: O.ctaButton,
                        innerClassName: O.ctaButtonContent,
                        fullWidth: !0,
                        onClick: g ? () => {
                            (0, _.transitionTo)(m.Routes.CHANNEL(n.id, N.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
                        } : () => {
                            (0, u.openGuildBoostingMarketingModal)({
                                guildId: n.id,
                                location: {
                                    section: m.AnalyticsSections.ROLE_ICON_POPOUT
                                }
                            })
                        },
                        autoFocus: !0,
                        children: [(0, i.jsx)(f.default, {
                            width: 14,
                            height: 14,
                            className: O.boosterBadge
                        }), p.default.Messages.ROLE_ICON_POPOUT_CTA]
                    })]
                })
            })
        })
    }
}