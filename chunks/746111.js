function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCalendar: function() {
            return X
        },
        useRangeCalendar: function() {
            return J
        },
        useCalendarGrid: function() {
            return $
        },
        useCalendarCell: function() {
            return Q
        }
    }), n("222007");
    var r = n("775586"),
        i = n("541138"),
        o = n("4489"),
        s = n("353014"),
        a = n("779084"),
        c = n("166716"),
        u = n("727584"),
        d = n("299489"),
        l = n("489366"),
        f = n("414924"),
        p = n("861179"),
        h = n("95889"),
        v = n("839005"),
        g = n("484298"),
        b = n("434548"),
        m = n("972271"),
        y = n("559228"),
        x = n("942700"),
        w = n("661976"),
        S = n("468444"),
        k = n("195519"),
        E = n("643847"),
        _ = n("281531"),
        M = n("222538"),
        D = n("601039"),
        C = n("147284"),
        P = n("578909"),
        T = n("821039"),
        A = n("875111"),
        R = n("37337"),
        I = n("220391"),
        O = n("247645"),
        L = n("490832"),
        j = n("495480"),
        N = n("362561"),
        F = n("240849"),
        B = n("564341"),
        z = n("884691"),
        K = n("24899"),
        V = n("388032");

    function U(e) {
        return e && e.__esModule ? e.default : e
    }
    var H = {};
    H = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": o.default,
        "da-DK": s.default,
        "de-DE": a.default,
        "el-GR": c.default,
        "en-US": u.default,
        "es-ES": d.default,
        "et-EE": l.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": v.default,
        "hu-HU": g.default,
        "it-IT": b.default,
        "ja-JP": m.default,
        "ko-KR": y.default,
        "lt-LT": x.default,
        "lv-LV": w.default,
        "nb-NO": S.default,
        "nl-NL": k.default,
        "pl-PL": E.default,
        "pt-BR": _.default,
        "pt-PT": M.default,
        "ro-RO": D.default,
        "ru-RU": C.default,
        "sk-SK": P.default,
        "sl-SI": T.default,
        "sr-SP": A.default,
        "sv-SE": R.default,
        "tr-TR": I.default,
        "uk-UA": O.default,
        "zh-CN": L.default,
        "zh-TW": j.default
    };
    let q = new WeakMap;

    function G(e) {
        return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0
    }

    function W(e, t, n, r) {
        let i = (0, B.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"),
            o = G(e) || G(t),
            s = (0, B.useDateFormatter)({
                month: "long",
                year: "numeric",
                era: o,
                calendar: e.calendar.identifier,
                timeZone: n
            }),
            a = (0, B.useDateFormatter)({
                month: "long",
                year: "numeric",
                day: "numeric",
                era: o,
                calendar: e.calendar.identifier,
                timeZone: n
            });
        return (0, z.useMemo)(() => {
            if ((0, K.isSameDay)(e, (0, K.startOfMonth)(e))) {
                if ((0, K.isSameDay)(t, (0, K.endOfMonth)(e))) return s.format(e.toDate(n));
                if ((0, K.isSameDay)(t, (0, K.endOfMonth)(t))) return r ? Z(s, i, e, t, n) : s.formatRange(e.toDate(n), t.toDate(n))
            }
            return r ? Z(a, i, e, t, n) : a.formatRange(e.toDate(n), t.toDate(n))
        }, [e, t, s, a, i, n, r])
    }

    function Z(e, t, n, r, i) {
        let o = e.formatRangeToParts(n.toDate(i), r.toDate(i)),
            s = -1;
        for (let e = 0; e < o.length; e++) {
            let t = o[e];
            if ("shared" === t.source && "literal" === t.type) s = e;
            else if ("endRange" === t.source) break
        }
        let a = "",
            c = "";
        for (let e = 0; e < o.length; e++) e < s ? a += o[e].value : e > s && (c += o[e].value);
        return t.format("dateRange", {
            startDate: a,
            endDate: c
        })
    }

    function Y(e, t) {
        var n;
        let r, i, o, s, a, c = (0, B.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"),
            u = (0, F.filterDOMProps)(e),
            d = W(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
            l = W(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
        (0, F.useUpdateEffect)(() => {
            !t.isFocused && (0, N.announce)(l)
        }, [l]);
        let f = (n = t, o = (0, B.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"), "highlightedRange" in n ? {
            start: r,
            end: i
        } = n.highlightedRange || {} : r = i = n.value, s = (0, B.useDateFormatter)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: G(r) || G(i),
            timeZone: n.timeZone
        }), a = "anchorDate" in n ? n.anchorDate : null, (0, z.useMemo)(() => {
            if (!a && r && i) {
                if ((0, K.isSameDay)(r, i)) {
                    let e = s.format(r.toDate(n.timeZone));
                    return o.format("selectedDateDescription", {
                        date: e
                    })
                } {
                    let e = Z(s, o, r, i, n.timeZone);
                    return o.format("selectedRangeDescription", {
                        dateRange: e
                    })
                }
            }
            return ""
        }, [r, i, a, n.timeZone, o, s]));
        (0, F.useUpdateEffect)(() => {
            f && (0, N.announce)(f, "polite", 4e3)
        }, [f]);
        let p = (0, F.useSlotId)([!!e.errorMessage, e.isInvalid, e.validationState]);
        q.set(t, {
            ariaLabel: e["aria-label"],
            ariaLabelledBy: e["aria-labelledby"],
            errorMessageId: p,
            selectedDateDescription: f
        });
        let [h, v] = (0, z.useState)(!1), g = e.isDisabled || t.isNextVisibleRangeInvalid();
        g && h && (v(!1), t.setFocused(!0));
        let [b, m] = (0, z.useState)(!1), y = e.isDisabled || t.isPreviousVisibleRangeInvalid();
        y && b && (m(!1), t.setFocused(!0));
        let x = (0, F.useLabels)({
            id: e.id,
            "aria-label": [e["aria-label"], l].filter(Boolean).join(", "),
            "aria-labelledby": e["aria-labelledby"]
        });
        return {
            calendarProps: (0, F.mergeProps)(u, x, {
                role: "application",
                "aria-describedby": e["aria-describedby"] || void 0
            }),
            nextButtonProps: {
                onPress: () => t.focusNextPage(),
                "aria-label": c.format("next"),
                isDisabled: g,
                onFocusChange: v
            },
            prevButtonProps: {
                onPress: () => t.focusPreviousPage(),
                "aria-label": c.format("previous"),
                isDisabled: y,
                onFocusChange: m
            },
            errorMessageProps: {
                id: p
            },
            title: d
        }
    }

    function X(e, t) {
        return Y(e, t)
    }

    function J(e, t, n) {
        let r = Y(e, t),
            i = (0, z.useRef)(!1),
            o = (0, z.useRef)("undefined" != typeof window ? window : null);
        (0, F.useEvent)(o, "pointerdown", e => {
            i.current = 0 === e.width && 0 === e.height
        });
        let s = e => {
            if (i.current) {
                i.current = !1;
                return
            }
            if (t.setDragging(!1), !t.anchorDate) return;
            let n = e.target,
                o = document.getElementById(r.calendarProps.id);
            o && o.contains(document.activeElement) && (!o.contains(n) || !n.closest('button, [role="button"]')) && t.selectFocusedDate()
        };
        return (0, F.useEvent)(o, "pointerup", s), (0, F.useEvent)(o, "pointercancel", s), r.calendarProps.onBlur = e => {
            (!e.relatedTarget || !n.current.contains(e.relatedTarget)) && t.anchorDate && t.selectFocusedDate()
        }, (0, F.useEvent)(n, "touchmove", e => {
            t.isDragging && e.preventDefault()
        }, {
            passive: !1,
            capture: !0
        }), r
    }

    function $(e, t) {
        let {
            startDate: n = t.visibleRange.start,
            endDate: r = t.visibleRange.end
        } = e, {
            direction: i
        } = (0, B.useLocale)(), o = W(n, r, t.timeZone, !0), {
            ariaLabel: s,
            ariaLabelledBy: a
        } = q.get(t), c = (0, F.useLabels)({
            "aria-label": [s, o].filter(Boolean).join(", "),
            "aria-labelledby": a
        }), u = (0, B.useDateFormatter)({
            weekday: e.weekdayStyle || "narrow",
            timeZone: t.timeZone
        }), {
            locale: d
        } = (0, B.useLocale)(), l = (0, z.useMemo)(() => {
            let e = (0, K.startOfWeek)((0, K.today)(t.timeZone), d);
            return [...Array(7).keys()].map(n => {
                let r = e.add({
                    days: n
                }).toDate(t.timeZone);
                return u.format(r)
            })
        }, [d, t.timeZone, u]);
        return {
            gridProps: (0, F.mergeProps)(c, {
                role: "grid",
                "aria-readonly": t.isReadOnly || null,
                "aria-disabled": t.isDisabled || null,
                "aria-multiselectable": "highlightedRange" in t || void 0,
                onKeyDown: e => {
                    switch (e.key) {
                        case "Enter":
                        case " ":
                            e.preventDefault(), t.selectFocusedDate();
                            break;
                        case "PageUp":
                            e.preventDefault(), e.stopPropagation(), t.focusPreviousSection(e.shiftKey);
                            break;
                        case "PageDown":
                            e.preventDefault(), e.stopPropagation(), t.focusNextSection(e.shiftKey);
                            break;
                        case "End":
                            e.preventDefault(), e.stopPropagation(), t.focusSectionEnd();
                            break;
                        case "Home":
                            e.preventDefault(), e.stopPropagation(), t.focusSectionStart();
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), e.stopPropagation(), "rtl" === i ? t.focusNextDay() : t.focusPreviousDay();
                            break;
                        case "ArrowUp":
                            e.preventDefault(), e.stopPropagation(), t.focusPreviousRow();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), e.stopPropagation(), "rtl" === i ? t.focusPreviousDay() : t.focusNextDay();
                            break;
                        case "ArrowDown":
                            e.preventDefault(), e.stopPropagation(), t.focusNextRow();
                            break;
                        case "Escape":
                            "setAnchorDate" in t && (e.preventDefault(), t.setAnchorDate(null))
                    }
                },
                onFocus: () => t.setFocused(!0),
                onBlur: () => t.setFocused(!1)
            }),
            headerProps: {
                "aria-hidden": !0
            },
            weekDays: l
        }
    }

    function Q(e, t, n) {
        let {
            date: r,
            isDisabled: i
        } = e, {
            errorMessageId: o,
            selectedDateDescription: s
        } = q.get(t), a = (0, B.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"), c = (0, B.useDateFormatter)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: G(r),
            timeZone: t.timeZone
        }), u = t.isSelected(r), d = t.isCellFocused(r);
        i = i || t.isCellDisabled(r);
        let l = t.isCellUnavailable(r),
            f = !i && !l,
            p = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && r.compare(t.highlightedRange.start) >= 0 && 0 >= r.compare(t.highlightedRange.end) : t.value && (0, K.isSameDay)(t.value, r));
        p && (u = !0), r = (0, F.useDeepMemo)(r, K.isEqualDay);
        let h = (0, z.useMemo)(() => r.toDate(t.timeZone), [r, t.timeZone]),
            v = (0, K.isToday)(r, t.timeZone),
            g = (0, z.useMemo)(() => {
                let e = "";
                return "highlightedRange" in t && t.value && !t.anchorDate && ((0, K.isSameDay)(r, t.value.start) || (0, K.isSameDay)(r, t.value.end)) && (e = s + ", "), e += c.format(h), v ? e = a.format(u ? "todayDateSelected" : "todayDate", {
                    date: e
                }) : u && (e = a.format("dateSelected", {
                    date: e
                })), t.minValue && (0, K.isSameDay)(r, t.minValue) ? e += ", " + a.format("minimumDate") : t.maxValue && (0, K.isSameDay)(r, t.maxValue) && (e += ", " + a.format("maximumDate")), e
            }, [c, h, a, u, v, r, t, s]),
            b = "";
        "anchorDate" in t && d && !t.isReadOnly && f && (b = t.anchorDate ? a.format("finishRangeSelectionPrompt") : a.format("startRangeSelectionPrompt"));
        let m = (0, F.useDescription)(b),
            y = (0, z.useRef)(!1),
            x = (0, z.useRef)(!1),
            w = (0, z.useRef)(null),
            {
                pressProps: S,
                isPressed: k
            } = (0, V.usePress)({
                shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
                preventFocusOnPress: !0,
                isDisabled: !f || t.isReadOnly,
                onPressStart(e) {
                    if (t.isReadOnly) {
                        t.setFocusedDate(r);
                        return
                    }
                    if ("highlightedRange" in t && !t.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
                        if (t.highlightedRange && !p) {
                            if ((0, K.isSameDay)(r, t.highlightedRange.start)) {
                                t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setDragging(!0), x.current = !0;
                                return
                            }
                            if ((0, K.isSameDay)(r, t.highlightedRange.end)) {
                                t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setDragging(!0), x.current = !0;
                                return
                            }
                        }
                        let n = () => {
                            t.setDragging(!0), w.current = null, t.selectDate(r), t.setFocusedDate(r), y.current = !0
                        };
                        "touch" === e.pointerType ? w.current = setTimeout(n, 200) : n()
                    }
                },
                onPressEnd() {
                    x.current = !1, y.current = !1, clearTimeout(w.current), w.current = null
                },
                onPress() {
                    !("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r))
                },
                onPressUp(e) {
                    if (!t.isReadOnly && ("anchorDate" in t && w.current && (t.selectDate(r), t.setFocusedDate(r)), "anchorDate" in t)) {
                        if (x.current) t.setAnchorDate(r);
                        else if (t.anchorDate && !y.current) t.selectDate(r), t.setFocusedDate(r);
                        else if ("keyboard" !== e.pointerType || t.anchorDate) "virtual" === e.pointerType && (t.selectDate(r), t.setFocusedDate(r));
                        else {
                            t.selectDate(r);
                            let e = r.add({
                                days: 1
                            });
                            t.isInvalid(e) && (e = r.subtract({
                                days: 1
                            })), !t.isInvalid(e) && t.setFocusedDate(e)
                        }
                    }
                }
            }),
            E = null;
        !i && (E = (0, K.isSameDay)(r, t.focusedDate) ? 0 : -1), (0, z.useEffect)(() => {
            d && n.current && ((0, F.focusWithoutScrolling)(n.current), "pointer" !== (0, V.getInteractionModality)() && document.activeElement === n.current && (0, F.scrollIntoViewport)(n.current, {
                containingElement: (0, F.getScrollParent)(n.current)
            }))
        }, [d, n]);
        let _ = (0, B.useDateFormatter)({
                day: "numeric",
                timeZone: t.timeZone,
                calendar: r.calendar.identifier
            }),
            M = (0, z.useMemo)(() => _.formatToParts(h).find(e => "day" === e.type).value, [_, h]);
        return {
            cellProps: {
                role: "gridcell",
                "aria-disabled": !f || null,
                "aria-selected": u || null,
                "aria-invalid": p || null
            },
            buttonProps: (0, F.mergeProps)(S, {
                onFocus() {
                    !i && t.setFocusedDate(r)
                },
                tabIndex: E,
                role: "button",
                "aria-disabled": !f || null,
                "aria-label": g,
                "aria-invalid": p || null,
                "aria-describedby": [p ? o : null, m["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                onPointerEnter(e) {
                    "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && f && t.highlightDate(r)
                },
                onPointerDown(e) {
                    "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId)
                },
                onContextMenu(e) {
                    e.preventDefault()
                }
            }),
            isPressed: k,
            isFocused: d,
            isSelected: u,
            isDisabled: i,
            isUnavailable: l,
            isOutsideVisibleRange: 0 > r.compare(t.visibleRange.start) || r.compare(t.visibleRange.end) > 0,
            isInvalid: p,
            formattedDate: M
        }
    }
}