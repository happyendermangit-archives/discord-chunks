function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCalendarState: function() {
            return f
        },
        useRangeCalendarState: function() {
            return h
        }
    }), n("222007"), n("424973");
    var r = n("24899"),
        a = n("679750"),
        i = n("884691");

    function o(e, t, n) {
        return null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0
    }

    function s(e, t, n, r, a) {
        let i = {};
        for (let e in t) i[e] = Math.floor(t[e] / 2), i[e] > 0 && t[e] % 2 == 0 && i[e]--;
        let o = c(e, t, n).subtract(i);
        return u(e, o, t, n, r, a)
    }

    function c(e, t, n, a, i) {
        let o = e;
        return t.years ? o = (0, r.startOfYear)(e) : t.months ? o = (0, r.startOfMonth)(e) : t.weeks && (o = (0, r.startOfWeek)(e, n)), u(e, o, t, n, a, i)
    }

    function l(e, t, n, r, a) {
        let i = {
            ...t
        };
        t.days ? i.days-- : t.weeks ? i.weeks-- : t.months ? i.months-- : t.years && i.years--;
        let o = c(e, t, n).subtract(i);
        return u(e, o, t, n, r, a)
    }

    function u(e, t, n, a, i, o) {
        return i && e.compare(i) >= 0 && (t = (0, r.maxDate)(t, c((0, r.toCalendarDate)(i), n, a))), o && 0 >= e.compare(o) && (t = (0, r.minDate)(t, l((0, r.toCalendarDate)(o), n, a))), t
    }

    function d(e, t, n) {
        return t && (e = (0, r.maxDate)(e, (0, r.toCalendarDate)(t))), n && (e = (0, r.minDate)(e, (0, r.toCalendarDate)(n))), e
    }

    function p(e, t, n) {
        if (!n) return e;
        for (; e.compare(t) >= 0 && n(e);) e = e.subtract({
            days: 1
        });
        if (e.compare(t) >= 0) return e
    }

    function f(e) {
        let t = (0, i.useMemo)(() => new r.DateFormatter(e.locale), [e.locale]),
            n = (0, i.useMemo)(() => t.resolvedOptions(), [t]),
            {
                locale: f,
                createCalendar: h,
                visibleDuration: v = {
                    months: 1
                },
                minValue: g,
                maxValue: y,
                selectionAlignment: b,
                isDateUnavailable: x,
                pageBehavior: S = "visible"
            } = e,
            w = (0, i.useMemo)(() => h(n.calendar), [h, n.calendar]),
            [D, C] = (0, a.useControlledState)(e.value, e.defaultValue, e.onChange),
            k = (0, i.useMemo)(() => D ? (0, r.toCalendar)((0, r.toCalendarDate)(D), w) : null, [D, w]),
            P = (0, i.useMemo)(() => D && "timeZone" in D ? D.timeZone : n.timeZone, [D, n.timeZone]),
            E = (0, i.useMemo)(() => e.focusedValue ? d((0, r.toCalendar)((0, r.toCalendarDate)(e.focusedValue), w), g, y) : void 0, [e.focusedValue, w, g, y]),
            T = (0, i.useMemo)(() => d(e.defaultFocusedValue ? (0, r.toCalendar)((0, r.toCalendarDate)(e.defaultFocusedValue), w) : k || (0, r.toCalendar)((0, r.today)(P), w), g, y), [e.defaultFocusedValue, k, P, w, g, y]),
            [M, R] = (0, a.useControlledState)(E, T, e.onFocusChange),
            [I, O] = (0, i.useState)(() => {
                switch (b) {
                    case "start":
                        return c(M, v, f, g, y);
                    case "end":
                        return l(M, v, f, g, y);
                    default:
                        return s(M, v, f, g, y)
                }
            }),
            [A, L] = (0, i.useState)(e.autoFocus || !1),
            N = (0, i.useMemo)(() => {
                let e = {
                    ...v
                };
                return e.days ? e.days-- : e.days = -1, I.add(e)
            }, [I, v]),
            [F, j] = (0, i.useState)(w.identifier);
        if (w.identifier !== F) {
            let e = (0, r.toCalendar)(M, w);
            O(s(e, v, f, g, y)), R(e), j(w.identifier)
        }

        function K(e) {
            R(e = d(e, g, y))
        }

        function _(t) {
            !e.isDisabled && !e.isReadOnly && (t = p(t = d(t, g, y), I, x)) && (t = (0, r.toCalendar)(t, (null == D ? void 0 : D.calendar) || new r.GregorianCalendar), D && "hour" in D ? C(D.set(t)) : C(t))
        }
        o(M, g, y) ? R(d(M, g, y)) : 0 > M.compare(I) ? O(l(M, v, f, g, y)) : M.compare(N) > 0 && O(c(M, v, f, g, y));
        let V = (0, i.useMemo)(() => !!k && (!!(x && x(k)) || o(k, g, y)), [k, x, g, y]),
            z = e.isInvalid || "invalid" === e.validationState || V,
            B = (0, i.useMemo)(() => "visible" === S ? v : m(v), [S, v]);
        return {
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            value: k,
            setValue: _,
            visibleRange: {
                start: I,
                end: N
            },
            minValue: g,
            maxValue: y,
            focusedDate: M,
            timeZone: P,
            validationState: z ? "invalid" : null,
            isValueInvalid: z,
            setFocusedDate(e) {
                K(e), L(!0)
            },
            focusNextDay() {
                K(M.add({
                    days: 1
                }))
            },
            focusPreviousDay() {
                K(M.subtract({
                    days: 1
                }))
            },
            focusNextRow() {
                v.days ? this.focusNextPage() : (v.weeks || v.months || v.years) && K(M.add({
                    weeks: 1
                }))
            },
            focusPreviousRow() {
                v.days ? this.focusPreviousPage() : (v.weeks || v.months || v.years) && K(M.subtract({
                    weeks: 1
                }))
            },
            focusNextPage() {
                let e = I.add(B);
                R(d(M.add(B), g, y)), O(c(u(M, e, B, f, g, y), B, f))
            },
            focusPreviousPage() {
                let e = I.subtract(B);
                R(d(M.subtract(B), g, y)), O(c(u(M, e, B, f, g, y), B, f))
            },
            focusSectionStart() {
                v.days ? K(I) : v.weeks ? K((0, r.startOfWeek)(M, f)) : (v.months || v.years) && K((0, r.startOfMonth)(M))
            },
            focusSectionEnd() {
                v.days ? K(N) : v.weeks ? K((0, r.endOfWeek)(M, f)) : (v.months || v.years) && K((0, r.endOfMonth)(M))
            },
            focusNextSection(e) {
                if (!e && !v.days) {
                    K(M.add(m(v)));
                    return
                }
                v.days ? this.focusNextPage() : v.weeks ? K(M.add({
                    months: 1
                })) : (v.months || v.years) && K(M.add({
                    years: 1
                }))
            },
            focusPreviousSection(e) {
                if (!e && !v.days) {
                    K(M.subtract(m(v)));
                    return
                }
                v.days ? this.focusPreviousPage() : v.weeks ? K(M.subtract({
                    months: 1
                })) : (v.months || v.years) && K(M.subtract({
                    years: 1
                }))
            },
            selectFocusedDate() {
                _(M)
            },
            selectDate(e) {
                _(e)
            },
            isFocused: A,
            setFocused: L,
            isInvalid: e => o(e, g, y),
            isSelected(e) {
                return null != k && (0, r.isSameDay)(e, k) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
            },
            isCellFocused: e => A && M && (0, r.isSameDay)(e, M),
            isCellDisabled(t) {
                return e.isDisabled || 0 > t.compare(I) || t.compare(N) > 0 || this.isInvalid(t, g, y)
            },
            isCellUnavailable: t => e.isDateUnavailable && e.isDateUnavailable(t),
            isPreviousVisibleRangeInvalid() {
                let e = I.subtract({
                    days: 1
                });
                return (0, r.isSameDay)(e, I) || this.isInvalid(e, g, y)
            },
            isNextVisibleRangeInvalid() {
                let e = N.add({
                    days: 1
                });
                return (0, r.isSameDay)(e, N) || this.isInvalid(e, g, y)
            },
            getDatesInWeek(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I,
                    n = t.add({
                        weeks: e
                    }),
                    a = [];
                n = (0, r.startOfWeek)(n, f);
                let i = (0, r.getDayOfWeek)(n, f);
                for (let e = 0; e < i; e++) a.push(null);
                for (; a.length < 7;) {
                    a.push(n);
                    let e = n.add({
                        days: 1
                    });
                    if ((0, r.isSameDay)(n, e)) break;
                    n = e
                }
                for (; a.length < 7;) a.push(null);
                return a
            }
        }
    }

    function m(e) {
        let t = {
            ...e
        };
        for (let n in e) t[n] = 1;
        return t
    }

    function h(e) {
        let {
            value: t,
            defaultValue: n,
            onChange: c,
            createCalendar: l,
            locale: u,
            visibleDuration: m = {
                months: 1
            },
            minValue: h,
            maxValue: b,
            ...x
        } = e, [S, w] = (0, a.useControlledState)(t, n || null, c), [D, C] = (0, i.useState)(null), k = "center";
        if (S && S.start && S.end) {
            let e = s((0, r.toCalendarDate)(S.start), m, u, h, b).add(m).subtract({
                days: 1
            });
            S.end.compare(e) > 0 && (k = "start")
        }
        let P = (0, i.useRef)(null),
            [E, T] = (0, i.useState)(null),
            M = (0, i.useMemo)(() => (0, r.maxDate)(h, null == E ? void 0 : E.start), [h, E]),
            R = (0, i.useMemo)(() => (0, r.minDate)(b, null == E ? void 0 : E.end), [b, E]),
            I = f({
                ...x,
                value: S && S.start,
                createCalendar: l,
                locale: u,
                visibleDuration: m,
                minValue: M,
                maxValue: R,
                selectionAlignment: k
            }),
            O = t => {
                t && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (P.current = {
                    start: y(t, I, -1),
                    end: y(t, I, 1)
                }, T(P.current)) : (P.current = null, T(null))
            },
            [A, L] = (0, i.useState)(I.visibleRange);
        (!(0, r.isEqualDay)(I.visibleRange.start, A.start) || !(0, r.isEqualDay)(I.visibleRange.end, A.end)) && (O(D), L(I.visibleRange));
        let N = e => {
                e ? (C(e), O(e)) : (C(null), O(null))
            },
            F = D ? v(D, I.focusedDate) : S && v(S.start, S.end),
            j = t => {
                if (!e.isReadOnly) {
                    if (t = p(t = d(t, M, R), I.visibleRange.start, e.isDateUnavailable)) {
                        if (D) {
                            let e = v(D, t);
                            w({
                                start: g(e.start, null == S ? void 0 : S.start),
                                end: g(e.end, null == S ? void 0 : S.end)
                            }), N(null)
                        } else N(t)
                    }
                }
            },
            [K, _] = (0, i.useState)(!1),
            {
                isDateUnavailable: V
            } = e,
            z = (0, i.useMemo)(() => !!S && !D && (!!(V && (V(S.start) || V(S.end))) || o(S.start, h, b) || o(S.end, h, b)), [V, S, D, h, b]),
            B = e.isInvalid || "invalid" === e.validationState || z;
        return {
            ...I,
            value: S,
            setValue: w,
            anchorDate: D,
            setAnchorDate: N,
            highlightedRange: F,
            validationState: B ? "invalid" : null,
            isValueInvalid: B,
            selectFocusedDate() {
                j(I.focusedDate)
            },
            selectDate: j,
            highlightDate(e) {
                D && I.setFocusedDate(e)
            },
            isSelected: e => F && e.compare(F.start) >= 0 && 0 >= e.compare(F.end) && !I.isCellDisabled(e) && !I.isCellUnavailable(e),
            isInvalid(e) {
                var t, n;
                return I.isInvalid(e) || o(e, null === (t = P.current) || void 0 === t ? void 0 : t.start, null === (n = P.current) || void 0 === n ? void 0 : n.end)
            },
            isDragging: K,
            setDragging: _
        }
    }

    function v(e, t) {
        return e && t ? (0 > t.compare(e) && ([e, t] = [t, e]), {
            start: (0, r.toCalendarDate)(e),
            end: (0, r.toCalendarDate)(t)
        }) : null
    }

    function g(e, t) {
        return (e = (0, r.toCalendar)(e, (null == t ? void 0 : t.calendar) || new r.GregorianCalendar), t && "hour" in t) ? t.set(e) : e
    }

    function y(e, t, n) {
        let r = e.add({
            days: n
        });
        for (;
            (n < 0 ? r.compare(t.visibleRange.start) >= 0 : 0 >= r.compare(t.visibleRange.end)) && !t.isCellUnavailable(r);) r = r.add({
            days: n
        });
        return t.isCellUnavailable(r) ? r.add({
            days: -n
        }) : null
    }
}