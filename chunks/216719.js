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
    let E = [],
        s = E,
        l = null,
        c = e => {
            s = E, l = null
        };
    class o extends n.default.Store {
        get analyticsLocations() {
            return s
        }
        get analyticsSource() {
            return l
        }
        get initialProductSkuId() {
            return u
        }
        getAnalytics() {
            return {
                analyticsLocations: s,
                analyticsSource: l
            }
        }
    }
    o.displayName = "CollectiblesShopStore";
    var a = new o(i.default, {
        COLLECTIBLES_SHOP_OPEN: e => {
            var t, r;
            s = null !== (t = e.analyticsLocations) && void 0 !== t ? t : E, l = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, u = e.initialProductSkuId
        },
        COLLECTIBLES_SHOP_CLOSE: c,
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
            e.item.skuId === u && (u = void 0)
        },
        LOGOUT: c
    })
}