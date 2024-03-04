function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSearchFieldState: function() {
            return i
        }
    }), n("222007");
    var r = n("679750");

    function i(e) {
        let [t, n] = (0, r.useControlledState)(o(e.value), o(e.defaultValue) || "", e.onChange);
        return {
            value: t,
            setValue: n
        }
    }

    function o(e) {
        if (null != e) return e.toString()
    }
}