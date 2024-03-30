function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Opcode: function() {
            return o
        },
        default: function() {
            return d
        }
    });
    var r, o, i = n("836560"),
        a = n("97478"),
        u = n("523018"),
        s = n("281767");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {}))[r.DISPATCH = 0] = "DISPATCH", r[r.HEARTBEAT = 1] = "HEARTBEAT", r[r.IDENTIFY = 2] = "IDENTIFY", r[r.PRESENCE_UPDATE = 3] = "PRESENCE_UPDATE", r[r.VOICE_STATE_UPDATE = 4] = "VOICE_STATE_UPDATE", r[r.VOICE_SERVER_PING = 5] = "VOICE_SERVER_PING", r[r.RESUME = 6] = "RESUME", r[r.RECONNECT = 7] = "RECONNECT", r[r.REQUEST_GUILD_MEMBERS = 8] = "REQUEST_GUILD_MEMBERS", r[r.INVALID_SESSION = 9] = "INVALID_SESSION", r[r.HELLO = 10] = "HELLO", r[r.HEARTBEAT_ACK = 11] = "HEARTBEAT_ACK", r[r.CALL_CONNECT = 13] = "CALL_CONNECT", r[r.GUILD_SUBSCRIPTIONS = 14] = "GUILD_SUBSCRIPTIONS", r[r.LOBBY_CONNECT = 15] = "LOBBY_CONNECT", r[r.LOBBY_DISCONNECT = 16] = "LOBBY_DISCONNECT", r[r.LOBBY_VOICE_STATES_UPDATE = 17] = "LOBBY_VOICE_STATES_UPDATE", r[r.STREAM_CREATE = 18] = "STREAM_CREATE", r[r.STREAM_DELETE = 19] = "STREAM_DELETE", r[r.STREAM_WATCH = 20] = "STREAM_WATCH", r[r.STREAM_PING = 21] = "STREAM_PING", r[r.STREAM_SET_PAUSED = 22] = "STREAM_SET_PAUSED", r[r.REQUEST_GUILD_APPLICATION_COMMANDS = 24] = "REQUEST_GUILD_APPLICATION_COMMANDS", r[r.EMBEDDED_ACTIVITY_LAUNCH = 25] = "EMBEDDED_ACTIVITY_LAUNCH", r[r.EMBEDDED_ACTIVITY_CLOSE = 26] = "EMBEDDED_ACTIVITY_CLOSE", r[r.EMBEDDED_ACTIVITY_UPDATE = 27] = "EMBEDDED_ACTIVITY_UPDATE", r[r.REQUEST_FORUM_UNREADS = 28] = "REQUEST_FORUM_UNREADS", r[r.REMOTE_COMMAND = 29] = "REMOTE_COMMAND", r[r.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH", r[r.REQUEST_SOUNDBOARD_SOUNDS = 31] = "REQUEST_SOUNDBOARD_SOUNDS", r[r.SPEED_TEST_CREATE = 32] = "SPEED_TEST_CREATE", r[r.SPEED_TEST_DELETE = 33] = "SPEED_TEST_DELETE", r[r.REQUEST_LAST_MESSAGES = 34] = "REQUEST_LAST_MESSAGES", r[r.SEARCH_RECENT_MEMBERS = 35] = "SEARCH_RECENT_MEMBERS", r[r.REQUEST_CHANNEL_STATUSES = 36] = "REQUEST_CHANNEL_STATUSES", r[r.GUILD_SUBSCRIPTIONS_BULK = 37] = "GUILD_SUBSCRIPTIONS_BULK";
    var d = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(_, e);
        var t, n, r, o, i, d = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
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
            }(this, _), d.apply(this, arguments)
        }
        return r = _, o = [{
            key: "presenceUpdate",
            value: function(e, t, n, r, o) {
                this.send(3, {
                    status: e,
                    since: t,
                    activities: n,
                    afk: r,
                    broadcast: o
                })
            }
        }, {
            key: "voiceStateUpdate",
            value: function(e) {
                var t = e.guildId,
                    n = e.channelId,
                    r = void 0 === n ? null : n,
                    o = e.selfMute,
                    i = e.selfDeaf,
                    u = e.selfVideo,
                    s = e.preferredRegion,
                    l = e.preferredRegions,
                    c = e.videoStreamParameters,
                    f = void 0 === c ? null : c,
                    d = e.flags,
                    _ = {
                        guild_id: void 0 === t ? null : t,
                        channel_id: r,
                        self_mute: void 0 !== o && o,
                        self_deaf: void 0 !== i && i,
                        self_video: void 0 !== u && u,
                        flags: void 0 === d ? 0 : d
                    };
                null != r && a.default.shouldIncludePreferredRegion() && (_.preferred_region = void 0 === s ? null : s, _.preferred_regions = void 0 === l ? null : l), null != f && (_.tracks = null == f ? void 0 : f.map(function(e) {
                    return {
                        type: e.type,
                        rid: e.rid,
                        quality: e.quality
                    }
                })), this.send(4, _)
            }
        }, {
            key: "voiceServerPing",
            value: function() {
                this.send(5, null)
            }
        }, {
            key: "embeddedActivityClose",
            value: function(e, t, n) {
                this.send(26, {
                    guild_id: null != e ? e : s.ZERO_STRING_GUILD_ID,
                    channel_id: t,
                    application_id: n
                })
            }
        }, {
            key: "requestGuildMembers",
            value: function(e, t) {
                var n = t.query,
                    r = t.limit,
                    o = t.userIds,
                    i = t.presences;
                this.send(8, {
                    guild_id: e,
                    query: n,
                    limit: r,
                    user_ids: o,
                    presences: i
                })
            }
        }, {
            key: "searchRecentMembers",
            value: function(e, t) {
                var n = t.query,
                    r = t.continuationToken;
                this.send(35, {
                    guild_id: e,
                    query: null != n ? n : "",
                    continuation_token: null != r ? r : null
                })
            }
        }, {
            key: "updateGuildSubscriptions",
            value: function(e) {
                var t = this,
                    n = {},
                    r = 0;
                u.default.keys(e).forEach(function(o) {
                    var i = e[o],
                        a = JSON.stringify([o, i]).length;
                    r + a > 15360 && (t.send(37, {
                        subscriptions: n
                    }), n = {}, r = 0), n[o] = i, r += a
                }), r > 0 && this.send(37, {
                    subscriptions: n
                })
            }
        }, {
            key: "callConnect",
            value: function(e) {
                this.send(13, {
                    channel_id: e
                })
            }
        }, {
            key: "lobbyConnect",
            value: function(e, t) {
                this.send(15, {
                    lobby_id: e,
                    lobby_secret: t
                })
            }
        }, {
            key: "lobbyDisconnect",
            value: function(e) {
                this.send(16, {
                    lobby_id: e
                })
            }
        }, {
            key: "lobbyVoiceStatesUpdate",
            value: function(e) {
                this.send(17, e.map(function(e) {
                    return {
                        lobby_id: e.lobbyId,
                        self_mute: e.selfMute,
                        self_deaf: e.selfDeaf
                    }
                }))
            }
        }, {
            key: "streamCreate",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                this.send(18, {
                    type: e,
                    guild_id: t,
                    channel_id: n,
                    preferred_region: r
                })
            }
        }, {
            key: "streamWatch",
            value: function(e) {
                this.send(20, {
                    stream_key: e
                })
            }
        }, {
            key: "streamPing",
            value: function(e) {
                this.send(21, {
                    stream_key: e
                })
            }
        }, {
            key: "streamDelete",
            value: function(e) {
                this.send(19, {
                    stream_key: e
                })
            }
        }, {
            key: "streamSetPaused",
            value: function(e, t) {
                this.send(22, {
                    stream_key: e,
                    paused: t
                })
            }
        }, {
            key: "speedTestCreate",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.send(32, {
                    preferred_region: e
                })
            }
        }, {
            key: "speedTestDelete",
            value: function() {
                this.send(33, null)
            }
        }, {
            key: "requestForumUnreads",
            value: function(e, t, n) {
                this.send(28, {
                    guild_id: e,
                    channel_id: t,
                    threads: n.map(function(e) {
                        return {
                            thread_id: e.threadId,
                            ack_message_id: e.ackMessageId
                        }
                    })
                })
            }
        }, {
            key: "requestSoundboardSounds",
            value: function(e) {
                this.send(31, {
                    guild_ids: e
                })
            }
        }, {
            key: "requestLastMessages",
            value: function(e, t) {
                this.send(34, {
                    guild_id: e,
                    channel_ids: t
                })
            }
        }, {
            key: "getDeletedEntityIdsNotMatchingHash",
            value: function(e, t, n, r, o) {
                this.send(30, {
                    guild_id: e,
                    channel_ids_hash: t,
                    role_ids_hash: n,
                    emoji_ids_hash: r,
                    sticker_ids_hash: o
                })
            }
        }, {
            key: "requestChannelStatuses",
            value: function(e) {
                this.send(36, {
                    guild_id: e
                })
            }
        }, {
            key: "remoteCommand",
            value: function(e, t) {
                this.send(29, {
                    target_session_id: e,
                    payload: t
                })
            }
        }], l(r.prototype, o), i && l(r, i), _
    }(i.EventEmitter)
}