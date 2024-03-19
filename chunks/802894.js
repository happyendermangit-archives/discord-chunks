function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("759843"),
        a = n("446674"),
        s = n("819855"),
        r = n("77078"),
        o = n("841098"),
        u = n("812204"),
        d = n("685665"),
        c = n("428958"),
        f = n("393414"),
        p = n("305961"),
        m = n("191814"),
        h = n("945330"),
        x = n("256941"),
        E = n("270295"),
        y = n("49111"),
        g = n("724210"),
        S = n("782340"),
        C = n("560158");
    let I = () => {
        let e = (0, o.default)();
        return (0, s.isThemeLight)(e) ? n("602291") : n("609708")
    };

    function _(e) {
        let {
            onClose: t,
            guildId: n,
            emojiId: s
        } = e, o = I(), {
            analyticsLocations: _
        } = (0, d.default)(u.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
        (0, c.default)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: {
                location_stack: _,
                emoji_guild_id: n,
                emoji_id: null != s ? s : null
            }
        });
        let T = (0, a.useStateFromStores)([p.default], () => p.default.getGuild(n)),
            v = (0, a.useStateFromStores)([x.default], () => null != n && x.default.getUserSubscriptionRoles(n).size > 0),
            N = v ? S.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : S.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({
                serverName: null == T ? void 0 : T.name
            }),
            A = v ? S.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : S.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
        return (0, i.jsxs)("div", {
            className: C.container,
            children: [(0, i.jsx)("div", {
                className: C.background
            }), (0, i.jsxs)("div", {
                className: C.content,
                children: [(0, i.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.ICON,
                    className: C.closeButton,
                    onClick: t,
                    children: (0, i.jsx)(h.default, {
                        "aria-label": S.default.Messages.CLOSE,
                        width: 16,
                        height: 16,
                        className: C.closeButtonIcon
                    })
                }), (0, i.jsx)("img", {
                    alt: "",
                    src: o,
                    className: C.upsellImage
                }), (0, i.jsx)(m.default, {
                    size: 22
                }), (0, i.jsx)(r.Heading, {
                    color: "header-primary",
                    variant: "heading-lg/extrabold",
                    className: C.header,
                    children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE
                }), (0, i.jsx)(m.default, {
                    size: 4
                }), (0, i.jsx)(r.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: C.description,
                    children: N
                }), (0, i.jsx)(m.default, {
                    size: 24
                }), (0, i.jsx)(E.default, {
                    onClick: () => {
                        (0, f.transitionTo)(y.Routes.CHANNEL(n, g.StaticChannelRoute.ROLE_SUBSCRIPTIONS), void 0, void 0, _)
                    },
                    children: A
                })]
            })]
        })
    }
}