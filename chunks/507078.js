function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDatePicker: function() {
            return en
        },
        useDateSegment: function() {
            return ei
        },
        useDateField: function() {
            return ee
        },
        useTimeField: function() {
            return et
        },
        useDateRangePicker: function() {
            return eo
        }
    }), n("222007");
    var r = n("572825"),
        i = n("456479"),
        o = n("614857"),
        s = n("795649"),
        a = n("630658"),
        c = n("81765"),
        u = n("538821"),
        d = n("562166"),
        l = n("267212"),
        f = n("696951"),
        p = n("98168"),
        h = n("266477"),
        v = n("339798"),
        g = n("443161"),
        b = n("919807"),
        m = n("611111"),
        y = n("79489"),
        x = n("232932"),
        w = n("582210"),
        S = n("937881"),
        k = n("476139"),
        E = n("945184"),
        _ = n("836692"),
        M = n("244917"),
        D = n("876405"),
        C = n("482983"),
        P = n("712769"),
        T = n("153264"),
        A = n("4081"),
        R = n("507827"),
        I = n("964759"),
        O = n("182468"),
        L = n("367710"),
        j = n("340606"),
        N = n("447259"),
        F = n("240849"),
        B = n("444324"),
        z = n("884691"),
        K = n("113581"),
        V = n("388032"),
        U = n("564341"),
        H = n("759840"),
        q = n("24899"),
        G = n("546262"),
        W = n("277184");

    function Z(e) {
        return e && e.__esModule ? e.default : e
    }
    var Y = {};

    function X(e, t, n) {
        let {
            direction: r
        } = (0, U.useLocale)(), i = (0, z.useMemo)(() => (0, N.createFocusManager)(t), [t]), o = () => {
            var e;
            let n = null === (e = window.event) || void 0 === e ? void 0 : e.target,
                r = (0, N.getFocusableTreeWalker)(t.current, {
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
            pressProps: s
        } = (0, V.usePress)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                "mouse" === e.pointerType && o()
            },
            onPress(e) {
                "mouse" !== e.pointerType && o()
            }
        });
        return (0, F.mergeProps)(s, {
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
    Y = {
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
    let J = new WeakMap,
        $ = "__role_" + Date.now(),
        Q = "__focusManager_" + Date.now();

    function ee(e, t, n) {
        var r;
        let i;
        let {
            isInvalid: o,
            validationErrors: s,
            validationDetails: a
        } = t.displayValidation, {
            labelProps: c,
            fieldProps: u,
            descriptionProps: d,
            errorMessageProps: l
        } = (0, K.useField)({
            ...e,
            labelElementType: "span",
            isInvalid: o,
            errorMessage: e.errorMessage || s
        }), f = (0, z.useRef)(null), {
            focusWithinProps: p
        } = (0, V.useFocusWithin)({
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
        }), h = (0, U.useLocalizedStringFormatter)(Z(Y), "@react-aria/datepicker"), v = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription", g = "hour" === t.maxGranularity ? "time" : "date", b = t.value ? h.format(v, {
            [g]: t.formatValue({
                month: "long"
            })
        }) : "", m = (0, F.useDescription)(b), y = "presentation" === e[$] ? u["aria-describedby"] : [m["aria-describedby"], u["aria-describedby"]].filter(Boolean).join(" ") || void 0, x = e[Q], w = (0, z.useMemo)(() => x || (0, N.createFocusManager)(n), [x, n]), S = X(t, n, "presentation" === e[$]);
        J.set(t, {
            ariaLabel: e["aria-label"],
            ariaLabelledBy: [c.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
            ariaDescribedBy: y,
            focusManager: w
        });
        let k = (0, z.useRef)(e.autoFocus);
        i = "presentation" === e[$] ? {
            role: "presentation"
        } : (0, F.mergeProps)(u, {
            role: "group",
            "aria-disabled": e.isDisabled || void 0,
            "aria-describedby": y
        }), (0, z.useEffect)(() => {
            k.current && w.focusFirst(), k.current = !1
        }, [w]), (0, F.useFormReset)(e.inputRef, t.value, t.setValue), (0, H.useFormValidation)({
            ...e,
            focus() {
                w.focusFirst()
            }
        }, t, e.inputRef);
        let E = {
            type: "hidden",
            name: e.name,
            value: (null === (r = t.value) || void 0 === r ? void 0 : r.toString()) || ""
        };
        "native" === e.validationBehavior && (E.type = "text", E.hidden = !0, E.required = e.isRequired, E.onChange = () => {});
        let _ = (0, F.filterDOMProps)(e);
        return {
            labelProps: {
                ...c,
                onClick: () => {
                    w.focusFirst()
                }
            },
            fieldProps: (0, F.mergeProps)(_, i, S, p, {
                onKeyDown(t) {
                    e.onKeyDown && e.onKeyDown(t)
                },
                onKeyUp(t) {
                    e.onKeyUp && e.onKeyUp(t)
                }
            }),
            inputProps: E,
            descriptionProps: d,
            errorMessageProps: l,
            isInvalid: o,
            validationErrors: s,
            validationDetails: a
        }
    }

    function et(e, t, n) {
        var r;
        let i = ee(e, t, n);
        return i.inputProps.value = (null === (r = t.timeValue) || void 0 === r ? void 0 : r.toString()) || "", i
    }

    function en(e, t, n) {
        let r = (0, F.useId)(),
            i = (0, F.useId)(),
            o = (0, F.useId)(),
            s = (0, U.useLocalizedStringFormatter)(Z(Y), "@react-aria/datepicker"),
            {
                isInvalid: a,
                validationErrors: c,
                validationDetails: u
            } = t.displayValidation,
            {
                labelProps: d,
                fieldProps: l,
                descriptionProps: f,
                errorMessageProps: p
            } = (0, K.useField)({
                ...e,
                labelElementType: "span",
                isInvalid: a,
                errorMessage: e.errorMessage || c
            }),
            h = X(t, n),
            v = l["aria-labelledby"] || l.id,
            {
                locale: g
            } = (0, U.useLocale)(),
            b = t.formatValue(g, {
                month: "long"
            }),
            m = b ? s.format("selectedDateDescription", {
                date: b
            }) : "",
            y = (0, F.useDescription)(m),
            x = [y["aria-describedby"], l["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            w = (0, F.filterDOMProps)(e),
            S = (0, z.useMemo)(() => (0, N.createFocusManager)(n), [n]),
            {
                focusWithinProps: k
            } = (0, V.useFocusWithin)({
                ...e,
                isDisabled: t.isOpen,
                onBlurWithin: e.onBlur,
                onFocusWithin: e.onFocus,
                onFocusWithinChange: e.onFocusChange
            });
        return {
            groupProps: (0, F.mergeProps)(w, h, l, y, k, {
                role: "group",
                "aria-disabled": e.isDisabled || null,
                "aria-labelledby": v,
                "aria-describedby": x,
                onKeyDown(n) {
                    !t.isOpen && e.onKeyDown && e.onKeyDown(n)
                },
                onKeyUp(n) {
                    !t.isOpen && e.onKeyUp && e.onKeyUp(n)
                }
            }),
            labelProps: {
                ...d,
                onClick: () => {
                    S.focusFirst()
                }
            },
            fieldProps: {
                ...l,
                id: o,
                [$]: "presentation",
                "aria-describedby": x,
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
                [B.privateValidationStateProp]: t,
                autoFocus: e.autoFocus,
                name: e.name
            },
            descriptionProps: f,
            errorMessageProps: p,
            buttonProps: {
                ...y,
                id: r,
                "aria-haspopup": "dialog",
                "aria-label": s.format("calendar"),
                "aria-labelledby": "".concat(r, " ").concat(v),
                "aria-describedby": x,
                "aria-expanded": t.isOpen,
                isDisabled: e.isDisabled || e.isReadOnly,
                onPress: () => t.setOpen(!0)
            },
            dialogProps: {
                id: i,
                "aria-labelledby": "".concat(r, " ").concat(v)
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
            isInvalid: a,
            validationErrors: c,
            validationDetails: u
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
        let r = (0, z.useRef)(""),
            {
                locale: i
            } = (0, U.useLocale)(),
            o = function() {
                let {
                    locale: e
                } = (0, U.useLocale)(), t = (0, U.useLocalizedStringDictionary)(Z(Y), "@react-aria/datepicker");
                return (0, z.useMemo)(() => {
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
                ariaLabel: s,
                ariaLabelledBy: a,
                ariaDescribedBy: c,
                focusManager: u
            } = J.get(t),
            d = e.isPlaceholder ? "" : e.text,
            l = (0, z.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
            f = (0, U.useDateFormatter)({
                month: "long",
                timeZone: l.timeZone
            }),
            p = (0, U.useDateFormatter)({
                hour: "numeric",
                hour12: l.hour12,
                timeZone: l.timeZone
            });
        if ("month" !== e.type || e.isPlaceholder) "hour" === e.type && !e.isPlaceholder && (d = p.format(t.dateValue));
        else {
            let e = f.format(t.dateValue);
            d = e !== d ? "".concat(d, " – ").concat(e) : e
        }
        let {
            spinButtonProps: h
        } = (0, W.useSpinButton)({
            value: e.value,
            textValue: d,
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
        }), v = (0, z.useMemo)(() => new G.NumberParser(i, {
            maximumFractionDigits: 0
        }), [i]), g = () => {
            if (!v.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) "dayPeriod" === e.type && t.clearSegment(e.type);
            else {
                let n = e.text.slice(0, -1),
                    i = v.parse(n);
                0 === n.length || 0 === i ? t.clearSegment(e.type) : t.setSegment(e.type, i), r.current = n
            }
        }, {
            startsWith: b
        } = (0, U.useFilter)({
            sensitivity: "base"
        }), m = (0, U.useDateFormatter)({
            hour: "numeric",
            hour12: !0
        }), y = (0, z.useMemo)(() => {
            let e = new Date;
            return e.setHours(0), m.formatToParts(e).find(e => "dayPeriod" === e.type).value
        }, [m]), x = (0, z.useMemo)(() => {
            let e = new Date;
            return e.setHours(12), m.formatToParts(e).find(e => "dayPeriod" === e.type).value
        }, [m]), w = (0, U.useDateFormatter)({
            year: "numeric",
            era: "narrow",
            timeZone: "UTC"
        }), S = (0, z.useMemo)(() => {
            if ("era" !== e.type) return [];
            let n = (0, q.toCalendar)(new q.CalendarDate(1, 1, 1), t.calendar),
                r = t.calendar.getEras().map(e => {
                    let t = n.set({
                        year: 1,
                        month: 1,
                        day: 1,
                        era: e
                    }).toDate("UTC");
                    return {
                        era: e,
                        formatted: w.formatToParts(t).find(e => "era" === e.type).value
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
        }, [w, t.calendar, e.type]), k = n => {
            if (t.isDisabled || t.isReadOnly) return;
            let i = r.current + n;
            switch (e.type) {
                case "dayPeriod":
                    if (b(y, n)) t.setSegment("dayPeriod", 0);
                    else if (b(x, n)) t.setSegment("dayPeriod", 12);
                    else break;
                    u.focusNext();
                    break;
                case "era": {
                    let e = S.find(e => b(e.formatted, n));
                    e && (t.setSegment("era", e.era), u.focusNext());
                    break
                }
                case "day":
                case "hour":
                case "minute":
                case "second":
                case "month":
                case "year": {
                    if (!v.isValidPartialNumber(i)) return;
                    let o = v.parse(i),
                        s = o,
                        a = 0 === e.minValue;
                    if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
                        switch (t.dateFormatter.resolvedOptions().hourCycle) {
                            case "h11":
                                o > 11 && (s = v.parse(n));
                                break;
                            case "h12":
                                a = !1, o > 12 && (s = v.parse(n))
                        }
                        e.value >= 12 && o > 1 && (o += 12)
                    } else o > e.maxValue && (s = v.parse(n));
                    if (isNaN(o)) return;
                    let c = 0 !== s || a;
                    c && t.setSegment(e.type, s), Number(o + "0") > e.maxValue || i.length >= String(e.maxValue).length ? (r.current = "", c && u.focusNext()) : r.current = i
                }
            }
        }, E = (0, z.useRef)("");
        (0, F.useEvent)(n, "beforeinput", r => {
            switch (r.preventDefault(), r.inputType) {
                case "deleteContentBackward":
                case "deleteContentForward":
                    v.isValidPartialNumber(e.text) && !t.isReadOnly && g();
                    break;
                case "insertCompositionText":
                    E.current = n.current.textContent, n.current.textContent = n.current.textContent;
                    break;
                default:
                    null != r.data && k(r.data)
            }
        }), (0, F.useEvent)(n, "input", e => {
            let {
                inputType: t,
                data: r
            } = e;
            if ("insertCompositionText" === t) n.current.textContent = E.current, (b(y, r) || b(x, r)) && k(r)
        }), (0, F.useLayoutEffect)(() => {
            let e = n.current;
            return () => {
                document.activeElement === e && !u.focusPrevious() && u.focusNext()
            }
        }, [n, u]);
        let _ = (0, F.isIOS)() || "timeZoneName" === e.type ? {
            role: "textbox",
            "aria-valuemax": null,
            "aria-valuemin": null,
            "aria-valuetext": null,
            "aria-valuenow": null
        } : {};
        e !== (0, z.useMemo)(() => t.segments.find(e => e.isEditable), [t.segments]) && !t.isInvalid && (c = void 0);
        let M = (0, F.useId)(),
            D = !t.isDisabled && !t.isReadOnly && e.isEditable,
            C = "literal" === e.type ? "" : o.of(e.type),
            P = (0, F.useLabels)({
                "aria-label": "".concat(C).concat(s ? ", ".concat(s) : "").concat(a ? ", " : ""),
                "aria-labelledby": a
            });
        return "literal" === e.type ? {
            segmentProps: {
                "aria-hidden": !0
            }
        } : {
            segmentProps: (0, F.mergeProps)(h, P, {
                id: M,
                ..._,
                "aria-invalid": t.isInvalid ? "true" : void 0,
                "aria-describedby": c,
                "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
                "data-placeholder": e.isPlaceholder || void 0,
                contentEditable: D,
                suppressContentEditableWarning: D,
                spellCheck: D ? "false" : void 0,
                autoCapitalize: D ? "off" : void 0,
                autoCorrect: D ? "off" : void 0,
                [parseInt(z.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: D ? "next" : void 0,
                inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !D ? void 0 : "numeric",
                tabIndex: t.isDisabled ? void 0 : 0,
                onKeyDown: e => {
                    if ("a" === e.key && ((0, F.isMac)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) switch (e.key) {
                        case "Backspace":
                        case "Delete":
                            e.preventDefault(), e.stopPropagation(), g()
                    }
                },
                onFocus: () => {
                    r.current = "", (0, F.scrollIntoViewport)(n.current, {
                        containingElement: (0, F.getScrollParent)(n.current)
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

    function eo(e, t, n) {
        var r, i;
        let o = (0, U.useLocalizedStringFormatter)(Z(Y), "@react-aria/datepicker"),
            {
                isInvalid: s,
                validationErrors: a,
                validationDetails: c
            } = t.displayValidation,
            {
                labelProps: u,
                fieldProps: d,
                descriptionProps: l,
                errorMessageProps: f
            } = (0, K.useField)({
                ...e,
                labelElementType: "span",
                isInvalid: s,
                errorMessage: e.errorMessage || a
            }),
            p = d["aria-labelledby"] || d.id,
            {
                locale: h
            } = (0, U.useLocale)(),
            v = t.formatValue(h, {
                month: "long"
            }),
            g = v ? o.format("selectedRangeDescription", {
                startDate: v.start,
                endDate: v.end
            }) : "",
            b = (0, F.useDescription)(g),
            m = {
                "aria-label": o.format("startDate"),
                "aria-labelledby": p
            },
            y = {
                "aria-label": o.format("endDate"),
                "aria-labelledby": p
            },
            x = (0, F.useId)(),
            w = (0, F.useId)(),
            S = X(t, n),
            k = [b["aria-describedby"], d["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            E = (0, z.useMemo)(() => (0, N.createFocusManager)(n, {
                accept: e => e.id !== x
            }), [n, x]),
            _ = {
                [Q]: E,
                [$]: "presentation",
                "aria-describedby": k,
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
            M = (0, F.filterDOMProps)(e),
            {
                focusWithinProps: D
            } = (0, V.useFocusWithin)({
                ...e,
                isDisabled: t.isOpen,
                onBlurWithin: e.onBlur,
                onFocusWithin: e.onFocus,
                onFocusWithinChange: e.onFocusChange
            }),
            C = (0, z.useRef)(B.DEFAULT_VALIDATION_RESULT),
            P = (0, z.useRef)(B.DEFAULT_VALIDATION_RESULT);
        return {
            groupProps: (0, F.mergeProps)(M, S, d, b, D, {
                role: "group",
                "aria-disabled": e.isDisabled || null,
                "aria-describedby": k,
                onKeyDown(n) {
                    !t.isOpen && e.onKeyDown && e.onKeyDown(n)
                },
                onKeyUp(n) {
                    !t.isOpen && e.onKeyUp && e.onKeyUp(n)
                }
            }),
            labelProps: {
                ...u,
                onClick: () => {
                    E.focusFirst()
                }
            },
            buttonProps: {
                ...b,
                id: x,
                "aria-haspopup": "dialog",
                "aria-label": o.format("calendar"),
                "aria-labelledby": "".concat(x, " ").concat(p),
                "aria-describedby": k,
                "aria-expanded": t.isOpen,
                isDisabled: e.isDisabled || e.isReadOnly,
                onPress: () => t.setOpen(!0)
            },
            dialogProps: {
                id: w,
                "aria-labelledby": "".concat(x, " ").concat(p)
            },
            startFieldProps: {
                ...m,
                ..._,
                value: null === (r = t.value) || void 0 === r ? void 0 : r.start,
                onChange: e => t.setDateTime("start", e),
                autoFocus: e.autoFocus,
                name: e.startName,
                [B.privateValidationStateProp]: {
                    realtimeValidation: t.realtimeValidation,
                    displayValidation: t.displayValidation,
                    updateValidation(e) {
                        C.current = e, t.updateValidation((0, B.mergeValidation)(e, P.current))
                    },
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation
                }
            },
            endFieldProps: {
                ...y,
                ..._,
                value: null === (i = t.value) || void 0 === i ? void 0 : i.end,
                onChange: e => t.setDateTime("end", e),
                name: e.endName,
                [B.privateValidationStateProp]: {
                    realtimeValidation: t.realtimeValidation,
                    displayValidation: t.displayValidation,
                    updateValidation(e) {
                        P.current = e, t.updateValidation((0, B.mergeValidation)(C.current, e))
                    },
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation
                }
            },
            descriptionProps: l,
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
            isInvalid: s,
            validationErrors: a,
            validationDetails: c
        }
    }
}