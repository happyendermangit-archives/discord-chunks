function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormErrorBlockColors: function() {
            return c
        },
        FormErrorBlock: function() {
            return f
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
        f = s.forwardRef(function(e, t) {
            let {
                role: n,
                children: s,
                className: r,
                onDismiss: f,
                backgroundColor: _ = c.RED,
                icon: E = u.default,
                iconClassName: h
            } = e;
            return (0, i.jsxs)("div", {
                className: a(d.error, r, _),
                ref: t,
                children: [(0, i.jsx)(E, {
                    className: a(d.icon, h)
                }), (0, i.jsx)("div", {
                    role: n,
                    className: d.text,
                    children: s
                }), null != f ? (0, i.jsx)(o.Clickable, {
                    onClick: f,
                    className: d.errorClose,
                    children: (0, i.jsx)(l.default, {
                        className: d.errorCloseIcon
                    })
                }) : null]
            })
        })
}