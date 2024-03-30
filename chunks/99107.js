function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("900814"),
        o = n("807471"),
        i = n("35523"),
        a = n("335911"),
        u = n("97478"),
        s = n("388990"),
        l = n("374550");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = 1 * s.default.Millis.SECOND,
        m = 30 * s.default.Millis.SECOND,
        y = new i.default("RTCLatencyTestManager"),
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(O, e);
            var t, n, o, i, I, h = (t = O, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = _(t);
                if (n) {
                    var a = _(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : c(e)
            });

            function O() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, O), e = h.apply(this, arguments), d(c(e), "refetchTimeout", void 0), d(c(e), "actions", {
                    POST_CONNECTION_OPEN: function() {
                        return e._handleConnectionOpen()
                    }
                }), d(c(e), "_handleTestRegionsResponse", function(e) {
                    var t = e.map(function(e) {
                        return e.region
                    });
                    u.default.shouldPerformLatencyTest(t) ? a.default.getMediaEngine().rankRtcRegions(e).then(function(e) {
                        y.verbose("RTC region latency test completed, ranked regions are: ", e), (0, r.completeRTCLatencyTest)(e, t)
                    }).catch(function(e) {
                        return y.warn(e)
                    }) : y.verbose("RTC cached ranked preferred regions are ".concat(u.default.getPreferredRegions()))
                }), d(c(e), "_fetchAndScheduleRefetch", function() {
                    (0, r.fetchRTCLatencyTestRegions)().then(function(t) {
                        return e._handleTestRegionsResponse(t.body)
                    }).catch(function(e) {
                        return y.warn(e)
                    }), e.refetchTimeout = setTimeout(e._fetchAndScheduleRefetch, 360 * s.default.Millis.MINUTE)
                }), d(c(e), "_handleConnectionOpen", function() {
                    l.isPlatformEmbedded && !__OVERLAY__ && (null != e.refetchTimeout && clearTimeout(e.refetchTimeout), e.refetchTimeout = setTimeout(e._fetchAndScheduleRefetch, Math.floor(p + Math.random() * m)))
                }), e
            }
            return o = O, i = [{
                key: "_terminate",
                value: function() {
                    null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
                }
            }], f(o.prototype, i), I && f(o, I), O
        }(o.default);
    t.default = new I
}