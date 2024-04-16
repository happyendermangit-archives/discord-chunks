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
        h = !1,
        A = new Set;
    let m = () => {
        f = I, S = T, r = void 0, h = !1, A = new Set, i = void 0
    };
    class N extends(s = d.default.Store) {
        initialize() {
            this.syncWith([c.default], m)
        }
        get isFetchingCategories() {
            return h
        }
        isFetchingProduct(e) {
            return null != e && A.has(e)
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
    l = "CollectiblesCategoryStore", (o = "displayName") in(a = N) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new N(_.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
            h = !0, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
            0 === e.categories.length ? (f = I, S = T) : !(0, u.isEqual)([...f.values()], e.categories) && (f = new Map(e.categories.map(e => [e.skuId, e])), S = new Map((0, E.getProductsFromCategories)(f).map(e => [e.skuId, e]))), r = Date.now(), h = !1, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            f = I, S = T, h = !1, A = new Set, i = t
        },
        COLLECTIBLES_PRODUCT_FETCH: e => {
            let {
                skuId: t
            } = e;
            (A = new Set(A)).add(t), i = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
            let {
                skuId: t,
                product: n
            } = e;
            S.set(t, n), (A = new Set(A)).delete(t), i = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
            let {
                skuId: t,
                error: n
            } = e;
            (A = new Set(A)).delete(t), i = n
        },
        LOGOUT: m
    })
}