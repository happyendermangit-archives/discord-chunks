function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmbeddedActivityLaunchability: function() {
            return o
        },
        getEmbeddedActivityLaunchability: function() {
            return _
        },
        getEmbeddedActivityLaunchabilityLabel: function() {
            return p
        },
        useEmbeddedActivityLaunchability: function() {
            return E
        }
    });
    var r, o, i = n("898511"),
        a = n("935741"),
        u = n("306912"),
        s = n("29884"),
        l = n("465059"),
        c = n("822904"),
        f = n("281767"),
        d = n("941504");

    function _(e) {
        var t = e.channelId,
            n = e.ChannelStore,
            r = e.GuildStore,
            o = e.PermissionStore,
            i = n.getChannel(t);
        if (null == i) return 3;
        if (!(0, l.getIsActivitiesEnabledForCurrentPlatform)(i)) return 6;
        if (!(0, c.isPrivateChannelWithEnabledActivities)(i.id)) {
            var a = i.getGuildId();
            if (null == a) return 4;
            var u = r.getGuild(a);
            if ((null == u ? void 0 : u.afkChannelId) === i.id) return 5;
            if (!o.can(f.Permissions.CONNECT, i)) return 2;
            if (!o.can(f.Permissions.USE_EMBEDDED_ACTIVITIES, i)) return 1
        }
        return 0
    }

    function E(e) {
        return (0, i.useStateFromStores)([a.default, u.default, s.default], function() {
            return _({
                channelId: e,
                ChannelStore: a.default,
                GuildStore: u.default,
                PermissionStore: s.default
            })
        }, [e])
    }

    function p(e) {
        switch (e) {
            case 0:
                return d.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
            case 1:
                return d.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
            default:
                return d.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
        }
    }(r = o || (o = {}))[r.CAN_LAUNCH = 0] = "CAN_LAUNCH", r[r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", r[r.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", r[r.NO_CHANNEL = 3] = "NO_CHANNEL", r[r.NO_GUILD = 4] = "NO_GUILD", r[r.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", r[r.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"
}