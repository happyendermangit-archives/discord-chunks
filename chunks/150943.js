function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("746762"),
        o = n("443458"),
        i = n("807471"),
        a = n("217014"),
        u = n("935741"),
        s = n("204394"),
        l = n("29884"),
        c = n("894288"),
        f = n("208454"),
        d = n("353934"),
        _ = n("162817"),
        E = n("281767");

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(S, e);
        var t, n, i, h, O, T = (t = S, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function S() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, S), e = T.apply(this, arguments), t = p(e), n = "actions", r = {
                VOICE_STATE_UPDATES: e.handleVoiceStateUpdates
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return i = S, h = [{
            key: "handleVoiceStateUpdates",
            value: function(e) {
                e.voiceStates.forEach(function(e) {
                    var t = e.channelId,
                        n = e.userId,
                        i = e.suppress,
                        p = e.requestToSpeakTimestamp;
                    if (c.default.getVoiceChannelId() === t && !!i && null != t && n !== a.default.getId()) {
                        if (l.default.can(d.MODERATE_STAGE_CHANNEL_PERMISSIONS, u.default.getChannel(t))) {
                            if (null != p) {
                                var m = f.default.getUser(n);
                                null != m && (0, _.sendStageRequestToSpeakEphemeralMessage)(t, m, p)
                            } else {
                                var y = s.default.getMessages(t).findNewest(function(e) {
                                    return e.type === r.MessageTypes.STAGE_RAISE_HAND && e.hasFlag(E.MessageFlags.EPHEMERAL) && e.author.id === n
                                });
                                null != y && o.default.deleteMessage(t, y.id, !0)
                            }
                        }
                    }
                })
            }
        }], m(i.prototype, h), O && m(i, O), S
    }(i.default);
    t.default = new h
}