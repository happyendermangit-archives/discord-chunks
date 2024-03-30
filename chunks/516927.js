function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var r = n("470079"),
        o = n("383959"),
        i = n("898511"),
        a = n("751848"),
        u = n("784184"),
        s = n("523263"),
        l = n("649455"),
        c = n("396586"),
        f = n("278982"),
        d = n("163291"),
        _ = n("306912"),
        E = n("644463"),
        p = n("247164"),
        m = n("983405"),
        y = n("839032"),
        I = n("281767"),
        h = n("928204"),
        O = n("941504"),
        T = n("352082"),
        S = function() {
            var e = (0, s.default)();
            return (0, a.isThemeLight)(e) ? n("537381") : n("341048")
        };

    function v(e) {
        var t = e.onClose,
            n = e.guildId,
            a = e.emojiId,
            s = S(),
            v = (0, c.default)(l.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL).analyticsLocations;
        (0, f.default)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: {
                location_stack: v,
                emoji_guild_id: n,
                emoji_id: null != a ? a : null
            }
        });
        var g = (0, i.useStateFromStores)([_.default], function() {
                return _.default.getGuild(n)
            }),
            A = (0, i.useStateFromStores)([m.default], function() {
                return null != n && m.default.getUserSubscriptionRoles(n).size > 0
            }),
            b = A ? O.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : O.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({
                serverName: null == g ? void 0 : g.name
            }),
            N = A ? O.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : O.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
        return r.createElement("div", {
            className: T.container
        }, r.createElement("div", {
            className: T.background
        }), r.createElement("div", {
            className: T.content
        }, r.createElement(u.Button, {
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.ICON,
            className: T.closeButton,
            onClick: t
        }, r.createElement(p.default, {
            "aria-label": O.default.Messages.CLOSE,
            width: 16,
            height: 16,
            className: T.closeButtonIcon
        })), r.createElement("img", {
            alt: "",
            src: s,
            className: T.upsellImage
        }), r.createElement(E.default, {
            size: 22
        }), r.createElement(u.Heading, {
            color: "header-primary",
            variant: "heading-lg/extrabold",
            className: T.header
        }, O.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE), r.createElement(E.default, {
            size: 4
        }), r.createElement(u.Text, {
            color: "header-secondary",
            variant: "text-md/normal",
            className: T.description
        }, b), r.createElement(E.default, {
            size: 24
        }), r.createElement(y.default, {
            onClick: function() {
                (0, d.transitionTo)(I.Routes.CHANNEL(n, h.StaticChannelRoute.ROLE_SUBSCRIPTIONS), void 0, void 0, v)
            }
        }, N)))
    }
}