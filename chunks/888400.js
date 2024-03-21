function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSameDay: function() {
            return c
        },
        isWithinInterval: function() {
            return _
        },
        dateFormat: function() {
            return f
        },
        calendarFormat: function() {
            return E
        },
        accessibilityLabelCalendarFormat: function() {
            return m
        },
        diffAsUnits: function() {
            return S
        },
        unitsAsStrings: function() {
            return T
        }
    });
    var i = n("866227"),
        s = n.n(i),
        r = n("432959"),
        a = n("915639");
    let o = 864e5,
        l = Object.create(null);

    function u(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e.getTime();
        return !t && (n -= 6e4 * e.getTimezoneOffset()), Math.floor(n / o) * o
    }

    function d(e, t) {
        return Math.floor((u(e, !1) - u(t, !1)) / o)
    }

    function c(e, t) {
        return Math.abs(+e - +t) <= o && e.getDate() === t.getDate()
    }

    function _(e, t, n) {
        return Math.abs(e.valueOf() - t.valueOf()) < n
    }

    function f(e, t) {
        let n = h(e).locale(),
            i = "".concat(n, ":").concat(t),
            s = l[i];
        return null == s && (s = l[i] = (0, r.default)(t)), s(g(e))
    }

    function E(e) {
        let t;
        let n = s.localeData(),
            i = s(),
            r = d(g(e), i.toDate());
        return r < -1 ? f(e, "L LT") : (t = r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : "sameElse", f(e, n.calendar(t, h(e), i)))
    }

    function h(e) {
        return s.isMoment(e) ? e : s(e)
    }

    function g(e) {
        return s.isMoment(e) ? e.toDate() : e
    }

    function m(e) {
        let t;
        let n = s.localeData(),
            i = new Date,
            r = d(e, i);
        return "sameElse" == (t = r < -1 ? "sameElse" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : "sameElse") ? f(e, "LLL") : f(e, n.calendar(t, s(e), s(i)))
    }
    a.default.addChangeListener(() => {
        l = Object.create(null)
    });
    let p = [{
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

    function S(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: n ? 1 : 0
            };
        if (e > t || n && Number(e) + 1200 > Number(t)) return i;
        let s = Number(t) - Number(e);
        return p.forEach(e => {
            let {
                key: t,
                millisecondsInUnit: n
            } = e;
            i[t] = Math.floor(s / n), s -= i[t] * n
        }), i
    }

    function T(e, t) {
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