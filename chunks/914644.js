function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToggle: function() {
            return s
        }
    });
    var r = n("240849"),
        i = n("447259"),
        o = n("388032");

    function s(e, t, n) {
        let {
            isDisabled: s = !1,
            isReadOnly: a = !1,
            value: c,
            name: u,
            children: d,
            "aria-label": l,
            "aria-labelledby": f,
            validationState: p = "valid",
            isInvalid: h
        } = e;
        !(null != d) && !(null != l || null != f) && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
        let {
            pressProps: v,
            isPressed: g
        } = (0, o.usePress)({
            isDisabled: s
        }), {
            pressProps: b,
            isPressed: m
        } = (0, o.usePress)({
            isDisabled: s || a,
            onPress() {
                t.toggle()
            }
        }), {
            focusableProps: y
        } = (0, i.useFocusable)(e, n), x = (0, r.mergeProps)(v, y), w = (0, r.filterDOMProps)(e, {
            labelable: !0
        });
        return (0, r.useFormReset)(n, t.isSelected, t.setSelected), {
            labelProps: (0, r.mergeProps)(b, {
                onClick: e => e.preventDefault()
            }),
            inputProps: (0, r.mergeProps)(w, {
                "aria-invalid": h || "invalid" === p || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": a || void 0,
                onChange: e => {
                    e.stopPropagation(), t.setSelected(e.target.checked)
                },
                disabled: s,
                ...null == c ? {} : {
                    value: c
                },
                name: u,
                type: "checkbox",
                ...x
            }),
            isSelected: t.isSelected,
            isPressed: g || m,
            isDisabled: s,
            isReadOnly: a,
            isInvalid: h || "invalid" === p
        }
    }
}