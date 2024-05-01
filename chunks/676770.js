function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_LOCKDOWN_DURATION: function() {
            return o
        },
        IncidentAlertModeratorPermissions: function() {
            return u
        },
        NAGBAR_DISPLAY_MAX_HOURS: function() {
            return s
        },
        getTimeframes: function() {
            return l
        }
    });
    var i = n("149765"),
        r = n("231338"),
        a = n("689938");
    let s = 2,
        o = 2,
        l = () => [{
            value: 1,
            label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
        }, {
            value: 2,
            label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
        }, {
            value: 4,
            label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
        }, {
            value: 6,
            label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
        }, {
            value: 12,
            label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
        }, {
            value: 24,
            label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
        }],
        u = i.combine(r.Permissions.ADMINISTRATOR, r.Permissions.MANAGE_GUILD, r.Permissions.BAN_MEMBERS, r.Permissions.KICK_MEMBERS, r.Permissions.MODERATE_MEMBERS)
}