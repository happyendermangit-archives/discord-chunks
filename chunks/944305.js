function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        customRoleIconUpsellPerks: function() {
            return w
        },
        guildBannerUpsellPerks: function() {
            return S
        },
        animatedGuildBannerUpsellPerks: function() {
            return B
        },
        vanityUrlUpsellPerks: function() {
            return O
        },
        guildInviteUpsellPerks: function() {
            return G
        },
        guildBoostingPerks: function() {
            return A
        },
        premiumProgressBarUpsellPerks: function() {
            return j
        }
    });
    var r = s("669491"),
        o = s("245307"),
        l = s("571658"),
        a = s("118503"),
        n = s("110006"),
        i = s("682344"),
        u = s("238521"),
        d = s("394832"),
        c = s("290581"),
        f = s("595086"),
        _ = s("885541"),
        E = s("49111");
    s("646718");
    var I = s("782340");
    let C = () => ({
            color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: u.default,
            description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
        }),
        R = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
            return {
                color: e,
                icon: n.default,
                description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
            }
        },
        M = () => ({
            color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: u.default,
            description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
        }),
        g = () => ({
            color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: n.default,
            description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
        }),
        L = () => ({
            color: r.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
            icon: i.default,
            description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
        }),
        h = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
            return {
                color: e,
                icon: f.default,
                description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
            }
        },
        p = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                s = 0,
                o = 0;
            switch (e) {
                case E.BoostedGuildTiers.TIER_1:
                    s = 15, o = 100;
                    break;
                case E.BoostedGuildTiers.TIER_2:
                    s = 30, o = 150;
                    break;
                case E.BoostedGuildTiers.TIER_3:
                    s = 60, o = 250
            }
            return {
                color: t,
                icon: f.default,
                description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                    numStickers: s,
                    numEmojis: o
                })
            }
        },
        P = () => ({
            color: r.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
            icon: c.default,
            description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
        }),
        U = () => ({
            icon: o.default,
            description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
        }),
        T = () => ({
            icon: a.default,
            color: r.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
            description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
        }),
        N = () => ({
            icon: i.default,
            color: r.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
            description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
        }),
        v = () => ({
            color: r.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: l.default,
            description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
        }),
        D = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
            return {
                color: r.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                icon: l.default,
                description: e
            }
        },
        x = () => ({
            color: r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            icon: _.default,
            description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
        }),
        m = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
            return {
                color: e,
                icon: d.default,
                description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
            }
        };

    function w() {
        return [L(), M(), h(), D()]
    }

    function S() {
        return [L(), p(E.BoostedGuildTiers.TIER_2), m(), D()]
    }

    function B() {
        return [p(E.BoostedGuildTiers.TIER_3, r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), x(), P(), D()]
    }

    function O() {
        return [P(), g(), p(E.BoostedGuildTiers.TIER_3), D()]
    }

    function G() {
        return [C(), h(), R(), D()]
    }

    function A() {
        return [h(), D()]
    }

    function j() {
        return [T(), N(), U(), v()]
    }
}