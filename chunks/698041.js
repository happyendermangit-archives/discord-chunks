function(t, e, n) {
    "use strict";
    let i;
    n.r(e), n.d(e, {
        default: function() {
            return p
        }
    }), n("222007"), n("70102");
    var r = n("446674"),
        u = n("913144"),
        l = n("915639"),
        a = n("928460"),
        o = n("449008");
    let s = {},
        c = {},
        d = {},
        S = {};

    function E(t) {
        let e = t.id,
            n = t.sku.id,
            i = s[e],
            r = a.default.createFromServer(t);
        !(null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) && (!1 === t.published ? (null == d[n] && (d[n] = new Set), d[n].add(e)) : S[n] = e, s[e] = r)
    }

    function f(t, e) {
        return "".concat(t, ":").concat(e)
    }

    function _(t) {
        let {
            storeListings: e
        } = t;
        for (let t of e) E(t)
    }

    function T() {
        s = {}, S = {}, d = {}, c = {}
    }

    function I() {
        if (i === l.default.locale) return !1;
        T(), i = l.default.locale
    }
    class A extends r.default.Store {
        initialize() {
            this.waitFor(l.default), this.syncWith([l.default], I), i = l.default.locale
        }
        get(t) {
            return s[t]
        }
        getForSKU(t, e) {
            let n = S[t];
            return null != e ? c[f(e, t)] : null != n ? s[n] : null
        }
        getUnpublishedForSKU(t) {
            let e = d[t];
            return null == e ? [] : Array.from(e).map(t => s[t]).filter(o.isNotNullish)
        }
        getForChannel(t, e) {
            return c[f(t, e)]
        }
        getStoreListing(t) {
            let {
                storeListingId: e,
                skuId: n,
                channelId: i,
                isTestMode: r
            } = t;
            if (r && null != n) {
                let t = this.getUnpublishedForSKU(n);
                if (null != t && t.length > 0) return t[0]
            }
            if (null != e) return this.get(e);
            if (null != i) {
                if (null == n) throw Error("getStoreListing with channel expects a skuId");
                return this.getForChannel(i, n)
            }
            if (null != n) return this.getForSKU(n);
            return null
        }
    }
    A.displayName = "StoreListingStore";
    var p = new A(u.default, {
        STORE_LISTINGS_FETCH_SUCCESS: _,
        APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: _,
        STORE_LISTING_FETCH_SUCCESS: function(t) {
            let {
                storeListing: e,
                channelId: n
            } = t;
            if (null != n) {
                let t = a.default.createFromServer(e);
                c[f(n, t.skuId)] = t, S[t.skuId] = t.id
            } else E(e)
        },
        USER_SETTINGS_PROTO_UPDATE: I,
        APPLICATION_STORE_CLEAR_DATA: T,
        GIFT_CODE_RESOLVE_SUCCESS: function(t) {
            let {
                giftCode: e
            } = t;
            if (null == e.store_listing) return !1;
            E(e.store_listing)
        }
    })
}