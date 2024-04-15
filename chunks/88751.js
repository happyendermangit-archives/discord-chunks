function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458");
    var i, r, s, a, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140"),
        E = n("592125"),
        I = n("984933"),
        T = n("271383"),
        f = n("430824"),
        S = n("594174"),
        h = n("979651"),
        A = n("700785"),
        m = n("146085"),
        N = n("590415");
    (s = i || (i = {})).SPEAKER = "speaker", s.MODERATOR = "moderator";
    let p = {},
        O = {
            speaker: !1,
            moderator: !1
        };

    function R(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        null == p[t] && (p[t] = {});
        let i = function(e, t) {
            var n, i, r;
            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = E.default.getChannel(t),
                o = null == a ? void 0 : a.getGuildId(),
                l = f.default.getGuild(o);
            if (null == l || null == a || !a.isGuildStageVoice()) return O;
            return {
                speaker: function(e, t) {
                    let n = h.default.getVoiceStateForChannel(t, e);
                    return (0, N.getAudienceRequestToSpeakState)(n) === N.RequestToSpeakStates.ON_STAGE
                }(e, t),
                moderator: s ? (n = e, i = l, r = a, A.can({
                    permission: m.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                    user: n,
                    context: i,
                    overwrites: r.permissionOverwrites,
                    roles: f.default.getRoles(i.id)
                })) : null
            }
        }(e, t, n);
        return p[t][e] = i, i
    }

    function C(e, t) {
        var n;
        if (null == t) return !1;
        let i = E.default.getChannel(t);
        return !!(null != i && i.isGuildStageVoice()) && (null === (n = p[t]) || void 0 === n || delete n[e], !0)
    }

    function g(e) {
        let t = I.default.getChannels(e)[I.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
            let {
                channel: t
            } = e;
            return t.isGuildStageVoice()
        });
        for (let {
                channel: e
            }
            of t) delete p[e.id];
        return t.length > 0
    }

    function L(e) {
        let {
            guildId: t,
            user: n
        } = e;
        return null != n && null != t && function(e, t) {
            for (let n in p) {
                let i = E.default.getBasicChannel(n);
                if (null != i) i.guild_id === t && delete p[n][e]
            }
            return !0
        }(n.id, t)
    }

    function D(e) {
        let {
            guild: t
        } = e;
        for (let e in p) {
            let n = E.default.getBasicChannel(e);
            (null == n || n.guild_id === t.id) && delete p[e]
        }
    }
    class v extends(r = _.default.Store) {
        initialize() {
            this.waitFor(T.default, E.default, f.default, S.default, h.default)
        }
        isSpeaker(e, t) {
            return this.getPermissionsForUser(e, t).speaker
        }
        isModerator(e, t) {
            var n;
            return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n
        }
        isAudienceMember(e, t) {
            let n = this.getPermissionsForUser(e, t);
            return !n.speaker && !n.moderator
        }
        getPermissionsForUser(e, t) {
            var n;
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return O;
            let r = null === (n = p[t]) || void 0 === n ? void 0 : n[e];
            if (null != r) return i && null == r.moderator ? R(e, t, !0) : r;
            return R(e, t, i)
        }
    }
    l = "StageChannelRoleStore", (o = "displayName") in(a = v) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new v(c.default, {
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            for (let e of t) delete p[e.id]
        },
        CONNECTION_OPEN: function() {
            p = {}
        },
        GUILD_MEMBER_REMOVE: L,
        GUILD_MEMBER_UPDATE: L,
        GUILD_ROLE_UPDATE: function(e) {
            let {
                guildId: t
            } = e;
            g(t)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t;
            let n = g(e.guildId);
            for (let i of null !== (t = e.voiceStates) && void 0 !== t ? t : []) n = C(i.userId, i.channelId) || n;
            return n
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return !d().isEmpty(p) && t.reduce((e, t) => {
                let {
                    userId: n,
                    channelId: i
                } = t;
                return C(n, i) || e
            }, !1)
        },
        GUILD_CREATE: D,
        GUILD_DELETE: D
    })
}