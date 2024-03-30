function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("241174"),
        r = n("870331"),
        c = n("374550"),
        o = n("131900"),
        i = n("340721"),
        f = n("281767");

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var b = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(m, e);
        var t, n, a, b, p, h = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, a, r, c = l(t);
            if (n) {
                var o = l(this).constructor;
                r = Reflect.construct(c, arguments, o)
            } else r = c.apply(this, arguments);
            return e = this, (a = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(a) || "function" == typeof a) ? a : d(e)
        });

        function m() {
            var e, t, n, a;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), e = h.apply(this, arguments), t = d(e), n = "_tracker", a = new i.default, n in t ? Object.defineProperty(t, n, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = a, e
        }
        return a = m, b = [{
            key: "_initialize",
            value: function() {
                var e = this;
                c.isPlatformEmbedded && (o.default.on("UPDATE_DOWNLOADED", function() {
                    return e.processModuleEvents()
                }), o.default.on("MODULE_INSTALLED", function(t, n, a) {
                    return e.processModuleEvents()
                }), o.default.on("UPDATER_HISTORY_RESPONSE", function(t, n) {
                    e._handleHistoryResponse(n)
                }), this.processModuleEvents())
            }
        }, {
            key: "_terminate",
            value: function() {}
        }, {
            key: "processModuleEvents",
            value: function() {
                o.default.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
            }
        }, {
            key: "_handleHistoryResponse",
            value: function(e) {
                var t = this;
                null != e && (e.forEach(function(e) {
                    "analytics" === e.type ? e.name === f.AnalyticEvents.UPDATER_METRICS_DOWNLOAD || e.name === f.AnalyticEvents.UPDATER_METRICS_INSTALL || e.name === f.AnalyticEvents.UPDATER_METRICS_COMBINED || e.name === f.AnalyticEvents.UPDATER_METRICS_TRANSITION_STATUS ? r.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : t._tracker.trackEvent(e)
                }), this._tracker.submissionReady() && (r.default.track(f.AnalyticEvents.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset()))
            }
        }], u(a.prototype, b), p && u(a, p), m
    }(a.default);
    t.default = new b
}