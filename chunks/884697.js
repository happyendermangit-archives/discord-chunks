function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        extractPriceByPurchaseTypes: function() {
            return I
        },
        getAvatarDecorations: function() {
            return N
        },
        getCollectiblesAssetURL: function() {
            return p
        },
        getDaysRemaining: function() {
            return v
        },
        getFormattedPriceForCollectiblesProduct: function() {
            return E
        },
        getLogoSize: function() {
            return L
        },
        getProductsFromCategories: function() {
            return f
        },
        getProfileEffectsFromCategories: function() {
            return R
        },
        getProfileEffectsFromPurchases: function() {
            return O
        },
        groupProfileEffects: function() {
            return C
        },
        isCollectiblesGiftCode: function() {
            return g
        },
        isFreeCollectiblesProduct: function() {
            return T
        },
        isPremiumCollectiblesProduct: function() {
            return _
        },
        isPremiumCollectiblesPurchase: function() {
            return c
        },
        isProductNew: function() {
            return D
        }
    }), n("47120");
    var i = n("392711"),
        r = n("979554"),
        a = n("134432"),
        s = n("937615"),
        o = n("922347"),
        l = n("212161"),
        u = n("215023"),
        d = n("981631");
    let _ = e => (null == e ? void 0 : e.premiumType) != null,
        c = e => (null == e ? void 0 : e.purchaseType) === d.EntitlementTypes.PREMIUM_PURCHASE,
        E = (e, t, n) => {
            let i;
            let r = I(e, i = n ? t ? d.PriceSetAssignmentPurchaseTypes.MOBILE_PREMIUM_TIER_2 : d.PriceSetAssignmentPurchaseTypes.MOBILE : t ? d.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : d.PriceSetAssignmentPurchaseTypes.DEFAULT);
            return null == r ? "" : (0, s.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
        },
        I = (e, t) => {
            var n, i, r;
            let a = null !== (r = e.prices[t]) && void 0 !== r ? r : null;
            return null == a ? null : null === (i = a.countryPrices) || void 0 === i ? void 0 : null === (n = i.prices) || void 0 === n ? void 0 : n[0]
        },
        T = e => {
            var t;
            return (null === (t = I(e, d.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
        },
        f = e => {
            let t = (0, i.flatMap)([...e.values()], "products");
            return (0, i.uniqBy)(t, "storeListingId")
        },
        S = (e, t) => {
            if (t === r.CollectiblesItemType.AVATAR_DECORATION) {
                let t = (0, i.flatMap)([...e.values()], "items").filter(o.isAvatarDecorationRecord);
                return (0, i.uniqBy)(t, "id")
            }
            if (t === r.CollectiblesItemType.PROFILE_EFFECT) {
                let t = (0, i.flatMap)([...e.values()], "items").filter(l.isProfileEffectRecord);
                return (0, i.uniqBy)(t, "id")
            }
        },
        h = (e, t) => {
            let n = f(e);
            if (t === r.CollectiblesItemType.AVATAR_DECORATION) {
                let e = (0, i.flatMap)(n, "items").filter(o.isAvatarDecorationRecord);
                return (0, i.uniqBy)(e, "id")
            }
            if (t === r.CollectiblesItemType.PROFILE_EFFECT) {
                let e = (0, i.flatMap)(n, "items").filter(l.isProfileEffectRecord);
                return (0, i.uniqBy)(e, "id")
            }
        },
        A = e => S(e, r.CollectiblesItemType.AVATAR_DECORATION),
        m = e => h(e, r.CollectiblesItemType.AVATAR_DECORATION),
        N = (e, t) => (0, i.uniqBy)([...A(e), ...m(t)], "id"),
        p = (e, t) => {
            var n;
            let {
                CDN_HOST: i,
                API_ENDPOINT: r
            } = window.GLOBAL_ENV, s = (0, a.getBestMediaProxySize)(t.size * (0, a.getDevicePixelRatio)()), o = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "png";
            if (null != i) return "".concat(location.protocol, "//").concat(i, "/app-assets/").concat(d.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(o, "?size=").concat(s);
            let l = d.Endpoints.APPLICATION_ASSET(d.COLLECTIBLES_APPLICATION_ID, e, o);
            return "".concat(location.protocol).concat(r).concat(l, "?size=").concat(s)
        },
        O = e => S(e, r.CollectiblesItemType.PROFILE_EFFECT),
        R = e => h(e, r.CollectiblesItemType.PROFILE_EFFECT),
        C = (e, t) => {
            let n = O(t),
                i = R(e).filter(e => {
                    let {
                        id: t
                    } = e;
                    return !n.some(e => e.id === t)
                });
            return {
                purchased: n,
                shopPreviews: i
            }
        },
        g = e => e.applicationId === d.COLLECTIBLES_APPLICATION_ID,
        L = e => 3.8 * e,
        v = e => {
            let t = new Date,
                n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
            return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5)
        },
        D = e => {
            let t = u.SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS[e];
            return null != t && new Date().getTime() < t
        }
}