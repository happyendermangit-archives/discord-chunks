function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("399606"),
        r = n("597688"),
        a = n("1870");
    t.default = e => {
        let [t, n] = (0, i.useStateFromStoresArray)([r.default], () => [r.default.getCategoryForProduct(e), r.default.getProduct(e)]);
        return {
            category: t,
            product: n,
            purchase: (0, i.useStateFromStores)([a.default], () => a.default.getPurchase(e))
        }
    }
}