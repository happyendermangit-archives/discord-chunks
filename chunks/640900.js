function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFormattedTextField: function() {
            return f
        },
        useTextField: function() {
            return l
        }
    });
    var r = n("470079"),
        i = n("182823"),
        a = n("882932"),
        o = n("251433"),
        s = n("706682"),
        u = n("705782"),
        c = n("201284");

    function l(e, t) {
        let {
            inputElementType: n = "input",
            isDisabled: l = !1,
            isRequired: d = !1,
            isReadOnly: f = !1,
            type: p = "text",
            validationBehavior: h = "aria"
        } = e, [m, g] = (0, a.useControlledState)(e.value, e.defaultValue || "", e.onChange), {
            focusableProps: _
        } = (0, s.useFocusable)(e, t), b = (0, c.useFormValidationState)({
            ...e,
            value: m
        }), {
            isInvalid: v,
            validationErrors: y,
            validationDetails: E
        } = b.displayValidation, {
            labelProps: S,
            fieldProps: x,
            descriptionProps: w,
            errorMessageProps: T
        } = (0, o.useField)({
            ...e,
            isInvalid: v,
            errorMessage: e.errorMessage || y
        }), C = (0, i.filterDOMProps)(e, {
            labelable: !0
        }), D = {
            type: p,
            pattern: e.pattern
        };
        return (0, i.useFormReset)(t, m, g), (0, u.useFormValidation)(e, b, t), (0, r.useEffect)(() => {
            if (t.current instanceof(0, i.getOwnerWindow)(t.current).HTMLTextAreaElement) {
                let e = t.current;
                Object.defineProperty(e, "defaultValue", {
                    get: () => e.value,
                    set: () => {},
                    configurable: !0
                })
            }
        }, [t]), {
            labelProps: S,
            inputProps: (0, i.mergeProps)(C, "input" === n && D, {
                disabled: l,
                readOnly: f,
                required: d && "native" === h,
                "aria-required": d && "aria" === h || void 0,
                "aria-invalid": v || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                value: m,
                onChange: e => g(e.target.value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ..._,
                ...x
            }),
            descriptionProps: w,
            errorMessageProps: T,
            isInvalid: v,
            validationErrors: y,
            validationDetails: E
        }
    }

    function d() {
        return "undefined" != typeof window && window.InputEvent && "function" == typeof InputEvent.prototype.getTargetRanges
    }

    function f(e, t, n) {
        let a = (0, i.useEffectEvent)(e => {
            let r, i = n.current;
            switch (e.inputType) {
                case "historyUndo":
                case "historyRedo":
                    return;
                case "deleteContent":
                case "deleteByCut":
                case "deleteByDrag":
                    r = i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
                    break;
                case "deleteContentForward":
                    r = i.selectionEnd === i.selectionStart ? i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd + 1) : i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
                    break;
                case "deleteContentBackward":
                    r = i.selectionEnd === i.selectionStart ? i.value.slice(0, i.selectionStart - 1) + i.value.slice(i.selectionStart) : i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
                    break;
                case "deleteSoftLineBackward":
                case "deleteHardLineBackward":
                    r = i.value.slice(i.selectionStart);
                    break;
                default:
                    null != e.data && (r = i.value.slice(0, i.selectionStart) + e.data + i.value.slice(i.selectionEnd))
            }(null == r || !t.validate(r)) && e.preventDefault()
        });
        (0, r.useEffect)(() => {
            if (!d()) return;
            let e = n.current;
            return e.addEventListener("beforeinput", a, !1), () => {
                e.removeEventListener("beforeinput", a, !1)
            }
        }, [n, a]);
        let o = d() ? null : e => {
                let n = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
                !t.validate(n) && e.preventDefault()
            },
            {
                labelProps: s,
                inputProps: u,
                descriptionProps: c,
                errorMessageProps: f,
                ...p
            } = l(e, n),
            h = (0, r.useRef)(null);
        return {
            inputProps: (0, i.mergeProps)(u, {
                onBeforeInput: o,
                onCompositionStart() {
                    let {
                        value: e,
                        selectionStart: t,
                        selectionEnd: r
                    } = n.current;
                    h.current = {
                        value: e,
                        selectionStart: t,
                        selectionEnd: r
                    }
                },
                onCompositionEnd() {
                    if (!t.validate(n.current.value)) {
                        let {
                            value: e,
                            selectionStart: r,
                            selectionEnd: i
                        } = h.current;
                        n.current.value = e, n.current.setSelectionRange(r, i), t.setInputValue(e)
                    }
                }
            }),
            labelProps: s,
            descriptionProps: c,
            errorMessageProps: f,
            ...p
        }
    }
}