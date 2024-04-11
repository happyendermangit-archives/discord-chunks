function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var s, a, o, l, u = n("392711"),
        d = n("442837"),
        _ = n("570140"),
        c = n("706454"),
        E = n("884697");
    let I = new Map,
        T = new Map,
        f = I,
        S = T,
        A = !1;
    let h = () => {
        f = I, S = T, r = void 0, A = !1, i = void 0
    };
    class m extends(s = d.default.Store) {
        initialize() {
            this.syncWith([c.default], h)
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
            return f
        }
        get products() {
            return S
        }
        getCategory(e) {
            return null != e ? f.get(e) : void 0
        }
        getProduct(e) {
            return null != e ? S.get(e) : void 0
        }
        getCategoryForProduct(e) {
            let t = this.getProduct(e);
            return this.getCategory(null == t ? void 0 : t.categorySkuId)
        }
    }
    l = "CollectiblesCategoryStore", (o = "displayName") in(a = m) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new m(_.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
            A = !0, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
            0 === e.categories.length ? (f = I, S = T) : !(0, u.isEqual)([...f.values()], e.categories) && (f = new Map(e.categories.map(e => [e.skuId, e])), S = new Map((0, E.getProductsFromCategories)(f).map(e => [e.skuId, e]))), r = Date.now(), A = !1, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            f = I, S = T, A = !1, i = t
        },
        COLLECTIBLES_PRODUCT_FETCH: e => {
            A = !0, i = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
            S.set(e.product.skuId, e.product), A = !1, i = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            A = !1, i = t
        },
        LOGOUT: h
    })
}