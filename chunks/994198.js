function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        coalesceInvoiceItems: function() {
            return a
        },
        createInvoiceItemFromServer: function() {
            return u
        }
    });
    var r = n("392711"),
        o = n.n(r);

    function i(e) {
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
    }

    function a(e) {
        var t = [],
            n = new Set;
        return e.map(function(e) {
            var r = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
                    var c, f, d = s.value;
                    if (c = d, f = e, c.subscriptionPlanId === f.subscriptionPlanId && c.subscriptionPlanPrice === f.subscriptionPlanPrice && c.amount === f.amount && o().isEqual(c.discounts, f.discounts)) {
                        n.add(d.subscriptionPlanId), d.quantity += e.quantity;
                        return
                    }
                }
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !r && null != l.return && l.return()
                } finally {
                    if (a) throw u
                }
            }
            t.push(i({}, e))
        }), t.map(function(e) {
            var t = i({}, e);
            return n.has(e.subscriptionPlanId) && (t.amount = t.amount * t.quantity, t.discounts = t.discounts.map(function(e) {
                var n, r;
                return n = i({}, e), r = (r = {
                    amount: e.amount * t.quantity
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n
            })), t
        })
    }

    function u(e) {
        return {
            id: e.id,
            subscriptionPlanId: e.subscription_plan_id,
            subscriptionPlanPrice: e.subscription_plan_price,
            amount: e.amount,
            quantity: e.quantity,
            discounts: e.discounts
        }
    }
}