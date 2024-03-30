function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("241174"),
        i = n("894928"),
        a = n("935741"),
        u = n("63116"),
        s = n("162677");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

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

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(y, e);
        var t, n, o, E, p, m = (t = y, n = function() {
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
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function y() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), e = m.apply(this, arguments), f(l(e), "handleVoiceChannelSelect", function(t) {
                var n = t.channelId,
                    r = t.guildId;
                if (null != n) {
                    var o = a.default.getChannel(n);
                    if (null == o || o.isGuildStageVoice()) return
                }
                e.terminate();
                e.handleDisconnectFromStageChannel(null == n ? null : null != r ? r : null)
            }), f(l(e), "handleDisconnectFromStageChannel", function(e) {
                var t = u.default.getGuildId();
                (0, i.stopLurkingAll)([t, e].filter(s.isNotNullish))
            }), f(l(e), "handleLogout", function() {
                e.terminate(), e.handleDisconnectFromStageChannel(null)
            }), e
        }
        return o = y, E = [{
            key: "_initialize",
            value: function() {
                r.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.default.subscribe("LOGOUT", this.handleLogout)
            }
        }, {
            key: "_terminate",
            value: function() {
                r.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.default.unsubscribe("LOGOUT", this.handleLogout)
            }
        }], c(o.prototype, E), p && c(o, p), y
    }(o.default);
    t.default = new E
}