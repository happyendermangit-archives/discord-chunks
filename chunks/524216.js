function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDateField: function() {
            return ee
        },
        useDatePicker: function() {
            return en
        },
        useDateRangePicker: function() {
            return ea
        },
        useDateSegment: function() {
            return ei
        },
        useTimeField: function() {
            return et
        }
    });
    var r = n("350906"),
        i = n("543011"),
        a = n("34984"),
        o = n("390923"),
        s = n("106341"),
        u = n("713948"),
        c = n("939699"),
        l = n("244561"),
        d = n("312489"),
        f = n("135152"),
        p = n("676361"),
        h = n("189734"),
        m = n("664585"),
        g = n("503432"),
        _ = n("918157"),
        b = n("942489"),
        v = n("674559"),
        y = n("685085"),
        E = n("654410"),
        S = n("400300"),
        x = n("471876"),
        w = n("154744"),
        T = n("448575"),
        C = n("17995"),
        D = n("147964"),
        O = n("575750"),
        M = n("285065"),
        A = n("327270"),
        k = n("323339"),
        R = n("69195"),
        N = n("238633"),
        I = n("250720"),
        L = n("941842"),
        P = n("930594"),
        F = n("706682"),
        B = n("182823"),
        U = n("201284"),
        Y = n("470079"),
        j = n("251433"),
        z = n("612001"),
        H = n("602607"),
        G = n("705782"),
        V = n("387103"),
        $ = n("881085"),
        W = n("982631");

    function K(e) {
        return e && e.__esModule ? e.default : e
    }
    var q = {};

    function Q(e, t, n) {
        let {
            direction: r
        } = (0, H.useLocale)(), i = (0, Y.useMemo)(() => (0, F.createFocusManager)(t), [t]), a = () => {
            var e;
            let n = null === (e = window.event) || void 0 === e ? void 0 : e.target,
                r = (0, F.getFocusableTreeWalker)(t.current, {
                    tabbable: !0
                });
            if (n && (r.currentNode = n, n = r.previousNode()), !n) {
                let e;
                do(e = r.lastChild()) && (n = e); while (e)
            }
            for (; null == n ? void 0 : n.hasAttribute("data-placeholder");) {
                let e = r.previousNode();
                if (e && e.hasAttribute("data-placeholder")) n = e;
                else break
            }
            n && n.focus()
        }, {
            pressProps: o
        } = (0, z.usePress)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                "mouse" === e.pointerType && a()
            },
            onPress(e) {
                "mouse" !== e.pointerType && a()
            }
        });
        return (0, B.mergeProps)(o, {
            onKeyDown: t => {
                if (!!t.currentTarget.contains(t.target)) {
                    if (t.altKey && ("ArrowDown" === t.key || "ArrowUp" === t.key) && "setOpen" in e && (t.preventDefault(), t.stopPropagation(), e.setOpen(!0)), !n) switch (t.key) {
                        case "ArrowLeft":
                            t.preventDefault(), t.stopPropagation(), "rtl" === r ? i.focusNext() : i.focusPrevious();
                            break;
                        case "ArrowRight":
                            t.preventDefault(), t.stopPropagation(), "rtl" === r ? i.focusPrevious() : i.focusNext()
                    }
                }
            }
        })
    }
    q = {
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
    let Z = new WeakMap,
        X = "__role_" + Date.now(),
        J = "__focusManager_" + Date.now();

    function ee(e, t, n) {
        var r;
        let i;
        let {
            isInvalid: a,
            validationErrors: o,
            validationDetails: s
        } = t.displayValidation, {
            labelProps: u,
            fieldProps: c,
            descriptionProps: l,
            errorMessageProps: d
        } = (0, j.useField)({
            ...e,
            labelElementType: "span",
            isInvalid: a,
            errorMessage: e.errorMessage || o
        }), f = (0, Y.useRef)(null), {
            focusWithinProps: p
        } = (0, z.useFocusWithin)({
            ...e,
            onFocusWithin(n) {
                var r;
                f.current = t.value, null === (r = e.onFocus) || void 0 === r || r.call(e, n)
            },
            onBlurWithin: n => {
                var r;
                t.confirmPlaceholder(), t.value !== f.current && t.commitValidation(), null === (r = e.onBlur) || void 0 === r || r.call(e, n)
            },
            onFocusWithinChange: e.onFocusChange
        }), h = (0, H.useLocalizedStringFormatter)(K(q), "@react-aria/datepicker"), m = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription", g = "hour" === t.maxGranularity ? "time" : "date", _ = t.value ? h.format(m, {
            [g]: t.formatValue({
                month: "long"
            })
        }) : "", b = (0, B.useDescription)(_), v = "presentation" === e[X] ? c["aria-describedby"] : [b["aria-describedby"], c["aria-describedby"]].filter(Boolean).join(" ") || void 0, y = e[J], E = (0, Y.useMemo)(() => y || (0, F.createFocusManager)(n), [y, n]), S = Q(t, n, "presentation" === e[X]);
        Z.set(t, {
            ariaLabel: e["aria-label"],
            ariaLabelledBy: [u.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
            ariaDescribedBy: v,
            focusManager: E
        });
        let x = (0, Y.useRef)(e.autoFocus);
        i = "presentation" === e[X] ? {
            role: "presentation"
        } : (0, B.mergeProps)(c, {
            role: "group",
            "aria-disabled": e.isDisabled || void 0,
            "aria-describedby": v
        }), (0, Y.useEffect)(() => {
            x.current && E.focusFirst(), x.current = !1
        }, [E]), (0, B.useFormReset)(e.inputRef, t.value, t.setValue), (0, G.useFormValidation)({
            ...e,
            focus() {
                E.focusFirst()
            }
        }, t, e.inputRef);
        let w = {
            type: "hidden",
            name: e.name,
            value: (null === (r = t.value) || void 0 === r ? void 0 : r.toString()) || ""
        };
        "native" === e.validationBehavior && (w.type = "text", w.hidden = !0, w.required = e.isRequired, w.onChange = () => {});
        let T = (0, B.filterDOMProps)(e);
        return {
            labelProps: {
                ...u,
                onClick: () => {
                    E.focusFirst()
                }
            },
            fieldProps: (0, B.mergeProps)(T, i, S, p, {
                onKeyDown(t) {
                    e.onKeyDown && e.onKeyDown(t)
                },
                onKeyUp(t) {
                    e.onKeyUp && e.onKeyUp(t)
                }
            }),
            inputProps: w,
            descriptionProps: l,
            errorMessageProps: d,
            isInvalid: a,
            validationErrors: o,
            validationDetails: s
        }
    }

    function et(e, t, n) {
        var r;
        let i = ee(e, t, n);
        return i.inputProps.value = (null === (r = t.timeValue) || void 0 === r ? void 0 : r.toString()) || "", i
    }

    function en(e, t, n) {
        let r = (0, B.useId)(),
            i = (0, B.useId)(),
            a = (0, B.useId)(),
            o = (0, H.useLocalizedStringFormatter)(K(q), "@react-aria/datepicker"),
            {
                isInvalid: s,
                validationErrors: u,
                validationDetails: c
            } = t.displayValidation,
            {
                labelProps: l,
                fieldProps: d,
                descriptionProps: f,
                errorMessageProps: p
            } = (0, j.useField)({
                ...e,
                labelElementType: "span",
                isInvalid: s,
                errorMessage: e.errorMessage || u
            }),
            h = Q(t, n),
            m = d["aria-labelledby"] || d.id,
            {
                locale: g
            } = (0, H.useLocale)(),
            _ = t.formatValue(g, {
                month: "long"
            }),
            b = _ ? o.format("selectedDateDescription", {
                date: _
            }) : "",
            v = (0, B.useDescription)(b),
            y = [v["aria-describedby"], d["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            E = (0, B.filterDOMProps)(e),
            S = (0, Y.useMemo)(() => (0, F.createFocusManager)(n), [n]),
            {
                focusWithinProps: x
            } = (0, z.useFocusWithin)({
                ...e,
                isDisabled: t.isOpen,
                onBlurWithin: e.onBlur,
                onFocusWithin: e.onFocus,
                onFocusWithinChange: e.onFocusChange
            });
        return {
            groupProps: (0, B.mergeProps)(E, h, d, v, x, {
                role: "group",
                "aria-disabled": e.isDisabled || null,
                "aria-labelledby": m,
                "aria-describedby": y,
                onKeyDown(n) {
                    !t.isOpen && e.onKeyDown && e.onKeyDown(n)
                },
                onKeyUp(n) {
                    !t.isOpen && e.onKeyUp && e.onKeyUp(n)
                }
            }),
            labelProps: {
                ...l,
                onClick: () => {
                    S.focusFirst()
                }
            },
            fieldProps: {
                ...d,
                id: a,
                [X]: "presentation",
                "aria-describedby": y,
                value: t.value,
                onChange: t.setValue,
                placeholderValue: e.placeholderValue,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                granularity: e.granularity,
                isDisabled: e.isDisabled,
                isReadOnly: e.isReadOnly,
                isRequired: e.isRequired,
                validationBehavior: e.validationBehavior,
                [U.privateValidationStateProp]: t,
                autoFocus: e.autoFocus,
                name: e.name
            },
            descriptionProps: f,
            errorMessageProps: p,
            buttonProps: {
                ...v,
                id: r,
                "aria-haspopup": "dialog",
                "aria-label": o.format("calendar"),
                "aria-labelledby": `${r} ${m}`,
                "aria-describedby": y,
                "aria-expanded": t.isOpen,
                isDisabled: e.isDisabled || e.isReadOnly,
                onPress: () => t.setOpen(!0)
            },
            dialogProps: {
                id: i,
                "aria-labelledby": `${r} ${m}`
            },
            calendarProps: {
                autoFocus: !0,
                value: t.dateValue,
                onChange: t.setDateValue,
                minValue: e.minValue,
                maxValue: e.maxValue,
                isDisabled: e.isDisabled,
                isReadOnly: e.isReadOnly,
                isDateUnavailable: e.isDateUnavailable,
                defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
                isInvalid: t.isInvalid,
                errorMessage: "function" == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" ")
            },
            isInvalid: s,
            validationErrors: u,
            validationDetails: c
        }
    }
    class er {
        of(e) {
            return this.dictionary.getStringForLocale(e, this.locale)
        }
        constructor(e, t) {
            this.locale = e, this.dictionary = t
        }
    }

    function ei(e, t, n) {
        let r = (0, Y.useRef)(""),
            {
                locale: i
            } = (0, H.useLocale)(),
            a = function() {
                let {
                    locale: e
                } = (0, H.useLocale)(), t = (0, H.useLocalizedStringDictionary)(K(q), "@react-aria/datepicker");
                return (0, Y.useMemo)(() => {
                    try {
                        return new Intl.DisplayNames(e, {
                            type: "dateTimeField"
                        })
                    } catch (n) {
                        return new er(e, t)
                    }
                }, [e, t])
            }(),
            {
                ariaLabel: o,
                ariaLabelledBy: s,
                ariaDescribedBy: u,
                focusManager: c
            } = Z.get(t),
            l = e.isPlaceholder ? "" : e.text,
            d = (0, Y.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
            f = (0, H.useDateFormatter)({
                month: "long",
                timeZone: d.timeZone
            }),
            p = (0, H.useDateFormatter)({
                hour: "numeric",
                hour12: d.hour12,
                timeZone: d.timeZone
            });
        if ("month" !== e.type || e.isPlaceholder) "hour" === e.type && !e.isPlaceholder && (l = p.format(t.dateValue));
        else {
            let e = f.format(t.dateValue);
            l = e !== l ? `${l} \u{2013} ${e}` : e
        }
        let {
            spinButtonProps: h
        } = (0, W.useSpinButton)({
            value: e.value,
            textValue: l,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: t.isDisabled,
            isReadOnly: t.isReadOnly || !e.isEditable,
            isRequired: t.isRequired,
            onIncrement: () => {
                r.current = "", t.increment(e.type)
            },
            onDecrement: () => {
                r.current = "", t.decrement(e.type)
            },
            onIncrementPage: () => {
                r.current = "", t.incrementPage(e.type)
            },
            onDecrementPage: () => {
                r.current = "", t.decrementPage(e.type)
            },
            onIncrementToMax: () => {
                r.current = "", t.setSegment(e.type, e.maxValue)
            },
            onDecrementToMin: () => {
                r.current = "", t.setSegment(e.type, e.minValue)
            }
        }), m = (0, Y.useMemo)(() => new $.NumberParser(i, {
            maximumFractionDigits: 0
        }), [i]), g = () => {
            if (!m.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) "dayPeriod" === e.type && t.clearSegment(e.type);
            else {
                let n = e.text.slice(0, -1),
                    i = m.parse(n);
                0 === n.length || 0 === i ? t.clearSegment(e.type) : t.setSegment(e.type, i), r.current = n
            }
        }, {
            startsWith: _
        } = (0, H.useFilter)({
            sensitivity: "base"
        }), b = (0, H.useDateFormatter)({
            hour: "numeric",
            hour12: !0
        }), v = (0, Y.useMemo)(() => {
            let e = new Date;
            return e.setHours(0), b.formatToParts(e).find(e => "dayPeriod" === e.type).value
        }, [b]), y = (0, Y.useMemo)(() => {
            let e = new Date;
            return e.setHours(12), b.formatToParts(e).find(e => "dayPeriod" === e.type).value
        }, [b]), E = (0, H.useDateFormatter)({
            year: "numeric",
            era: "narrow",
            timeZone: "UTC"
        }), S = (0, Y.useMemo)(() => {
            if ("era" !== e.type) return [];
            let n = (0, V.toCalendar)(new V.CalendarDate(1, 1, 1), t.calendar),
                r = t.calendar.getEras().map(e => {
                    let t = n.set({
                        year: 1,
                        month: 1,
                        day: 1,
                        era: e
                    }).toDate("UTC");
                    return {
                        era: e,
                        formatted: E.formatToParts(t).find(e => "era" === e.type).value
                    }
                }),
                i = function(e) {
                    e.sort();
                    let t = e[0],
                        n = e[e.length - 1];
                    for (let e = 0; e < t.length; e++)
                        if (t[e] !== n[e]) return e;
                    return 0
                }(r.map(e => e.formatted));
            if (i)
                for (let e of r) e.formatted = e.formatted.slice(i);
            return r
        }, [E, t.calendar, e.type]), x = n => {
            if (t.isDisabled || t.isReadOnly) return;
            let i = r.current + n;
            switch (e.type) {
                case "dayPeriod":
                    if (_(v, n)) t.setSegment("dayPeriod", 0);
                    else if (_(y, n)) t.setSegment("dayPeriod", 12);
                    else break;
                    c.focusNext();
                    break;
                case "era": {
                    let e = S.find(e => _(e.formatted, n));
                    e && (t.setSegment("era", e.era), c.focusNext());
                    break
                }
                case "day":
                case "hour":
                case "minute":
                case "second":
                case "month":
                case "year": {
                    if (!m.isValidPartialNumber(i)) return;
                    let a = m.parse(i),
                        o = a,
                        s = 0 === e.minValue;
                    if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
                        switch (t.dateFormatter.resolvedOptions().hourCycle) {
                            case "h11":
                                a > 11 && (o = m.parse(n));
                                break;
                            case "h12":
                                s = !1, a > 12 && (o = m.parse(n))
                        }
                        e.value >= 12 && a > 1 && (a += 12)
                    } else a > e.maxValue && (o = m.parse(n));
                    if (isNaN(a)) return;
                    let u = 0 !== o || s;
                    u && t.setSegment(e.type, o), Number(a + "0") > e.maxValue || i.length >= String(e.maxValue).length ? (r.current = "", u && c.focusNext()) : r.current = i
                }
            }
        }, w = (0, Y.useRef)("");
        (0, B.useEvent)(n, "beforeinput", r => {
            switch (r.preventDefault(), r.inputType) {
                case "deleteContentBackward":
                case "deleteContentForward":
                    m.isValidPartialNumber(e.text) && !t.isReadOnly && g();
                    break;
                case "insertCompositionText":
                    w.current = n.current.textContent, n.current.textContent = n.current.textContent;
                    break;
                default:
                    null != r.data && x(r.data)
            }
        }), (0, B.useEvent)(n, "input", e => {
            let {
                inputType: t,
                data: r
            } = e;
            if ("insertCompositionText" === t) n.current.textContent = w.current, (_(v, r) || _(y, r)) && x(r)
        }), (0, B.useLayoutEffect)(() => {
            let e = n.current;
            return () => {
                document.activeElement === e && !c.focusPrevious() && c.focusNext()
            }
        }, [n, c]);
        let T = (0, B.isIOS)() || "timeZoneName" === e.type ? {
            role: "textbox",
            "aria-valuemax": null,
            "aria-valuemin": null,
            "aria-valuetext": null,
            "aria-valuenow": null
        } : {};
        e !== (0, Y.useMemo)(() => t.segments.find(e => e.isEditable), [t.segments]) && !t.isInvalid && (u = void 0);
        let C = (0, B.useId)(),
            D = !t.isDisabled && !t.isReadOnly && e.isEditable,
            O = "literal" === e.type ? "" : a.of(e.type),
            M = (0, B.useLabels)({
                "aria-label": `${O}${o?`, ${o}`:""}${s?", ":""}`,
                "aria-labelledby": s
            });
        return "literal" === e.type ? {
            segmentProps: {
                "aria-hidden": !0
            }
        } : {
            segmentProps: (0, B.mergeProps)(h, M, {
                id: C,
                ...T,
                "aria-invalid": t.isInvalid ? "true" : void 0,
                "aria-describedby": u,
                "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
                "data-placeholder": e.isPlaceholder || void 0,
                contentEditable: D,
                suppressContentEditableWarning: D,
                spellCheck: D ? "false" : void 0,
                autoCapitalize: D ? "off" : void 0,
                autoCorrect: D ? "off" : void 0,
                [parseInt(Y.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: D ? "next" : void 0,
                inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !D ? void 0 : "numeric",
                tabIndex: t.isDisabled ? void 0 : 0,
                onKeyDown: e => {
                    if ("a" === e.key && ((0, B.isMac)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) switch (e.key) {
                        case "Backspace":
                        case "Delete":
                            e.preventDefault(), e.stopPropagation(), g()
                    }
                },
                onFocus: () => {
                    r.current = "", (0, B.scrollIntoViewport)(n.current, {
                        containingElement: (0, B.getScrollParent)(n.current)
                    }), window.getSelection().collapse(n.current)
                },
                style: {
                    caretColor: "transparent"
                },
                onPointerDown(e) {
                    e.stopPropagation()
                },
                onMouseDown(e) {
                    e.stopPropagation()
                }
            })
        }
    }

    function ea(e, t, n) {
        var r, i;
        let a = (0, H.useLocalizedStringFormatter)(K(q), "@react-aria/datepicker"),
            {
                isInvalid: o,
                validationErrors: s,
                validationDetails: u
            } = t.displayValidation,
            {
                labelProps: c,
                fieldProps: l,
                descriptionProps: d,
                errorMessageProps: f
            } = (0, j.useField)({
                ...e,
                labelElementType: "span",
                isInvalid: o,
                errorMessage: e.errorMessage || s
            }),
            p = l["aria-labelledby"] || l.id,
            {
                locale: h
            } = (0, H.useLocale)(),
            m = t.formatValue(h, {
                month: "long"
            }),
            g = m ? a.format("selectedRangeDescription", {
                startDate: m.start,
                endDate: m.end
            }) : "",
            _ = (0, B.useDescription)(g),
            b = {
                "aria-label": a.format("startDate"),
                "aria-labelledby": p
            },
            v = {
                "aria-label": a.format("endDate"),
                "aria-labelledby": p
            },
            y = (0, B.useId)(),
            E = (0, B.useId)(),
            S = Q(t, n),
            x = [_["aria-describedby"], l["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            w = (0, Y.useMemo)(() => (0, F.createFocusManager)(n, {
                accept: e => e.id !== y
            }), [n, y]),
            T = {
                [J]: w,
                [X]: "presentation",
                "aria-describedby": x,
                placeholderValue: e.placeholderValue,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                granularity: e.granularity,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                isDisabled: e.isDisabled,
                isReadOnly: e.isReadOnly,
                isRequired: e.isRequired,
                validationBehavior: e.validationBehavior
            },
            C = (0, B.filterDOMProps)(e),
            {
                focusWithinProps: D
            } = (0, z.useFocusWithin)({
                ...e,
                isDisabled: t.isOpen,
                onBlurWithin: e.onBlur,
                onFocusWithin: e.onFocus,
                onFocusWithinChange: e.onFocusChange
            }),
            O = (0, Y.useRef)(U.DEFAULT_VALIDATION_RESULT),
            M = (0, Y.useRef)(U.DEFAULT_VALIDATION_RESULT);
        return {
            groupProps: (0, B.mergeProps)(C, S, l, _, D, {
                role: "group",
                "aria-disabled": e.isDisabled || null,
                "aria-describedby": x,
                onKeyDown(n) {
                    !t.isOpen && e.onKeyDown && e.onKeyDown(n)
                },
                onKeyUp(n) {
                    !t.isOpen && e.onKeyUp && e.onKeyUp(n)
                }
            }),
            labelProps: {
                ...c,
                onClick: () => {
                    w.focusFirst()
                }
            },
            buttonProps: {
                ..._,
                id: y,
                "aria-haspopup": "dialog",
                "aria-label": a.format("calendar"),
                "aria-labelledby": `${y} ${p}`,
                "aria-describedby": x,
                "aria-expanded": t.isOpen,
                isDisabled: e.isDisabled || e.isReadOnly,
                onPress: () => t.setOpen(!0)
            },
            dialogProps: {
                id: E,
                "aria-labelledby": `${y} ${p}`
            },
            startFieldProps: {
                ...b,
                ...T,
                value: null === (r = t.value) || void 0 === r ? void 0 : r.start,
                onChange: e => t.setDateTime("start", e),
                autoFocus: e.autoFocus,
                name: e.startName,
                [U.privateValidationStateProp]: {
                    realtimeValidation: t.realtimeValidation,
                    displayValidation: t.displayValidation,
                    updateValidation(e) {
                        O.current = e, t.updateValidation((0, U.mergeValidation)(e, M.current))
                    },
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation
                }
            },
            endFieldProps: {
                ...v,
                ...T,
                value: null === (i = t.value) || void 0 === i ? void 0 : i.end,
                onChange: e => t.setDateTime("end", e),
                name: e.endName,
                [U.privateValidationStateProp]: {
                    realtimeValidation: t.realtimeValidation,
                    displayValidation: t.displayValidation,
                    updateValidation(e) {
                        M.current = e, t.updateValidation((0, U.mergeValidation)(O.current, e))
                    },
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation
                }
            },
            descriptionProps: d,
            errorMessageProps: f,
            calendarProps: {
                autoFocus: !0,
                value: t.dateRange,
                onChange: t.setDateRange,
                minValue: e.minValue,
                maxValue: e.maxValue,
                isDisabled: e.isDisabled,
                isReadOnly: e.isReadOnly,
                isDateUnavailable: e.isDateUnavailable,
                allowsNonContiguousRanges: e.allowsNonContiguousRanges,
                defaultFocusedValue: t.dateRange ? void 0 : e.placeholderValue,
                isInvalid: t.isInvalid,
                errorMessage: "function" == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" ")
            },
            isInvalid: o,
            validationErrors: s,
            validationDetails: u
        }
    }
}