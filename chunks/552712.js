function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var s = n("446674"),
        r = n("913144"),
        a = n("915639"),
        o = n("137406"),
        l = n("546463");
    let u = new Set,
        d = new Set,
        c = new Map,
        f = new Map,
        _ = new Map;

    function h(e) {
        c.set(e.id, o.default.createFromServer(e)), !f.has(e.application_id) && f.set(e.application_id, new Set);
        let t = f.get(e.application_id);
        t.add(e.id)
    }

    function E(e) {
        u.delete(e.id), d.delete(e.id), h(e)
    }

    function g(e) {
        h(e.sku), null != e.child_skus && e.child_skus.forEach(e => h(e)), null != e.alternative_skus && e.alternative_skus.forEach(e => h(e))
    }

    function m(e) {
        let {
            storeListings: t
        } = e;
        for (let e of t) g(e)
    }

    function p(e) {
        let {
            entitlements: t
        } = e;
        for (let e of t) null != e.sku && h(e.sku)
    }

    function S() {
        u = new Set, d = new Set, c = new Map, f = new Map, _ = new Map
    }

    function v() {
        if (i === a.default.locale) return !1;
        i = a.default.locale, S()
    }
    class T extends s.Store {
        initialize() {
            this.waitFor(a.default, l.default), this.syncWith([a.default], v), i = a.default.locale
        }
        get(e) {
            return c.get(e)
        }
        getForApplication(e) {
            let t = f.get(e);
            return null == t ? [] : Array.from(t).map(e => c.get(e))
        }
        isFetching(e) {
            return u.has(e)
        }
        getSKUs() {
            return Object.fromEntries(c)
        }
        didFetchingSkuFail(e) {
            return d.has(e)
        }
    }
    T.displayName = "SKUStore";
    var I = new T(r.default, {
        STORE_LISTINGS_FETCH_SUCCESS: m,
        APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: m,
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            let {
                storeListing: t
            } = e;
            g(t)
        },
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            if (null == t.store_listing) return !1;
            h(t.store_listing.sku)
        },
        SKU_FETCH_START: function(e) {
            let {
                skuId: t
            } = e;
            u.add(t)
        },
        SKU_FETCH_SUCCESS: function(e) {
            let {
                sku: t
            } = e;
            E(t)
        },
        SKU_FETCH_FAIL: function(e) {
            let {
                skuId: t
            } = e;
            u.delete(t), d.add(t)
        },
        SKUS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                skus: n
            } = e;
            for (let e of n) E(e);
            null != t && _.set(t, new Set(n.map(e => e.id)))
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: p,
        APPLICATION_STORE_CLEAR_DATA: S,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: p,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: p
    })
}