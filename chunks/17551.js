function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLastPlayedTimestamp: function() {
            return o
        },
        getTimePlayedLastWeek: function() {
            return u
        }
    });
    var i = n("866227"),
        l = n.n(i),
        a = n("718517"),
        s = n("299039"),
        r = n("782340");

    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = l(s.default.extractTimestamp(e.lastSessionId)),
            i = l().diff(n, "s");
        if (i > 7 * a.default.Seconds.DAY) {
            let e = Math.round(i / (7 * a.default.Seconds.DAY));
            return t ? r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_WEEKS_AGO_SHORT.format({
                count: e
            }) : r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_WEEKS_AGO.format({
                count: e
            })
        }
        if (i > a.default.Seconds.DAY) {
            let e = Math.round(i / a.default.Seconds.DAY);
            return t ? r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_DAYS_AGO_SHORT.format({
                count: e
            }) : r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_DAYS_AGO.format({
                count: e
            })
        }
        if (i > a.default.Seconds.HOUR) {
            let e = Math.round(i / a.default.Seconds.HOUR);
            return t ? r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_HOURS_AGO_SHORT.format({
                count: e
            }) : r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_HOURS_AGO.format({
                count: e
            })
        } else {
            if (!(i > a.default.Seconds.MINUTE)) return t ? r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_SECONDS_AGO_SHORT.format({
                count: i
            }) : r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_SECONDS_AGO.format({
                count: i
            });
            let e = Math.round(i / a.default.Seconds.MINUTE);
            return t ? r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_MINUTES_AGO_SHORT.format({
                count: e
            }) : r.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_MINUTES_AGO.format({
                count: e
            })
        }
    }

    function u(e) {
        let t = e.duration;
        if (t > a.default.Seconds.HOUR) {
            let e = parseFloat((t / a.default.Seconds.HOUR).toFixed(1));
            return r.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_HOURS.format({
                count: e
            })
        }
        if (!(t > a.default.Seconds.MINUTE)) return r.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_SECONDS.format({
            count: t
        });
        {
            let e = Math.round(t / a.default.Seconds.MINUTE);
            return r.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_MINUTES.format({
                count: e
            })
        }
    }
}