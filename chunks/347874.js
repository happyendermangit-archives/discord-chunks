function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildTimeset: function() {
            return f
        },
        initializeOptions: function() {
            return l
        },
        parseOptions: function() {
            return d
        }
    });
    var r = n("146150"),
        i = n("707908"),
        a = n("686942"),
        o = n("812975"),
        s = n("695170"),
        u = n("713267"),
        c = n("68808");

    function l(e) {
        for (var t = [], n = Object.keys(e), i = 0; i < n.length; i++) {
            var u = n[i];
            !(0, a.includes)(o.defaultKeys, u) && t.push(u), (0, s.isDate)(e[u]) && !(0, s.isValidDate)(e[u]) && t.push(u)
        }
        if (t.length) throw Error("Invalid options: " + t.join(", "));
        return (0, r.__assign)({}, e)
    }

    function d(e) {
        var t = (0, r.__assign)((0, r.__assign)({}, o.DEFAULT_OPTIONS), l(e));
        if ((0, a.isPresent)(t.byeaster) && (t.freq = o.RRule.YEARLY), !((0, a.isPresent)(t.freq) && o.RRule.FREQUENCIES[t.freq])) throw Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
        if (!t.dtstart && (t.dtstart = new Date(new Date().setMilliseconds(0))), (0, a.isPresent)(t.wkst) ? (0, a.isNumber)(t.wkst) || (t.wkst = t.wkst.weekday) : t.wkst = o.RRule.MO.weekday, (0, a.isPresent)(t.bysetpos)) {
            (0, a.isNumber)(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
            for (var n = 0; n < t.bysetpos.length; n++) {
                var i = t.bysetpos[n];
                if (0 === i || !(i >= -366 && i <= 366)) throw Error("bysetpos must be between 1 and 366, or between -366 and -1")
            }
        }
        if (!(t.byweekno || (0, a.notEmpty)(t.byweekno) || (0, a.notEmpty)(t.byyearday) || t.bymonthday || (0, a.notEmpty)(t.bymonthday) || (0, a.isPresent)(t.byweekday) || (0, a.isPresent)(t.byeaster))) switch (t.freq) {
            case o.RRule.YEARLY:
                !t.bymonth && (t.bymonth = t.dtstart.getUTCMonth() + 1), t.bymonthday = t.dtstart.getUTCDate();
                break;
            case o.RRule.MONTHLY:
                t.bymonthday = t.dtstart.getUTCDate();
                break;
            case o.RRule.WEEKLY:
                t.byweekday = [(0, s.getWeekday)(t.dtstart)]
        }
        if ((0, a.isPresent)(t.bymonth) && !(0, a.isArray)(t.bymonth) && (t.bymonth = [t.bymonth]), (0, a.isPresent)(t.byyearday) && !(0, a.isArray)(t.byyearday) && (0, a.isNumber)(t.byyearday) && (t.byyearday = [t.byyearday]), (0, a.isPresent)(t.bymonthday)) {
            if ((0, a.isArray)(t.bymonthday)) {
                for (var c = [], d = [], n = 0; n < t.bymonthday.length; n++) {
                    var i = t.bymonthday[n];
                    i > 0 ? c.push(i) : i < 0 && d.push(i)
                }
                t.bymonthday = c, t.bynmonthday = d
            } else t.bymonthday < 0 ? (t.bynmonthday = [t.bymonthday], t.bymonthday = []) : (t.bynmonthday = [], t.bymonthday = [t.bymonthday])
        } else t.bymonthday = [], t.bynmonthday = [];
        if ((0, a.isPresent)(t.byweekno) && !(0, a.isArray)(t.byweekno) && (t.byweekno = [t.byweekno]), (0, a.isPresent)(t.byweekday)) {
            if ((0, a.isNumber)(t.byweekday)) t.byweekday = [t.byweekday], t.bynweekday = null;
            else if ((0, a.isWeekdayStr)(t.byweekday)) t.byweekday = [u.Weekday.fromStr(t.byweekday).weekday], t.bynweekday = null;
            else if (t.byweekday instanceof u.Weekday) !t.byweekday.n || t.freq > o.RRule.MONTHLY ? (t.byweekday = [t.byweekday.weekday], t.bynweekday = null) : (t.bynweekday = [
                [t.byweekday.weekday, t.byweekday.n]
            ], t.byweekday = null);
            else {
                for (var f = [], p = [], n = 0; n < t.byweekday.length; n++) {
                    var h = t.byweekday[n];
                    if ((0, a.isNumber)(h)) {
                        f.push(h);
                        continue
                    }
                    if ((0, a.isWeekdayStr)(h)) {
                        f.push(u.Weekday.fromStr(h).weekday);
                        continue
                    }!h.n || t.freq > o.RRule.MONTHLY ? f.push(h.weekday) : p.push([h.weekday, h.n])
                }
                t.byweekday = (0, a.notEmpty)(f) ? f : null, t.bynweekday = (0, a.notEmpty)(p) ? p : null
            }
        } else t.bynweekday = null;
        return (0, a.isPresent)(t.byhour) ? (0, a.isNumber)(t.byhour) && (t.byhour = [t.byhour]) : t.byhour = t.freq < o.RRule.HOURLY ? [t.dtstart.getUTCHours()] : null, (0, a.isPresent)(t.byminute) ? (0, a.isNumber)(t.byminute) && (t.byminute = [t.byminute]) : t.byminute = t.freq < o.RRule.MINUTELY ? [t.dtstart.getUTCMinutes()] : null, (0, a.isPresent)(t.bysecond) ? (0, a.isNumber)(t.bysecond) && (t.bysecond = [t.bysecond]) : t.bysecond = t.freq < o.RRule.SECONDLY ? [t.dtstart.getUTCSeconds()] : null, {
            parsedOptions: t
        }
    }

    function f(e) {
        var t = e.dtstart.getTime() % 1e3;
        if (!(0, i.freqIsDailyOrGreater)(e.freq)) return [];
        var n = [];
        return e.byhour.forEach(function(r) {
            e.byminute.forEach(function(i) {
                e.bysecond.forEach(function(e) {
                    n.push(new c.Time(r, i, e, t))
                })
            })
        }), n
    }
}