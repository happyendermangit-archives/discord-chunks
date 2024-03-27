function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDateFieldState: function() {
            return E
        },
        useDatePickerState: function() {
            return g
        },
        useDateRangePickerState: function() {
            return S
        },
        useTimeFieldState: function() {
            return x
        }
    });
    var r = n("387103"),
        i = n("99047"),
        a = n("697898"),
        o = n("470079"),
        s = n("133886");

    function u(e, t, n) {
        return null != e && (null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0)
    }
    let c = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
        },
        l = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        };

    function d(e, t) {
        var n;
        e = {
            ...t.shouldForceLeadingZeros ? l : c,
            ...e
        };
        let r = t.granularity || "minute",
            i = Object.keys(e),
            a = i.indexOf(null !== (n = t.maxGranularity) && void 0 !== n ? n : "year");
        a < 0 && (a = 0);
        let o = i.indexOf(r);
        if (o < 0 && (o = 2), a > o) throw Error("maxGranularity must be greater than granularity");
        let s = i.slice(a, o + 1).reduce((t, n) => (t[n] = e[n], t), {});
        return null != t.hourCycle && (s.hour12 = 12 === t.hourCycle), s.timeZone = t.timeZone || "UTC", ("hour" === r || "minute" === r || "second" === r) && t.timeZone && !t.hideTimeZone && (s.timeZoneName = "short"), t.showEra && 0 === a && (s.era = "short"), s
    }

    function f(e) {
        return e && "hour" in e ? e : new r.Time
    }

    function p(e, t) {
        return null === e ? null : e ? (0, r.toCalendar)(e, t) : void 0
    }

    function h(e, t, n, i) {
        if (e) return p(e, n);
        let a = (0, r.toCalendar)((0, r.now)(i).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }), n);
        return "year" === t || "month" === t || "day" === t ? (0, r.toCalendarDate)(a) : i ? a : (0, r.toCalendarDateTime)(a)
    }

    function m(e, t) {
        let n = e && "timeZone" in e ? e.timeZone : void 0,
            r = e && "minute" in e ? "minute" : "day";
        if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
        let [i, a] = (0, o.useState)([r, n]);
        return e && (i[0] !== r || i[1] !== n) && a([r, n]), !t && (t = e ? r : i[0]), [t, e ? n : i[1]]
    }

    function g(e) {
        var t, n;
        let s = (0, i.useOverlayTriggerState)(e),
            [c, l] = (0, a.useControlledState)(e.value, e.defaultValue || null, e.onChange),
            p = c || e.placeholderValue,
            [h, g] = m(p, e.granularity),
            _ = null != c ? c.toDate(null != g ? g : "UTC") : null,
            b = "hour" === h || "minute" === h || "second" === h,
            v = null === (n = e.shouldCloseOnSelect) || void 0 === n || n,
            [y, E] = (0, o.useState)(null),
            [S, x] = (0, o.useState)(null);
        if (c && (y = c, "hour" in c && (S = c)), p && !(h in p)) throw Error("Invalid granularity " + h + " for value " + p.toString());
        let w = (e, t) => {
                l("timeZone" in t ? t.set((0, r.toCalendarDate)(e)) : (0, r.toCalendarDateTime)(e, t)), E(null), x(null)
            },
            T = e.isInvalid || "invalid" === e.validationState || u(c, e.minValue, e.maxValue) || c && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, c)),
            C = e.validationState || (T ? "invalid" : null);
        return {
            value: c,
            setValue: l,
            dateValue: y,
            timeValue: S,
            setDateValue: t => {
                let n = "function" == typeof v ? v() : v;
                b ? S || n ? w(t, S || f(e.placeholderValue)) : E(t) : l(t), n && s.setOpen(!1)
            },
            setTimeValue: e => {
                y && e ? w(y, e) : x(e)
            },
            granularity: h,
            hasTime: b,
            ...s,
            setOpen(t) {
                !t && !c && y && b && w(y, S || f(e.placeholderValue)), s.setOpen(t)
            },
            validationState: C,
            isInvalid: T,
            formatValue(t, n) {
                if (!_) return "";
                let i = d(n, {
                    granularity: h,
                    timeZone: g,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                    showEra: "gregory" === c.calendar.identifier && "BC" === c.era
                });
                return new r.DateFormatter(t, i).format(_)
            }
        }
    }
    let _ = new s.LocalizedStringDictionary({
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
        b = {
            year: !0,
            month: !0,
            day: !0,
            hour: !0,
            minute: !0,
            second: !0,
            dayPeriod: !0,
            era: !0
        },
        v = {
            year: 5,
            month: 2,
            day: 7,
            hour: 2,
            minute: 15,
            second: 15
        },
        y = {
            dayperiod: "dayPeriod"
        };

    function E(e) {
        var t, n;
        let {
            locale: i,
            createCalendar: s,
            hideTimeZone: c,
            isDisabled: l,
            isReadOnly: f,
            isRequired: g
        } = e, E = e.value || e.defaultValue || e.placeholderValue, [S, x] = m(E, e.granularity), w = x || "UTC";
        if (E && !(S in E)) throw Error("Invalid granularity " + S + " for value " + E.toString());
        let T = (0, o.useMemo)(() => new r.DateFormatter(i), [i]),
            C = (0, o.useMemo)(() => s(T.resolvedOptions().calendar), [s, T]),
            [D, O] = (0, a.useControlledState)(e.value, e.defaultValue, e.onChange),
            M = (0, o.useMemo)(() => p(D, C), [D, C]),
            [A, k] = (0, o.useState)(() => h(e.placeholderValue, S, C, x)),
            R = M || A,
            N = "gregory" === C.identifier && "BC" === R.era,
            I = (0, o.useMemo)(() => ({
                granularity: S,
                maxGranularity: null !== (t = e.maxGranularity) && void 0 !== t ? t : "year",
                timeZone: x,
                hideTimeZone: c,
                hourCycle: e.hourCycle,
                showEra: N,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros
            }), [e.maxGranularity, S, e.hourCycle, e.shouldForceLeadingZeros, x, c, N]),
            L = (0, o.useMemo)(() => d({}, I), [I]),
            P = (0, o.useMemo)(() => new r.DateFormatter(i, L), [i, L]),
            F = (0, o.useMemo)(() => P.resolvedOptions(), [P]),
            B = (0, o.useMemo)(() => P.formatToParts(new Date).filter(e => b[e.type]).reduce((e, t) => (e[t.type] = !0, e), {}), [P]),
            [U, Y] = (0, o.useState)(() => e.value || e.defaultValue ? {
                ...B
            } : {}),
            j = (0, o.useRef)(),
            z = (0, o.useRef)(C.identifier);
        (0, o.useEffect)(() => {
            C.identifier !== z.current && (z.current = C.identifier, k(t => Object.keys(U).length > 0 ? (0, r.toCalendar)(t, C) : h(e.placeholderValue, S, C, x)))
        }, [C, S, U, x, e.placeholderValue]), D && Object.keys(U).length < Object.keys(B).length && Y(U = {
            ...B
        }), null == D && Object.keys(U).length === Object.keys(B).length && (Y(U = {}), k(h(e.placeholderValue, S, C, x)));
        let H = M && Object.keys(U).length >= Object.keys(B).length ? M : A,
            G = t => {
                if (e.isDisabled || e.isReadOnly) return;
                let n = Object.keys(U),
                    i = Object.keys(B);
                null == t ? (O(null), k(h(e.placeholderValue, S, C, x)), Y({})) : n.length >= i.length || n.length === i.length - 1 && B.dayPeriod && !U.dayPeriod && "dayPeriod" !== j.current ? O(t = (0, r.toCalendar)(t, (null == E ? void 0 : E.calendar) || new r.GregorianCalendar)) : k(t), j.current = null
            },
            V = (0, o.useMemo)(() => H.toDate(w), [H, w]),
            $ = (0, o.useMemo)(() => P.formatToParts(V).map(e => {
                var t, n, a;
                let o = b[e.type];
                "era" === e.type && 1 === C.getEras().length && (o = !1);
                let s = b[e.type] && !U[e.type];
                let u = b[e.type] ? (t = e.type, n = e.value, a = i, "era" === t || "dayPeriod" === t ? n : "year" === t || "month" === t || "day" === t ? _.getStringForLocale(t, a) : "––") : null;
                return {
                    type: y[e.type] || e.type,
                    text: s ? u : e.value,
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
                    }(H, e.type, F),
                    isPlaceholder: s,
                    placeholder: u,
                    isEditable: o
                }
            }), [V, U, P, F, H, C, i]);
        B.era && U.year && !U.era ? (U.era = !0, Y({
            ...U
        })) : !B.era && U.era && (delete U.era, Y({
            ...U
        }));
        let W = e => {
                U[e] = !0, "year" === e && B.era && (U.era = !0), Y({
                    ...U
                })
            },
            K = (e, t) => {
                if (U[e]) G(function(e, t, n, r) {
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
                }(H, e, t, F));
                else {
                    W(e);
                    let t = Object.keys(U),
                        n = Object.keys(B);
                    (t.length >= n.length || t.length === n.length - 1 && B.dayPeriod && !U.dayPeriod) && G(H)
                }
            },
            q = e.isInvalid || "invalid" === e.validationState || u(M, e.minValue, e.maxValue);
        return {
            value: M,
            dateValue: V,
            calendar: C,
            setValue: G,
            segments: $,
            dateFormatter: P,
            validationState: e.validationState || (q ? "invalid" : null),
            isInvalid: q,
            granularity: S,
            maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : "year",
            isDisabled: l,
            isReadOnly: f,
            isRequired: g,
            increment(e) {
                K(e, 1)
            },
            decrement(e) {
                K(e, -1)
            },
            incrementPage(e) {
                K(e, v[e] || 1)
            },
            decrementPage(e) {
                K(e, -(v[e] || 1))
            },
            setSegment(e, t) {
                W(e), G(function(e, t, n, r) {
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
                }(H, e, t, F))
            },
            confirmPlaceholder() {
                if (e.isDisabled || e.isReadOnly) return;
                let t = Object.keys(U),
                    n = Object.keys(B);
                t.length === n.length - 1 && B.dayPeriod && !U.dayPeriod && (Y(U = {
                    ...B
                }), G(H.copy()))
            },
            clearSegment(t) {
                delete U[t], j.current = t, Y({
                    ...U
                });
                let n = h(e.placeholderValue, S, C, x),
                    r = H;
                if ("dayPeriod" === t && "hour" in H && "hour" in n) {
                    let e = H.hour >= 12,
                        t = n.hour >= 12;
                    e && !t ? r = H.set({
                        hour: H.hour - 12
                    }) : !e && t && (r = H.set({
                        hour: H.hour + 12
                    }))
                } else t in H && (r = H.set({
                    [t]: n[t]
                }));
                O(null), G(r)
            },
            formatValue(e) {
                if (!M) return "";
                let t = d(e, I);
                return new r.DateFormatter(i, t).format(V)
            }
        }
    }

    function S(e) {
        var t, n, s;
        let c = (0, i.useOverlayTriggerState)(e),
            [l, p] = (0, a.useControlledState)(e.value, e.defaultValue || null, e.onChange),
            [h, g] = (0, o.useState)(() => l || {
                start: null,
                end: null
            });
        null == l && h.start && h.end && g(h = {
            start: null,
            end: null
        });
        let _ = l || h,
            b = e => {
                g(e), (null == e ? void 0 : e.start) && e.end ? p(e) : p(null)
            },
            [v] = m((null == _ ? void 0 : _.start) || (null == _ ? void 0 : _.end) || e.placeholderValue, e.granularity),
            y = "hour" === v || "minute" === v || "second" === v,
            E = null === (s = e.shouldCloseOnSelect) || void 0 === s || s,
            [S, x] = (0, o.useState)(null),
            [w, T] = (0, o.useState)(null);
        _ && _.start && _.end && (S = _, "hour" in _.start && (w = _));
        let C = (e, t) => {
                b({
                    start: "timeZone" in t.start ? t.start.set((0, r.toCalendarDate)(e.start)) : (0, r.toCalendarDateTime)(e.start, t.start),
                    end: "timeZone" in t.end ? t.end.set((0, r.toCalendarDate)(e.end)) : (0, r.toCalendarDateTime)(e.end, t.end)
                }), x(null), T(null)
            },
            D = t => {
                let n = "function" == typeof E ? E() : E;
                y ? n || t.start && t.end && (null == w ? void 0 : w.start) && (null == w ? void 0 : w.end) ? C(t, {
                    start: (null == w ? void 0 : w.start) || f(e.placeholderValue),
                    end: (null == w ? void 0 : w.end) || f(e.placeholderValue)
                }) : x(t) : t.start && t.end ? b(t) : x(t), n && c.setOpen(!1)
            },
            O = e => {
                (null == S ? void 0 : S.start) && (null == S ? void 0 : S.end) && e.start && e.end ? C(S, e) : T(e)
            },
            M = e.isInvalid || "invalid" === e.validationState || null != _ && (u(_.start, e.minValue, e.maxValue) || u(_.end, e.minValue, e.maxValue) || null != _.end && null != _.start && 0 > _.end.compare(_.start) || (null == _ ? void 0 : _.start) && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, _.start)) || (null == _ ? void 0 : _.end) && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, _.end))),
            A = e.validationState || (M ? "invalid" : null);
        return {
            value: _,
            setValue: b,
            dateRange: S,
            timeRange: w,
            granularity: v,
            hasTime: y,
            setDate(e, t) {
                D({
                    ...S,
                    [e]: t
                })
            },
            setTime(e, t) {
                O({
                    ...w,
                    [e]: t
                })
            },
            setDateTime(e, t) {
                b({
                    ..._,
                    [e]: t
                })
            },
            setDateRange: D,
            setTimeRange: O,
            ...c,
            setOpen(t) {
                !t && !((null == _ ? void 0 : _.start) && (null == _ ? void 0 : _.end)) && (null == S ? void 0 : S.start) && (null == S ? void 0 : S.end) && y && C(S, {
                    start: (null == w ? void 0 : w.start) || f(e.placeholderValue),
                    end: (null == w ? void 0 : w.end) || f(e.placeholderValue)
                }), c.setOpen(t)
            },
            validationState: A,
            isInvalid: M,
            formatValue(t, n) {
                let i;
                if (!_ || !_.start || !_.end) return null;
                let a = "timeZone" in _.start ? _.start.timeZone : void 0,
                    o = e.granularity || (_.start && "minute" in _.start ? "minute" : "day"),
                    s = "timeZone" in _.end ? _.end.timeZone : void 0,
                    u = e.granularity || (_.end && "minute" in _.end ? "minute" : "day"),
                    c = d(n, {
                        granularity: o,
                        timeZone: a,
                        hideTimeZone: e.hideTimeZone,
                        hourCycle: e.hourCycle,
                        showEra: "gregory" === _.start.calendar.identifier && "BC" === _.start.era || "gregory" === _.end.calendar.identifier && "BC" === _.end.era
                    }),
                    l = _.start.toDate(a || "UTC"),
                    f = _.end.toDate(s || "UTC"),
                    p = new r.DateFormatter(t, c);
                if (a === s && o === u && 0 !== _.start.compare(_.end)) {
                    try {
                        let e = p.formatRangeToParts(l, f),
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
                    let a = d(n, {
                        granularity: u,
                        timeZone: s,
                        hideTimeZone: e.hideTimeZone,
                        hourCycle: e.hourCycle
                    });
                    i = new r.DateFormatter(t, a)
                }
                return {
                    start: p.format(l),
                    end: i.format(f)
                }
            }
        }
    }

    function x(e) {
        let {
            placeholderValue: t = new r.Time,
            minValue: n,
            maxValue: i,
            granularity: s
        } = e, [u, c] = (0, a.useControlledState)(e.value, e.defaultValue, e.onChange), l = u || t, d = l && "day" in l ? l : void 0, f = e.defaultValue && "timeZone" in e.defaultValue ? e.defaultValue.timeZone : void 0, p = (0, o.useMemo)(() => {
            let e = l && "timeZone" in l ? l.timeZone : void 0;
            return (e || f) && t ? (0, r.toZoned)(w(t), e || f) : w(t)
        }, [t, l, f]), h = (0, o.useMemo)(() => w(n, d), [n, d]), m = (0, o.useMemo)(() => w(i, d), [i, d]), g = (0, o.useMemo)(() => u && "day" in u ? (0, r.toTime)(u) : u, [u]), _ = (0, o.useMemo)(() => null == u ? null : w(u), [u]);
        return {
            ...E({
                ...e,
                value: _,
                defaultValue: void 0,
                minValue: h,
                maxValue: m,
                onChange: e => {
                    c(d || f ? e : e && (0, r.toTime)(e))
                },
                granularity: s || "minute",
                maxGranularity: "hour",
                placeholderValue: p,
                createCalendar: () => new r.GregorianCalendar
            }),
            timeValue: g
        }
    }

    function w(e, t = (0, r.today)((0, r.getLocalTimeZone)())) {
        return e ? "day" in e ? e : (0, r.toCalendarDateTime)(t, e) : null
    }
}