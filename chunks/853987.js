function(e, t, r) {
    "use strict";
    let a, n;
    r.r(t), r.d(t, {
        default: function() {
            return g
        }
    }), r("222007");
    var l = r("917351"),
        i = r("394846"),
        u = r("446674"),
        o = r("913144"),
        s = r("915639"),
        c = r("491232");
    let d = new Map,
        f = new Map,
        v = d,
        C = f,
        E = !1;
    let A = new Set(["1220513972189663413"]),
        T = () => {
            v = d, C = f, n = void 0, E = !1, a = void 0
        };
    class m extends u.default.Store {
        initialize() {
            this.syncWith([s.default], T)
        }
        get isFetching() {
            return E
        }
        get error() {
            return a
        }
        get lastFetched() {
            return n
        }
        get categories() {
            return v
        }
        get products() {
            return C
        }
        getCategory(e) {
            return null != e ? v.get(e) : void 0
        }
        getProduct(e) {
            return null != e ? C.get(e) : void 0
        }
        getCategoryForProduct(e) {
            let t = this.getProduct(e);
            return this.getCategory(null == t ? void 0 : t.categorySkuId)
        }
    }
    m.displayName = "CollectiblesCategoryStore";
    var g = new m(o.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
            E = !0, a = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
            0 === e.categories.length ? (v = d, C = f) : !(0, l.isEqual)([...v.values()], e.categories) && (v = new Map(e.categories.filter(e => {
                let t = i.isMobile && A.has(e.skuId);
                return !t
            }).map(e => [e.skuId, e])), C = new Map((0, c.getProductsFromCategories)(v).map(e => [e.skuId, e]))), n = Date.now(), E = !1, a = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            v = d, C = f, E = !1, a = t
        },
        COLLECTIBLES_PRODUCT_FETCH: e => {
            E = !0, a = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
            C.set(e.product.skuId, e.product), E = !1, a = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            E = !1, a = t
        },
        LOGOUT: T
    })
}