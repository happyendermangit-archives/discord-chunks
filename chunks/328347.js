function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s, a, o, l = n("442837"),
        u = n("570140");
    let d = [],
        _ = d,
        c = null,
        E = e => {
            _ = d, c = null
        };
    class I extends(o = l.default.Store) {
        get analyticsLocations() {
            return _
        }
        get analyticsSource() {
            return c
        }
        get initialProductSkuId() {
            return i
        }
        getAnalytics() {
            return {
                analyticsLocations: _,
                analyticsSource: c
            }
        }
    }
    a = "CollectiblesShopStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new I(u.default, {
        COLLECTIBLES_SHOP_OPEN: e => {
            var t, n;
            _ = null !== (t = e.analyticsLocations) && void 0 !== t ? t : d, c = null !== (n = e.analyticsSource) && void 0 !== n ? n : null, i = e.initialProductSkuId
        },
        COLLECTIBLES_SHOP_CLOSE: E,
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
            e.item.skuId === i && (i = void 0)
        },
        LOGOUT: E
    })
}