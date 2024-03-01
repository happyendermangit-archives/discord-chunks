function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return s
        }
    }), n("222007");
    var u = n("884691"),
        i = n("65597"),
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
        } = t, S = u.useMemo(() => n.filter(t => !o.ACTIVE_PREMIUM_SKUS.includes(t)), [JSON.stringify(n)]), E = (0, i.default)([a.default], () => S.every(t => !a.default.isFetching(t) && null != a.default.get(t))), d = (0, i.useStateFromStoresObject)([a.default], () => {
            let t = {};
            for (let n of S) {
                var e;
                t[n] = null !== (e = a.default.get(n)) && void 0 !== e ? e : void 0
            }
            return t
        }, [S]);
        u.useEffect(() => {
            for (let t of S) !a.default.isFetching(t) && null == a.default.get(t) && (0, r.fetchSKU)(e, t)
        }, [e, S]);
        let f = (0, i.useStateFromStoresObject)([l.default], () => {
            let t = {};
            for (let n of S) {
                var e;
                t[n] = null !== (e = l.default.getPricesForSku(n)) && void 0 !== e ? e : void 0
            }
            return t
        }, [S]);
        return u.useEffect(() => {
            for (let t of S) !l.default.isFetchingSKU(t) && (0, r.fetchPurchasePreview)(e, t, s, {
                isGift: c
            })
        }, [e, S, s, c]), {
            hasFetchedSkus: E,
            skusById: d,
            skuPricePreviewsById: f
        }
    }
}