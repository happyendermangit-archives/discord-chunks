function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_PAYMENT_SOURCE: function() {
            return p
        }
    });
    var r, o, i, a = n("898511"),
        u = n("629815"),
        s = n("281767");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = "no_payment_source",
        m = null,
        y = null,
        I = null,
        h = null,
        O = null,
        T = {},
        S = null,
        v = !1,
        g = null,
        A = !1,
        b = !1,
        N = !1,
        R = !1,
        C = null,
        P = new Set;

    function D(e) {
        null != r && null != S ? r(S) : null != o && o(e), r = null, o = null
    }
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "getPricesForSku",
            value: function(e) {
                return T[e]
            }
        }, {
            key: "isOpen",
            value: function() {
                var e = __OVERLAY__ ? s.AppContext.OVERLAY : s.AppContext.APP;
                return C === e && N
            }
        }, {
            key: "isPurchasingSKU",
            get: function() {
                return v
            }
        }, {
            key: "forceConfirmationStepOnMount",
            get: function() {
                return A
            }
        }, {
            key: "error",
            get: function() {
                return g
            }
        }, {
            key: "skuId",
            get: function() {
                return m
            }
        }, {
            key: "applicationId",
            get: function() {
                return I
            }
        }, {
            key: "analyticsLocation",
            get: function() {
                return h
            }
        }, {
            key: "promotionId",
            get: function() {
                return O
            }
        }, {
            key: "isIAP",
            get: function() {
                return b
            }
        }, {
            key: "giftCode",
            get: function() {
                return y
            }
        }, {
            key: "isGift",
            get: function() {
                return R
            }
        }, {
            key: "isFetchingSKU",
            value: function(e) {
                return P.has(e)
            }
        }], l(r.prototype, o), i && l(r, i), u
    }(a.default.Store);
    c(L, "displayName", "SKUPaymentModalStore"), t.default = new L(u.default, {
        SKU_PURCHASE_MODAL_OPEN: function(e) {
            D(), m = e.skuId, I = e.applicationId, b = e.isIAP, h = e.analyticsLocation, C = e.context, R = e.isGift, N = !0, A = !1, r = e.resolve, o = e.reject, g = null, S = null, O = e.promotionId
        },
        SKU_PURCHASE_MODAL_CLOSE: function(e) {
            var t = e.error;
            N = !1, C = null, D(t)
        },
        SKU_PURCHASE_PREVIEW_FETCH: function(e) {
            var t = e.skuId;
            P.add(t)
        },
        SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function(e) {
            var t = e.skuId,
                n = e.paymentSourceId,
                r = e.price;
            T = _(d({}, T), c({}, t, _(d({}, T[t]), c({}, null != n ? n : p, r)))), P.delete(t)
        },
        SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function(e) {
            var t = e.skuId;
            P.delete(t)
        },
        SKU_PURCHASE_START: function() {
            v = !0
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            var t = e.entitlements,
                n = e.giftCode;
            v = !1, S = t, y = n
        },
        SKU_PURCHASE_FAIL: function(e) {
            var t = e.error;
            v = !1, g = t
        },
        SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function() {
            A = !0
        },
        SKU_PURCHASE_CLEAR_ERROR: function() {
            g = null
        },
        SKU_PURCHASE_UPDATE_IS_GIFT: function(e) {
            R = e.isGift
        },
        OVERLAY_SET_INPUT_LOCKED: function(e) {
            if (!e.locked || null == C) return !1;
            N = !1, C = null, D()
        },
        GIFT_CODE_CREATE: function(e) {
            var t = e.giftCode;
            if (0 !== t.uses || t.sku_id !== m) return !1;
            y = t.code
        }
    })
}