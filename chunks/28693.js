function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSearchFieldState: function() {
            return i
        }
    });
    var r = n("697898");

    function i(e) {
        let [t, n] = (0, r.useControlledState)(a(e.value), a(e.defaultValue) || "", e.onChange);
        return {
            value: t,
            setValue: n
        }
    }

    function a(e) {
        if (null != e) return e.toString()
    }
}