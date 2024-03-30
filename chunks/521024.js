function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("350897"),
        s = n("263744"),
        l = n("255508"),
        c = n("941504"),
        f = n("462398"),
        d = n("247844");

    function _(e) {
        var t = e.className,
            n = e.icon,
            o = e.children;
        return r.createElement("li", {
            className: i()(f.card, t)
        }, r.createElement(n, {
            className: f.icon
        }), r.createElement(a.Text, {
            className: f.__invalid_description,
            variant: "text-sm/medium"
        }, o))
    }
    t.default = function(e) {
        var t = e.cardClassName;
        return r.createElement("div", {
            className: f.wrapper
        }, r.createElement("div", {
            className: f.content
        }, r.createElement(a.Heading, {
            className: f.heading,
            color: "always-white",
            variant: "heading-xxl/bold"
        }, c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_HEADING), r.createElement("ul", {
            className: f.cards
        }, r.createElement(_, {
            className: t,
            icon: u.default
        }, c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_MEMBER_LIST_ICON), r.createElement(_, {
            className: t,
            icon: function(e) {
                return r.createElement("img", {
                    className: i()(e.className, f.iconImage),
                    src: d,
                    alt: ""
                })
            }
        }, c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_PROFILE_BADGE), r.createElement(_, {
            className: t,
            icon: l.default
        }, c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_BOOSTER_ROLE), r.createElement(_, {
            className: t,
            icon: s.default
        }, c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_COMMUNITY_SUPPORT))), r.createElement("div", {
            className: f.backgroundImages
        }))
    }
}