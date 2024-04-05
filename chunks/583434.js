function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFetchCollectiblesProduct: function() {
            return u
        }
    }), n("47120");
    var i = n("470079"),
        r = n("399606"),
        s = n("55563"),
        a = n("335131"),
        o = n("597688"),
        l = n("981631");

    function u(e) {
        let t = (0, r.useStateFromStores)([s.default], () => null != e ? s.default.get(e) : null),
            n = null != t && t.productLine !== l.SKUProductLines.COLLECTIBLES,
            [u, d] = (0, r.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.getProduct(e)]);
        return (0, i.useEffect)(() => {
            null != e && null == d && !n && !u && (0, a.fetchCollectiblesProduct)(e)
        }, [e, d, n, u]), {
            product: d,
            isFetching: u
        }
    }
}