function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("898511"),
        l = n("629815"),
        c = n("225098"),
        f = n("303402"),
        d = n("950520");

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
    var m = new Set,
        y = new Set,
        I = new Map,
        h = new Map,
        O = new Map;

    function T(e) {
        I.set(e.id, f.default.createFromServer(e)), !h.has(e.application_id) && h.set(e.application_id, new Set), h.get(e.application_id).add(e.id)
    }

    function S(e) {
        m.delete(e.id), y.delete(e.id), T(e)
    }

    function v(e) {
        T(e.sku), null != e.child_skus && e.child_skus.forEach(function(e) {
            return T(e)
        }), null != e.alternative_skus && e.alternative_skus.forEach(function(e) {
            return T(e)
        })
    }

    function g(e) {
        var t = e.storeListings,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                v(u)
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
    }

    function A(e) {
        var t = e.entitlements,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                null != u.sku && T(u.sku)
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
    }

    function b() {
        m = new Set, y = new Set, I = new Map, h = new Map, O = new Map
    }

    function N() {
        if (a === c.default.locale) return !1;
        a = c.default.locale, b()
    }
    var R = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(s, e);
        var t, n, r, o, i, u = (t = s, n = function() {
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

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(c.default, d.default), this.syncWith([c.default], N), a = c.default.locale
            }
        }, {
            key: "get",
            value: function(e) {
                return I.get(e)
            }
        }, {
            key: "getForApplication",
            value: function(e) {
                var t = h.get(e);
                return null == t ? [] : Array.from(t).map(function(e) {
                    return I.get(e)
                })
            }
        }, {
            key: "isFetching",
            value: function(e) {
                return m.has(e)
            }
        }, {
            key: "getSKUs",
            value: function() {
                return Object.fromEntries(I)
            }
        }, {
            key: "didFetchingSkuFail",
            value: function(e) {
                return y.has(e)
            }
        }], _(r.prototype, o), i && _(r, i), s
    }(s.Store);
    i = "SKUStore", (o = "displayName") in(r = R) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new R(l.default, {
        STORE_LISTINGS_FETCH_SUCCESS: g,
        APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: g,
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            v(e.storeListing)
        },
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            var t = e.giftCode;
            if (null == t.store_listing) return !1;
            T(t.store_listing.sku)
        },
        SKU_FETCH_START: function(e) {
            var t = e.skuId;
            m.add(t)
        },
        SKU_FETCH_SUCCESS: function(e) {
            S(e.sku)
        },
        SKU_FETCH_FAIL: function(e) {
            var t = e.skuId;
            m.delete(t), y.add(t)
        },
        SKUS_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.skus,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value;
                    S(s)
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && null != u.return && u.return()
                } finally {
                    if (o) throw i
                }
            }
            null != t && O.set(t, new Set(n.map(function(e) {
                return e.id
            })))
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: A,
        APPLICATION_STORE_CLEAR_DATA: b,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: A,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: A
    })
}