function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        animatedGuildBannerUpsellPerks: function() {
            return A
        },
        customRoleIconUpsellPerks: function() {
            return v
        },
        guildBannerUpsellPerks: function() {
            return g
        },
        guildBoostingPerks: function() {
            return R
        },
        guildInviteUpsellPerks: function() {
            return N
        },
        premiumProgressBarUpsellPerks: function() {
            return C
        },
        vanityUrlUpsellPerks: function() {
            return b
        }
    });
    var r = n("447515"),
        o = n("245978"),
        i = n("12927"),
        a = n("134466"),
        u = n("2158"),
        s = n("557244"),
        l = n("197111"),
        c = n("350073"),
        f = n("147163"),
        d = n("173348"),
        _ = n("650313"),
        E = n("281767");
    n("868615");
    var p = n("941504"),
        m = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
            return {
                color: e,
                icon: u.default,
                description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
            }
        },
        y = function() {
            return {
                color: r.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                icon: s.default,
                description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
            }
        },
        I = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
            return {
                color: e,
                icon: d.default,
                description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
            }
        },
        h = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                n = 0,
                o = 0;
            switch (e) {
                case E.BoostedGuildTiers.TIER_1:
                    n = 15, o = 100;
                    break;
                case E.BoostedGuildTiers.TIER_2:
                    n = 30, o = 150;
                    break;
                case E.BoostedGuildTiers.TIER_3:
                    n = 60, o = 250
            }
            return {
                color: t,
                icon: d.default,
                description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                    numStickers: n,
                    numEmojis: o
                })
            }
        },
        O = function() {
            return {
                color: r.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                icon: f.default,
                description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
            }
        },
        T = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
            return {
                color: r.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                icon: i.default,
                description: e
            }
        },
        S = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
            return {
                color: e,
                icon: c.default,
                description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
            }
        };

    function v() {
        return [y(), {
            color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: l.default,
            description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
        }, I(), T()]
    }

    function g() {
        return [y(), h(E.BoostedGuildTiers.TIER_2), S(), T()]
    }

    function A() {
        return [h(E.BoostedGuildTiers.TIER_3, r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), {
            color: r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            icon: _.default,
            description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
        }, O(), T()]
    }

    function b() {
        return [O(), {
            color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: u.default,
            description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
        }, h(E.BoostedGuildTiers.TIER_3), T()]
    }

    function N() {
        return [{
            color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: l.default,
            description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
        }, I(), m(), T()]
    }

    function R() {
        return [I(), T()]
    }

    function C() {
        return [{
            icon: a.default,
            color: r.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
            description: p.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
        }, {
            icon: s.default,
            color: r.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
            description: p.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
        }, {
            icon: o.default,
            description: p.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
        }, {
            color: r.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: i.default,
            description: p.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
        }]
    }
}