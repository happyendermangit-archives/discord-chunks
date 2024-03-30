function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                u(e, t, n[t])
            })
        }
        return e
    }

    function c(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {
            enabled: !1
        },
        _ = {},
        E = {},
        p = !1,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(l, e);
            var t, n, r, o, i, u = (t = l, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = s(t);
                if (n) {
                    var a = s(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function l() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), u.apply(this, arguments)
            }
            return r = l, o = [{
                key: "initialize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
                    p = e.enabled
                }
            }, {
                key: "getWaitingHighFive",
                value: function(e, t) {
                    var n;
                    return null === (n = _[e]) || void 0 === n ? void 0 : n[t]
                }
            }, {
                key: "getCompletedHighFive",
                value: function(e, t) {
                    var n;
                    return null === (n = E[e]) || void 0 === n ? void 0 : n[t]
                }
            }, {
                key: "getEnabled",
                value: function() {
                    return p
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return {
                        enabled: p
                    }
                }
            }], a(r.prototype, o), i && a(r, i), l
        }(o.default.DeviceSettingsStore);
    u(m, "persistKey", "HighFiveStore"), t.default = new m(i.default, {
        HIGH_FIVE_QUEUE: function(e) {
            var t = e.userId,
                n = e.channelId,
                r = e.emoji;
            _[n] = c(l({}, _[n]), u({}, t, r))
        },
        HIGH_FIVE_REMOVE: function(e) {
            var t = e.userId,
                n = _[e.channelId];
            if (null == n) return !1;
            delete n[t]
        },
        HIGH_FIVE_SET_ENABLED: function(e) {
            p = e.enabled
        },
        HIGH_FIVE_COMPLETE: function(e) {
            var t, n, r = e.completingEmoji,
                o = e.completingUserId,
                i = e.waitingUserId,
                a = e.channelId,
                s = null !== (t = _[a]) && void 0 !== t ? t : {},
                f = s[i];
            if (delete s[i], null == f) return !1;
            E[a] = c(l({}, E[a]), (u(n = {}, i, [f, r]), u(n, o, [r, f]), n))
        },
        HIGH_FIVE_COMPLETE_CLEAR: function(e) {
            var t, n = e.firstUserId,
                r = e.secondUserId,
                o = null !== (t = E[e.channelId]) && void 0 !== t ? t : {};
            delete o[n], delete o[r]
        }
    })
}