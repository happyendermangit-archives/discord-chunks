function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("404506");
    t.default = (0, o.replaceIcon)(function(e) {
        var t = e.width,
            n = e.height,
            o = e.color,
            i = void 0 === o ? "currentColor" : o,
            a = e.className,
            u = e.foreground,
            s = e.background;
        return r.createElement("svg", {
            className: a,
            width: void 0 === t ? 16 : t,
            height: void 0 === n ? 16 : n,
            viewBox: "0 0 16 16"
        }, r.createElement("g", {
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("path", {
            className: s,
            fill: i,
            d: "M14,8.99751269 L14,11.6666667 L11.3333333,9 L11.3333333,11.3333333 C11.3333333,11.7 11.0333333,12 10.6666667,12 L2.66666667,12 C2.3,12 2,11.7 2,11.3333333 L2,4.66666667 C2,4.3 2.3,4 2.66666667,4 L9.01132709,4 L9.00227441,7.99603187 L9.00227328,7.9999947 C9.00321074,8.55227865 9.4516853,8.9992333 10.0039693,8.99829584 L11.96,8.99497564 L14,8.99751269 Z",
            opacity: ".6"
        }), r.createElement("path", {
            className: u,
            fill: i,
            fillRule: "nonzero",
            d: "M15.1,3.2 L15.1,2 C15.1,0.88 14.05,0 13,0 C11.95,0 10.9,0.88 10.9,2 L10.9,3.2 C10.45,3.2 10,3.68 10,4.16 L10,6.96 C10,7.52 10.45,8 10.9,8 L15.025,8 C15.55,8 16,7.52 16,7.04 L16,4.24 C16,3.68 15.55,3.2 15.1,3.2 Z M14,3 L12,3 L12,1.92857143 C12,1.35714286 12.4666667,1 13,1 C13.5333333,1 14,1.35714286 14,1.92857143 L14,3 Z"
        })))
    }, i.VideoLockIcon, void 0, {
        size: 16
    })
}