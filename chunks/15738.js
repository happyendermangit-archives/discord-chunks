function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("907002"),
        r = n("739613");
    let o = Object.freeze({
            tension: 400,
            friction: 30
        }),
        u = Object.freeze({
            opacity: 0,
            height: 8,
            x: -4
        });

    function d(e) {
        let {
            selected: t = !1,
            hovered: n = !1,
            unread: i = !1,
            disabled: d = !1,
            className: c
        } = e;
        t = !d && t, n = !d && n, i = !d && i;
        let f = {
                opacity: 1,
                height: t ? 40 : n ? 20 : 8,
                x: 0
            },
            m = (0, s.useTransition)(t || n || i, {
                config: o,
                keys: e => e ? "pill" : "empty",
                immediate: !n && !document.hasFocus(),
                initial: t || n || i ? f : null,
                from: u,
                leave: u,
                enter: f,
                update: f
            });
        return (0, l.jsx)("div", {
            className: a(c, r.wrapper),
            "aria-hidden": !0,
            children: m((e, t) => t && (0, l.jsx)(s.animated.span, {
                className: r.item,
                style: e
            }))
        })
    }
}