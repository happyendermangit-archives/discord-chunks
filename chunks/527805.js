function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmbeddedActivityJoinability: function() {
            return r
        },
        default: function() {
            return T
        },
        useEmbeddedActivityJoinability: function() {
            return f
        }
    });
    var i, r, a = n("442837"),
        s = n("592125"),
        o = n("430824"),
        l = n("496675"),
        u = n("594174"),
        d = n("979651"),
        _ = n("934415"),
        c = n("782769"),
        E = n("983695"),
        I = n("981631");

    function T(e) {
        var t, n, i;
        let {
            userId: r,
            activity: a,
            application: s,
            channelId: o,
            currentUser: l,
            isActivitiesEnabledForCurrentPlatform: u,
            ChannelStore: d,
            VoiceStateStore: c,
            PermissionStore: T,
            GuildStore: f
        } = e;
        if (null == r) return 8;
        if ((null == l ? void 0 : l.nsfwAllowed) === !1 && (null == s ? void 0 : null === (t = s.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0) return 7;
        if (!u) return 5;
        if (!(0, E.default)(null == s ? void 0 : null === (n = s.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms)) return 6;
        let S = null != o ? o : null === (i = c.getVoiceStateForSession(r, null == a ? void 0 : a.session_id)) || void 0 === i ? void 0 : i.channelId;
        if (null == S) return 4;
        let h = d.getChannel(o);
        if (null == h) return 4;
        let A = h.getGuildId();
        if (!h.isPrivate()) {
            if (null == A) return 10;
            let e = f.getGuild(A);
            if ((null == e ? void 0 : e.afkChannelId) === h.id) return 9;
            let t = c.getCurrentClientVoiceChannelId(h.getGuildId()) === S,
                n = (0, _.isChannelFull)(h, c, f),
                i = T.can(I.Permissions.CONNECT, h);
            if (!T.can(I.Permissions.USE_EMBEDDED_ACTIVITIES, h)) return 1;
            if (h.isVocal() && !t) {
                if (n) return 3;
                if (!i) return 2
            }
        }
        return 0
    }

    function f(e) {
        let {
            userId: t,
            activity: n,
            channelId: i,
            application: r
        } = e, _ = (0, c.useIsActivitiesEnabledForCurrentPlatform)(null != i ? i : void 0), E = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser());
        return (0, a.useStateFromStores)([s.default, d.default, l.default, o.default], () => T({
            userId: t,
            activity: n,
            application: r,
            channelId: i,
            currentUser: E,
            isActivitiesEnabledForCurrentPlatform: _,
            ChannelStore: s.default,
            VoiceStateStore: d.default,
            PermissionStore: l.default,
            GuildStore: o.default
        }), [n, r, i, E, _, t])
    }(i = r || (r = {}))[i.CAN_JOIN = 0] = "CAN_JOIN", i[i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", i[i.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", i[i.CHANNEL_FULL = 3] = "CHANNEL_FULL", i[i.NO_CHANNEL = 4] = "NO_CHANNEL", i[i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", i[i.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", i[i.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", i[i.NO_USER = 8] = "NO_USER", i[i.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", i[i.NO_GUILD = 10] = "NO_GUILD"
}