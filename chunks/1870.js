function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n("47120");
    var a, o, l, u, d = n("392711"),
        _ = n("442837"),
        c = n("570140");
    let E = new Map,
        I = E,
        T = !1;
    class f extends(a = _.default.Store) {
        get isFetching() {
            return T
        }
        get isClaiming() {
            return i
        }
        get purchases() {
            return I
        }
        get fetchError() {
            return r
        }
        get claimError() {
            return s
        }
        getPurchase(e) {
            return null != e ? I.get(e) : void 0
        }
    }
    u = "CollectiblesPurchaseStore", (l = "displayName") in(o = f) ? Object.defineProperty(o, l, {
        value: u,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[l] = u, t.default = new f(c.default, {
        COLLECTIBLES_PURCHASES_FETCH: e => {
            T = !0, r = void 0
        },
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
            0 === e.purchases.length ? I = E : !(0, d.isEqual)([...I.values()], e.purchases) && (I = new Map(e.purchases.map(e => [e.skuId, e]))), T = !1, r = void 0
        },
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            I = E, T = !1, r = t
        },
        COLLECTIBLES_CLAIM: e => {
            i = e.skuId, s = void 0
        },
        COLLECTIBLES_CLAIM_SUCCESS: e => {
            null == e.purchases || 0 === e.purchases.length ? I = E : !(0, d.isEqual)([...I.values()], e.purchases) && (I = new Map(e.purchases.map(e => [e.skuId, e]))), i = void 0, s = void 0
        },
        COLLECTIBLES_CLAIM_FAILURE: e => {
            let {
                error: t,
                skuId: n
            } = e;
            i = n, s = t
        },
        LOGOUT: e => {
            I = E, T = !1, i = void 0, r = void 0, s = void 0
        }
    })
}