function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCalendar: function() {
            return Q
        },
        useCalendarCell: function() {
            return J
        },
        useCalendarGrid: function() {
            return X
        },
        useRangeCalendar: function() {
            return Z
        }
    });
    var r = n("594438"),
        i = n("314559"),
        a = n("647635"),
        o = n("282902"),
        s = n("817256"),
        u = n("84631"),
        c = n("286287"),
        l = n("62356"),
        d = n("277298"),
        f = n("415978"),
        p = n("327478"),
        h = n("509689"),
        m = n("222067"),
        g = n("853296"),
        _ = n("988875"),
        b = n("150774"),
        v = n("813727"),
        y = n("597792"),
        E = n("687845"),
        S = n("267858"),
        x = n("543093"),
        w = n("807579"),
        T = n("658054"),
        C = n("243351"),
        D = n("402573"),
        O = n("250358"),
        M = n("428961"),
        A = n("904374"),
        k = n("203747"),
        R = n("732097"),
        N = n("14845"),
        I = n("750897"),
        L = n("229314"),
        P = n("62774"),
        F = n("770003"),
        B = n("182823"),
        U = n("602607"),
        Y = n("470079"),
        j = n("387103"),
        z = n("612001");

    function H(e) {
        return e && e.__esModule ? e.default : e
    }
    var G = {};
    G = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": a.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": u.default,
        "en-US": c.default,
        "es-ES": l.default,
        "et-EE": d.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": m.default,
        "hu-HU": g.default,
        "it-IT": _.default,
        "ja-JP": b.default,
        "ko-KR": v.default,
        "lt-LT": y.default,
        "lv-LV": E.default,
        "nb-NO": S.default,
        "nl-NL": x.default,
        "pl-PL": w.default,
        "pt-BR": T.default,
        "pt-PT": C.default,
        "ro-RO": D.default,
        "ru-RU": O.default,
        "sk-SK": M.default,
        "sl-SI": A.default,
        "sr-SP": k.default,
        "sv-SE": R.default,
        "tr-TR": N.default,
        "uk-UA": I.default,
        "zh-CN": L.default,
        "zh-TW": P.default
    };
    let V = new WeakMap;

    function $(e) {
        return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0
    }

    function W(e, t, n, r) {
        let i = (0, U.useLocalizedStringFormatter)(H(G), "@react-aria/calendar"),
            a = $(e) || $(t),
            o = (0, U.useDateFormatter)({
                month: "long",
                year: "numeric",
                era: a,
                calendar: e.calendar.identifier,
                timeZone: n
            }),
            s = (0, U.useDateFormatter)({
                month: "long",
                year: "numeric",
                day: "numeric",
                era: a,
                calendar: e.calendar.identifier,
                timeZone: n
            });
        return (0, Y.useMemo)(() => {
            if ((0, j.isSameDay)(e, (0, j.startOfMonth)(e))) {
                if ((0, j.isSameDay)(t, (0, j.endOfMonth)(e))) return o.format(e.toDate(n));
                if ((0, j.isSameDay)(t, (0, j.endOfMonth)(t))) return r ? K(o, i, e, t, n) : o.formatRange(e.toDate(n), t.toDate(n))
            }
            return r ? K(s, i, e, t, n) : s.formatRange(e.toDate(n), t.toDate(n))
        }, [e, t, o, s, i, n, r])
    }

    function K(e, t, n, r, i) {
        let a = e.formatRangeToParts(n.toDate(i), r.toDate(i)),
            o = -1;
        for (let e = 0; e < a.length; e++) {
            let t = a[e];
            if ("shared" === t.source && "literal" === t.type) o = e;
            else if ("endRange" === t.source) break
        }
        let s = "",
            u = "";
        for (let e = 0; e < a.length; e++) e < o ? s += a[e].value : e > o && (u += a[e].value);
        return t.format("dateRange", {
            startDate: s,
            endDate: u
        })
    }

    function q(e, t) {
        var n;
        let r, i, a, o, s, u = (0, U.useLocalizedStringFormatter)(H(G), "@react-aria/calendar"),
            c = (0, B.filterDOMProps)(e),
            l = W(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
            d = W(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
        (0, B.useUpdateEffect)(() => {
            !t.isFocused && (0, F.announce)(d)
        }, [d]);
        let f = (n = t, a = (0, U.useLocalizedStringFormatter)(H(G), "@react-aria/calendar"), "highlightedRange" in n ? {
            start: r,
            end: i
        } = n.highlightedRange || {} : r = i = n.value, o = (0, U.useDateFormatter)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: $(r) || $(i),
            timeZone: n.timeZone
        }), s = "anchorDate" in n ? n.anchorDate : null, (0, Y.useMemo)(() => {
            if (!s && r && i) {
                if ((0, j.isSameDay)(r, i)) {
                    let e = o.format(r.toDate(n.timeZone));
                    return a.format("selectedDateDescription", {
                        date: e
                    })
                } {
                    let e = K(o, a, r, i, n.timeZone);
                    return a.format("selectedRangeDescription", {
                        dateRange: e
                    })
                }
            }
            return ""
        }, [r, i, s, n.timeZone, a, o]));
        (0, B.useUpdateEffect)(() => {
            f && (0, F.announce)(f, "polite", 4e3)
        }, [f]);
        let p = (0, B.useSlotId)([!!e.errorMessage, e.isInvalid, e.validationState]);
        V.set(t, {
            ariaLabel: e["aria-label"],
            ariaLabelledBy: e["aria-labelledby"],
            errorMessageId: p,
            selectedDateDescription: f
        });
        let [h, m] = (0, Y.useState)(!1), g = e.isDisabled || t.isNextVisibleRangeInvalid();
        g && h && (m(!1), t.setFocused(!0));
        let [_, b] = (0, Y.useState)(!1), v = e.isDisabled || t.isPreviousVisibleRangeInvalid();
        v && _ && (b(!1), t.setFocused(!0));
        let y = (0, B.useLabels)({
            id: e.id,
            "aria-label": [e["aria-label"], d].filter(Boolean).join(", "),
            "aria-labelledby": e["aria-labelledby"]
        });
        return {
            calendarProps: (0, B.mergeProps)(c, y, {
                role: "application",
                "aria-describedby": e["aria-describedby"] || void 0
            }),
            nextButtonProps: {
                onPress: () => t.focusNextPage(),
                "aria-label": u.format("next"),
                isDisabled: g,
                onFocusChange: m
            },
            prevButtonProps: {
                onPress: () => t.focusPreviousPage(),
                "aria-label": u.format("previous"),
                isDisabled: v,
                onFocusChange: b
            },
            errorMessageProps: {
                id: p
            },
            title: l
        }
    }

    function Q(e, t) {
        return q(e, t)
    }

    function Z(e, t, n) {
        let r = q(e, t),
            i = (0, Y.useRef)(!1),
            a = (0, Y.useRef)("undefined" != typeof window ? window : null);
        (0, B.useEvent)(a, "pointerdown", e => {
            i.current = 0 === e.width && 0 === e.height
        });
        let o = e => {
            if (i.current) {
                i.current = !1;
                return
            }
            if (t.setDragging(!1), !t.anchorDate) return;
            let n = e.target,
                a = document.getElementById(r.calendarProps.id);
            a && a.contains(document.activeElement) && (!a.contains(n) || !n.closest('button, [role="button"]')) && t.selectFocusedDate()
        };
        return (0, B.useEvent)(a, "pointerup", o), (0, B.useEvent)(a, "pointercancel", o), r.calendarProps.onBlur = e => {
            (!e.relatedTarget || !n.current.contains(e.relatedTarget)) && t.anchorDate && t.selectFocusedDate()
        }, (0, B.useEvent)(n, "touchmove", e => {
            t.isDragging && e.preventDefault()
        }, {
            passive: !1,
            capture: !0
        }), r
    }

    function X(e, t) {
        let {
            startDate: n = t.visibleRange.start,
            endDate: r = t.visibleRange.end
        } = e, {
            direction: i
        } = (0, U.useLocale)(), a = W(n, r, t.timeZone, !0), {
            ariaLabel: o,
            ariaLabelledBy: s
        } = V.get(t), u = (0, B.useLabels)({
            "aria-label": [o, a].filter(Boolean).join(", "),
            "aria-labelledby": s
        }), c = (0, U.useDateFormatter)({
            weekday: e.weekdayStyle || "narrow",
            timeZone: t.timeZone
        }), {
            locale: l
        } = (0, U.useLocale)(), d = (0, Y.useMemo)(() => {
            let e = (0, j.startOfWeek)((0, j.today)(t.timeZone), l);
            return [...Array(7).keys()].map(n => {
                let r = e.add({
                    days: n
                }).toDate(t.timeZone);
                return c.format(r)
            })
        }, [l, t.timeZone, c]);
        return {
            gridProps: (0, B.mergeProps)(u, {
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
            weekDays: d
        }
    }

    function J(e, t, n) {
        let {
            date: r,
            isDisabled: i
        } = e, {
            errorMessageId: a,
            selectedDateDescription: o
        } = V.get(t), s = (0, U.useLocalizedStringFormatter)(H(G), "@react-aria/calendar"), u = (0, U.useDateFormatter)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: $(r),
            timeZone: t.timeZone
        }), c = t.isSelected(r), l = t.isCellFocused(r);
        i = i || t.isCellDisabled(r);
        let d = t.isCellUnavailable(r),
            f = !i && !d,
            p = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && r.compare(t.highlightedRange.start) >= 0 && 0 >= r.compare(t.highlightedRange.end) : t.value && (0, j.isSameDay)(t.value, r));
        p && (c = !0), r = (0, B.useDeepMemo)(r, j.isEqualDay);
        let h = (0, Y.useMemo)(() => r.toDate(t.timeZone), [r, t.timeZone]),
            m = (0, j.isToday)(r, t.timeZone),
            g = (0, Y.useMemo)(() => {
                let e = "";
                return "highlightedRange" in t && t.value && !t.anchorDate && ((0, j.isSameDay)(r, t.value.start) || (0, j.isSameDay)(r, t.value.end)) && (e = o + ", "), e += u.format(h), m ? e = s.format(c ? "todayDateSelected" : "todayDate", {
                    date: e
                }) : c && (e = s.format("dateSelected", {
                    date: e
                })), t.minValue && (0, j.isSameDay)(r, t.minValue) ? e += ", " + s.format("minimumDate") : t.maxValue && (0, j.isSameDay)(r, t.maxValue) && (e += ", " + s.format("maximumDate")), e
            }, [u, h, s, c, m, r, t, o]),
            _ = "";
        "anchorDate" in t && l && !t.isReadOnly && f && (_ = t.anchorDate ? s.format("finishRangeSelectionPrompt") : s.format("startRangeSelectionPrompt"));
        let b = (0, B.useDescription)(_),
            v = (0, Y.useRef)(!1),
            y = (0, Y.useRef)(!1),
            E = (0, Y.useRef)(null),
            {
                pressProps: S,
                isPressed: x
            } = (0, z.usePress)({
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
                            if ((0, j.isSameDay)(r, t.highlightedRange.start)) {
                                t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setDragging(!0), y.current = !0;
                                return
                            }
                            if ((0, j.isSameDay)(r, t.highlightedRange.end)) {
                                t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setDragging(!0), y.current = !0;
                                return
                            }
                        }
                        let n = () => {
                            t.setDragging(!0), E.current = null, t.selectDate(r), t.setFocusedDate(r), v.current = !0
                        };
                        "touch" === e.pointerType ? E.current = setTimeout(n, 200) : n()
                    }
                },
                onPressEnd() {
                    y.current = !1, v.current = !1, clearTimeout(E.current), E.current = null
                },
                onPress() {
                    !("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r))
                },
                onPressUp(e) {
                    if (!t.isReadOnly && ("anchorDate" in t && E.current && (t.selectDate(r), t.setFocusedDate(r)), "anchorDate" in t)) {
                        if (y.current) t.setAnchorDate(r);
                        else if (t.anchorDate && !v.current) t.selectDate(r), t.setFocusedDate(r);
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
            w = null;
        !i && (w = (0, j.isSameDay)(r, t.focusedDate) ? 0 : -1), (0, Y.useEffect)(() => {
            l && n.current && ((0, B.focusWithoutScrolling)(n.current), "pointer" !== (0, z.getInteractionModality)() && document.activeElement === n.current && (0, B.scrollIntoViewport)(n.current, {
                containingElement: (0, B.getScrollParent)(n.current)
            }))
        }, [l, n]);
        let T = (0, U.useDateFormatter)({
                day: "numeric",
                timeZone: t.timeZone,
                calendar: r.calendar.identifier
            }),
            C = (0, Y.useMemo)(() => T.formatToParts(h).find(e => "day" === e.type).value, [T, h]);
        return {
            cellProps: {
                role: "gridcell",
                "aria-disabled": !f || null,
                "aria-selected": c || null,
                "aria-invalid": p || null
            },
            buttonProps: (0, B.mergeProps)(S, {
                onFocus() {
                    !i && t.setFocusedDate(r)
                },
                tabIndex: w,
                role: "button",
                "aria-disabled": !f || null,
                "aria-label": g,
                "aria-invalid": p || null,
                "aria-describedby": [p ? a : null, b["aria-describedby"]].filter(Boolean).join(" ") || void 0,
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
            isPressed: x,
            isFocused: l,
            isSelected: c,
            isDisabled: i,
            isUnavailable: d,
            isOutsideVisibleRange: 0 > r.compare(t.visibleRange.start) || r.compare(t.visibleRange.end) > 0,
            isInvalid: p,
            formattedDate: C
        }
    }
}