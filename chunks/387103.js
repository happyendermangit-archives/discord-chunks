function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CalendarDate: function() {
            return ep
        },
        DateFormatter: function() {
            return eE
        },
        GregorianCalendar: function() {
            return c
        },
        Time: function() {
            return em
        },
        endOfMonth: function() {
            return x
        },
        endOfWeek: function() {
            return O
        },
        getDayOfWeek: function() {
            return h
        },
        getLocalTimeZone: function() {
            return E
        },
        getMinimumDayInMonth: function() {
            return C
        },
        getMinimumMonthInYear: function() {
            return T
        },
        isEqualDay: function() {
            return f
        },
        isSameDay: function() {
            return d
        },
        isToday: function() {
            return p
        },
        maxDate: function() {
            return k
        },
        minDate: function() {
            return A
        },
        now: function() {
            return m
        },
        startOfMonth: function() {
            return S
        },
        startOfWeek: function() {
            return D
        },
        startOfYear: function() {
            return w
        },
        toCalendar: function() {
            return H
        },
        toCalendarDate: function() {
            return Y
        },
        toCalendarDateTime: function() {
            return j
        },
        toTime: function() {
            return z
        },
        toZoned: function() {
            return G
        },
        today: function() {
            return g
        }
    });
    var r = n("825508");

    function i(e, t) {
        return e - t * Math.floor(e / t)
    }

    function a(e, t, n, r) {
        let i = (t = s(e, t)) - 1,
            a = -2;
        return n <= 2 ? a = 0 : o(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r)
    }

    function o(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }

    function s(e, t) {
        return "BC" === e ? 1 - t : t
    }
    let u = {
        standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
    class c {
        fromJulianDay(e) {
            var t;
            let n, r = e - 1721426,
                s = Math.floor(r / 146097),
                u = i(r, 146097),
                c = Math.floor(u / 36524),
                l = i(u, 36524),
                d = Math.floor(l / 1461),
                f = Math.floor(i(l, 1461) / 365);
            let [p, h] = (n = "AD", (t = 400 * s + 100 * c + 4 * d + f + (4 !== c && 4 !== f ? 1 : 0)) <= 0 && (n = "BC", t = 1 - t), [n, t]), m = e - a(p, h, 1, 1), g = 2;
            e < a(p, h, 3, 1) ? g = 0 : o(h) && (g = 1);
            let _ = Math.floor(((m + g) * 12 + 373) / 367),
                b = e - a(p, h, _, 1) + 1;
            return new ep(p, h, _, b)
        }
        toJulianDay(e) {
            return a(e.era, e.year, e.month, e.day)
        }
        getDaysInMonth(e) {
            return u[o(e.year) ? "leapyear" : "standard"][e.month - 1]
        }
        getMonthsInYear(e) {
            return 12
        }
        getDaysInYear(e) {
            return o(e.year) ? 366 : 365
        }
        getYearsInEra(e) {
            return 9999
        }
        getEras() {
            return ["BC", "AD"]
        }
        isInverseEra(e) {
            return "BC" === e.era
        }
        balanceDate(e) {
            e.year <= 0 && (e.era = "BC" === e.era ? "AD" : "BC", e.year = 1 - e.year)
        }
        constructor() {
            this.identifier = "gregory"
        }
    }
    let l = {
        "001": 1,
        AD: 1,
        AE: 6,
        AF: 6,
        AI: 1,
        AL: 1,
        AM: 1,
        AN: 1,
        AR: 1,
        AT: 1,
        AU: 1,
        AX: 1,
        AZ: 1,
        BA: 1,
        BE: 1,
        BG: 1,
        BH: 6,
        BM: 1,
        BN: 1,
        BY: 1,
        CH: 1,
        CL: 1,
        CM: 1,
        CN: 1,
        CR: 1,
        CY: 1,
        CZ: 1,
        DE: 1,
        DJ: 6,
        DK: 1,
        DZ: 6,
        EC: 1,
        EE: 1,
        EG: 6,
        ES: 1,
        FI: 1,
        FJ: 1,
        FO: 1,
        FR: 1,
        GB: 1,
        GE: 1,
        GF: 1,
        GP: 1,
        GR: 1,
        HR: 1,
        HU: 1,
        IE: 1,
        IQ: 6,
        IR: 6,
        IS: 1,
        IT: 1,
        JO: 6,
        KG: 1,
        KW: 6,
        KZ: 1,
        LB: 1,
        LI: 1,
        LK: 1,
        LT: 1,
        LU: 1,
        LV: 1,
        LY: 6,
        MC: 1,
        MD: 1,
        ME: 1,
        MK: 1,
        MN: 1,
        MQ: 1,
        MV: 5,
        MY: 1,
        NL: 1,
        NO: 1,
        NZ: 1,
        OM: 6,
        PL: 1,
        QA: 6,
        RE: 1,
        RO: 1,
        RS: 1,
        RU: 1,
        SD: 6,
        SE: 1,
        SI: 1,
        SK: 1,
        SM: 1,
        SY: 6,
        TJ: 1,
        TM: 1,
        TR: 1,
        UA: 1,
        UY: 1,
        UZ: 1,
        VA: 1,
        VN: 1,
        XK: 1
    };

    function d(e, t) {
        return t = H(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function f(e, t) {
        return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function p(e, t) {
        return d(e, g(t))
    }

    function h(e, t) {
        let n = Math.ceil(e.calendar.toJulianDay(e) + 1 - function(e) {
            let t = function(e) {
                if (Intl.Locale) {
                    let t = M.get(e);
                    return !t && (t = new Intl.Locale(e).maximize().region) && M.set(e, t), t
                }
                let t = e.split("-")[1];
                return "u" === t ? void 0 : t
            }(e);
            return t && l[t] || 0
        }(t)) % 7;
        return n < 0 && (n += 7), n
    }

    function m(e) {
        return U(Date.now(), e)
    }

    function g(e) {
        return Y(m(e))
    }

    function _(e, t) {
        return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
    }

    function b(e, t) {
        return v(e) - v(t)
    }

    function v(e) {
        return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
    }
    let y = null;

    function E() {
        return null == y && (y = new Intl.DateTimeFormat().resolvedOptions().timeZone), y
    }

    function S(e) {
        return e.subtract({
            days: e.day - 1
        })
    }

    function x(e) {
        return e.add({
            days: e.calendar.getDaysInMonth(e) - e.day
        })
    }

    function w(e) {
        return S(e.subtract({
            months: e.month - 1
        }))
    }

    function T(e) {
        return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1
    }

    function C(e) {
        return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1
    }

    function D(e, t) {
        let n = h(e, t);
        return e.subtract({
            days: n
        })
    }

    function O(e, t) {
        return D(e, t).add({
            days: 6
        })
    }
    let M = new Map;

    function A(e, t) {
        return e && t ? 0 >= e.compare(t) ? e : t : e || t
    }

    function k(e, t) {
        return e && t ? e.compare(t) >= 0 ? e : t : e || t
    }

    function R(e) {
        return N(s((e = H(e, new c)).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    }

    function N(e, t, n, r, i, a, o) {
        let s = new Date;
        return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime()
    }

    function I(e, t) {
        if ("UTC" === t) return 0;
        if (e > 0 && t === E()) return -6e4 * new Date(e).getTimezoneOffset();
        let {
            year: n,
            month: r,
            day: i,
            hour: a,
            minute: o,
            second: s
        } = P(e, t);
        return N(n, r, i, a, o, s, 0) - 1e3 * Math.floor(e / 1e3)
    }
    let L = new Map;

    function P(e, t) {
        let n = L.get(t);
        !n && (n = new Intl.DateTimeFormat("en-US", {
            timeZone: t,
            hour12: !1,
            era: "short",
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        }), L.set(t, n));
        let r = n.formatToParts(new Date(e)),
            i = {};
        for (let e of r) "literal" !== e.type && (i[e.type] = e.value);
        return {
            year: "BC" === i.era || "B" === i.era ? -i.year + 1 : +i.year,
            month: +i.month,
            day: +i.day,
            hour: "24" === i.hour ? 0 : +i.hour,
            minute: +i.minute,
            second: +i.second
        }
    }

    function F(e, t, n = "compatible") {
        var r, i, a, o;
        let u = j(e);
        if ("UTC" === t) return R(u);
        if (t === E() && "compatible" === n) {
            u = H(u, new c);
            let e = new Date,
                t = s(u.era, u.year);
            return e.setFullYear(t, u.month - 1, u.day), e.setHours(u.hour, u.minute, u.second, u.millisecond), e.getTime()
        }
        let l = R(u),
            d = I(l - 864e5, t),
            f = I(l + 864e5, t);
        let p = (r = u, i = t, ((a = l - d) == (o = l - f) ? [a] : [a, o]).filter(e => (function(e, t, n) {
            let r = P(n, t);
            return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second
        })(r, i, e)));
        if (1 === p.length) return p[0];
        if (p.length > 1) switch (n) {
            case "compatible":
            case "earlier":
                return p[0];
            case "later":
                return p[p.length - 1];
            case "reject":
                throw RangeError("Multiple possible absolute times found")
        }
        switch (n) {
            case "earlier":
                return Math.min(l - d, l - f);
            case "compatible":
            case "later":
                return Math.max(l - d, l - f);
            case "reject":
                throw RangeError("No such absolute time found")
        }
    }

    function B(e, t, n = "compatible") {
        return new Date(F(e, t, n))
    }

    function U(e, t) {
        let n = I(e, t),
            r = new Date(e + n);
        return new ev(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), t, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds())
    }

    function Y(e) {
        return new ep(e.calendar, e.era, e.year, e.month, e.day)
    }

    function j(e, t) {
        let n = 0,
            r = 0,
            i = 0,
            a = 0;
        if ("timeZone" in e)({
            hour: n,
            minute: r,
            second: i,
            millisecond: a
        } = e);
        else if ("hour" in e && !t) return e;
        return t && ({
            hour: n,
            minute: r,
            second: i,
            millisecond: a
        } = t), new e_(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a)
    }

    function z(e) {
        return new em(e.hour, e.minute, e.second, e.millisecond)
    }

    function H(e, t) {
        if (e.calendar.identifier === t.identifier) return e;
        let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
            r = e.copy();
        return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, q(r), r
    }

    function G(e, t, n) {
        if (e instanceof ev) return e.timeZone === t ? e : function(e, t) {
            return H(U(R(e) - e.offset, t), e.calendar)
        }(e, t);
        return U(F(e, t, n), t)
    }

    function V(e, t) {
        let n = e.copy(),
            r = "hour" in n ? en(n, t) : 0;
        $(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, W(n), K(n), n.day += 7 * (t.weeks || 0), n.day += t.days || 0, n.day += r,
            function(e) {
                for (; e.day < 1;) e.month--, W(e), e.day += e.calendar.getDaysInMonth(e);
                for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, W(e)
            }(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
        let i = n.calendar.getYearsInEra(n);
        if (n.year > i) {
            var a, o;
            let e = null === (a = (o = n.calendar).isInverseEra) || void 0 === a ? void 0 : a.call(o, n);
            n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n)
        }
        n.month < 1 && (n.month = 1, n.day = 1);
        let s = n.calendar.getMonthsInYear(n);
        return n.month > s && (n.month = s, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n
    }

    function $(e, t) {
        var n, r;
        (null === (n = (r = e.calendar).isInverseEra) || void 0 === n ? void 0 : n.call(r, e)) && (t = -t), e.year += t
    }

    function W(e) {
        for (; e.month < 1;) $(e, -1), e.month += e.calendar.getMonthsInYear(e);
        let t = 0;
        for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, $(e, 1)
    }

    function K(e) {
        e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
    }

    function q(e) {
        e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), K(e)
    }

    function Q(e) {
        let t = {};
        for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
        return t
    }

    function Z(e, t) {
        return V(e, Q(t))
    }

    function X(e, t) {
        let n = e.copy();
        return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), q(n), n
    }

    function J(e, t) {
        let n = e.copy();
        return null != t.hour && (n.hour = t.hour), null != t.minute && (n.minute = t.minute), null != t.second && (n.second = t.second), null != t.millisecond && (n.millisecond = t.millisecond), ee(n), n
    }

    function ee(e) {
        e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23))
    }

    function et(e, t) {
        let n = e % t;
        return n < 0 && (n += t), n
    }

    function en(e, t) {
        var n;
        let r;
        e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0;
        return n = e, n.second += Math.floor(n.millisecond / 1e3), n.millisecond = et(n.millisecond, 1e3), n.minute += Math.floor(n.second / 60), n.second = et(n.second, 60), n.hour += Math.floor(n.minute / 60), n.minute = et(n.minute, 60), r = Math.floor(n.hour / 24), n.hour = et(n.hour, 24), r
    }

    function er(e, t) {
        let n = e.copy();
        return en(n, t), n
    }

    function ei(e, t, n, r) {
        let i = e.copy();
        switch (t) {
            case "era": {
                let t = e.calendar.getEras(),
                    a = t.indexOf(e.era);
                if (a < 0) throw Error("Invalid era: " + e.era);
                a = eo(a, n, 0, t.length - 1, null == r ? void 0 : r.round), i.era = t[a], q(i);
                break
            }
            case "year":
                var a, o;
                (null === (a = (o = i.calendar).isInverseEra) || void 0 === a ? void 0 : a.call(o, i)) && (n = -n), i.year = eo(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
                break;
            case "month":
                i.month = eo(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
                break;
            case "day":
                i.day = eo(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return e.calendar.balanceDate && e.calendar.balanceDate(i), q(i), i
    }

    function ea(e, t, n, r) {
        let i = e.copy();
        switch (t) {
            case "hour": {
                let t = e.hour,
                    a = 0,
                    o = 23;
                if ((null == r ? void 0 : r.hourCycle) === 12) {
                    let e = t >= 12;
                    a = e ? 12 : 0, o = e ? 23 : 11
                }
                i.hour = eo(t, n, a, o, null == r ? void 0 : r.round);
                break
            }
            case "minute":
                i.minute = eo(e.minute, n, 0, 59, null == r ? void 0 : r.round);
                break;
            case "second":
                i.second = eo(e.second, n, 0, 59, null == r ? void 0 : r.round);
                break;
            case "millisecond":
                i.millisecond = eo(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return i
    }

    function eo(e, t, n, r, i = !1) {
        if (i) {
            (e += Math.sign(t)) < n && (e = r);
            let i = Math.abs(t);
            (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n)
        } else(e += t) < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
        return e
    }

    function es(e, t) {
        let n;
        if (null != t.years && 0 !== t.years || null != t.months && 0 !== t.months || null != t.weeks && 0 !== t.weeks || null != t.days && 0 !== t.days) {
            let r;
            n = F(V(j(e), {
                years: t.years,
                months: t.months,
                weeks: t.weeks,
                days: t.days
            }), e.timeZone)
        } else n = R(e) - e.offset;
        return H(U(n += (t.milliseconds || 0) + 1e3 * (t.seconds || 0) + 6e4 * (t.minutes || 0) + 36e5 * (t.hours || 0), e.timeZone), e.calendar)
    }

    function eu(e) {
        return `${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second).padStart(2,"0")}${e.millisecond?String(e.millisecond/1e3).slice(1):""}`
    }

    function ec(e) {
        let t = H(e, new c);
        return `${String(t.year).padStart(4,"0")}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`
    }

    function el(e) {
        return `${ec(e)}T${eu(e)}`
    }

    function ed(e) {
        let t, n = "object" == typeof e[0] ? e.shift() : new c;
        if ("string" == typeof e[0]) t = e.shift();
        else {
            let e = n.getEras();
            t = e[e.length - 1]
        }
        return [n, t, e.shift(), e.shift(), e.shift()]
    }
    var ef = new WeakMap;
    class ep {
        copy() {
            return this.era ? new ep(this.calendar, this.era, this.year, this.month, this.day) : new ep(this.calendar, this.year, this.month, this.day)
        }
        add(e) {
            return V(this, e)
        }
        subtract(e) {
            var t;
            return t = this, V(t, Q(e))
        }
        set(e) {
            return X(this, e)
        }
        cycle(e, t, n) {
            return ei(this, e, t, n)
        }
        toDate(e) {
            return B(this, e)
        }
        toString() {
            return ec(this)
        }
        compare(e) {
            return _(this, e)
        }
        constructor(...e) {
            (0, r._)(this, ef, {
                writable: !0,
                value: void 0
            });
            let [t, n, i, a, o] = ed(e);
            this.calendar = t, this.era = n, this.year = i, this.month = a, this.day = o, q(this)
        }
    }
    var eh = new WeakMap;
    class em {
        copy() {
            return new em(this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return er(this, e)
        }
        subtract(e) {
            var t;
            return t = this, er(t, Q(e))
        }
        set(e) {
            return J(this, e)
        }
        cycle(e, t, n) {
            return ea(this, e, t, n)
        }
        toString() {
            return eu(this)
        }
        compare(e) {
            var t, n;
            return t = this, n = e, v(t) - v(n)
        }
        constructor(e = 0, t = 0, n = 0, i = 0) {
            (0, r._)(this, eh, {
                writable: !0,
                value: void 0
            }), this.hour = e, this.minute = t, this.second = n, this.millisecond = i, ee(this)
        }
    }
    var eg = new WeakMap;
    class e_ {
        copy() {
            return this.era ? new e_(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e_(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return V(this, e)
        }
        subtract(e) {
            var t;
            return t = this, V(t, Q(e))
        }
        set(e) {
            return X(J(this, e), e)
        }
        cycle(e, t, n) {
            switch (e) {
                case "era":
                case "year":
                case "month":
                case "day":
                    return ei(this, e, t, n);
                default:
                    return ea(this, e, t, n)
            }
        }
        toDate(e, t) {
            return B(this, e, t)
        }
        toString() {
            return el(this)
        }
        compare(e) {
            let t = _(this, e);
            if (0 === t) {
                var n, r;
                return n = this, r = j(e), v(n) - v(r)
            }
            return t
        }
        constructor(...e) {
            (0, r._)(this, eg, {
                writable: !0,
                value: void 0
            });
            let [t, n, i, a, o] = ed(e);
            this.calendar = t, this.era = n, this.year = i, this.month = a, this.day = o, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, q(this)
        }
    }
    var eb = new WeakMap;
    class ev {
        copy() {
            return this.era ? new ev(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new ev(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return es(this, e)
        }
        subtract(e) {
            var t;
            return t = this, es(t, Q(e))
        }
        set(e, t) {
            var n, r, i;
            let a, o;
            return n = this, r = e, i = t, 0 === (o = J(X(a = j(n), r), r)).compare(a) ? n : H(U(F(o, n.timeZone, i), n.timeZone), n.calendar)
        }
        cycle(e, t, n) {
            return function(e, t, n, r) {
                switch (t) {
                    case "hour": {
                        let t = 0,
                            i = 23;
                        if ((null == r ? void 0 : r.hourCycle) === 12) {
                            let n = e.hour >= 12;
                            t = n ? 12 : 0, i = n ? 23 : 11
                        }
                        let a = j(e),
                            o = H(J(a, {
                                hour: t
                            }), new c),
                            s = [F(o, e.timeZone, "earlier"), F(o, e.timeZone, "later")].filter(t => U(t, e.timeZone).day === o.day)[0],
                            u = H(J(a, {
                                hour: i
                            }), new c),
                            l = [F(u, e.timeZone, "earlier"), F(u, e.timeZone, "later")].filter(t => U(t, e.timeZone).day === u.day).pop(),
                            d = R(e) - e.offset,
                            f = Math.floor(d / 36e5),
                            p = d % 36e5;
                        return H(U(d = 36e5 * eo(f, n, Math.floor(s / 36e5), Math.floor(l / 36e5), null == r ? void 0 : r.round) + p, e.timeZone), e.calendar)
                    }
                    case "minute":
                    case "second":
                    case "millisecond":
                        return ea(e, t, n, r);
                    case "era":
                    case "year":
                    case "month":
                    case "day":
                        return H(U(F(ei(j(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
                    default:
                        throw Error("Unsupported field " + t)
                }
            }(this, e, t, n)
        }
        toDate() {
            var e;
            return e = this, new Date(R(e) - e.offset)
        }
        toString() {
            var e, t;
            let n, r, i;
            return e = this, `${el(e)}${n=0>Math.sign(t=e.offset)?"-":"+",r=Math.floor((t=Math.abs(t))/36e5),i=t%36e5/6e4,`${n}${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`}[${e.timeZone}]`
        }
        toAbsoluteString() {
            return this.toDate().toISOString()
        }
        compare(e) {
            return this.toDate().getTime() - G(e, this.timeZone).toDate().getTime()
        }
        constructor(...e) {
            (0, r._)(this, eb, {
                writable: !0,
                value: void 0
            });
            let [t, n, i, a, o] = ed(e), s = e.shift(), u = e.shift();
            this.calendar = t, this.era = n, this.year = i, this.month = a, this.day = o, this.timeZone = s, this.offset = u, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, q(this)
        }
    }
    let ey = new Map;
    class eE {
        format(e) {
            return this.formatter.format(e)
        }
        formatToParts(e) {
            return this.formatter.formatToParts(e)
        }
        formatRange(e, t) {
            if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`
        }
        formatRangeToParts(e, t) {
            if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            let n = this.formatter.formatToParts(e),
                r = this.formatter.formatToParts(t);
            return [...n.map(e => ({
                ...e,
                source: "startRange"
            })), {
                type: "literal",
                value: " – ",
                source: "shared"
            }, ...r.map(e => ({
                ...e,
                source: "endRange"
            }))]
        }
        resolvedOptions() {
            let e = this.formatter.resolvedOptions();
            return function() {
                return null == eT && (eT = "h12" === new Intl.DateTimeFormat("fr", {
                    hour: "numeric",
                    hour12: !1
                }).resolvedOptions().hourCycle), eT
            }() && (!this.resolvedHourCycle && (this.resolvedHourCycle = function(e, t) {
                if (!t.timeStyle && !t.hour) return;
                e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
                let n = ex(e += (e.includes("-u-") ? "" : "-u") + "-nu-latn", {
                        ...t,
                        timeZone: void 0
                    }),
                    r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find(e => "hour" === e.type).value, 10),
                    i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find(e => "hour" === e.type).value, 10);
                if (0 === r && 23 === i) return "h23";
                if (24 === r && 23 === i) return "h24";
                if (0 === r && 11 === i) return "h11";
                if (12 === r && 11 === i) return "h12";
                throw Error("Unexpected hour cycle result")
            }(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle), "ethiopic-amete-alem" === e.calendar && (e.calendar = "ethioaa"), e
        }
        constructor(e, t = {}) {
            this.formatter = ex(e, t), this.options = t
        }
    }
    let eS = {
        true: {
            ja: "h11"
        },
        false: {}
    };

    function ex(e, t = {}) {
        if ("boolean" == typeof t.hour12 && function() {
                return null == ew && (ew = "24" === new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    hour12: !1
                }).format(new Date(2020, 2, 3, 0))), ew
            }()) {
            let n = eS[String((t = {
                    ...t
                }).hour12)][e.split("-")[0]],
                r = t.hour12 ? "h12" : "h23";
            t.hourCycle = null != n ? n : r, delete t.hour12
        }
        let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
        if (ey.has(n)) return ey.get(n);
        let r = new Intl.DateTimeFormat(e, t);
        return ey.set(n, r), r
    }
    let ew = null,
        eT = null
}