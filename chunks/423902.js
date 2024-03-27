function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useRadioGroupState: function() {
            return s
        }
    });
    var r = n("697898"),
        i = n("470079");
    let a = Math.round(1e10 * Math.random()),
        o = 0;

    function s(e) {
        let t = (0, i.useMemo)(() => e.name || `radio-group-${a}-${++o}`, [e.name]),
            [n, s] = (0, r.useControlledState)(e.value, e.defaultValue, e.onChange),
            [u, c] = (0, i.useState)(null);
        return {
            name: t,
            selectedValue: n,
            setSelectedValue: t => {
                !e.isReadOnly && !e.isDisabled && s(t)
            },
            lastFocusedValue: u,
            setLastFocusedValue: c,
            isDisabled: e.isDisabled || !1,
            isReadOnly: e.isReadOnly || !1,
            isRequired: e.isRequired || !1,
            validationState: e.validationState || null,
            isInvalid: e.isInvalid || "invalid" === e.validationState
        }
    }
}