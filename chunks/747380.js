function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("972228");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 16,
            height: n = 16,
            color: r = "currentColor",
            className: a,
            foreground: s,
            background: o
        } = e;
        return (0, i.jsx)("svg", {
            className: a,
            width: t,
            height: n,
            viewBox: "0 0 16 16",
            children: (0, i.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [(0, i.jsx)("path", {
                    className: o,
                    fill: r,
                    d: "M14,8.99751269 L14,11.6666667 L11.3333333,9 L11.3333333,11.3333333 C11.3333333,11.7 11.0333333,12 10.6666667,12 L2.66666667,12 C2.3,12 2,11.7 2,11.3333333 L2,4.66666667 C2,4.3 2.3,4 2.66666667,4 L9.01132709,4 L9.00227441,7.99603187 L9.00227328,7.9999947 C9.00321074,8.55227865 9.4516853,8.9992333 10.0039693,8.99829584 L11.96,8.99497564 L14,8.99751269 Z",
                    opacity: ".6"
                }), (0, i.jsx)("path", {
                    className: s,
                    fill: r,
                    fillRule: "nonzero",
                    d: "M15.1,3.2 L15.1,2 C15.1,0.88 14.05,0 13,0 C11.95,0 10.9,0.88 10.9,2 L10.9,3.2 C10.45,3.2 10,3.68 10,4.16 L10,6.96 C10,7.52 10.45,8 10.9,8 L15.025,8 C15.55,8 16,7.52 16,7.04 L16,4.24 C16,3.68 15.55,3.2 15.1,3.2 Z M14,3 L12,3 L12,1.92857143 C12,1.35714286 12.4666667,1 13,1 C13.5333333,1 14,1.35714286 14,1.92857143 L14,3 Z"
                })]
            })
        })
    }, a.VideoLockIcon, void 0, {
        size: 16
    })
}