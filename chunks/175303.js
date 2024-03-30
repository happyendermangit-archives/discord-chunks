function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmbeddedActivityJoinability: function() {
            return o
        },
        default: function() {
            return p
        },
        useEmbeddedActivityJoinability: function() {
            return m
        }
    });
    var r, o, i = n("898511"),
        a = n("935741"),
        u = n("306912"),
        s = n("29884"),
        l = n("208454"),
        c = n("665863"),
        f = n("115752"),
        d = n("465059"),
        _ = n("677861"),
        E = n("281767");

    function p(e) {
        var t, n, r, o = e.userId,
            i = e.activity,
            a = e.application,
            u = e.channelId,
            s = e.currentUser,
            l = e.isActivitiesEnabledForCurrentPlatform,
            c = e.ChannelStore,
            d = e.VoiceStateStore,
            p = e.PermissionStore,
            m = e.GuildStore;
        if (null == o) return 8;
        if ((null == s ? void 0 : s.nsfwAllowed) === !1 && (null == a ? void 0 : null === (t = a.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0) return 7;
        if (!l) return 5;
        if (!(0, _.default)(null == a ? void 0 : null === (n = a.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms)) return 6;
        var y = null != u ? u : null === (r = d.getVoiceStateForSession(o, null == i ? void 0 : i.session_id)) || void 0 === r ? void 0 : r.channelId;
        if (null == y) return 4;
        var I = c.getChannel(u);
        if (null == I) return 4;
        var h = I.getGuildId();
        if (!I.isPrivate()) {
            if (null == h) return 10;
            var O = m.getGuild(h);
            if ((null == O ? void 0 : O.afkChannelId) === I.id) return 9;
            var T = d.getCurrentClientVoiceChannelId(I.getGuildId()) === y,
                S = (0, f.isChannelFull)(I, d, m),
                v = p.can(E.Permissions.CONNECT, I);
            if (!p.can(E.Permissions.USE_EMBEDDED_ACTIVITIES, I)) return 1;
            if (I.isVocal() && !T) {
                if (S) return 3;
                if (!v) return 2
            }
        }
        return 0
    }

    function m(e) {
        var t = e.userId,
            n = e.activity,
            r = e.channelId,
            o = e.application,
            f = (0, d.useIsActivitiesEnabledForCurrentPlatform)(null != r ? r : void 0),
            _ = (0, i.useStateFromStores)([l.default], function() {
                return l.default.getCurrentUser()
            });
        return (0, i.useStateFromStores)([a.default, c.default, s.default, u.default], function() {
            return p({
                userId: t,
                activity: n,
                application: o,
                channelId: r,
                currentUser: _,
                isActivitiesEnabledForCurrentPlatform: f,
                ChannelStore: a.default,
                VoiceStateStore: c.default,
                PermissionStore: s.default,
                GuildStore: u.default
            })
        }, [n, o, r, _, f, t])
    }(r = o || (o = {}))[r.CAN_JOIN = 0] = "CAN_JOIN", r[r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", r[r.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", r[r.CHANNEL_FULL = 3] = "CHANNEL_FULL", r[r.NO_CHANNEL = 4] = "NO_CHANNEL", r[r.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", r[r.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", r[r.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", r[r.NO_USER = 8] = "NO_USER", r[r.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", r[r.NO_GUILD = 10] = "NO_GUILD"
}