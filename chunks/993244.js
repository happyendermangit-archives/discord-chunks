function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("532379"),
        o = e => {
            let {
                src: t,
                alt: n,
                size: a,
                "aria-label": o,
                className: u
            } = e, d = l.useRef(null), c = l.useRef(!1), f = c.current ? r.image : r.imageLoading;
            return (0, i.jsx)("img", {
                className: s(f, u),
                alt: n,
                src: t,
                ref: d,
                "aria-label": o,
                style: {
                    backgroundSize: a,
                    height: a,
                    width: a
                },
                onLoad: c.current ? void 0 : () => {
                    window.requestAnimationFrame(() => {
                        null != d.current && (c.current = !0, d.current.classList.remove(r.imageLoading), d.current.classList.add(r.image))
                    })
                }
            })
        }
}