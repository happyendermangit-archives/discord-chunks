function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var s, a, o, l, u = n("392711"),
        d = n("873546"),
        _ = n("180650"),
        c = n("442837"),
        E = n("570140"),
        I = n("706454"),
        T = n("884697");
    let f = new Map,
        S = new Map,
        h = f,
        A = S,
        m = !1;
    let N = new Set([_.CollectiblesCategorySkuId.SHY]),
        O = () => {
            h = f, A = S, r = void 0, m = !1, i = void 0
        };
    class p extends(s = c.default.Store) {
        initialize() {
            this.syncWith([I.default], O)
        }
        get isFetching() {
            return m
        }
        get error() {
            return i
        }
        get lastFetched() {
            return r
        }
        get categories() {
            return h
        }
        get products() {
            return A
        }
        getCategory(e) {
            return null != e ? h.get(e) : void 0
        }
        getProduct(e) {
            return null != e ? A.get(e) : void 0
        }
        getCategoryForProduct(e) {
            let t = this.getProduct(e);
            return this.getCategory(null == t ? void 0 : t.categorySkuId)
        }
    }
    l = "CollectiblesCategoryStore", (o = "displayName") in(a = p) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new p(E.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
            m = !0, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
            0 === e.categories.length ? (h = f, A = S) : !(0, u.isEqual)([...h.values()], e.categories) && (h = new Map(e.categories.filter(e => !(d.isMobile && N.has(e.skuId))).map(e => [e.skuId, e])), A = new Map((0, T.getProductsFromCategories)(h).map(e => [e.skuId, e]))), r = Date.now(), m = !1, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            h = f, A = S, m = !1, i = t
        },
        COLLECTIBLES_PRODUCT_FETCH: e => {
            m = !0, i = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
            A.set(e.product.skuId, e.product), m = !1, i = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            m = !1, i = t
        },
        LOGOUT: O
    })
}