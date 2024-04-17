function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ANIMATED_AVATAR: function() {
            return S
        },
        ANIMATED_EMOJIS: function() {
            return c
        },
        APP_ICONS: function() {
            return O
        },
        BOOST_DISCOUNT: function() {
            return C
        },
        CLIENT_THEMES: function() {
            return R
        },
        COLLECTIBLES: function() {
            return p
        },
        CUSTOM_CALL_SOUNDS: function() {
            return f
        },
        CUSTOM_DISCRIMINATOR: function() {
            return h
        },
        CUSTOM_NOTIFICATION_SOUNDS: function() {
            return v
        },
        EMOJIS_EVERYWHERE: function() {
            return E
        },
        FANCY_VOICE_CHANNEL_REACTIONS: function() {
            return M
        },
        FREE_BOOSTS: function() {
            return g
        },
        INCREASED_GUILD_LIMIT: function() {
            return b
        },
        INCREASED_MESSAGE_LENGTH: function() {
            return G
        },
        INCREASED_VIDEO_UPLOAD_QUALITY: function() {
            return w
        },
        INSTALL_PREMIUM_APPLICATIONS: function() {
            return y
        },
        PREMIUM_GUILD_MEMBER_PROFILE: function() {
            return A
        },
        PROFILE_BADGES: function() {
            return m
        },
        PROFILE_PREMIUM_FEATURES: function() {
            return N
        },
        REDEEM_PREMIUM_PERKS: function() {
            return P
        },
        SOUNDBOARD_EVERYWHERE: function() {
            return T
        },
        STICKERS_EVERYWHERE: function() {
            return I
        },
        STREAM_HIGH_QUALITY: function() {
            return D
        },
        STREAM_MID_QUALITY: function() {
            return L
        },
        UPLOAD_LARGE_FILES: function() {
            return B
        },
        VIDEO_FILTER_ASSETS: function() {
            return U
        },
        canUserUse: function() {
            return F
        }
    });
    var i = n("848246"),
        r = n("710845"),
        s = n("380684"),
        a = n("533293"),
        o = n("575691"),
        l = n("474936");
    let u = new r.default("ProductCatalog.tsx"),
        d = Object.freeze({
            [l.PremiumTypes.TIER_0]: l.PremiumSubscriptionSKUs.TIER_0,
            [l.PremiumTypes.TIER_1]: l.PremiumSubscriptionSKUs.TIER_1,
            [l.PremiumTypes.TIER_2]: l.PremiumSubscriptionSKUs.TIER_2
        });
    class _ extends a.default {
        constructor(e, t) {
            super(e, e => (function(e, t) {
                if (null == t || null == t.premiumType) return !1;
                try {
                    let n = d[t.premiumType];
                    if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
                    let i = k[n];
                    if (null == i) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
                    return i.skuFeatures.includes(e)
                } catch (e) {
                    var n;
                    u.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
                }
                return !1
            })(this, e), t)
        }
    }
    let c = new _(i.EntitlementFeatureNames.ANIMATED_EMOJIS),
        E = new _(i.EntitlementFeatureNames.EMOJIS_EVERYWHERE),
        I = new _(i.EntitlementFeatureNames.STICKERS_EVERYWHERE),
        T = new _(i.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE),
        f = new _(i.EntitlementFeatureNames.CUSTOM_CALL_SOUNDS),
        S = new _(i.EntitlementFeatureNames.ANIMATED_AVATAR),
        h = new _(i.EntitlementFeatureNames.CUSTOM_DISCRIMINATOR),
        A = new _(i.EntitlementFeatureNames.PREMIUM_GUILD_MEMBER_PROFILE),
        m = new _("profileBadges"),
        N = new _(i.EntitlementFeatureNames.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
        p = new _("collectibles"),
        O = new _("appIcons"),
        R = new _(i.EntitlementFeatureNames.CLIENT_THEMES),
        C = new _("boostDiscount"),
        g = new _("freeBoosts"),
        L = new _(i.EntitlementFeatureNames.STREAM_MID_QUALITY),
        D = new _(i.EntitlementFeatureNames.STREAM_HIGH_QUALITY),
        v = new _(i.EntitlementFeatureNames.CUSTOM_NOTIFICATION_SOUNDS),
        M = new _("fancyVoiceChannelReactions"),
        y = new _("installPremiumApplications"),
        P = new _("redeemPremiumPerks"),
        U = new _(i.EntitlementFeatureNames.VIDEO_FILTER_ASSETS);
    new a.default(i.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE, s.getUserMaxFileSize);
    let b = new _(i.EntitlementFeatureNames.INCREASED_GUILD_LIMIT),
        G = new _(i.EntitlementFeatureNames.INCREASED_MESSAGE_LENGTH),
        w = new _("increasedVideoUploadQuality"),
        B = new _("uploadLargeFiles"),
        k = Object.freeze({
            [l.PremiumSubscriptionSKUs.TIER_0]: new o.default(l.PremiumSubscriptionSKUs.TIER_0, [c, E, I, m, U, w, B, O]),
            [l.PremiumSubscriptionSKUs.TIER_1]: new o.default(l.PremiumSubscriptionSKUs.TIER_1, [c, E, S, h, m, C, L, M, w, B, O]),
            [l.PremiumSubscriptionSKUs.TIER_2]: new o.default(l.PremiumSubscriptionSKUs.TIER_2, [c, E, I, T, f, S, h, A, m, N, R, C, g, L, D, M, y, P, U, b, G, w, B, O, p, v])
        });

    function F(e, t) {
        return e.getFeatureValue(t)
    }
}