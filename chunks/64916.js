function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ANIMATED_AVATAR: function() {
            return S
        },
        ANIMATED_EMOJIS: function() {
            return y
        },
        APP_ICONS: function() {
            return R
        },
        BOOST_DISCOUNT: function() {
            return P
        },
        CLIENT_THEMES: function() {
            return C
        },
        COLLECTIBLES: function() {
            return N
        },
        CUSTOM_CALL_SOUNDS: function() {
            return T
        },
        CUSTOM_DISCRIMINATOR: function() {
            return v
        },
        EMOJIS_EVERYWHERE: function() {
            return I
        },
        FANCY_VOICE_CHANNEL_REACTIONS: function() {
            return U
        },
        FREE_BOOSTS: function() {
            return D
        },
        INCREASED_GUILD_LIMIT: function() {
            return B
        },
        INCREASED_MESSAGE_LENGTH: function() {
            return j
        },
        INCREASED_VIDEO_UPLOAD_QUALITY: function() {
            return F
        },
        INSTALL_PREMIUM_APPLICATIONS: function() {
            return w
        },
        PREMIUM_GUILD_MEMBER_PROFILE: function() {
            return g
        },
        PROFILE_BADGES: function() {
            return A
        },
        PROFILE_PREMIUM_FEATURES: function() {
            return b
        },
        REDEEM_PREMIUM_PERKS: function() {
            return k
        },
        SOUNDBOARD_EVERYWHERE: function() {
            return O
        },
        STICKERS_EVERYWHERE: function() {
            return h
        },
        STREAM_HIGH_QUALITY: function() {
            return M
        },
        STREAM_MID_QUALITY: function() {
            return L
        },
        UPLOAD_LARGE_FILES: function() {
            return V
        },
        VIDEO_FILTER_ASSETS: function() {
            return G
        },
        canUserUse: function() {
            return x
        }
    });
    var r, o, i = n("35523"),
        a = n("59747"),
        u = n("121677"),
        s = n("125349"),
        l = n("868615");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = new i.default("ProductCatalog.tsx"),
        p = Object.freeze((f(r = {}, l.PremiumTypes.TIER_0, l.PremiumSubscriptionSKUs.TIER_0), f(r, l.PremiumTypes.TIER_1, l.PremiumSubscriptionSKUs.TIER_1), f(r, l.PremiumTypes.TIER_2, l.PremiumSubscriptionSKUs.TIER_2), r)),
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(o, e);
            var t, n, r = (t = o, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : c(e)
            });

            function o(e, t) {
                var n;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, o), n = r.call(this, e, function(e) {
                    return function(e, t) {
                        if (null == t || null == t.premiumType) return !1;
                        try {
                            var n, r = p[t.premiumType];
                            if (null == r) return E.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
                            var o = H[r];
                            if (null == o) return E.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(r, " and premium type ").concat(t.premiumType)), !1;
                            return o.skuFeatures.includes(e)
                        } catch (e) {
                            E.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
                        }
                        return !1
                    }(c(n), e)
                }, t)
            }
            return o
        }(u.default),
        y = new m("animatedEmojis"),
        I = new m("emojisEverywhere"),
        h = new m("stickersEverywhere"),
        O = new m("soundboardEverywhere"),
        T = new m("customCallSounds"),
        S = new m("animatedAvatar"),
        v = new m("customDiscriminator"),
        g = new m("premiumGuildMemberProfile"),
        A = new m("profileBadges"),
        b = new m("profilePremiumFeatures", "custom banner and avatar decoration"),
        N = new m("collectibles"),
        R = new m("appIcons"),
        C = new m("clientThemes"),
        P = new m("boostDiscount"),
        D = new m("freeBoosts"),
        L = new m("streamMidQuality"),
        M = new m("streamHighQuality"),
        U = new m("fancyVoiceChannelReactions"),
        w = new m("installPremiumApplications"),
        k = new m("redeemPremiumPerks"),
        G = new m("videoFilterAssets");
    new u.default("increasedFileUploadSize", a.getUserMaxFileSize);
    var B = new m("increasedGuildLimit"),
        j = new m("increasedMessageLength"),
        F = new m("increasedVideoUploadQuality"),
        V = new m("uploadLargeFiles"),
        H = Object.freeze((f(o = {}, l.PremiumSubscriptionSKUs.TIER_0, new s.default(l.PremiumSubscriptionSKUs.TIER_0, [y, I, h, A, G, F, V, R])), f(o, l.PremiumSubscriptionSKUs.TIER_1, new s.default(l.PremiumSubscriptionSKUs.TIER_1, [y, I, S, v, A, P, L, U, F, V, R])), f(o, l.PremiumSubscriptionSKUs.TIER_2, new s.default(l.PremiumSubscriptionSKUs.TIER_2, [y, I, h, O, T, S, v, g, A, b, C, P, D, L, M, U, w, k, G, B, j, F, V, R, N])), o));

    function x(e, t) {
        return e.getFeatureValue(t)
    }
}