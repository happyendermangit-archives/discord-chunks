function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ANIMATED_AVATAR: function() {
            return f
        },
        ANIMATED_EMOJIS: function() {
            return _
        },
        APP_ICONS: function() {
            return O
        },
        BOOST_DISCOUNT: function() {
            return R
        },
        CLIENT_THEMES: function() {
            return p
        },
        COLLECTIBLES: function() {
            return N
        },
        CUSTOM_CALL_SOUNDS: function() {
            return T
        },
        CUSTOM_DISCRIMINATOR: function() {
            return S
        },
        EMOJIS_EVERYWHERE: function() {
            return c
        },
        FANCY_VOICE_CHANNEL_REACTIONS: function() {
            return D
        },
        FREE_BOOSTS: function() {
            return C
        },
        INCREASED_GUILD_LIMIT: function() {
            return P
        },
        INCREASED_MESSAGE_LENGTH: function() {
            return U
        },
        INCREASED_VIDEO_UPLOAD_QUALITY: function() {
            return b
        },
        INSTALL_PREMIUM_APPLICATIONS: function() {
            return v
        },
        PREMIUM_GUILD_MEMBER_PROFILE: function() {
            return h
        },
        PROFILE_BADGES: function() {
            return A
        },
        PROFILE_PREMIUM_FEATURES: function() {
            return m
        },
        REDEEM_PREMIUM_PERKS: function() {
            return M
        },
        SOUNDBOARD_EVERYWHERE: function() {
            return I
        },
        STICKERS_EVERYWHERE: function() {
            return E
        },
        STREAM_HIGH_QUALITY: function() {
            return L
        },
        STREAM_MID_QUALITY: function() {
            return g
        },
        UPLOAD_LARGE_FILES: function() {
            return G
        },
        VIDEO_FILTER_ASSETS: function() {
            return y
        },
        canUserUse: function() {
            return k
        }
    });
    var i = n("710845"),
        r = n("380684"),
        s = n("533293"),
        a = n("575691"),
        o = n("474936");
    let l = new i.default("ProductCatalog.tsx"),
        u = Object.freeze({
            [o.PremiumTypes.TIER_0]: o.PremiumSubscriptionSKUs.TIER_0,
            [o.PremiumTypes.TIER_1]: o.PremiumSubscriptionSKUs.TIER_1,
            [o.PremiumTypes.TIER_2]: o.PremiumSubscriptionSKUs.TIER_2
        });
    class d extends s.default {
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
    let _ = new d("animatedEmojis"),
        c = new d("emojisEverywhere"),
        E = new d("stickersEverywhere"),
        I = new d("soundboardEverywhere"),
        T = new d("customCallSounds"),
        f = new d("animatedAvatar"),
        S = new d("customDiscriminator"),
        h = new d("premiumGuildMemberProfile"),
        A = new d("profileBadges"),
        m = new d("profilePremiumFeatures", "custom banner and avatar decoration"),
        N = new d("collectibles"),
        O = new d("appIcons"),
        p = new d("clientThemes"),
        R = new d("boostDiscount"),
        C = new d("freeBoosts"),
        g = new d("streamMidQuality"),
        L = new d("streamHighQuality"),
        D = new d("fancyVoiceChannelReactions"),
        v = new d("installPremiumApplications"),
        M = new d("redeemPremiumPerks"),
        y = new d("videoFilterAssets");
    new s.default("increasedFileUploadSize", r.getUserMaxFileSize);
    let P = new d("increasedGuildLimit"),
        U = new d("increasedMessageLength"),
        b = new d("increasedVideoUploadQuality"),
        G = new d("uploadLargeFiles"),
        w = Object.freeze({
            [o.PremiumSubscriptionSKUs.TIER_0]: new a.default(o.PremiumSubscriptionSKUs.TIER_0, [_, c, E, A, y, b, G, O]),
            [o.PremiumSubscriptionSKUs.TIER_1]: new a.default(o.PremiumSubscriptionSKUs.TIER_1, [_, c, f, S, A, R, g, D, b, G, O]),
            [o.PremiumSubscriptionSKUs.TIER_2]: new a.default(o.PremiumSubscriptionSKUs.TIER_2, [_, c, E, I, T, f, S, h, A, m, p, R, C, g, L, D, v, M, y, P, U, b, G, O, N])
        });

    function k(e, t) {
        return e.getFeatureValue(t)
    }
}