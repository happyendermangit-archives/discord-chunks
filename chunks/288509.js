function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("658086");

    function s(e) {
        var t = e.children,
            n = e["aria-label"],
            o = e.className,
            s = e.position,
            l = r.useRef(null),
            c = null != n ? n : "string" == typeof t && t;
        return r.createElement(a.Tooltip, {
            position: null != s ? s : "top",
            delay: 500,
            text: t,
            "aria-label": c
        }, function(n) {
            var a = n.onMouseEnter,
                s = n.onMouseLeave;
            return r.createElement("div", {
                className: i()(o, u.overflow),
                ref: l,
                "aria-hidden": e["aria-hidden"],
                onMouseEnter: function() {
                    var e = l.current;
                    null != e && e.offsetWidth < e.scrollWidth && (null == a || a())
                },
                onMouseLeave: s
            }, t)
        })
    }
}