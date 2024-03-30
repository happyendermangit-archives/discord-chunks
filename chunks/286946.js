function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("37295"),
        i = n("784184"),
        a = n("622780"),
        u = n("941504"),
        s = n("826837"),
        l = n("567949"),
        c = n("552781"),
        f = n("952567"),
        d = n("807159");

    function _(e) {
        var t = e.description,
            n = e.heading,
            o = e.imgSrc;
        return r.createElement("div", {
            className: s.topPerksCard
        }, r.createElement("img", {
            className: s.topPerksCardImage,
            src: o,
            alt: ""
        }), r.createElement(i.Heading, {
            className: s.topPerksCardHeading,
            variant: "heading-lg/extrabold"
        }, n), r.createElement(i.Text, {
            className: s.topPerksCardDescription,
            variant: "text-sm/normal"
        }, t))
    }
    t.default = function() {
        var e = (0, o.useStateFromStores)([a.default], function() {
            return a.default.useReducedMotion
        });
        return r.createElement("div", {
            className: s.wrapper
        }, r.createElement(i.Heading, {
            className: s.heading,
            variant: "heading-xxl/extrabold"
        }, u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HEADING), r.createElement("div", {
            className: s.topPerksCards
        }, r.createElement(_, {
            description: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_DESCRIPTION,
            heading: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_HEADING,
            imgSrc: f
        }), r.createElement(_, {
            description: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_DESCRIPTION,
            heading: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_HEADING,
            imgSrc: e ? c : l
        }), r.createElement(_, {
            description: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_DESCRIPTION,
            heading: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_HEADING,
            imgSrc: d
        })))
    }
}