function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("851285");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function f() {
        return {
            hasFetchedConsumedInboundPromotionId: !1,
            consumedInboundPromotionId: null,
            lastSeenOutboundPromotionStartDate: null,
            bogoPromotion: null
        }
    }
    var d = f(),
        _ = !1,
        E = null,
        p = !1,
        m = null,
        y = [],
        I = null;

    function h() {
        var e = null,
            t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = y[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value;
                (null == e || new Date(a.startDate) > new Date(e)) && (e = a.startDate)
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
        return e
    }

    function O() {
        var e, t, n;
        I = null !== (n = null === (t = a.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(f, e);
        var t, n, r, o, i, s = (t = f, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var a = l(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function f() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, f), s.apply(this, arguments)
        }
        return r = f, o = [{
            key: "initialize",
            value: function(e) {
                null != e && (d = e), this.waitFor(a.default), this.syncWith([a.default], O)
            }
        }, {
            key: "outboundPromotions",
            get: function() {
                return y
            }
        }, {
            key: "lastSeenOutboundPromotionStartDate",
            get: function() {
                return d.lastSeenOutboundPromotionStartDate
            }
        }, {
            key: "lastDismissedOutboundPromotionStartDate",
            get: function() {
                return I
            }
        }, {
            key: "lastFetchedActivePromotions",
            get: function() {
                return m
            }
        }, {
            key: "isFetchingActiveOutboundPromotions",
            get: function() {
                return p
            }
        }, {
            key: "hasFetchedConsumedInboundPromotionId",
            get: function() {
                return d.hasFetchedConsumedInboundPromotionId
            }
        }, {
            key: "consumedInboundPromotionId",
            get: function() {
                return d.consumedInboundPromotionId
            }
        }, {
            key: "bogoPromotion",
            get: function() {
                return d.bogoPromotion
            }
        }, {
            key: "isFetchingActiveBogoPromotion",
            get: function() {
                return _
            }
        }, {
            key: "lastFetchedActiveBogoPromotion",
            get: function() {
                return E
            }
        }, {
            key: "getState",
            value: function() {
                return d
            }
        }], u(r.prototype, o), i && u(r, i), f
    }(o.default.PersistedStore);
    s(T, "displayName", "PromotionsStore"), s(T, "persistKey", "PromotionsPersistedStore"), t.default = new T(i.default, {
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
            var t = e.activeOutboundPromotions,
                n = e.consumedInboundPromotionId;
            y = t, m = Date.now(), p = !1, !d.hasFetchedConsumedInboundPromotionId && (d.hasFetchedConsumedInboundPromotionId = !0, d.consumedInboundPromotionId = n)
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
            p = !0
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
            y = [], p = !1
        },
        ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
            var t = e.activePromotion;
            d.bogoPromotion = t, E = Date.now(), _ = !1
        },
        ACTIVE_BOGO_PROMOTION_FETCH: function() {
            _ = !0
        },
        ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
            d.bogoPromotion = null, _ = !1
        },
        OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
            if (0 === y.length) return !1;
            var e = h();
            null != e && (I = e)
        },
        OUTBOUND_PROMOTIONS_SEEN: function() {
            if (0 === y.length) return !1;
            var e = h();
            null != e && (I = e, d.lastSeenOutboundPromotionStartDate = e)
        },
        LOGOUT: function() {
            d = f(), p = !1, m = null, _ = !1, E = null, y = []
        }
    })
}