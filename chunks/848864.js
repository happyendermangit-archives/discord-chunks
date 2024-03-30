function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        extractPriceByPurchaseTypes: function() {
            return p
        },
        getAvatarDecorations: function() {
            return O
        },
        getCollectiblesAssetURL: function() {
            return T
        },
        getFormattedPriceForCollectiblesProduct: function() {
            return E
        },
        getLogoSize: function() {
            return b
        },
        getProductsFromCategories: function() {
            return y
        },
        getProfileEffectsFromCategories: function() {
            return v
        },
        getProfileEffectsFromPurchases: function() {
            return S
        },
        groupProfileEffects: function() {
            return g
        },
        isCollectiblesGiftCode: function() {
            return A
        },
        isFreeCollectiblesProduct: function() {
            return m
        },
        isPremiumCollectiblesProduct: function() {
            return d
        },
        isPremiumCollectiblesPurchase: function() {
            return _
        }
    });
    var r = n("392711"),
        o = n("63202"),
        i = n("896299"),
        a = n("497894"),
        u = n("363890"),
        s = n("258823"),
        l = n("281767");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e) {
        return function(e) {
            if (Array.isArray(e)) return c(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var d = function(e) {
            return (null == e ? void 0 : e.premiumType) != null
        },
        _ = function(e) {
            return (null == e ? void 0 : e.purchaseType) === l.EntitlementTypes.PREMIUM_PURCHASE
        },
        E = function(e, t, n) {
            var r, o = p(e, r = n ? t ? l.PriceSetAssignmentPurchaseTypes.MOBILE_PREMIUM_TIER_2 : l.PriceSetAssignmentPurchaseTypes.MOBILE : t ? l.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : l.PriceSetAssignmentPurchaseTypes.DEFAULT);
            return null == o ? "" : (0, a.formatPrice)(null == o ? void 0 : o.amount, null == o ? void 0 : o.currency)
        },
        p = function(e, t) {
            var n, r, o, i = null !== (o = e.prices[t]) && void 0 !== o ? o : null;
            return null == i ? null : null === (r = i.countryPrices) || void 0 === r ? void 0 : null === (n = r.prices) || void 0 === n ? void 0 : n[0]
        },
        m = function(e) {
            var t;
            return (null === (t = p(e, l.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
        },
        y = function(e) {
            var t = (0, r.flatMap)(f(e.values()), "products");
            return (0, r.uniqBy)(t, "storeListingId")
        },
        I = function(e, t) {
            if (t === o.CollectiblesItemType.AVATAR_DECORATION) {
                var n = (0, r.flatMap)(f(e.values()), "items").filter(u.isAvatarDecorationRecord);
                return (0, r.uniqBy)(n, "id")
            }
            if (t === o.CollectiblesItemType.PROFILE_EFFECT) {
                var i = (0, r.flatMap)(f(e.values()), "items").filter(s.isProfileEffectRecord);
                return (0, r.uniqBy)(i, "id")
            }
        },
        h = function(e, t) {
            var n = y(e);
            if (t === o.CollectiblesItemType.AVATAR_DECORATION) {
                var i = (0, r.flatMap)(n, "items").filter(u.isAvatarDecorationRecord);
                return (0, r.uniqBy)(i, "id")
            }
            if (t === o.CollectiblesItemType.PROFILE_EFFECT) {
                var a = (0, r.flatMap)(n, "items").filter(s.isProfileEffectRecord);
                return (0, r.uniqBy)(a, "id")
            }
        },
        O = function(e, t) {
            return (0, r.uniqBy)(f(I(e, o.CollectiblesItemType.AVATAR_DECORATION)).concat(f(h(t, o.CollectiblesItemType.AVATAR_DECORATION))), "id")
        },
        T = function(e, t) {
            var n, r = window.GLOBAL_ENV,
                o = r.CDN_HOST,
                a = r.API_ENDPOINT,
                u = (0, i.getBestMediaProxySize)(t.size * (0, i.getDevicePixelRatio)()),
                s = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "png";
            if (null != o) return "".concat(location.protocol, "//").concat(o, "/app-assets/").concat(l.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(s, "?size=").concat(u);
            var c = l.Endpoints.APPLICATION_ASSET(l.COLLECTIBLES_APPLICATION_ID, e, s);
            return "".concat(location.protocol).concat(a).concat(c, "?size=").concat(u)
        },
        S = function(e) {
            return I(e, o.CollectiblesItemType.PROFILE_EFFECT)
        },
        v = function(e) {
            return h(e, o.CollectiblesItemType.PROFILE_EFFECT)
        },
        g = function(e, t) {
            var n = S(t),
                r = v(e).filter(function(e) {
                    var t = e.id;
                    return !n.some(function(e) {
                        return e.id === t
                    })
                });
            return {
                purchased: n,
                shopPreviews: r
            }
        },
        A = function(e) {
            return e.applicationId === l.COLLECTIBLES_APPLICATION_ID
        },
        b = function(e) {
            return 3.8 * e
        }
}