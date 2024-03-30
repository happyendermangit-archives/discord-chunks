function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GradientCssUrls: function() {
            return u
        },
        Gradients: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("153832"),
        i = n("447515"),
        a = Object.freeze({
            PREMIUM_TIER_0: (0, o.v4)(),
            PREMIUM_TIER_1: (0, o.v4)(),
            PREMIUM_TIER_2: (0, o.v4)(),
            PREMIUM_GUILD: (0, o.v4)(),
            PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, o.v4)()
        }),
        u = {
            PREMIUM_TIER_0: "url(#".concat(a.PREMIUM_TIER_0, ")"),
            PREMIUM_TIER_1: "url(#".concat(a.PREMIUM_TIER_1, ")"),
            PREMIUM_TIER_2: "url(#".concat(a.PREMIUM_TIER_2, ")"),
            PREMIUM_GUILD: "url(#".concat(a.PREMIUM_GUILD, ")"),
            PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(a.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
        },
        s = r.memo(function() {
            return r.createElement("svg", {
                viewBox: "0 0 1 1",
                style: {
                    position: "absolute",
                    pointerEvents: "none",
                    top: -1,
                    left: -1,
                    width: 1,
                    height: 1
                },
                "aria-hidden": !0
            }, r.createElement("linearGradient", {
                id: a.PREMIUM_TIER_0
            }, r.createElement("stop", {
                offset: ".1762",
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
            }), r.createElement("stop", {
                offset: "0.5351",
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
            }), r.createElement("stop", {
                offset: "1",
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
            })), r.createElement("linearGradient", {
                id: a.PREMIUM_TIER_1
            }, r.createElement("stop", {
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
            }), r.createElement("stop", {
                offset: "1",
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
            })), r.createElement("linearGradient", {
                id: a.PREMIUM_TIER_2
            }, r.createElement("stop", {
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
            }), r.createElement("stop", {
                offset: "0.502368",
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
            }), r.createElement("stop", {
                offset: "1",
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
            })), r.createElement("linearGradient", {
                id: a.PREMIUM_GUILD
            }, r.createElement("stop", {
                stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
            }), r.createElement("stop", {
                offset: "1",
                stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
            })), r.createElement("linearGradient", {
                id: a.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                gradientTransform: "rotate(45)"
            }, r.createElement("stop", {
                offset: "0",
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
            }), r.createElement("stop", {
                offset: "1",
                stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
            })))
        }, function() {
            return !0
        });
    t.default = s
}