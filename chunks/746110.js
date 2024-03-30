function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("388990");

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

    function c(e) {
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
    }

    function f(e, t) {
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

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = [],
        E = new Set,
        p = 0,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(c, e);
            var t, n, r, o, i, s = (t = c, n = function() {
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

            function c() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, c), s.apply(this, arguments)
            }
            return r = c, o = [{
                key: "initialize",
                value: function() {
                    var e = this;
                    setInterval(function() {
                        e.emitChange()
                    }, 1 * a.default.Millis.MINUTE)
                }
            }, {
                key: "getMessageReminders",
                value: function() {
                    return _
                }
            }, {
                key: "isMessageReminder",
                value: function(e) {
                    var t = _.find(function(t) {
                        return t.messageId === e
                    });
                    return null != t && !t.complete
                }
            }, {
                key: "getOverdueMessageReminderCount",
                value: function() {
                    return _.filter(function(e) {
                        return null == e.dueAt || new Date > e.dueAt
                    }).length
                }
            }, {
                key: "recentlyFetched",
                value: function() {
                    return new Date().getTime() - p < 1 * a.default.Millis.MINUTE
                }
            }, {
                key: "hasSentNotification",
                value: function(e) {
                    return E.has(e)
                }
            }, {
                key: "getState",
                value: function() {
                    return {
                        messages: _
                    }
                }
            }], u(r.prototype, o), i && u(r, i), c
        }(o.default.Store);
    s(m, "displayName", "MessageRemindersStore"), t.default = new m(i.default, {
        SAVED_MESSAGES_UPDATE: function(e) {
            var t = e.messages;
            p = new Date().getTime(), _ = t.map(function(e) {
                return f(c({}, e), {
                    complete: !1
                })
            }), t.forEach(function(e) {
                null != e.dueAt && e.dueAt > new Date && E.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && E.add(e.messageId)
            })
        },
        MESSAGE_REMINDER_TOGGLE: function(e) {
            var t = e.messageId,
                n = e.complete,
                r = _.findIndex(function(e) {
                    return e.messageId === t
                });
            if (-1 === r) return !1;
            _[r] = f(c({}, _[r]), {
                complete: n
            })
        },
        MESSAGE_REMINDER_NOTIFIED: function(e) {
            var t = e.messageId;
            E.add(t)
        }
    })
}