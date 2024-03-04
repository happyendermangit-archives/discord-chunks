function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LoadingPopout: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("130969"),
        r = n("242670"),
        a = n("848244");

    function o() {
        return (0, i.jsx)(s.Dialog, {
            className: a.loadingPopout,
            children: (0, i.jsx)(r.Spinner, {
                type: r.SpinnerTypes.SPINNING_CIRCLE
            })
        })
    }
}