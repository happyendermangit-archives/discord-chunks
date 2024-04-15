function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("38068"),
        l = n("689938"),
        u = n("99547");
    t.default = r.forwardRef(function(e, t) {
        let {
            className: n,
            contentClassName: r,
            isUnread: s,
            children: d,
            id: _,
            role: c,
            "aria-label": E
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(n, {
                [u.divider]: !0,
                [u.isUnread]: s,
                [u.hasContent]: null != d
            }),
            ref: t,
            id: _,
            role: c,
            "aria-label": E,
            children: [null != d ? (0, i.jsx)("span", {
                className: a()(u.content, r),
                children: d
            }) : null, s ? (0, i.jsxs)("span", {
                className: u.unreadPill,
                children: [(0, i.jsx)(o.default, {
                    foreground: u.unreadPillCapStroke,
                    className: u.unreadPillCap
                }), l.default.Messages.NEW]
            }) : null]
        })
    })
}