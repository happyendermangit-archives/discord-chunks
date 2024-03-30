function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("351482"),
        u = n("665468"),
        s = n("157192");
    t.default = (0, a.replaceIcon)(function(e) {
        var t, n, o, a = e.width,
            u = e.height,
            l = e.color,
            c = e.className,
            f = e.foreground,
            d = e.open;
        return r.createElement("svg", {
            className: i()(s.arrow, c, (t = {}, n = s.open, o = void 0 !== d && d, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t)),
            width: void 0 === a ? 24 : a,
            height: void 0 === u ? 24 : u,
            viewBox: "0 0 24 24"
        }, r.createElement("path", {
            className: f,
            fill: void 0 === l ? "currentColor" : l,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
        }))
    }, u.ChevronSmallDownIcon, void 0, {
        size: 24
    })
}