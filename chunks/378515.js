function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StorefrontButton: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("540220"),
        i = n("784184"),
        a = n("644463"),
        u = n("52907"),
        s = n("941504"),
        l = n("320757");

    function c(e) {
        return r.createElement(u.default, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({
            size: i.ButtonSizes.MEDIUM
        }, e), r.createElement("div", {
            className: l.storeBtn
        }, r.createElement(o.ShopSparkleIcon, {
            width: 16,
            height: 16,
            color: "#fff"
        }), r.createElement(a.default, {
            size: 4,
            horizontal: !0
        }), s.default.Messages.STOREFRONT))
    }
}