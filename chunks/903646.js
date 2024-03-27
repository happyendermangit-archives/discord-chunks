function(e, t, n) {
    "use strict";
    let r, i;
    n.r(t), n.d(t, {
        createCalendar: function() {
            return eP
        },
        endOfMonth: function() {
            return E
        },
        getWeeksInMonth: function() {
            return x
        },
        isSameDay: function() {
            return h
        },
        isSameMonth: function() {
            return m
        }
    });
    var a = n("825508");

    function o(e, t) {
        return e - t * Math.floor(e / t)
    }

    function s(e, t, n, r) {
        let i = (t = c(e, t)) - 1,
            a = -2;
        return n <= 2 ? a = 0 : u(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r)
    }

    function u(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }

    function c(e, t) {
        return "BC" === e ? 1 - t : t
    }

    function l(e) {
        let t = "AD";
        return e <= 0 && (t = "BC", e = 1 - e), [t, e]
    }
    let d = {
        standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
    class f {
        fromJulianDay(e) {
            let t = e - 1721426,
                n = Math.floor(t / 146097),
                r = o(t, 146097),
                i = Math.floor(r / 36524),
                a = o(r, 36524),
                c = Math.floor(a / 1461),
                d = Math.floor(o(a, 1461) / 365),
                [f, p] = l(400 * n + 100 * i + 4 * c + d + (4 !== i && 4 !== d ? 1 : 0)),
                h = e - s(f, p, 1, 1),
                m = 2;
            e < s(f, p, 3, 1) ? m = 0 : u(p) && (m = 1);
            let g = Math.floor(((h + m) * 12 + 373) / 367),
                _ = e - s(f, p, g, 1) + 1;
            return new V(f, p, g, _)
        }
        toJulianDay(e) {
            return s(e.era, e.year, e.month, e.day)
        }
        getDaysInMonth(e) {
            return d[u(e.year) ? "leapyear" : "standard"][e.month - 1]
        }
        getMonthsInYear(e) {
            return 12
        }
        getDaysInYear(e) {
            return u(e.year) ? 366 : 365
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
    let p = {
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

    function h(e, t) {
        return t = k(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function m(e, t) {
        return t = k(t, e.calendar), e = y(e), t = y(t), e.era === t.era && e.year === t.year && e.month === t.month
    }

    function g(e, t) {
        return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
    }

    function _(e) {
        return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
    }
    let b = null;

    function v() {
        return null == b && (b = new Intl.DateTimeFormat().resolvedOptions().timeZone), b
    }

    function y(e) {
        return e.subtract({
            days: e.day - 1
        })
    }

    function E(e) {
        return e.add({
            days: e.calendar.getDaysInMonth(e) - e.day
        })
    }
    let S = new Map;

    function x(e, t) {
        var n, r;
        let i, a = e.calendar.getDaysInMonth(e);
        return Math.ceil((n = y(e), r = t, (i = Math.ceil(n.calendar.toJulianDay(n) + 1 - function(e) {
            return p[function(e) {
                if (Intl.Locale) {
                    let t = S.get(e);
                    return !t && (t = new Intl.Locale(e).maximize().region, S.set(e, t)), t
                }
                let t = e.split("-")[1];
                return "u" === t ? null : t
            }(e)] || 0
        }(r)) % 7) < 0 && (i += 7), (i + a) / 7))
    }

    function w(e) {
        return T(c((e = k(e, new f)).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    }

    function T(e, t, n, r, i, a, o) {
        let s = new Date;
        return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime()
    }

    function C(e, t) {
        if ("UTC" === t) return 0;
        if (e > 0 && t === v()) return -6e4 * new Date(e).getTimezoneOffset();
        let {
            year: n,
            month: r,
            day: i,
            hour: a,
            minute: o,
            second: s
        } = O(e, t);
        return T(n, r, i, a, o, s, 0) - 1e3 * Math.floor(e / 1e3)
    }
    let D = new Map;

    function O(e, t) {
        let n = D.get(t);
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
        }), D.set(t, n));
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

    function M(e, t, n = "compatible") {
        return new Date(function(e, t, n = "compatible") {
            var r, i, a, o;
            let s = A(e);
            if ("UTC" === t) return w(s);
            if (t === v() && "compatible" === n) {
                s = k(s, new f);
                let e = new Date,
                    t = c(s.era, s.year);
                return e.setFullYear(t, s.month - 1, s.day), e.setHours(s.hour, s.minute, s.second, s.millisecond), e.getTime()
            }
            let u = w(s),
                l = C(u - 864e5, t),
                d = C(u + 864e5, t);
            let p = (r = s, i = t, ((a = u - l) == (o = u - d) ? [a] : [a, o]).filter(e => (function(e, t, n) {
                let r = O(n, t);
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
                    return Math.min(u - l, u - d);
                case "compatible":
                case "later":
                    return Math.max(u - l, u - d);
                case "reject":
                    throw RangeError("No such absolute time found")
            }
        }(e, t, n))
    }

    function A(e, t) {
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
        } = t), new W(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a)
    }

    function k(e, t) {
        if (e.calendar.identifier === t.identifier) return e;
        let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
            r = e.copy();
        return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, P(r), r
    }

    function R(e, t) {
        let n = e.copy(),
            r = "hour" in n ? function(e, t) {
                var n;
                let r;
                e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0;
                return n = e, n.second += Math.floor(n.millisecond / 1e3), n.millisecond = U(n.millisecond, 1e3), n.minute += Math.floor(n.second / 60), n.second = U(n.second, 60), n.hour += Math.floor(n.minute / 60), n.minute = U(n.minute, 60), r = Math.floor(n.hour / 24), n.hour = U(n.hour, 24), r
            }(n, t) : 0;
        N(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, I(n), L(n), n.day += 7 * (t.weeks || 0), n.day += t.days || 0, n.day += r,
            function(e) {
                for (; e.day < 1;) e.month--, I(e), e.day += e.calendar.getDaysInMonth(e);
                for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, I(e)
            }(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
        let i = n.calendar.getYearsInEra(n);
        if (n.year > i) {
            var a, o;
            let e = null === (o = (a = n.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(a, n);
            n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n)
        }
        n.month < 1 && (n.month = 1, n.day = 1);
        let s = n.calendar.getMonthsInYear(n);
        return n.month > s && (n.month = s, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n
    }

    function N(e, t) {
        var n, r;
        (null === (r = (n = e.calendar).isInverseEra) || void 0 === r ? void 0 : r.call(n, e)) && (t = -t), e.year += t
    }

    function I(e) {
        for (; e.month < 1;) N(e, -1), e.month += e.calendar.getMonthsInYear(e);
        let t = 0;
        for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, N(e, 1)
    }

    function L(e) {
        e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
    }

    function P(e) {
        e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), L(e)
    }

    function F(e, t) {
        return R(e, function(e) {
            let t = {};
            for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
            return t
        }(t))
    }

    function B(e, t) {
        let n = e.copy();
        return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), P(n), n
    }

    function U(e, t) {
        let n = e % t;
        return n < 0 && (n += t), n
    }

    function Y(e, t, n, r) {
        let i = e.copy();
        switch (t) {
            case "era": {
                let t = e.calendar.getEras(),
                    a = t.indexOf(e.era);
                if (a < 0) throw Error("Invalid era: " + e.era);
                a = j(a, n, 0, t.length - 1, null == r ? void 0 : r.round), i.era = t[a], P(i);
                break
            }
            case "year":
                var a, o;
                (null === (o = (a = i.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(a, i)) && (n = -n), i.year = j(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
                break;
            case "month":
                i.month = j(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
                break;
            case "day":
                i.day = j(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return e.calendar.balanceDate && e.calendar.balanceDate(i), P(i), i
    }

    function j(e, t, n, r, i = !1) {
        if (i) {
            (e += Math.sign(t)) < n && (e = r);
            let i = Math.abs(t);
            (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n)
        } else(e += t) < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
        return e
    }

    function z(e) {
        let t = k(e, new f);
        return `${String(t.year).padStart(4,"0")}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`
    }

    function H(e) {
        let t, n = "object" == typeof e[0] ? e.shift() : new f;
        if ("string" == typeof e[0]) t = e.shift();
        else {
            let e = n.getEras();
            t = e[e.length - 1]
        }
        return [n, t, e.shift(), e.shift(), e.shift()]
    }
    var G = new WeakMap;
    class V {
        copy() {
            return this.era ? new V(this.calendar, this.era, this.year, this.month, this.day) : new V(this.calendar, this.year, this.month, this.day)
        }
        add(e) {
            return R(this, e)
        }
        subtract(e) {
            return F(this, e)
        }
        set(e) {
            return B(this, e)
        }
        cycle(e, t, n) {
            return Y(this, e, t, n)
        }
        toDate(e) {
            return M(this, e)
        }
        toString() {
            return z(this)
        }
        compare(e) {
            return g(this, e)
        }
        constructor(...e) {
            (0, a._)(this, G, {
                writable: !0,
                value: void 0
            });
            let [t, n, r, i, o] = H(e);
            this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = o, P(this)
        }
    }
    var $ = new WeakMap;
    class W {
        copy() {
            return this.era ? new W(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new W(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return R(this, e)
        }
        subtract(e) {
            return F(this, e)
        }
        set(e) {
            var t, n;
            let r;
            return B((t = this, n = e, r = t.copy(), null != n.hour && (r.hour = n.hour), null != n.minute && (r.minute = n.minute), null != n.second && (r.second = n.second), null != n.millisecond && (r.millisecond = n.millisecond), function(e) {
                e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23))
            }(r), r), e)
        }
        cycle(e, t, n) {
            switch (e) {
                case "era":
                case "year":
                case "month":
                case "day":
                    return Y(this, e, t, n);
                default:
                    return function(e, t, n, r) {
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
                                i.hour = j(t, n, a, o, null == r ? void 0 : r.round);
                                break
                            }
                            case "minute":
                                i.minute = j(e.minute, n, 0, 59, null == r ? void 0 : r.round);
                                break;
                            case "second":
                                i.second = j(e.second, n, 0, 59, null == r ? void 0 : r.round);
                                break;
                            case "millisecond":
                                i.millisecond = j(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
                                break;
                            default:
                                throw Error("Unsupported field " + t)
                        }
                        return i
                    }(this, e, t, n)
            }
        }
        toDate(e, t) {
            return M(this, e, t)
        }
        toString() {
            var e, t;
            return e = this, `${z(e)}T${t=e,`${String(t.hour).padStart(2,"0")}:${String(t.minute).padStart(2,"0")}:${String(t.second).padStart(2,"0")}${t.millisecond?String(t.millisecond/1e3).slice(1):""}`}`
        }
        compare(e) {
            let t = g(this, e);
            if (0 === t) {
                var n, r;
                return n = this, r = A(e), _(n) - _(r)
            }
            return t
        }
        constructor(...e) {
            (0, a._)(this, $, {
                writable: !0,
                value: void 0
            });
            let [t, n, r, i, o] = H(e);
            this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = o, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, P(this)
        }
    }
    let K = [
            [1868, 9, 8],
            [1912, 7, 30],
            [1926, 12, 25],
            [1989, 1, 8],
            [2019, 5, 1]
        ],
        q = [
            [1912, 7, 29],
            [1926, 12, 24],
            [1989, 1, 7],
            [2019, 4, 30]
        ],
        Q = [1867, 1911, 1925, 1988, 2018],
        Z = ["meiji", "taisho", "showa", "heisei", "reiwa"];

    function X(e) {
        let t = K.findIndex(([t, n, r]) => !!(e.year < t) || e.year === t && !!(e.month < n) || e.year === t && e.month === n && !!(e.day < r) || !1);
        return -1 === t ? K.length - 1 : 0 === t ? 0 : t - 1
    }

    function J(e) {
        let t = Q[Z.indexOf(e.era)];
        if (!t) throw Error("Unknown era: " + e.era);
        return new V(e.year + t, e.month, e.day)
    }
    class ee extends f {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e),
                n = X(t);
            return new V(this, Z[n], t.year - Q[n], t.month, t.day)
        }
        toJulianDay(e) {
            return super.toJulianDay(J(e))
        }
        balanceDate(e) {
            let t = J(e),
                n = X(t);
            Z[n] !== e.era && (e.era = Z[n], e.year = t.year - Q[n]), this.constrainDate(e)
        }
        constrainDate(e) {
            let t = Z.indexOf(e.era),
                n = q[t];
            if (null != n) {
                let [r, i, a] = n, o = r - Q[t];
                e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(a, e.day)))
            }
            if (1 === e.year && t >= 0) {
                let [, n, r] = K[t];
                e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day))
            }
        }
        getEras() {
            return Z
        }
        getYearsInEra(e) {
            let t = Z.indexOf(e.era),
                n = K[t],
                r = K[t + 1];
            if (null == r) return 9999 - n[0] + 1;
            let i = r[0] - n[0];
            return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i
        }
        getDaysInMonth(e) {
            return super.getDaysInMonth(J(e))
        }
        getMinimumMonthInYear(e) {
            let t = et(e);
            return t ? t[1] : 1
        }
        getMinimumDayInMonth(e) {
            let t = et(e);
            return t && e.month === t[1] ? t[2] : 1
        }
        constructor(...e) {
            super(...e), this.identifier = "japanese"
        }
    }

    function et(e) {
        if (1 === e.year) return K[Z.indexOf(e.era)]
    }
    class en extends f {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e);
            return new V(this, c(t.era, t.year) - -543, t.month, t.day)
        }
        toJulianDay(e) {
            return super.toJulianDay(er(e))
        }
        getEras() {
            return ["BE"]
        }
        getDaysInMonth(e) {
            return super.getDaysInMonth(er(e))
        }
        balanceDate() {}
        constructor(...e) {
            super(...e), this.identifier = "buddhist"
        }
    }

    function er(e) {
        let [t, n] = l(e.year + -543);
        return new V(t, n, e.month, e.day)
    }

    function ei(e) {
        return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911
    }

    function ea(e) {
        let t = e - 1911;
        return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t]
    }
    class eo extends f {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e),
                [n, r] = ea(c(t.era, t.year));
            return new V(this, n, r, t.month, t.day)
        }
        toJulianDay(e) {
            return super.toJulianDay(es(e))
        }
        getEras() {
            return ["before_minguo", "minguo"]
        }
        balanceDate(e) {
            let [t, n] = ea(ei(e));
            e.era = t, e.year = n
        }
        isInverseEra(e) {
            return "before_minguo" === e.era
        }
        getDaysInMonth(e) {
            return super.getDaysInMonth(es(e))
        }
        getYearsInEra(e) {
            return "before_minguo" === e.era ? 9999 : 8088
        }
        constructor(...e) {
            super(...e), this.identifier = "roc"
        }
    }

    function es(e) {
        let [t, n] = l(ei(e));
        return new V(t, n, e.month, e.day)
    }

    function eu(e, t, n) {
        let r = e > 0 ? e - 474 : e - 473,
            i = o(r, 2820) + 474;
        return 1948320 + 1029983 * Math.floor(r / 2820) + 365 * (i - 1) + Math.floor((31 * i - 5) / 128) + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + n
    }
    class ec {
        fromJulianDay(e) {
            let t = e - eu(475, 1, 1),
                n = Math.floor(t / 1029983),
                r = o(t, 1029983),
                i = 474 + 2820 * n + (1029982 === r ? 2820 : Math.floor((128 * r + 46878) / 46751));
            i <= 0 && i--;
            let a = e - eu(i, 1, 1) + 1,
                s = a <= 186 ? Math.ceil(a / 31) : Math.ceil((a - 6) / 31),
                u = e - eu(i, s, 1) + 1;
            return new V(this, i, s, u)
        }
        toJulianDay(e) {
            return eu(e.year, e.month, e.day)
        }
        getMonthsInYear() {
            return 12
        }
        getDaysInMonth(e) {
            var t;
            let n;
            if (e.month <= 6) return 31;
            if (e.month <= 11) return 30;
            return (n = o((t = e.year) > 0 ? t - 474 : t - 473, 2820) + 474, 31 > o((n + 38) * 31, 128)) ? 30 : 29
        }
        getEras() {
            return ["AP"]
        }
        getYearsInEra() {
            return 9377
        }
        constructor() {
            this.identifier = "persian"
        }
    }
    class el extends f {
        fromJulianDay(e) {
            let t, n, r, i = super.fromJulianDay(e),
                a = i.year - 78,
                o = e - s(i.era, i.year, 1, 1);
            if (o < 80 ? (a--, o += (t = u(i.year - 1) ? 31 : 30) + 155 + 90 + 10) : (t = u(i.year) ? 31 : 30, o -= 80), o < t) n = 1, r = o + 1;
            else {
                let e = o - t;
                e < 155 ? (n = Math.floor(e / 31) + 2, r = e % 31 + 1) : (e -= 155, n = Math.floor(e / 30) + 7, r = e % 30 + 1)
            }
            return new V(this, a, n, r)
        }
        toJulianDay(e) {
            let t, n;
            let [r, i] = l(e.year + 78);
            return (u(i) ? (t = 31, n = s(r, i, 3, 21)) : (t = 30, n = s(r, i, 3, 22)), 1 === e.month) ? n + e.day - 1 : (n += t + 31 * Math.min(e.month - 2, 5), e.month >= 8 && (n += (e.month - 7) * 30), n += e.day - 1)
        }
        getDaysInMonth(e) {
            return 1 === e.month && u(e.year + 78) || e.month >= 2 && e.month <= 6 ? 31 : 30
        }
        getYearsInEra() {
            return 9919
        }
        getEras() {
            return ["saka"]
        }
        balanceDate() {}
        constructor(...e) {
            super(...e), this.identifier = "indian"
        }
    }

    function ed(e, t, n, r) {
        return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1
    }

    function ef(e, t, n) {
        let r = Math.floor((30 * (n - t) + 10646) / 10631),
            i = Math.min(12, Math.ceil((n - (29 + ed(t, r, 1, 1))) / 29.5) + 1),
            a = n - ed(t, r, i, 1) + 1;
        return new V(e, r, i, a)
    }

    function ep(e) {
        return (14 + 11 * e) % 30 < 11
    }
    class eh {
        fromJulianDay(e) {
            return ef(this, 1948440, e)
        }
        toJulianDay(e) {
            return ed(1948440, e.year, e.month, e.day)
        }
        getDaysInMonth(e) {
            let t = 29 + e.month % 2;
            return 12 === e.month && ep(e.year) && t++, t
        }
        getMonthsInYear() {
            return 12
        }
        getDaysInYear(e) {
            return ep(e.year) ? 355 : 354
        }
        getYearsInEra() {
            return 9665
        }
        getEras() {
            return ["AH"]
        }
        constructor() {
            this.identifier = "islamic-civil"
        }
    }
    class em extends eh {
        fromJulianDay(e) {
            return ef(this, 1948439, e)
        }
        toJulianDay(e) {
            return ed(1948439, e.year, e.month, e.day)
        }
        constructor(...e) {
            super(...e), this.identifier = "islamic-tbla"
        }
    }

    function eg(e) {
        return 460322 + i[e - 1300]
    }

    function e_(e, t) {
        return (r[e - 1300] & 1 << 11 - (t - 1)) == 0 ? 29 : 30
    }

    function eb(e, t) {
        let n = eg(e);
        for (let r = 1; r < t; r++) n += e_(e, r);
        return n
    }

    function ev(e) {
        return i[e + 1 - 1300] - i[e - 1300]
    }
    class ey extends eh {
        fromJulianDay(e) {
            let t = e - 1948440,
                n = eg(1300),
                r = eg(1600);
            if (t < n || t > r) return super.fromJulianDay(e);
            {
                let e = 1299,
                    n = 1,
                    r = 1;
                for (; r > 0;) {
                    r = t - eg(++e) + 1;
                    let i = ev(e);
                    if (r === i) {
                        n = 12;
                        break
                    }
                    if (r < i) {
                        let t = e_(e, n);
                        for (n = 1; r > t;) r -= t, t = e_(e, ++n);
                        break
                    }
                }
                return new V(this, e, n, t - eb(e, n) + 1)
            }
        }
        toJulianDay(e) {
            return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + eb(e.year, e.month) + (e.day - 1)
        }
        getDaysInMonth(e) {
            return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : e_(e.year, e.month)
        }
        getDaysInYear(e) {
            return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : ev(e.year)
        }
        constructor() {
            if (super(), this.identifier = "islamic-umalqura", !r && (r = new Uint16Array(Uint8Array.from(atob("qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI="), e => e.charCodeAt(0)).buffer)), !i) {
                i = new Uint32Array(301);
                let e = 0;
                for (let t = 1300; t <= 1600; t++) {
                    i[t - 1300] = e;
                    for (let n = 1; n <= 12; n++) e += e_(t, n)
                }
            }
        }
    }
    let eE = 25920,
        eS = 29 * eE + 13753;

    function ex(e) {
        return 7 > o(7 * e + 1, 19)
    }

    function ew(e) {
        let t = Math.floor((235 * e - 234) / 19),
            n = 29 * t + Math.floor((12084 + 13753 * t) / 25920);
        return 3 > o(3 * (n + 1), 7) && (n += 1), n
    }

    function eT(e) {
        var t;
        let n, r;
        return ew(e) + (n = ew((t = e) - 1), r = ew(t), ew(t + 1) - r == 356 ? 2 : r - n == 382 ? 1 : 0)
    }

    function eC(e) {
        return eT(e + 1) - eT(e)
    }

    function eD(e, t) {
        if (t >= 6 && !ex(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t) return 29;
        let n = function(e) {
            let t = eC(e);
            switch (t > 380 && (t -= 30), t) {
                case 353:
                    return 0;
                case 354:
                    return 1;
                case 355:
                    return 2
            }
        }(e);
        return 2 === t ? 2 === n ? 30 : 29 : 3 === t ? 0 === n ? 29 : 30 : 6 === t ? ex(e) ? 30 : 0 : 30
    }
    class eO {
        fromJulianDay(e) {
            let t = e - 347997,
                n = Math.floor((t * eE / eS * 19 + 234) / 235) + 1,
                r = eT(n),
                i = Math.floor(t - r);
            for (; i < 1;) i = Math.floor(t - (r = eT(--n)));
            let a = 1,
                o = 0;
            for (; o < i;) o += eD(n, a), a++;
            let s = i - (o -= eD(n, --a));
            return new V(this, n, a, s)
        }
        toJulianDay(e) {
            let t = eT(e.year);
            for (let n = 1; n < e.month; n++) t += eD(e.year, n);
            return t + e.day + 347997
        }
        getDaysInMonth(e) {
            return eD(e.year, e.month)
        }
        getMonthsInYear(e) {
            return ex(e.year) ? 13 : 12
        }
        getDaysInYear(e) {
            return eC(e.year)
        }
        getYearsInEra() {
            return 9999
        }
        getEras() {
            return ["AM"]
        }
        balanceYearMonth(e, t) {
            t.year !== e.year && (ex(t.year) && !ex(e.year) && t.month > 6 ? e.month-- : !ex(t.year) && ex(e.year) && t.month > 6 && e.month++)
        }
        constructor() {
            this.identifier = "hebrew"
        }
    }

    function eM(e, t, n, r) {
        return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1
    }

    function eA(e, t) {
        let n = Math.floor(4 * (t - e) / 1461),
            r = 1 + Math.floor((t - eM(e, n, 1, 1)) / 30),
            i = t + 1 - eM(e, n, r, 1);
        return [n, r, i]
    }

    function ek(e) {
        return Math.floor(e % 4 / 3)
    }

    function eR(e, t) {
        return t % 13 != 0 ? 30 : ek(e) + 5
    }
    class eN {
        fromJulianDay(e) {
            let [t, n, r] = eA(1723856, e), i = "AM";
            return t <= 0 && (i = "AA", t += 5500), new V(this, i, t, n, r)
        }
        toJulianDay(e) {
            let t = e.year;
            return "AA" === e.era && (t -= 5500), eM(1723856, t, e.month, e.day)
        }
        getDaysInMonth(e) {
            return eR(e.year, e.month)
        }
        getMonthsInYear() {
            return 13
        }
        getDaysInYear(e) {
            return 365 + ek(e.year)
        }
        getYearsInEra(e) {
            return "AA" === e.era ? 9999 : 9991
        }
        getEras() {
            return ["AA", "AM"]
        }
        constructor() {
            this.identifier = "ethiopic"
        }
    }
    class eI extends eN {
        fromJulianDay(e) {
            let [t, n, r] = eA(1723856, e);
            return new V(this, "AA", t += 5500, n, r)
        }
        getEras() {
            return ["AA"]
        }
        getYearsInEra() {
            return 9999
        }
        constructor(...e) {
            super(...e), this.identifier = "ethioaa"
        }
    }
    class eL extends eN {
        fromJulianDay(e) {
            let [t, n, r] = eA(1824665, e), i = "CE";
            return t <= 0 && (i = "BCE", t = 1 - t), new V(this, i, t, n, r)
        }
        toJulianDay(e) {
            let t = e.year;
            return "BCE" === e.era && (t = 1 - t), eM(1824665, t, e.month, e.day)
        }
        getDaysInMonth(e) {
            let t = e.year;
            return "BCE" === e.era && (t = 1 - t), eR(t, e.month)
        }
        isInverseEra(e) {
            return "BCE" === e.era
        }
        balanceDate(e) {
            e.year <= 0 && (e.era = "BCE" === e.era ? "CE" : "BCE", e.year = 1 - e.year)
        }
        getEras() {
            return ["BCE", "CE"]
        }
        getYearsInEra(e) {
            return "BCE" === e.era ? 9999 : 9715
        }
        constructor(...e) {
            super(...e), this.identifier = "coptic"
        }
    }

    function eP(e) {
        switch (e) {
            case "buddhist":
                return new en;
            case "ethiopic":
                return new eN;
            case "ethioaa":
                return new eI;
            case "coptic":
                return new eL;
            case "hebrew":
                return new eO;
            case "indian":
                return new el;
            case "islamic-civil":
                return new eh;
            case "islamic-tbla":
                return new em;
            case "islamic-umalqura":
                return new ey;
            case "japanese":
                return new ee;
            case "persian":
                return new ec;
            case "roc":
                return new eo;
            default:
                return new f
        }
    }
}