function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("47120");
    var r, s, a, o, l = n("442837"),
        u = n("570140"),
        d = n("706454"),
        _ = n("659181"),
        c = n("77498");
    let E = new Set,
        I = new Set,
        T = new Map,
        f = new Map,
        S = new Map;

    function h(e) {
        T.set(e.id, _.default.createFromServer(e)), !f.has(e.application_id) && f.set(e.application_id, new Set), f.get(e.application_id).add(e.id)
    }

    function A(e) {
        E.delete(e.id), I.delete(e.id), h(e)
    }

    function m(e) {
        h(e.sku), null != e.child_skus && e.child_skus.forEach(e => h(e)), null != e.alternative_skus && e.alternative_skus.forEach(e => h(e))
    }

    function N(e) {
        let {
            entitlements: t
        } = e;
        for (let e of t) null != e.sku && h(e.sku)
    }

    function p() {
        E = new Set, I = new Set, T = new Map, f = new Map, S = new Map
    }

    function O() {
        if (i === d.default.locale) return !1;
        i = d.default.locale, p()
    }
    class R extends(r = l.Store) {
        initialize() {
            this.waitFor(d.default, c.default), this.syncWith([d.default], O), i = d.default.locale
        }
        get(e) {
            return T.get(e)
        }
        getForApplication(e) {
            let t = f.get(e);
            return null == t ? [] : Array.from(t).map(e => T.get(e))
        }
        isFetching(e) {
            return E.has(e)
        }
        getSKUs() {
            return Object.fromEntries(T)
        }
        didFetchingSkuFail(e) {
            return I.has(e)
        }
    }
    o = "SKUStore", (a = "displayName") in(s = R) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new R(u.default, {
        STORE_LISTINGS_FETCH_SUCCESS: function(e) {
            let {
                storeListings: t
            } = e;
            for (let e of t) m(e)
        },
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            let {
                storeListing: t
            } = e;
            m(t)
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
            E.add(t)
        },
        SKU_FETCH_SUCCESS: function(e) {
            let {
                sku: t
            } = e;
            A(t)
        },
        SKU_FETCH_FAIL: function(e) {
            let {
                skuId: t
            } = e;
            E.delete(t), I.add(t)
        },
        SKUS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                skus: n
            } = e;
            for (let e of n) A(e);
            null != t && S.set(t, new Set(n.map(e => e.id)))
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: N,
        APPLICATION_STORE_CLEAR_DATA: p,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: N,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: N
    })
}