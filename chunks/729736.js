function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSwitch: function() {
            return i
        }
    });
    var r = n("914644");

    function i(e, t, n) {
        let {
            labelProps: i,
            inputProps: o,
            isSelected: s,
            isPressed: a,
            isDisabled: c,
            isReadOnly: u
        } = (0, r.useToggle)(e, t, n);
        return {
            labelProps: i,
            inputProps: {
                ...o,
                role: "switch",
                checked: s
            },
            isSelected: s,
            isPressed: a,
            isDisabled: c,
            isReadOnly: u
        }
    }
}