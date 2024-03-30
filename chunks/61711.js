function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLastPlayedTimestamp: function() {
            return s
        },
        getTimePlayedLastWeek: function() {
            return l
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("388990"),
        a = n("523018"),
        u = n("941504");

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = o()(a.default.extractTimestamp(e.lastSessionId)),
            r = o()().diff(n, "s");
        if (r > 7 * i.default.Seconds.DAY) {
            var s = Math.round(r / (7 * i.default.Seconds.DAY));
            return t ? u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_WEEKS_AGO_SHORT.format({
                count: s
            }) : u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_WEEKS_AGO.format({
                count: s
            })
        }
        if (r > i.default.Seconds.DAY) {
            var l = Math.round(r / i.default.Seconds.DAY);
            return t ? u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_DAYS_AGO_SHORT.format({
                count: l
            }) : u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_DAYS_AGO.format({
                count: l
            })
        }
        if (r > i.default.Seconds.HOUR) {
            var c = Math.round(r / i.default.Seconds.HOUR);
            return t ? u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_HOURS_AGO_SHORT.format({
                count: c
            }) : u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_HOURS_AGO.format({
                count: c
            })
        } else {
            if (!(r > i.default.Seconds.MINUTE)) return t ? u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_SECONDS_AGO_SHORT.format({
                count: r
            }) : u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_SECONDS_AGO.format({
                count: r
            });
            var f = Math.round(r / i.default.Seconds.MINUTE);
            return t ? u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_MINUTES_AGO_SHORT.format({
                count: f
            }) : u.default.Messages.USER_RECENT_GAMES_LAST_PLAYED_MINUTES_AGO.format({
                count: f
            })
        }
    }

    function l(e) {
        var t = e.duration;
        if (t > i.default.Seconds.HOUR) {
            var n = parseFloat((t / i.default.Seconds.HOUR).toFixed(1));
            return u.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_HOURS.format({
                count: n
            })
        }
        if (!(t > i.default.Seconds.MINUTE)) return u.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_SECONDS.format({
            count: t
        });
        var r = Math.round(t / i.default.Seconds.MINUTE);
        return u.default.Messages.USER_RECENT_GAMES_PLAYED_LAST_WEEK_MINUTES.format({
            count: r
        })
    }
}