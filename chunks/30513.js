function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        animatedGuildBannerUpsellPerks: function() {
            return U
        },
        customRoleIconUpsellPerks: function() {
            return y
        },
        guildBannerUpsellPerks: function() {
            return P
        },
        guildBoostingPerks: function() {
            return w
        },
        guildInviteUpsellPerks: function() {
            return G
        },
        premiumProgressBarUpsellPerks: function() {
            return k
        },
        vanityUrlUpsellPerks: function() {
            return b
        }
    });
    var i = n("692547"),
        r = n("15385"),
        s = n("193277"),
        a = n("709586"),
        o = n("115102"),
        l = n("241820"),
        u = n("536952"),
        d = n("645284"),
        _ = n("898140"),
        c = n("68736"),
        E = n("123245"),
        I = n("981631");
    n("474936");
    var T = n("689938");
    let f = () => ({
            color: i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: u.default,
            description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
        }),
        S = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
            return {
                color: e,
                icon: o.default,
                description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
            }
        },
        h = () => ({
            color: i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: u.default,
            description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
        }),
        A = () => ({
            color: i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: o.default,
            description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
        }),
        m = () => ({
            color: i.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
            icon: l.default,
            description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
        }),
        N = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
            return {
                color: e,
                icon: c.default,
                description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
            }
        },
        p = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                n = 0,
                r = 0;
            switch (e) {
                case I.BoostedGuildTiers.TIER_1:
                    n = 15, r = 100;
                    break;
                case I.BoostedGuildTiers.TIER_2:
                    n = 30, r = 150;
                    break;
                case I.BoostedGuildTiers.TIER_3:
                    n = 60, r = 250
            }
            return {
                color: t,
                icon: c.default,
                description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                    numStickers: n,
                    numEmojis: r
                })
            }
        },
        O = () => ({
            color: i.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
            icon: _.default,
            description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
        }),
        R = () => ({
            icon: r.default,
            description: T.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
        }),
        C = () => ({
            icon: a.default,
            color: i.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
            description: T.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
        }),
        g = () => ({
            icon: l.default,
            color: i.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
            description: T.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
        }),
        L = () => ({
            color: i.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: s.default,
            description: T.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
        }),
        D = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
            return {
                color: i.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                icon: s.default,
                description: e
            }
        },
        v = () => ({
            color: i.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            icon: E.default,
            description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
        }),
        M = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
            return {
                color: e,
                icon: d.default,
                description: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
            }
        };

    function y() {
        return [m(), h(), N(), D()]
    }

    function P() {
        return [m(), p(I.BoostedGuildTiers.TIER_2), M(), D()]
    }

    function U() {
        return [p(I.BoostedGuildTiers.TIER_3, i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), v(), O(), D()]
    }

    function b() {
        return [O(), A(), p(I.BoostedGuildTiers.TIER_3), D()]
    }

    function G() {
        return [f(), N(), S(), D()]
    }

    function w() {
        return [N(), D()]
    }

    function k() {
        return [C(), g(), R(), L()]
    }
}