function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("235923"),
        l = n("173977"),
        c = n("898511"),
        f = n("967888"),
        d = n("242880"),
        _ = n("629815"),
        E = n("763187"),
        p = n("388990"),
        m = n("285910"),
        y = n("281767");

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                h(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var v = (r = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"), o = null, i = new s.default(5 * p.default.Millis.SECOND, 1 * p.default.Millis.MINUTE, !0), a = function() {
            f.HTTP.put({
                url: r,
                headers: {
                    Authorization: l.getToken()
                },
                oldFormErrors: !0
            }).then(function(e) {
                401 === e.status || 403 === e.status ? (o = null, (0, E.setDeveloperOptionSettings)({
                    sourceMapsEnabled: !1
                })) : 200 !== e.status ? o = setTimeout(a, i.fail()) : (i.succeed(), o = setTimeout(a, e.body.sourceMapCookieTTLSeconds * p.default.Millis.SECOND * .75))
            }, function() {
                o = setTimeout(a, i.fail())
            })
        }, {
            set: function(e) {
                e !== (null != o) && (e ? o = setTimeout(a, 0) : (clearTimeout(o), o = null, f.HTTP.del({
                    url: r,
                    headers: {
                        Authorization: l.getToken()
                    },
                    oldFormErrors: !0
                })))
            }
        }),
        g = "DeveloperOptionsStore",
        A = {
            trace: !1,
            canary: !1,
            logGatewayEvents: !1,
            logOverlayEvents: !1,
            logAnalyticsEvents: !1,
            sourceMapsEnabled: !1,
            axeEnabled: !1,
            analyticsDebuggerEnabled: !1,
            bugReporterEnabled: !0,
            idleStatusIndicatorEnabled: !1,
            appDirectoryIncludesInactiveCollections: !1
        },
        b = T({}, A);

    function N(e) {
        b = T({}, A, b, e), v.set(b.sourceMapsEnabled), d.Storage.set(g, b)
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
            }), t && S(e, t)
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
            var e, r, o, i = O(t);
            if (n) {
                var a = O(this).constructor;
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
                var e = d.Storage.get(g);
                null != e && (b = T({}, A, e))
            }
        }, {
            key: "isTracingRequests",
            get: function() {
                return b.trace
            }
        }, {
            key: "isForcedCanary",
            get: function() {
                return b.canary
            }
        }, {
            key: "isLoggingGatewayEvents",
            get: function() {
                return b.logGatewayEvents
            }
        }, {
            key: "isLoggingOverlayEvents",
            get: function() {
                return b.logOverlayEvents
            }
        }, {
            key: "isLoggingAnalyticsEvents",
            get: function() {
                return b.logAnalyticsEvents
            }
        }, {
            key: "isAxeEnabled",
            get: function() {
                return b.axeEnabled
            }
        }, {
            key: "sourceMapsEnabled",
            get: function() {
                return b.sourceMapsEnabled
            }
        }, {
            key: "isAnalyticsDebuggerEnabled",
            get: function() {
                return b.analyticsDebuggerEnabled
            }
        }, {
            key: "isBugReporterEnabled",
            get: function() {
                return b.bugReporterEnabled
            }
        }, {
            key: "isIdleStatusIndicatorEnabled",
            get: function() {
                return b.idleStatusIndicatorEnabled
            }
        }, {
            key: "appDirectoryIncludesInactiveCollections",
            get: function() {
                return b.appDirectoryIncludesInactiveCollections
            }
        }, {
            key: "getDebugOptionsHeaderValue",
            value: function() {
                return Object.keys(b).map(function(e) {
                    return b[e]
                }), Object.keys(b).filter(function(e) {
                    return b[e]
                }).join(",")
            }
        }], I(r.prototype, o), i && I(r, i), u
    }(c.default.Store);
    h(R, "displayName", "DeveloperOptionsStore"), t.default = new R(_.default, {
        LOGOUT: function(e) {
            N(A)
        },
        CONNECTION_OPEN: function(e) {
            var t, n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & y.UserFlags.STAFF) === y.UserFlags.STAFF,
                r = n || null != e.user.personal_connection_id;
            n && v.set(b.sourceMapsEnabled), m.default.setTags({
                isStaff: r.toString()
            })
        },
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
            N(e.settings)
        }
    })
}