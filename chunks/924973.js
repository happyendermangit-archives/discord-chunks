function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserSettingsManager: function() {
            return c
        }
    });
    var r = n("807471"),
        o = n("53867");

    function i(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = !1,
        c = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t)
            }(_, e);
            var t, n, r, c, f, d = (t = _, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, a = u(t);
                if (n) {
                    var s = u(this).constructor;
                    o = Reflect.construct(a, arguments, s)
                } else o = a.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : i(e)
            });

            function _() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, _), e = d.apply(this, arguments), t = i(e), n = "actions", r = {
                    POST_CONNECTION_OPEN: function() {
                        e.setVerifyTimezone(), e.maybeShowChangeLanguageToast()
                    },
                    OVERLAY_INITIALIZE: e.setVerifyTimezone,
                    USER_SETTINGS_PROTO_UPDATE: e.ensureTimezoneUpdated
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return r = _, c = [{
                key: "maybeShowChangeLanguageToast",
                value: function() {}
            }, {
                key: "setVerifyTimezone",
                value: function() {
                    l = !0
                }
            }, {
                key: "ensureTimezoneUpdated",
                value: function() {
                    if (l) {
                        l = !1;
                        var e = new Date().getTimezoneOffset();
                        o.TimezoneOffset.getSetting() !== e && setImmediate(function() {
                            return o.TimezoneOffset.updateSetting(e)
                        })
                    }
                }
            }], a(r.prototype, c), f && a(r, f), _
        }(r.default);
    t.default = new c
}