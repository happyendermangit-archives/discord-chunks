function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("47120");
    var i = n("470079"),
        r = n("399606"),
        s = n("16084"),
        a = n("855775"),
        o = n("55563"),
        l = n("474936");

    function u(e) {
        let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: u,
            isGift: d
        } = e, _ = i.useMemo(() => n.filter(e => !l.ACTIVE_PREMIUM_SKUS.includes(e)), [JSON.stringify(n)]), c = (0, r.useStateFromStores)([o.default], () => _.every(e => !o.default.isFetching(e) && null != o.default.get(e))), E = (0, r.useStateFromStoresObject)([o.default], () => {
            let e = {};
            for (let n of _) {
                var t;
                e[n] = null !== (t = o.default.get(n)) && void 0 !== t ? t : void 0
            }
            return e
        }, [_]);
        i.useEffect(() => {
            for (let e of _) !o.default.isFetching(e) && null == o.default.get(e) && (0, s.fetchSKU)(t, e)
        }, [t, _]);
        let I = (0, r.useStateFromStoresObject)([a.default], () => {
            let e = {};
            for (let n of _) {
                var t;
                e[n] = null !== (t = a.default.getPricesForSku(n)) && void 0 !== t ? t : void 0
            }
            return e
        }, [_]);
        return i.useEffect(() => {
            for (let e of _) !a.default.isFetchingSKU(e) && (0, s.fetchPurchasePreview)(t, e, u, {
                isGift: d
            })
        }, [t, _, u, d]), {
            hasFetchedSkus: c,
            skusById: E,
            skuPricePreviewsById: I
        }
    }
}