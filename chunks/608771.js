function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("898511"),
        l = n("629815"),
        c = n("225098"),
        f = n("360249"),
        d = n("162677");

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
    var m = {},
        y = {},
        I = {},
        h = {};

    function O(e) {
        var t = e.id,
            n = e.sku.id,
            r = m[t],
            o = f.default.createFromServer(e);
        !(null != r && !r.isSlimDirectoryVersion() && o.isSlimDirectoryVersion()) && (!1 === e.published ? (null == I[n] && (I[n] = new Set), I[n].add(t)) : h[n] = t, m[t] = o)
    }

    function T(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function S(e) {
        var t = e.storeListings,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                O(u)
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

    function v() {
        m = {}, h = {}, I = {}, y = {}
    }

    function g() {
        if (a === c.default.locale) return !1;
        v(), a = c.default.locale
    }
    var A = function(e) {
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
                this.waitFor(c.default), this.syncWith([c.default], g), a = c.default.locale
            }
        }, {
            key: "get",
            value: function(e) {
                return m[e]
            }
        }, {
            key: "getForSKU",
            value: function(e, t) {
                var n = h[e];
                return null != t ? y[T(t, e)] : null != n ? m[n] : null
            }
        }, {
            key: "getUnpublishedForSKU",
            value: function(e) {
                var t = I[e];
                return null == t ? [] : Array.from(t).map(function(e) {
                    return m[e]
                }).filter(d.isNotNullish)
            }
        }, {
            key: "getForChannel",
            value: function(e, t) {
                return y[T(e, t)]
            }
        }, {
            key: "getStoreListing",
            value: function(e) {
                var t = e.storeListingId,
                    n = e.skuId,
                    r = e.channelId;
                if (e.isTestMode && null != n) {
                    var o = this.getUnpublishedForSKU(n);
                    if (null != o && o.length > 0) return o[0]
                }
                if (null != t) return this.get(t);
                if (null != r) {
                    if (null == n) throw Error("getStoreListing with channel expects a skuId");
                    return this.getForChannel(r, n)
                }
                if (null != n) return this.getForSKU(n);
                return null
            }
        }], _(r.prototype, o), i && _(r, i), s
    }(s.default.Store);
    i = "StoreListingStore", (o = "displayName") in(r = A) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new A(l.default, {
        STORE_LISTINGS_FETCH_SUCCESS: S,
        APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: S,
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            var t = e.storeListing,
                n = e.channelId;
            if (null != n) {
                var r = f.default.createFromServer(t);
                y[T(n, r.skuId)] = r, h[r.skuId] = r.id
            } else O(t)
        },
        USER_SETTINGS_PROTO_UPDATE: g,
        APPLICATION_STORE_CLEAR_DATA: v,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            var t = e.giftCode;
            if (null == t.store_listing) return !1;
            O(t.store_listing)
        }
    })
}