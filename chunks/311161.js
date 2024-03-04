function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DATE_CONFIG: function() {
            return d
        },
        hasDetectedActivity: function() {
            return s
        },
        hasDetectedRaid: function() {
            return o
        },
        hasDetectedDMRaid: function() {
            return c
        },
        getIncidentAlertType: function() {
            return f
        },
        getEnabledInterventions: function() {
            return _
        },
        getDisabledInterventions: function() {
            return E
        },
        isUnderLockdown: function() {
            return A
        },
        hasDMsDisabled: function() {
            return h
        },
        hasInvitesDisabled: function() {
            return v
        },
        getSecurityActionDetailsString: function() {
            return I
        }
    }), n("424973");
    var l = n("866227"),
        i = n.n(l),
        r = n("712125"),
        u = n("421127"),
        a = n("782340");
    let d = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    };

    function s(e) {
        return null != e.dmSpamDetectedAt && i(e.dmSpamDetectedAt).add(u.NAGBAR_DISPLAY_MAX_HOURS, "hours") > i() || null != e.raidDetectedAt && i(e.raidDetectedAt).add(u.NAGBAR_DISPLAY_MAX_HOURS, "hours") > i()
    }

    function o(e) {
        return null != e.raidDetectedAt && i(e.raidDetectedAt).add(u.NAGBAR_DISPLAY_MAX_HOURS, "hours") > i()
    }

    function c(e) {
        return null != e.dmSpamDetectedAt && i(e.dmSpamDetectedAt).add(u.NAGBAR_DISPLAY_MAX_HOURS, "hours") > i()
    }

    function f(e) {
        return null == e ? void 0 : o(e) ? r.GuildIncidentAlertTypes.JOIN_RAID : r.GuildIncidentAlertTypes.DM_RAID
    }

    function _(e, t) {
        let n = [];
        return e && n.push(r.GuildIncidentActionTypes.INVITES_DISABLED), t && n.push(r.GuildIncidentActionTypes.DMS_DISABLED), n
    }

    function E(e, t) {
        let n = [];
        return !e && n.push(r.GuildIncidentActionTypes.INVITES_DISABLED), !t && n.push(r.GuildIncidentActionTypes.DMS_DISABLED), n
    }

    function A(e) {
        return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
    }

    function h(e) {
        return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
    }

    function v(e) {
        return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
    }

    function I(e, t) {
        var n;
        let l = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
        if (null == l) return "";
        let i = null != e.dmsDisabledUntil,
            r = null != e.invitesDisabledUntil;
        switch (!0) {
            case i && r:
                return a.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(l).toLocaleString(a.default.getLocale(), d)
                });
            case i:
                return a.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(l).toLocaleString(a.default.getLocale(), d)
                });
            case r:
                return a.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(l).toLocaleString(a.default.getLocale(), d)
                });
            default:
                return ""
        }
    }
}