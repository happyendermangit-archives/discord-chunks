function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAppStorefrontAvailable: function() {
            return a
        }
    });
    var i = n("442837"),
        r = n("812206"),
        s = n("621853");

    function a(e) {
        return (0, i.useStateFromStores)([r.default, s.default], () => {
            var t, n, i, a, o;
            return null !== (o = null !== (a = null === (t = r.default.getApplication(e)) || void 0 === t ? void 0 : t.storefront_available) && void 0 !== a ? a : null === (i = s.default.getUserProfile(e)) || void 0 === i ? void 0 : null === (n = i.application) || void 0 === n ? void 0 : n.storefront_available) && void 0 !== o && o
        }, [e])
    }
}