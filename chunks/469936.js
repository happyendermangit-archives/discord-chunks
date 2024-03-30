function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("870331"),
        u = n("360636"),
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
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = {
            numberOfDCsShownToday: 0,
            dailyCapPeriodStart: null,
            dismissibleContentSeenDuringSession: new Set,
            dailyCapOverridden: !1,
            renderedAtTimestamps: new Map
        },
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(s, e);
            var t, n, r, o, i, a = (t = s, n = function() {
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
                }(this, s), a.apply(this, arguments)
            }
            return r = s, o = [{
                key: "initialize",
                value: function(e) {
                    if (null != e) {
                        var t;
                        E.numberOfDCsShownToday = null !== (t = e.numberOfDCsShownToday) && void 0 !== t ? t : 0, E.dailyCapPeriodStart = e.dailyCapPeriodStart, E.dailyCapOverridden = e.dailyCapOverridden
                    }
                    E.dismissibleContentSeenDuringSession = new Set
                }
            }, {
                key: "getState",
                value: function() {
                    return E
                }
            }, {
                key: "dailyCapOverridden",
                get: function() {
                    return E.dailyCapOverridden
                }
            }, {
                key: "getRenderedAtTimestamp",
                value: function(e) {
                    return E.renderedAtTimestamps.get(e)
                }
            }, {
                key: "hasUserHitDCCap",
                value: function(e) {
                    if (null != e && (u.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e) || E.dailyCapOverridden) || null != e && E.dismissibleContentSeenDuringSession.has(e)) return !1;
                    var t = new Date;
                    return t.setHours(0, 0, 0, 0), null != E.dailyCapPeriodStart && E.dailyCapPeriodStart < t.getTime() && (E.numberOfDCsShownToday = 0, E.dailyCapPeriodStart = null), E.numberOfDCsShownToday >= 3
                }
            }], l(r.prototype, o), i && l(r, i), s
        }(o.default.PersistedStore);
    c(p, "displayName", "DismissibleContentFrameworkStore"), c(p, "persistKey", "DismissibleContentFrameworkStore"), c(p, "migrations", [function(e) {
        return d({}, e)
    }]), t.default = new p(i.default, {
        LOGOUT: function() {
            var e, t;
            e = d({}, E), t = (t = {
                dismissibleContentSeenDuringSession: new Set,
                renderedAtTimestamps: new Map
            }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), E = e
        },
        DCF_DAILY_CAP_OVERRIDE: function(e) {
            var t = e.value;
            E.dailyCapOverridden = t
        },
        DCF_HANDLE_DC_SHOWN: function(e) {
            var t = e.dismissibleContent,
                n = new Date;
            if (E.renderedAtTimestamps.set(t, n.getTime()), !u.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(t) && !E.dailyCapOverridden) {
                if (!E.dismissibleContentSeenDuringSession.has(t)) {
                    if (E.dismissibleContentSeenDuringSession.add(t), null == E.dailyCapPeriodStart) {
                        var r = new Date;
                        r.setHours(0, 0, 0, 0), E.dailyCapPeriodStart = r.getTime()
                    }
                    E.numberOfDCsShownToday += 1, E.numberOfDCsShownToday > 3 && a.default.track(s.AnalyticEvents.DCF_CAP_EXCEEDED, {
                        cap_type: "daily_cap",
                        dismissible_content: t,
                        shown_dcs: E.numberOfDCsShownToday
                    })
                }
            }
        },
        DCF_HANDLE_DC_DISMISSED: function(e) {
            var t = e.dismissibleContent;
            E.renderedAtTimestamps.delete(t)
        },
        DCF_RESET: function() {
            E.dailyCapPeriodStart = null, E.numberOfDCsShownToday = 0, E.dismissibleContentSeenDuringSession = new Set
        }
    })
}