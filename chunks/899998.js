function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("492223");
    t.default = r.forwardRef(function(e, t) {
        var n, o, u, s = e.children,
            l = e.className,
            c = e.style,
            f = e.noBorder,
            d = e.participantUserId;
        return r.createElement("div", {
            className: i()(l, a.tile, (n = {}, o = a.noBorder, u = void 0 !== f && f, o in n ? Object.defineProperty(n, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[o] = u, n)),
            style: c,
            ref: t,
            "data-selenium-video-tile": d
        }, s)
    })
}