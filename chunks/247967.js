function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_LOCKDOWN_DURATION: function() {
            return u
        },
        IncidentAlertModeratorPermissions: function() {
            return l
        },
        NAGBAR_DISPLAY_MAX_HOURS: function() {
            return a
        },
        getTimeframes: function() {
            return s
        }
    });
    var r = n("22287"),
        o = n("563090"),
        i = n("941504"),
        a = 2,
        u = 2,
        s = function() {
            return [{
                value: 1,
                label: i.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
            }, {
                value: 2,
                label: i.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
            }, {
                value: 4,
                label: i.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
            }, {
                value: 6,
                label: i.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
            }, {
                value: 12,
                label: i.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
            }, {
                value: 24,
                label: i.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
            }]
        },
        l = r.combine(o.Permissions.ADMINISTRATOR, o.Permissions.MANAGE_GUILD, o.Permissions.BAN_MEMBERS, o.Permissions.KICK_MEMBERS, o.Permissions.MODERATE_MEMBERS)
}