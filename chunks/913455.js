function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("945816"),
        o = n("807471"),
        i = n("491049"),
        a = n("654370"),
        u = n("935741"),
        s = n("335911"),
        l = n("545072"),
        c = n("575098"),
        f = n("380019"),
        d = n("473702"),
        _ = n("388990"),
        E = n("140817"),
        p = n("281767");

    function m(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                I(e, t, n[t])
            })
        }
        return e
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = 1 * _.default.Millis.MINUTE,
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
            }(A, e);
            var t, n, o, _, v, g = (t = A, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = h(t);
                if (n) {
                    var a = h(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : m(e)
            });

            function A() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, A), e = g.apply(this, arguments), I(m(e), "_currentUserSpeaking", !1), I(m(e), "_anyoneElseSpeaking", !1), I(m(e), "_voiceChannelId", void 0), I(m(e), "_reportInterval", void 0), I(m(e), "_handleRTCConnectionStoreChanged", function() {
                    var t = l.default.getChannelId();
                    if (e._voiceChannelId !== t) {
                        if (e._voiceChannelId = t, null == t) {
                            e._reset();
                            return
                        }
                        null == e._reportInterval && (e._reportInterval = new r.Interval, e._reportInterval.start(S, function() {
                            e._trackStartSpeaking(), e._trackStartListening()
                        }))
                    }
                }), I(m(e), "_handleSpeakingStoreChanged", function() {
                    var t = f.default.isCurrentUserSpeaking();
                    e._currentUserSpeaking !== t && (e._currentUserSpeaking = t, e._trackStartSpeaking());
                    var n = f.default.isAnyoneElseSpeaking();
                    e._anyoneElseSpeaking !== n && (e._anyoneElseSpeaking = n, e._trackStartListening())
                }), e
            }
            return o = A, _ = [{
                key: "_initialize",
                value: function() {
                    var e = this;
                    __OVERLAY__ ? this.stores = new Map : (this.stores = new Map().set(f.default, function() {
                        return e._handleSpeakingStoreChanged()
                    }).set(l.default, function() {
                        return e._handleRTCConnectionStoreChanged()
                    }), this._reset())
                }
            }, {
                key: "_reset",
                value: function() {
                    this._currentUserSpeaking = !1, this._anyoneElseSpeaking = !1, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null)
                }
            }, {
                key: "_trackStartSpeaking",
                value: function() {
                    if (this._currentUserSpeaking) {
                        var e = l.default.getChannelId(),
                            t = l.default.getGuildId(),
                            n = u.default.getChannel(e),
                            r = null == n ? void 0 : n.isBroadcastChannel();
                        (0, E.trackWithMetadata)(p.AnalyticEvents.START_SPEAKING, O({
                            mode: s.default.getMode(),
                            priority: f.default.isCurrentUserPrioritySpeaking(),
                            channel: e,
                            server: t,
                            channel_id: e,
                            guild_id: t,
                            is_broadcast: r,
                            rtc_connection_id: l.default.getRTCConnectionId(),
                            media_session_id: l.default.getMediaSessionId(),
                            voice_state_count: d.default.countVoiceStatesForChannel(this._voiceChannelId)
                        }, this.getGameMetadata(), l.default.getPacketStats()))
                    }
                }
            }, {
                key: "_trackStartListening",
                value: function() {
                    if (!s.default.isDeaf() && this._anyoneElseSpeaking) {
                        var e = l.default.getChannelId(),
                            t = l.default.getGuildId(),
                            n = u.default.getChannel(e),
                            r = null == n ? void 0 : n.isBroadcastChannel();
                        (0, E.trackWithMetadata)(p.AnalyticEvents.START_LISTENING, O({
                            mute: s.default.isMute(),
                            anyone_priority: f.default.isAnyonePrioritySpeaking(),
                            channel: e,
                            server: t,
                            channel_id: e,
                            guild_id: t,
                            is_broadcast: r,
                            rtc_connection_id: l.default.getRTCConnectionId(),
                            media_session_id: l.default.getMediaSessionId(),
                            voice_state_count: d.default.countVoiceStatesForChannel(this._voiceChannelId)
                        }, this.getGameMetadata()))
                    }
                }
            }, {
                key: "_terminate",
                value: function() {
                    this._reset(), f.default.removeChangeListener(this._handleSpeakingStoreChanged), l.default.removeChangeListener(this._handleRTCConnectionStoreChanged)
                }
            }, {
                key: "getGameMetadata",
                value: function() {
                    var e = c.default.findActivity(function(e) {
                            return e.type === p.ActivityTypes.PLAYING
                        }),
                        t = a.default.getCurrentGameForAnalytics();
                    return {
                        game_platform: (0, i.default)(e),
                        game_name: null != e ? e.name : null,
                        game_exe_name: null != t ? t.exeName : null,
                        game_id: null != e ? e.application_id : null
                    }
                }
            }], y(o.prototype, _), v && y(o, v), A
        }(o.default);
    t.default = new v
}