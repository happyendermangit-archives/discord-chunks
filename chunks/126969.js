function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("718017"),
        u = n("37299"),
        s = Object.freeze({
            tension: 400,
            friction: 30
        }),
        l = Object.freeze({
            opacity: 0,
            height: 8,
            x: -4
        });

    function c(e) {
        var t = e.selected,
            n = void 0 !== t && t,
            o = e.hovered,
            c = void 0 !== o && o,
            f = e.unread,
            d = void 0 !== f && f,
            _ = e.disabled,
            E = void 0 !== _ && _,
            p = e.className;
        n = !E && n, c = !E && c, d = !E && d;
        var m = {
                opacity: 1,
                height: n ? 40 : c ? 20 : 8,
                x: 0
            },
            y = (0, a.useTransition)(n || c || d, {
                config: s,
                keys: function(e) {
                    return e ? "pill" : "empty"
                },
                immediate: !c && !document.hasFocus(),
                initial: n || c || d ? m : null,
                from: l,
                leave: l,
                enter: m,
                update: m
            });
        return r.createElement("div", {
            className: i()(p, u.wrapper),
            "aria-hidden": !0
        }, y(function(e, t) {
            return t && r.createElement(a.animated.span, {
                className: u.item,
                style: e
            })
        }))
    }
}