function(e, t, n) {
    var r, i;
    r = this, i = function(e, t) {
        "use strict";

        function n(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach(function(t) {
                    a(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n, r, i = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                if (null != i) {
                    var a = [],
                        o = !0,
                        s = !1;
                    try {
                        for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            !o && null != i.return && i.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;

        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function u() {}

        function c() {}
        c.resetWarningCache = u;
        var l, d = function() {
            function e(e, t, n, r, i, a) {
                if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
                    var o = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw o.name = "Invariant Violation", o
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: c,
                resetWarningCache: u
            };
            return n.PropTypes = n, n
        };
        var f = (function(e) {
                e.exports = d()
            }(l = {
                exports: {}
            }, l.exports), l.exports),
            p = function(e) {
                var n = t.useRef(e);
                return t.useEffect(function() {
                    n.current = e
                }, [e]), n.current
            },
            h = function(e) {
                return null !== e && "object" === i(e)
            },
            m = "[object Object]",
            g = function e(t, n) {
                if (!h(t) || !h(n)) return t === n;
                var r = Array.isArray(t);
                if (r !== Array.isArray(n)) return !1;
                var i = Object.prototype.toString.call(t) === m;
                if (i !== (Object.prototype.toString.call(n) === m)) return !1;
                if (!i && !r) return t === n;
                var a = Object.keys(t),
                    o = Object.keys(n);
                if (a.length !== o.length) return !1;
                for (var s = {}, u = 0; u < a.length; u += 1) s[a[u]] = !0;
                for (var c = 0; c < o.length; c += 1) s[o[c]] = !0;
                var l = Object.keys(s);
                return l.length === a.length && l.every(function(r) {
                    return e(t[r], n[r])
                })
            },
            _ = function(e, t, n) {
                return h(e) ? Object.keys(e).reduce(function(i, o) {
                    var s = !h(t) || !g(e[o], t[o]);
                    return n.includes(o) ? (s && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), i) : s ? r(r({}, i || {}), {}, a({}, o, e[o])) : i
                }, null) : null
            },
            b = function(e) {
                var t;
                if (null === e || h(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
                throw Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
            },
            v = function(e) {
                if (h(t = e) && "function" == typeof t.then) return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(b)
                };
                var t, n = b(e);
                return null === n ? {
                    tag: "empty"
                } : {
                    tag: "sync",
                    stripe: n
                }
            },
            y = t.createContext(null);
        y.displayName = "ElementsContext";
        var E = function(e, t) {
                if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                return e
            },
            S = t.createContext(null);
        S.displayName = "CartElementContext";
        var x = function(e, t) {
                if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                return e
            },
            w = function(e) {
                var n = e.stripe,
                    r = e.options,
                    i = e.children,
                    a = t.useMemo(function() {
                        return v(n)
                    }, [n]),
                    s = o(t.useState(null), 2),
                    u = s[0],
                    c = s[1],
                    l = o(t.useState(null), 2),
                    d = l[0],
                    f = l[1],
                    h = o(t.useState(function() {
                        return {
                            stripe: "sync" === a.tag ? a.stripe : null,
                            elements: "sync" === a.tag ? a.stripe.elements(r) : null
                        }
                    }), 2),
                    m = h[0],
                    g = h[1];
                t.useEffect(function() {
                    var e = !0,
                        t = function(e) {
                            g(function(t) {
                                return t.stripe ? t : {
                                    stripe: e,
                                    elements: e.elements(r)
                                }
                            })
                        };
                    return "async" !== a.tag || m.stripe ? "sync" === a.tag && !m.stripe && t(a.stripe) : a.stripePromise.then(function(n) {
                            n && e && t(n)
                        }),
                        function() {
                            e = !1
                        }
                }, [a, m, r]);
                var b = p(n);
                t.useEffect(function() {
                    null !== b && b !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                }, [b, n]);
                var E = p(r);
                return t.useEffect(function() {
                    if (m.elements) {
                        var e = _(r, E, ["clientSecret", "fonts"]);
                        e && m.elements.update(e)
                    }
                }, [r, E, m.elements]), t.useEffect(function() {
                    var e = m.stripe;
                    e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
                        name: "react-stripe-js",
                        version: "2.1.2"
                    }), e.registerAppInfo({
                        name: "react-stripe-js",
                        version: "2.1.2",
                        url: "https://stripe.com/docs/stripe-js/react"
                    }))
                }, [m.stripe]), t.createElement(y.Provider, {
                    value: m
                }, t.createElement(S.Provider, {
                    value: {
                        cart: u,
                        setCart: c,
                        cartState: d,
                        setCartState: f
                    }
                }, i))
            };
        w.propTypes = {
            stripe: f.any,
            options: f.object
        };
        var T = function(e) {
                return E(t.useContext(y), e)
            },
            C = function(e) {
                return x(t.useContext(S), e)
            },
            D = function(e) {
                return (0, e.children)(T("mounts <ElementsConsumer>"))
            };
        D.propTypes = {
            children: f.func.isRequired
        };
        var O = function(e, n, r) {
                var i = !!r,
                    a = t.useRef(r);
                t.useEffect(function() {
                    a.current = r
                }, [r]), t.useEffect(function() {
                    if (!i || !e) return function() {};
                    var t = function() {
                        a.current && a.current.apply(a, arguments)
                    };
                    return e.on(n, t),
                        function() {
                            e.off(n, t)
                        }
                }, [i, n, e, a])
            },
            M = function(e, n) {
                var r, i = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
                    a = n ? function(e) {
                        T("mounts <".concat(i, ">")), C("mounts <".concat(i, ">"));
                        var n = e.id,
                            r = e.className;
                        return t.createElement("div", {
                            id: n,
                            className: r
                        })
                    } : function(n) {
                        var r, a = n.id,
                            s = n.className,
                            u = n.options,
                            c = void 0 === u ? {} : u,
                            l = n.onBlur,
                            d = n.onFocus,
                            f = n.onReady,
                            h = n.onChange,
                            m = n.onEscape,
                            g = n.onClick,
                            b = n.onLoadError,
                            v = n.onLoaderStart,
                            y = n.onNetworksChange,
                            E = n.onCheckout,
                            S = n.onLineItemClick,
                            x = n.onConfirm,
                            w = n.onCancel,
                            D = n.onShippingAddressChange,
                            M = n.onShippingRateChange,
                            A = T("mounts <".concat(i, ">")).elements,
                            k = o(t.useState(null), 2),
                            R = k[0],
                            N = k[1],
                            I = t.useRef(null),
                            L = t.useRef(null),
                            P = C("mounts <".concat(i, ">")),
                            F = P.setCart,
                            B = P.setCartState;
                        O(R, "blur", l), O(R, "focus", d), O(R, "escape", m), O(R, "click", g), O(R, "loaderror", b), O(R, "loaderstart", v), O(R, "networkschange", y), O(R, "lineitemclick", S), O(R, "confirm", x), O(R, "cancel", w), O(R, "shippingaddresschange", D), O(R, "shippingratechange", M), "cart" === e ? r = function(e) {
                            B(e), f && f(e)
                        } : f && (r = "expressCheckout" === e ? f : function() {
                            f(R)
                        }), O(R, "ready", r), O(R, "change", "cart" === e ? function(e) {
                            B(e), h && h(e)
                        } : h), O(R, "checkout", "cart" === e ? function(e) {
                            B(e), E && E(e)
                        } : E), t.useLayoutEffect(function() {
                            if (null === I.current && A && null !== L.current) {
                                var t = A.create(e, c);
                                "cart" === e && F && F(t), I.current = t, N(t), t.mount(L.current)
                            }
                        }, [A, c, F]);
                        var U = p(c);
                        return t.useEffect(function() {
                            if (I.current) {
                                var e = _(c, U, ["paymentRequest"]);
                                e && I.current.update(e)
                            }
                        }, [c, U]), t.useLayoutEffect(function() {
                            return function() {
                                if (I.current && "function" == typeof I.current.destroy) try {
                                    I.current.destroy(), I.current = null
                                } catch (e) {}
                            }
                        }, []), t.createElement("div", {
                            id: a,
                            className: s,
                            ref: L
                        })
                    };
                return a.propTypes = {
                    id: f.string,
                    className: f.string,
                    onChange: f.func,
                    onBlur: f.func,
                    onFocus: f.func,
                    onReady: f.func,
                    onEscape: f.func,
                    onClick: f.func,
                    onLoadError: f.func,
                    onLoaderStart: f.func,
                    onNetworksChange: f.func,
                    onCheckout: f.func,
                    onLineItemClick: f.func,
                    onConfirm: f.func,
                    onCancel: f.func,
                    onShippingAddressChange: f.func,
                    onShippingRateChange: f.func,
                    options: f.object
                }, a.displayName = i, a.__elementType = e, a
            },
            A = "undefined" == typeof window,
            k = M("auBankAccount", A),
            R = M("card", A),
            N = M("cardNumber", A),
            I = M("cardExpiry", A),
            L = M("cardCvc", A),
            P = M("fpxBank", A),
            F = M("iban", A),
            B = M("idealBank", A),
            U = M("p24Bank", A),
            Y = M("epsBank", A),
            j = M("payment", A),
            z = M("expressCheckout", A),
            H = M("paymentRequestButton", A),
            G = M("linkAuthentication", A),
            V = M("address", A),
            $ = M("shippingAddress", A),
            W = M("cart", A),
            K = M("paymentMethodMessaging", A),
            q = M("affirmMessage", A),
            Q = M("afterpayClearpayMessage", A);
        e.AddressElement = V, e.AffirmMessageElement = q, e.AfterpayClearpayMessageElement = Q, e.AuBankAccountElement = k, e.CardCvcElement = L, e.CardElement = R, e.CardExpiryElement = I, e.CardNumberElement = N, e.CartElement = W, e.Elements = w, e.ElementsConsumer = D, e.EpsBankElement = Y, e.ExpressCheckoutElement = z, e.FpxBankElement = P, e.IbanElement = F, e.IdealBankElement = B, e.LinkAuthenticationElement = G, e.P24BankElement = U, e.PaymentElement = j, e.PaymentMethodMessagingElement = K, e.PaymentRequestButtonElement = H, e.ShippingAddressElement = $, e.useCartElement = function() {
            return C("calls useCartElement()").cart
        }, e.useCartElementState = function() {
            return C("calls useCartElementState()").cartState
        }, e.useElements = function() {
            return T("calls useElements()").elements
        }, e.useStripe = function() {
            return T("calls useStripe()").stripe
        }, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, "object" == typeof t ? i(t, n("470079")) : "function" == typeof define && define.amd ? define(["exports", "react"], i) : i((r = r || self).ReactStripe = {}, r.React)
}