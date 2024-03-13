function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    }), n("222007"), n("808653"), n("424973");
    var i = n("714617"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("407846"),
        u = n("913144"),
        d = n("374014"),
        c = n("373469"),
        f = n("271938"),
        _ = n("42203"),
        h = n("305961"),
        E = n("957255"),
        g = n("27618"),
        m = n("280168"),
        p = n("697218"),
        S = n("800762"),
        v = n("316133"),
        T = n("998716"),
        I = n("325861"),
        C = n("834052");
    let A = "NO_GUILD",
        y = new l.default(e => [function(e) {
            var t;
            return null !== (t = e.getGuildId()) && void 0 !== t ? t : A
        }(e)], e => e.id),
        N = new Set,
        R = {};

    function O(e) {
        return y.values(null != e ? e : void 0, !0).map(e => {
            let {
                id: t
            } = e;
            return t
        })
    }

    function D(e) {
        !N.has(e) && (N.add(e), a(_.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
            L(e) && y.set(e.id, e)
        }))
    }

    function P(e) {
        let t = R[e];
        if (null != t) return t;
        let n = _.default.getChannel(e);
        return null != n && n.isGuildStageVoice() ? (D(n.guild_id), L(n)) ? M(e) : null : null
    }

    function M(e) {
        let t = R[e];
        return null == t && (t = new T.default(e), R[e] = t, t.rebuild()), t
    }

    function L(e) {
        return null != e && e.isGuildStageVoice() && v.default.countVoiceStatesForChannel(e.id) > 0
    }

    function b(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
        return t.reduce((t, n) => {
            let i = M(n),
                s = e(i);
            return s ? (! function(e, t) {
                let n = _.default.getChannel(e);
                null != n && n.isGuildStageVoice() ? 0 === t.size() ? w(n.id) : null == y.get(n.id) && y.set(n.id, n) : w(e)
            }(n, i), !0) : t
        }, !1)
    }

    function U(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
        return b(t => t.updateParticipant(e), t)
    }

    function w(e) {
        return null != e && (delete R[e], y.delete(e), !0)
    }

    function k() {
        N.clear(), y.clear(), R = {}
    }

    function V(e, t, n) {
        if (null == n || e.has(n)) return;
        let i = _.default.getChannel(n);
        (null == i ? void 0 : i.isGuildStageVoice()) && (t.add(n), e.add(n))
    }

    function G(e) {
        let {
            user: t
        } = e;
        return U(t.id)
    }

    function F(e) {
        let {
            relationship: t
        } = e;
        return U(t.id)
    }

    function x(e) {
        let {
            guild: t
        } = e;
        ! function(e) {
            let t = y.values(e);
            for (let e of t) y.delete(e.id), delete R[e.id];
            N.delete(e)
        }(t.id)
    }

    function B(e) {
        let {
            streamKey: t
        } = e, {
            channelId: n,
            guildId: i,
            ownerId: s
        } = (0, d.decodeStreamKey)(t);
        return !!(null != i && N.has(i)) && U(s, [n])
    }
    let H = [];
    class Y extends o.default.Store {
        initialize() {
            this.waitFor(f.default, p.default, _.default, m.default, S.default, E.default, v.default, h.default, I.default, g.default, C.default, c.default)
        }
        getParticipantsVersion(e) {
            var t, n;
            return null == e ? -1 : null !== (n = null === (t = P(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
        }
        getMutableParticipants(e, t) {
            var n, i;
            return null == e ? H : null !== (i = null === (n = P(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== i ? i : H
        }
        getMutableRequestToSpeakParticipants(e) {
            var t, n;
            return null !== (n = null === (t = P(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : H
        }
        getRequestToSpeakParticipantsVersion(e) {
            var t, n;
            return null !== (n = null === (t = P(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
        }
        getParticipantCount(e, t) {
            var n, i;
            return null !== (i = null === (n = P(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== i ? i : 0
        }
        getChannels(e) {
            return D(null != e ? e : A), y.values(null != e ? e : A)
        }
        getChannelsVersion() {
            return y.version
        }
        getParticipant(e, t) {
            var n, i;
            return null !== (i = null === (n = P(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== i ? i : null
        }
    }
    Y.displayName = "StageChannelParticipantStore";
    var j = new Y(u.default, {
        CONNECTION_OPEN: k,
        OVERLAY_INITIALIZE: k,
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e, n = new Set;
            return t.reduce((e, t) => {
                if (null == t.guildId || !N.has(t.guildId)) return e;
                let i = new Set;
                return (V(n, i, t.oldChannelId), V(n, i, t.channelId), 0 === i.size) ? e : U(t.userId, Array.from(i)) || e
            }, !1)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: {
                    id: t
                }
            } = e;
            return w(t)
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            let {
                members: t
            } = e, n = !1;
            for (let e of t) n = U(e.user.id) || n;
            return n
        },
        USER_UPDATE: G,
        GUILD_MEMBER_REMOVE: G,
        GUILD_MEMBER_UPDATE: G,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = t.reduce((e, t) => {
                if (!t.isGuildStageVoice() || !N.has(t.guild_id)) return e;
                let n = y.get(t.id);
                return null == n || s(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), y.set(t.id, t), e)
            }, []);
            return b(e => e.rebuild(), n), n.length > 0
        },
        GUILD_ROLE_UPDATE: function(e) {
            let {
                guildId: t
            } = e;
            if (N.has(t)) return b(e => e.rebuild(), O(t))
        },
        RTC_CONNECTION_VIDEO: function(e) {
            let {
                channelId: t,
                guildId: n,
                userId: i
            } = e;
            return !!(null != n && N.has(n)) && U(i, [t])
        },
        STREAM_CLOSE: B,
        STREAM_DELETE: B,
        RELATIONSHIP_ADD: F,
        RELATIONSHIP_REMOVE: F,
        GUILD_CREATE: x,
        GUILD_DELETE: x,
        PASSIVE_UPDATE_V1: function(e) {
            let t = !1;
            for (let n of O(e.guildId)) t = M(n).rebuild() || t;
            return t
        }
    })
}