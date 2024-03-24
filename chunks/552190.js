function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("77078"),
        r = n("423487"),
        s = n("782340"),
        i = n("582253"),
        d = e => {
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