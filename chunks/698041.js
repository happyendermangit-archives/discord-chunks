function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007"), n("70102");
    var l = n("446674"),
        a = n("913144"),
        s = n("915639"),
        r = n("928460"),
        o = n("449008");
    let u = {},
        d = {},
        c = {},
        f = {};

    function p(e) {
        let t = e.id,
            n = e.sku.id,
            i = u[t],
            l = r.default.createFromServer(e);
        !(null != i && !i.isSlimDirectoryVersion() && l.isSlimDirectoryVersion()) && (!1 === e.published ? (null == c[n] && (c[n] = new Set), c[n].add(t)) : f[n] = t, u[t] = l)
    }

    function m(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function h(e) {
        let {
            storeListings: t
        } = e;
        for (let e of t) p(e)
    }

    function x() {
        u = {}, f = {}, c = {}, d = {}
    }

    function E() {
        if (i === s.default.locale) return !1;
        x(), i = s.default.locale
    }
    class y extends l.default.Store {
        initialize() {
            this.waitFor(s.default), this.syncWith([s.default], E), i = s.default.locale
        }
        get(e) {
            return u[e]
        }
        getForSKU(e, t) {
            let n = f[e];
            return null != t ? d[m(t, e)] : null != n ? u[n] : null
        }
        getUnpublishedForSKU(e) {
            let t = c[e];
            return null == t ? [] : Array.from(t).map(e => u[e]).filter(o.isNotNullish)
        }
        getForChannel(e, t) {
            return d[m(e, t)]
        }
        getStoreListing(e) {
            let {
                storeListingId: t,
                skuId: n,
                channelId: i,
                isTestMode: l
            } = e;
            if (l && null != n) {
                let e = this.getUnpublishedForSKU(n);
                if (null != e && e.length > 0) return e[0]
            }
            if (null != t) return this.get(t);
            if (null != i) {
                if (null == n) throw Error("getStoreListing with channel expects a skuId");
                return this.getForChannel(i, n)
            }
            if (null != n) return this.getForSKU(n);
            return null
        }
    }
    y.displayName = "StoreListingStore";
    var g = new y(a.default, {
        STORE_LISTINGS_FETCH_SUCCESS: h,
        APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: h,
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            let {
                storeListing: t,
                channelId: n
            } = e;
            if (null != n) {
                let e = r.default.createFromServer(t);
                d[m(n, e.skuId)] = e, f[e.skuId] = e.id
            } else p(t)
        },
        USER_SETTINGS_PROTO_UPDATE: E,
        APPLICATION_STORE_CLEAR_DATA: x,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            if (null == t.store_listing) return !1;
            p(t.store_listing)
        }
    })
}