function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("898511"),
        l = n("629815"),
        c = n("254061"),
        f = n("654370"),
        d = n("736381"),
        _ = n("603473"),
        E = n("882909"),
        p = n("951688"),
        m = n("217014"),
        y = n("935741"),
        I = n("306912"),
        h = n("335911"),
        O = n("29884"),
        T = n("545072"),
        S = n("894288"),
        v = n("665863"),
        g = n("281767"),
        A = n("367965");

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function R(e) {
        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function C(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                N(e, t, n[t])
            })
        }
        return e
    }

    function P(e, t) {
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

    function D(e, t) {
        return (D = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var L = null,
        M = {},
        U = null;

    function w() {
        r = new Map, o = {}, i = {}, a = {}, M = {}
    }
    w();

    function k(e) {
        r.delete(e)
    }

    function G() {
        var e = [];
        for (var t in o) {
            var n = o[t];
            for (var r in n) e.push(o[t][r])
        }
        return e
    }

    function B(e) {
        var t = e.streamKey,
            n = e.region,
            o = e.viewerIds,
            a = e.paused;
        r.set(t, P(C({}, (0, d.decodeStreamKey)(t)), {
            state: a ? g.ApplicationStreamStates.PAUSED : g.ApplicationStreamStates.ACTIVE
        })), i[t] = {
            streamKey: t,
            region: n,
            viewerIds: o
        }
    }

    function j(e, t) {
        var n = y.default.getBasicChannel(t);
        return e === A.StreamTypes.CALL || null != n && O.default.canBasicChannel(g.BasicPermissions.VIEW_CHANNEL, n)
    }

    function F(e) {
        if (j(e.streamType, e.channelId)) return !0;
        var t = y.default.getBasicChannel(e.channelId);
        return null != t && (0, _.canWatchStream)(t, v.default, I.default, O.default, c.default)[0]
    }
    var V = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && D(e, t)
        }(_, e);
        var t, n, u, s, l, c = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = R(t);
            if (n) {
                var a = R(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function _() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), c.apply(this, arguments)
        }
        return u = _, s = [{
            key: "initialize",
            value: function() {
                this.syncWith([O.default], function() {
                    return !0
                }), this.waitFor(f.default, O.default)
            }
        }, {
            key: "isSelfStreamHidden",
            value: function(e) {
                var t;
                return null !== (t = M[e]) && void 0 !== t && t
            }
        }, {
            key: "getLastActiveStream",
            value: function() {
                var e;
                return (0, E.default)(h.default) ? null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null : null
            }
        }, {
            key: "getAllActiveStreams",
            value: function() {
                return (0, E.default)(h.default) ? Array.from(r.values()) : []
            }
        }, {
            key: "getAllActiveStreamsForChannel",
            value: function(e) {
                return (0, E.default)(h.default) ? Array.from(r.values()).filter(function(t) {
                    return t.channelId === e
                }) : []
            }
        }, {
            key: "getActiveStreamForStreamKey",
            value: function(e) {
                var t;
                return (0, E.default)(h.default) ? null !== (t = r.get(e)) && void 0 !== t ? t : null : null
            }
        }, {
            key: "getActiveStreamForApplicationStream",
            value: function(e) {
                if (!(0, E.default)(h.default) || null == e) return null;
                var t, n = (0, d.encodeStreamKey)(e);
                return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
            }
        }, {
            key: "getCurrentUserActiveStream",
            value: function() {
                var e = S.default.getVoiceChannelId(),
                    t = y.default.getChannel(e);
                return null == t ? null : this.getActiveStreamForUser(m.default.getId(), t.getGuildId())
            }
        }, {
            key: "getActiveStreamForUser",
            value: function(e, t) {
                var n, r = this.getStreamForUser(e, t);
                return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find(function(t) {
                    return t.ownerId === e
                })) && void 0 !== n ? n : null
            }
        }, {
            key: "getStreamerActiveStreamMetadata",
            value: function() {
                var e, t = S.default.getVoiceChannelId(),
                    n = y.default.getChannel(t);
                if (null == n) return null;
                var r = this.getActiveStreamForUser(m.default.getId(), n.getGuildId());
                return null == r ? null : null !== (e = a[(0, d.encodeStreamKey)(r)]) && void 0 !== e ? e : null
            }
        }, {
            key: "getStreamerActiveStreamMetadataForStream",
            value: function(e) {
                var t;
                return null !== (t = a[e]) && void 0 !== t ? t : null
            }
        }, {
            key: "getAnyStreamForUser",
            value: function(e) {
                if (!(0, E.default)(h.default)) return null;
                var t, n = o[e];
                return null == n ? null : null !== (t = Object.values(n).find(function(e) {
                    return F(e)
                })) && void 0 !== t ? t : null
            }
        }, {
            key: "getStreamForUser",
            value: function(e, t) {
                if (!(0, E.default)(h.default)) return null;
                var n, r = null === (n = o[e]) || void 0 === n ? void 0 : n[null != t ? t : g.NULL_STRING_GUILD_ID];
                return null != r && F(r) ? r : null
            }
        }, {
            key: "getRTCStream",
            value: function(e) {
                var t;
                return (0, E.default)(h.default) ? null !== (t = i[e]) && void 0 !== t ? t : null : null
            }
        }, {
            key: "getAllApplicationStreams",
            value: function() {
                return (0, E.default)(h.default) ? G().filter(function(e) {
                    return null != e && j(e.streamType, e.channelId)
                }) : []
            }
        }, {
            key: "getAllApplicationStreamsForChannel",
            value: function(e) {
                return (0, E.default)(h.default) ? G().filter(function(t) {
                    return null != t && t.channelId === e && j(t.streamType, t.channelId)
                }) : []
            }
        }, {
            key: "getViewerIds",
            value: function(e) {
                if (!(0, E.default)(h.default)) return [];
                var t = null,
                    n = null != (t = "string" == typeof e ? e : (0, d.encodeStreamKey)(e)) ? i[t] : null;
                return null != n ? n.viewerIds : []
            }
        }, {
            key: "getCurrentAppIntent",
            value: function() {
                return U
            }
        }, {
            key: "getState",
            value: function() {
                return (0, E.default)(h.default) ? {
                    activeStreams: Array.from(r.entries()),
                    streamsByUserAndGuild: o,
                    rtcStreams: i,
                    streamerActiveStreamMetadatas: a
                } : {
                    activeStreams: [],
                    streamsByUserAndGuild: {},
                    rtcStreams: {},
                    streamerActiveStreamMetadatas: {}
                }
            }
        }], b(u.prototype, s), l && b(u, l), _
    }(s.default.Store);
    N(V, "displayName", "ApplicationStreamingStore"), t.default = new V(l.default, {
        OVERLAY_INITIALIZE: function(e) {
            var t = e.applicationStreamState;
            o = t.streamsByUserAndGuild, r = new Map(t.activeStreams), i = t.rtcStreams, a = t.streamerActiveStreamMetadatas
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                var n, r, i, a, u, s, l = t.userId,
                    c = t.guildId,
                    f = t.channelId,
                    d = t.sessionId;
                if (t.selfStream && null != f) {
                    ;
                    return null == o[(n = {
                        streamType: null != c ? A.StreamTypes.GUILD : A.StreamTypes.CALL,
                        ownerId: l,
                        guildId: c,
                        channelId: f
                    }).ownerId] && (o[n.ownerId] = {}), o[n.ownerId][null !== (r = n.guildId) && void 0 !== r ? r : g.NULL_STRING_GUILD_ID] = n, !0
                }
                var _ = m.default.getSessionId();
                if (l === m.default.getId() && d !== _ && null != T.default.getChannelId()) return e;
                return i = l, s = null != (a = c) ? a : g.NULL_STRING_GUILD_ID, (null === (u = o[i]) || void 0 === u ? void 0 : u[s]) != null && (delete o[i][s], !0) || e
            }, !1)
        },
        STREAM_WATCH: function(e) {
            var t = e.streamKey,
                n = (0, d.decodeStreamKey)(t);
            r.delete(t), r.set(t, P(C({}, n), {
                state: g.ApplicationStreamStates.CONNECTING
            })), n.ownerId === m.default.getId() && (M[n.channelId] = !1)
        },
        STREAM_START: function(e) {
            var t, n = e.streamType,
                o = e.guildId,
                i = e.channelId,
                u = e.pid,
                s = e.sourceName,
                l = e.sourceId,
                c = (0, d.encodeStreamKey)({
                    streamType: n,
                    guildId: o,
                    channelId: i,
                    ownerId: m.default.getId()
                }),
                _ = null !== (t = null != u ? f.default.getGameForPID(u) : null != l ? f.default.getRunningGames().find(function(e) {
                    return (0, p.default)(l, e.windowHandle)
                }) : null) && void 0 !== t ? t : null;
            a[c] = {
                id: null == _ ? void 0 : _.id,
                pid: u,
                sourceName: s
            }, r.delete(c), r.set(c, {
                streamType: n,
                guildId: o,
                channelId: i,
                ownerId: m.default.getId(),
                state: g.ApplicationStreamStates.CONNECTING
            })
        },
        STREAM_STOP: function(e) {
            a[e.streamKey] = null
        },
        STREAM_CREATE: B,
        STREAM_UPDATE: B,
        STREAM_TIMED_OUT: function(e) {
            var t = e.streamKey,
                n = r.get(t);
            if (null == n) return !1;
            r.set(t, P(C({}, n), {
                state: g.ApplicationStreamStates.FAILED
            }))
        },
        STREAM_DELETE: function(e) {
            var t = e.streamKey,
                o = e.unavailable,
                a = e.reason;
            delete i[t];
            var u = r.get(t);
            if (null == u) return !1;
            var s = g.ApplicationStreamStates.ENDED;
            if (o) s = g.ApplicationStreamStates.RECONNECTING;
            else if (a === g.ApplicationStreamDeleteReasons.UNAUTHORIZED) s = g.ApplicationStreamStates.FAILED;
            else if (a === g.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                var l = (0, d.decodeStreamKey)(t).guildId;
                n.e("21694").then(n.bind(n, "912511")).then(function(e) {
                    (0, e.default)(l)
                }), s = g.ApplicationStreamStates.ENDED
            }
            r.set(t, P(C({}, u), {
                state: s
            })), s === g.ApplicationStreamStates.ENDED && L !== t && k(t)
        },
        STREAM_CLOSE: function(e) {
            k(e.streamKey)
        },
        STREAM_UPDATE_SELF_HIDDEN: function(e) {
            var t = e.channelId,
                n = e.selfStreamHidden;
            (0, d.isStreamKey)(L) && (null == L ? void 0 : L.includes(m.default.getId())) && !1 === M[t] && !0 === n && (L = null), M[t] = n
        },
        SET_STREAM_APP_INTENT: function(e) {
            U = e.intent
        },
        RTC_CONNECTION_STATE: function(e) {
            var t = e.streamKey,
                n = e.state;
            if (null == t) return !1;
            var o = r.get(t);
            if (null == o || o.state === g.ApplicationStreamStates.ENDED) return !1;
            var i = o.state;
            switch (n) {
                case g.RTCConnectionStates.DISCONNECTED:
                    i = g.ApplicationStreamStates.RECONNECTING;
                    break;
                case g.RTCConnectionStates.RTC_CONNECTED:
                    i = g.ApplicationStreamStates.ACTIVE
            }
            if (i === o.state) return !1;
            r.set(t, P(C({}, o), {
                state: i
            }))
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
            var t = e.id,
                n = e.channelId;
            L = t, Array.from(r.values()).forEach(function(e) {
                (0, d.encodeStreamKey)(e) !== L && e.state === g.ApplicationStreamStates.ENDED && k((0, d.encodeStreamKey)(e))
            }), null != t && (0, d.isStreamKey)(t) && t.includes(m.default.getId()) && (M[n] = !1)
        },
        CONNECTION_OPEN: w,
        CONNECTION_CLOSED: w,
        LOGOUT: w
    })
}