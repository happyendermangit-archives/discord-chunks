function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CalendarDate: function() {
            return ep
        },
        Time: function() {
            return ev
        },
        GregorianCalendar: function() {
            return u
        },
        toCalendarDate: function() {
            return z
        },
        toCalendarDateTime: function() {
            return K
        },
        toTime: function() {
            return V
        },
        toCalendar: function() {
            return U
        },
        toZoned: function() {
            return H
        },
        isSameDay: function() {
            return l
        },
        isEqualDay: function() {
            return f
        },
        isToday: function() {
            return p
        },
        getDayOfWeek: function() {
            return h
        },
        now: function() {
            return v
        },
        today: function() {
            return g
        },
        getLocalTimeZone: function() {
            return w
        },
        startOfMonth: function() {
            return S
        },
        startOfWeek: function() {
            return D
        },
        startOfYear: function() {
            return E
        },
        endOfMonth: function() {
            return k
        },
        endOfWeek: function() {
            return C
        },
        getMinimumMonthInYear: function() {
            return _
        },
        getMinimumDayInMonth: function() {
            return M
        },
        minDate: function() {
            return T
        },
        maxDate: function() {
            return A
        },
        DateFormatter: function() {
            return ew
        }
    }), n("222007"), n("70102"), n("781738"), n("659510"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790"), n("492311"), n("101997"), n("990131");
    var r = n("599514");

    function i(e, t) {
        return e - t * Math.floor(e / t)
    }

    function o(e, t, n, r) {
        let i = (t = a(e, t)) - 1,
            o = -2;
        return n <= 2 ? o = 0 : s(t) && (o = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + o + r)
    }

    function s(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }

    function a(e, t) {
        return "BC" === e ? 1 - t : t
    }
    let c = {
        standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
    class u {
        fromJulianDay(e) {
            var t;
            let n, r = e - 1721426,
                a = Math.floor(r / 146097),
                c = i(r, 146097),
                u = Math.floor(c / 36524),
                d = i(c, 36524),
                l = Math.floor(d / 1461),
                f = Math.floor(i(d, 1461) / 365);
            let [p, h] = (n = "AD", (t = 400 * a + 100 * u + 4 * l + f + (4 !== u && 4 !== f ? 1 : 0)) <= 0 && (n = "BC", t = 1 - t), [n, t]), v = e - o(p, h, 1, 1), g = 2;
            e < o(p, h, 3, 1) ? g = 0 : s(h) && (g = 1);
            let b = Math.floor(((v + g) * 12 + 373) / 367),
                m = e - o(p, h, b, 1) + 1;
            return new ep(p, h, b, m)
        }
        toJulianDay(e) {
            return o(e.era, e.year, e.month, e.day)
        }
        getDaysInMonth(e) {
            return c[s(e.year) ? "leapyear" : "standard"][e.month - 1]
        }
        getMonthsInYear(e) {
            return 12
        }
        getDaysInYear(e) {
            return s(e.year) ? 366 : 365
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
    let d = {
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

    function l(e, t) {
        return t = U(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function f(e, t) {
        return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function p(e, t) {
        return l(e, g(t))
    }

    function h(e, t) {
        let n = Math.ceil(e.calendar.toJulianDay(e) + 1 - function(e) {
            let t = function(e) {
                if (Intl.Locale) {
                    let t = P.get(e);
                    return !t && (t = new Intl.Locale(e).maximize().region) && P.set(e, t), t
                }
                let t = e.split("-")[1];
                return "u" === t ? void 0 : t
            }(e);
            return t && d[t] || 0
        }(t)) % 7;
        return n < 0 && (n += 7), n
    }

    function v(e) {
        return B(Date.now(), e)
    }

    function g(e) {
        return z(v(e))
    }

    function b(e, t) {
        return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
    }

    function m(e, t) {
        return y(e) - y(t)
    }

    function y(e) {
        return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
    }
    let x = null;

    function w() {
        return null == x && (x = new Intl.DateTimeFormat().resolvedOptions().timeZone), x
    }

    function S(e) {
        return e.subtract({
            days: e.day - 1
        })
    }

    function k(e) {
        return e.add({
            days: e.calendar.getDaysInMonth(e) - e.day
        })
    }

    function E(e) {
        return S(e.subtract({
            months: e.month - 1
        }))
    }

    function _(e) {
        return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1
    }

    function M(e) {
        return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1
    }

    function D(e, t) {
        let n = h(e, t);
        return e.subtract({
            days: n
        })
    }

    function C(e, t) {
        return D(e, t).add({
            days: 6
        })
    }
    let P = new Map;

    function T(e, t) {
        return e && t ? 0 >= e.compare(t) ? e : t : e || t
    }

    function A(e, t) {
        return e && t ? e.compare(t) >= 0 ? e : t : e || t
    }

    function R(e) {
        return I(a((e = U(e, new u)).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    }

    function I(e, t, n, r, i, o, s) {
        let a = new Date;
        return a.setUTCHours(r, i, o, s), a.setUTCFullYear(e, t - 1, n), a.getTime()
    }

    function O(e, t) {
        if ("UTC" === t) return 0;
        if (e > 0 && t === w()) return -6e4 * new Date(e).getTimezoneOffset();
        let {
            year: n,
            month: r,
            day: i,
            hour: o,
            minute: s,
            second: a
        } = L(e, t);
        return I(n, r, i, o, s, a, 0) - 1e3 * Math.floor(e / 1e3)
    }
    let j = new Map;

    function L(e, t) {
        let n = j.get(t);
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
        }), j.set(t, n));
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

    function N(e, t) {
        var n, r, i, o;
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible",
            c = K(e);
        if ("UTC" === t) return R(c);
        if (t === w() && "compatible" === s) {
            c = U(c, new u);
            let e = new Date,
                t = a(c.era, c.year);
            return e.setFullYear(t, c.month - 1, c.day), e.setHours(c.hour, c.minute, c.second, c.millisecond), e.getTime()
        }
        let d = R(c),
            l = O(d - 864e5, t),
            f = O(d + 864e5, t);
        let p = (n = c, r = t, ((i = d - l) == (o = d - f) ? [i] : [i, o]).filter(e => (function(e, t, n) {
            let r = L(n, t);
            return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second
        })(n, r, e)));
        if (1 === p.length) return p[0];
        if (p.length > 1) switch (s) {
            case "compatible":
            case "earlier":
                return p[0];
            case "later":
                return p[p.length - 1];
            case "reject":
                throw RangeError("Multiple possible absolute times found")
        }
        switch (s) {
            case "earlier":
                return Math.min(d - l, d - f);
            case "compatible":
            case "later":
                return Math.max(d - l, d - f);
            case "reject":
                throw RangeError("No such absolute time found")
        }
    }

    function F(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible";
        return new Date(N(e, t, n))
    }

    function B(e, t) {
        let n = O(e, t),
            r = new Date(e + n);
        return new ey(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), t, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds())
    }

    function z(e) {
        return new ep(e.calendar, e.era, e.year, e.month, e.day)
    }

    function K(e, t) {
        let n = 0,
            r = 0,
            i = 0,
            o = 0;
        if ("timeZone" in e)({
            hour: n,
            minute: r,
            second: i,
            millisecond: o
        } = e);
        else if ("hour" in e && !t) return e;
        return t && ({
            hour: n,
            minute: r,
            second: i,
            millisecond: o
        } = t), new eb(e.calendar, e.era, e.year, e.month, e.day, n, r, i, o)
    }

    function V(e) {
        return new ev(e.hour, e.minute, e.second, e.millisecond)
    }

    function U(e, t) {
        if (e.calendar.identifier === t.identifier) return e;
        let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
            r = e.copy();
        return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, Y(r), r
    }

    function H(e, t, n) {
        if (e instanceof ey) return e.timeZone === t ? e : function(e, t) {
            return U(B(R(e) - e.offset, t), e.calendar)
        }(e, t);
        return B(N(e, t, n), t)
    }

    function q(e, t) {
        let n = e.copy(),
            r = "hour" in n ? en(n, t) : 0;
        G(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, W(n), Z(n), n.day += 7 * (t.weeks || 0), n.day += t.days || 0, n.day += r,
            function(e) {
                for (; e.day < 1;) e.month--, W(e), e.day += e.calendar.getDaysInMonth(e);
                for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, W(e)
            }(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
        let i = n.calendar.getYearsInEra(n);
        if (n.year > i) {
            var o, s;
            let e = null === (o = (s = n.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(s, n);
            n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n)
        }
        n.month < 1 && (n.month = 1, n.day = 1);
        let a = n.calendar.getMonthsInYear(n);
        return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n
    }

    function G(e, t) {
        var n, r;
        (null === (n = (r = e.calendar).isInverseEra) || void 0 === n ? void 0 : n.call(r, e)) && (t = -t), e.year += t
    }

    function W(e) {
        for (; e.month < 1;) G(e, -1), e.month += e.calendar.getMonthsInYear(e);
        let t = 0;
        for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, G(e, 1)
    }

    function Z(e) {
        e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
    }

    function Y(e) {
        e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Z(e)
    }

    function X(e) {
        let t = {};
        for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
        return t
    }

    function J(e, t) {
        return q(e, X(t))
    }

    function $(e, t) {
        let n = e.copy();
        return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), Y(n), n
    }

    function Q(e, t) {
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
                    o = t.indexOf(e.era);
                if (o < 0) throw Error("Invalid era: " + e.era);
                o = es(o, n, 0, t.length - 1, null == r ? void 0 : r.round), i.era = t[o], Y(i);
                break
            }
            case "year":
                var o, s;
                (null === (o = (s = i.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(s, i)) && (n = -n), i.year = es(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
                break;
            case "month":
                i.month = es(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
                break;
            case "day":
                i.day = es(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return e.calendar.balanceDate && e.calendar.balanceDate(i), Y(i), i
    }

    function eo(e, t, n, r) {
        let i = e.copy();
        switch (t) {
            case "hour": {
                let t = e.hour,
                    o = 0,
                    s = 23;
                if ((null == r ? void 0 : r.hourCycle) === 12) {
                    let e = t >= 12;
                    o = e ? 12 : 0, s = e ? 23 : 11
                }
                i.hour = es(t, n, o, s, null == r ? void 0 : r.round);
                break
            }
            case "minute":
                i.minute = es(e.minute, n, 0, 59, null == r ? void 0 : r.round);
                break;
            case "second":
                i.second = es(e.second, n, 0, 59, null == r ? void 0 : r.round);
                break;
            case "millisecond":
                i.millisecond = es(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return i
    }

    function es(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (i) {
            (e += Math.sign(t)) < n && (e = r);
            let i = Math.abs(t);
            (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n)
        } else(e += t) < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
        return e
    }

    function ea(e, t) {
        let n;
        if (null != t.years && 0 !== t.years || null != t.months && 0 !== t.months || null != t.weeks && 0 !== t.weeks || null != t.days && 0 !== t.days) {
            let r;
            n = N(q(K(e), {
                years: t.years,
                months: t.months,
                weeks: t.weeks,
                days: t.days
            }), e.timeZone)
        } else n = R(e) - e.offset;
        return U(B(n += (t.milliseconds || 0) + 1e3 * (t.seconds || 0) + 6e4 * (t.minutes || 0) + 36e5 * (t.hours || 0), e.timeZone), e.calendar)
    }

    function ec(e) {
        return "".concat(String(e.hour).padStart(2, "0"), ":").concat(String(e.minute).padStart(2, "0"), ":").concat(String(e.second).padStart(2, "0")).concat(e.millisecond ? String(e.millisecond / 1e3).slice(1) : "")
    }

    function eu(e) {
        let t = U(e, new u);
        return "".concat(String(t.year).padStart(4, "0"), "-").concat(String(t.month).padStart(2, "0"), "-").concat(String(t.day).padStart(2, "0"))
    }

    function ed(e) {
        return "".concat(eu(e), "T").concat(ec(e))
    }

    function el(e) {
        let t, n = "object" == typeof e[0] ? e.shift() : new u;
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
            return q(this, e)
        }
        subtract(e) {
            var t;
            return t = this, q(t, X(e))
        }
        set(e) {
            return $(this, e)
        }
        cycle(e, t, n) {
            return ei(this, e, t, n)
        }
        toDate(e) {
            return F(this, e)
        }
        toString() {
            return eu(this)
        }
        compare(e) {
            return b(this, e)
        }
        constructor(...e) {
            (0, r._)(this, ef, {
                writable: !0,
                value: void 0
            });
            let [t, n, i, o, s] = el(e);
            this.calendar = t, this.era = n, this.year = i, this.month = o, this.day = s, Y(this)
        }
    }
    var eh = new WeakMap;
    class ev {
        copy() {
            return new ev(this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return er(this, e)
        }
        subtract(e) {
            var t;
            return t = this, er(t, X(e))
        }
        set(e) {
            return Q(this, e)
        }
        cycle(e, t, n) {
            return eo(this, e, t, n)
        }
        toString() {
            return ec(this)
        }
        compare(e) {
            var t, n;
            return t = this, n = e, y(t) - y(n)
        }
        constructor(e = 0, t = 0, n = 0, i = 0) {
            (0, r._)(this, eh, {
                writable: !0,
                value: void 0
            }), this.hour = e, this.minute = t, this.second = n, this.millisecond = i, ee(this)
        }
    }
    var eg = new WeakMap;
    class eb {
        copy() {
            return this.era ? new eb(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new eb(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return q(this, e)
        }
        subtract(e) {
            var t;
            return t = this, q(t, X(e))
        }
        set(e) {
            return $(Q(this, e), e)
        }
        cycle(e, t, n) {
            switch (e) {
                case "era":
                case "year":
                case "month":
                case "day":
                    return ei(this, e, t, n);
                default:
                    return eo(this, e, t, n)
            }
        }
        toDate(e, t) {
            return F(this, e, t)
        }
        toString() {
            return ed(this)
        }
        compare(e) {
            let t = b(this, e);
            if (0 === t) {
                var n, r;
                return n = this, r = K(e), y(n) - y(r)
            }
            return t
        }
        constructor(...e) {
            (0, r._)(this, eg, {
                writable: !0,
                value: void 0
            });
            let [t, n, i, o, s] = el(e);
            this.calendar = t, this.era = n, this.year = i, this.month = o, this.day = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Y(this)
        }
    }
    var em = new WeakMap;
    class ey {
        copy() {
            return this.era ? new ey(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new ey(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return ea(this, e)
        }
        subtract(e) {
            var t;
            return t = this, ea(t, X(e))
        }
        set(e, t) {
            var n, r, i;
            let o, s;
            return n = this, r = e, i = t, 0 === (s = Q($(o = K(n), r), r)).compare(o) ? n : U(B(N(s, n.timeZone, i), n.timeZone), n.calendar)
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
                        let o = K(e),
                            s = U(Q(o, {
                                hour: t
                            }), new u),
                            a = [N(s, e.timeZone, "earlier"), N(s, e.timeZone, "later")].filter(t => B(t, e.timeZone).day === s.day)[0],
                            c = U(Q(o, {
                                hour: i
                            }), new u),
                            d = [N(c, e.timeZone, "earlier"), N(c, e.timeZone, "later")].filter(t => B(t, e.timeZone).day === c.day).pop(),
                            l = R(e) - e.offset,
                            f = Math.floor(l / 36e5),
                            p = l % 36e5;
                        return U(B(l = 36e5 * es(f, n, Math.floor(a / 36e5), Math.floor(d / 36e5), null == r ? void 0 : r.round) + p, e.timeZone), e.calendar)
                    }
                    case "minute":
                    case "second":
                    case "millisecond":
                        return eo(e, t, n, r);
                    case "era":
                    case "year":
                    case "month":
                    case "day":
                        return U(B(N(ei(K(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
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
            return e = this, "".concat(ed(e)).concat((n = 0 > Math.sign(t = e.offset) ? "-" : "+", r = Math.floor((t = Math.abs(t)) / 36e5), i = t % 36e5 / 6e4, "".concat(n).concat(String(r).padStart(2, "0"), ":").concat(String(i).padStart(2, "0"))), "[").concat(e.timeZone, "]")
        }
        toAbsoluteString() {
            return this.toDate().toISOString()
        }
        compare(e) {
            return this.toDate().getTime() - H(e, this.timeZone).toDate().getTime()
        }
        constructor(...e) {
            (0, r._)(this, em, {
                writable: !0,
                value: void 0
            });
            let [t, n, i, o, s] = el(e), a = e.shift(), c = e.shift();
            this.calendar = t, this.era = n, this.year = i, this.month = o, this.day = s, this.timeZone = a, this.offset = c, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Y(this)
        }
    }
    let ex = new Map;
    class ew {
        format(e) {
            return this.formatter.format(e)
        }
        formatToParts(e) {
            return this.formatter.formatToParts(e)
        }
        formatRange(e, t) {
            if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            return "".concat(this.formatter.format(e), " – ").concat(this.formatter.format(t))
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
                return null == e_ && (e_ = "h12" === new Intl.DateTimeFormat("fr", {
                    hour: "numeric",
                    hour12: !1
                }).resolvedOptions().hourCycle), e_
            }() && (!this.resolvedHourCycle && (this.resolvedHourCycle = function(e, t) {
                if (!t.timeStyle && !t.hour) return;
                e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
                let n = ek(e += (e.includes("-u-") ? "" : "-u") + "-nu-latn", {
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
            this.formatter = ek(e, t), this.options = t
        }
    }
    let eS = {
        true: {
            ja: "h11"
        },
        false: {}
    };

    function ek(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("boolean" == typeof t.hour12 && function() {
                return null == eE && (eE = "24" === new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    hour12: !1
                }).format(new Date(2020, 2, 3, 0))), eE
            }()) {
            let n = eS[String((t = {
                    ...t
                }).hour12)][e.split("-")[0]],
                r = t.hour12 ? "h12" : "h23";
            t.hourCycle = null != n ? n : r, delete t.hour12
        }
        let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
        if (ex.has(n)) return ex.get(n);
        let r = new Intl.DateTimeFormat(e, t);
        return ex.set(n, r), r
    }
    let eE = null,
        e_ = null
}