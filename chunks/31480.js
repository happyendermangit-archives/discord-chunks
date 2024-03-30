function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DATE_CONFIG: function() {
            return s
        },
        getDisabledInterventions: function() {
            return E
        },
        getEnabledInterventions: function() {
            return _
        },
        getIncidentAlertType: function() {
            return d
        },
        getSecurityActionDetailsString: function() {
            return I
        },
        hasDMsDisabled: function() {
            return m
        },
        hasDetectedActivity: function() {
            return l
        },
        hasDetectedDMRaid: function() {
            return f
        },
        hasDetectedRaid: function() {
            return c
        },
        hasInvitesDisabled: function() {
            return y
        },
        isUnderLockdown: function() {
            return p
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("603246"),
        a = n("247967"),
        u = n("941504"),
        s = {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        };

    function l(e) {
        return null != e.dmSpamDetectedAt && o()(e.dmSpamDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > o()() || null != e.raidDetectedAt && o()(e.raidDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > o()()
    }

    function c(e) {
        return null != e.raidDetectedAt && o()(e.raidDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > o()()
    }

    function f(e) {
        return null != e.dmSpamDetectedAt && o()(e.dmSpamDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > o()()
    }

    function d(e) {
        return null == e ? void 0 : c(e) ? i.GuildIncidentAlertTypes.JOIN_RAID : i.GuildIncidentAlertTypes.DM_RAID
    }

    function _(e, t) {
        var n = [];
        return e && n.push(i.GuildIncidentActionTypes.INVITES_DISABLED), t && n.push(i.GuildIncidentActionTypes.DMS_DISABLED), n
    }

    function E(e, t) {
        var n = [];
        return !e && n.push(i.GuildIncidentActionTypes.INVITES_DISABLED), !t && n.push(i.GuildIncidentActionTypes.DMS_DISABLED), n
    }

    function p(e) {
        return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
    }

    function m(e) {
        return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
    }

    function y(e) {
        return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
    }

    function I(e, t) {
        var n, r = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
        if (null == r) return "";
        var o = null != e.dmsDisabledUntil,
            i = null != e.invitesDisabledUntil;
        switch (!0) {
            case o && i:
                return u.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(r).toLocaleString(u.default.getLocale(), s)
                });
            case o:
                return u.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(r).toLocaleString(u.default.getLocale(), s)
                });
            case i:
                return u.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(r).toLocaleString(u.default.getLocale(), s)
                });
            default:
                return ""
        }
    }
}