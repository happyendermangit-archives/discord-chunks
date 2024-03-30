function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        getAbbreviatedFormatter: function() {
            return c
        },
        getFullFormatter: function() {
            return f
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("941504"),
        a = 3600,
        u = 86400,
        s = 2592e3,
        l = 31104e3,
        c = function() {
            return {
                minutes: i.default.Messages.DURATION_MINUTES_SHORT,
                hours: i.default.Messages.DURATION_HOURS_SHORT,
                days: i.default.Messages.DURATION_DAYS_SHORT,
                months: i.default.Messages.DURATION_MONTHS_SHORT,
                years: i.default.Messages.DURATION_YEARS_SHORT
            }
        },
        f = function() {
            return {
                minutes: i.default.Messages.DURATION_MINUTES_AGO,
                hours: i.default.Messages.DURATION_HOURS_AGO,
                days: i.default.Messages.DURATION_DAYS_AGO,
                months: i.default.Messages.DURATION_MONTHS_AGO,
                years: i.default.Messages.DURATION_YEARS_AGO
            }
        };

    function d(e) {
        var t, n, r, i, c = e.since,
            f = e.getFormatter;
        return n = (t = {
            seconds: o()().diff(o()(c), "s"),
            getFormatter: f
        }).seconds, r = (0, t.getFormatter)(), i = "", i = n < 60 ? r.minutes.format({
            minutes: 1
        }) : n < a ? r.minutes.format({
            minutes: Math.floor(n / 60)
        }) : n < u ? r.hours.format({
            hours: Math.floor(n / a)
        }) : n < s ? r.days.format({
            days: Math.floor(n / u)
        }) : n < l ? r.months.format({
            months: Math.floor(n / s)
        }) : r.years.format({
            years: Math.floor(n / l)
        })
    }
}