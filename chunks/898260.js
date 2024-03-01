function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("841559"),
        o = n("782340"),
        u = n("101439"),
        d = i.forwardRef(function(e, t) {
            let {
                className: n,
                contentClassName: i,
                isUnread: a,
                children: d,
                id: c,
                role: f,
                "aria-label": m
            } = e;
            return (0, l.jsxs)("div", {
                className: s(n, {
                    [u.divider]: !0,
                    [u.isUnread]: a,
                    [u.hasContent]: null != d
                }),
                ref: t,
                id: c,
                role: f,
                "aria-label": m,
                children: [null != d ? (0, l.jsx)("span", {
                    className: s(u.content, i),
                    children: d
                }) : null, a ? (0, l.jsxs)("span", {
                    className: u.unreadPill,
                    children: [(0, l.jsx)(r.default, {
                        foreground: u.unreadPillCapStroke,
                        className: u.unreadPillCap
                    }), o.default.Messages.NEW]
                }) : null]
            })
        })
}