function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
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

    function _(e) {
        let {
            channelId: t,
            ChannelStore: i,
            GuildStore: n,
            PermissionStore: l
        } = e, a = i.getChannel(t);
        if (null == a) return 3;
        if (!(0, s.getIsActivitiesEnabledForCurrentPlatform)(a)) return 6;
        if (!(0, o.isPrivateChannelWithEnabledActivities)(a.id)) {
            let e = a.getGuildId();
            if (null == e) return 4;
            let t = n.getGuild(e);
            if ((null == t ? void 0 : t.afkChannelId) === a.id) return 5;
            let i = l.can(c.Permissions.CONNECT, a);
            if (!i) return 2;
            let u = l.can(c.Permissions.USE_EMBEDDED_ACTIVITIES, a);
            if (!u) return 1
        }
        return 0
    }

    function E(e) {
        let t = (0, a.useStateFromStores)([u.default, r.default, d.default], () => _({
            channelId: e,
            ChannelStore: u.default,
            GuildStore: r.default,
            PermissionStore: d.default
        }), [e]);
        return t
    }

    function I(e) {
        switch (e) {
            case 0:
                return f.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
            case 1:
                return f.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
            default:
                return f.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
        }
    }(n = l || (l = {}))[n.CAN_LAUNCH = 0] = "CAN_LAUNCH", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.NO_CHANNEL = 3] = "NO_CHANNEL", n[n.NO_GUILD = 4] = "NO_GUILD", n[n.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", n[n.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"
}