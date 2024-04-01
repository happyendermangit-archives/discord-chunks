function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458"), n("653041");
    var i, r, s, a, o = n("348327"),
        l = n.n(o),
        u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("759174"),
        E = n("570140"),
        I = n("569545"),
        T = n("199902"),
        f = n("314897"),
        S = n("592125"),
        h = n("430824"),
        A = n("496675"),
        m = n("699516"),
        N = n("606304"),
        O = n("594174"),
        p = n("979651"),
        R = n("938475"),
        C = n("501655"),
        g = n("88751"),
        L = n("427679");
    let D = "NO_GUILD",
        v = new c.SecondaryIndexMap(e => [function(e) {
            var t;
            return null !== (t = e.getGuildId()) && void 0 !== t ? t : D
        }(e)], e => e.id),
        M = new Set,
        y = {};

    function P(e) {
        return v.values(null != e ? e : void 0, !0).map(e => {
            let {
                id: t
            } = e;
            return t
        })
    }

    function U(e) {
        !M.has(e) && (M.add(e), d()(S.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
            w(e) && v.set(e.id, e)
        }))
    }

    function b(e) {
        let t = y[e];
        if (null != t) return t;
        let n = S.default.getChannel(e);
        return null != n && n.isGuildStageVoice() ? (U(n.guild_id), w(n)) ? G(e) : null : null
    }

    function G(e) {
        let t = y[e];
        return null == t && (t = new C.default(e), y[e] = t, t.rebuild()), t
    }

    function w(e) {
        return null != e && e.isGuildStageVoice() && R.default.countVoiceStatesForChannel(e.id) > 0
    }

    function B(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P();
        return t.reduce((t, n) => {
            let i = G(n);
            return e(i) ? (! function(e, t) {
                let n = S.default.getChannel(e);
                null != n && n.isGuildStageVoice() ? 0 === t.size() ? V(n.id) : null == v.get(n.id) && v.set(n.id, n) : V(e)
            }(n, i), !0) : t
        }, !1)
    }

    function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P();
        return B(t => t.updateParticipant(e), t)
    }

    function V(e) {
        return null != e && (delete y[e], v.delete(e), !0)
    }

    function F() {
        M.clear(), v.clear(), y = {}
    }

    function x(e, t, n) {
        if (null == n || e.has(n)) return;
        let i = S.default.getChannel(n);
        (null == i ? void 0 : i.isGuildStageVoice()) && (t.add(n), e.add(n))
    }

    function H(e) {
        let {
            user: t
        } = e;
        return k(t.id)
    }

    function Y(e) {
        let {
            relationship: t
        } = e;
        return k(t.id)
    }

    function j(e) {
        let {
            guild: t
        } = e;
        ! function(e) {
            for (let t of v.values(e)) v.delete(t.id), delete y[t.id];
            M.delete(e)
        }(t.id)
    }

    function W(e) {
        let {
            streamKey: t
        } = e, {
            channelId: n,
            guildId: i,
            ownerId: r
        } = (0, I.decodeStreamKey)(t);
        return !!(null != i && M.has(i)) && k(r, [n])
    }
    let K = [];
    class z extends(i = _.default.Store) {
        initialize() {
            this.waitFor(f.default, O.default, S.default, N.default, p.default, A.default, R.default, h.default, g.default, m.default, L.default, T.default)
        }
        getParticipantsVersion(e) {
            var t, n;
            return null == e ? -1 : null !== (n = null === (t = b(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
        }
        getMutableParticipants(e, t) {
            var n, i;
            return null == e ? K : null !== (i = null === (n = b(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== i ? i : K
        }
        getMutableRequestToSpeakParticipants(e) {
            var t, n;
            return null !== (n = null === (t = b(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : K
        }
        getRequestToSpeakParticipantsVersion(e) {
            var t, n;
            return null !== (n = null === (t = b(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
        }
        getParticipantCount(e, t) {
            var n, i;
            return null !== (i = null === (n = b(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== i ? i : 0
        }
        getChannels(e) {
            return U(null != e ? e : D), v.values(null != e ? e : D)
        }
        getChannelsVersion() {
            return v.version
        }
        getParticipant(e, t) {
            var n, i;
            return null !== (i = null === (n = b(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== i ? i : null
        }
    }
    a = "StageChannelParticipantStore", (s = "displayName") in(r = z) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new z(E.default, {
        CONNECTION_OPEN: F,
        OVERLAY_INITIALIZE: F,
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e, n = new Set;
            return t.reduce((e, t) => {
                if (null == t.guildId || !M.has(t.guildId)) return e;
                let i = new Set;
                return (x(n, i, t.oldChannelId), x(n, i, t.channelId), 0 === i.size) ? e : k(t.userId, Array.from(i)) || e
            }, !1)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: {
                    id: t
                }
            } = e;
            return V(t)
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            let {
                members: t
            } = e, n = !1;
            for (let e of t) n = k(e.user.id) || n;
            return n
        },
        USER_UPDATE: H,
        GUILD_MEMBER_REMOVE: H,
        GUILD_MEMBER_UPDATE: H,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = t.reduce((e, t) => {
                if (!t.isGuildStageVoice() || !M.has(t.guild_id)) return e;
                let n = v.get(t.id);
                return null == n || l()(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), v.set(t.id, t), e)
            }, []);
            return B(e => e.rebuild(), n), n.length > 0
        },
        GUILD_ROLE_UPDATE: function(e) {
            let {
                guildId: t
            } = e;
            if (M.has(t)) return B(e => e.rebuild(), P(t))
        },
        RTC_CONNECTION_VIDEO: function(e) {
            let {
                channelId: t,
                guildId: n,
                userId: i
            } = e;
            return !!(null != n && M.has(n)) && k(i, [t])
        },
        STREAM_CLOSE: W,
        STREAM_DELETE: W,
        RELATIONSHIP_ADD: Y,
        RELATIONSHIP_REMOVE: Y,
        GUILD_CREATE: j,
        GUILD_DELETE: j,
        PASSIVE_UPDATE_V1: function(e) {
            let t = !1;
            for (let n of P(e.guildId)) t = G(n).rebuild() || t;
            return t
        }
    })
}