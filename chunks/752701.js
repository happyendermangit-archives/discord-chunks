function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("188129"),
        o = n("517727"),
        i = n("942292"),
        a = n("131900");

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
    var f = new r.Logger("ProcessUtilsElectron"),
        d = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(E, e);
            var t, n, r, i, d, _ = (t = E, n = function() {
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
                }(r) || "function" == typeof r) ? r : u(e)
            });

            function E() {
                var e, t, n, r, i, a;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, E), r = u(e = _.call(this)), a = void 0, (i = "lastMemoryUsageKB") in r ? Object.defineProperty(r, i, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[i] = a, e.cpuCoreCount = null === o.default || void 0 === o.default ? void 0 : null === (n = o.default.processUtils) || void 0 === n ? void 0 : null === (t = n.getCPUCoreCount) || void 0 === t ? void 0 : t.call(n), e.setupReportingTimer(), e
            }
            return r = E, i = [{
                key: "setupReportingTimer",
                value: function() {
                    var e, t, n = this,
                        r = null === o.default || void 0 === o.default ? void 0 : null === (e = o.default.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
                    if (null == r) {
                        f.log("setMemoryInformation not available.");
                        return
                    }(null === (t = performance.memory) || void 0 === t ? void 0 : t.usedJSHeapSize) == null && f.error("usedJSHeapSize is not available.");
                    setInterval(function() {
                        var e, t, o, i = null !== (t = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== t ? t : 0;
                        r({
                            memoryUsageKB: null !== (o = n.lastMemoryUsageKB) && void 0 !== o ? o : 0,
                            usedJSHeapSizeKB: Math.ceil(i / 1024)
                        })
                    }, 1e4)
                }
            }, {
                key: "getProcessUptime",
                value: function() {
                    var e, t;
                    return null === o.default || void 0 === o.default ? void 0 : null === (t = o.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getProcessUptime) || void 0 === e ? void 0 : e.call(t)
                }
            }, {
                key: "getCurrentCPUUsagePercent",
                value: function() {
                    var e, t;
                    return null === o.default || void 0 === o.default ? void 0 : null === (t = o.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(t)
                }
            }, {
                key: "getCurrentMemoryUsageKB",
                value: function() {
                    var e = E.getCurrentMemoryUsageKBCore();
                    return this.lastMemoryUsageKB = e, e
                }
            }, {
                key: "getMemoryUsageDetails",
                value: function() {
                    return a.default.getDiscordMemoryUsage()
                }
            }, {
                key: "getMemoryUsageElectronRenderer",
                value: function() {
                    try {
                        return a.default.getDiscordMemoryUsageElectronRenderer()
                    } catch (e) {
                        return null
                    }
                }
            }, {
                key: "getMemoryUsageElectronRendererUsedHeapSize",
                value: function() {
                    var e, t;
                    return null === o.default || void 0 === o.default ? void 0 : null === (t = o.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getUsedHeapSize) || void 0 === e ? void 0 : e.call(t)
                }
            }], d = [{
                key: "getCurrentMemoryUsageKBCore",
                value: function() {
                    try {
                        var e = a.default.getDiscordMemoryUsage();
                        if (null == e) return 0;
                        var t = Object.values(e).reduce(function(e, t) {
                            return e + t
                        }, 0);
                        return Math.ceil(t / 1024)
                    } catch (e) {
                        return 0
                    }
                }
            }], i && s(r.prototype, i), d && s(r, d), E
        }(i.ProcessUtils);
    t.default = new d
}