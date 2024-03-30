function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LoadingPopout: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("639643"),
        i = n("680799"),
        a = n("627676");

    function u() {
        return r.createElement(o.Dialog, {
            className: a.loadingPopout
        }, r.createElement(i.Spinner, {
            type: i.SpinnerTypes.SPINNING_CIRCLE
        }))
    }
}