function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: function() {
            return _
        },
        DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY: function() {
            return f
        },
        DisableCommunicationDuration: function() {
            return o
        },
        GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: function() {
            return c
        },
        MAX_REASON_LENGTH: function() {
            return E
        },
        SET_COMMUNICATION_DISABLED_MODAL_NAME: function() {
            return d
        },
        getDisableCommunicationDurationOptions: function() {
            return l
        },
        getFriendlyDurationString: function() {
            return s
        }
    });
    var r, o, i = n("481971"),
        a = n("281767"),
        u = n("941504");

    function s(e) {
        switch (e) {
            case 60:
                return u.default.Messages.DURATION_SECS.format({
                    secs: 60
                });
            case 300:
                return u.default.Messages.DURATION_MINS.format({
                    mins: 5
                });
            case 600:
                return u.default.Messages.DURATION_MINS.format({
                    mins: 10
                });
            case 3600:
                return u.default.Messages.DURATION_HOURS.format({
                    hours: 1
                });
            case 86400:
                return u.default.Messages.DURATION_DAYS.format({
                    days: 1
                });
            case 604800:
                return u.default.Messages.DURATION_WEEKS.format({
                    weeks: 1
                });
            default:
                return
        }
    }(r = o || (o = {}))[r.DURATION_60_SEC = 60] = "DURATION_60_SEC", r[r.DURATION_5_MIN = 300] = "DURATION_5_MIN", r[r.DURATION_10_MIN = 600] = "DURATION_10_MIN", r[r.DURATION_1_HOUR = 3600] = "DURATION_1_HOUR", r[r.DURATION_1_DAY = 86400] = "DURATION_1_DAY", r[r.DURATION_1_WEEK = 604800] = "DURATION_1_WEEK";
    var l = function() {
            return Object.keys(o).filter(function(e) {
                return isNaN(Number(e))
            }).map(function(e) {
                var t;
                return {
                    label: null !== (t = s(o[e])) && void 0 !== t ? t : "",
                    value: o[e]
                }
            })
        },
        c = i.default.getArticleURL(a.HelpdeskArticles.DISABLE_GUILD_COMMUNICATION),
        f = "GuildCommunicationDisabledDismissedGuilds",
        d = "Set Communication Disabled Modal",
        _ = "Clear Communication Disabled Modal",
        E = 512
}