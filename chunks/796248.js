function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDatePickerState: function() {
            return g
        },
        useDateFieldState: function() {
            return w
        },
        useDateRangePickerState: function() {
            return S
        },
        useTimeFieldState: function() {
            return k
        }
    }), n("70102"), n("808653"), n("222007");
    var r = n("24899"),
        i = n("561291"),
        o = n("679750"),
        s = n("884691"),
        a = n("231420");

    function c(e, t, n) {
        return null != e && (null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0)
    }
    let u = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
        },
        d = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        };

    function l(e, t) {
        var n;
        e = {
            ...t.shouldForceLeadingZeros ? d : u,
            ...e
        };
        let r = t.granularity || "minute",
            i = Object.keys(e),
            o = i.indexOf(null !== (n = t.maxGranularity) && void 0 !== n ? n : "year");
        o < 0 && (o = 0);
        let s = i.indexOf(r);
        if (s < 0 && (s = 2), o > s) throw Error("maxGranularity must be greater than granularity");
        let a = i.slice(o, s + 1).reduce((t, n) => (t[n] = e[n], t), {});
        return null != t.hourCycle && (a.hour12 = 12 === t.hourCycle), a.timeZone = t.timeZone || "UTC", ("hour" === r || "minute" === r || "second" === r) && t.timeZone && !t.hideTimeZone && (a.timeZoneName = "short"), t.showEra && 0 === o && (a.era = "short"), a
    }

    function f(e) {
        return e && "hour" in e ? e : new r.Time
    }

    function p(e, t) {
        return null === e ? null : e ? (0, r.toCalendar)(e, t) : void 0
    }

    function h(e, t, n, i) {
        if (e) return p(e, n);
        let o = (0, r.toCalendar)((0, r.now)(i).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }), n);
        return "year" === t || "month" === t || "day" === t ? (0, r.toCalendarDate)(o) : i ? o : (0, r.toCalendarDateTime)(o)
    }

    function v(e, t) {
        let n = e && "timeZone" in e ? e.timeZone : void 0,
            r = e && "minute" in e ? "minute" : "day";
        if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
        let [i, o] = (0, s.useState)([r, n]);
        return e && (i[0] !== r || i[1] !== n) && o([r, n]), !t && (t = e ? r : i[0]), [t, e ? n : i[1]]
    }

    function g(e) {
        var t, n;
        let a = (0, i.useOverlayTriggerState)(e),
            [u, d] = (0, o.useControlledState)(e.value, e.defaultValue || null, e.onChange),
            p = u || e.placeholderValue,
            [h, g] = v(p, e.granularity),
            b = null != u ? u.toDate(null != g ? g : "UTC") : null,
            m = "hour" === h || "minute" === h || "second" === h,
            y = null === (n = e.shouldCloseOnSelect) || void 0 === n || n,
            [x, w] = (0, s.useState)(null),
            [S, k] = (0, s.useState)(null);
        if (u && (x = u, "hour" in u && (S = u)), p && !(h in p)) throw Error("Invalid granularity " + h + " for value " + p.toString());
        let E = (e, t) => {
                d("timeZone" in t ? t.set((0, r.toCalendarDate)(e)) : (0, r.toCalendarDateTime)(e, t)), w(null), k(null)
            },
            _ = e.isInvalid || "invalid" === e.validationState || c(u, e.minValue, e.maxValue) || u && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, u)),
            M = e.validationState || (_ ? "invalid" : null);
        return {
            value: u,
            setValue: d,
            dateValue: x,
            timeValue: S,
            setDateValue: t => {
                let n = "function" == typeof y ? y() : y;
                m ? S || n ? E(t, S || f(e.placeholderValue)) : w(t) : d(t), n && a.setOpen(!1)
            },
            setTimeValue: e => {
                x && e ? E(x, e) : k(e)
            },
            granularity: h,
            hasTime: m,
            ...a,
            setOpen(t) {
                !t && !u && x && m && E(x, S || f(e.placeholderValue)), a.setOpen(t)
            },
            validationState: M,
            isInvalid: _,
            formatValue(t, n) {
                if (!b) return "";
                let i = l(n, {
                    granularity: h,
                    timeZone: g,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                    showEra: "gregory" === u.calendar.identifier && "BC" === u.era
                });
                return new r.DateFormatter(t, i).format(b)
            }
        }
    }
    let b = new a.LocalizedStringDictionary({
            ach: {
                year: "mwaka",
                month: "dwe",
                day: "nino"
            },
            af: {
                year: "jjjj",
                month: "mm",
                day: "dd"
            },
            am: {
                year: "ዓዓዓዓ",
                month: "ሚሜ",
                day: "ቀቀ"
            },
            an: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            ar: {
                year: "سنة",
                month: "شهر",
                day: "يوم"
            },
            ast: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            az: {
                year: "iiii",
                month: "aa",
                day: "gg"
            },
            be: {
                year: "гггг",
                month: "мм",
                day: "дд"
            },
            bg: {
                year: "гггг",
                month: "мм",
                day: "дд"
            },
            bn: {
                year: "yyyy",
                month: "মিমি",
                day: "dd"
            },
            br: {
                year: "bbbb",
                month: "mm",
                day: "dd"
            },
            bs: {
                year: "gggg",
                month: "mm",
                day: "dd"
            },
            ca: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            cak: {
                year: "jjjj",
                month: "ii",
                day: "q'q'"
            },
            ckb: {
                year: "ساڵ",
                month: "مانگ",
                day: "ڕۆژ"
            },
            cs: {
                year: "rrrr",
                month: "mm",
                day: "dd"
            },
            cy: {
                year: "bbbb",
                month: "mm",
                day: "dd"
            },
            da: {
                year: "\xe5\xe5\xe5\xe5",
                month: "mm",
                day: "dd"
            },
            de: {
                year: "jjjj",
                month: "mm",
                day: "tt"
            },
            dsb: {
                year: "llll",
                month: "mm",
                day: "źź"
            },
            el: {
                year: "εεεε",
                month: "μμ",
                day: "ηη"
            },
            en: {
                year: "yyyy",
                month: "mm",
                day: "dd"
            },
            eo: {
                year: "jjjj",
                month: "mm",
                day: "tt"
            },
            es: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            et: {
                year: "aaaa",
                month: "kk",
                day: "pp"
            },
            eu: {
                year: "uuuu",
                month: "hh",
                day: "ee"
            },
            fa: {
                year: "سال",
                month: "ماه",
                day: "روز"
            },
            ff: {
                year: "hhhh",
                month: "ll",
                day: "\xf1\xf1"
            },
            fi: {
                year: "vvvv",
                month: "kk",
                day: "pp"
            },
            fr: {
                year: "aaaa",
                month: "mm",
                day: "jj"
            },
            fy: {
                year: "jjjj",
                month: "mm",
                day: "dd"
            },
            ga: {
                year: "bbbb",
                month: "mm",
                day: "ll"
            },
            gd: {
                year: "bbbb",
                month: "mm",
                day: "ll"
            },
            gl: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            he: {
                year: "שנה",
                month: "חודש",
                day: "יום"
            },
            hr: {
                year: "gggg",
                month: "mm",
                day: "dd"
            },
            hsb: {
                year: "llll",
                month: "mm",
                day: "dd"
            },
            hu: {
                year: "\xe9\xe9\xe9\xe9",
                month: "hh",
                day: "nn"
            },
            ia: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            id: {
                year: "tttt",
                month: "bb",
                day: "hh"
            },
            it: {
                year: "aaaa",
                month: "mm",
                day: "gg"
            },
            ja: {
                year: " 年 ",
                month: "月",
                day: "日"
            },
            ka: {
                year: "წწწწ",
                month: "თთ",
                day: "რრ"
            },
            kk: {
                year: "жжжж",
                month: "аа",
                day: "кк"
            },
            kn: {
                year: "ವವವವ",
                month: "ಮಿಮೀ",
                day: "ದಿದಿ"
            },
            ko: {
                year: "연도",
                month: "월",
                day: "일"
            },
            lb: {
                year: "jjjj",
                month: "mm",
                day: "dd"
            },
            lo: {
                year: "ປປປປ",
                month: "ດດ",
                day: "ວວ"
            },
            lt: {
                year: "mmmm",
                month: "mm",
                day: "dd"
            },
            lv: {
                year: "gggg",
                month: "mm",
                day: "dd"
            },
            meh: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            ml: {
                year: "വർഷം",
                month: "മാസം",
                day: "തീയതി"
            },
            ms: {
                year: "tttt",
                month: "mm",
                day: "hh"
            },
            nl: {
                year: "jjjj",
                month: "mm",
                day: "dd"
            },
            nn: {
                year: "\xe5\xe5\xe5\xe5",
                month: "mm",
                day: "dd"
            },
            no: {
                year: "\xe5\xe5\xe5\xe5",
                month: "mm",
                day: "dd"
            },
            oc: {
                year: "aaaa",
                month: "mm",
                day: "jj"
            },
            pl: {
                year: "rrrr",
                month: "mm",
                day: "dd"
            },
            pt: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            rm: {
                year: "oooo",
                month: "mm",
                day: "dd"
            },
            ro: {
                year: "aaaa",
                month: "ll",
                day: "zz"
            },
            ru: {
                year: "гггг",
                month: "мм",
                day: "дд"
            },
            sc: {
                year: "aaaa",
                month: "mm",
                day: "dd"
            },
            scn: {
                year: "aaaa",
                month: "mm",
                day: "jj"
            },
            sk: {
                year: "rrrr",
                month: "mm",
                day: "dd"
            },
            sl: {
                year: "llll",
                month: "mm",
                day: "dd"
            },
            sr: {
                year: "гггг",
                month: "мм",
                day: "дд"
            },
            sv: {
                year: "\xe5\xe5\xe5\xe5",
                month: "mm",
                day: "dd"
            },
            szl: {
                year: "rrrr",
                month: "mm",
                day: "dd"
            },
            tg: {
                year: "сссс",
                month: "мм",
                day: "рр"
            },
            th: {
                year: "ปปปป",
                month: "ดด",
                day: "วว"
            },
            tr: {
                year: "yyyy",
                month: "aa",
                day: "gg"
            },
            uk: {
                year: "рррр",
                month: "мм",
                day: "дд"
            },
            "zh-CN": {
                year: "年",
                month: "月",
                day: "日"
            },
            "zh-TW": {
                year: "年",
                month: "月",
                day: "日"
            }
        }, "en"),
        m = {
            year: !0,
            month: !0,
            day: !0,
            hour: !0,
            minute: !0,
            second: !0,
            dayPeriod: !0,
            era: !0
        },
        y = {
            year: 5,
            month: 2,
            day: 7,
            hour: 2,
            minute: 15,
            second: 15
        },
        x = {
            dayperiod: "dayPeriod"
        };

    function w(e) {
        var t, n;
        let {
            locale: i,
            createCalendar: a,
            hideTimeZone: u,
            isDisabled: d,
            isReadOnly: f,
            isRequired: g
        } = e, w = e.value || e.defaultValue || e.placeholderValue, [S, k] = v(w, e.granularity), E = k || "UTC";
        if (w && !(S in w)) throw Error("Invalid granularity " + S + " for value " + w.toString());
        let _ = (0, s.useMemo)(() => new r.DateFormatter(i), [i]),
            M = (0, s.useMemo)(() => a(_.resolvedOptions().calendar), [a, _]),
            [D, C] = (0, o.useControlledState)(e.value, e.defaultValue, e.onChange),
            P = (0, s.useMemo)(() => p(D, M), [D, M]),
            [T, A] = (0, s.useState)(() => h(e.placeholderValue, S, M, k)),
            R = P || T,
            I = "gregory" === M.identifier && "BC" === R.era,
            O = (0, s.useMemo)(() => ({
                granularity: S,
                maxGranularity: null !== (t = e.maxGranularity) && void 0 !== t ? t : "year",
                timeZone: k,
                hideTimeZone: u,
                hourCycle: e.hourCycle,
                showEra: I,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros
            }), [e.maxGranularity, S, e.hourCycle, e.shouldForceLeadingZeros, k, u, I]),
            j = (0, s.useMemo)(() => l({}, O), [O]),
            L = (0, s.useMemo)(() => new r.DateFormatter(i, j), [i, j]),
            N = (0, s.useMemo)(() => L.resolvedOptions(), [L]),
            F = (0, s.useMemo)(() => L.formatToParts(new Date).filter(e => m[e.type]).reduce((e, t) => (e[t.type] = !0, e), {}), [L]),
            [B, z] = (0, s.useState)(() => e.value || e.defaultValue ? {
                ...F
            } : {}),
            K = (0, s.useRef)(),
            V = (0, s.useRef)(M.identifier);
        (0, s.useEffect)(() => {
            M.identifier !== V.current && (V.current = M.identifier, A(t => Object.keys(B).length > 0 ? (0, r.toCalendar)(t, M) : h(e.placeholderValue, S, M, k)))
        }, [M, S, B, k, e.placeholderValue]), D && Object.keys(B).length < Object.keys(F).length && z(B = {
            ...F
        }), null == D && Object.keys(B).length === Object.keys(F).length && (z(B = {}), A(h(e.placeholderValue, S, M, k)));
        let U = P && Object.keys(B).length >= Object.keys(F).length ? P : T,
            H = t => {
                if (e.isDisabled || e.isReadOnly) return;
                let n = Object.keys(B),
                    i = Object.keys(F);
                null == t ? (C(null), A(h(e.placeholderValue, S, M, k)), z({})) : n.length >= i.length || n.length === i.length - 1 && F.dayPeriod && !B.dayPeriod && "dayPeriod" !== K.current ? C(t = (0, r.toCalendar)(t, (null == w ? void 0 : w.calendar) || new r.GregorianCalendar)) : A(t), K.current = null
            },
            q = (0, s.useMemo)(() => U.toDate(E), [U, E]),
            G = (0, s.useMemo)(() => L.formatToParts(q).map(e => {
                var t, n, o;
                let s = m[e.type];
                "era" === e.type && 1 === M.getEras().length && (s = !1);
                let a = m[e.type] && !B[e.type];
                let c = m[e.type] ? (t = e.type, n = e.value, o = i, "era" === t || "dayPeriod" === t ? n : "year" === t || "month" === t || "day" === t ? b.getStringForLocale(t, o) : "––") : null;
                return {
                    type: x[e.type] || e.type,
                    text: a ? c : e.value,
                    ... function(e, t, n) {
                        switch (t) {
                            case "era": {
                                let t = e.calendar.getEras();
                                return {
                                    value: t.indexOf(e.era),
                                    minValue: 0,
                                    maxValue: t.length - 1
                                }
                            }
                            case "year":
                                return {
                                    value: e.year, minValue: 1, maxValue: e.calendar.getYearsInEra(e)
                                };
                            case "month":
                                return {
                                    value: e.month, minValue: (0, r.getMinimumMonthInYear)(e), maxValue: e.calendar.getMonthsInYear(e)
                                };
                            case "day":
                                return {
                                    value: e.day, minValue: (0, r.getMinimumDayInMonth)(e), maxValue: e.calendar.getDaysInMonth(e)
                                }
                        }
                        if ("hour" in e) switch (t) {
                            case "dayPeriod":
                                return {
                                    value: e.hour >= 12 ? 12 : 0, minValue: 0, maxValue: 12
                                };
                            case "hour":
                                if (n.hour12) {
                                    let t = e.hour >= 12;
                                    return {
                                        value: e.hour,
                                        minValue: t ? 12 : 0,
                                        maxValue: t ? 23 : 11
                                    }
                                }
                                return {
                                    value: e.hour, minValue: 0, maxValue: 23
                                };
                            case "minute":
                                return {
                                    value: e.minute, minValue: 0, maxValue: 59
                                };
                            case "second":
                                return {
                                    value: e.second, minValue: 0, maxValue: 59
                                }
                        }
                        return {}
                    }(U, e.type, N),
                    isPlaceholder: a,
                    placeholder: c,
                    isEditable: s
                }
            }), [q, B, L, N, U, M, i]);
        F.era && B.year && !B.era ? (B.era = !0, z({
            ...B
        })) : !F.era && B.era && (delete B.era, z({
            ...B
        }));
        let W = e => {
                B[e] = !0, "year" === e && F.era && (B.era = !0), z({
                    ...B
                })
            },
            Z = (e, t) => {
                if (B[e]) H(function(e, t, n, r) {
                    switch (t) {
                        case "era":
                        case "year":
                        case "month":
                        case "day":
                            return e.cycle(t, n, {
                                round: "year" === t
                            })
                    }
                    if ("hour" in e) switch (t) {
                        case "dayPeriod": {
                            let t = e.hour;
                            return e.set({
                                hour: t >= 12 ? t - 12 : t + 12
                            })
                        }
                        case "hour":
                        case "minute":
                        case "second":
                            return e.cycle(t, n, {
                                round: "hour" !== t,
                                hourCycle: r.hour12 ? 12 : 24
                            })
                    }
                }(U, e, t, N));
                else {
                    W(e);
                    let t = Object.keys(B),
                        n = Object.keys(F);
                    (t.length >= n.length || t.length === n.length - 1 && F.dayPeriod && !B.dayPeriod) && H(U)
                }
            },
            Y = e.isInvalid || "invalid" === e.validationState || c(P, e.minValue, e.maxValue);
        return {
            value: P,
            dateValue: q,
            calendar: M,
            setValue: H,
            segments: G,
            dateFormatter: L,
            validationState: e.validationState || (Y ? "invalid" : null),
            isInvalid: Y,
            granularity: S,
            maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : "year",
            isDisabled: d,
            isReadOnly: f,
            isRequired: g,
            increment(e) {
                Z(e, 1)
            },
            decrement(e) {
                Z(e, -1)
            },
            incrementPage(e) {
                Z(e, y[e] || 1)
            },
            decrementPage(e) {
                Z(e, -(y[e] || 1))
            },
            setSegment(e, t) {
                W(e), H(function(e, t, n, r) {
                    switch (t) {
                        case "day":
                        case "month":
                        case "year":
                        case "era":
                            return e.set({
                                [t]: n
                            })
                    }
                    if ("hour" in e) switch (t) {
                        case "dayPeriod": {
                            let t = e.hour,
                                r = t >= 12;
                            if (n >= 12 === r) return e;
                            return e.set({
                                hour: r ? t - 12 : t + 12
                            })
                        }
                        case "hour":
                            if (r.hour12) {
                                let t = e.hour >= 12;
                                !t && 12 === n && (n = 0), t && n < 12 && (n += 12)
                            }
                        case "minute":
                        case "second":
                            return e.set({
                                [t]: n
                            })
                    }
                }(U, e, t, N))
            },
            confirmPlaceholder() {
                if (e.isDisabled || e.isReadOnly) return;
                let t = Object.keys(B),
                    n = Object.keys(F);
                t.length === n.length - 1 && F.dayPeriod && !B.dayPeriod && (z(B = {
                    ...F
                }), H(U.copy()))
            },
            clearSegment(t) {
                delete B[t], K.current = t, z({
                    ...B
                });
                let n = h(e.placeholderValue, S, M, k),
                    r = U;
                if ("dayPeriod" === t && "hour" in U && "hour" in n) {
                    let e = U.hour >= 12,
                        t = n.hour >= 12;
                    e && !t ? r = U.set({
                        hour: U.hour - 12
                    }) : !e && t && (r = U.set({
                        hour: U.hour + 12
                    }))
                } else t in U && (r = U.set({
                    [t]: n[t]
                }));
                C(null), H(r)
            },
            formatValue(e) {
                if (!P) return "";
                let t = l(e, O);
                return new r.DateFormatter(i, t).format(q)
            }
        }
    }

    function S(e) {
        var t, n, a;
        let u = (0, i.useOverlayTriggerState)(e),
            [d, p] = (0, o.useControlledState)(e.value, e.defaultValue || null, e.onChange),
            [h, g] = (0, s.useState)(() => d || {
                start: null,
                end: null
            });
        null == d && h.start && h.end && g(h = {
            start: null,
            end: null
        });
        let b = d || h,
            m = e => {
                g(e), (null == e ? void 0 : e.start) && e.end ? p(e) : p(null)
            },
            [y] = v((null == b ? void 0 : b.start) || (null == b ? void 0 : b.end) || e.placeholderValue, e.granularity),
            x = "hour" === y || "minute" === y || "second" === y,
            w = null === (a = e.shouldCloseOnSelect) || void 0 === a || a,
            [S, k] = (0, s.useState)(null),
            [E, _] = (0, s.useState)(null);
        b && b.start && b.end && (S = b, "hour" in b.start && (E = b));
        let M = (e, t) => {
                m({
                    start: "timeZone" in t.start ? t.start.set((0, r.toCalendarDate)(e.start)) : (0, r.toCalendarDateTime)(e.start, t.start),
                    end: "timeZone" in t.end ? t.end.set((0, r.toCalendarDate)(e.end)) : (0, r.toCalendarDateTime)(e.end, t.end)
                }), k(null), _(null)
            },
            D = t => {
                let n = "function" == typeof w ? w() : w;
                x ? n || t.start && t.end && (null == E ? void 0 : E.start) && (null == E ? void 0 : E.end) ? M(t, {
                    start: (null == E ? void 0 : E.start) || f(e.placeholderValue),
                    end: (null == E ? void 0 : E.end) || f(e.placeholderValue)
                }) : k(t) : t.start && t.end ? m(t) : k(t), n && u.setOpen(!1)
            },
            C = e => {
                (null == S ? void 0 : S.start) && (null == S ? void 0 : S.end) && e.start && e.end ? M(S, e) : _(e)
            },
            P = e.isInvalid || "invalid" === e.validationState || null != b && (c(b.start, e.minValue, e.maxValue) || c(b.end, e.minValue, e.maxValue) || null != b.end && null != b.start && 0 > b.end.compare(b.start) || (null == b ? void 0 : b.start) && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, b.start)) || (null == b ? void 0 : b.end) && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, b.end))),
            T = e.validationState || (P ? "invalid" : null);
        return {
            value: b,
            setValue: m,
            dateRange: S,
            timeRange: E,
            granularity: y,
            hasTime: x,
            setDate(e, t) {
                D({
                    ...S,
                    [e]: t
                })
            },
            setTime(e, t) {
                C({
                    ...E,
                    [e]: t
                })
            },
            setDateTime(e, t) {
                m({
                    ...b,
                    [e]: t
                })
            },
            setDateRange: D,
            setTimeRange: C,
            ...u,
            setOpen(t) {
                !t && !((null == b ? void 0 : b.start) && (null == b ? void 0 : b.end)) && (null == S ? void 0 : S.start) && (null == S ? void 0 : S.end) && x && M(S, {
                    start: (null == E ? void 0 : E.start) || f(e.placeholderValue),
                    end: (null == E ? void 0 : E.end) || f(e.placeholderValue)
                }), u.setOpen(t)
            },
            validationState: T,
            isInvalid: P,
            formatValue(t, n) {
                let i;
                if (!b || !b.start || !b.end) return null;
                let o = "timeZone" in b.start ? b.start.timeZone : void 0,
                    s = e.granularity || (b.start && "minute" in b.start ? "minute" : "day"),
                    a = "timeZone" in b.end ? b.end.timeZone : void 0,
                    c = e.granularity || (b.end && "minute" in b.end ? "minute" : "day"),
                    u = l(n, {
                        granularity: s,
                        timeZone: o,
                        hideTimeZone: e.hideTimeZone,
                        hourCycle: e.hourCycle,
                        showEra: "gregory" === b.start.calendar.identifier && "BC" === b.start.era || "gregory" === b.end.calendar.identifier && "BC" === b.end.era
                    }),
                    d = b.start.toDate(o || "UTC"),
                    f = b.end.toDate(a || "UTC"),
                    p = new r.DateFormatter(t, u);
                if (o === a && s === c && 0 !== b.start.compare(b.end)) {
                    try {
                        let e = p.formatRangeToParts(d, f),
                            t = -1;
                        for (let n = 0; n < e.length; n++) {
                            let r = e[n];
                            if ("shared" === r.source && "literal" === r.type) t = n;
                            else if ("endRange" === r.source) break
                        }
                        let n = "",
                            r = "";
                        for (let i = 0; i < e.length; i++) i < t ? n += e[i].value : i > t && (r += e[i].value);
                        return {
                            start: n,
                            end: r
                        }
                    } catch (e) {}
                    i = p
                } else {
                    let o = l(n, {
                        granularity: c,
                        timeZone: a,
                        hideTimeZone: e.hideTimeZone,
                        hourCycle: e.hourCycle
                    });
                    i = new r.DateFormatter(t, o)
                }
                return {
                    start: p.format(d),
                    end: i.format(f)
                }
            }
        }
    }

    function k(e) {
        let {
            placeholderValue: t = new r.Time,
            minValue: n,
            maxValue: i,
            granularity: a
        } = e, [c, u] = (0, o.useControlledState)(e.value, e.defaultValue, e.onChange), d = c || t, l = d && "day" in d ? d : void 0, f = e.defaultValue && "timeZone" in e.defaultValue ? e.defaultValue.timeZone : void 0, p = (0, s.useMemo)(() => {
            let e = d && "timeZone" in d ? d.timeZone : void 0;
            return (e || f) && t ? (0, r.toZoned)(E(t), e || f) : E(t)
        }, [t, d, f]), h = (0, s.useMemo)(() => E(n, l), [n, l]), v = (0, s.useMemo)(() => E(i, l), [i, l]), g = (0, s.useMemo)(() => c && "day" in c ? (0, r.toTime)(c) : c, [c]), b = (0, s.useMemo)(() => null == c ? null : E(c), [c]);
        return {
            ...w({
                ...e,
                value: b,
                defaultValue: void 0,
                minValue: h,
                maxValue: v,
                onChange: e => {
                    u(l || f ? e : e && (0, r.toTime)(e))
                },
                granularity: a || "minute",
                maxGranularity: "hour",
                placeholderValue: p,
                createCalendar: () => new r.GregorianCalendar
            }),
            timeValue: g
        }
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.today)((0, r.getLocalTimeZone)());
        return e ? "day" in e ? e : (0, r.toCalendarDateTime)(t, e) : null
    }
}