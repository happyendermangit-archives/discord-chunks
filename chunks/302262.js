function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("159868"),
        i = n("63202"),
        a = n("898511"),
        u = n("629815"),
        s = n("839894");

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

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = new Date(2023, 8, 25),
        E = new Date(2023, 9, 5),
        p = function() {
            var e, t, n, r;
            return {
                categoryItemViews: (c(r = {}, o.CollectiblesCategorySkuId.FANTASY, (c(e = {}, i.CollectiblesItemType.AVATAR_DECORATION, _), c(e, i.CollectiblesItemType.PROFILE_EFFECT, E), e)), c(r, o.CollectiblesCategorySkuId.ANIME, (c(t = {}, i.CollectiblesItemType.AVATAR_DECORATION, _), c(t, i.CollectiblesItemType.PROFILE_EFFECT, E), t)), c(r, o.CollectiblesCategorySkuId.BREAKFAST, (c(n = {}, i.CollectiblesItemType.AVATAR_DECORATION, _), c(n, i.CollectiblesItemType.PROFILE_EFFECT, E), n)), c(r, o.CollectiblesCategorySkuId.DISXCORE, c({}, i.CollectiblesItemType.AVATAR_DECORATION, _)), r)
            }
        },
        m = p(),
        y = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
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
                key: "initialize",
                value: function(e) {
                    null != e && (m = e)
                }
            }, {
                key: "getState",
                value: function() {
                    return m
                }
            }, {
                key: "isItemViewed",
                value: function(e) {
                    var t, n, r = null === (t = s.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
                    return null != r && (null === (n = m.categoryItemViews[r]) || void 0 === n ? void 0 : n[e.type]) != null
                }
            }, {
                key: "reset",
                value: function() {
                    m = p()
                }
            }], l(r.prototype, o), i && l(r, i), u
        }(a.default.PersistedStore);
    c(y, "displayName", "CollectiblesPersistedStore"), c(y, "persistKey", "CollectiblesPersistedStoreV2"), new y(u.default, {
        COLLECTIBLES_CATEGORY_ITEMS_VIEWED: function(e) {
            var t = e.categories,
                n = e.itemTypes,
                r = new Date;
            return t.reduce(function(e, t) {
                var o = t.skuId,
                    i = n.reduce(function(e, t) {
                        var n;
                        return (null === (n = m.categoryItemViews[o]) || void 0 === n ? void 0 : n[t]) != null ? e : (null == m.categoryItemViews[o] && (m.categoryItemViews[o] = {}), m.categoryItemViews[o][t] = r, !0)
                    }, !1);
                return e || i
            }, !1)
        }
    })
}