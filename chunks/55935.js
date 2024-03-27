function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        accessibilityLabelCalendarFormat: function() {
            return S
        },
        calendarFormat: function() {
            return I
        },
        dateFormat: function() {
            return E
        },
        diffAsUnits: function() {
            return A
        },
        isSameDay: function() {
            return _
        },
        isWithinInterval: function() {
            return c
        },
        unitsAsStrings: function() {
            return m
        }
    });
    var i = n("913527"),
        r = n.n(i),
        s = n("232551"),
        a = n("706454");
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

    function _(e, t) {
        return Math.abs(+e - +t) <= o && e.getDate() === t.getDate()
    }

    function c(e, t, n) {
        return Math.abs(e.valueOf() - t.valueOf()) < n
    }

    function E(e, t) {
        let n = T(e).locale(),
            i = "".concat(n, ":").concat(t),
            r = l[i];
        return null == r && (r = l[i] = (0, s.default)(t)), r(f(e))
    }

    function I(e) {
        let t;
        let n = r().localeData(),
            i = r()(),
            s = d(f(e), i.toDate());
        return s < -1 ? E(e, "L LT") : (t = s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse", E(e, n.calendar(t, T(e), i)))
    }

    function T(e) {
        return r().isMoment(e) ? e : r()(e)
    }

    function f(e) {
        return r().isMoment(e) ? e.toDate() : e
    }

    function S(e) {
        let t;
        let n = r().localeData(),
            i = new Date,
            s = d(e, i);
        return "sameElse" == (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse") ? E(e, "LLL") : E(e, n.calendar(t, r()(e), r()(i)))
    }
    a.default.addChangeListener(() => {
        l = Object.create(null)
    });
    let h = [{
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

    function A(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: n ? 1 : 0
            };
        if (e > t || n && Number(e) + 1200 > Number(t)) return i;
        let r = Number(t) - Number(e);
        return h.forEach(e => {
            let {
                key: t,
                millisecondsInUnit: n
            } = e;
            i[t] = Math.floor(r / n), r -= i[t] * n
        }), i
    }

    function m(e, t) {
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