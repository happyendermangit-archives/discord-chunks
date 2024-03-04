function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCheckbox: function() {
            return d
        },
        useCheckboxGroup: function() {
            return f
        },
        useCheckboxGroupItem: function() {
            return p
        }
    }), n("222007");
    var r = n("884691"),
        i = n("759840"),
        o = n("444324"),
        s = n("914644"),
        a = n("240849"),
        c = n("113581"),
        u = n("223986");

    function d(e, t, n) {
        let a = (0, o.useFormValidationState)({
                ...e,
                value: t.isSelected
            }),
            {
                isInvalid: c,
                validationErrors: u,
                validationDetails: d
            } = a.displayValidation,
            {
                labelProps: l,
                inputProps: f,
                isSelected: p,
                isPressed: h,
                isDisabled: v,
                isReadOnly: g
            } = (0, s.useToggle)({
                ...e,
                isInvalid: c
            }, t, n);
        (0, i.useFormValidation)(e, a, n);
        let {
            isIndeterminate: b,
            isRequired: m,
            validationBehavior: y = "aria"
        } = e;
        return (0, r.useEffect)(() => {
            n.current && (n.current.indeterminate = !!b)
        }), {
            labelProps: l,
            inputProps: {
                ...f,
                checked: p,
                "aria-required": m && "aria" === y || void 0,
                required: m && "native" === y
            },
            isSelected: p,
            isPressed: h,
            isDisabled: v,
            isReadOnly: g,
            isInvalid: c,
            validationErrors: u,
            validationDetails: d
        }
    }
    let l = new WeakMap;

    function f(e, t) {
        let {
            isDisabled: n,
            name: r,
            validationBehavior: i = "aria"
        } = e, {
            isInvalid: o,
            validationErrors: s,
            validationDetails: u
        } = t.displayValidation, {
            labelProps: d,
            fieldProps: f,
            descriptionProps: p,
            errorMessageProps: h
        } = (0, c.useField)({
            ...e,
            labelElementType: "span",
            isInvalid: o,
            errorMessage: e.errorMessage || s
        });
        l.set(t, {
            name: r,
            descriptionId: p.id,
            errorMessageId: h.id,
            validationBehavior: i
        });
        let v = (0, a.filterDOMProps)(e, {
            labelable: !0
        });
        return {
            groupProps: (0, a.mergeProps)(v, {
                role: "group",
                "aria-disabled": n || void 0,
                ...f
            }),
            labelProps: d,
            descriptionProps: p,
            errorMessageProps: h,
            isInvalid: o,
            validationErrors: s,
            validationDetails: u
        }
    }

    function p(e, t, n) {
        var i, s;
        let a = (0, u.useToggleState)({
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isSelected: t.isSelected(e.value),
                onChange(n) {
                    n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n)
                }
            }),
            {
                name: c,
                descriptionId: f,
                errorMessageId: p,
                validationBehavior: h
            } = l.get(t);
        h = null !== (i = e.validationBehavior) && void 0 !== i ? i : h;
        let {
            realtimeValidation: v
        } = (0, o.useFormValidationState)({
            ...e,
            value: a.isSelected,
            name: void 0,
            validationBehavior: "aria"
        }), g = (0, r.useRef)(o.DEFAULT_VALIDATION_RESULT), b = () => {
            t.setInvalid(e.value, v.isInvalid ? v : g.current)
        };
        (0, r.useEffect)(b);
        let m = t.realtimeValidation.isInvalid ? t.realtimeValidation : v,
            y = "native" === h ? t.displayValidation : m,
            x = d({
                ...e,
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isDisabled: e.isDisabled || t.isDisabled,
                name: e.name || c,
                isRequired: null !== (s = e.isRequired) && void 0 !== s ? s : t.isRequired,
                validationBehavior: h,
                [o.privateValidationStateProp]: {
                    realtimeValidation: m,
                    displayValidation: y,
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation,
                    updateValidation(e) {
                        g.current = e, b()
                    }
                }
            }, a, n);
        return {
            ...x,
            inputProps: {
                ...x.inputProps,
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? p : null, f].filter(Boolean).join(" ") || void 0
            }
        }
    }
}