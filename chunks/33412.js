function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCalendarState: function() {
            return p
        },
        useRangeCalendarState: function() {
            return m
        }
    });
    var r = n("387103"),
        i = n("697898"),
        a = n("470079");

    function o(e, t, n) {
        return null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0
    }

    function s(e, t, n, r, i) {
        let a = {};
        for (let e in t) a[e] = Math.floor(t[e] / 2), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
        let o = u(e, t, n).subtract(a);
        return l(e, o, t, n, r, i)
    }

    function u(e, t, n, i, a) {
        let o = e;
        return t.years ? o = (0, r.startOfYear)(e) : t.months ? o = (0, r.startOfMonth)(e) : t.weeks && (o = (0, r.startOfWeek)(e, n)), l(e, o, t, n, i, a)
    }

    function c(e, t, n, r, i) {
        let a = {
            ...t
        };
        t.days ? a.days-- : t.weeks ? a.weeks-- : t.months ? a.months-- : t.years && a.years--;
        let o = u(e, t, n).subtract(a);
        return l(e, o, t, n, r, i)
    }

    function l(e, t, n, i, a, o) {
        return a && e.compare(a) >= 0 && (t = (0, r.maxDate)(t, u((0, r.toCalendarDate)(a), n, i))), o && 0 >= e.compare(o) && (t = (0, r.minDate)(t, c((0, r.toCalendarDate)(o), n, i))), t
    }

    function d(e, t, n) {
        return t && (e = (0, r.maxDate)(e, (0, r.toCalendarDate)(t))), n && (e = (0, r.minDate)(e, (0, r.toCalendarDate)(n))), e
    }

    function f(e, t, n) {
        if (!n) return e;
        for (; e.compare(t) >= 0 && n(e);) e = e.subtract({
            days: 1
        });
        if (e.compare(t) >= 0) return e
    }

    function p(e) {
        let t = (0, a.useMemo)(() => new r.DateFormatter(e.locale), [e.locale]),
            n = (0, a.useMemo)(() => t.resolvedOptions(), [t]),
            {
                locale: p,
                createCalendar: m,
                visibleDuration: g = {
                    months: 1
                },
                minValue: _,
                maxValue: b,
                selectionAlignment: v,
                isDateUnavailable: y,
                pageBehavior: E = "visible"
            } = e,
            S = (0, a.useMemo)(() => m(n.calendar), [m, n.calendar]),
            [x, w] = (0, i.useControlledState)(e.value, e.defaultValue, e.onChange),
            T = (0, a.useMemo)(() => x ? (0, r.toCalendar)((0, r.toCalendarDate)(x), S) : null, [x, S]),
            C = (0, a.useMemo)(() => x && "timeZone" in x ? x.timeZone : n.timeZone, [x, n.timeZone]),
            D = (0, a.useMemo)(() => e.focusedValue ? d((0, r.toCalendar)((0, r.toCalendarDate)(e.focusedValue), S), _, b) : void 0, [e.focusedValue, S, _, b]),
            O = (0, a.useMemo)(() => d(e.defaultFocusedValue ? (0, r.toCalendar)((0, r.toCalendarDate)(e.defaultFocusedValue), S) : T || (0, r.toCalendar)((0, r.today)(C), S), _, b), [e.defaultFocusedValue, T, C, S, _, b]),
            [M, A] = (0, i.useControlledState)(D, O, e.onFocusChange),
            [k, R] = (0, a.useState)(() => {
                switch (v) {
                    case "start":
                        return u(M, g, p, _, b);
                    case "end":
                        return c(M, g, p, _, b);
                    default:
                        return s(M, g, p, _, b)
                }
            }),
            [N, I] = (0, a.useState)(e.autoFocus || !1),
            L = (0, a.useMemo)(() => {
                let e = {
                    ...g
                };
                return e.days ? e.days-- : e.days = -1, k.add(e)
            }, [k, g]),
            [P, F] = (0, a.useState)(S.identifier);
        if (S.identifier !== P) {
            let e = (0, r.toCalendar)(M, S);
            R(s(e, g, p, _, b)), A(e), F(S.identifier)
        }

        function B(e) {
            A(e = d(e, _, b))
        }

        function U(t) {
            !e.isDisabled && !e.isReadOnly && (t = f(t = d(t, _, b), k, y)) && (t = (0, r.toCalendar)(t, (null == x ? void 0 : x.calendar) || new r.GregorianCalendar), x && "hour" in x ? w(x.set(t)) : w(t))
        }
        o(M, _, b) ? A(d(M, _, b)) : 0 > M.compare(k) ? R(c(M, g, p, _, b)) : M.compare(L) > 0 && R(u(M, g, p, _, b));
        let Y = (0, a.useMemo)(() => !!T && (!!(y && y(T)) || o(T, _, b)), [T, y, _, b]),
            j = e.isInvalid || "invalid" === e.validationState || Y,
            z = (0, a.useMemo)(() => "visible" === E ? g : h(g), [E, g]);
        return {
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            value: T,
            setValue: U,
            visibleRange: {
                start: k,
                end: L
            },
            minValue: _,
            maxValue: b,
            focusedDate: M,
            timeZone: C,
            validationState: j ? "invalid" : null,
            isValueInvalid: j,
            setFocusedDate(e) {
                B(e), I(!0)
            },
            focusNextDay() {
                B(M.add({
                    days: 1
                }))
            },
            focusPreviousDay() {
                B(M.subtract({
                    days: 1
                }))
            },
            focusNextRow() {
                g.days ? this.focusNextPage() : (g.weeks || g.months || g.years) && B(M.add({
                    weeks: 1
                }))
            },
            focusPreviousRow() {
                g.days ? this.focusPreviousPage() : (g.weeks || g.months || g.years) && B(M.subtract({
                    weeks: 1
                }))
            },
            focusNextPage() {
                let e = k.add(z);
                A(d(M.add(z), _, b)), R(u(l(M, e, z, p, _, b), z, p))
            },
            focusPreviousPage() {
                let e = k.subtract(z);
                A(d(M.subtract(z), _, b)), R(u(l(M, e, z, p, _, b), z, p))
            },
            focusSectionStart() {
                g.days ? B(k) : g.weeks ? B((0, r.startOfWeek)(M, p)) : (g.months || g.years) && B((0, r.startOfMonth)(M))
            },
            focusSectionEnd() {
                g.days ? B(L) : g.weeks ? B((0, r.endOfWeek)(M, p)) : (g.months || g.years) && B((0, r.endOfMonth)(M))
            },
            focusNextSection(e) {
                if (!e && !g.days) {
                    B(M.add(h(g)));
                    return
                }
                g.days ? this.focusNextPage() : g.weeks ? B(M.add({
                    months: 1
                })) : (g.months || g.years) && B(M.add({
                    years: 1
                }))
            },
            focusPreviousSection(e) {
                if (!e && !g.days) {
                    B(M.subtract(h(g)));
                    return
                }
                g.days ? this.focusPreviousPage() : g.weeks ? B(M.subtract({
                    months: 1
                })) : (g.months || g.years) && B(M.subtract({
                    years: 1
                }))
            },
            selectFocusedDate() {
                U(M)
            },
            selectDate(e) {
                U(e)
            },
            isFocused: N,
            setFocused: I,
            isInvalid: e => o(e, _, b),
            isSelected(e) {
                return null != T && (0, r.isSameDay)(e, T) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
            },
            isCellFocused: e => N && M && (0, r.isSameDay)(e, M),
            isCellDisabled(t) {
                return e.isDisabled || 0 > t.compare(k) || t.compare(L) > 0 || this.isInvalid(t, _, b)
            },
            isCellUnavailable: t => e.isDateUnavailable && e.isDateUnavailable(t),
            isPreviousVisibleRangeInvalid() {
                let e = k.subtract({
                    days: 1
                });
                return (0, r.isSameDay)(e, k) || this.isInvalid(e, _, b)
            },
            isNextVisibleRangeInvalid() {
                let e = L.add({
                    days: 1
                });
                return (0, r.isSameDay)(e, L) || this.isInvalid(e, _, b)
            },
            getDatesInWeek(e, t = k) {
                let n = t.add({
                        weeks: e
                    }),
                    i = [];
                n = (0, r.startOfWeek)(n, p);
                let a = (0, r.getDayOfWeek)(n, p);
                for (let e = 0; e < a; e++) i.push(null);
                for (; i.length < 7;) {
                    i.push(n);
                    let e = n.add({
                        days: 1
                    });
                    if ((0, r.isSameDay)(n, e)) break;
                    n = e
                }
                for (; i.length < 7;) i.push(null);
                return i
            }
        }
    }

    function h(e) {
        let t = {
            ...e
        };
        for (let n in e) t[n] = 1;
        return t
    }

    function m(e) {
        let {
            value: t,
            defaultValue: n,
            onChange: u,
            createCalendar: c,
            locale: l,
            visibleDuration: h = {
                months: 1
            },
            minValue: m,
            maxValue: v,
            ...y
        } = e, [E, S] = (0, i.useControlledState)(t, n || null, u), [x, w] = (0, a.useState)(null), T = "center";
        if (E && E.start && E.end) {
            let e = s((0, r.toCalendarDate)(E.start), h, l, m, v).add(h).subtract({
                days: 1
            });
            E.end.compare(e) > 0 && (T = "start")
        }
        let C = (0, a.useRef)(null),
            [D, O] = (0, a.useState)(null),
            M = (0, a.useMemo)(() => (0, r.maxDate)(m, null == D ? void 0 : D.start), [m, D]),
            A = (0, a.useMemo)(() => (0, r.minDate)(v, null == D ? void 0 : D.end), [v, D]),
            k = p({
                ...y,
                value: E && E.start,
                createCalendar: c,
                locale: l,
                visibleDuration: h,
                minValue: M,
                maxValue: A,
                selectionAlignment: T
            }),
            R = t => {
                t && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (C.current = {
                    start: b(t, k, -1),
                    end: b(t, k, 1)
                }, O(C.current)) : (C.current = null, O(null))
            },
            [N, I] = (0, a.useState)(k.visibleRange);
        (!(0, r.isEqualDay)(k.visibleRange.start, N.start) || !(0, r.isEqualDay)(k.visibleRange.end, N.end)) && (R(x), I(k.visibleRange));
        let L = e => {
                e ? (w(e), R(e)) : (w(null), R(null))
            },
            P = x ? g(x, k.focusedDate) : E && g(E.start, E.end),
            F = t => {
                if (!e.isReadOnly) {
                    if (t = f(t = d(t, M, A), k.visibleRange.start, e.isDateUnavailable)) {
                        if (x) {
                            let e = g(x, t);
                            S({
                                start: _(e.start, null == E ? void 0 : E.start),
                                end: _(e.end, null == E ? void 0 : E.end)
                            }), L(null)
                        } else L(t)
                    }
                }
            },
            [B, U] = (0, a.useState)(!1),
            {
                isDateUnavailable: Y
            } = e,
            j = (0, a.useMemo)(() => !!E && !x && (!!(Y && (Y(E.start) || Y(E.end))) || o(E.start, m, v) || o(E.end, m, v)), [Y, E, x, m, v]),
            z = e.isInvalid || "invalid" === e.validationState || j;
        return {
            ...k,
            value: E,
            setValue: S,
            anchorDate: x,
            setAnchorDate: L,
            highlightedRange: P,
            validationState: z ? "invalid" : null,
            isValueInvalid: z,
            selectFocusedDate() {
                F(k.focusedDate)
            },
            selectDate: F,
            highlightDate(e) {
                x && k.setFocusedDate(e)
            },
            isSelected: e => P && e.compare(P.start) >= 0 && 0 >= e.compare(P.end) && !k.isCellDisabled(e) && !k.isCellUnavailable(e),
            isInvalid(e) {
                var t, n;
                return k.isInvalid(e) || o(e, null === (t = C.current) || void 0 === t ? void 0 : t.start, null === (n = C.current) || void 0 === n ? void 0 : n.end)
            },
            isDragging: B,
            setDragging: U
        }
    }

    function g(e, t) {
        return e && t ? (0 > t.compare(e) && ([e, t] = [t, e]), {
            start: (0, r.toCalendarDate)(e),
            end: (0, r.toCalendarDate)(t)
        }) : null
    }

    function _(e, t) {
        return (e = (0, r.toCalendar)(e, (null == t ? void 0 : t.calendar) || new r.GregorianCalendar), t && "hour" in t) ? t.set(e) : e
    }

    function b(e, t, n) {
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