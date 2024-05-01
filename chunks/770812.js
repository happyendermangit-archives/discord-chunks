function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("990547"),
        a = n("442837"),
        s = n("780384"),
        o = n("481060"),
        l = n("410030"),
        u = n("100527"),
        d = n("906732"),
        _ = n("213609"),
        c = n("703656"),
        E = n("430824"),
        I = n("682864"),
        T = n("465670"),
        f = n("687476"),
        S = n("761966"),
        h = n("981631"),
        A = n("176505"),
        m = n("689938"),
        N = n("711101");
    let p = () => {
        let e = (0, l.default)();
        return (0, s.isThemeLight)(e) ? n("537381") : n("341048")
    };

    function O(e) {
        let {
            onClose: t,
            guildId: n,
            emojiId: s
        } = e, l = p(), {
            analyticsLocations: O
        } = (0, d.default)(u.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
        (0, _.default)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: {
                location_stack: O,
                emoji_guild_id: n,
                emoji_id: null != s ? s : null
            }
        });
        let R = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(n)),
            C = (0, a.useStateFromStores)([f.default], () => null != n && f.default.getUserSubscriptionRoles(n).size > 0),
            g = C ? m.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : m.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({
                serverName: null == R ? void 0 : R.name
            }),
            L = C ? m.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : m.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
        return (0, i.jsxs)("div", {
            className: N.container,
            children: [(0, i.jsx)("div", {
                className: N.background
            }), (0, i.jsxs)("div", {
                className: N.content,
                children: [(0, i.jsx)(o.Button, {
                    look: o.Button.Looks.BLANK,
                    size: o.Button.Sizes.ICON,
                    className: N.closeButton,
                    onClick: t,
                    children: (0, i.jsx)(T.default, {
                        "aria-label": m.default.Messages.CLOSE,
                        width: 16,
                        height: 16,
                        className: N.closeButtonIcon
                    })
                }), (0, i.jsx)("img", {
                    alt: "",
                    src: l,
                    className: N.upsellImage
                }), (0, i.jsx)(I.default, {
                    size: 22
                }), (0, i.jsx)(o.Heading, {
                    color: "header-primary",
                    variant: "heading-lg/extrabold",
                    className: N.header,
                    children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE
                }), (0, i.jsx)(I.default, {
                    size: 4
                }), (0, i.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: N.description,
                    children: g
                }), (0, i.jsx)(I.default, {
                    size: 24
                }), (0, i.jsx)(S.default, {
                    onClick: () => {
                        (0, c.transitionTo)(h.Routes.CHANNEL(n, A.StaticChannelRoute.ROLE_SUBSCRIPTIONS), void 0, void 0, O)
                    },
                    children: L
                })]
            })]
        })
    }
}