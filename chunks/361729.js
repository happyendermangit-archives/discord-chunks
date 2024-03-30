function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("53867"),
        u = n("947248"),
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

    function E() {
        return {
            lastUsedObject: {},
            useActivityUrlOverride: !1,
            activityUrlOverride: null,
            filter: ""
        }
    }
    var p = E(),
        m = null,
        y = [],
        I = function(e) {
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
            var t, n, r, o, i, u = (t = s, n = function() {
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
                    p = d({}, E(), null != e ? e : {})
                }
            }, {
                key: "getState",
                value: function() {
                    return p
                }
            }, {
                key: "getIsEnabled",
                value: function() {
                    return a.DeveloperMode.getSetting() && y.length > 0
                }
            }, {
                key: "getLastUsedObject",
                value: function() {
                    return p.lastUsedObject
                }
            }, {
                key: "getUseActivityUrlOverride",
                value: function() {
                    return this.getIsEnabled() && p.useActivityUrlOverride
                }
            }, {
                key: "getActivityUrlOverride",
                value: function() {
                    return this.getIsEnabled() ? p.activityUrlOverride : null
                }
            }, {
                key: "getFetchState",
                value: function() {
                    return m
                }
            }, {
                key: "getFilter",
                value: function() {
                    return this.getIsEnabled() ? p.filter : ""
                }
            }, {
                key: "getDeveloperShelfItems",
                value: function() {
                    return this.getIsEnabled() ? y : []
                }
            }, {
                key: "inDevModeForApplication",
                value: function(e) {
                    return this.getIsEnabled() && null != y.find(function(t) {
                        return t.id === e
                    })
                }
            }], l(r.prototype, o), i && l(r, i), s
        }(o.default.PersistedStore);
    c(I, "displayName", "DeveloperActivityShelfStore"), c(I, "persistKey", "DeveloperActivityShelfStore"), c(I, "migrations", [function(e) {
        return delete e.isEnabled, d({}, e)
    }]), t.default = new I(i.default, {
        LOGOUT: function() {
            p = E(), m = null, y = []
        },
        DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
            p.useActivityUrlOverride = !p.useActivityUrlOverride
        },
        DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
            var t = e.activityUrlOverride;
            p.activityUrlOverride = t
        },
        DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
            var t = e.applicationId,
                n = e.timestamp;
            if (null == y.find(function(e) {
                    return e.id === t
                })) return !1;
            p.lastUsedObject[t] = n
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_START: function() {
            m = "loading"
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
            var t = e.items;
            m = "loaded", y = t.filter(function(e) {
                return null != e.flags && (0, u.hasFlag)(e.flags, s.ApplicationFlags.EMBEDDED)
            })
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
            e.type, m = "errored"
        },
        DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
            var t = e.filter;
            p.filter = t
        },
        USER_SETTINGS_PROTO_UPDATE: function() {}
    })
}