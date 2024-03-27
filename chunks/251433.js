function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useField: function() {
            return a
        },
        useLabel: function() {
            return i
        }
    });
    var r = n("182823");

    function i(e) {
        let {
            id: t,
            label: n,
            "aria-labelledby": i,
            "aria-label": a,
            labelElementType: o = "label"
        } = e;
        t = (0, r.useId)(t);
        let s = (0, r.useId)(),
            u = {};
        return n ? (i = i ? `${s} ${i}` : s, u = {
            id: s,
            htmlFor: "label" === o ? t : void 0
        }) : !i && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: u,
            fieldProps: (0, r.useLabels)({
                id: t,
                "aria-label": a,
                "aria-labelledby": i
            })
        }
    }

    function a(e) {
        let {
            description: t,
            errorMessage: n,
            isInvalid: a,
            validationState: o
        } = e, {
            labelProps: s,
            fieldProps: u
        } = i(e), c = (0, r.useSlotId)([!!t, !!n, a, o]), l = (0, r.useSlotId)([!!t, !!n, a, o]);
        return {
            labelProps: s,
            fieldProps: u = (0, r.mergeProps)(u, {
                "aria-describedby": [c, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
            }),
            descriptionProps: {
                id: c
            },
            errorMessageProps: {
                id: l
            }
        }
    }
}