function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LoadingPopout: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("507274"),
        a = n("922770"),
        s = n("710646");

    function o() {
        return (0, i.jsx)(r.Dialog, {
            className: s.loadingPopout,
            children: (0, i.jsx)(a.Spinner, {
                type: a.SpinnerTypes.SPINNING_CIRCLE
            })
        })
    }
}