function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("898511"),
        a = n("629815");

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
    var f = {
            lastGuildDismissedTime: {}
        },
        d = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(d, e);
            var t, n, o, i, a, s = (t = d, n = function() {
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

            function d() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, d), s.apply(this, arguments)
            }
            return o = d, i = [{
                key: "initialize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    r = e
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return r
                }
            }, {
                key: "getLastGuildDismissedTime",
                value: function(e) {
                    return r.lastGuildDismissedTime[e]
                }
            }], u(o.prototype, i), a && u(o, a), d
        }(i.default.DeviceSettingsStore);
    s(d, "displayName", "ApplicationSubscriptionChannelNoticeStore"), s(d, "persistKey", "ApplicationSubscriptionChannelNoticeStore"), t.default = new d(a.default, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
            var t = e.guildId;
            r.lastGuildDismissedTime[t] = Date.now()
        }
    })
}