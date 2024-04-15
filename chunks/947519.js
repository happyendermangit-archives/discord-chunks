function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("608787"),
        a = n("442837"),
        o = n("906467"),
        l = n("358085"),
        u = n("31336"),
        d = n("19759");
    let _ = (0, s.makeLazy)({
        createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("40326"), n.e("80451"), n.e("52110"), n.e("90508"), n.e("62856"), n.e("30634"), n.e("93280")]).then(n.bind(n, "678717")),
        webpackId: "678717"
    });

    function c(e) {
        let {
            mobile: t
        } = e, n = (0, a.useStateFromStores)([o.default], () => o.default.isDeveloper), s = (0, a.useStateFromStores)([d.default], () => d.default.displayTools), c = r.useCallback(e => {
            ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.toggleDisplayDevTools)()
        }, []);
        return (r.useLayoutEffect(() => (window.addEventListener("keydown", c), () => {
            window.removeEventListener("keydown", c)
        }), [c]), t ? n : s) ? (0, i.jsx)(_, {
            mobile: t
        }) : null
    }
}