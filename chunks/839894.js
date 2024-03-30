function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n("898511"),
        l = n("629815"),
        c = n("225098"),
        f = n("848864");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = new Map,
        y = new Map,
        I = m,
        h = y,
        O = !1,
        T = void 0,
        S = void 0,
        v = function() {
            I = m, h = y, S = void 0, O = !1, T = void 0
        },
        g = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
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
                var e, r, o, i = E(t);
                if (n) {
                    var a = E(this).constructor;
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
                key: "initialize",
                value: function() {
                    this.syncWith([c.default], v)
                }
            }, {
                key: "isFetching",
                get: function() {
                    return O
                }
            }, {
                key: "error",
                get: function() {
                    return T
                }
            }, {
                key: "lastFetched",
                get: function() {
                    return S
                }
            }, {
                key: "categories",
                get: function() {
                    return I
                }
            }, {
                key: "products",
                get: function() {
                    return h
                }
            }, {
                key: "getCategory",
                value: function(e) {
                    return null != e ? I.get(e) : void 0
                }
            }, {
                key: "getProduct",
                value: function(e) {
                    return null != e ? h.get(e) : void 0
                }
            }, {
                key: "getCategoryForProduct",
                value: function(e) {
                    var t = this.getProduct(e);
                    return this.getCategory(null == t ? void 0 : t.categorySkuId)
                }
            }], _(r.prototype, o), i && _(r, i), u
        }(s.default.Store);
    i = "CollectiblesCategoryStore", (o = "displayName") in(r = g) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new g(l.default, {
        COLLECTIBLES_CATEGORIES_FETCH: function(e) {
            O = !0, T = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: function(e) {
            if (0 === e.categories.length) I = m, h = y;
            else {
                var t;
                if (!(0, u.isEqual)(function(e) {
                        if (Array.isArray(e)) return d(e)
                    }(t = I.values()) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return d(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                        }
                    }(t) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(), e.categories)) I = new Map(e.categories.map(function(e) {
                    return [e.skuId, e]
                })), h = new Map((0, f.getProductsFromCategories)(I).map(function(e) {
                    return [e.skuId, e]
                }))
            }
            S = Date.now(), O = !1, T = void 0
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: function(e) {
            var t = e.error;
            I = m, h = y, O = !1, T = t
        },
        COLLECTIBLES_PRODUCT_FETCH: function(e) {
            O = !0, T = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: function(e) {
            h.set(e.product.skuId, e.product), O = !1, T = void 0
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: function(e) {
            var t = e.error;
            O = !1, T = t
        },
        LOGOUT: v
    })
}