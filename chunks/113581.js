function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useField: function() {
            return o
        },
        useLabel: function() {
            return i
        }
    });
    var r = n("240849");

    function i(e) {
        let {
            id: t,
            label: n,
            "aria-labelledby": i,
            "aria-label": o,
            labelElementType: s = "label"
        } = e;
        t = (0, r.useId)(t);
        let a = (0, r.useId)(),
            c = {};
        return n ? (i = i ? "".concat(a, " ").concat(i) : a, c = {
            id: a,
            htmlFor: "label" === s ? t : void 0
        }) : !i && !o && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: c,
            fieldProps: (0, r.useLabels)({
                id: t,
                "aria-label": o,
                "aria-labelledby": i
            })
        }
    }

    function o(e) {
        let {
            description: t,
            errorMessage: n,
            isInvalid: o,
            validationState: s
        } = e, {
            labelProps: a,
            fieldProps: c
        } = i(e), u = (0, r.useSlotId)([!!t, !!n, o, s]), d = (0, r.useSlotId)([!!t, !!n, o, s]);
        return {
            labelProps: a,
            fieldProps: c = (0, r.mergeProps)(c, {
                "aria-describedby": [u, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
            }),
            descriptionProps: {
                id: u
            },
            errorMessageProps: {
                id: d
            }
        }
    }
}