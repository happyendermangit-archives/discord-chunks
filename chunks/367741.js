function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("945816"),
        a = n("629815"),
        u = n("281767");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {},
        _ = {};

    function E(e, t, n) {
        var r, o = n.applicationId,
            s = null !== (r = d[o]) && void 0 !== r ? r : {};
        if (s[t] = e, d[o] = s, !__OVERLAY__ && e === u.ActivityActionStates.FAILED) {
            null != _[o] && _[o].stop();
            var l = new i.Timeout;
            l.start(12e4, function() {
                return a.default.dispatch({
                    type: "ACTIVITY_LAUNCH_FAIL",
                    applicationId: o,
                    activityType: t
                })
            }), _[o] = l
        }
    }

    function p(e) {
        return E(u.ActivityActionStates.COMPLETE, u.ActivityActionTypes.JOIN, e)
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
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
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
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
            key: "getState",
            value: function(e, t) {
                var n = d[e];
                return null == n ? void 0 : n[t]
            }
        }, {
            key: "getStates",
            value: function() {
                return d
            }
        }], s(r.prototype, o), i && s(r, i), u
    }(o.default.Store);
    l(m, "displayName", "ActivityLauncherStore"), t.default = new m(a.default, {
        OVERLAY_INITIALIZE: function(e) {
            d = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        l(e, t, n[t])
                    })
                }
                return e
            }({}, e.activityLauncherStates)
        },
        ACTIVITY_JOIN_LOADING: function(e) {
            return E(u.ActivityActionStates.LOADING, u.ActivityActionTypes.JOIN, e)
        },
        ACTIVITY_JOIN_FAILED: function(e) {
            return E(u.ActivityActionStates.FAILED, u.ActivityActionTypes.JOIN, e)
        },
        ACTIVITY_JOIN: p,
        EMBEDDED_ACTIVITY_CLOSE: p,
        ACTIVITY_LAUNCH_FAIL: function(e) {
            var t = e.applicationId,
                n = e.activityType,
                r = d[t];
            if (null == r || r[n] !== u.ActivityActionStates.FAILED) return !1;
            delete r[n]
        }
    })
}