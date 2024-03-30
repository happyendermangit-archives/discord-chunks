function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("945816"),
        o = n("443458"),
        i = n("585949"),
        a = n("807471"),
        u = n("632142"),
        s = n("935741"),
        l = n("575098"),
        c = n("665863"),
        f = n("473702"),
        d = n("941504");

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
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

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = 18e4;

    function I() {
        var e = c.default.getCurrentClientVoiceChannelId(null);
        if (null == e) return !1;
        var t = s.default.getChannel(e);
        return !(null == t || !t.isPrivate() || t.recipients.length > 1 || f.default.countVoiceStatesForChannel(e) > 1) && null == u.default.getSelfEmbeddedActivityForChannel(e) && null == l.default.getBroadcast() && !0
    }

    function h() {
        if (!!I()) {
            var e = c.default.getCurrentClientVoiceChannelId(null);
            null != e && (o.default.sendBotMessage(e, d.default.Messages.BOT_CALL_IDLE_DISCONNECT_2.format({
                number: 3
            })), i.default.selectVoiceChannel(null))
        }
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(i, e);
        var t, n, o = (t = i, n = function() {
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
            }(r) || "function" == typeof r) ? r : _(e)
        });

        function i() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), e = o.apply(this, arguments), E(_(e), "idleTimeout", new r.Timeout), E(_(e), "handleConnectionClosed", function() {
                e.idleTimeout.stop()
            }), E(_(e), "handleEmbeddedActivityDisconnect", function() {
                I() && e.idleTimeout.start(y, h, !0)
            }), E(_(e), "handleVoiceStateUpdates", function() {
                if (!I()) {
                    e.idleTimeout.stop();
                    return
                }
                e.idleTimeout.start(y, h, !1)
            }), E(_(e), "actions", {
                VOICE_STATE_UPDATES: e.handleVoiceStateUpdates,
                CONNECTION_CLOSED: e.handleConnectionClosed,
                EMBEDDED_ACTIVITY_DISCONNECT: e.handleEmbeddedActivityDisconnect
            }), e
        }
        return i
    }(a.default);
    t.default = new O
}