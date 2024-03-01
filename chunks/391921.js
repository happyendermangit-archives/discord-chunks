function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSearchFieldState: function() {
            return a
        }
    }), n("222007");
    var r = n("679750");

    function a(e) {
        let [t, n] = (0, r.useControlledState)(i(e.value), i(e.defaultValue) || "", e.onChange);
        return {
            value: t,
            setValue: n
        }
    }

    function i(e) {
        if (null != e) return e.toString()
    }
}