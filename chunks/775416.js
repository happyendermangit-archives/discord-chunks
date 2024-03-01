function(e, t, r) {
    "use strict";
    let u, n, i;
    r.r(t), r.d(t, {
        default: function() {
            return _
        }
    }), r("222007");
    var s = r("917351"),
        E = r("446674"),
        l = r("913144");
    let c = new Map,
        o = c,
        a = !1;
    class C extends E.default.Store {
        get isFetching() {
            return a
        }
        get isClaiming() {
            return u
        }
        get purchases() {
            return o
        }
        get fetchError() {
            return n
        }
        get claimError() {
            return i
        }
        getPurchase(e) {
            return null != e ? o.get(e) : void 0
        }
    }
    C.displayName = "CollectiblesPurchaseStore";
    var _ = new C(l.default, {
        COLLECTIBLES_PURCHASES_FETCH: e => {
            a = !0, n = void 0
        },
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
            0 === e.purchases.length ? o = c : !(0, s.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), a = !1, n = void 0
        },
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            o = c, a = !1, n = t
        },
        COLLECTIBLES_CLAIM: e => {
            u = e.skuId, i = void 0
        },
        COLLECTIBLES_CLAIM_SUCCESS: e => {
            null == e.purchases || 0 === e.purchases.length ? o = c : !(0, s.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), u = void 0, i = void 0
        },
        COLLECTIBLES_CLAIM_FAILURE: e => {
            let {
                error: t,
                skuId: r
            } = e;
            u = r, i = t
        },
        LOGOUT: e => {
            o = c, a = !1, u = void 0, n = void 0, i = void 0
        }
    })
}