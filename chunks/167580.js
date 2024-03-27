function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("153832"),
        a = n("960259"),
        o = n("559397"),
        l = n("325767");
    t.default = (0, a.replaceIcon)(function(e) {
        let {
            width: t = 16,
            height: n = 16,
            color: a = "currentColor",
            foreground: o,
            ...u
        } = e, d = r.useRef((0, s.v4)());
        return (0, i.jsxs)("svg", {
            ...(0, l.default)(u),
            width: t,
            height: n,
            viewBox: "0 0 24 25",
            children: [(0, i.jsxs)("g", {
                clipPath: "url(".concat(d.current, ")"),
                children: [(0, i.jsx)("path", {
                    d: "M21 0.994141V3.99414H24V5.99414H21V8.99414H19V5.99414H16V3.99414H19V0.994141H21Z",
                    fill: a,
                    className: o
                }), (0, i.jsx)("path", {
                    d: "M14 12.9941C14 14.0987 13.1046 14.9941 12 14.9941C10.8954 14.9941 10 14.0987 10 12.9941C10 11.8896 10.8954 10.9941 12 10.9941C13.1046 10.9941 14 11.8896 14 12.9941Z",
                    fill: a,
                    className: o
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 11.9941C20.6987 11.9941 21.3734 11.8918 22.0101 11.7012C22.6497 12.4666 23 12.9941 23 12.9941C23 12.9941 18.352 19.9941 12 19.9941C5.648 19.9941 1 12.9941 1 12.9941C1 12.9941 5.648 5.99414 12 5.99414C12.3661 5.99414 12.7266 6.0174 13.0808 6.06123C13.5947 9.42075 16.4968 11.9941 20 11.9941ZM8 12.9941C8 15.2041 9.791 16.9941 12 16.9941C14.209 16.9941 16 15.2041 16 12.9941C16 10.7841 14.209 8.99414 12 8.99414C9.791 8.99414 8 10.7841 8 12.9941Z",
                    fill: a,
                    className: o
                })]
            }), (0, i.jsx)("defs", {
                children: (0, i.jsx)("clipPath", {
                    id: d.current,
                    children: (0, i.jsx)("rect", {
                        width: "24",
                        height: "24",
                        fill: a,
                        className: o,
                        transform: "translate(0 0.994141)"
                    })
                })
            })]
        })
    }, o.EyePlusIcon, void 0, {
        size: 16
    })
}