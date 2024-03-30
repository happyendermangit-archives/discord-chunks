function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("898511"),
        u = n("629815"),
        s = n("126844"),
        l = n("688549"),
        c = n("581787"),
        f = n("254061"),
        d = n("297472"),
        _ = n("217014"),
        E = n("473702"),
        p = n("281767"),
        m = n("439386");

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

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = null,
        S = null,
        v = null,
        g = null,
        A = !1,
        b = !1;

    function N(e, t) {
        if (null == o) throw Error("Creating RTCConnection without session.");
        var r = _.default.getId(),
            i = new(n("277933")).default({
                userId: r,
                sessionId: o,
                guildId: e,
                channelId: t
            });
        return i.on(s.RTCConnectionEvent.State, function(e, t, n) {
            u.default.wait(function() {
                return u.default.dispatch(function(e) {
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
                }({
                    type: "RTC_CONNECTION_STATE",
                    state: e
                }, t, n))
            })
        }), i.on(s.RTCConnectionEvent.Video, function(e, t, n, r, o) {
            u.default.wait(function() {
                return u.default.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: o,
                    context: m.MediaEngineContextTypes.DEFAULT
                })
            })
        }), i.on(s.RTCConnectionEvent.Ping, function(e, t) {
            u.default.wait(function() {
                return u.default.dispatch({
                    type: "RTC_CONNECTION_PING",
                    pings: e,
                    quality: t
                })
            })
        }), i.on(s.RTCConnectionEvent.OutboundLossRate, function(e) {
            u.default.wait(function() {
                return u.default.dispatch({
                    type: "RTC_CONNECTION_LOSS_RATE",
                    lossRate: e
                })
            })
        }), i.on(s.RTCConnectionEvent.Speaking, function(e, t) {
            null == v || v.setSpeaking(e, t)
        }), i.on(s.RTCConnectionEvent.Flags, function(e, t) {
            u.default.wait(function() {
                u.default.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: i.guildId,
                    channelId: i.channelId,
                    context: i.context
                })
            })
        }), i.on(s.RTCConnectionEvent.Platform, function(e, t, n) {
            u.default.wait(function() {
                u.default.dispatch({
                    type: "RTC_CONNECTION_PLATFORM",
                    platform: t,
                    userId: e,
                    channelId: n
                })
            })
        }), v = new l.default(_.default.getId(), t), g = null, A = !1, b = !1, i
    }

    function R() {
        if (null == r) return !1;
        g = r.getDuration(), r.destroy(), r = null, v = null
    }

    function C() {
        T = null
    }

    function P(e) {
        var t = e.channel;
        if (null == r || r.channelId !== t.id) return !1;
        R()
    }

    function D() {
        return !0
    }
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(s, e);
        var t, n, o, i, a, u = (t = s, n = function() {
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
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u.apply(this, arguments)
        }
        return o = s, i = [{
            key: "initialize",
            value: function() {
                this.waitFor(E.default), (0, d.setVideoToggleAnalyticsParams)(this.getRTCConnectionId, this.getMediaSessionId)
            }
        }, {
            key: "getRTCConnection",
            value: function() {
                return r
            }
        }, {
            key: "getState",
            value: function() {
                return null != r ? r.state : p.RTCConnectionStates.DISCONNECTED
            }
        }, {
            key: "isConnected",
            value: function() {
                return this.getState() === p.RTCConnectionStates.RTC_CONNECTED
            }
        }, {
            key: "isDisconnected",
            value: function() {
                return this.getState() === p.RTCConnectionStates.DISCONNECTED
            }
        }, {
            key: "getRemoteDisconnectVoiceChannelId",
            value: function() {
                return T
            }
        }, {
            key: "getLastSessionVoiceChannelId",
            value: function() {
                return S
            }
        }, {
            key: "setLastSessionVoiceChannelId",
            value: function(e) {
                S = e
            }
        }, {
            key: "getGuildId",
            value: function() {
                return null == r ? void 0 : r.guildId
            }
        }, {
            key: "getChannelId",
            value: function() {
                return null == r ? void 0 : r.channelId
            }
        }, {
            key: "getHostname",
            value: function() {
                return null != r ? r.hostname : ""
            }
        }, {
            key: "getQuality",
            value: function() {
                return null != r ? r.quality : p.RTCConnectionQuality.UNKNOWN
            }
        }, {
            key: "getPings",
            value: function() {
                return null != r ? r.getPings() : []
            }
        }, {
            key: "getAveragePing",
            value: function() {
                return null != r ? null == r ? void 0 : r.getAveragePing() : 0
            }
        }, {
            key: "getLastPing",
            value: function() {
                return null == r ? void 0 : r.getLastPing()
            }
        }, {
            key: "getOutboundLossRate",
            value: function() {
                return null == r ? void 0 : r.getOutboundLossRate()
            }
        }, {
            key: "getMediaSessionId",
            value: function() {
                return null == r ? void 0 : r.getMediaSessionId()
            }
        }, {
            key: "getRTCConnectionId",
            value: function() {
                return null == r ? void 0 : r.getRTCConnectionId()
            }
        }, {
            key: "getDuration",
            value: function() {
                var e;
                return null !== (e = null == r ? void 0 : r.getDuration()) && void 0 !== e ? e : g
            }
        }, {
            key: "getPacketStats",
            value: function() {
                return null == r ? void 0 : r.getPacketStats()
            }
        }, {
            key: "getVoiceStateStats",
            value: function() {
                return null == v ? void 0 : v.getStats()
            }
        }, {
            key: "getWasEverMultiParticipant",
            value: function() {
                return A
            }
        }, {
            key: "getWasEverRtcConnected",
            value: function() {
                return b
            }
        }], y(o.prototype, i), a && y(o, a), s
    }(a.default.Store);
    I(L, "displayName", "RTCConnectionStore");
    var M = new L(u.default, __OVERLAY__ ? {} : {
        CONNECTION_OPEN: function(e) {
            return o = e.sessionId, T = null, S = null, R(), !1
        },
        CONNECTION_CLOSED: function() {
            o = null, T = null, S = null, R()
        },
        RTC_CONNECTION_STATE: function(e) {
            return e.state === p.RTCConnectionStates.RTC_CONNECTED && (b = !0), !0
        },
        RTC_CONNECTION_PING: D,
        RTC_CONNECTION_LOSS_RATE: D,
        RTC_CONNECTION_UPDATE_ID: function(e) {
            return e.connection === r
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                if (null == v || v.updateVoiceStates(t.userId, t.channelId), A = A || (null !== (n = null == v ? void 0 : v.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1, _.default.getId() !== t.userId) return !1;
                if (null != r) {
                    if (t.sessionId === o) null != t.guildId && t.guildId === r.guildId || null == t.guildId && t.channelId === r.channelId ? null == t.channelId ? R() : r.channelId = t.channelId : (t.guildId !== r.guildId && null == t.channelId || R(), null != t.channelId && (T = null, S = null, r = N(t.guildId, t.channelId), A = (null !== (i = null == v ? void 0 : v.getStats().max_voice_state_count) && void 0 !== i ? i : 0) > 1));
                    else if (t.guildId === r.guildId) {
                        var n, i, a;
                        !(null != f.default.getAwaitingRemoteSessionInfo() && null != f.default.getRemoteSessionId()) && (T = r.channelId), R()
                    }
                } else {
                    if (t.sessionId !== o || null == t.channelId) return e;
                    T = null, S = null, r = N(t.guildId, t.channelId), A = (null !== (a = null == v ? void 0 : v.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1
                }
                return !0
            }, !1)
        },
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            if (null == r || null != t && r.channelId === t) return !1;
            R()
        },
        VOICE_SERVER_UPDATE: function(e) {
            if (null == r || null != e.guildId && e.guildId !== r.guildId || null != e.channelId && e.channelId !== r.channelId) return !1;
            r.connect(e.endpoint, e.token)
        },
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: C,
        REMOTE_SESSION_CONNECT: C,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function() {
            S = null
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            if (null == r || r.guildId !== t.id) return !1;
            R()
        },
        CHANNEL_DELETE: P,
        THREAD_DELETE: P,
        CALL_DELETE: function(e) {
            var t = e.channelId;
            if (null == r || r.channelId !== t) return !1;
            R()
        },
        APP_STATE_UPDATE: function(e) {
            if (null != r) {
                var t = e.state === p.AppStates.BACKGROUND,
                    n = c.default.isEnabled();
                r.setAppBackgrounded(t, n)
            }
            return e.state === p.AppStates.ACTIVE && null != r && r.resetBackoff("App state is active"), !1
        },
        RTC_LOG_MARKER: function(e) {
            if (null == r) {
                console.warn("handleRtcLogMarker: Unexpected state, no rtcConnection.");
                return
            }
            r.setRtcLogMarker(e.marker)
        }
    });
    Promise.resolve().then(n.bind(n, "870331")).then(function(e) {
        (0, e.addExtraAnalyticsDecorator)(function(e) {
            e.client_rtc_state = M.getState()
        })
    }), t.default = M
}