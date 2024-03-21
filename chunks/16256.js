function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormErrorBlockColors: function() {
            return c
        },
        FormErrorBlock: function() {
            return _
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("227645"),
        l = n("945330"),
        u = n("423487"),
        d = n("62690");
    let c = {
            RED: d.backgroundRed,
            BACKGROUND_TERTIARY: d.backgroundTertiary,
            BACKGROUND_ACCENT: d.backgroundAccent
        },
        _ = s.forwardRef(function(e, t) {
            let {
                role: n,
                children: s,
                className: r,
                onDismiss: _,
                backgroundColor: f = c.RED,
                icon: E = u.default,
                iconClassName: h
            } = e;
            return (0, i.jsxs)("div", {
                className: a(d.error, r, f),
                ref: t,
                children: [(0, i.jsx)(E, {
                    className: a(d.icon, h)
                }), (0, i.jsx)("div", {
                    role: n,
                    className: d.text,
                    children: s
                }), null != _ ? (0, i.jsx)(o.Clickable, {
                    onClick: _,
                    className: d.errorClose,
                    children: (0, i.jsx)(l.default, {
                        className: d.errorCloseIcon
                    })
                }) : null]
            })
        })
}