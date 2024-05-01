function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmbeddedActivityLaunchability: function() {
            return r
        },
        getEmbeddedActivityLaunchability: function() {
            return E
        },
        getEmbeddedActivityLaunchabilityLabel: function() {
            return T
        },
        useEmbeddedActivityLaunchability: function() {
            return I
        }
    });
    var i, r, a = n("442837"),
        s = n("592125"),
        o = n("430824"),
        l = n("496675"),
        u = n("782769"),
        d = n("451576"),
        _ = n("981631"),
        c = n("689938");

    function E(e) {
        let {
            channelId: t,
            ChannelStore: n,
            GuildStore: i,
            PermissionStore: r
        } = e, a = n.getChannel(t);
        if (null == a) return 3;
        if (!(0, u.getIsActivitiesEnabledForCurrentPlatform)(a)) return 6;
        if (!(0, d.isPrivateChannelWithEnabledActivities)(a.id)) {
            let e = a.getGuildId();
            if (null == e) return 4;
            let t = i.getGuild(e);
            if ((null == t ? void 0 : t.afkChannelId) === a.id) return 5;
            if (!r.can(_.Permissions.CONNECT, a)) return 2;
            if (!r.can(_.Permissions.USE_EMBEDDED_ACTIVITIES, a)) return 1
        }
        return 0
    }

    function I(e) {
        return (0, a.useStateFromStores)([s.default, o.default, l.default], () => E({
            channelId: e,
            ChannelStore: s.default,
            GuildStore: o.default,
            PermissionStore: l.default
        }), [e])
    }

    function T(e) {
        switch (e) {
            case 0:
                return c.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
            case 1:
                return c.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
            default:
                return c.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
        }
    }(i = r || (r = {}))[i.CAN_LAUNCH = 0] = "CAN_LAUNCH", i[i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", i[i.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", i[i.NO_CHANNEL = 3] = "NO_CHANNEL", i[i.NO_GUILD = 4] = "NO_GUILD", i[i.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", i[i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"
}