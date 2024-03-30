function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
            return f
        }
    });
    var r, o = n("898511"),
        i = n("629815"),
        a = n("601094");

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
    var f = 360,
        d = {
            sidebarWidth: 360,
            lastOpenTabId: null,
            displayTools: !1,
            showDevWidget: !1,
            devWidgetPosition: {
                x: 0,
                y: 0
            }
        },
        _ = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(_, e);
            var t, n, r, o, s, f = (t = _, n = function() {
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

            function _() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, _), f.apply(this, arguments)
            }
            return r = _, o = [{
                key: "initialize",
                value: function(e) {
                    d = null != e ? e : d, i.default.actionLogger.persist = a.default.isDeveloper
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return d
                }
            }, {
                key: "sidebarWidth",
                get: function() {
                    return this.displayTools ? d.sidebarWidth : 0
                }
            }, {
                key: "lastOpenTabId",
                get: function() {
                    var e;
                    return null !== (e = d.lastOpenTabId) && void 0 !== e ? e : null
                }
            }, {
                key: "displayTools",
                get: function() {
                    return a.default.isDeveloper && d.displayTools
                }
            }, {
                key: "showDevWidget",
                get: function() {
                    return a.default.isDeveloper && d.showDevWidget
                }
            }, {
                key: "devWidgetPosition",
                get: function() {
                    return d.devWidgetPosition
                }
            }], u(r.prototype, o), s && u(r, s), _
        }(o.default.DeviceSettingsStore);
    s(_, "displayName", "DevToolsSettingsStore"), s(_, "persistKey", "DevToolsSettingsStore"), t.default = new _(i.default, {
        DEV_TOOLS_SETTINGS_UPDATE: function(e) {
            a.default.isDeveloper && (d = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        s(e, t, n[t])
                    })
                }
                return e
            }({}, d, e.settings))
        }
    })
}