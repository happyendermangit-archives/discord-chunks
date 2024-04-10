function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        extractPriceByPurchaseTypes: function() {
            return E
        },
        getAvatarDecorations: function() {
            return m
        },
        getCollectiblesAssetURL: function() {
            return N
        },
        getFormattedPriceForCollectiblesProduct: function() {
            return c
        },
        getLogoSize: function() {
            return g
        },
        getProductsFromCategories: function() {
            return T
        },
        getProfileEffectsFromCategories: function() {
            return p
        },
        getProfileEffectsFromPurchases: function() {
            return O
        },
        groupProfileEffects: function() {
            return R
        },
        isCollectiblesGiftCode: function() {
            return C
        },
        isFreeCollectiblesProduct: function() {
            return I
        },
        isPremiumCollectiblesProduct: function() {
            return d
        },
        isPremiumCollectiblesPurchase: function() {
            return _
        }
    }), n("47120");
    var i = n("392711"),
        r = n("979554"),
        s = n("134432"),
        a = n("937615"),
        o = n("922347"),
        l = n("212161"),
        u = n("981631");
    let d = e => (null == e ? void 0 : e.premiumType) != null,
        _ = e => (null == e ? void 0 : e.purchaseType) === u.EntitlementTypes.PREMIUM_PURCHASE,
        c = (e, t, n) => {
            let i;
            let r = E(e, i = n ? t ? u.PriceSetAssignmentPurchaseTypes.MOBILE_PREMIUM_TIER_2 : u.PriceSetAssignmentPurchaseTypes.MOBILE : t ? u.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : u.PriceSetAssignmentPurchaseTypes.DEFAULT);
            return null == r ? "" : (0, a.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
        },
        E = (e, t) => {
            var n, i, r;
            let s = null !== (r = e.prices[t]) && void 0 !== r ? r : null;
            return null == s ? null : null === (i = s.countryPrices) || void 0 === i ? void 0 : null === (n = i.prices) || void 0 === n ? void 0 : n[0]
        },
        I = e => {
            var t;
            return (null === (t = E(e, u.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
        },
        T = e => {
            let t = (0, i.flatMap)([...e.values()], "products");
            return (0, i.uniqBy)(t, "storeListingId")
        },
        f = (e, t) => {
            if (t === r.CollectiblesItemType.AVATAR_DECORATION) {
                let t = (0, i.flatMap)([...e.values()], "items").filter(o.isAvatarDecorationRecord);
                return (0, i.uniqBy)(t, "id")
            }
            if (t === r.CollectiblesItemType.PROFILE_EFFECT) {
                let t = (0, i.flatMap)([...e.values()], "items").filter(l.isProfileEffectRecord);
                return (0, i.uniqBy)(t, "id")
            }
        },
        S = (e, t) => {
            let n = T(e);
            if (t === r.CollectiblesItemType.AVATAR_DECORATION) {
                let e = (0, i.flatMap)(n, "items").filter(o.isAvatarDecorationRecord);
                return (0, i.uniqBy)(e, "id")
            }
            if (t === r.CollectiblesItemType.PROFILE_EFFECT) {
                let e = (0, i.flatMap)(n, "items").filter(l.isProfileEffectRecord);
                return (0, i.uniqBy)(e, "id")
            }
        },
        A = e => f(e, r.CollectiblesItemType.AVATAR_DECORATION),
        h = e => S(e, r.CollectiblesItemType.AVATAR_DECORATION),
        m = (e, t) => (0, i.uniqBy)([...A(e), ...h(t)], "id"),
        N = (e, t) => {
            var n;
            let {
                CDN_HOST: i,
                API_ENDPOINT: r
            } = window.GLOBAL_ENV, a = (0, s.getBestMediaProxySize)(t.size * (0, s.getDevicePixelRatio)()), o = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "png";
            if (null != i) return "".concat(location.protocol, "//").concat(i, "/app-assets/").concat(u.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(o, "?size=").concat(a);
            let l = u.Endpoints.APPLICATION_ASSET(u.COLLECTIBLES_APPLICATION_ID, e, o);
            return "".concat(location.protocol).concat(r).concat(l, "?size=").concat(a)
        },
        O = e => f(e, r.CollectiblesItemType.PROFILE_EFFECT),
        p = e => S(e, r.CollectiblesItemType.PROFILE_EFFECT),
        R = (e, t) => {
            let n = O(t),
                i = p(e).filter(e => {
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
        C = e => e.applicationId === u.COLLECTIBLES_APPLICATION_ID,
        g = e => 3.8 * e
}