function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ANIMATED_EMOJIS: function() {
            return d
        },
        EMOJIS_EVERYWHERE: function() {
            return f
        },
        STICKERS_EVERYWHERE: function() {
            return E
        },
        SOUNDBOARD_EVERYWHERE: function() {
            return p
        },
        CUSTOM_CALL_SOUNDS: function() {
            return h
        },
        ANIMATED_AVATAR: function() {
            return _
        },
        CUSTOM_DISCRIMINATOR: function() {
            return S
        },
        PREMIUM_GUILD_MEMBER_PROFILE: function() {
            return m
        },
        PROFILE_BADGES: function() {
            return T
        },
        PROFILE_PREMIUM_FEATURES: function() {
            return g
        },
        COLLECTIBLES: function() {
            return I
        },
        APP_ICONS: function() {
            return C
        },
        CLIENT_THEMES: function() {
            return v
        },
        BOOST_DISCOUNT: function() {
            return A
        },
        FREE_BOOSTS: function() {
            return R
        },
        STREAM_MID_QUALITY: function() {
            return N
        },
        STREAM_HIGH_QUALITY: function() {
            return O
        },
        FANCY_VOICE_CHANNEL_REACTIONS: function() {
            return D
        },
        INSTALL_PREMIUM_APPLICATIONS: function() {
            return y
        },
        REDEEM_PREMIUM_PERKS: function() {
            return P
        },
        VIDEO_FILTER_ASSETS: function() {
            return L
        },
        INCREASED_GUILD_LIMIT: function() {
            return b
        },
        INCREASED_MESSAGE_LENGTH: function() {
            return M
        },
        INCREASED_VIDEO_UPLOAD_QUALITY: function() {
            return U
        },
        UPLOAD_LARGE_FILES: function() {
            return G
        },
        canUserUse: function() {
            return k
        }
    });
    var i = n("605250"),
        r = n("886551"),
        s = n("45120"),
        a = n("715757"),
        o = n("646718");
    let l = new i.default("ProductCatalog.tsx"),
        u = Object.freeze({
            [o.PremiumTypes.TIER_0]: o.PremiumSubscriptionSKUs.TIER_0,
            [o.PremiumTypes.TIER_1]: o.PremiumSubscriptionSKUs.TIER_1,
            [o.PremiumTypes.TIER_2]: o.PremiumSubscriptionSKUs.TIER_2
        });
    class c extends s.default {
        constructor(e, t) {
            super(e, e => (function(e, t) {
                if (null == t || null == t.premiumType) return !1;
                try {
                    let n = u[t.premiumType];
                    if (null == n) return l.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
                    let i = w[n];
                    if (null == i) return l.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
                    return i.skuFeatures.includes(e)
                } catch (e) {
                    var n;
                    l.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
                }
                return !1
            })(this, e), t)
        }
    }
    let d = new c("animatedEmojis"),
        f = new c("emojisEverywhere"),
        E = new c("stickersEverywhere"),
        p = new c("soundboardEverywhere"),
        h = new c("customCallSounds"),
        _ = new c("animatedAvatar"),
        S = new c("customDiscriminator"),
        m = new c("premiumGuildMemberProfile"),
        T = new c("profileBadges"),
        g = new c("profilePremiumFeatures", "custom banner and avatar decoration"),
        I = new c("collectibles"),
        C = new c("appIcons"),
        v = new c("clientThemes"),
        A = new c("boostDiscount"),
        R = new c("freeBoosts"),
        N = new c("streamMidQuality"),
        O = new c("streamHighQuality"),
        D = new c("fancyVoiceChannelReactions"),
        y = new c("installPremiumApplications"),
        P = new c("redeemPremiumPerks"),
        L = new c("videoFilterAssets");
    new s.default("increasedFileUploadSize", r.getUserMaxFileSize);
    let b = new c("increasedGuildLimit"),
        M = new c("increasedMessageLength"),
        U = new c("increasedVideoUploadQuality"),
        G = new c("uploadLargeFiles"),
        w = Object.freeze({
            [o.PremiumSubscriptionSKUs.TIER_0]: new a.default(o.PremiumSubscriptionSKUs.TIER_0, [d, f, E, T, L, U, G, C]),
            [o.PremiumSubscriptionSKUs.TIER_1]: new a.default(o.PremiumSubscriptionSKUs.TIER_1, [d, f, _, S, T, A, N, D, U, G, C]),
            [o.PremiumSubscriptionSKUs.TIER_2]: new a.default(o.PremiumSubscriptionSKUs.TIER_2, [d, f, E, p, h, _, S, m, T, g, v, A, R, N, O, D, y, P, L, b, M, U, G, C, I])
        });

    function k(e, t) {
        return e.getFeatureValue(t)
    }
}