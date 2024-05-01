function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAppStorefrontAvailable: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("812206"),
        a = n("621853");

    function s(e) {
        return (0, i.useStateFromStores)([r.default, a.default], () => {
            var t, n, i, s, o;
            return null !== (o = null !== (s = null === (t = r.default.getApplication(e)) || void 0 === t ? void 0 : t.storefront_available) && void 0 !== s ? s : null === (i = a.default.getUserProfile(e)) || void 0 === i ? void 0 : null === (n = i.application) || void 0 === n ? void 0 : n.storefront_available) && void 0 !== o && o
        }, [e])
    }
}