function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("718017"),
        o = n("37299");
    let l = Object.freeze({
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
            unread: r = !1,
            disabled: d = !1,
            className: _
        } = e;
        t = !d && t, n = !d && n, r = !d && r;
        let c = {
                opacity: 1,
                height: t ? 40 : n ? 20 : 8,
                x: 0
            },
            E = (0, a.useTransition)(t || n || r, {
                config: l,
                keys: e => e ? "pill" : "empty",
                immediate: !n && !document.hasFocus(),
                initial: t || n || r ? c : null,
                from: u,
                leave: u,
                enter: c,
                update: c
            });
        return (0, i.jsx)("div", {
            className: s()(_, o.wrapper),
            "aria-hidden": !0,
            children: E((e, t) => t && (0, i.jsx)(a.animated.span, {
                className: o.item,
                style: e
            }))
        })
    }
}