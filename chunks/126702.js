function(e, t) {
    "use strict";

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = "https://js.stripe.com/v3",
        a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        o = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        s = function() {
            for (var e = document.querySelectorAll('script[src^="'.concat(i, '"]')), t = 0; t < e.length; t++) {
                var n = e[t];
                if (a.test(n.src)) return n
            }
            return null
        },
        u = function(e) {
            var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                n = document.createElement("script");
            n.src = "".concat(i).concat(t);
            var r = document.head || document.body;
            if (!r) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
            return r.appendChild(n), n
        },
        c = function(e, t) {
            e && e._registerWrapper && e._registerWrapper({
                name: "stripe-js",
                version: "2.0.0",
                startTime: t
            })
        },
        l = null,
        d = function(e, t, n) {
            if (null === e) return null;
            var r = e.apply(void 0, t);
            return c(r, n), r
        },
        f = function(e) {
            var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
            if (null === e || "object" !== n(e)) throw Error(t);
            if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
            throw Error(t)
        },
        p = !1,
        h = function() {
            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            p = !0;
            var a = Date.now();
            return (e = r, null !== l ? l : l = new Promise(function(t, n) {
                if ("undefined" == typeof window || "undefined" == typeof document) {
                    t(null);
                    return
                }
                if (window.Stripe && e && console.warn(o), window.Stripe) {
                    t(window.Stripe);
                    return
                }
                try {
                    var r = s();
                    r && e ? console.warn(o) : !r && (r = u(e)), r.addEventListener("load", function() {
                        window.Stripe ? t(window.Stripe) : n(Error("Stripe.js not available"))
                    }), r.addEventListener("error", function() {
                        n(Error("Failed to load Stripe.js"))
                    })
                } catch (e) {
                    n(e);
                    return
                }
            })).then(function(e) {
                return d(e, n, a)
            })
        };
    h.setLoadParameters = function(e) {
        if (!(p && r && Object.keys(f(e)).reduce(function(t, n) {
                var i;
                return t && e[n] === (null === (i = r) || void 0 === i ? void 0 : i[n])
            }, !0))) {
            if (p) throw Error("You cannot change load parameters after calling loadStripe");
            r = f(e)
        }
    }, t.loadStripe = h
}