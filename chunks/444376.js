function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("715045"),
        i = n("898511"),
        a = n("601094"),
        u = n("374550"),
        s = n("297337"),
        l = n("694215"),
        c = (0, o.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("99387"), n.e("40326"), n.e("80451"), n.e("52110"), n.e("57036"), n.e("15977"), n.e("33926"), n.e("49936")]).then(n.bind(n, "171861"))
            },
            webpackId: "171861"
        });

    function f(e) {
        var t = e.mobile,
            n = (0, i.useStateFromStores)([a.default], function() {
                return a.default.isDeveloper
            }),
            o = (0, i.useStateFromStores)([l.default], function() {
                return l.default.displayTools
            }),
            f = r.useCallback(function(e) {
                ((0, u.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, s.toggleDisplayDevTools)()
            }, []);
        return (r.useLayoutEffect(function() {
            return window.addEventListener("keydown", f),
                function() {
                    window.removeEventListener("keydown", f)
                }
        }, [f]), t ? n : o) ? r.createElement(c, {
            mobile: t
        }) : null
    }
}