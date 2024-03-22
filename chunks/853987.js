function(e, t, r) {
    "use strict";
    let a, n;
    r.r(t), r.d(t, {
        default: function() {
            return T
        }
    }), r("222007");
    var l = r("917351"),
        i = r("446674"),
        u = r("913144"),
        o = r("915639"),
        s = r("491232");
    let c = new Map,
        d = new Map,
        f = c,
        v = d,
        C = !1;
    let E = () => {
        f = c, v = d, n = void 0, C = !1, a = void 0
    };
    class A extends i.default.Store {
        initialize() {
            this.syncWith([o.default], E)
        }
        get isFetching() {
            return C
        }
        get error() {
            return a
        }
        get lastFetched() {
            return n
        }
        get categories() {
            return f
        }
        get products() {
            return v
        }
        getCategory(e) {
            return null != e ? f.get(e) : void 0
        }
        getProduct(e) {
            return null != e ? v.get(e) : void 0
        }
        getCategoryForProduct(e) {
            let t = this.getProduct(e);
            return this.getCategory(null == t ? void 0 : t.categorySkuId)
        }
    }
    A.displayName = "CollectiblesCategoryStore";
    var T = new A(u.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
            C = !0, a = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
            0 === e.categories.length ? (f = c, v = d) : !(0, l.isEqual)([...f.values()], e.categories) && (f = new Map(e.categories.map(e => [e.skuId, e])), v = new Map((0, s.getProductsFromCategories)(f).map(e => [e.skuId, e]))), n = Date.now(), C = !1, a = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            f = c, v = d, C = !1, a = t
        },
        COLLECTIBLES_PRODUCT_FETCH: e => {
            C = !0, a = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
            v.set(e.product.skuId, e.product), C = !1, a = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            C = !1, a = t
        },
        LOGOUT: E
    })
}