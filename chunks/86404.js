function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return c
        }
    });
    var n = r("470079"),
        l = r("784184"),
        i = r("660394"),
        a = r("941504"),
        o = r("626707");

    function c() {
        return n.createElement(l.Tooltip, {
            text: a.default.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP
        }, function(e) {
            return n.createElement("div", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n, l, i;
                        n = e, l = t, i = r[t], l in n ? Object.defineProperty(n, l, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[l] = i
                    })
                }
                return e
            }({
                className: o.badge
            }, e), n.createElement(i.default, {
                width: "1rem",
                height: "1rem"
            }))
        })
    }
}