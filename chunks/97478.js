function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("388990");

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
    var _ = {
            preferredRegions: null,
            lastTestTimestamp: null,
            lastGeoRankedOrder: null
        },
        E = _,
        p = 1 * s.default.Millis.HOUR,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(s, e);
            var t, n, r, o, a, u = (t = s, n = function() {
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

            function s() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), u.apply(this, arguments)
            }
            return r = s, o = [{
                key: "initialize",
                value: function(e) {
                    E = null != e ? e : _
                }
            }, {
                key: "shouldIncludePreferredRegion",
                value: function() {
                    return null != E.preferredRegions
                }
            }, {
                key: "getPreferredRegion",
                value: function() {
                    var e, t;
                    return null !== (t = null === (e = E.preferredRegions) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : null
                }
            }, {
                key: "getPreferredRegions",
                value: function() {
                    return E.preferredRegions
                }
            }, {
                key: "getRegion",
                value: function(e) {
                    if (null != e) return e.substr(0, e.search(/\d/))
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return E
                }
            }, {
                key: "shouldPerformLatencyTest",
                value: function(e) {
                    var t, n;
                    return null === E.preferredRegions || !i().isEqual(e, null !== (t = E.lastGeoRankedOrder) && void 0 !== t ? t : []) || Date.now() - (null !== (n = E.lastTestTimestamp) && void 0 !== n ? n : 0) >= p
                }
            }], l(r.prototype, o), a && l(r, a), s
        }(a.default.DeviceSettingsStore);
    c(m, "displayName", "RTCRegionStore"), c(m, "persistKey", "RTCRegionStore"), c(m, "migrations", [function(e) {
        return e.preferredRegion ? e.preferredRegions = [e.preferredRegion] : e.preferredRegions = null, delete e.preferredRegion, e
    }]), t.default = new m(u.default, {
        RTC_LATENCY_TEST_COMPLETE: function(e) {
            e.latencyRankedRegions.length > 0 && (E.lastGeoRankedOrder = e.geoRankedRegions, E.preferredRegions = e.latencyRankedRegions), E.lastTestTimestamp = Date.now()
        }
    })
}