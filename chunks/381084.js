function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTextField: function() {
            return d
        },
        useFormattedTextField: function() {
            return f
        }
    }), n("222007");
    var r = n("884691"),
        i = n("240849"),
        o = n("708966"),
        s = n("113581"),
        a = n("447259"),
        c = n("759840"),
        u = n("444324");

    function d(e, t) {
        let {
            inputElementType: n = "input",
            isDisabled: d = !1,
            isRequired: l = !1,
            isReadOnly: f = !1,
            type: p = "text",
            validationBehavior: h = "aria"
        } = e, [v, g] = (0, o.useControlledState)(e.value, e.defaultValue || "", e.onChange), {
            focusableProps: b
        } = (0, a.useFocusable)(e, t), m = (0, u.useFormValidationState)({
            ...e,
            value: v
        }), {
            isInvalid: y,
            validationErrors: x,
            validationDetails: w
        } = m.displayValidation, {
            labelProps: S,
            fieldProps: k,
            descriptionProps: E,
            errorMessageProps: _
        } = (0, s.useField)({
            ...e,
            isInvalid: y,
            errorMessage: e.errorMessage || x
        }), M = (0, i.filterDOMProps)(e, {
            labelable: !0
        }), D = {
            type: p,
            pattern: e.pattern
        };
        return (0, i.useFormReset)(t, v, g), (0, c.useFormValidation)(e, m, t), (0, r.useEffect)(() => {
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
            inputProps: (0, i.mergeProps)(M, "input" === n && D, {
                disabled: d,
                readOnly: f,
                required: l && "native" === h,
                "aria-required": l && "aria" === h || void 0,
                "aria-invalid": y || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                value: v,
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
                ...b,
                ...k
            }),
            descriptionProps: E,
            errorMessageProps: _,
            isInvalid: y,
            validationErrors: x,
            validationDetails: w
        }
    }

    function l() {
        return "undefined" != typeof window && window.InputEvent && "function" == typeof InputEvent.prototype.getTargetRanges
    }

    function f(e, t, n) {
        let o = (0, i.useEffectEvent)(e => {
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
            if (!l()) return;
            let e = n.current;
            return e.addEventListener("beforeinput", o, !1), () => {
                e.removeEventListener("beforeinput", o, !1)
            }
        }, [n, o]);
        let s = l() ? null : e => {
                let n = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
                !t.validate(n) && e.preventDefault()
            },
            {
                labelProps: a,
                inputProps: c,
                descriptionProps: u,
                errorMessageProps: f,
                ...p
            } = d(e, n),
            h = (0, r.useRef)(null);
        return {
            inputProps: (0, i.mergeProps)(c, {
                onBeforeInput: s,
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
            labelProps: a,
            descriptionProps: u,
            errorMessageProps: f,
            ...p
        }
    }
}