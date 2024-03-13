function(e, t, n) {
    var r, i;
    e = n.nmd(e), n("854508"), n("424973"), n("222007"), n("70102"), n("808653"), r = this, i = function(e, t) {
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
                    o(e, t, r[t])
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

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n, r, i = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                if (null != i) {
                    var o = [],
                        s = !0,
                        a = !1;
                    try {
                        for (i = i.call(e); !(s = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !s && null != i.return && i.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return o
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

        function c() {}

        function u() {}
        u.resetWarningCache = c;
        var d, l = function() {
            function e(e, t, n, r, i, o) {
                if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== o) {
                    var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
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
                checkPropTypes: u,
                resetWarningCache: c
            };
            return n.PropTypes = n, n
        };
        var f = (function(e) {
                e.exports = l()
            }(d = {
                exports: {}
            }, d.exports), d.exports),
            p = function(e) {
                var n = t.useRef(e);
                return t.useEffect(function() {
                    n.current = e
                }, [e]), n.current
            },
            h = function(e) {
                return null !== e && "object" === i(e)
            },
            v = "[object Object]",
            g = function e(t, n) {
                if (!h(t) || !h(n)) return t === n;
                var r = Array.isArray(t);
                if (r !== Array.isArray(n)) return !1;
                var i = Object.prototype.toString.call(t) === v;
                if (i !== (Object.prototype.toString.call(n) === v)) return !1;
                if (!i && !r) return t === n;
                var o = Object.keys(t),
                    s = Object.keys(n);
                if (o.length !== s.length) return !1;
                for (var a = {}, c = 0; c < o.length; c += 1) a[o[c]] = !0;
                for (var u = 0; u < s.length; u += 1) a[s[u]] = !0;
                var d = Object.keys(a);
                return d.length === o.length && d.every(function(r) {
                    return e(t[r], n[r])
                })
            },
            b = function(e, t, n) {
                return h(e) ? Object.keys(e).reduce(function(i, s) {
                    var a = !h(t) || !g(e[s], t[s]);
                    return n.includes(s) ? (a && console.warn("Unsupported prop change: options.".concat(s, " is not a mutable property.")), i) : a ? r(r({}, i || {}), {}, o({}, s, e[s])) : i
                }, null) : null
            },
            m = function(e) {
                var t;
                if (null === e || h(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
                throw Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
            },
            y = function(e) {
                if (h(t = e) && "function" == typeof t.then) return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(m)
                };
                var t, n = m(e);
                return null === n ? {
                    tag: "empty"
                } : {
                    tag: "sync",
                    stripe: n
                }
            },
            x = t.createContext(null);
        x.displayName = "ElementsContext";
        var w = function(e, t) {
                if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                return e
            },
            S = t.createContext(null);
        S.displayName = "CartElementContext";
        var k = function(e, t) {
                if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                return e
            },
            E = function(e) {
                var n = e.stripe,
                    r = e.options,
                    i = e.children,
                    o = t.useMemo(function() {
                        return y(n)
                    }, [n]),
                    a = s(t.useState(null), 2),
                    c = a[0],
                    u = a[1],
                    d = s(t.useState(null), 2),
                    l = d[0],
                    f = d[1],
                    h = s(t.useState(function() {
                        return {
                            stripe: "sync" === o.tag ? o.stripe : null,
                            elements: "sync" === o.tag ? o.stripe.elements(r) : null
                        }
                    }), 2),
                    v = h[0],
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
                    return "async" !== o.tag || v.stripe ? "sync" === o.tag && !v.stripe && t(o.stripe) : o.stripePromise.then(function(n) {
                            n && e && t(n)
                        }),
                        function() {
                            e = !1
                        }
                }, [o, v, r]);
                var m = p(n);
                t.useEffect(function() {
                    null !== m && m !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                }, [m, n]);
                var w = p(r);
                return t.useEffect(function() {
                    if (v.elements) {
                        var e = b(r, w, ["clientSecret", "fonts"]);
                        e && v.elements.update(e)
                    }
                }, [r, w, v.elements]), t.useEffect(function() {
                    var e = v.stripe;
                    e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
                        name: "react-stripe-js",
                        version: "2.1.2"
                    }), e.registerAppInfo({
                        name: "react-stripe-js",
                        version: "2.1.2",
                        url: "https://stripe.com/docs/stripe-js/react"
                    }))
                }, [v.stripe]), t.createElement(x.Provider, {
                    value: v
                }, t.createElement(S.Provider, {
                    value: {
                        cart: c,
                        setCart: u,
                        cartState: l,
                        setCartState: f
                    }
                }, i))
            };
        E.propTypes = {
            stripe: f.any,
            options: f.object
        };
        var _ = function(e) {
                return w(t.useContext(x), e)
            },
            M = function(e) {
                return k(t.useContext(S), e)
            },
            D = function(e) {
                return (0, e.children)(_("mounts <ElementsConsumer>"))
            };
        D.propTypes = {
            children: f.func.isRequired
        };
        var C = function(e, n, r) {
                var i = !!r,
                    o = t.useRef(r);
                t.useEffect(function() {
                    o.current = r
                }, [r]), t.useEffect(function() {
                    if (!i || !e) return function() {};
                    var t = function() {
                        o.current && o.current.apply(o, arguments)
                    };
                    return e.on(n, t),
                        function() {
                            e.off(n, t)
                        }
                }, [i, n, e, o])
            },
            P = function(e, n) {
                var r, i = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
                    Element = n ? function(e) {
                        _("mounts <".concat(i, ">")), M("mounts <".concat(i, ">"));
                        var n = e.id,
                            r = e.className;
                        return t.createElement("div", {
                            id: n,
                            className: r
                        })
                    } : function(n) {
                        var r, o = n.id,
                            a = n.className,
                            c = n.options,
                            u = void 0 === c ? {} : c,
                            d = n.onBlur,
                            l = n.onFocus,
                            f = n.onReady,
                            h = n.onChange,
                            v = n.onEscape,
                            g = n.onClick,
                            m = n.onLoadError,
                            y = n.onLoaderStart,
                            x = n.onNetworksChange,
                            w = n.onCheckout,
                            S = n.onLineItemClick,
                            k = n.onConfirm,
                            E = n.onCancel,
                            D = n.onShippingAddressChange,
                            P = n.onShippingRateChange,
                            T = _("mounts <".concat(i, ">")).elements,
                            A = s(t.useState(null), 2),
                            R = A[0],
                            I = A[1],
                            O = t.useRef(null),
                            j = t.useRef(null),
                            L = M("mounts <".concat(i, ">")),
                            N = L.setCart,
                            F = L.setCartState;
                        C(R, "blur", d), C(R, "focus", l), C(R, "escape", v), C(R, "click", g), C(R, "loaderror", m), C(R, "loaderstart", y), C(R, "networkschange", x), C(R, "lineitemclick", S), C(R, "confirm", k), C(R, "cancel", E), C(R, "shippingaddresschange", D), C(R, "shippingratechange", P), "cart" === e ? r = function(e) {
                            F(e), f && f(e)
                        } : f && (r = "expressCheckout" === e ? f : function() {
                            f(R)
                        }), C(R, "ready", r), C(R, "change", "cart" === e ? function(e) {
                            F(e), h && h(e)
                        } : h), C(R, "checkout", "cart" === e ? function(e) {
                            F(e), w && w(e)
                        } : w), t.useLayoutEffect(function() {
                            if (null === O.current && T && null !== j.current) {
                                var t = T.create(e, u);
                                "cart" === e && N && N(t), O.current = t, I(t), t.mount(j.current)
                            }
                        }, [T, u, N]);
                        var B = p(u);
                        return t.useEffect(function() {
                            if (O.current) {
                                var e = b(u, B, ["paymentRequest"]);
                                e && O.current.update(e)
                            }
                        }, [u, B]), t.useLayoutEffect(function() {
                            return function() {
                                if (O.current && "function" == typeof O.current.destroy) try {
                                    O.current.destroy(), O.current = null
                                } catch (e) {}
                            }
                        }, []), t.createElement("div", {
                            id: o,
                            className: a,
                            ref: j
                        })
                    };
                return Element.propTypes = {
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
                }, Element.displayName = i, Element.__elementType = e, Element
            },
            T = "undefined" == typeof window,
            A = P("auBankAccount", T),
            R = P("card", T),
            I = P("cardNumber", T),
            O = P("cardExpiry", T),
            j = P("cardCvc", T),
            L = P("fpxBank", T),
            N = P("iban", T),
            F = P("idealBank", T),
            B = P("p24Bank", T),
            z = P("epsBank", T),
            K = P("payment", T),
            V = P("expressCheckout", T),
            U = P("paymentRequestButton", T),
            H = P("linkAuthentication", T),
            q = P("address", T),
            G = P("shippingAddress", T),
            W = P("cart", T),
            Z = P("paymentMethodMessaging", T),
            Y = P("affirmMessage", T),
            X = P("afterpayClearpayMessage", T);
        e.AddressElement = q, e.AffirmMessageElement = Y, e.AfterpayClearpayMessageElement = X, e.AuBankAccountElement = A, e.CardCvcElement = j, e.CardElement = R, e.CardExpiryElement = O, e.CardNumberElement = I, e.CartElement = W, e.Elements = E, e.ElementsConsumer = D, e.EpsBankElement = z, e.ExpressCheckoutElement = V, e.FpxBankElement = L, e.IbanElement = N, e.IdealBankElement = F, e.LinkAuthenticationElement = H, e.P24BankElement = B, e.PaymentElement = K, e.PaymentMethodMessagingElement = Z, e.PaymentRequestButtonElement = U, e.ShippingAddressElement = G, e.useCartElement = function() {
            return M("calls useCartElement()").cart
        }, e.useCartElementState = function() {
            return M("calls useCartElementState()").cartState
        }, e.useElements = function() {
            return _("calls useElements()").elements
        }, e.useStripe = function() {
            return _("calls useStripe()").stripe
        }, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, "object" == typeof t && void 0 !== e ? i(t, n("884691")) : "function" == typeof define && define.amd ? define(["exports", "react"], i) : i((r = r || self).ReactStripe = {}, r.React)
}