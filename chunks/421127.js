function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NAGBAR_DISPLAY_MAX_HOURS: function() {
            return u
        },
        DEFAULT_LOCKDOWN_DURATION: function() {
            return a
        },
        getTimeframes: function() {
            return d
        },
        IncidentAlertModeratorPermissions: function() {
            return s
        }
    });
    var l = n("316693"),
        i = n("843455"),
        r = n("782340");
    let u = 2,
        a = 2,
        d = () => [{
            value: 1,
            label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
        }, {
            value: 2,
            label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
        }, {
            value: 4,
            label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
        }, {
            value: 6,
            label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
        }, {
            value: 12,
            label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
        }, {
            value: 24,
            label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
        }],
        s = l.combine(i.Permissions.ADMINISTRATOR, i.Permissions.MANAGE_GUILD, i.Permissions.BAN_MEMBERS, i.Permissions.KICK_MEMBERS, i.Permissions.MODERATE_MEMBERS)
}