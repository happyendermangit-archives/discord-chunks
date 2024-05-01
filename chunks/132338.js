function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("38068"),
        l = n("689938"),
        u = n("216928");
    t.default = r.forwardRef(function(e, t) {
        let {
            className: n,
            contentClassName: r,
            isUnread: a,
            children: d,
            id: _,
            role: c,
            "aria-label": E
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(n, {
                [u.divider]: !0,
                [u.isUnread]: a,
                [u.hasContent]: null != d
            }),
            ref: t,
            id: _,
            role: c,
            "aria-label": E,
            children: [null != d ? (0, i.jsx)("span", {
                className: s()(u.content, r),
                children: d
            }) : null, a ? (0, i.jsxs)("span", {
                className: u.unreadPill,
                children: [(0, i.jsx)(o.default, {
                    foreground: u.unreadPillCapStroke,
                    className: u.unreadPillCap
                }), l.default.Messages.NEW]
            }) : null]
        })
    })
}