function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormErrorBlock: function() {
            return c
        },
        FormErrorBlockColors: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("1561"),
        l = n("465670"),
        u = n("759231"),
        d = n("771402");
    let _ = {
            RED: d.backgroundRed,
            BACKGROUND_TERTIARY: d.backgroundTertiary,
            BACKGROUND_ACCENT: d.backgroundAccent
        },
        c = r.forwardRef(function(e, t) {
            let {
                role: n,
                children: r,
                className: s,
                onDismiss: c,
                backgroundColor: E = _.RED,
                icon: I = u.default,
                iconClassName: T
            } = e;
            return (0, i.jsxs)("div", {
                className: a()(d.error, s, E),
                ref: t,
                children: [(0, i.jsx)(I, {
                    className: a()(d.icon, T)
                }), (0, i.jsx)("div", {
                    role: n,
                    className: d.text,
                    children: r
                }), null != c ? (0, i.jsx)(o.Clickable, {
                    onClick: c,
                    className: d.errorClose,
                    children: (0, i.jsx)(l.default, {
                        className: d.errorCloseIcon
                    })
                }) : null]
            })
        })
}