function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        accessibilityLabelCalendarFormat: function() {
            return y
        },
        calendarFormat: function() {
            return E
        },
        dateFormat: function() {
            return _
        },
        diffAsUnits: function() {
            return h
        },
        isSameDay: function() {
            return f
        },
        isWithinInterval: function() {
            return d
        },
        unitsAsStrings: function() {
            return O
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("281895"),
        a = n("225098"),
        u = 864e5,
        s = Object.create(null);

    function l(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e.getTime();
        return !t && (n -= 6e4 * e.getTimezoneOffset()), Math.floor(n / u) * u
    }

    function c(e, t) {
        return Math.floor((l(e, !1) - l(t, !1)) / u)
    }

    function f(e, t) {
        return Math.abs(+e - +t) <= u && e.getDate() === t.getDate()
    }

    function d(e, t, n) {
        return Math.abs(e.valueOf() - t.valueOf()) < n
    }

    function _(e, t) {
        var n = p(e).locale(),
            r = "".concat(n, ":").concat(t),
            o = s[r];
        return null == o && (o = s[r] = (0, i.default)(t)), o(m(e))
    }

    function E(e) {
        var t, n = o().localeData(),
            r = o()(),
            i = c(m(e), r.toDate());
        return i < -1 ? _(e, "L LT") : (t = i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : "sameElse", _(e, n.calendar(t, p(e), r)))
    }

    function p(e) {
        return o().isMoment(e) ? e : o()(e)
    }

    function m(e) {
        return o().isMoment(e) ? e.toDate() : e
    }

    function y(e) {
        var t, n = o().localeData(),
            r = new Date,
            i = c(e, r);
        return "sameElse" == (t = i < -1 ? "sameElse" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : "sameElse") ? _(e, "LLL") : _(e, n.calendar(t, o()(e), o()(r)))
    }
    a.default.addChangeListener(function() {
        s = Object.create(null)
    });
    var I = [{
        key: "days",
        millisecondsInUnit: 864e5
    }, {
        key: "hours",
        millisecondsInUnit: 36e5
    }, {
        key: "minutes",
        millisecondsInUnit: 6e4
    }, {
        key: "seconds",
        millisecondsInUnit: 1e3
    }];

    function h(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: n ? 1 : 0
            };
        if (e > t || n && Number(e) + 1200 > Number(t)) return r;
        var o = Number(t) - Number(e);
        return I.forEach(function(e) {
            var t = e.key,
                n = e.millisecondsInUnit;
            r[t] = Math.floor(o / n), o -= r[t] * n
        }), r
    }

    function O(e, t) {
        return e.days > 0 ? t.days.format({
            days: e.days,
            hours: e.hours
        }) : e.hours > 0 ? t.hours.format({
            hours: e.hours,
            minutes: e.minutes
        }) : t.minutes.format({
            minutes: Math.max(1, e.minutes)
        })
    }
}