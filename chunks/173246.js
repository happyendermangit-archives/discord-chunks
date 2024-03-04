function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useRadioGroupState: function() {
            return a
        }
    }), n("222007");
    var r = n("679750"),
        i = n("884691");
    let o = Math.round(1e10 * Math.random()),
        s = 0;

    function a(e) {
        let t = (0, i.useMemo)(() => e.name || "radio-group-".concat(o, "-").concat(++s), [e.name]),
            [n, a] = (0, r.useControlledState)(e.value, e.defaultValue, e.onChange),
            [c, u] = (0, i.useState)(null);
        return {
            name: t,
            selectedValue: n,
            setSelectedValue: t => {
                !e.isReadOnly && !e.isDisabled && a(t)
            },
            lastFocusedValue: c,
            setLastFocusedValue: u,
            isDisabled: e.isDisabled || !1,
            isReadOnly: e.isReadOnly || !1,
            isRequired: e.isRequired || !1,
            validationState: e.validationState || null,
            isInvalid: e.isInvalid || "invalid" === e.validationState
        }
    }
}