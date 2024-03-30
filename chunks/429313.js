function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("979590"),
        o = n.n(r),
        i = n("194926"),
        a = n("864842");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(E, e);
        var t, n, r, a, d, _ = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(e)
        });

        function E(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), l(u(t = _.call(this)), "storeListingId", void 0), l(u(t), "skuId", void 0), l(u(t), "name", void 0), l(u(t), "summary", void 0), l(u(t), "banner", void 0), l(u(t), "unpublishedAt", void 0), l(u(t), "styles", void 0), t.storeListingId = e.storeListingId, t.skuId = e.skuId, t.name = e.name, t.summary = e.summary, t.banner = e.banner, t.unpublishedAt = e.unpublishedAt, t.styles = e.styles, t
        }
        return r = E, a = null, d = [{
            key: "fromServer",
            value: function(e) {
                var t, n, r, a = e.store_listing_id,
                    u = e.sku_id,
                    s = e.unpublished_at,
                    c = e.styles,
                    f = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) {
                                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                        }
                        return o
                    }(e, ["store_listing_id", "sku_id", "unpublished_at", "styles"]),
                    d = null != s ? new Date(s) : null;
                return new E((n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            l(e, t, n[t])
                        })
                    }
                    return e
                }({}, f), r = (r = {
                    storeListingId: a,
                    skuId: u,
                    unpublishedAt: d,
                    styles: null == (t = c) ? t : {
                        backgroundColors: t.background_colors.map(function(e) {
                            return o()((0, i.int2hex)(e))
                        }),
                        buttonColors: t.button_colors.map(function(e) {
                            return o()((0, i.int2hex)(e))
                        }),
                        confettiColors: t.confetti_colors.map(function(e) {
                            return o()((0, i.int2hex)(e))
                        })
                    }
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
            }
        }], a && s(r.prototype, a), d && s(r, d), E
    }(a.default)
}