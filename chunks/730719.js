function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var l = n("481060"),
        r = n("759231"),
        s = n("689938"),
        i = n("400537");
    t.default = e => {
        let {
            errorMessage: t,
            onClose: n
        } = e;
        return null == t || "" === t ? null : (0, a.jsxs)("div", {
            className: i.errorContainer,
            children: [(0, a.jsx)(r.default, {
                width: 20,
                height: 20,
                className: i.errorIcon
            }), (0, a.jsx)(l.Text, {
                className: i.errorText,
                variant: "text-sm/normal",
                children: t
            }), (0, a.jsx)(l.Clickable, {
                onClick: () => {
                    n()
                },
                "aria-label": s.default.Messages.DISMISS,
                className: i.closeIcon
            })]
        })
    }
}