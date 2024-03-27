function(e, t, r) {
    "use strict";
    let a, n;
    r.r(t), r.d(t, {
        default: function() {
            return I
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
        E = f,
        C = !1;
    let A = new Set(["1220513972189663413"]),
        T = () => {
            v = d, E = f, n = void 0, C = !1, a = void 0
        };
    class m extends u.default.Store {
        initialize() {
            this.syncWith([s.default], T)
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
            return v
        }
        get products() {
            return E
        }
        getCategory(e) {
            return null != e ? v.get(e) : void 0
        }
        getProduct(e) {
            return null != e ? E.get(e) : void 0
        }
        getCategoryForProduct(e) {
            let t = this.getProduct(e);
            return this.getCategory(null == t ? void 0 : t.categorySkuId)
        }
    }
    m.displayName = "CollectiblesCategoryStore";
    var I = new m(o.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
            C = !0, a = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
            0 === e.categories.length ? (v = d, E = f) : !(0, l.isEqual)([...v.values()], e.categories) && (v = new Map(e.categories.filter(e => {
                let t = i.isMobile && A.has(e.skuId);
                return !t
            }).map(e => [e.skuId, e])), E = new Map((0, c.getProductsFromCategories)(v).map(e => [e.skuId, e]))), n = Date.now(), C = !1, a = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            v = d, E = f, C = !1, a = t
        },
        COLLECTIBLES_PRODUCT_FETCH: e => {
            C = !0, a = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
            E.set(e.product.skuId, e.product), C = !1, a = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            C = !1, a = t
        },
        LOGOUT: T
    })
}