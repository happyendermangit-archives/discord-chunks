function(e, t, n) {
    var r, o;
    e = n.nmd(e), n("854508"), n("424973"), n("222007"), n("70102"), n("808653"), r = this, o = function(e, t) {
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
                    u(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function c(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n, r, o = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                if (null != o) {
                    var u = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(e); !(c = (n = o.next()).done) && (u.push(n.value), !t || u.length !== t); c = !0);
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !c && null != o.return && o.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function i() {}

        function s() {}
        s.resetWarningCache = i;
        var l, f = function() {
            function e(e, t, n, r, o, u) {
                if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== u) {
                    var c = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw c.name = "Invariant Violation", c
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
                checkPropTypes: s,
                resetWarningCache: i
            };
            return n.PropTypes = n, n
        };
        var p = (function(e) {
                e.exports = f()
            }(l = {
                exports: {}
            }, l.exports), l.exports),
            d = function(e) {
                var n = t.useRef(e);
                return t.useEffect(function() {
                    n.current = e
                }, [e]), n.current
            },
            m = function(e) {
                return null !== e && "object" === o(e)
            },
            y = "[object Object]",
            h = function e(t, n) {
                if (!m(t) || !m(n)) return t === n;
                var r = Array.isArray(t);
                if (r !== Array.isArray(n)) return !1;
                var o = Object.prototype.toString.call(t) === y;
                if (o !== (Object.prototype.toString.call(n) === y)) return !1;
                if (!o && !r) return t === n;
                var u = Object.keys(t),
                    c = Object.keys(n);
                if (u.length !== c.length) return !1;
                for (var a = {}, i = 0; i < u.length; i += 1) a[u[i]] = !0;
                for (var s = 0; s < c.length; s += 1) a[c[s]] = !0;
                var l = Object.keys(a);
                return l.length === u.length && l.every(function(r) {
                    return e(t[r], n[r])
                })
            },
            v = function(e, t, n) {
                return m(e) ? Object.keys(e).reduce(function(o, c) {
                    var a = !m(t) || !h(e[c], t[c]);
                    return n.includes(c) ? (a && console.warn("Unsupported prop change: options.".concat(c, " is not a mutable property.")), o) : a ? r(r({}, o || {}), {}, u({}, c, e[c])) : o
                }, null) : null
            },
            g = function(e) {
                var t;
                if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
                throw Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
            },
            b = function(e) {
                if (m(t = e) && "function" == typeof t.then) return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(g)
                };
                var t, n = g(e);
                return null === n ? {
                    tag: "empty"
                } : {
                    tag: "sync",
                    stripe: n
                }
            },
            E = t.createContext(null);
        E.displayName = "ElementsContext";
        var S = function(e, t) {
                if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                return e
            },
            C = t.createContext(null);
        C.displayName = "CartElementContext";
        var j = function(e, t) {
                if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                return e
            },
            w = function(e) {
                var n = e.stripe,
                    r = e.options,
                    o = e.children,
                    u = t.useMemo(function() {
                        return b(n)
                    }, [n]),
                    a = c(t.useState(null), 2),
                    i = a[0],
                    s = a[1],
                    l = c(t.useState(null), 2),
                    f = l[0],
                    p = l[1],
                    m = c(t.useState(function() {
                        return {
                            stripe: "sync" === u.tag ? u.stripe : null,
                            elements: "sync" === u.tag ? u.stripe.elements(r) : null
                        }
                    }), 2),
                    y = m[0],
                    h = m[1];
                t.useEffect(function() {
                    var e = !0,
                        t = function(e) {
                            h(function(t) {
                                return t.stripe ? t : {
                                    stripe: e,
                                    elements: e.elements(r)
                                }
                            })
                        };
                    return "async" !== u.tag || y.stripe ? "sync" === u.tag && !y.stripe && t(u.stripe) : u.stripePromise.then(function(n) {
                            n && e && t(n)
                        }),
                        function() {
                            e = !1
                        }
                }, [u, y, r]);
                var g = d(n);
                t.useEffect(function() {
                    null !== g && g !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                }, [g, n]);
                var S = d(r);
                return t.useEffect(function() {
                    if (y.elements) {
                        var e = v(r, S, ["clientSecret", "fonts"]);
                        e && y.elements.update(e)
                    }
                }, [r, S, y.elements]), t.useEffect(function() {
                    var e = y.stripe;
                    e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
                        name: "react-stripe-js",
                        version: "2.1.2"
                    }), e.registerAppInfo({
                        name: "react-stripe-js",
                        version: "2.1.2",
                        url: "https://stripe.com/docs/stripe-js/react"
                    }))
                }, [y.stripe]), t.createElement(E.Provider, {
                    value: y
                }, t.createElement(C.Provider, {
                    value: {
                        cart: i,
                        setCart: s,
                        cartState: f,
                        setCartState: p
                    }
                }, o))
            };
        w.propTypes = {
            stripe: p.any,
            options: p.object
        };
        var O = function(e) {
                return S(t.useContext(E), e)
            },
            k = function(e) {
                return j(t.useContext(C), e)
            },
            P = function(e) {
                return (0, e.children)(O("mounts <ElementsConsumer>"))
            };
        P.propTypes = {
            children: p.func.isRequired
        };
        var x = function(e, n, r) {
                var o = !!r,
                    u = t.useRef(r);
                t.useEffect(function() {
                    u.current = r
                }, [r]), t.useEffect(function() {
                    if (!o || !e) return function() {};
                    var t = function() {
                        u.current && u.current.apply(u, arguments)
                    };
                    return e.on(n, t),
                        function() {
                            e.off(n, t)
                        }
                }, [o, n, e, u])
            },
            A = function(e, n) {
                var r, o = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
                    Element = n ? function(e) {
                        O("mounts <".concat(o, ">")), k("mounts <".concat(o, ">"));
                        var n = e.id,
                            r = e.className;
                        return t.createElement("div", {
                            id: n,
                            className: r
                        })
                    } : function(n) {
                        var r, u = n.id,
                            a = n.className,
                            i = n.options,
                            s = void 0 === i ? {} : i,
                            l = n.onBlur,
                            f = n.onFocus,
                            p = n.onReady,
                            m = n.onChange,
                            y = n.onEscape,
                            h = n.onClick,
                            g = n.onLoadError,
                            b = n.onLoaderStart,
                            E = n.onNetworksChange,
                            S = n.onCheckout,
                            C = n.onLineItemClick,
                            j = n.onConfirm,
                            w = n.onCancel,
                            P = n.onShippingAddressChange,
                            A = n.onShippingRateChange,
                            R = O("mounts <".concat(o, ">")).elements,
                            T = c(t.useState(null), 2),
                            _ = T[0],
                            N = T[1],
                            L = t.useRef(null),
                            B = t.useRef(null),
                            I = k("mounts <".concat(o, ">")),
                            M = I.setCart,
                            D = I.setCartState;
                        x(_, "blur", l), x(_, "focus", f), x(_, "escape", y), x(_, "click", h), x(_, "loaderror", g), x(_, "loaderstart", b), x(_, "networkschange", E), x(_, "lineitemclick", C), x(_, "confirm", j), x(_, "cancel", w), x(_, "shippingaddresschange", P), x(_, "shippingratechange", A), "cart" === e ? r = function(e) {
                            D(e), p && p(e)
                        } : p && (r = "expressCheckout" === e ? p : function() {
                            p(_)
                        }), x(_, "ready", r), x(_, "change", "cart" === e ? function(e) {
                            D(e), m && m(e)
                        } : m), x(_, "checkout", "cart" === e ? function(e) {
                            D(e), S && S(e)
                        } : S), t.useLayoutEffect(function() {
                            if (null === L.current && R && null !== B.current) {
                                var t = R.create(e, s);
                                "cart" === e && M && M(t), L.current = t, N(t), t.mount(B.current)
                            }
                        }, [R, s, M]);
                        var F = d(s);
                        return t.useEffect(function() {
                            if (L.current) {
                                var e = v(s, F, ["paymentRequest"]);
                                e && L.current.update(e)
                            }
                        }, [s, F]), t.useLayoutEffect(function() {
                            return function() {
                                if (L.current && "function" == typeof L.current.destroy) try {
                                    L.current.destroy(), L.current = null
                                } catch (e) {}
                            }
                        }, []), t.createElement("div", {
                            id: u,
                            className: a,
                            ref: B
                        })
                    };
                return Element.propTypes = {
                    id: p.string,
                    className: p.string,
                    onChange: p.func,
                    onBlur: p.func,
                    onFocus: p.func,
                    onReady: p.func,
                    onEscape: p.func,
                    onClick: p.func,
                    onLoadError: p.func,
                    onLoaderStart: p.func,
                    onNetworksChange: p.func,
                    onCheckout: p.func,
                    onLineItemClick: p.func,
                    onConfirm: p.func,
                    onCancel: p.func,
                    onShippingAddressChange: p.func,
                    onShippingRateChange: p.func,
                    options: p.object
                }, Element.displayName = o, Element.__elementType = e, Element
            },
            R = "undefined" == typeof window,
            T = A("auBankAccount", R),
            _ = A("card", R),
            N = A("cardNumber", R),
            L = A("cardExpiry", R),
            B = A("cardCvc", R),
            I = A("fpxBank", R),
            M = A("iban", R),
            D = A("idealBank", R),
            F = A("p24Bank", R),
            U = A("epsBank", R),
            W = A("payment", R),
            q = A("expressCheckout", R),
            Y = A("paymentRequestButton", R),
            V = A("linkAuthentication", R),
            J = A("address", R),
            $ = A("shippingAddress", R),
            z = A("cart", R),
            G = A("paymentMethodMessaging", R),
            H = A("affirmMessage", R),
            K = A("afterpayClearpayMessage", R);
        e.AddressElement = J, e.AffirmMessageElement = H, e.AfterpayClearpayMessageElement = K, e.AuBankAccountElement = T, e.CardCvcElement = B, e.CardElement = _, e.CardExpiryElement = L, e.CardNumberElement = N, e.CartElement = z, e.Elements = w, e.ElementsConsumer = P, e.EpsBankElement = U, e.ExpressCheckoutElement = q, e.FpxBankElement = I, e.IbanElement = M, e.IdealBankElement = D, e.LinkAuthenticationElement = V, e.P24BankElement = F, e.PaymentElement = W, e.PaymentMethodMessagingElement = G, e.PaymentRequestButtonElement = Y, e.ShippingAddressElement = $, e.useCartElement = function() {
            return k("calls useCartElement()").cart
        }, e.useCartElementState = function() {
            return k("calls useCartElementState()").cartState
        }, e.useElements = function() {
            return O("calls useElements()").elements
        }, e.useStripe = function() {
            return O("calls useStripe()").stripe
        }, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, "object" == typeof t && void 0 !== e ? o(t, n("884691")) : "function" == typeof define && define.amd ? define(["exports", "react"], o) : o((r = r || self).ReactStripe = {}, r.React)
}