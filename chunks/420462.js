function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSubscriptionPlansLoaded: function() {
            return E
        },
        useSubscriptionPlansLoaded: function() {
            return _
        }
    });
    var r = n("898511"),
        o = n("35523"),
        i = n("534154"),
        a = n("622753"),
        u = n("428920"),
        s = n("868615");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        return function(e) {
            if (Array.isArray(e)) return l(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || f(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(e, t) {
        if (e) {
            if ("string" == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
        }
    }
    new o.default("useSubscriptionPlansLoaded");
    var d = function(e) {};

    function _() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c(s.ACTIVE_PREMIUM_SKUS);
        return (0, r.useStateFromStores)([i.default, a.default, u.default], function() {
            return E(e, [i.default, a.default, u.default])
        }, [e])
    }

    function E() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c(s.ACTIVE_PREMIUM_SKUS),
            t = (h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, a.default, u.default], O = 3, function(e) {
                if (Array.isArray(e)) return e
            }(h) || function(e, t) {
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
            }(h, O) || f(h, O) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            n = t[0],
            r = t[1],
            o = t[2],
            l = n.paymentSourceIds,
            _ = n.defaultPaymentSourceId,
            E = r.isLoadedForSKUs(e),
            p = null === (T = o.getPremiumTypeSubscription()) || void 0 === T ? void 0 : T.paymentSourceId;
        if (null != p && !r.hasPaymentSourceForSKUIds(p, e)) return d("subscription payment source ".concat(p, " not loaded for ").concat(e)), !1;
        if (null != _ && !r.hasPaymentSourceForSKUIds(_, e)) return d("default payment source ".concat(_, " not loaded for ").concat(e)), !1;
        var m = !0,
            y = !1,
            I = void 0;
        try {
            for (var h, O, T, S, v = l[Symbol.iterator](); !(m = (S = v.next()).done); m = !0) {
                var g = S.value;
                if (!r.hasPaymentSourceForSKUIds(g, e)) return d("payment source ".concat(g, " not loaded for ").concat(e)), !1
            }
        } catch (e) {
            y = !0, I = e
        } finally {
            try {
                !m && null != v.return && v.return()
            } finally {
                if (y) throw I
            }
        }
        return d("isLoadedForSKUs ".concat(E)), E
    }
}