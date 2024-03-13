function(e, t, n) {
    "use strict";
    let r, i;
    n.r(t), n.d(t, {
        createCalendar: function() {
            return eL
        },
        isSameDay: function() {
            return h
        },
        isSameMonth: function() {
            return v
        },
        endOfMonth: function() {
            return w
        },
        getWeeksInMonth: function() {
            return k
        }
    }), n("222007"), n("70102"), n("781738"), n("659510"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790"), n("492311"), n("101997"), n("990131");
    var o = n("599514");

    function s(e, t) {
        return e - t * Math.floor(e / t)
    }

    function a(e, t, n, r) {
        let i = (t = u(e, t)) - 1,
            o = -2;
        return n <= 2 ? o = 0 : c(t) && (o = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + o + r)
    }

    function c(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }

    function u(e, t) {
        return "BC" === e ? 1 - t : t
    }

    function d(e) {
        let t = "AD";
        return e <= 0 && (t = "BC", e = 1 - e), [t, e]
    }
    let l = {
        standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
    class f {
        fromJulianDay(e) {
            let t = e - 1721426,
                n = Math.floor(t / 146097),
                r = s(t, 146097),
                i = Math.floor(r / 36524),
                o = s(r, 36524),
                u = Math.floor(o / 1461),
                l = Math.floor(s(o, 1461) / 365),
                [f, p] = d(400 * n + 100 * i + 4 * u + l + (4 !== i && 4 !== l ? 1 : 0)),
                h = e - a(f, p, 1, 1),
                v = 2;
            e < a(f, p, 3, 1) ? v = 0 : c(p) && (v = 1);
            let g = Math.floor(((h + v) * 12 + 373) / 367),
                b = e - a(f, p, g, 1) + 1;
            return new q(f, p, g, b)
        }
        toJulianDay(e) {
            return a(e.era, e.year, e.month, e.day)
        }
        getDaysInMonth(e) {
            return l[c(e.year) ? "leapyear" : "standard"][e.month - 1]
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
        return t = A(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function v(e, t) {
        return t = A(t, e.calendar), e = x(e), t = x(t), e.era === t.era && e.year === t.year && e.month === t.month
    }

    function g(e, t) {
        return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
    }

    function b(e) {
        return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
    }
    let m = null;

    function y() {
        return null == m && (m = new Intl.DateTimeFormat().resolvedOptions().timeZone), m
    }

    function x(e) {
        return e.subtract({
            days: e.day - 1
        })
    }

    function w(e) {
        return e.add({
            days: e.calendar.getDaysInMonth(e) - e.day
        })
    }
    let S = new Map;

    function k(e, t) {
        var n, r;
        let i, o = e.calendar.getDaysInMonth(e);
        return Math.ceil((n = x(e), r = t, (i = Math.ceil(n.calendar.toJulianDay(n) + 1 - function(e) {
            return p[function(e) {
                if (Intl.Locale) {
                    let t = S.get(e);
                    return !t && (t = new Intl.Locale(e).maximize().region, S.set(e, t)), t
                }
                let t = e.split("-")[1];
                return "u" === t ? null : t
            }(e)] || 0
        }(r)) % 7) < 0 && (i += 7), (i + o) / 7))
    }

    function E(e) {
        return _(u((e = A(e, new f)).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    }

    function _(e, t, n, r, i, o, s) {
        let a = new Date;
        return a.setUTCHours(r, i, o, s), a.setUTCFullYear(e, t - 1, n), a.getTime()
    }

    function M(e, t) {
        if ("UTC" === t) return 0;
        if (e > 0 && t === y()) return -6e4 * new Date(e).getTimezoneOffset();
        let {
            year: n,
            month: r,
            day: i,
            hour: o,
            minute: s,
            second: a
        } = C(e, t);
        return _(n, r, i, o, s, a, 0) - 1e3 * Math.floor(e / 1e3)
    }
    let D = new Map;

    function C(e, t) {
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

    function P(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible";
        return new Date(function(e, t) {
            var n, r, i, o;
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible",
                a = T(e);
            if ("UTC" === t) return E(a);
            if (t === y() && "compatible" === s) {
                a = A(a, new f);
                let e = new Date,
                    t = u(a.era, a.year);
                return e.setFullYear(t, a.month - 1, a.day), e.setHours(a.hour, a.minute, a.second, a.millisecond), e.getTime()
            }
            let c = E(a),
                d = M(c - 864e5, t),
                l = M(c + 864e5, t);
            let p = (n = a, r = t, ((i = c - d) == (o = c - l) ? [i] : [i, o]).filter(e => (function(e, t, n) {
                let r = C(n, t);
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
                    return Math.min(c - d, c - l);
                case "compatible":
                case "later":
                    return Math.max(c - d, c - l);
                case "reject":
                    throw RangeError("No such absolute time found")
            }
        }(e, t, n))
    }

    function T(e, t) {
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
        } = t), new W(e.calendar, e.era, e.year, e.month, e.day, n, r, i, o)
    }

    function A(e, t) {
        if (e.calendar.identifier === t.identifier) return e;
        let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
            r = e.copy();
        return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, L(r), r
    }

    function R(e, t) {
        let n = e.copy(),
            r = "hour" in n ? function(e, t) {
                var n;
                let r;
                e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0;
                return n = e, n.second += Math.floor(n.millisecond / 1e3), n.millisecond = B(n.millisecond, 1e3), n.minute += Math.floor(n.second / 60), n.second = B(n.second, 60), n.hour += Math.floor(n.minute / 60), n.minute = B(n.minute, 60), r = Math.floor(n.hour / 24), n.hour = B(n.hour, 24), r
            }(n, t) : 0;
        I(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, O(n), j(n), n.day += 7 * (t.weeks || 0), n.day += t.days || 0, n.day += r,
            function(e) {
                for (; e.day < 1;) e.month--, O(e), e.day += e.calendar.getDaysInMonth(e);
                for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, O(e)
            }(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
        let i = n.calendar.getYearsInEra(n);
        if (n.year > i) {
            var o, s;
            let e = null === (s = (o = n.calendar).isInverseEra) || void 0 === s ? void 0 : s.call(o, n);
            n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n)
        }
        n.month < 1 && (n.month = 1, n.day = 1);
        let a = n.calendar.getMonthsInYear(n);
        return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n
    }

    function I(e, t) {
        var n, r;
        (null === (r = (n = e.calendar).isInverseEra) || void 0 === r ? void 0 : r.call(n, e)) && (t = -t), e.year += t
    }

    function O(e) {
        for (; e.month < 1;) I(e, -1), e.month += e.calendar.getMonthsInYear(e);
        let t = 0;
        for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, I(e, 1)
    }

    function j(e) {
        e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
    }

    function L(e) {
        e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), j(e)
    }

    function N(e, t) {
        return R(e, function(e) {
            let t = {};
            for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
            return t
        }(t))
    }

    function F(e, t) {
        let n = e.copy();
        return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), L(n), n
    }

    function B(e, t) {
        let n = e % t;
        return n < 0 && (n += t), n
    }

    function z(e, t, n, r) {
        let i = e.copy();
        switch (t) {
            case "era": {
                let t = e.calendar.getEras(),
                    o = t.indexOf(e.era);
                if (o < 0) throw Error("Invalid era: " + e.era);
                o = K(o, n, 0, t.length - 1, null == r ? void 0 : r.round), i.era = t[o], L(i);
                break
            }
            case "year":
                var o, s;
                (null === (s = (o = i.calendar).isInverseEra) || void 0 === s ? void 0 : s.call(o, i)) && (n = -n), i.year = K(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
                break;
            case "month":
                i.month = K(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
                break;
            case "day":
                i.day = K(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return e.calendar.balanceDate && e.calendar.balanceDate(i), L(i), i
    }

    function K(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (i) {
            (e += Math.sign(t)) < n && (e = r);
            let i = Math.abs(t);
            (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n)
        } else(e += t) < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
        return e
    }

    function V(e) {
        let t = A(e, new f);
        return "".concat(String(t.year).padStart(4, "0"), "-").concat(String(t.month).padStart(2, "0"), "-").concat(String(t.day).padStart(2, "0"))
    }

    function U(e) {
        let t, n = "object" == typeof e[0] ? e.shift() : new f;
        if ("string" == typeof e[0]) t = e.shift();
        else {
            let e = n.getEras();
            t = e[e.length - 1]
        }
        return [n, t, e.shift(), e.shift(), e.shift()]
    }
    var H = new WeakMap;
    class q {
        copy() {
            return this.era ? new q(this.calendar, this.era, this.year, this.month, this.day) : new q(this.calendar, this.year, this.month, this.day)
        }
        add(e) {
            return R(this, e)
        }
        subtract(e) {
            return N(this, e)
        }
        set(e) {
            return F(this, e)
        }
        cycle(e, t, n) {
            return z(this, e, t, n)
        }
        toDate(e) {
            return P(this, e)
        }
        toString() {
            return V(this)
        }
        compare(e) {
            return g(this, e)
        }
        constructor(...e) {
            (0, o._)(this, H, {
                writable: !0,
                value: void 0
            });
            let [t, n, r, i, s] = U(e);
            this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = s, L(this)
        }
    }
    var G = new WeakMap;
    class W {
        copy() {
            return this.era ? new W(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new W(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return R(this, e)
        }
        subtract(e) {
            return N(this, e)
        }
        set(e) {
            var t, n;
            let r;
            return F((t = this, n = e, r = t.copy(), null != n.hour && (r.hour = n.hour), null != n.minute && (r.minute = n.minute), null != n.second && (r.second = n.second), null != n.millisecond && (r.millisecond = n.millisecond), function(e) {
                e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23))
            }(r), r), e)
        }
        cycle(e, t, n) {
            switch (e) {
                case "era":
                case "year":
                case "month":
                case "day":
                    return z(this, e, t, n);
                default:
                    return function(e, t, n, r) {
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
                                i.hour = K(t, n, o, s, null == r ? void 0 : r.round);
                                break
                            }
                            case "minute":
                                i.minute = K(e.minute, n, 0, 59, null == r ? void 0 : r.round);
                                break;
                            case "second":
                                i.second = K(e.second, n, 0, 59, null == r ? void 0 : r.round);
                                break;
                            case "millisecond":
                                i.millisecond = K(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
                                break;
                            default:
                                throw Error("Unsupported field " + t)
                        }
                        return i
                    }(this, e, t, n)
            }
        }
        toDate(e, t) {
            return P(this, e, t)
        }
        toString() {
            var e, t;
            return e = this, "".concat(V(e), "T").concat((t = e, "".concat(String(t.hour).padStart(2, "0"), ":").concat(String(t.minute).padStart(2, "0"), ":").concat(String(t.second).padStart(2, "0")).concat(t.millisecond ? String(t.millisecond / 1e3).slice(1) : "")))
        }
        compare(e) {
            let t = g(this, e);
            if (0 === t) {
                var n, r;
                return n = this, r = T(e), b(n) - b(r)
            }
            return t
        }
        constructor(...e) {
            (0, o._)(this, G, {
                writable: !0,
                value: void 0
            });
            let [t, n, r, i, s] = U(e);
            this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, L(this)
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
            let [n, r, i] = t;
            return !!(e.year < n) || e.year === n && !!(e.month < r) || e.year === n && e.month === r && !!(e.day < i) || !1
        });
        return -1 === t ? Z.length - 1 : 0 === t ? 0 : t - 1
    }

    function Q(e) {
        let t = X[J.indexOf(e.era)];
        if (!t) throw Error("Unknown era: " + e.era);
        return new q(e.year + t, e.month, e.day)
    }
    class ee extends f {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e),
                n = $(t);
            return new q(this, J[n], t.year - X[n], t.month, t.day)
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
                let [r, i, o] = n, s = r - X[t];
                e.year = Math.max(1, Math.min(s, e.year)), e.year === s && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(o, e.day)))
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
            let i = r[0] - n[0];
            return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i
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
    class en extends f {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e);
            return new q(this, u(t.era, t.year) - -543, t.month, t.day)
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
        let [t, n] = d(e.year + -543);
        return new q(t, n, e.month, e.day)
    }

    function ei(e) {
        return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911
    }

    function eo(e) {
        let t = e - 1911;
        return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t]
    }
    class es extends f {
        fromJulianDay(e) {
            let t = super.fromJulianDay(e),
                [n, r] = eo(u(t.era, t.year));
            return new q(this, n, r, t.month, t.day)
        }
        toJulianDay(e) {
            return super.toJulianDay(ea(e))
        }
        getEras() {
            return ["before_minguo", "minguo"]
        }
        balanceDate(e) {
            let [t, n] = eo(ei(e));
            e.era = t, e.year = n
        }
        isInverseEra(e) {
            return "before_minguo" === e.era
        }
        getDaysInMonth(e) {
            return super.getDaysInMonth(ea(e))
        }
        getYearsInEra(e) {
            return "before_minguo" === e.era ? 9999 : 8088
        }
        constructor(...e) {
            super(...e), this.identifier = "roc"
        }
    }

    function ea(e) {
        let [t, n] = d(ei(e));
        return new q(t, n, e.month, e.day)
    }

    function ec(e, t, n) {
        let r = e > 0 ? e - 474 : e - 473,
            i = s(r, 2820) + 474;
        return 1948320 + 1029983 * Math.floor(r / 2820) + 365 * (i - 1) + Math.floor((31 * i - 5) / 128) + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + n
    }
    class eu {
        fromJulianDay(e) {
            let t = e - ec(475, 1, 1),
                n = Math.floor(t / 1029983),
                r = s(t, 1029983),
                i = 474 + 2820 * n + (1029982 === r ? 2820 : Math.floor((128 * r + 46878) / 46751));
            i <= 0 && i--;
            let o = e - ec(i, 1, 1) + 1,
                a = o <= 186 ? Math.ceil(o / 31) : Math.ceil((o - 6) / 31),
                c = e - ec(i, a, 1) + 1;
            return new q(this, i, a, c)
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
            return (n = s((t = e.year) > 0 ? t - 474 : t - 473, 2820) + 474, 31 > s((n + 38) * 31, 128)) ? 30 : 29
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
    class ed extends f {
        fromJulianDay(e) {
            let t, n, r, i = super.fromJulianDay(e),
                o = i.year - 78,
                s = e - a(i.era, i.year, 1, 1);
            if (s < 80 ? (o--, s += (t = c(i.year - 1) ? 31 : 30) + 155 + 90 + 10) : (t = c(i.year) ? 31 : 30, s -= 80), s < t) n = 1, r = s + 1;
            else {
                let e = s - t;
                e < 155 ? (n = Math.floor(e / 31) + 2, r = e % 31 + 1) : (e -= 155, n = Math.floor(e / 30) + 7, r = e % 30 + 1)
            }
            return new q(this, o, n, r)
        }
        toJulianDay(e) {
            let t, n;
            let [r, i] = d(e.year + 78);
            return (c(i) ? (t = 31, n = a(r, i, 3, 21)) : (t = 30, n = a(r, i, 3, 22)), 1 === e.month) ? n + e.day - 1 : (n += t + 31 * Math.min(e.month - 2, 5), e.month >= 8 && (n += (e.month - 7) * 30), n += e.day - 1)
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

    function el(e, t, n, r) {
        return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1
    }

    function ef(e, t, n) {
        let r = Math.floor((30 * (n - t) + 10646) / 10631),
            i = Math.min(12, Math.ceil((n - (29 + el(t, r, 1, 1))) / 29.5) + 1),
            o = n - el(t, r, i, 1) + 1;
        return new q(e, r, i, o)
    }

    function ep(e) {
        return (14 + 11 * e) % 30 < 11
    }
    class eh {
        fromJulianDay(e) {
            return ef(this, 1948440, e)
        }
        toJulianDay(e) {
            return el(1948440, e.year, e.month, e.day)
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
    class ev extends eh {
        fromJulianDay(e) {
            return ef(this, 1948439, e)
        }
        toJulianDay(e) {
            return el(1948439, e.year, e.month, e.day)
        }
        constructor(...e) {
            super(...e), this.identifier = "islamic-tbla"
        }
    }

    function eg(e) {
        return 460322 + i[e - 1300]
    }

    function eb(e, t) {
        return (r[e - 1300] & 1 << 11 - (t - 1)) == 0 ? 29 : 30
    }

    function em(e, t) {
        let n = eg(e);
        for (let r = 1; r < t; r++) n += eb(e, r);
        return n
    }

    function ey(e) {
        return i[e + 1 - 1300] - i[e - 1300]
    }
    class ex extends eh {
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
                    let i = ey(e);
                    if (r === i) {
                        n = 12;
                        break
                    }
                    if (r < i) {
                        let t = eb(e, n);
                        for (n = 1; r > t;) r -= t, t = eb(e, ++n);
                        break
                    }
                }
                return new q(this, e, n, t - em(e, n) + 1)
            }
        }
        toJulianDay(e) {
            return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + em(e.year, e.month) + (e.day - 1)
        }
        getDaysInMonth(e) {
            return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : eb(e.year, e.month)
        }
        getDaysInYear(e) {
            return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : ey(e.year)
        }
        constructor() {
            if (super(), this.identifier = "islamic-umalqura", !r && (r = new Uint16Array(Uint8Array.from(atob("qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI="), e => e.charCodeAt(0)).buffer)), !i) {
                i = new Uint32Array(301);
                let e = 0;
                for (let t = 1300; t <= 1600; t++) {
                    i[t - 1300] = e;
                    for (let n = 1; n <= 12; n++) e += eb(t, n)
                }
            }
        }
    }
    let ew = 25920,
        eS = 29 * ew + 13753;

    function ek(e) {
        return 7 > s(7 * e + 1, 19)
    }

    function eE(e) {
        let t = Math.floor((235 * e - 234) / 19),
            n = 29 * t + Math.floor((12084 + 13753 * t) / 25920);
        return 3 > s(3 * (n + 1), 7) && (n += 1), n
    }

    function e_(e) {
        var t;
        let n, r;
        return eE(e) + (n = eE((t = e) - 1), r = eE(t), eE(t + 1) - r == 356 ? 2 : r - n == 382 ? 1 : 0)
    }

    function eM(e) {
        return e_(e + 1) - e_(e)
    }

    function eD(e, t) {
        if (t >= 6 && !ek(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t) return 29;
        let n = function(e) {
            let t = eM(e);
            switch (t > 380 && (t -= 30), t) {
                case 353:
                    return 0;
                case 354:
                    return 1;
                case 355:
                    return 2
            }
        }(e);
        return 2 === t ? 2 === n ? 30 : 29 : 3 === t ? 0 === n ? 29 : 30 : 6 === t ? ek(e) ? 30 : 0 : 30
    }
    class eC {
        fromJulianDay(e) {
            let t = e - 347997,
                n = Math.floor((19 * (t * ew / eS) + 234) / 235) + 1,
                r = e_(n),
                i = Math.floor(t - r);
            for (; i < 1;) i = Math.floor(t - (r = e_(--n)));
            let o = 1,
                s = 0;
            for (; s < i;) s += eD(n, o), o++;
            let a = i - (s -= eD(n, --o));
            return new q(this, n, o, a)
        }
        toJulianDay(e) {
            let t = e_(e.year);
            for (let n = 1; n < e.month; n++) t += eD(e.year, n);
            return t + e.day + 347997
        }
        getDaysInMonth(e) {
            return eD(e.year, e.month)
        }
        getMonthsInYear(e) {
            return ek(e.year) ? 13 : 12
        }
        getDaysInYear(e) {
            return eM(e.year)
        }
        getYearsInEra() {
            return 9999
        }
        getEras() {
            return ["AM"]
        }
        balanceYearMonth(e, t) {
            t.year !== e.year && (ek(t.year) && !ek(e.year) && t.month > 6 ? e.month-- : !ek(t.year) && ek(e.year) && t.month > 6 && e.month++)
        }
        constructor() {
            this.identifier = "hebrew"
        }
    }

    function eP(e, t, n, r) {
        return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1
    }

    function eT(e, t) {
        let n = Math.floor(4 * (t - e) / 1461),
            r = 1 + Math.floor((t - eP(e, n, 1, 1)) / 30),
            i = t + 1 - eP(e, n, r, 1);
        return [n, r, i]
    }

    function eA(e) {
        return Math.floor(e % 4 / 3)
    }

    function eR(e, t) {
        return t % 13 != 0 ? 30 : eA(e) + 5
    }
    class eI {
        fromJulianDay(e) {
            let [t, n, r] = eT(1723856, e), i = "AM";
            return t <= 0 && (i = "AA", t += 5500), new q(this, i, t, n, r)
        }
        toJulianDay(e) {
            let t = e.year;
            return "AA" === e.era && (t -= 5500), eP(1723856, t, e.month, e.day)
        }
        getDaysInMonth(e) {
            return eR(e.year, e.month)
        }
        getMonthsInYear() {
            return 13
        }
        getDaysInYear(e) {
            return 365 + eA(e.year)
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
    class eO extends eI {
        fromJulianDay(e) {
            let [t, n, r] = eT(1723856, e);
            return new q(this, "AA", t += 5500, n, r)
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
    class ej extends eI {
        fromJulianDay(e) {
            let [t, n, r] = eT(1824665, e), i = "CE";
            return t <= 0 && (i = "BCE", t = 1 - t), new q(this, i, t, n, r)
        }
        toJulianDay(e) {
            let t = e.year;
            return "BCE" === e.era && (t = 1 - t), eP(1824665, t, e.month, e.day)
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

    function eL(e) {
        switch (e) {
            case "buddhist":
                return new en;
            case "ethiopic":
                return new eI;
            case "ethioaa":
                return new eO;
            case "coptic":
                return new ej;
            case "hebrew":
                return new eC;
            case "indian":
                return new ed;
            case "islamic-civil":
                return new eh;
            case "islamic-tbla":
                return new ev;
            case "islamic-umalqura":
                return new ex;
            case "japanese":
                return new ee;
            case "persian":
                return new eu;
            case "roc":
                return new es;
            default:
                return new f
        }
    }
}