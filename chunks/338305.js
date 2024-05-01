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
        a = n("466377"),
        s = n("689938"),
        o = n("821458");

    function l(e) {
        return (0, i.jsx)(a.ModalRoot, {
            ...e,
            "aria-label": s.default.Messages.LOADING,
            size: a.ModalSize.SMALL,
            children: (0, i.jsx)("div", {
                className: o.spinnerContainer,
                children: (0, i.jsx)(r.Spinner, {})
            })
        })
    }
}