function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return T
        }
    });
    var i = s("37983");
    s("884691");
    var r = s("65597"),
        a = s("77078"),
        l = s("206230"),
        o = s("782340"),
        n = s("838118"),
        u = s("845120"),
        d = s("710978"),
        c = s("725019"),
        E = s("723956");

    function _(e) {
        let {
            description: t,
            heading: s,
            imgSrc: r
        } = e;
        return (0, i.jsxs)("div", {
            className: n.topPerksCard,
            children: [(0, i.jsx)("img", {
                className: n.topPerksCardImage,
                src: r,
                alt: ""
            }), (0, i.jsx)(a.Heading, {
                className: n.topPerksCardHeading,
                variant: "heading-lg/extrabold",
                children: s
            }), (0, i.jsx)(a.Text, {
                className: n.topPerksCardDescription,
                variant: "text-sm/normal",
                children: t
            })]
        })
    }
    var T = function() {
        let e = (0, r.default)([l.default], () => l.default.useReducedMotion);
        return (0, i.jsxs)("div", {
            className: n.wrapper,
            children: [(0, i.jsx)(a.Heading, {
                className: n.heading,
                variant: "heading-xxl/extrabold",
                children: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HEADING
            }), (0, i.jsxs)("div", {
                className: n.topPerksCards,
                children: [(0, i.jsx)(_, {
                    description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_DESCRIPTION,
                    heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_HEADING,
                    imgSrc: c
                }), (0, i.jsx)(_, {
                    description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_DESCRIPTION,
                    heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_HEADING,
                    imgSrc: e ? d : u
                }), (0, i.jsx)(_, {
                    description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_DESCRIPTION,
                    heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_HEADING,
                    imgSrc: E
                })]
            })]
        })
    }
}