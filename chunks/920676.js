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
        s = n("922770"),
        a = n("63351");

    function o() {
        return (0, i.jsx)(r.Dialog, {
            className: a.loadingPopout,
            children: (0, i.jsx)(s.Spinner, {
                type: s.SpinnerTypes.SPINNING_CIRCLE
            })
        })
    }
}