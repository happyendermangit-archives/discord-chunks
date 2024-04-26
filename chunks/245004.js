function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("399606"),
        s = n("481060"),
        a = n("607070"),
        o = n("689938"),
        l = n("401461"),
        u = n("567949"),
        d = n("552781"),
        _ = n("952567"),
        c = n("807159");

    function E(e) {
        let {
            description: t,
            heading: n,
            imgSrc: r
        } = e;
        return (0, i.jsxs)("div", {
            className: l.topPerksCard,
            children: [(0, i.jsx)("img", {
                className: l.topPerksCardImage,
                src: r,
                alt: ""
            }), (0, i.jsx)(s.Heading, {
                className: l.topPerksCardHeading,
                variant: "heading-lg/extrabold",
                children: n
            }), (0, i.jsx)(s.Text, {
                className: l.topPerksCardDescription,
                variant: "text-sm/normal",
                children: t
            })]
        })
    }
    t.default = function() {
        let e = (0, r.useStateFromStores)([a.default], () => a.default.useReducedMotion);
        return (0, i.jsxs)("div", {
            className: l.wrapper,
            children: [(0, i.jsx)(s.Heading, {
                className: l.heading,
                variant: "heading-xxl/extrabold",
                children: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HEADING
            }), (0, i.jsxs)("div", {
                className: l.topPerksCards,
                children: [(0, i.jsx)(E, {
                    description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_DESCRIPTION,
                    heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_HEADING,
                    imgSrc: _
                }), (0, i.jsx)(E, {
                    description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_DESCRIPTION,
                    heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_HEADING,
                    imgSrc: e ? d : u
                }), (0, i.jsx)(E, {
                    description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_DESCRIPTION,
                    heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_HEADING,
                    imgSrc: c
                })]
            })]
        })
    }
}