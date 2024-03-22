function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("917351"),
        r = n.n(i),
        u = n("446674"),
        l = n("913144"),
        a = n("984273"),
        o = n("686470"),
        s = n("964889"),
        c = n("552712");
    let S = {},
        d = {},
        E = {},
        f = {},
        _ = !1,
        T = !1,
        I = new Set,
        A = new Set,
        p = {};

    function C(t) {
        S[t.id] = a.default.createFromServer(t), null == E[t.sku_id] && (E[t.sku_id] = new Set), null == f[t.application_id] && (f[t.application_id] = new Set), null != t.subscription_id && (null == p[t.subscription_id] && (p[t.subscription_id] = new Set), p[t.subscription_id].add(t.id)), f[t.application_id].add(t.id), E[t.sku_id].add(t.id)
    }

    function P(t) {
        d[t.id] = a.default.createFromServer(t)
    }

    function N(t) {
        return C(t.entitlement)
    }
    class R extends u.default.Store {
        initialize() {
            this.syncWith([o.default], () => !0)
        }
        get(t) {
            return S[t]
        }
        getGiftable() {
            return r.values(d)
        }
        getForApplication(t) {
            let e = f[t];
            if (null == e) return null;
            let n = new Set;
            for (let t of e) n.add(S[t]);
            return n
        }
        getForSku(t) {
            let e = E[t];
            if (null == e) return null;
            let n = new Set;
            for (let t of e) n.add(S[t]);
            return n
        }
        get fetchingAllEntitlements() {
            return _
        }
        get fetchedAllEntitlements() {
            return T
        }
        get applicationIdsFetching() {
            return I
        }
        get applicationIdsFetched() {
            return A
        }
        isFetchingForApplication(t) {
            return this.fetchingAllEntitlements || null != t && this.applicationIdsFetching.has(t)
        }
        isFetchedForApplication(t) {
            return this.fetchedAllEntitlements || null != t && this.applicationIdsFetched.has(t)
        }
        getForSubscription(t) {
            let e = p[t];
            if (null == e) return null;
            let n = new Set;
            for (let t of e) n.add(S[t]);
            return n
        }
        isEntitledToSku(t, e, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                r = E[e];
            if (null != r)
                for (let e of r) {
                    let n = S[e];
                    if (null != n && n.isValid(t, c.default, i)) return !0
                }
            if (A.has(n)) return !1;
            let u = null != i ? o.default.getLibraryApplication(n, i) : o.default.getActiveLibraryApplication(n);
            return !!(null != u && u.sku.id === e && (0, s.isUserEntitledToLibraryApplication)(u)) || null
        }
        hasFetchedForApplicationIds(t) {
            return t.every(t => A.has(t))
        }
    }
    R.displayName = "EntitlementStore";
    var h = new R(l.default, {
        ENTITLEMENT_FETCH_APPLICATION_START: function(t) {
            let {
                applicationId: e
            } = t;
            I.add(e)
        },
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function(t) {
            let {
                applicationId: e,
                entitlements: n
            } = t;
            for (let t of (I.delete(e), A.add(e), n)) !0 !== t.consumed && C(t)
        },
        ENTITLEMENT_FETCH_APPLICATION_FAIL: function() {},
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(t) {
            let {
                entitlements: e
            } = t;
            d = {}, e.forEach(P)
        },
        SKU_PURCHASE_SUCCESS: function(t) {
            let {
                entitlements: e
            } = t;
            for (let t of e) C(t)
        },
        LIBRARY_FETCH_SUCCESS: function(t) {
            let {
                libraryApplications: e
            } = t;
            for (let t of e)
                if (null != t.entitlements)
                    for (let e of t.entitlements) C(e)
        },
        ENTITLEMENT_CREATE: N,
        ENTITLEMENT_UPDATE: N,
        ENTITLEMENT_DELETE: function(t) {
            return function(t) {
                delete S[t.id];
                let e = f[t.application_id];
                null != e && e.delete(t.id);
                let n = E[t.sku_id];
                if (null != n && n.delete(t.id), null != t.subscription_id) {
                    let e = p[t.subscription_id];
                    null != e && e.delete(t.id)
                }
            }(t.entitlement)
        },
        LOGOUT: function() {
            S = {}, E = {}, f = {}, _ = !1, T = !1, I = new Set, A = new Set
        },
        ENTITLEMENTS_FETCH_FOR_USER_START: function() {
            _ = !0
        },
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function(t) {
            let {
                entitlements: e
            } = t;
            for (let t of (T = !0, _ = !1, e)) C(t)
        },
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: function() {
            T = !1, _ = !1
        }
    })
}