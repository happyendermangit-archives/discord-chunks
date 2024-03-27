function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSlider: function() {
            return d
        },
        useSliderThumb: function() {
            return f
        }
    });
    var r = n("182823"),
        i = n("470079"),
        a = n("612001"),
        o = n("251433"),
        s = n("602607"),
        u = n("706682");
    let c = new WeakMap;

    function l(e, t) {
        let n = c.get(e);
        if (!n) throw Error("Unknown slider state");
        return `${n.id}-${t}`
    }

    function d(e, t, n) {
        var u;
        let {
            labelProps: d,
            fieldProps: f
        } = (0, o.useLabel)(e), p = "vertical" === e.orientation;
        c.set(t, {
            id: null !== (u = d.id) && void 0 !== u ? u : f.id,
            "aria-describedby": e["aria-describedby"],
            "aria-details": e["aria-details"]
        });
        let {
            direction: h
        } = (0, s.useLocale)(), {
            addGlobalListener: m,
            removeGlobalListener: g
        } = (0, r.useGlobalListeners)(), _ = (0, i.useRef)(null), b = "rtl" === h, v = (0, i.useRef)(null), {
            moveProps: y
        } = (0, a.useMove)({
            onMoveStart() {
                v.current = null
            },
            onMove({
                deltaX: e,
                deltaY: i
            }) {
                let {
                    height: a,
                    width: o
                } = n.current.getBoundingClientRect(), s = p ? a : o;
                null == v.current && (v.current = t.getThumbPercent(_.current) * s);
                let u = p ? i : e;
                if ((p || b) && (u = -u), v.current += u, null != _.current && n.current) {
                    let e = (0, r.clamp)(v.current / s, 0, 1);
                    t.setThumbPercent(_.current, e)
                }
            },
            onMoveEnd() {
                null != _.current && (t.setThumbDragging(_.current, !1), _.current = null)
            }
        }), E = (0, i.useRef)(void 0), S = (r, i, a, o) => {
            if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                let e, {
                        height: s,
                        width: u,
                        top: c,
                        left: l
                    } = n.current.getBoundingClientRect(),
                    d = ((p ? o : a) - (p ? c : l)) / (p ? s : u);
                ("rtl" === h || p) && (d = 1 - d);
                let f = t.getPercentValue(d),
                    g = t.values.findIndex(e => f - e < 0);
                (e = 0 === g ? g : -1 === g ? t.values.length - 1 : Math.abs(t.values[g - 1] - f) < Math.abs(t.values[g] - f) ? g - 1 : g) >= 0 && t.isThumbEditable(e) ? (r.preventDefault(), _.current = e, t.setFocusedThumb(e), E.current = i, t.setThumbDragging(_.current, !0), t.setThumbValue(e, f), m(window, "mouseup", x, !1), m(window, "touchend", x, !1), m(window, "pointerup", x, !1)) : _.current = null
            }
        }, x = e => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === E.current && (null != _.current && (t.setThumbDragging(_.current, !1), _.current = null), g(window, "mouseup", x, !1), g(window, "touchend", x, !1), g(window, "pointerup", x, !1))
        };
        return "htmlFor" in d && d.htmlFor && (delete d.htmlFor, d.onClick = () => {
            var e;
            null === (e = document.getElementById(l(t, 0))) || void 0 === e || e.focus(), (0, a.setInteractionModality)("keyboard")
        }), {
            labelProps: d,
            groupProps: {
                role: "group",
                ...f
            },
            trackProps: (0, r.mergeProps)({
                onMouseDown(e) {
                    0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && S(e, void 0, e.clientX, e.clientY)
                },
                onPointerDown(e) {
                    ("mouse" !== e.pointerType || 0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey) && S(e, e.pointerId, e.clientX, e.clientY)
                },
                onTouchStart(e) {
                    S(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY)
                },
                style: {
                    position: "relative",
                    touchAction: "none"
                }
            }, y),
            outputProps: {
                htmlFor: t.values.map((e, n) => l(t, n)).join(" "),
                "aria-live": "off"
            }
        }
    }

    function f(e, t) {
        var n;
        let {
            index: d = 0,
            isRequired: f,
            validationState: p,
            isInvalid: h,
            trackRef: m,
            inputRef: g,
            orientation: _ = t.orientation,
            name: b
        } = e, v = e.isDisabled || t.isDisabled, y = "vertical" === _, {
            direction: E
        } = (0, s.useLocale)(), {
            addGlobalListener: S,
            removeGlobalListener: x
        } = (0, r.useGlobalListeners)(), w = c.get(t), {
            labelProps: T,
            fieldProps: C
        } = (0, o.useLabel)({
            ...e,
            id: l(t, d),
            "aria-labelledby": `${w.id} ${null!==(n=e["aria-labelledby"])&&void 0!==n?n:""}`.trim()
        }), D = t.values[d], O = (0, i.useCallback)(() => {
            g.current && (0, r.focusWithoutScrolling)(g.current)
        }, [g]), M = t.focusedThumb === d;
        (0, i.useEffect)(() => {
            M && O()
        }, [M, O]);
        let A = "rtl" === E,
            k = (0, i.useRef)(null),
            {
                keyboardProps: R
            } = (0, a.useKeyboard)({
                onKeyDown(e) {
                    let {
                        getThumbMaxValue: n,
                        getThumbMinValue: r,
                        decrementThumb: i,
                        incrementThumb: a,
                        setThumbValue: o,
                        setThumbDragging: s,
                        pageSize: u
                    } = t;
                    if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                        e.continuePropagation();
                        return
                    }
                    switch (e.preventDefault(), s(d, !0), e.key) {
                        case "PageUp":
                            a(d, u);
                            break;
                        case "PageDown":
                            i(d, u);
                            break;
                        case "Home":
                            o(d, r(d));
                            break;
                        case "End":
                            o(d, n(d))
                    }
                    s(d, !1)
                }
            }),
            {
                moveProps: N
            } = (0, a.useMove)({
                onMoveStart() {
                    k.current = null, t.setThumbDragging(d, !0)
                },
                onMove({
                    deltaX: e,
                    deltaY: n,
                    pointerType: i,
                    shiftKey: a
                }) {
                    let {
                        getThumbPercent: o,
                        setThumbPercent: s,
                        decrementThumb: u,
                        incrementThumb: c,
                        step: l,
                        pageSize: f
                    } = t, {
                        width: p,
                        height: h
                    } = m.current.getBoundingClientRect(), g = y ? h : p;
                    if (null == k.current && (k.current = o(d) * g), "keyboard" === i) e > 0 && A || e < 0 && !A || n > 0 ? u(d, a ? f : l) : c(d, a ? f : l);
                    else {
                        let t = y ? n : e;
                        (y || A) && (t = -t), k.current += t, s(d, (0, r.clamp)(k.current / g, 0, 1))
                    }
                },
                onMoveEnd() {
                    t.setThumbDragging(d, !1)
                }
            });
        t.setThumbEditable(d, !v);
        let {
            focusableProps: I
        } = (0, u.useFocusable)((0, r.mergeProps)(e, {
            onFocus: () => t.setFocusedThumb(d),
            onBlur: () => t.setFocusedThumb(void 0)
        }), g), L = (0, i.useRef)(void 0), P = e => {
            O(), L.current = e, t.setThumbDragging(d, !0), S(window, "mouseup", F, !1), S(window, "touchend", F, !1), S(window, "pointerup", F, !1)
        }, F = e => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === L.current && (O(), t.setThumbDragging(d, !1), x(window, "mouseup", F, !1), x(window, "touchend", F, !1), x(window, "pointerup", F, !1))
        }, B = t.getThumbPercent(d);
        (y || "rtl" === E) && (B = 1 - B);
        let U = v ? {} : (0, r.mergeProps)(R, N, {
            onMouseDown: e => {
                0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && P()
            },
            onPointerDown: e => {
                0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && P(e.pointerId)
            },
            onTouchStart: e => {
                P(e.changedTouches[0].identifier)
            }
        });
        return (0, r.useFormReset)(g, D, e => {
            t.setThumbValue(d, e)
        }), {
            inputProps: (0, r.mergeProps)(I, C, {
                type: "range",
                tabIndex: v ? void 0 : 0,
                min: t.getThumbMinValue(d),
                max: t.getThumbMaxValue(d),
                step: t.step,
                value: D,
                name: b,
                disabled: v,
                "aria-orientation": _,
                "aria-valuetext": t.getThumbValueLabel(d),
                "aria-required": f || void 0,
                "aria-invalid": h || "invalid" === p || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-describedby": [w["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
                "aria-details": [w["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
                onChange: e => {
                    t.setThumbValue(d, parseFloat(e.target.value))
                }
            }),
            thumbProps: {
                ...U,
                style: {
                    position: "absolute",
                    [y ? "top" : "left"]: `${100*B}%`,
                    transform: "translate(-50%, -50%)",
                    touchAction: "none"
                }
            },
            labelProps: T,
            isDragging: t.isThumbDragging(d),
            isDisabled: v,
            isFocused: M
        }
    }
}