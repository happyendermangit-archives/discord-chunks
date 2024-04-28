function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("986341");
    t.default = e => {
        let {
            src: t,
            alt: n,
            size: s,
            "aria-label": l,
            className: u
        } = e, d = r.useRef(null), _ = r.useRef(!1), c = _.current ? o.image : o.imageLoading;
        return (0, i.jsx)("img", {
            className: a()(c, u),
            alt: n,
            src: t,
            ref: d,
            "aria-label": l,
            style: {
                backgroundSize: s,
                height: s,
                width: s
            },
            onLoad: _.current ? void 0 : () => {
                window.requestAnimationFrame(() => {
                    null != d.current && (_.current = !0, d.current.classList.remove(o.imageLoading), d.current.classList.add(o.image))
                })
            }
        })
    }
}