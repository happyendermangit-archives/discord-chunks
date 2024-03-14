function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007"), n("808653");
    var i, s, r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144"),
        u = n("42203"),
        d = n("923959"),
        c = n("26989"),
        f = n("305961"),
        _ = n("697218"),
        h = n("800762"),
        E = n("991170"),
        g = n("923510"),
        m = n("808422");
    (s = i || (i = {})).SPEAKER = "speaker", s.MODERATOR = "moderator";
    let p = {},
        S = {
            speaker: !1,
            moderator: !1
        };

    function v(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        null == p[t] && (p[t] = {});
        let i = function(e, t) {
            var n, i, s;
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = u.default.getChannel(t),
                o = null == a ? void 0 : a.getGuildId(),
                l = f.default.getGuild(o);
            if (null == l || null == a || !a.isGuildStageVoice()) return S;
            return {
                speaker: function(e, t) {
                    let n = h.default.getVoiceStateForChannel(t, e);
                    return (0, m.getAudienceRequestToSpeakState)(n) === m.RequestToSpeakStates.ON_STAGE
                }(e, t),
                moderator: r ? (n = e, i = l, s = a, E.default.can({
                    permission: g.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                    user: n,
                    context: i,
                    overwrites: s.permissionOverwrites,
                    roles: f.default.getRoles(i.id)
                })) : null
            }
        }(e, t, n);
        return p[t][e] = i, i
    }

    function T(e, t) {
        var n;
        if (null == t) return !1;
        let i = u.default.getChannel(t);
        return !!(null != i && i.isGuildStageVoice()) && (null === (n = p[t]) || void 0 === n || delete n[e], !0)
    }

    function I(e) {
        let t = d.default.getChannels(e)[d.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
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

    function C(e) {
        let {
            guildId: t,
            user: n
        } = e;
        return null != n && null != t && function(e, t) {
            for (let n in p) {
                let i = u.default.getBasicChannel(n);
                if (null != i) i.guild_id === t && delete p[n][e]
            }
            return !0
        }(n.id, t)
    }

    function A(e) {
        let {
            guild: t
        } = e;
        for (let e in p) {
            let n = u.default.getBasicChannel(e);
            (null == n || n.guild_id === t.id) && delete p[e]
        }
    }
    class y extends o.default.Store {
        initialize() {
            this.waitFor(c.default, u.default, f.default, _.default, h.default)
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
            if (null == e || null == t) return S;
            let s = null === (n = p[t]) || void 0 === n ? void 0 : n[e];
            if (null != s) return i && null == s.moderator ? v(e, t, !0) : s;
            return v(e, t, i)
        }
    }
    y.displayName = "StageChannelRoleStore";
    var N = new y(l.default, {
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            for (let e of t) delete p[e.id]
        },
        CONNECTION_OPEN: function() {
            p = {}
        },
        GUILD_MEMBER_REMOVE: C,
        GUILD_MEMBER_UPDATE: C,
        GUILD_ROLE_UPDATE: function(e) {
            let {
                guildId: t
            } = e;
            I(t)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t;
            let n = I(e.guildId);
            for (let i of null !== (t = e.voiceStates) && void 0 !== t ? t : []) n = T(i.userId, i.channelId) || n;
            return n
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return !a.isEmpty(p) && t.reduce((e, t) => {
                let {
                    userId: n,
                    channelId: i
                } = t;
                return T(n, i) || e
            }, !1)
        },
        GUILD_CREATE: A,
        GUILD_DELETE: A
    })
}