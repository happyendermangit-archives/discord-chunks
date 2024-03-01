function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCheckboxGroupState: function() {
            return a
        }
    }), n("222007");
    var r = n("679750");

    function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            [t, n] = (0, r.useControlledState)(e.value, e.defaultValue || [], e.onChange),
            a = {
                value: t,
                setValue(t) {
                    !e.isReadOnly && !e.isDisabled && n(t)
                },
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isSelected: e => t.includes(e),
                addValue(r) {
                    !e.isReadOnly && !e.isDisabled && !t.includes(r) && n(t.concat(r))
                },
                removeValue(r) {
                    !e.isReadOnly && !e.isDisabled && t.includes(r) && n(t.filter(e => e !== r))
                },
                toggleValue(r) {
                    !e.isReadOnly && !e.isDisabled && (t.includes(r) ? n(t.filter(e => e !== r)) : n(t.concat(r)))
                },
                validationState: e.validationState,
                isInvalid: e.isInvalid || "invalid" === e.validationState
            };
        return a
    }
}