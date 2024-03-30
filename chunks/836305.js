function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("950175"),
        a = n("534154");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e) {
        var t, n, s = e.isGift,
            l = e.activeSubscription,
            c = (0, o.useStateFromStoresObject)([a.default], function() {
                return {
                    defaultPaymentSourceId: a.default.defaultPaymentSourceId,
                    paymentSources: a.default.paymentSources,
                    hasFetchedPaymentSources: a.default.hasFetchedPaymentSources
                }
            }),
            f = c.defaultPaymentSourceId,
            d = c.paymentSources,
            _ = c.hasFetchedPaymentSources,
            E = function(e, t, n) {
                return e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId
            };
        var p = (t = r.useState(function() {
                return E(s, l, f)
            }), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            m = p[0],
            y = p[1];
        return r.useEffect(function() {
            _ ? y(E(s, l, f)) : (0, i.fetchPaymentSources)()
        }, [_, s, l, f]), {
            paymentSources: d,
            hasPaymentSources: Object.keys(d).length > 0,
            paymentSourceId: m,
            setPaymentSourceId: y,
            hasFetchedPaymentSources: _
        }
    }
}