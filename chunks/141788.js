function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useProgressBar: function() {
            return s
        }
    });
    var r = n("240849"),
        i = n("113581"),
        o = n("564341");

    function s(e) {
        let {
            value: t = 0,
            minValue: n = 0,
            maxValue: s = 100,
            valueLabel: a,
            isIndeterminate: c,
            formatOptions: u = {
                style: "percent"
            }
        } = e, d = (0, r.filterDOMProps)(e, {
            labelable: !0
        }), {
            labelProps: l,
            fieldProps: f
        } = (0, i.useLabel)({
            ...e,
            labelElementType: "span"
        }), p = ((t = (0, r.clamp)(t, n, s)) - n) / (s - n), h = (0, o.useNumberFormatter)(u);
        if (!c && !a) {
            let e = "percent" === u.style ? p : t;
            a = h.format(e)
        }
        return {
            progressBarProps: (0, r.mergeProps)(d, {
                ...f,
                "aria-valuenow": c ? void 0 : t,
                "aria-valuemin": n,
                "aria-valuemax": s,
                "aria-valuetext": c ? void 0 : a,
                role: "progressbar"
            }),
            labelProps: l
        }
    }
}