function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        EmbeddedActivityLaunchability: function() {
            return l
        },
        getEmbeddedActivityLaunchability: function() {
            return _
        },
        useEmbeddedActivityLaunchability: function() {
            return E
        },
        getEmbeddedActivityLaunchabilityLabel: function() {
            return I
        }
    });
    var n, l, a = i("446674"),
        u = i("42203"),
        r = i("305961"),
        d = i("957255"),
        s = i("126939"),
        o = i("702173"),
        c = i("49111"),
        f = i("782340");

    function _(t) {
        let {
            channelId: e,
            ChannelStore: i,
            GuildStore: n,
            PermissionStore: l
        } = t, a = i.getChannel(e);
        if (null == a) return 3;
        if (!(0, s.getIsActivitiesEnabledForCurrentPlatform)(a)) return 6;
        if (!(0, o.isPrivateChannelWithEnabledActivities)(a.id)) {
            let t = a.getGuildId();
            if (null == t) return 4;
            let e = n.getGuild(t);
            if ((null == e ? void 0 : e.afkChannelId) === a.id) return 5;
            let i = l.can(c.Permissions.CONNECT, a);
            if (!i) return 2;
            let u = l.can(c.Permissions.USE_EMBEDDED_ACTIVITIES, a);
            if (!u) return 1
        }
        return 0
    }

    function E(t) {
        let e = (0, a.useStateFromStores)([u.default, r.default, d.default], () => _({
            channelId: t,
            ChannelStore: u.default,
            GuildStore: r.default,
            PermissionStore: d.default
        }), [t]);
        return e
    }

    function I(t) {
        switch (t) {
            case 0:
                return f.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
            case 1:
                return f.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
            default:
                return f.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
        }
    }(n = l || (l = {}))[n.CAN_LAUNCH = 0] = "CAN_LAUNCH", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.NO_CHANNEL = 3] = "NO_CHANNEL", n[n.NO_GUILD = 4] = "NO_GUILD", n[n.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", n[n.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"
}