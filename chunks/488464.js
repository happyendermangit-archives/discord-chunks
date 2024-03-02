function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return K
        }
    }), n("222007"), n("808653"), n("424973");
    var r = n("714617"),
        i = n.n(r),
        l = n("917351"),
        u = n.n(l),
        a = n("446674"),
        o = n("407846"),
        s = n("913144"),
        d = n("374014"),
        E = n("373469"),
        _ = n("271938"),
        c = n("42203"),
        I = n("305961"),
        S = n("957255"),
        T = n("27618"),
        f = n("280168"),
        p = n("697218"),
        N = n("800762"),
        A = n("316133"),
        R = n("998716"),
        C = n("325861"),
        L = n("834052");
    let O = "NO_GUILD",
        h = new o.default(e => [function(e) {
            var t;
            return null !== (t = e.getGuildId()) && void 0 !== t ? t : O
        }(e)], e => e.id),
        P = new Set,
        g = {};

    function m(e) {
        return h.values(null != e ? e : void 0, !0).map(e => {
            let {
                id: t
            } = e;
            return t
        })
    }

    function y(e) {
        !P.has(e) && (P.add(e), u(c.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
            U(e) && h.set(e.id, e)
        }))
    }

    function D(e) {
        let t = g[e];
        if (null != t) return t;
        let n = c.default.getChannel(e);
        return null != n && n.isGuildStageVoice() ? (y(n.guild_id), U(n)) ? v(e) : null : null
    }

    function v(e) {
        let t = g[e];
        return null == t && (t = new R.default(e), g[e] = t, t.rebuild()), t
    }

    function U(e) {
        return null != e && e.isGuildStageVoice() && A.default.countVoiceStatesForChannel(e.id) > 0
    }

    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
        return t.reduce((t, n) => {
            let r = v(n),
                i = e(r);
            return i ? (! function(e, t) {
                let n = c.default.getChannel(e);
                null != n && n.isGuildStageVoice() ? 0 === t.size() ? B(n.id) : null == h.get(n.id) && h.set(n.id, n) : B(e)
            }(n, r), !0) : t
        }, !1)
    }

    function G(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
        return M(t => t.updateParticipant(e), t)
    }

    function B(e) {
        return null != e && (delete g[e], h.delete(e), !0)
    }

    function w() {
        P.clear(), h.clear(), g = {}
    }

    function b(e, t, n) {
        if (null == n || e.has(n)) return;
        let r = c.default.getChannel(n);
        (null == r ? void 0 : r.isGuildStageVoice()) && (t.add(n), e.add(n))
    }

    function F(e) {
        let {
            user: t
        } = e;
        return G(t.id)
    }

    function V(e) {
        let {
            relationship: t
        } = e;
        return G(t.id)
    }

    function x(e) {
        let {
            guild: t
        } = e;
        ! function(e) {
            let t = h.values(e);
            for (let e of t) h.delete(e.id), delete g[e.id];
            P.delete(e)
        }(t.id)
    }

    function H(e) {
        let {
            streamKey: t
        } = e, {
            channelId: n,
            guildId: r,
            ownerId: i
        } = (0, d.decodeStreamKey)(t);
        return !!(null != r && P.has(r)) && G(i, [n])
    }
    let k = [];
    class Y extends a.default.Store {
        initialize() {
            this.waitFor(_.default, p.default, c.default, f.default, N.default, S.default, A.default, I.default, C.default, T.default, L.default, E.default)
        }
        getParticipantsVersion(e) {
            var t, n;
            return null == e ? -1 : null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
        }
        getMutableParticipants(e, t) {
            var n, r;
            return null == e ? k : null !== (r = null === (n = D(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : k
        }
        getMutableRequestToSpeakParticipants(e) {
            var t, n;
            return null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : k
        }
        getRequestToSpeakParticipantsVersion(e) {
            var t, n;
            return null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
        }
        getParticipantCount(e, t) {
            var n, r;
            return null !== (r = null === (n = D(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0
        }
        getChannels(e) {
            return y(null != e ? e : O), h.values(null != e ? e : O)
        }
        getChannelsVersion() {
            return h.version
        }
        getParticipant(e, t) {
            var n, r;
            return null !== (r = null === (n = D(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null
        }
    }
    Y.displayName = "StageChannelParticipantStore";
    var K = new Y(s.default, {
        CONNECTION_OPEN: w,
        OVERLAY_INITIALIZE: w,
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e, n = new Set;
            return t.reduce((e, t) => {
                if (null == t.guildId || !P.has(t.guildId)) return e;
                let r = new Set;
                return (b(n, r, t.oldChannelId), b(n, r, t.channelId), 0 === r.size) ? e : G(t.userId, Array.from(r)) || e
            }, !1)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: {
                    id: t
                }
            } = e;
            return B(t)
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            let {
                members: t
            } = e, n = !1;
            for (let e of t) n = G(e.user.id) || n;
            return n
        },
        USER_UPDATE: F,
        GUILD_MEMBER_REMOVE: F,
        GUILD_MEMBER_UPDATE: F,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = t.reduce((e, t) => {
                if (!t.isGuildStageVoice() || !P.has(t.guild_id)) return e;
                let n = h.get(t.id);
                return null == n || i(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), h.set(t.id, t), e)
            }, []);
            return M(e => e.rebuild(), n), n.length > 0
        },
        GUILD_ROLE_UPDATE: function(e) {
            let {
                guildId: t
            } = e;
            if (P.has(t)) return M(e => e.rebuild(), m(t))
        },
        RTC_CONNECTION_VIDEO: function(e) {
            let {
                channelId: t,
                guildId: n,
                userId: r
            } = e;
            return !!(null != n && P.has(n)) && G(r, [t])
        },
        STREAM_CLOSE: H,
        STREAM_DELETE: H,
        RELATIONSHIP_ADD: V,
        RELATIONSHIP_REMOVE: V,
        GUILD_CREATE: x,
        GUILD_DELETE: x,
        PASSIVE_UPDATE_V1: function(e) {
            let t = !1;
            for (let n of m(e.guildId)) t = v(n).rebuild() || t;
            return t
        }
    })
}