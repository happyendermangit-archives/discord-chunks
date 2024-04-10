function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DATE_CONFIG: function() {
            return l
        },
        getDisabledInterventions: function() {
            return I
        },
        getEnabledInterventions: function() {
            return E
        },
        getIncidentAlertType: function() {
            return c
        },
        getSecurityActionDetailsString: function() {
            return A
        },
        hasDMsDisabled: function() {
            return f
        },
        hasDetectedActivity: function() {
            return u
        },
        hasDetectedDMRaid: function() {
            return _
        },
        hasDetectedRaid: function() {
            return d
        },
        hasInvitesDisabled: function() {
            return S
        },
        isUnderLockdown: function() {
            return T
        }
    }), n("653041");
    var i = n("913527"),
        r = n.n(i),
        s = n("666657"),
        a = n("676770"),
        o = n("689938");
    let l = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    };

    function u(e) {
        return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()() || null != e.raidDetectedAt && r()(e.raidDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()()
    }

    function d(e) {
        return null != e.raidDetectedAt && r()(e.raidDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()()
    }

    function _(e) {
        return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()()
    }

    function c(e) {
        return null == e ? void 0 : d(e) ? s.GuildIncidentAlertTypes.JOIN_RAID : s.GuildIncidentAlertTypes.DM_RAID
    }

    function E(e, t) {
        let n = [];
        return e && n.push(s.GuildIncidentActionTypes.INVITES_DISABLED), t && n.push(s.GuildIncidentActionTypes.DMS_DISABLED), n
    }

    function I(e, t) {
        let n = [];
        return !e && n.push(s.GuildIncidentActionTypes.INVITES_DISABLED), !t && n.push(s.GuildIncidentActionTypes.DMS_DISABLED), n
    }

    function T(e) {
        return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
    }

    function f(e) {
        return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
    }

    function S(e) {
        return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
    }

    function A(e, t) {
        var n;
        let i = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
        if (null == i) return "";
        let r = null != e.dmsDisabledUntil,
            s = null != e.invitesDisabledUntil;
        switch (!0) {
            case r && s:
                return o.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(i).toLocaleString(o.default.getLocale(), l)
                });
            case r:
                return o.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(i).toLocaleString(o.default.getLocale(), l)
                });
            case s:
                return o.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                    guildName: t,
                    time: new Date(i).toLocaleString(o.default.getLocale(), l)
                });
            default:
                return ""
        }
    }
}