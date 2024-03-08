function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("841559"),
        o = n("782340"),
        u = n("101439"),
        d = l.forwardRef(function(e, t) {
            let {
                className: n,
                contentClassName: l,
                isUnread: a,
                children: d,
                id: c,
                role: f,
                "aria-label": p
            } = e;
            return (0, i.jsxs)("div", {
                className: s(n, {
                    [u.divider]: !0,
                    [u.isUnread]: a,
                    [u.hasContent]: null != d
                }),
                ref: t,
                id: c,
                role: f,
                "aria-label": p,
                children: [null != d ? (0, i.jsx)("span", {
                    className: s(u.content, l),
                    children: d
                }) : null, a ? (0, i.jsxs)("span", {
                    className: u.unreadPill,
                    children: [(0, i.jsx)(r.default, {
                        foreground: u.unreadPillCapStroke,
                        className: u.unreadPillCap
                    }), o.default.Messages.NEW]
                }) : null]
            })
        })
}