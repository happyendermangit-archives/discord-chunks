function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: function() {
            return E
        },
        DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY: function() {
            return _
        },
        DisableCommunicationDuration: function() {
            return r
        },
        GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: function() {
            return d
        },
        MAX_REASON_LENGTH: function() {
            return I
        },
        SET_COMMUNICATION_DISABLED_MODAL_NAME: function() {
            return c
        },
        getDisableCommunicationDurationOptions: function() {
            return u
        },
        getFriendlyDurationString: function() {
            return l
        }
    });
    var i, r, s = n("63063"),
        a = n("981631"),
        o = n("689938");

    function l(e) {
        switch (e) {
            case 60:
                return o.default.Messages.DURATION_SECS.format({
                    secs: 60
                });
            case 300:
                return o.default.Messages.DURATION_MINS.format({
                    mins: 5
                });
            case 600:
                return o.default.Messages.DURATION_MINS.format({
                    mins: 10
                });
            case 3600:
                return o.default.Messages.DURATION_HOURS.format({
                    hours: 1
                });
            case 86400:
                return o.default.Messages.DURATION_DAYS.format({
                    days: 1
                });
            case 604800:
                return o.default.Messages.DURATION_WEEKS.format({
                    weeks: 1
                });
            default:
                return
        }
    }(i = r || (r = {}))[i.DURATION_60_SEC = 60] = "DURATION_60_SEC", i[i.DURATION_5_MIN = 300] = "DURATION_5_MIN", i[i.DURATION_10_MIN = 600] = "DURATION_10_MIN", i[i.DURATION_1_HOUR = 3600] = "DURATION_1_HOUR", i[i.DURATION_1_DAY = 86400] = "DURATION_1_DAY", i[i.DURATION_1_WEEK = 604800] = "DURATION_1_WEEK";
    let u = () => Object.keys(r).filter(e => isNaN(Number(e))).map(e => {
            var t;
            return {
                label: null !== (t = l(r[e])) && void 0 !== t ? t : "",
                value: r[e]
            }
        }),
        d = s.default.getArticleURL(a.HelpdeskArticles.DISABLE_GUILD_COMMUNICATION),
        _ = "GuildCommunicationDisabledDismissedGuilds",
        c = "Set Communication Disabled Modal",
        E = "Clear Communication Disabled Modal",
        I = 512
}