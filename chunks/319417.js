function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("147915"),
        l = n("620448"),
        u = n("689938"),
        d = n("370495");
    t.default = r.memo(function(e) {
        let {
            onClick: t,
            disabled: n = !1
        } = e;
        return (0, i.jsx)("div", {
            className: d.separator,
            children: (0, i.jsx)("div", {
                className: d.buttonContainer,
                children: (0, i.jsx)(o.default, {
                    className: d.button,
                    innerClassName: d.innerButton,
                    childClassName: a()(d.buttonChild, {
                        [d.disabled]: n,
                        [d.activeButtonChild]: !n
                    }),
                    onClick: t,
                    disabled: n,
                    isActive: !1,
                    "aria-label": u.default.Messages.SEND_MESSAGE,
                    children: (0, i.jsx)(l.default, {
                        className: d.sendIcon
                    })
                })
            })
        })
    })
}