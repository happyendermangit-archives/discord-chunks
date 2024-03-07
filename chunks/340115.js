function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Opcode: function() {
            return i
        },
        default: function() {
            return s
        }
    }), n("702976"), n("222007");
    var i, s, r, a = n("44170"),
        o = n("590401"),
        l = n("299039"),
        u = n("49111");
    (r = i || (i = {}))[r.DISPATCH = 0] = "DISPATCH", r[r.HEARTBEAT = 1] = "HEARTBEAT", r[r.IDENTIFY = 2] = "IDENTIFY", r[r.PRESENCE_UPDATE = 3] = "PRESENCE_UPDATE", r[r.VOICE_STATE_UPDATE = 4] = "VOICE_STATE_UPDATE", r[r.VOICE_SERVER_PING = 5] = "VOICE_SERVER_PING", r[r.RESUME = 6] = "RESUME", r[r.RECONNECT = 7] = "RECONNECT", r[r.REQUEST_GUILD_MEMBERS = 8] = "REQUEST_GUILD_MEMBERS", r[r.INVALID_SESSION = 9] = "INVALID_SESSION", r[r.HELLO = 10] = "HELLO", r[r.HEARTBEAT_ACK = 11] = "HEARTBEAT_ACK", r[r.CALL_CONNECT = 13] = "CALL_CONNECT", r[r.GUILD_SUBSCRIPTIONS = 14] = "GUILD_SUBSCRIPTIONS", r[r.LOBBY_CONNECT = 15] = "LOBBY_CONNECT", r[r.LOBBY_DISCONNECT = 16] = "LOBBY_DISCONNECT", r[r.LOBBY_VOICE_STATES_UPDATE = 17] = "LOBBY_VOICE_STATES_UPDATE", r[r.STREAM_CREATE = 18] = "STREAM_CREATE", r[r.STREAM_DELETE = 19] = "STREAM_DELETE", r[r.STREAM_WATCH = 20] = "STREAM_WATCH", r[r.STREAM_PING = 21] = "STREAM_PING", r[r.STREAM_SET_PAUSED = 22] = "STREAM_SET_PAUSED", r[r.REQUEST_GUILD_APPLICATION_COMMANDS = 24] = "REQUEST_GUILD_APPLICATION_COMMANDS", r[r.EMBEDDED_ACTIVITY_LAUNCH = 25] = "EMBEDDED_ACTIVITY_LAUNCH", r[r.EMBEDDED_ACTIVITY_CLOSE = 26] = "EMBEDDED_ACTIVITY_CLOSE", r[r.EMBEDDED_ACTIVITY_UPDATE = 27] = "EMBEDDED_ACTIVITY_UPDATE", r[r.REQUEST_FORUM_UNREADS = 28] = "REQUEST_FORUM_UNREADS", r[r.REMOTE_COMMAND = 29] = "REMOTE_COMMAND", r[r.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH", r[r.REQUEST_SOUNDBOARD_SOUNDS = 31] = "REQUEST_SOUNDBOARD_SOUNDS", r[r.SPEED_TEST_CREATE = 32] = "SPEED_TEST_CREATE", r[r.SPEED_TEST_DELETE = 33] = "SPEED_TEST_DELETE", r[r.REQUEST_LAST_MESSAGES = 34] = "REQUEST_LAST_MESSAGES", r[r.SEARCH_RECENT_MEMBERS = 35] = "SEARCH_RECENT_MEMBERS", r[r.REQUEST_CHANNEL_STATUSES = 36] = "REQUEST_CHANNEL_STATUSES", r[r.GUILD_SUBSCRIPTIONS_BULK = 37] = "GUILD_SUBSCRIPTIONS_BULK", s = class extends a.EventEmitter {
        presenceUpdate(e, t, n, i, s) {
            this.send(3, {
                status: e,
                since: t,
                activities: n,
                afk: i,
                broadcast: s
            })
        }
        voiceStateUpdate(e) {
            let {
                guildId: t = null,
                channelId: n = null,
                selfMute: i = !1,
                selfDeaf: s = !1,
                selfVideo: r = !1,
                preferredRegion: a = null,
                preferredRegions: l = null,
                videoStreamParameters: u = null,
                flags: d = 0
            } = e, c = {
                guild_id: t,
                channel_id: n,
                self_mute: i,
                self_deaf: s,
                self_video: r,
                flags: d
            };
            null != n && o.default.shouldIncludePreferredRegion() && (c.preferred_region = a, c.preferred_regions = l), null != u && (c.tracks = null == u ? void 0 : u.map(e => ({
                type: e.type,
                rid: e.rid,
                quality: e.quality
            }))), this.send(4, c)
        }
        voiceServerPing() {
            this.send(5, null)
        }
        embeddedActivityClose(e, t, n) {
            this.send(26, {
                guild_id: null != e ? e : u.ZERO_STRING_GUILD_ID,
                channel_id: t,
                application_id: n
            })
        }
        requestGuildMembers(e, t) {
            let {
                query: n,
                limit: i,
                userIds: s,
                presences: r
            } = t;
            this.send(8, {
                guild_id: e,
                query: n,
                limit: i,
                user_ids: s,
                presences: r
            })
        }
        searchRecentMembers(e, t) {
            let {
                query: n,
                continuationToken: i
            } = t;
            this.send(35, {
                guild_id: e,
                query: null != n ? n : "",
                continuation_token: null != i ? i : null
            })
        }
        updateGuildSubscriptions(e) {
            let t = {},
                n = 0;
            l.default.keys(e).forEach(i => {
                let s = e[i],
                    r = JSON.stringify([i, s]).length;
                n + r > 15360 && (this.send(37, {
                    subscriptions: t
                }), t = {}, n = 0), t[i] = s, n += r
            }), n > 0 && this.send(37, {
                subscriptions: t
            })
        }
        callConnect(e) {
            this.send(13, {
                channel_id: e
            })
        }
        lobbyConnect(e, t) {
            this.send(15, {
                lobby_id: e,
                lobby_secret: t
            })
        }
        lobbyDisconnect(e) {
            this.send(16, {
                lobby_id: e
            })
        }
        lobbyVoiceStatesUpdate(e) {
            this.send(17, e.map(e => ({
                lobby_id: e.lobbyId,
                self_mute: e.selfMute,
                self_deaf: e.selfDeaf
            })))
        }
        streamCreate(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this.send(18, {
                type: e,
                guild_id: t,
                channel_id: n,
                preferred_region: i
            })
        }
        streamWatch(e) {
            this.send(20, {
                stream_key: e
            })
        }
        streamPing(e) {
            this.send(21, {
                stream_key: e
            })
        }
        streamDelete(e) {
            this.send(19, {
                stream_key: e
            })
        }
        streamSetPaused(e, t) {
            this.send(22, {
                stream_key: e,
                paused: t
            })
        }
        speedTestCreate() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            this.send(32, {
                preferred_region: e
            })
        }
        speedTestDelete() {
            this.send(33, null)
        }
        requestForumUnreads(e, t, n) {
            this.send(28, {
                guild_id: e,
                channel_id: t,
                threads: n.map(e => ({
                    thread_id: e.threadId,
                    ack_message_id: e.ackMessageId
                }))
            })
        }
        requestSoundboardSounds(e) {
            this.send(31, {
                guild_ids: e
            })
        }
        requestLastMessages(e, t) {
            this.send(34, {
                guild_id: e,
                channel_ids: t
            })
        }
        getDeletedEntityIdsNotMatchingHash(e, t, n, i, s) {
            this.send(30, {
                guild_id: e,
                channel_ids_hash: t,
                role_ids_hash: n,
                emoji_ids_hash: i,
                sticker_ids_hash: s
            })
        }
        requestChannelStatuses(e) {
            this.send(36, {
                guild_id: e
            })
        }
        remoteCommand(e, t) {
            this.send(29, {
                target_session_id: e,
                payload: t
            })
        }
    }
}