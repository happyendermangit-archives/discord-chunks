function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLastPlayedTimestamp: function() {
            return l
        },
        getTimePlayedLastWeek: function() {
            return u
        }
    });
    var i = n("913527"),
        r = n.n(i),
        s = n("70956"),
        a = n("709054"),
        o = n("689938");

    function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = r()(a.default.extractTimestamp(e.lastSessionId)),
            i = r()().diff(n, "s");
        if (i > 7 * s.default.Seconds.DAY) {
            let e = Math.round(i / (7 * s.default.Seconds.DAY));
            return t ? o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_WEEKS_AGO_SHORT.format({
                count: e
            }) : o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_WEEKS_AGO.format({
                count: e
            })
        }
        if (i > s.default.Seconds.DAY) {
            let e = Math.round(i / s.default.Seconds.DAY);
            return t ? o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_DAYS_AGO_SHORT.format({
                count: e
            }) : o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_DAYS_AGO.format({
                count: e
            })
        }
        if (i > s.default.Seconds.HOUR) {
            let e = Math.round(i / s.default.Seconds.HOUR);
            return t ? o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_HOURS_AGO_SHORT.format({
                count: e
            }) : o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_HOURS_AGO.format({
                count: e
            })
        } else {
            if (!(i > s.default.Seconds.MINUTE)) return t ? o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_SECONDS_AGO_SHORT.format({
                count: i
            }) : o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_SECONDS_AGO.format({
                count: i
            });
            let e = Math.round(i / s.default.Seconds.MINUTE);
            return t ? o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_MINUTES_AGO_SHORT.format({
                count: e
            }) : o.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_MINUTES_AGO.format({
                count: e
            })
        }
    }

    function u(e) {
        let t = e.duration;
        if (t > s.default.Seconds.HOUR) {
            let e = parseFloat((t / s.default.Seconds.HOUR).toFixed(1));
            return o.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_HOURS.format({
                count: e
            })
        }
        if (!(t > s.default.Seconds.MINUTE)) return o.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_SECONDS.format({
            count: t
        });
        {
            let e = Math.round(t / s.default.Seconds.MINUTE);
            return o.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_MINUTES.format({
                count: e
            })
        }
    }
}