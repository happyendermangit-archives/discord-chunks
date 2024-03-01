function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        isPremiumCollectiblesProduct: function() {
            return c
        },
        isPremiumCollectiblesPurchase: function() {
            return d
        },
        getFormattedPriceForCollectiblesProduct: function() {
            return f
        },
        extractPriceByPurchaseTypes: function() {
            return v
        },
        isFreeCollectiblesProduct: function() {
            return C
        },
        getProductsFromCategories: function() {
            return E
        },
        getAvatarDecorations: function() {
            return I
        },
        getCollectiblesAssetURL: function() {
            return P
        },
        getProfileEffectsFromPurchases: function() {
            return p
        },
        getProfileEffectsFromCategories: function() {
            return F
        },
        groupProfileEffects: function() {
            return _
        },
        isCollectiblesGiftCode: function() {
            return O
        },
        getLogoSize: function() {
            return y
        }
    }), r("222007");
    var a = r("917351"),
        l = r("265586"),
        n = r("407063"),
        i = r("153160"),
        u = r("730297"),
        o = r("806410"),
        s = r("49111");
    let c = e => (null == e ? void 0 : e.premiumType) != null,
        d = e => (null == e ? void 0 : e.purchaseType) === s.EntitlementTypes.PREMIUM_PURCHASE,
        f = (e, t) => {
            let r = v(e, t ? s.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : s.PriceSetAssignmentPurchaseTypes.DEFAULT);
            return null == r ? "" : (0, i.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
        },
        v = (e, t) => {
            var r, a, l;
            let n = null !== (l = e.prices[t]) && void 0 !== l ? l : null;
            return null == n ? null : null === (a = n.countryPrices) || void 0 === a ? void 0 : null === (r = a.prices) || void 0 === r ? void 0 : r[0]
        },
        C = e => {
            var t;
            return (null === (t = v(e, s.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
        },
        E = e => {
            let t = (0, a.flatMap)([...e.values()], "products");
            return (0, a.uniqBy)(t, "storeListingId")
        },
        A = (e, t) => {
            if (t === l.CollectiblesItemType.AVATAR_DECORATION) {
                let t = (0, a.flatMap)([...e.values()], "items").filter(u.isAvatarDecorationRecord);
                return (0, a.uniqBy)(t, "id")
            }
            if (t === l.CollectiblesItemType.PROFILE_EFFECT) {
                let t = (0, a.flatMap)([...e.values()], "items").filter(o.isProfileEffectRecord);
                return (0, a.uniqBy)(t, "id")
            }
        },
        T = (e, t) => {
            let r = E(e);
            if (t === l.CollectiblesItemType.AVATAR_DECORATION) {
                let e = (0, a.flatMap)(r, "items").filter(u.isAvatarDecorationRecord);
                return (0, a.uniqBy)(e, "id")
            }
            if (t === l.CollectiblesItemType.PROFILE_EFFECT) {
                let e = (0, a.flatMap)(r, "items").filter(o.isProfileEffectRecord);
                return (0, a.uniqBy)(e, "id")
            }
        },
        g = e => A(e, l.CollectiblesItemType.AVATAR_DECORATION),
        m = e => T(e, l.CollectiblesItemType.AVATAR_DECORATION),
        I = (e, t) => (0, a.uniqBy)([...g(e), ...m(t)], "id"),
        P = (e, t) => {
            var r;
            let {
                CDN_HOST: a,
                API_ENDPOINT: l
            } = window.GLOBAL_ENV, i = (0, n.getBestMediaProxySize)(t.size * (0, n.getDevicePixelRatio)()), u = null !== (r = null == t ? void 0 : t.format) && void 0 !== r ? r : "png";
            if (null != a) return "".concat(location.protocol, "//").concat(a, "/app-assets/").concat(s.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(u, "?size=").concat(i);
            let o = s.Endpoints.APPLICATION_ASSET(s.COLLECTIBLES_APPLICATION_ID, e, u);
            return "".concat(location.protocol).concat(l).concat(o, "?size=").concat(i)
        },
        p = e => A(e, l.CollectiblesItemType.PROFILE_EFFECT),
        F = e => T(e, l.CollectiblesItemType.PROFILE_EFFECT),
        _ = (e, t) => {
            let r = p(t),
                a = F(e).filter(e => {
                    let {
                        id: t
                    } = e;
                    return !r.some(e => e.id === t)
                });
            return {
                purchased: r,
                shopPreviews: a
            }
        },
        O = e => e.applicationId === s.COLLECTIBLES_APPLICATION_ID,
        y = e => 3.8 * e
}