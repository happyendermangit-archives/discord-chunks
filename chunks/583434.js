function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFetchCollectiblesProduct: function() {
            return u
        }
    }), n("47120");
    var i = n("470079"),
        r = n("399606"),
        a = n("55563"),
        s = n("335131"),
        o = n("597688"),
        l = n("981631");

    function u(e) {
        let t = (0, r.useStateFromStores)([a.default], () => null != e ? a.default.get(e) : null),
            n = null != t && t.productLine !== l.SKUProductLines.COLLECTIBLES,
            [u, d] = (0, r.useStateFromStoresArray)([o.default], () => [o.default.isFetchingProduct(e), o.default.getProduct(e)]);
        return (0, i.useEffect)(() => {
            null != e && null == d && !n && !u && (0, s.fetchCollectiblesProduct)(e)
        }, [e, d, n, u]), {
            product: d,
            isFetching: u
        }
    }
}