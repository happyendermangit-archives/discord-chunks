function(e, t, r) {
    "use strict";
    let u;
    r.r(t), r.d(t, {
        default: function() {
            return a
        }
    });
    var n = r("446674"),
        i = r("913144");
    let s = [],
        E = s,
        l = null,
        c = e => {
            E = s, l = null
        };
    class o extends n.default.Store {
        get analyticsLocations() {
            return E
        }
        get analyticsSource() {
            return l
        }
        get initialProductSkuId() {
            return u
        }
        getAnalytics() {
            return {
                analyticsLocations: E,
                analyticsSource: l
            }
        }
    }
    o.displayName = "CollectiblesShopStore";
    var a = new o(i.default, {
        COLLECTIBLES_SHOP_OPEN: e => {
            var t, r;
            E = null !== (t = e.analyticsLocations) && void 0 !== t ? t : s, l = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, u = e.initialProductSkuId
        },
        COLLECTIBLES_SHOP_CLOSE: c,
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
            e.item.skuId === u && (u = void 0)
        },
        LOGOUT: c
    })
}