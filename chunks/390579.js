function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("512722"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("898511"),
        l = n("629815"),
        c = n("632142"),
        f = n("35523"),
        d = n("254061"),
        _ = n("736381"),
        E = n("73013"),
        p = n("217014"),
        m = n("518254"),
        y = n("935741"),
        I = n("894288"),
        h = n("380019"),
        O = n("208454"),
        T = n("712465"),
        S = n("665863"),
        v = n("222164"),
        g = n("656462"),
        A = n("281767");

    function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function P(e, t) {
        return (P = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function D(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var L = new f.default("ChannelRTCStore"),
        M = Object.freeze([]),
        U = [],
        w = {},
        k = {},
        G = {},
        B = {},
        j = {},
        F = {},
        V = {},
        H = {},
        x = {},
        Y = {};

    function W(e) {
        var t = w[e];
        return null == t && (t = new v.default(e), w[e] = t), t
    }

    function K(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U;
        return t.reduce(function(t, n) {
            return e(W(n)) ? (function(e) {
                var t = W(e);
                if (0 !== t.size()) {
                    var n = eu(e) || Z(t) ? A.ChannelModes.VIDEO : A.ChannelModes.VOICE;
                    n === A.ChannelModes.VOICE ? (delete B[e], delete j[e]) : B[e] = n
                }
            }(n), function(e) {
                var t = p.default.getId(),
                    n = W(e);
                if (0 === n.size() || I.default.getVoiceChannelId() !== e) {
                    J(e, null);
                    return
                }
                var r = g.ParticipantSelectionTypes.NONE,
                    o = n.toArray(v.ChannelRTCParticipantsIndexes.STREAM).find(function(e) {
                        return e.type === g.ParticipantTypes.STREAM && E.default.getActiveStreamForStreamKey(e.id)
                    });
                if (null != o) i()(o.type === g.ParticipantTypes.STREAM, "Impossible condition"), r = o.id;
                else if (1 === n.size()) r = t;
                else if (1 === n.size(v.ChannelRTCParticipantsIndexes.VIDEO)) r = D(n.toArray(v.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                else {
                    var a, u = n.toArray().find(function(e) {
                        return e.type === g.ParticipantTypes.USER && e.id !== t && !e.ringing
                    });
                    r = null !== (a = null == u ? void 0 : u.id) && void 0 !== a ? a : t
                }
                var s = D(X(e), 1)[0];
                if (s !== g.ParticipantSelectionTypes.AUTO && s !== g.ParticipantSelectionTypes.NONE) {
                    var l = n.getParticipant(s);
                    (null == l || l.type === g.ParticipantTypes.STREAM && null == E.default.getActiveStreamForStreamKey(l.id)) && (s = g.ParticipantSelectionTypes.NONE)
                }
                J(e, [s, r])
            }(n), !0) : t
        }, !1)
    }

    function z(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U;
        return K(function(t) {
            return t.updateParticipant(e)
        }, t)
    }

    function X(e) {
        var t, n = y.default.getChannel(e),
            r = (null == n ? void 0 : n.isDM()) ? g.ParticipantSelectionTypes.AUTO : g.ParticipantSelectionTypes.NONE;
        return null !== (t = k[e]) && void 0 !== t ? t : [r, g.ParticipantSelectionTypes.NONE]
    }

    function q(e) {
        return null != k[e] && D(k[e], 1)[0] !== g.ParticipantSelectionTypes.NONE
    }

    function Q(e) {
        null == G[e] && (G[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
        var t = G[e],
            n = performance.now(),
            r = q(e);
        if (t.lastUpdate > 0) {
            var o = n - t.lastUpdate;
            t[r ? "focusDurationMs" : "gridDurationMs"] += o
        }
        t.lastUpdate = n
    }

    function J(e, t) {
        Q(e);
        var n = q(e);
        null == t ? delete k[e] : k[e] = t, n !== q(e) && G[e].toggleCount++
    }

    function Z(e) {
        return e.size(v.ChannelRTCParticipantsIndexes.STREAM) > 0 || e.size(v.ChannelRTCParticipantsIndexes.VIDEO) > 0 || e.hasEmbeddedActivity()
    }

    function $(e) {
        delete w[e], delete k[e], delete B[e], delete j[e]
    }

    function ee() {
        var e, t, n, r, o, i;
        return K(function(e) {
            return e.rebuild()
        }, (e = [], null != (t = I.default.getChannelId()) && e.push(t), null != (n = I.default.getVoiceChannelId()) && !e.includes(n) && e.push(n), r = d.default.getRemoteSessionId(), (null == (o = S.default.getVoiceStateForSession(p.default.getId(), r)) ? void 0 : o.channelId) != null && e.push(null == o ? void 0 : o.channelId), u().difference(U, e).forEach($), i = u().difference(e, U), U = e, i))
    }

    function et() {
        return K(function(e) {
            return e.updateEmbeddedActivities()
        })
    }

    function en(e) {
        var t = e.userId;
        return K(function(e) {
            return e.updateParticipantSpeaking(t)
        })
    }

    function er(e) {
        return z(e.user.id)
    }

    function eo(e) {
        return K(function(e) {
            return e.rebuild()
        }, [e.channelId])
    }

    function ei(e) {
        var t = e.channel.id;
        return delete H[t], delete x[t], $(t)
    }

    function ea(e) {
        var t = e.streamKey,
            n = (0, _.decodeStreamKey)(t),
            r = n.channelId;
        return z(n.ownerId, [r])
    }

    function eu(e) {
        var t;
        return !!(null === (t = y.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
    }
    var es = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && P(e, t)
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
            var e, r, o, i = C(t);
            if (n) {
                var a = C(this).constructor;
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
                this.waitFor(E.default, p.default, m.default, y.default, c.default, I.default, h.default, O.default, T.default, S.default), this.syncWith([c.default], et), this.syncWith([d.default], ee)
            }
        }, {
            key: "getParticipantsVersion",
            value: function(e) {
                return W(e).version
            }
        }, {
            key: "getParticipants",
            value: function(e) {
                var t;
                return null !== (t = W(e).toArray()) && void 0 !== t ? t : M
            }
        }, {
            key: "getSpeakingParticipants",
            value: function(e) {
                var t;
                return null !== (t = W(e).toArray(v.ChannelRTCParticipantsIndexes.SPEAKING)) && void 0 !== t ? t : M
            }
        }, {
            key: "getFilteredParticipants",
            value: function(e) {
                return V[e] ? W(e).toArray(v.ChannelRTCParticipantsIndexes.FILTERED) : W(e).toArray()
            }
        }, {
            key: "getVideoParticipants",
            value: function(e) {
                var t;
                return null !== (t = W(e).toArray(v.ChannelRTCParticipantsIndexes.VIDEO)) && void 0 !== t ? t : M
            }
        }, {
            key: "getStreamParticipants",
            value: function(e) {
                var t;
                return null !== (t = W(e).toArray(v.ChannelRTCParticipantsIndexes.STREAM)) && void 0 !== t ? t : M
            }
        }, {
            key: "getActivityParticipants",
            value: function(e) {
                var t;
                return null !== (t = W(e).toArray(v.ChannelRTCParticipantsIndexes.ACTIVITY)) && void 0 !== t ? t : M
            }
        }, {
            key: "getParticipant",
            value: function(e, t) {
                return W(e).getParticipant(t)
            }
        }, {
            key: "getUserParticipantCount",
            value: function(e) {
                var t = W(e);
                return t.size() - t.size(v.ChannelRTCParticipantsIndexes.STREAM) - t.size(v.ChannelRTCParticipantsIndexes.ACTIVITY)
            }
        }, {
            key: "getParticipantsOpen",
            value: function(e) {
                var t;
                return null === (t = F[e]) || void 0 === t || t
            }
        }, {
            key: "getVoiceParticipantsHidden",
            value: function(e) {
                var t;
                return null !== (t = V[e]) && void 0 !== t && t
            }
        }, {
            key: "getSelectedParticipantId",
            value: function(e) {
                var t = D(X(e), 2),
                    n = t[0],
                    r = t[1];
                return n === g.ParticipantSelectionTypes.NONE ? null : n !== g.ParticipantSelectionTypes.AUTO ? n : r === g.ParticipantSelectionTypes.NONE || r === g.ParticipantSelectionTypes.AUTO ? null : r
            }
        }, {
            key: "getSelectedParticipant",
            value: function(e) {
                var t = this.getSelectedParticipantId(e);
                return null == t ? null : W(e).getParticipant(t)
            }
        }, {
            key: "getSelectedParticipantStats",
            value: function(e) {
                var t = G[e];
                return null == t ? {} : {
                    view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                    view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                    view_mode_toggle_count: t.toggleCount
                }
            }
        }, {
            key: "getMode",
            value: function(e) {
                var t;
                return null !== (t = B[e]) && void 0 !== t ? t : eu(e) ? A.ChannelModes.VIDEO : A.ChannelModes.VOICE
            }
        }, {
            key: "getLayout",
            value: function(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.AppContext.APP;
                if (__OVERLAY__) return A.ChannelLayouts.NORMAL;
                var o = y.default.getChannel(e),
                    i = eu(e) || (null == o ? void 0 : o.isBroadcastChannel());
                return null !== (n = null === (t = j[e]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : i ? A.ChannelLayouts.NO_CHAT : A.ChannelLayouts.NORMAL
            }
        }, {
            key: "getChatOpen",
            value: function(e) {
                var t;
                return null !== (t = H[e]) && void 0 !== t && t
            }
        }, {
            key: "isFullscreenInContext",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.AppContext.APP;
                return Object.values(j).some(function(t) {
                    return t[e] === A.ChannelLayouts.FULL_SCREEN
                })
            }
        }, {
            key: "getStageStreamSize",
            value: function(e) {
                return x[e]
            }
        }, {
            key: "getStageVideoLimitBoostUpsellDismissed",
            value: function(e) {
                return Y[e]
            }
        }], N(r.prototype, o), i && N(r, i), u
    }(s.default.Store);
    R(es, "displayName", "ChannelRTCStore"), t.default = new es(l.default, {
        CONNECTION_OPEN: ee,
        CONNECTION_OPEN_SUPPLEMENTAL: ee,
        THREAD_LIST_SYNC: ee,
        OVERLAY_INITIALIZE: ee,
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.channelId,
                n = e.currentVoiceChannelId;
            return null != t ? delete G[t] : null != n && (delete H[n], delete x[n], Q(n)), ee()
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = ee(),
                o = y.default.getChannel(t);
            return null == t || null == n || (null == o ? void 0 : o.type) !== A.ChannelTypes.GUILD_VOICE && (null == o ? void 0 : o.type) !== A.ChannelTypes.GUILD_STAGE_VOICE || H[t] ? r : (H[t] = !0, !0)
        },
        CHANNEL_RTC_ACTIVE_CHANNELS: ee,
        VOICE_STATE_UPDATES: function(e) {
            var t = e.voiceStates,
                n = e.initial;
            return t.reduce(function(e, t) {
                var r = t.userId,
                    o = t.channelId;
                return n && null != o && !U.includes(o) ? e : z(r) || e
            }, !1)
        },
        CHANNEL_CREATE: function(e) {
            var t = e.channel;
            if (t.type === A.ChannelTypes.GROUP_DM) {
                var n, r, o = t.originChannelId;
                if (null != o) return j[t.id] = R({}, A.AppContext.APP, null !== (r = null === (n = j[o]) || void 0 === n ? void 0 : n[A.AppContext.APP]) && void 0 !== r ? r : A.ChannelLayouts.NORMAL), !0;
                t.isBroadcastChannel() && (j[t.id] = R({}, A.AppContext.APP, A.ChannelLayouts.NO_CHAT))
            }
            return !1
        },
        CHANNEL_DELETE: ei,
        THREAD_DELETE: ei,
        CALL_CREATE: eo,
        CALL_UPDATE: eo,
        CALL_DELETE: function(e) {
            return $(e.channelId)
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
            var t = e.channelId,
                n = e.id,
                r = W(t);
            null == n && r.toArray(v.ChannelRTCParticipantsIndexes.STREAM).forEach(function(e) {
                (0, g.isStreamParticipant)(e) && r.updateParticipant(e.user.id)
            });
            var o = D(X(t), 2)[1];
            if (J(t, [null != n ? n : g.ParticipantSelectionTypes.NONE, o]), (0, _.isStreamKey)(n)) {
                try {
                    var i = (0, _.decodeStreamKey)(n).ownerId;
                    i === p.default.getId() && z(i, [t])
                } catch (e) {
                    L.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                }!Z(r) && (F[t] = !1)
            }
        },
        CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
            var t, n, r = e.channelId,
                o = e.layout,
                i = e.appContext;
            j[r] = (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        R(e, t, n[t])
                    })
                }
                return e
            }({}, j[r]), n = null != (n = R({}, i, o)) ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)
        },
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
            var t = e.channelId,
                n = e.participantsOpen;
            F[t] = n
        },
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
            var t = e.channelId,
                n = e.voiceParticipantsHidden;
            V[t] = n
        },
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
            var t = e.channelId,
                n = e.large;
            x[t] = n
        },
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
            var t = e.channelId,
                n = e.dismissed;
            Y[t] = n
        },
        STREAM_UPDATE_SELF_HIDDEN: function(e) {
            var t = e.channelId,
                n = e.selfStreamHidden,
                r = p.default.getId();
            if (n) {
                var o = D(X(t), 1)[0];
                (0, _.isStreamKey)(o) && o.includes(r) && J(t, null)
            }
            z(r, [t])
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
            var t = e.channelId,
                n = e.chatOpen;
            H[t] = n
        },
        RTC_CONNECTION_VIDEO: function(e) {
            var t = e.channelId;
            return z(e.userId, [t])
        },
        RTC_CONNECTION_PLATFORM: function(e) {
            var t = e.channelId;
            return z(e.userId, [t])
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
            return z(e.userId)
        },
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
            var t = e.channelId,
                n = e.senderUserId,
                r = e.maxResolution,
                o = e.maxFrameRate;
            return K(function(e) {
                return e.updateParticipantQuality(n, r, o)
            }, [t])
        },
        STREAM_CLOSE: ea,
        STREAM_DELETE: ea,
        STREAM_WATCH: function(e) {
            var t = e.streamKey,
                n = (0, _.decodeStreamKey)(t),
                r = n.channelId;
            return z(n.ownerId, [r])
        },
        SPEAKING: en,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: en,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: en,
        USER_UPDATE: er,
        GUILD_MEMBER_UPDATE: er,
        GUILD_DELETE: function(e) {
            var t = e.guild,
                n = [];
            if (u().forEach(U, function(e) {
                    var r = y.default.getChannel(e);
                    (null == r || r.getGuildId() === t.id) && n.push(e)
                }), 0 === n.length) return !1;
            u().forEach(n, function(e) {
                return $(e)
            })
        }
    })
}