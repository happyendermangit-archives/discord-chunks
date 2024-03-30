function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("752519");
    t.default = function(e) {
        var t = e.src,
            n = e.alt,
            o = e.size,
            u = e["aria-label"],
            s = e.className,
            l = r.useRef(null),
            c = r.useRef(!1),
            f = c.current ? a.image : a.imageLoading;
        return r.createElement("img", {
            className: i()(f, s),
            alt: n,
            src: t,
            ref: l,
            "aria-label": u,
            style: {
                backgroundSize: o,
                height: o,
                width: o
            },
            onLoad: c.current ? void 0 : function() {
                window.requestAnimationFrame(function() {
                    null != l.current && (c.current = !0, l.current.classList.remove(a.imageLoading), l.current.classList.add(a.image))
                })
            }
        })
    }
}