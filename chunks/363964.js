function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSwitch: function() {
            return i
        }
    });
    var r = n("820002");

    function i(e, t, n) {
        let {
            labelProps: i,
            inputProps: a,
            isSelected: o,
            isPressed: s,
            isDisabled: u,
            isReadOnly: c
        } = (0, r.useToggle)(e, t, n);
        return {
            labelProps: i,
            inputProps: {
                ...a,
                role: "switch",
                checked: o
            },
            isSelected: o,
            isPressed: s,
            isDisabled: u,
            isReadOnly: c
        }
    }
}