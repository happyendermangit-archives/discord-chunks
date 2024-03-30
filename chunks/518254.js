function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("967888"),
        s = n("629815"),
        l = n("935741"),
        c = n("894288"),
        f = n("63116"),
        d = n("281767");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function y(e, t) {
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

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = {},
        O = {};

    function T() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default.getChannelId(),
            r = l.default.getChannel(n);
        return null != r && null == r.getGuildId() && null != n && (null == h[n] || !!t) && (h[n] = null !== (e = h[n]) && void 0 !== e ? e : {
            channelId: n,
            ringing: []
        }, s.default.dispatch({
            type: "CALL_CONNECT",
            channelId: n
        }), !0)
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
            }), t && I(e, t)
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
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
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
                this.waitFor(f.default, c.default)
            }
        }, {
            key: "getCall",
            value: function(e) {
                return h[e]
            }
        }, {
            key: "getCalls",
            value: function() {
                return Object.values(h)
            }
        }, {
            key: "getMessageId",
            value: function(e) {
                var t = this.getCall(e);
                return null != t ? t.messageId : null
            }
        }, {
            key: "isCallActive",
            value: function(e, t) {
                var n = h[e];
                return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
            }
        }, {
            key: "isCallUnavailable",
            value: function(e) {
                var t = h[e];
                return null != t && t.unavailable
            }
        }, {
            key: "getInternalState",
            value: function() {
                return {
                    calls: h,
                    enqueuedRings: O
                }
            }
        }], _(r.prototype, o), i && _(r, i), u
    }(a.default.Store);
    E(S, "displayName", "CallStore"), t.default = new S(s.default, {
        CONNECTION_OPEN: function() {
            return T(!0)
        },
        CONNECTION_CLOSED: function() {
            h = {}, O = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.callStoreInternalState;
            h = m({}, t.calls), O = m({}, t.enqueuedRings)
        },
        CONNECTION_RESUMED: function() {
            return T(!0)
        },
        CHANNEL_SELECT: function(e) {
            return T(!1, e.channelId)
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            if (null != O[t.id] && delete O[t.id], null == h[t.id]) return !1;
            delete h[t.id]
        },
        CALL_CREATE: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.region,
                o = e.ringing;
            if (h[t] = {
                    channelId: t,
                    messageId: n,
                    region: r,
                    ringing: o,
                    unavailable: !1,
                    regionUpdated: !1
                }, null != O[t]) {
                var i = O[t];
                delete O[t], 1 !== i.indexOf("all") && (i = null), u.HTTP.post({
                    url: d.Endpoints.CALL_RING(t),
                    body: {
                        recipients: i
                    },
                    oldFormErrors: !0
                })
            }
        },
        CALL_UPDATE: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.region,
                o = e.ringing,
                i = h[t],
                a = null != i && (i.regionUpdated || i.region !== r);
            h[t] = y(m({}, h[t]), {
                messageId: n,
                region: r,
                ringing: o,
                regionUpdated: a
            })
        },
        CALL_DELETE: function(e) {
            var t = e.channelId,
                n = e.unavailable,
                r = h[t];
            !0 === n && null != r ? h[t] = y(m({}, r), {
                unavailable: n
            }) : h[t] = {
                channelId: t,
                ringing: [],
                messageId: null,
                region: null,
                regionUpdated: !1,
                unavailable: n
            }, null != O[t] && delete O[t]
        },
        CALL_ENQUEUE_RING: function(e) {
            var t, n = e.channelId,
                r = e.recipients;
            O[n] = i().union(null !== (t = O[n]) && void 0 !== t ? t : [], null != r ? r : ["all"])
        },
        VOICE_CHANNEL_SELECT: function(e) {
            null == e.channelId && (O = {})
        }
    })
}