function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("959546"),
        c = n("283595"),
        E = n("780570"),
        I = n("55563");
    let T = {},
        f = {},
        S = {},
        h = {},
        A = !1,
        m = !1,
        N = new Set,
        p = new Set,
        O = {};

    function R(e) {
        T[e.id] = _.default.createFromServer(e), null == S[e.sku_id] && (S[e.sku_id] = new Set), null == h[e.application_id] && (h[e.application_id] = new Set), null != e.subscription_id && (null == O[e.subscription_id] && (O[e.subscription_id] = new Set), O[e.subscription_id].add(e.id)), h[e.application_id].add(e.id), S[e.sku_id].add(e.id)
    }

    function C(e) {
        f[e.id] = _.default.createFromServer(e)
    }

    function g(e) {
        return R(e.entitlement)
    }
    class L extends(i = u.Store) {
        initialize() {
            this.syncWith([c.default], () => !0)
        }
        get(e) {
            return T[e]
        }
        getGiftable() {
            return l().values(f)
        }
        getForApplication(e) {
            let t = h[e];
            if (null == t) return null;
            let n = new Set;
            for (let e of t) n.add(T[e]);
            return n
        }
        getForSku(e) {
            let t = S[e];
            if (null == t) return null;
            let n = new Set;
            for (let e of t) n.add(T[e]);
            return n
        }
        get fetchingAllEntitlements() {
            return A
        }
        get fetchedAllEntitlements() {
            return m
        }
        get applicationIdsFetching() {
            return N
        }
        get applicationIdsFetched() {
            return p
        }
        isFetchingForApplication(e) {
            return this.fetchingAllEntitlements || null != e && this.applicationIdsFetching.has(e)
        }
        isFetchedForApplication(e) {
            return this.fetchedAllEntitlements || null != e && this.applicationIdsFetched.has(e)
        }
        getForSubscription(e) {
            let t = O[e];
            if (null == t) return null;
            let n = new Set;
            for (let e of t) n.add(T[e]);
            return n
        }
        isEntitledToSku(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                r = S[t];
            if (null != r)
                for (let t of r) {
                    let n = T[t];
                    if (null != n && n.isValid(e, I.default, i)) return !0
                }
            if (p.has(n)) return !1;
            let s = null != i ? c.default.getLibraryApplication(n, i) : c.default.getActiveLibraryApplication(n);
            return !!(null != s && s.sku.id === t && (0, E.isUserEntitledToLibraryApplication)(s)) || null
        }
        hasFetchedForApplicationIds(e) {
            return e.every(e => p.has(e))
        }
    }
    a = "EntitlementStore", (s = "displayName") in(r = L) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new L(d.default, {
        ENTITLEMENT_FETCH_APPLICATION_START: function(e) {
            let {
                applicationId: t
            } = e;
            N.add(t)
        },
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function(e) {
            let {
                applicationId: t,
                entitlements: n
            } = e;
            for (let e of (N.delete(t), p.add(t), n)) !0 !== e.consumed && R(e)
        },
        ENTITLEMENT_FETCH_APPLICATION_FAIL: function() {},
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            f = {}, t.forEach(C)
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            for (let e of t) R(e)
        },
        LIBRARY_FETCH_SUCCESS: function(e) {
            let {
                libraryApplications: t
            } = e;
            for (let e of t)
                if (null != e.entitlements)
                    for (let t of e.entitlements) R(t)
        },
        ENTITLEMENT_CREATE: g,
        ENTITLEMENT_UPDATE: g,
        ENTITLEMENT_DELETE: function(e) {
            return function(e) {
                delete T[e.id];
                let t = h[e.application_id];
                null != t && t.delete(e.id);
                let n = S[e.sku_id];
                if (null != n && n.delete(e.id), null != e.subscription_id) {
                    let t = O[e.subscription_id];
                    null != t && t.delete(e.id)
                }
            }(e.entitlement)
        },
        LOGOUT: function() {
            T = {}, S = {}, h = {}, A = !1, m = !1, N = new Set, p = new Set
        },
        ENTITLEMENTS_FETCH_FOR_USER_START: function() {
            A = !0
        },
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            for (let e of (m = !0, A = !1, t)) R(e)
        },
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: function() {
            m = !1, A = !1
        }
    })
}