function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("146606"),
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
            unread: l = !1,
            disabled: d = !1,
            className: c
        } = e;
        t = !d && t, n = !d && n, l = !d && l;
        let f = {
                opacity: 1,
                height: t ? 40 : n ? 20 : 8,
                x: 0
            },
            p = (0, s.useTransition)(t || n || l, {
                config: o,
                keys: e => e ? "pill" : "empty",
                immediate: !n && !document.hasFocus(),
                initial: t || n || l ? f : null,
                from: u,
                leave: u,
                enter: f,
                update: f
            });
        return (0, i.jsx)("div", {
            className: a(c, r.wrapper),
            "aria-hidden": !0,
            children: p((e, t) => t && (0, i.jsx)(s.animated.span, {
                className: r.item,
                style: e
            }))
        })
    }
}