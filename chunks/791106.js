function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        Gradients: function() {
            return n
        },
        GradientCssUrls: function() {
            return i
        },
        default: function() {
            return I
        }
    });
    var r = s("37983"),
        o = s("884691"),
        l = s("748820"),
        a = s("669491");
    let n = Object.freeze({
            PREMIUM_TIER_0: (0, l.v4)(),
            PREMIUM_TIER_1: (0, l.v4)(),
            PREMIUM_TIER_2: (0, l.v4)(),
            PREMIUM_GUILD: (0, l.v4)(),
            PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, l.v4)()
        }),
        i = {
            PREMIUM_TIER_0: "url(#".concat(n.PREMIUM_TIER_0, ")"),
            PREMIUM_TIER_1: "url(#".concat(n.PREMIUM_TIER_1, ")"),
            PREMIUM_TIER_2: "url(#".concat(n.PREMIUM_TIER_2, ")"),
            PREMIUM_GUILD: "url(#".concat(n.PREMIUM_GUILD, ")"),
            PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(n.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
        },
        u = () => (0, r.jsxs)("linearGradient", {
            id: n.PREMIUM_TIER_0,
            children: [(0, r.jsx)("stop", {
                offset: ".1762",
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
            }), (0, r.jsx)("stop", {
                offset: "0.5351",
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
            }), (0, r.jsx)("stop", {
                offset: "1",
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
            })]
        }),
        d = () => (0, r.jsxs)("linearGradient", {
            id: n.PREMIUM_TIER_1,
            children: [(0, r.jsx)("stop", {
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
            }), (0, r.jsx)("stop", {
                offset: "1",
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
            })]
        }),
        c = () => (0, r.jsxs)("linearGradient", {
            id: n.PREMIUM_TIER_2,
            children: [(0, r.jsx)("stop", {
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
            }), (0, r.jsx)("stop", {
                offset: "0.502368",
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
            }), (0, r.jsx)("stop", {
                offset: "1",
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
            })]
        }),
        f = () => (0, r.jsxs)("linearGradient", {
            id: n.PREMIUM_GUILD,
            children: [(0, r.jsx)("stop", {
                stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
            }), (0, r.jsx)("stop", {
                offset: "1",
                stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
            })]
        }),
        _ = () => (0, r.jsxs)("linearGradient", {
            id: n.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            gradientTransform: "rotate(45)",
            children: [(0, r.jsx)("stop", {
                offset: "0",
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
            }), (0, r.jsx)("stop", {
                offset: "1",
                stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
            })]
        }),
        E = o.memo(function() {
            return (0, r.jsxs)("svg", {
                viewBox: "0 0 1 1",
                style: {
                    position: "absolute",
                    pointerEvents: "none",
                    top: -1,
                    left: -1,
                    width: 1,
                    height: 1
                },
                "aria-hidden": !0,
                children: [u(), d(), c(), f(), _()]
            })
        }, () => !0);
    var I = E
}