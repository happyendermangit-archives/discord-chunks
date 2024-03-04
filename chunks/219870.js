function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToggleState: function() {
            return i
        }
    }), n("222007");
    var r = n("679750");

    function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                isReadOnly: t
            } = e,
            [n, i] = (0, r.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange);
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