function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("188129"),
        o = n("898511"),
        i = n("629815"),
        a = n("475827"),
        u = n("27308"),
        s = n("935741"),
        l = n("382199"),
        c = n("649310"),
        f = n("870331"),
        d = n("281767");

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                p(e, t, n[t])
            })
        }
        return e
    }

    function I(e, t) {
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

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = new r.Logger("MessageRoundtripTrackerStore");

    function T(e) {
        return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
    }

    function S(e) {
        var t = s.default.getBasicChannel(e.channelId);
        if (null == t) {
            O.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
            return
        }
        if (!(Math.random() > .1)) {
            var n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
                r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
                o = (0, u.getSignalStrength)();
            f.default.track(d.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, y(I(y({}, (0, a.default)()), {
                api_latency_ms: n,
                gateway_latency_ms: r,
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
                guild_size: l.default.getMemberCount(t.guild_id),
                mobile_network_type: c.default.getType()
            }), null != o && {
                mobile_signal_strength_level: o
            }))
        }
    }
    var v = new(function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
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
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : _(e)
        });

        function u() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), e = a.apply(this, arguments), p(_(e), "pendingMessages", new Map), e
        }
        return r = u, o = [{
            key: "recordMessageSendAttempt",
            value: function(e, t) {
                var n = this,
                    r = {
                        initialSendTimestamp: Date.now(),
                        apiResponseTimestamp: null,
                        gatewaySeenTimestamp: null,
                        channelId: e
                    };
                this.pendingMessages.set(t, r), setTimeout(function() {
                    var e = n.pendingMessages.get(t);
                    null != e && (S(e), n.pendingMessages.delete(t))
                }, 3e4)
            }
        }, {
            key: "recordMessageSendApiResponse",
            value: function(e) {
                var t = this.pendingMessages.get(e);
                if (null != t) {
                    var n = I(y({}, t), {
                        apiResponseTimestamp: Date.now()
                    });
                    T(n) ? (S(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                }
            }
        }, {
            key: "recordGatewayResponse",
            value: function(e) {
                var t = this.pendingMessages.get(e);
                if (null != t) {
                    var n = I(y({}, t), {
                        gatewaySeenTimestamp: Date.now()
                    });
                    T(n) ? (S(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                }
            }
        }], E(r.prototype, o), i && E(r, i), u
    }(o.default.Store))(i.default, {
        MESSAGE_CREATE: function(e) {
            var t = e.optimistic,
                n = e.message.nonce;
            !t && null != n && v.recordGatewayResponse(n)
        }
    });
    t.default = v
}