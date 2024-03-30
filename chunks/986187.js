function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormErrorBlock: function() {
            return f
        },
        FormErrorBlockColors: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("324377"),
        u = n("247164"),
        s = n("707907"),
        l = n("74958"),
        c = {
            RED: l.backgroundRed,
            BACKGROUND_TERTIARY: l.backgroundTertiary,
            BACKGROUND_ACCENT: l.backgroundAccent
        },
        f = r.forwardRef(function(e, t) {
            var n = e.role,
                o = e.children,
                f = e.className,
                d = e.onDismiss,
                _ = e.backgroundColor,
                E = void 0 === _ ? c.RED : _,
                p = e.icon,
                m = void 0 === p ? s.default : p,
                y = e.iconClassName;
            return r.createElement("div", {
                className: i()(l.error, f, E),
                ref: t
            }, r.createElement(m, {
                className: i()(l.icon, y)
            }), r.createElement("div", {
                role: n,
                className: l.text
            }, o), null != d ? r.createElement(a.Clickable, {
                onClick: d,
                className: l.errorClose
            }, r.createElement(u.default, {
                className: l.errorCloseIcon
            })) : null)
        })
}