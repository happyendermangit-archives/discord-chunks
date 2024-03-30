function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("390579"),
        i = n("344105"),
        a = n("935741"),
        u = n("665863"),
        s = n("130388");

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

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(m, e);
        var t, n, r, _, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function m() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), e = p.apply(this, arguments), t = l(e), n = "actions", r = {
                VOICE_CHANNEL_SELECT: e.handleVoiceChannelSelect
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return r = m, _ = [{
            key: "handleVoiceChannelSelect",
            value: function(e) {
                var t = e.channelId,
                    n = e.guildId;
                if (null != t && null != n) {
                    var r = a.default.getChannel(t);
                    if (null != r && (0, i.hasVoiceChannelActivityNotifsEnabled)(r) && r.isGuildVoice()) {
                        var l = o.default.getParticipants(t).length,
                            c = u.default.isInChannel(t),
                            f = l === (c ? 1 : 0);
                        f ? s.sendVoiceChannelActivityNotification(t, f) : l === (c ? 2 : 1) && s.sendVoiceChannelActivityNotification(t, f)
                    }
                }
            }
        }], c(r.prototype, _), E && c(r, E), m
    }(r.default);
    t.default = new _
}