function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("242670"),
        o = n("516256"),
        s = n("782340"),
        l = n("521841");

    function a(e) {
        return (0, i.jsx)(o.ModalRoot, {
            ...e,
            "aria-label": s.default.Messages.LOADING,
            size: o.ModalSize.SMALL,
            children: (0, i.jsx)("div", {
                className: l.spinnerContainer,
                children: (0, i.jsx)(r.Spinner, {})
            })
        })
    }
}