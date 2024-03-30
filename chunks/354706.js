function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("870331"),
        u = n("203151"),
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

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = {
            permissionStates: {}
        },
        E = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(p, e);
            var t, n, r, o, c, E = (t = p, n = function() {
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

            function p() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, p), e = E.call(this, i.default, {
                    SET_NATIVE_PERMISSION: function(t) {
                        return e.handleSetNativePermission(t)
                    }
                })
            }
            return r = p, o = [{
                key: "initialize",
                value: function(e) {
                    _ = null != e ? e : _
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return _
                }
            }, {
                key: "hasPermission",
                value: function(e) {
                    var t = _.permissionStates[e];
                    return null != t && t === u.NativePermissionStates.ACCEPTED
                }
            }, {
                key: "handleSetNativePermission",
                value: function(e) {
                    var t = e.state,
                        n = e.permissionType,
                        r = _.permissionStates,
                        o = r[n];
                    r[n] = t, o !== t && a.default.track(s.AnalyticEvents.PERMISSIONS_ACKED, {
                        type: n,
                        action: t,
                        previous_action: null != o ? o : u.NativePermissionStates.NONE
                    })
                }
            }], l(r.prototype, o), c && l(r, c), p
        }(o.default.DeviceSettingsStore);
    c(E, "displayName", "NativePermissionStore"), c(E, "persistKey", "NativePermissionsStore"), t.default = E
}