function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BrowserCheckoutState: function() {
            return u
        }
    });
    var r, o, i, a, u, s, l = n("898511"),
        c = n("629815");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = u || (u = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.PENDING = 1] = "PENDING", r[r.DONE = 2] = "DONE";
    var E = 0,
        p = null,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
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
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
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
                key: "browserCheckoutState",
                get: function() {
                    return E
                }
            }, {
                key: "loadId",
                get: function() {
                    return p
                }
            }], f(r.prototype, o), i && f(r, i), u
        }(l.default.Store);
    a = "BrowserCheckoutStateStore", (i = "displayName") in(o = m) ? Object.defineProperty(o, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = a, t.default = new m(c.default, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(e) {
            E = 1, p = e.loadId
        },
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(e) {
            p === e.loadId && (E = 2)
        }
    })
}