function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var s, a, o, l, u = n("392711"),
        d = n("873546"),
        _ = n("442837"),
        c = n("570140"),
        E = n("706454"),
        I = n("884697");
    let T = new Map,
        f = new Map,
        S = T,
        h = f,
        A = !1;
    let m = new Set(["1220513972189663413"]),
        N = () => {
            S = T, h = f, r = void 0, A = !1, i = void 0
        };
    class O extends(s = _.default.Store) {
        initialize() {
            this.syncWith([E.default], N)
        }
        get isFetching() {
            return A
        }
        get error() {
            return i
        }
        get lastFetched() {
            return r
        }
        get categories() {
            return S
        }
        get products() {
            return h
        }
        getCategory(e) {
            return null != e ? S.get(e) : void 0
        }
        getProduct(e) {
            return null != e ? h.get(e) : void 0
        }
        getCategoryForProduct(e) {
            let t = this.getProduct(e);
            return this.getCategory(null == t ? void 0 : t.categorySkuId)
        }
    }
    l = "CollectiblesCategoryStore", (o = "displayName") in(a = O) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new O(c.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
            A = !0, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
            0 === e.categories.length ? (S = T, h = f) : !(0, u.isEqual)([...S.values()], e.categories) && (S = new Map(e.categories.filter(e => !(d.isMobile && m.has(e.skuId))).map(e => [e.skuId, e])), h = new Map((0, I.getProductsFromCategories)(S).map(e => [e.skuId, e]))), r = Date.now(), A = !1, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            S = T, h = f, A = !1, i = t
        },
        COLLECTIBLES_PRODUCT_FETCH: e => {
            A = !0, i = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
            h.set(e.product.skuId, e.product), A = !1, i = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            A = !1, i = t
        },
        LOGOUT: N
    })
}