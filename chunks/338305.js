function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("922770"),
        s = n("466377"),
        a = n("689938"),
        o = n("721790");

    function l(e) {
        return (0, i.jsx)(s.ModalRoot, {
            ...e,
            "aria-label": a.default.Messages.LOADING,
            size: s.ModalSize.SMALL,
            children: (0, i.jsx)("div", {
                className: o.spinnerContainer,
                children: (0, i.jsx)(r.Spinner, {})
            })
        })
    }
}