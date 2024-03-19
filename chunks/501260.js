function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        EmbeddedActivityJoinability: function() {
            return l
        },
        default: function() {
            return I
        },
        useEmbeddedActivityJoinability: function() {
            return A
        }
    });
    var n, l, a = i("446674"),
        u = i("42203"),
        r = i("305961"),
        d = i("957255"),
        s = i("697218"),
        o = i("800762"),
        c = i("404008"),
        E = i("126939"),
        _ = i("803353"),
        f = i("49111");

    function I(t) {
        var e, i, n;
        let {
            userId: l,
            activity: a,
            application: u,
            channelId: r,
            currentUser: d,
            isActivitiesEnabledForCurrentPlatform: s,
            ChannelStore: o,
            VoiceStateStore: E,
            PermissionStore: I,
            GuildStore: A
        } = t;
        if (null == l) return 8;
        if ((null == d ? void 0 : d.nsfwAllowed) === !1 && (null == u ? void 0 : null === (e = u.embeddedActivityConfig) || void 0 === e ? void 0 : e.requires_age_gate) === !0) return 7;
        if (!s) return 5;
        if (!(0, _.default)(null == u ? void 0 : null === (i = u.embeddedActivityConfig) || void 0 === i ? void 0 : i.supported_platforms)) return 6;
        let T = null != r ? r : null === (n = E.getVoiceStateForSession(l, null == a ? void 0 : a.session_id)) || void 0 === n ? void 0 : n.channelId;
        if (null == T) return 4;
        let C = o.getChannel(r);
        if (null == C) return 4;
        let S = C.getGuildId();
        if (!C.isPrivate()) {
            if (null == S) return 10;
            let t = A.getGuild(S);
            if ((null == t ? void 0 : t.afkChannelId) === C.id) return 9;
            let e = E.getCurrentClientVoiceChannelId(C.getGuildId()) === T,
                i = (0, c.isChannelFull)(C, E, A),
                n = I.can(f.Permissions.CONNECT, C),
                l = I.can(f.Permissions.USE_EMBEDDED_ACTIVITIES, C);
            if (!l) return 1;
            if (C.isVocal() && !e) {
                if (i) return 3;
                if (!n) return 2
            }
        }
        return 0
    }

    function A(t) {
        let {
            userId: e,
            activity: i,
            channelId: n,
            application: l
        } = t, c = (0, E.useIsActivitiesEnabledForCurrentPlatform)(null != n ? n : void 0), _ = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()), f = (0, a.useStateFromStores)([u.default, o.default, d.default, r.default], () => I({
            userId: e,
            activity: i,
            application: l,
            channelId: n,
            currentUser: _,
            isActivitiesEnabledForCurrentPlatform: c,
            ChannelStore: u.default,
            VoiceStateStore: o.default,
            PermissionStore: d.default,
            GuildStore: r.default
        }), [i, l, n, _, c, e]);
        return f
    }(n = l || (l = {}))[n.CAN_JOIN = 0] = "CAN_JOIN", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.CHANNEL_FULL = 3] = "CHANNEL_FULL", n[n.NO_CHANNEL = 4] = "NO_CHANNEL", n[n.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", n[n.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", n[n.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", n[n.NO_USER = 8] = "NO_USER", n[n.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", n[n.NO_GUILD = 10] = "NO_GUILD"
}