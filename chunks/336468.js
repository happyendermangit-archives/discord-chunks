function(e, t, n) {
    "use strict";
    let r, a;
    n.r(t), n.d(t, {
        createCalendar: function() {
            return eF
        },
        isSameDay: function() {
            return m
        },
        isSameMonth: function() {
            return h
        },
        endOfMonth: function() {
            return S
        },
        getWeeksInMonth: function() {
            return D
        }
    }), n("222007"), n("70102"), n("781738"), n("659510"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790"), n("492311"), n("101997"), n("990131");
    var i = n("599514");

    function o(e, t) {
        return e - t * Math.floor(e / t)
    }

    function s(e, t, n, r) {
        let a = (t = l(e, t)) - 1,
            i = -2;
        return n <= 2 ? i = 0 : c(t) && (i = -1), 1721425 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * n - 362) / 12 + i + r)
    }

    function c(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }

    function l(e, t) {
        return "BC" === e ? 1 - t : t
    }

    function u(e) {
        let t = "AD";
        return e <= 0 && (t = "BC", e = 1 - e), [t, e]
    }
    let d = {
        standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
    class p {
        fromJulianDay(e) {
            let t = e - 1721426,
                n = Math.floor(t / 146097),
                r = o(t, 146097),
                a = Math.floor(r / 36524),
                i = o(r, 36524),
                l = Math.floor(i / 1461),
                d = Math.floor(o(i, 1461) / 365),
                [p, f] = u(400 * n + 100 * a + 4 * l + d + (4 !== a && 4 !== d ? 1 : 0)),
                m = e - s(p, f, 1, 1),
                h = 2;
            e < s(p, f, 3, 1) ? h = 0 : c(f) && (h = 1);
            let v = Math.floor(((m + h) * 12 + 373) / 367),
                g = e - s(p, f, v, 1) + 1;
            return new G(p, f, v, g)
        }
        toJulianDay(e) {
            return s(e.era, e.year, e.month, e.day)
        }
        getDaysInMonth(e) {
            return d[c(e.year) ? "leapyear" : "standard"][e.month - 1]
        }
        getMonthsInYear(e) {
            return 12
        }
        getDaysInYear(e) {
            return c(e.year) ? 366 : 365
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
    let f = {
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

    function m(e, t) {
        return t = I(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function h(e, t) {
        return t = I(t, e.calendar), e = x(e), t = x(t), e.era === t.era && e.year === t.year && e.month === t.month
    }

    function v(e, t) {
        return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
    }

    function g(e) {
        return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
    }
    let y = null;

    function b() {
        return null == y && (y = new Intl.DateTimeFormat().resolvedOptions().timeZone), y
    }

    function x(e) {
        return e.subtract({
            days: e.day - 1
        })
    }

    function S(e) {
        return e.add({
            days: e.calendar.getDaysInMonth(e) - e.day
        })
    }
    let w = new Map;

    function D(e, t) {
        var n, r;
        let a, i = e.calendar.getDaysInMonth(e);
        return Math.ceil((n = x(e), r = t, (a = Math.ceil(n.calendar.toJulianDay(n) + 1 - function(e) {
            return f[function(e) {
                if (Intl.Locale) {
                    let t = w.get(e);
                    return !t && (t = new Intl.Locale(e).maximize().region, w.set(e, t)), t
                }
                let t = e.split("-")[1];
                return "u" === t ? null : t
            }(e)] || 0
        }(r)) % 7) < 0 && (a += 7), (a + i) / 7))
    }

    function C(e) {
        return k(l((e = I(e, new p)).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    }

    function k(e, t, n, r, a, i, o) {
        let s = new Date;
        return s.setUTCHours(r, a, i, o), s.setUTCFullYear(e, t - 1, n), s.getTime()
    }

    function P(e, t) {
        if ("UTC" === t) return 0;
        if (e > 0 && t === b()) return -6e4 * new Date(e).getTimezoneOffset();
        let {
            year: n,
            month: r,
            day: a,
            hour: i,
            minute: o,
            second: s
        } = T(e, t);
        return k(n, r, a, i, o, s, 0) - 1e3 * Math.floor(e / 1e3)
    }
    let E = new Map;

    function T(e, t) {
        let n = E.get(t);
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
        }), E.set(t, n));
        let r = n.formatToParts(new Date(e)),
            a = {};
        for (let e of r) "literal" !== e.type && (a[e.type] = e.value);
        return {
            year: "BC" === a.era || "B" === a.era ? -a.year + 1 : +a.year,
            month: +a.month,
            day: +a.day,
            hour: "24" === a.hour ? 0 : +a.hour,
            minute: +a.minute,
            second: +a.second
        }
    }

    function M(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible";
        return new Date(function(e, t) {
            var n, r, a, i;
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible",
                s = R(e);
            if ("UTC" === t) return C(s);
            if (t === b() && "compatible" === o) {
                s = I(s, new p);
                let e = new Date,
                    t = l(s.era, s.year);
                return e.setFullYear(t, s.month - 1, s.day), e.setHours(s.hour, s.minute, s.second, s.millisecond), e.getTime()
            }
            let c = C(s),
                u = P(c - 864e5, t),
                d = P(c + 864e5, t);
            let f = (n = s, r = t, ((a = c - u) == (i = c - d) ? [a] : [a, i]).filter(e => (function(e, t, n) {
                let r = T(n, t);
                return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second
            })(n, r, e)));
            if (1 === f.length) return f[0];
            if (f.length > 1) switch (o) {
                case "compatible":
                case "earlier":
                    return f[0];
                case "later":
                    return f[f.length - 1];
                case "reject":
                    throw RangeError("Multiple possible absolute times found")
            }
            switch (o) {
                case "earlier":
                    return Math.min(c - u, c - d);
                case "compatible":
                case "later":
                    return Math.max(c - u, c - d);
                case "reject":
                    throw RangeError("No such absolute time found")
            }
        }(e, t, n))
    }

    function R(e, t) {
        let n = 0,
            r = 0,
            a = 0,
            i = 0;
        if ("timeZone" in e)({
            hour: n,
            minute: r,
            second: a,
            millisecond: i
        } = e);
        else if ("hour" in e && !t) return e;
        return t && ({
            hour: n,
            minute: r,
            second: a,
            millisecond: i
        } = t), new q(e.calendar, e.era, e.year, e.month, e.day, n, r, a, i)
    }

    function I(e, t) {
        if (e.calendar.identifier === t.identifier) return e;
        let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
            r = e.copy();
        return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, F(r), r
    }

    function O(e, t) {
        let n = e.copy(),
            r = "hour" in n ? function(e, t) {
                var n;
                let r;
                e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0;
                return n = e, n.second += Math.floor(n.millisecond / 1e3), n.millisecond = _(n.millisecond, 1e3), n.minute += Math.floor(n.second / 60), n.second = _(n.second, 60), n.hour += Math.floor(n.minute / 60), n.minute = _(n.minute, 60), r = Math.floor(n.hour / 24), n.hour = _(n.hour, 24), r
            }(n, t) : 0;
        A(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, L(n), N(n), n.day += 7 * (t.weeks || 0), n.day += t.days || 0, n.day += r,
            function(e) {
                for (; e.day < 1;) e.month--, L(e), e.day += e.calendar.getDaysInMonth(e);
                for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, L(e)
            }(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
        let a = n.calendar.getYearsInEra(n);
        if (n.year > a) {
            var i, o;
            let e = null === (o = (i = n.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(i, n);
            n.year = a, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n)
        }
        n.month < 1 && (n.month = 1, n.day = 1);
        let s = n.calendar.getMonthsInYear(n);
        return n.month > s && (n.month = s, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n
    }

    function A(e, t) {
        var n, r;
        (null === (r = (n = e.calendar).isInverseEra) || void 0 === r ? void 0 : r.call(n, e)) && (t = -t), e.year += t
    }

    function L(e) {
        for (; e.month < 1;) A(e, -1), e.month += e.calendar.getMonthsInYear(e);
        let t = 0;
        for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, A(e, 1)
    }

    function N(e) {
        e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
    }

    function F(e) {
        e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), N(e)
    }

    function j(e, t) {
        return O(e, function(e) {
            let t = {};
            for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
            return t
        }(t))
    }

    function K(e, t) {
        let n = e.copy();
        return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), F(n), n
    }

    function _(e, t) {
        let n = e % t;
        return n < 0 && (n += t), n
    }

    function V(e, t, n, r) {
        let a = e.copy();
        switch (t) {
            case "era": {
                let t = e.calendar.getEras(),
                    i = t.indexOf(e.era);
                if (i < 0) throw Error("Invalid era: " + e.era);
                i = z(i, n, 0, t.length - 1, null == r ? void 0 : r.round), a.era = t[i], F(a);
                break
            }
            case "year":
                var i, o;
                (null === (o = (i = a.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(i, a)) && (n = -n), a.year = z(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round), a.year === -1 / 0 && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
                break;
            case "month":
                a.month = z(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
                break;
            case "day":
                a.day = z(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return e.calendar.balanceDate && e.calendar.balanceDate(a), F(a), a
    }

    function z(e, t, n, r) {
        let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (a) {
            (e += Math.sign(t)) < n && (e = r);
            let a = Math.abs(t);
            (e = t > 0 ? Math.ceil(e / a) * a : Math.floor(e / a) * a) > r && (e = n)
        } else(e += t) < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
        return e
    }

    function B(e) {
        let t = I(e, new p);
        return "".concat(String(t.year).padStart(4, "0"), "-").concat(String(t.month).padStart(2, "0"), "-").concat(String(t.day).padStart(2, "0"))
    }

    function U(e) {
        let t, n = "object" == typeof e[0] ? e.shift() : new p;
        if ("string" == typeof e[0]) t = e.shift();
        else {
            let e = n.getEras();
            t = e[e.length - 1]
        }
        return [n, t, e.shift(), e.shift(), e.shift()]
    }
    var H = new WeakMap;
    class G {
        copy() {
            return this.era ? new G(this.calendar, this.era, this.year, this.month, this.day) : new G(this.calendar, this.year, this.month, this.day)
        }
        add(e) {
            return O(this, e)
        }
        subtract(e) {
            return j(this, e)
        }
        set(e) {
            return K(this, e)
        }
        cycle(e, t, n) {
            return V(this, e, t, n)
        }
        toDate(e) {
            return M(this, e)
        }
        toString() {
            return B(this)
        }
        compare(e) {
            return v(this, e)
        }
        constructor(...e) {
            (0, i._)(this, H, {
                writable: !0,
                value: void 0
            });
            let [t, n, r, a, o] = U(e);
            this.calendar = t, this.era = n, this.year = r, this.month = a, this.day = o, F(this)
        }
    }
    var W = new WeakMap;
    class q {
        copy() {
            return this.era ? new q(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new q(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return O(this, e)
        }
        subtract(e) {
            return j(this, e)
        }
        set(e) {
            var t, n;
            let r;
            return K((t = this, n = e, r = t.copy(), null != n.hour && (r.hour = n.hour), null != n.minute && (r.minute = n.minute), null != n.second && (r.second = n.second), null != n.millisecond && (r.millisecond = n.millisecond), function(e) {
                e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23))
            }(r), r), e)
        }
        cycle(e, t, n) {
            switch (e) {
                case "era":
                case "year":
                case "month":
                case "day":
                    return V(this, e, t, n);
                default:
                    return function(e, t, n, r) {
                        let a = e.copy();
                        switch (t) {
                            case "hour": {
                                let t = e.hour,
                                    i = 0,
                                    o = 23;
                                if ((null == r ? void 0 : r.hourCycle) === 12) {
                                    let e = t >= 12;
                                    i = e ? 12 : 0, o = e ? 23 : 11
                                }
                                a.hour = z(t, n, i, o, null == r ? void 0 : r.round);
                                break
                            }
                            case "minute":
                                a.minute = z(e.minute, n, 0, 59, null == r ? void 0 : r.round);
                                break;
                            case "second":
                                a.second = z(e.second, n, 0, 59, null == r ? void 0 : r.round);
                                break;
                            case "millisecond":
                                a.millisecond = z(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
                                break;
                            default:
                                throw Error("Unsupported field " + t)
                        }
                        return a
                    }(this, e, t, n)
            }
        }
        toDate(e, t) {
            return M(this, e, t)
        }
        toString() {
            var e, t;
            return e = this, "".concat(B(e), "T").concat((t = e, "".concat(String(t.hour).padStart(2, "0"), ":").concat(String(t.minute).padStart(2, "0"), ":").concat(String(t.second).padStart(2, "0")).concat(t.millisecond ? String(t.millisecond / 1e3).slice(1) : "")))
        }
        compare(e) {
            let t = v(this, e);
            if (0 === t) {
                var n, r;
                return n = this, r = R(e), g(n) - g(r)
            }
            return t
        }
        constructor(...e) {
            (0, i._)(this, W, {
                writable: !0,
                value: void 0
            });
            let [t, n, r, a, o] = U(e);
            this.calendar = t, this.era = n, this.year = r, this.month = a, this.day = o, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, F(this)
        }
    }
    let Z = [
            [1868, 9, 8],
            [1912, 7, 30],
            [1926, 12, 25],
            [1989, 1, 8],
            [2019, 5, 1]
        ],
        Y = [
            [1912, 7, 29],
            [1926, 12, 24],
            [1989, 1, 7],
            [2019, 4, 30]
        ],
        X = [1867, 1911, 1925, 1988, 2018],
        J = ["meiji", "taisho", "showa", "heisei", "reiwa"];

    function $(e) {
        let t = Z.findIndex(t => {
            let [n, r, a] = t;
            return !!(e.year < n) || e.year === n && !!(e.month < r) || e.year === n && e.month === r && !!(e.day < a) || !1
        });
        return -1 === t ? Z.length - 1 : 0 === t ? 0 : t - 1
    }

    function Q(e) {
        let t = X[J.indexOf(e.era)];
        if (!t) throw Error("Unknown era: " + e.era);
        return new G(e.year + t, e.month, e.day)
    }
    class ee extends p {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e),
                n = $(t);
            return new G(this, J[n], t.year - X[n], t.month, t.day)
        }
        toJulianDay(e) {
            return super.toJulianDay(Q(e))
        }
        balanceDate(e) {
            let t = Q(e),
                n = $(t);
            J[n] !== e.era && (e.era = J[n], e.year = t.year - X[n]), this.constrainDate(e)
        }
        constrainDate(e) {
            let t = J.indexOf(e.era),
                n = Y[t];
            if (null != n) {
                let [r, a, i] = n, o = r - X[t];
                e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(a, e.month), e.month === a && (e.day = Math.min(i, e.day)))
            }
            if (1 === e.year && t >= 0) {
                let [, n, r] = Z[t];
                e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day))
            }
        }
        getEras() {
            return J
        }
        getYearsInEra(e) {
            let t = J.indexOf(e.era),
                n = Z[t],
                r = Z[t + 1];
            if (null == r) return 9999 - n[0] + 1;
            let a = r[0] - n[0];
            return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && a++, a
        }
        getDaysInMonth(e) {
            return super.getDaysInMonth(Q(e))
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
        if (1 === e.year) return Z[J.indexOf(e.era)]
    }
    class en extends p {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e);
            return new G(this, l(t.era, t.year) - -543, t.month, t.day)
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
        let [t, n] = u(e.year + -543);
        return new G(t, n, e.month, e.day)
    }

    function ea(e) {
        return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911
    }

    function ei(e) {
        let t = e - 1911;
        return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t]
    }
    class eo extends p {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e),
                [n, r] = ei(l(t.era, t.year));
            return new G(this, n, r, t.month, t.day)
        }
        toJulianDay(e) {
            return super.toJulianDay(es(e))
        }
        getEras() {
            return ["before_minguo", "minguo"]
        }
        balanceDate(e) {
            let [t, n] = ei(ea(e));
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
        let [t, n] = u(ea(e));
        return new G(t, n, e.month, e.day)
    }

    function ec(e, t, n) {
        let r = e > 0 ? e - 474 : e - 473,
            a = o(r, 2820) + 474;
        return 1948320 + 1029983 * Math.floor(r / 2820) + 365 * (a - 1) + Math.floor((31 * a - 5) / 128) + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + n
    }
    class el {
        fromJulianDay(e) {
            let t = e - ec(475, 1, 1),
                n = Math.floor(t / 1029983),
                r = o(t, 1029983),
                a = 474 + 2820 * n + (1029982 === r ? 2820 : Math.floor((128 * r + 46878) / 46751));
            a <= 0 && a--;
            let i = e - ec(a, 1, 1) + 1,
                s = i <= 186 ? Math.ceil(i / 31) : Math.ceil((i - 6) / 31),
                c = e - ec(a, s, 1) + 1;
            return new G(this, a, s, c)
        }
        toJulianDay(e) {
            return ec(e.year, e.month, e.day)
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
    class eu extends p {
        fromJulianDay(e) {
            let t, n, r, a = super.fromJulianDay(e),
                i = a.year - 78,
                o = e - s(a.era, a.year, 1, 1);
            if (o < 80 ? (i--, o += (t = c(a.year - 1) ? 31 : 30) + 155 + 90 + 10) : (t = c(a.year) ? 31 : 30, o -= 80), o < t) n = 1, r = o + 1;
            else {
                let e = o - t;
                e < 155 ? (n = Math.floor(e / 31) + 2, r = e % 31 + 1) : (e -= 155, n = Math.floor(e / 30) + 7, r = e % 30 + 1)
            }
            return new G(this, i, n, r)
        }
        toJulianDay(e) {
            let t, n;
            let [r, a] = u(e.year + 78);
            return (c(a) ? (t = 31, n = s(r, a, 3, 21)) : (t = 30, n = s(r, a, 3, 22)), 1 === e.month) ? n + e.day - 1 : (n += t + 31 * Math.min(e.month - 2, 5), e.month >= 8 && (n += (e.month - 7) * 30), n += e.day - 1)
        }
        getDaysInMonth(e) {
            return 1 === e.month && c(e.year + 78) || e.month >= 2 && e.month <= 6 ? 31 : 30
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

    function ep(e, t, n) {
        let r = Math.floor((30 * (n - t) + 10646) / 10631),
            a = Math.min(12, Math.ceil((n - (29 + ed(t, r, 1, 1))) / 29.5) + 1),
            i = n - ed(t, r, a, 1) + 1;
        return new G(e, r, a, i)
    }

    function ef(e) {
        return (14 + 11 * e) % 30 < 11
    }
    class em {
        fromJulianDay(e) {
            return ep(this, 1948440, e)
        }
        toJulianDay(e) {
            return ed(1948440, e.year, e.month, e.day)
        }
        getDaysInMonth(e) {
            let t = 29 + e.month % 2;
            return 12 === e.month && ef(e.year) && t++, t
        }
        getMonthsInYear() {
            return 12
        }
        getDaysInYear(e) {
            return ef(e.year) ? 355 : 354
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
    class eh extends em {
        fromJulianDay(e) {
            return ep(this, 1948439, e)
        }
        toJulianDay(e) {
            return ed(1948439, e.year, e.month, e.day)
        }
        constructor(...e) {
            super(...e), this.identifier = "islamic-tbla"
        }
    }

    function ev(e) {
        return 460322 + a[e - 1300]
    }

    function eg(e, t) {
        return (r[e - 1300] & 1 << 11 - (t - 1)) == 0 ? 29 : 30
    }

    function ey(e, t) {
        let n = ev(e);
        for (let r = 1; r < t; r++) n += eg(e, r);
        return n
    }

    function eb(e) {
        return a[e + 1 - 1300] - a[e - 1300]
    }
    class ex extends em {
        fromJulianDay(e) {
            let t = e - 1948440,
                n = ev(1300),
                r = ev(1600);
            if (t < n || t > r) return super.fromJulianDay(e);
            {
                let e = 1299,
                    n = 1,
                    r = 1;
                for (; r > 0;) {
                    r = t - ev(++e) + 1;
                    let a = eb(e);
                    if (r === a) {
                        n = 12;
                        break
                    }
                    if (r < a) {
                        let t = eg(e, n);
                        for (n = 1; r > t;) r -= t, t = eg(e, ++n);
                        break
                    }
                }
                return new G(this, e, n, t - ey(e, n) + 1)
            }
        }
        toJulianDay(e) {
            return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + ey(e.year, e.month) + (e.day - 1)
        }
        getDaysInMonth(e) {
            return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : eg(e.year, e.month)
        }
        getDaysInYear(e) {
            return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : eb(e.year)
        }
        constructor() {
            if (super(), this.identifier = "islamic-umalqura", !r && (r = new Uint16Array(Uint8Array.from(atob("qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI="), e => e.charCodeAt(0)).buffer)), !a) {
                a = new Uint32Array(301);
                let e = 0;
                for (let t = 1300; t <= 1600; t++) {
                    a[t - 1300] = e;
                    for (let n = 1; n <= 12; n++) e += eg(t, n)
                }
            }
        }
    }
    let eS = 25920,
        ew = 29 * eS + 13753;

    function eD(e) {
        return 7 > o(7 * e + 1, 19)
    }

    function eC(e) {
        let t = Math.floor((235 * e - 234) / 19),
            n = 29 * t + Math.floor((12084 + 13753 * t) / 25920);
        return 3 > o(3 * (n + 1), 7) && (n += 1), n
    }

    function ek(e) {
        var t;
        let n, r;
        return eC(e) + (n = eC((t = e) - 1), r = eC(t), eC(t + 1) - r == 356 ? 2 : r - n == 382 ? 1 : 0)
    }

    function eP(e) {
        return ek(e + 1) - ek(e)
    }

    function eE(e, t) {
        if (t >= 6 && !eD(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t) return 29;
        let n = function(e) {
            let t = eP(e);
            switch (t > 380 && (t -= 30), t) {
                case 353:
                    return 0;
                case 354:
                    return 1;
                case 355:
                    return 2
            }
        }(e);
        return 2 === t ? 2 === n ? 30 : 29 : 3 === t ? 0 === n ? 29 : 30 : 6 === t ? eD(e) ? 30 : 0 : 30
    }
    class eT {
        fromJulianDay(e) {
            let t = e - 347997,
                n = Math.floor((19 * (t * eS / ew) + 234) / 235) + 1,
                r = ek(n),
                a = Math.floor(t - r);
            for (; a < 1;) a = Math.floor(t - (r = ek(--n)));
            let i = 1,
                o = 0;
            for (; o < a;) o += eE(n, i), i++;
            let s = a - (o -= eE(n, --i));
            return new G(this, n, i, s)
        }
        toJulianDay(e) {
            let t = ek(e.year);
            for (let n = 1; n < e.month; n++) t += eE(e.year, n);
            return t + e.day + 347997
        }
        getDaysInMonth(e) {
            return eE(e.year, e.month)
        }
        getMonthsInYear(e) {
            return eD(e.year) ? 13 : 12
        }
        getDaysInYear(e) {
            return eP(e.year)
        }
        getYearsInEra() {
            return 9999
        }
        getEras() {
            return ["AM"]
        }
        balanceYearMonth(e, t) {
            t.year !== e.year && (eD(t.year) && !eD(e.year) && t.month > 6 ? e.month-- : !eD(t.year) && eD(e.year) && t.month > 6 && e.month++)
        }
        constructor() {
            this.identifier = "hebrew"
        }
    }

    function eM(e, t, n, r) {
        return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1
    }

    function eR(e, t) {
        let n = Math.floor(4 * (t - e) / 1461),
            r = 1 + Math.floor((t - eM(e, n, 1, 1)) / 30),
            a = t + 1 - eM(e, n, r, 1);
        return [n, r, a]
    }

    function eI(e) {
        return Math.floor(e % 4 / 3)
    }

    function eO(e, t) {
        return t % 13 != 0 ? 30 : eI(e) + 5
    }
    class eA {
        fromJulianDay(e) {
            let [t, n, r] = eR(1723856, e), a = "AM";
            return t <= 0 && (a = "AA", t += 5500), new G(this, a, t, n, r)
        }
        toJulianDay(e) {
            let t = e.year;
            return "AA" === e.era && (t -= 5500), eM(1723856, t, e.month, e.day)
        }
        getDaysInMonth(e) {
            return eO(e.year, e.month)
        }
        getMonthsInYear() {
            return 13
        }
        getDaysInYear(e) {
            return 365 + eI(e.year)
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
    class eL extends eA {
        fromJulianDay(e) {
            let [t, n, r] = eR(1723856, e);
            return new G(this, "AA", t += 5500, n, r)
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
    class eN extends eA {
        fromJulianDay(e) {
            let [t, n, r] = eR(1824665, e), a = "CE";
            return t <= 0 && (a = "BCE", t = 1 - t), new G(this, a, t, n, r)
        }
        toJulianDay(e) {
            let t = e.year;
            return "BCE" === e.era && (t = 1 - t), eM(1824665, t, e.month, e.day)
        }
        getDaysInMonth(e) {
            let t = e.year;
            return "BCE" === e.era && (t = 1 - t), eO(t, e.month)
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

    function eF(e) {
        switch (e) {
            case "buddhist":
                return new en;
            case "ethiopic":
                return new eA;
            case "ethioaa":
                return new eL;
            case "coptic":
                return new eN;
            case "hebrew":
                return new eT;
            case "indian":
                return new eu;
            case "islamic-civil":
                return new em;
            case "islamic-tbla":
                return new eh;
            case "islamic-umalqura":
                return new ex;
            case "japanese":
                return new ee;
            case "persian":
                return new el;
            case "roc":
                return new eo;
            default:
                return new p
        }
    }
}