function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return s
        }
    }), n("222007");
    var i = n("884691"),
        u = n("65597"),
        r = n("465527"),
        l = n("622839"),
        a = n("552712"),
        o = n("646718");

    function s(t) {
        let {
            applicationId: e,
            skuIDs: n,
            currentPaymentSourceId: s,
            isGift: c
        } = t, S = i.useMemo(() => n.filter(t => !o.ACTIVE_PREMIUM_SKUS.includes(t)), [JSON.stringify(n)]), d = (0, u.default)([a.default], () => S.every(t => !a.default.isFetching(t) && null != a.default.get(t))), E = (0, u.useStateFromStoresObject)([a.default], () => {
            let t = {};
            for (let n of S) {
                var e;
                t[n] = null !== (e = a.default.get(n)) && void 0 !== e ? e : void 0
            }
            return t
        }, [S]);
        i.useEffect(() => {
            for (let t of S) !a.default.isFetching(t) && null == a.default.get(t) && (0, r.fetchSKU)(e, t)
        }, [e, S]);
        let f = (0, u.useStateFromStoresObject)([l.default], () => {
            let t = {};
            for (let n of S) {
                var e;
                t[n] = null !== (e = l.default.getPricesForSku(n)) && void 0 !== e ? e : void 0
            }
            return t
        }, [S]);
        return i.useEffect(() => {
            for (let t of S) !l.default.isFetchingSKU(t) && (0, r.fetchPurchasePreview)(e, t, s, {
                isGift: c
            })
        }, [e, S, s, c]), {
            hasFetchedSkus: d,
            skusById: E,
            skuPricePreviewsById: f
        }
    }
}