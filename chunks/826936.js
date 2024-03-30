function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("945816"),
        o = n("807471"),
        i = n("389723"),
        a = n("847885"),
        u = n("53867"),
        s = n("575098"),
        l = n("281767");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = new r.Timeout,
        p = new r.Timeout,
        m = new r.Timeout,
        y = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(o, e);
            var t, n, r = (t = o, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : c(e)
            });

            function o() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, o), e = r.apply(this, arguments), f(c(e), "actions", {
                    USER_SETTINGS_PROTO_UPDATE: function() {
                        return e.handleUpdateProto()
                    },
                    POST_CONNECTION_OPEN: function() {
                        return e.handleUpdateProto()
                    }
                }), f(c(e), "handleUpdateProto", function() {
                    var e = u.CustomStatusSetting.getSetting();
                    if (null == e) m.stop();
                    else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
                        var t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                        t > 0 ? m.start(t, function() {
                            u.CustomStatusSetting.updateSetting(void 0)
                        }, !0) : (u.CustomStatusSetting.updateSetting(void 0), m.stop())
                    } else null != m && m.stop();
                    var n = u.StatusExpiresAtSetting.getSetting();
                    if (null != n && "0" !== n && s.default.getStatus() !== l.StatusTypes.ONLINE) {
                        var r = new Date(Number(n)).getTime() - new Date().getTime();
                        r > 0 ? E.start(r, function() {
                            (0, i.default)(l.StatusTypes.ONLINE, s.default.getStatus(), {
                                location: {
                                    object: l.AnalyticsObjects.CUSTOM_STATUS_MANAGER
                                }
                            }, void 0)
                        }, !0) : ((0, i.default)(l.StatusTypes.ONLINE, s.default.getStatus(), {
                            location: {
                                object: l.AnalyticsObjects.CUSTOM_STATUS_MANAGER
                            }
                        }, void 0), E.stop())
                    } else null != E && E.stop();
                    var o = u.FocusModeExpiresAtSetting.getSetting();
                    if (null != o && "0" !== o) {
                        var c = new Date(Number(o)).getTime() - new Date().getTime();
                        c > 0 ? p.start(c, function() {
                            (0, a.setFocusMode)(!1)
                        }, !0) : ((0, a.setFocusMode)(!1), p.stop())
                    } else null != p && p.stop()
                }), e
            }
            return o
        }(o.default);
    t.default = new y
}