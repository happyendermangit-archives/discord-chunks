function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("69649");

    function u(e) {
        let {
            children: t,
            "aria-label": n,
            className: s,
            position: u
        } = e, d = r.useRef(null), _ = null != n ? n : "string" == typeof t && t;
        return (0, i.jsx)(o.Tooltip, {
            position: null != u ? u : "top",
            delay: 500,
            text: t,
            "aria-label": _,
            children: n => {
                let {
                    onMouseEnter: r,
                    onMouseLeave: o
                } = n;
                return (0, i.jsx)("div", {
                    className: a()(s, l.overflow),
                    ref: d,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let {
                            current: e
                        } = d;
                        null != e && e.offsetWidth < e.scrollWidth && (null == r || r())
                    },
                    onMouseLeave: o,
                    children: t
                })
            }
        })
    }
}