function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("709945");

    function u(e) {
        let {
            children: t,
            "aria-label": n,
            className: a,
            position: u
        } = e, d = i.useRef(null), c = null != n ? n : "string" == typeof t && t;
        return (0, l.jsx)(r.Tooltip, {
            position: null != u ? u : "top",
            delay: 500,
            text: t,
            "aria-label": c,
            children: n => {
                let {
                    onMouseEnter: i,
                    onMouseLeave: r
                } = n;
                return (0, l.jsx)("div", {
                    className: s(a, o.overflow),
                    ref: d,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let {
                            current: e
                        } = d;
                        null != e && e.offsetWidth < e.scrollWidth && (null == i || i())
                    },
                    onMouseLeave: r,
                    children: t
                })
            }
        })
    }
}