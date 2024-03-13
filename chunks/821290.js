function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCalendarState: function() {
            return p
        },
        useRangeCalendarState: function() {
            return v
        }
    }), n("222007"), n("424973");
    var r = n("24899"),
        i = n("679750"),
        o = n("884691");

    function s(e, t, n) {
        return null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0
    }

    function a(e, t, n, r, i) {
        let o = {};
        for (let e in t) o[e] = Math.floor(t[e] / 2), o[e] > 0 && t[e] % 2 == 0 && o[e]--;
        let s = c(e, t, n).subtract(o);
        return d(e, s, t, n, r, i)
    }

    function c(e, t, n, i, o) {
        let s = e;
        return t.years ? s = (0, r.startOfYear)(e) : t.months ? s = (0, r.startOfMonth)(e) : t.weeks && (s = (0, r.startOfWeek)(e, n)), d(e, s, t, n, i, o)
    }

    function u(e, t, n, r, i) {
        let o = {
            ...t
        };
        t.days ? o.days-- : t.weeks ? o.weeks-- : t.months ? o.months-- : t.years && o.years--;
        let s = c(e, t, n).subtract(o);
        return d(e, s, t, n, r, i)
    }

    function d(e, t, n, i, o, s) {
        return o && e.compare(o) >= 0 && (t = (0, r.maxDate)(t, c((0, r.toCalendarDate)(o), n, i))), s && 0 >= e.compare(s) && (t = (0, r.minDate)(t, u((0, r.toCalendarDate)(s), n, i))), t
    }

    function l(e, t, n) {
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
        let t = (0, o.useMemo)(() => new r.DateFormatter(e.locale), [e.locale]),
            n = (0, o.useMemo)(() => t.resolvedOptions(), [t]),
            {
                locale: p,
                createCalendar: v,
                visibleDuration: g = {
                    months: 1
                },
                minValue: b,
                maxValue: m,
                selectionAlignment: y,
                isDateUnavailable: x,
                pageBehavior: w = "visible"
            } = e,
            S = (0, o.useMemo)(() => v(n.calendar), [v, n.calendar]),
            [k, E] = (0, i.useControlledState)(e.value, e.defaultValue, e.onChange),
            _ = (0, o.useMemo)(() => k ? (0, r.toCalendar)((0, r.toCalendarDate)(k), S) : null, [k, S]),
            M = (0, o.useMemo)(() => k && "timeZone" in k ? k.timeZone : n.timeZone, [k, n.timeZone]),
            D = (0, o.useMemo)(() => e.focusedValue ? l((0, r.toCalendar)((0, r.toCalendarDate)(e.focusedValue), S), b, m) : void 0, [e.focusedValue, S, b, m]),
            C = (0, o.useMemo)(() => l(e.defaultFocusedValue ? (0, r.toCalendar)((0, r.toCalendarDate)(e.defaultFocusedValue), S) : _ || (0, r.toCalendar)((0, r.today)(M), S), b, m), [e.defaultFocusedValue, _, M, S, b, m]),
            [P, T] = (0, i.useControlledState)(D, C, e.onFocusChange),
            [A, R] = (0, o.useState)(() => {
                switch (y) {
                    case "start":
                        return c(P, g, p, b, m);
                    case "end":
                        return u(P, g, p, b, m);
                    default:
                        return a(P, g, p, b, m)
                }
            }),
            [I, O] = (0, o.useState)(e.autoFocus || !1),
            j = (0, o.useMemo)(() => {
                let e = {
                    ...g
                };
                return e.days ? e.days-- : e.days = -1, A.add(e)
            }, [A, g]),
            [L, N] = (0, o.useState)(S.identifier);
        if (S.identifier !== L) {
            let e = (0, r.toCalendar)(P, S);
            R(a(e, g, p, b, m)), T(e), N(S.identifier)
        }

        function F(e) {
            T(e = l(e, b, m))
        }

        function B(t) {
            !e.isDisabled && !e.isReadOnly && (t = f(t = l(t, b, m), A, x)) && (t = (0, r.toCalendar)(t, (null == k ? void 0 : k.calendar) || new r.GregorianCalendar), k && "hour" in k ? E(k.set(t)) : E(t))
        }
        s(P, b, m) ? T(l(P, b, m)) : 0 > P.compare(A) ? R(u(P, g, p, b, m)) : P.compare(j) > 0 && R(c(P, g, p, b, m));
        let z = (0, o.useMemo)(() => !!_ && (!!(x && x(_)) || s(_, b, m)), [_, x, b, m]),
            K = e.isInvalid || "invalid" === e.validationState || z,
            V = (0, o.useMemo)(() => "visible" === w ? g : h(g), [w, g]);
        return {
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            value: _,
            setValue: B,
            visibleRange: {
                start: A,
                end: j
            },
            minValue: b,
            maxValue: m,
            focusedDate: P,
            timeZone: M,
            validationState: K ? "invalid" : null,
            isValueInvalid: K,
            setFocusedDate(e) {
                F(e), O(!0)
            },
            focusNextDay() {
                F(P.add({
                    days: 1
                }))
            },
            focusPreviousDay() {
                F(P.subtract({
                    days: 1
                }))
            },
            focusNextRow() {
                g.days ? this.focusNextPage() : (g.weeks || g.months || g.years) && F(P.add({
                    weeks: 1
                }))
            },
            focusPreviousRow() {
                g.days ? this.focusPreviousPage() : (g.weeks || g.months || g.years) && F(P.subtract({
                    weeks: 1
                }))
            },
            focusNextPage() {
                let e = A.add(V);
                T(l(P.add(V), b, m)), R(c(d(P, e, V, p, b, m), V, p))
            },
            focusPreviousPage() {
                let e = A.subtract(V);
                T(l(P.subtract(V), b, m)), R(c(d(P, e, V, p, b, m), V, p))
            },
            focusSectionStart() {
                g.days ? F(A) : g.weeks ? F((0, r.startOfWeek)(P, p)) : (g.months || g.years) && F((0, r.startOfMonth)(P))
            },
            focusSectionEnd() {
                g.days ? F(j) : g.weeks ? F((0, r.endOfWeek)(P, p)) : (g.months || g.years) && F((0, r.endOfMonth)(P))
            },
            focusNextSection(e) {
                if (!e && !g.days) {
                    F(P.add(h(g)));
                    return
                }
                g.days ? this.focusNextPage() : g.weeks ? F(P.add({
                    months: 1
                })) : (g.months || g.years) && F(P.add({
                    years: 1
                }))
            },
            focusPreviousSection(e) {
                if (!e && !g.days) {
                    F(P.subtract(h(g)));
                    return
                }
                g.days ? this.focusPreviousPage() : g.weeks ? F(P.subtract({
                    months: 1
                })) : (g.months || g.years) && F(P.subtract({
                    years: 1
                }))
            },
            selectFocusedDate() {
                B(P)
            },
            selectDate(e) {
                B(e)
            },
            isFocused: I,
            setFocused: O,
            isInvalid: e => s(e, b, m),
            isSelected(e) {
                return null != _ && (0, r.isSameDay)(e, _) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
            },
            isCellFocused: e => I && P && (0, r.isSameDay)(e, P),
            isCellDisabled(t) {
                return e.isDisabled || 0 > t.compare(A) || t.compare(j) > 0 || this.isInvalid(t, b, m)
            },
            isCellUnavailable: t => e.isDateUnavailable && e.isDateUnavailable(t),
            isPreviousVisibleRangeInvalid() {
                let e = A.subtract({
                    days: 1
                });
                return (0, r.isSameDay)(e, A) || this.isInvalid(e, b, m)
            },
            isNextVisibleRangeInvalid() {
                let e = j.add({
                    days: 1
                });
                return (0, r.isSameDay)(e, j) || this.isInvalid(e, b, m)
            },
            getDatesInWeek(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A,
                    n = t.add({
                        weeks: e
                    }),
                    i = [];
                n = (0, r.startOfWeek)(n, p);
                let o = (0, r.getDayOfWeek)(n, p);
                for (let e = 0; e < o; e++) i.push(null);
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

    function v(e) {
        let {
            value: t,
            defaultValue: n,
            onChange: c,
            createCalendar: u,
            locale: d,
            visibleDuration: h = {
                months: 1
            },
            minValue: v,
            maxValue: y,
            ...x
        } = e, [w, S] = (0, i.useControlledState)(t, n || null, c), [k, E] = (0, o.useState)(null), _ = "center";
        if (w && w.start && w.end) {
            let e = a((0, r.toCalendarDate)(w.start), h, d, v, y).add(h).subtract({
                days: 1
            });
            w.end.compare(e) > 0 && (_ = "start")
        }
        let M = (0, o.useRef)(null),
            [D, C] = (0, o.useState)(null),
            P = (0, o.useMemo)(() => (0, r.maxDate)(v, null == D ? void 0 : D.start), [v, D]),
            T = (0, o.useMemo)(() => (0, r.minDate)(y, null == D ? void 0 : D.end), [y, D]),
            A = p({
                ...x,
                value: w && w.start,
                createCalendar: u,
                locale: d,
                visibleDuration: h,
                minValue: P,
                maxValue: T,
                selectionAlignment: _
            }),
            R = t => {
                t && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (M.current = {
                    start: m(t, A, -1),
                    end: m(t, A, 1)
                }, C(M.current)) : (M.current = null, C(null))
            },
            [I, O] = (0, o.useState)(A.visibleRange);
        (!(0, r.isEqualDay)(A.visibleRange.start, I.start) || !(0, r.isEqualDay)(A.visibleRange.end, I.end)) && (R(k), O(A.visibleRange));
        let j = e => {
                e ? (E(e), R(e)) : (E(null), R(null))
            },
            L = k ? g(k, A.focusedDate) : w && g(w.start, w.end),
            N = t => {
                if (!e.isReadOnly) {
                    if (t = f(t = l(t, P, T), A.visibleRange.start, e.isDateUnavailable)) {
                        if (k) {
                            let e = g(k, t);
                            S({
                                start: b(e.start, null == w ? void 0 : w.start),
                                end: b(e.end, null == w ? void 0 : w.end)
                            }), j(null)
                        } else j(t)
                    }
                }
            },
            [F, B] = (0, o.useState)(!1),
            {
                isDateUnavailable: z
            } = e,
            K = (0, o.useMemo)(() => !!w && !k && (!!(z && (z(w.start) || z(w.end))) || s(w.start, v, y) || s(w.end, v, y)), [z, w, k, v, y]),
            V = e.isInvalid || "invalid" === e.validationState || K;
        return {
            ...A,
            value: w,
            setValue: S,
            anchorDate: k,
            setAnchorDate: j,
            highlightedRange: L,
            validationState: V ? "invalid" : null,
            isValueInvalid: V,
            selectFocusedDate() {
                N(A.focusedDate)
            },
            selectDate: N,
            highlightDate(e) {
                k && A.setFocusedDate(e)
            },
            isSelected: e => L && e.compare(L.start) >= 0 && 0 >= e.compare(L.end) && !A.isCellDisabled(e) && !A.isCellUnavailable(e),
            isInvalid(e) {
                var t, n;
                return A.isInvalid(e) || s(e, null === (t = M.current) || void 0 === t ? void 0 : t.start, null === (n = M.current) || void 0 === n ? void 0 : n.end)
            },
            isDragging: F,
            setDragging: B
        }
    }

    function g(e, t) {
        return e && t ? (0 > t.compare(e) && ([e, t] = [t, e]), {
            start: (0, r.toCalendarDate)(e),
            end: (0, r.toCalendarDate)(t)
        }) : null
    }

    function b(e, t) {
        return (e = (0, r.toCalendar)(e, (null == t ? void 0 : t.calendar) || new r.GregorianCalendar), t && "hour" in t) ? t.set(e) : e
    }

    function m(e, t, n) {
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