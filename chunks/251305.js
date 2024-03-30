function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("392711"),
        u = n("898511"),
        s = n("629815"),
        l = n("582258");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = !1,
        m = {
            settingsVisible: !1,
            enabled: !1,
            combosEnabled: !0,
            combosRequiredCount: 5,
            comboSoundsEnabled: !0,
            screenshakeEnabled: !0,
            screenshakeEnabledLocations: (f(r = {}, l.ShakeLocation.CHAT_INPUT, !0), f(r, l.ShakeLocation.VOICE_USER, !1), f(r, l.ShakeLocation.MENTION, !1), r),
            shakeIntensity: 1,
            confettiEnabled: !0,
            confettiEnabledLocations: (f(o = {}, l.ConfettiLocation.CHAT_INPUT, !0), f(o, l.ConfettiLocation.REACTION, !0), f(o, l.ConfettiLocation.MEMBER_USER, !0), f(o, l.ConfettiLocation.CALL_TILE, !0), o),
            confettiSize: 16,
            confettiCount: 5,
            warningSeen: !1
        },
        y = (0, a.cloneDeep)(m),
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
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
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
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
                value: function(e) {
                    y = _({}, y, e)
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return y
                }
            }, {
                key: "settingsVisible",
                get: function() {
                    return y.settingsVisible
                }
            }, {
                key: "isEnabled",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.confettiLocation,
                        n = e.shakeLocation,
                        r = null == t || y.confettiEnabled && y.confettiEnabledLocations[t],
                        o = null == n || y.screenshakeEnabled && y.screenshakeEnabledLocations[n];
                    return this.settingsVisible && !p && y.enabled && r && o
                }
            }, {
                key: "shakeIntensity",
                get: function() {
                    return this.isEnabled() ? y.shakeIntensity : 0
                }
            }, {
                key: "combosRequiredCount",
                get: function() {
                    return this.isEnabled() ? y.combosRequiredCount : 0
                }
            }, {
                key: "screenshakeEnabled",
                get: function() {
                    return y.screenshakeEnabled
                }
            }, {
                key: "screenshakeEnabledLocations",
                get: function() {
                    return y.screenshakeEnabledLocations
                }
            }, {
                key: "combosEnabled",
                get: function() {
                    return y.combosEnabled
                }
            }, {
                key: "comboSoundsEnabled",
                get: function() {
                    return y.comboSoundsEnabled
                }
            }], c(r.prototype, o), i && c(r, i), u
        }(u.default.DeviceSettingsStore);
    f(I, "displayName", "PoggermodeSettingsStore"), f(I, "persistKey", "PoggermodeSettingsStore"), t.default = new I(s.default, {
        POGGERMODE_SETTINGS_UPDATE: function(e) {
            var t = e.settings;
            y = _({}, y, t)
        },
        POGGERMODE_TEMPORARILY_DISABLED: function() {
            p = !0
        }
    })
}