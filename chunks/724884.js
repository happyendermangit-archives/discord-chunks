function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("973675"),
        l = n("666272"),
        u = n("348258"),
        d = n("689938"),
        _ = n("614067"),
        c = n("247844");

    function E(e) {
        let {
            className: t,
            icon: n,
            children: r
        } = e;
        return (0, i.jsxs)("li", {
            className: s()(_.card, t),
            children: [(0, i.jsx)(n, {
                className: _.icon
            }), (0, i.jsx)(a.Text, {
                className: _.__invalid_description,
                variant: "text-sm/medium",
                children: r
            })]
        })
    }
    t.default = function(e) {
        let {
            cardClassName: t
        } = e;
        return (0, i.jsxs)("div", {
            className: _.wrapper,
            children: [(0, i.jsxs)("div", {
                className: _.content,
                children: [(0, i.jsx)(a.Heading, {
                    className: _.heading,
                    color: "always-white",
                    variant: "heading-xxl/bold",
                    children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_HEADING
                }), (0, i.jsxs)("ul", {
                    className: _.cards,
                    children: [(0, i.jsx)(E, {
                        className: t,
                        icon: o.default,
                        children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_MEMBER_LIST_ICON
                    }), (0, i.jsx)(E, {
                        className: t,
                        icon: e => (0, i.jsx)("img", {
                            className: s()(e.className, _.iconImage),
                            src: c,
                            alt: ""
                        }),
                        children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_PROFILE_BADGE
                    }), (0, i.jsx)(E, {
                        className: t,
                        icon: u.default,
                        children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_BOOSTER_ROLE
                    }), (0, i.jsx)(E, {
                        className: t,
                        icon: l.default,
                        children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_COMMUNITY_SUPPORT
                    })]
                })]
            }), (0, i.jsx)("div", {
                className: _.backgroundImages
            })]
        })
    }
}