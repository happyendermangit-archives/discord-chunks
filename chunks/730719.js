function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("759231"),
        a = n("689938"),
        o = n("260538");
    t.default = e => {
        let {
            errorMessage: t,
            onClose: n
        } = e;
        return null == t || "" === t ? null : (0, i.jsxs)("div", {
            className: o.errorContainer,
            children: [(0, i.jsx)(s.default, {
                width: 20,
                height: 20,
                className: o.errorIcon
            }), (0, i.jsx)(r.Text, {
                className: o.errorText,
                variant: "text-sm/normal",
                children: t
            }), (0, i.jsx)(r.Clickable, {
                onClick: () => {
                    n()
                },
                "aria-label": a.default.Messages.DISMISS,
                className: o.closeIcon
            })]
        })
    }
}