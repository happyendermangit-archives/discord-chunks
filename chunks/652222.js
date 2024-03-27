function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useProgressBar: function() {
            return o
        }
    });
    var r = n("182823"),
        i = n("251433"),
        a = n("602607");

    function o(e) {
        let {
            value: t = 0,
            minValue: n = 0,
            maxValue: o = 100,
            valueLabel: s,
            isIndeterminate: u,
            formatOptions: c = {
                style: "percent"
            }
        } = e, l = (0, r.filterDOMProps)(e, {
            labelable: !0
        }), {
            labelProps: d,
            fieldProps: f
        } = (0, i.useLabel)({
            ...e,
            labelElementType: "span"
        }), p = ((t = (0, r.clamp)(t, n, o)) - n) / (o - n), h = (0, a.useNumberFormatter)(c);
        if (!u && !s) {
            let e = "percent" === c.style ? p : t;
            s = h.format(e)
        }
        return {
            progressBarProps: (0, r.mergeProps)(l, {
                ...f,
                "aria-valuenow": u ? void 0 : t,
                "aria-valuemin": n,
                "aria-valuemax": o,
                "aria-valuetext": u ? void 0 : s,
                role: "progressbar"
            }),
            labelProps: d
        }
    }
}