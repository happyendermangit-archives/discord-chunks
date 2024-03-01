function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMeter: function() {
            return a
        }
    });
    var r = n("141788");

    function a(e) {
        let {
            progressBarProps: t,
            labelProps: n
        } = (0, r.useProgressBar)(e);
        return {
            meterProps: {
                ...t,
                role: "meter progressbar"
            },
            labelProps: n
        }
    }
}