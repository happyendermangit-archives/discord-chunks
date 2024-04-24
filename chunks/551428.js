function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("47120"), n("411104");
    var r, s, a, o, l = n("442837"),
        u = n("570140"),
        d = n("706454"),
        _ = n("156570"),
        c = n("823379");
    let E = {},
        I = {},
        T = {},
        f = {};

    function S(e) {
        let t = e.id,
            n = e.sku.id,
            i = E[t],
            r = _.default.createFromServer(e);
        !(null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) && (!1 === e.published ? (null == T[n] && (T[n] = new Set), T[n].add(t)) : f[n] = t, E[t] = r)
    }

    function h(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function A() {
        E = {}, f = {}, T = {}, I = {}
    }

    function m() {
        if (i === d.default.locale) return !1;
        A(), i = d.default.locale
    }
    class N extends(r = l.default.Store) {
        initialize() {
            this.waitFor(d.default), this.syncWith([d.default], m), i = d.default.locale
        }
        get(e) {
            return E[e]
        }
        getForSKU(e, t) {
            let n = f[e];
            return null != t ? I[h(t, e)] : null != n ? E[n] : null
        }
        getUnpublishedForSKU(e) {
            let t = T[e];
            return null == t ? [] : Array.from(t).map(e => E[e]).filter(c.isNotNullish)
        }
        getForChannel(e, t) {
            return I[h(e, t)]
        }
        getStoreListing(e) {
            let {
                storeListingId: t,
                skuId: n,
                channelId: i,
                isTestMode: r
            } = e;
            if (r && null != n) {
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
    o = "StoreListingStore", (a = "displayName") in(s = N) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new N(u.default, {
        STORE_LISTINGS_FETCH_SUCCESS: function(e) {
            let {
                storeListings: t
            } = e;
            for (let e of t) S(e)
        },
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            let {
                storeListing: t,
                channelId: n
            } = e;
            if (null != n) {
                let e = _.default.createFromServer(t);
                I[h(n, e.skuId)] = e, f[e.skuId] = e.id
            } else S(t)
        },
        USER_SETTINGS_PROTO_UPDATE: m,
        APPLICATION_STORE_CLEAR_DATA: A,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            if (null == t.store_listing) return !1;
            S(t.store_listing)
        }
    })
}