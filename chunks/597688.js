function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n("47120");
    var a, o, l, u, d = n("392711"),
        _ = n("442837"),
        c = n("570140"),
        E = n("706454"),
        I = n("884697");
    let T = new Map,
        f = new Map,
        S = T,
        h = f,
        A = !1;
    let m = () => {
        S = T, h = f, r = void 0, A = !1, i = void 0
    };
    class N extends(a = _.default.Store) {
        initialize() {
            this.syncWith([E.default], m)
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
        get fetchedCountryCode() {
            return s
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
    u = "CollectiblesCategoryStore", (l = "displayName") in(o = N) ? Object.defineProperty(o, l, {
        value: u,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[l] = u, t.default = new N(c.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
            A = !0, i = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
            var t;
            0 === e.categories.length ? (S = T, h = f) : !(0, d.isEqual)([...S.values()], e.categories) && (S = new Map(e.categories.map(e => [e.skuId, e])), h = new Map((0, I.getProductsFromCategories)(S).map(e => [e.skuId, e]))), r = Date.now(), A = !1, i = void 0, s = null !== (t = e.fetchedCountryCode) && void 0 !== t ? t : s
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
        LOGOUT: m
    })
}