function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToggleState: function() {
            return i
        }
    });
    var r = n("882932");

    function i(e = {}) {
        let {
            isReadOnly: t
        } = e, [n, i] = (0, r.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
            isSelected: n,
            setSelected: function(e) {
                !t && i(e)
            },
            toggle: function() {
                !t && i(!n)
            }
        }
    }
}