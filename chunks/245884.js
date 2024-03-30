function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SafetyWarningFeedbackTypes: function() {
            return a
        },
        SafetyWarningTypes: function() {
            return i
        }
    });
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("935741"),
        c = n("388990");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function E(e, t) {
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

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = 5 * c.default.Millis.SECOND;
    (r = i || (i = {}))[r.STRANGER_DANGER = 1] = "STRANGER_DANGER", r[r.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", r[r.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (o = a || (a = {}))[o.UPVOTE = 0] = "UPVOTE", o[o.DOWNVOTE = 1] = "DOWNVOTE";
    var y = [],
        I = {},
        h = new Set;

    function O(e) {
        var t = e.safetyWarnings;
        null != t && (I[e.id] = t, t.some(function(e) {
            var t;
            return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                return new Date(e).getTime() > Date.now() - m
            }(e.dismiss_timestamp)
        }) ? h.add(e.id) : h.delete(e.id)), null == t && (null != I[e.id] && delete I[e.id], h.delete(e.id))
    }

    function T() {
        I = {}, Object.values(l.default.getMutablePrivateChannels()).forEach(function(e) {
            O(e)
        })
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
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
            value: function() {
                this.waitFor(l.default)
            }
        }, {
            key: "getChannelSafetyWarning",
            value: function(e, t) {
                var n;
                return null === (n = I[e]) || void 0 === n ? void 0 : n.find(function(e) {
                    return e.id === t
                })
            }
        }, {
            key: "getChannelSafetyWarnings",
            value: function(e) {
                var t;
                return null !== (t = I[e]) && void 0 !== t ? t : y
            }
        }, {
            key: "hasShownInitialTooltipForChannel",
            value: function(e) {
                return h.has(e)
            }
        }], f(r.prototype, o), i && f(r, i), u
    }(u.default.Store);
    t.default = new S(s.default, {
        CHANNEL_CREATE: function(e) {
            O(e.channel)
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            null != I[t.id] && delete I[t.id], h.delete(t.id)
        },
        CHANNEL_UPDATES: function(e) {
            e.channels.forEach(function(e) {
                O(e)
            })
        },
        CONNECTION_OPEN: T,
        CONNECTION_OPEN_SUPPLEMENTAL: T,
        CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
            var t = e.channelId,
                n = e.warningId,
                r = e.feedbackType,
                o = I[t];
            null != o && (I[t] = o.map(function(e) {
                return e.id === n ? E(_({}, e), {
                    feedback_type: r
                }) : e
            }))
        },
        CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
            var t = e.channelId,
                n = I[t];
            h.delete(t), null != n && (I[t] = n.map(function(e) {
                return E(_({}, e), {
                    dismiss_timestamp: void 0
                })
            }))
        },
        DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
            var t = e.channelId,
                n = e.warningIds,
                r = I[t];
            if (null != r) {
                var o = new Date().toISOString();
                I[t] = r.map(function(e) {
                    return n.includes(e.id) ? E(_({}, e), {
                        dismiss_timestamp: o
                    }) : e
                })
            }
        },
        ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
            var t = e.channelId;
            h.add(t)
        }
    })
}