function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanBadgeForce: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("153832"),
        a = n("331595"),
        o = n("249849");
    let l = ["#be0351", "#ff2c52", "#f0f0f0"],
        u = ["#ffb84b", "#ffe361", "#f0f0f0"],
        d = [.3, .4, 1],
        _ = [{
            base: 8,
            tint: 1
        }, {
            base: 3,
            tint: 1
        }, {
            base: 2,
            tint: 1
        }],
        c = [.3, .5, 1],
        E = [{
            base: 8,
            tint: 1
        }, {
            base: 3,
            tint: 1
        }, {
            base: 2,
            tint: 1
        }],
        I = e => {
            let {
                width: t = 24,
                height: n = 24,
                primaryTintColor: I,
                secondaryTintColor: T,
                ...f
            } = e, S = r.useMemo(() => "badge-force-gradient-".concat((0, s.v4)()), []), {
                primaryColorsTransformed: h,
                secondaryColorsTransformed: A
            } = (0, o.getTransformedBadgeColors)({
                primaryBaseColors: l,
                primaryTintColor: I,
                primaryTintLuminances: d,
                primaryLuminanceWeights: _,
                secondaryBaseColors: u,
                secondaryTintColor: T,
                secondaryTintLuminances: c,
                secondaryLuminanceWeights: E
            });
            return (0, i.jsxs)("svg", {
                ...(0, a.default)(f),
                width: t,
                height: n,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z",
                    fill: A[2]
                }), (0, i.jsx)("path", {
                    d: "M15 3h-4v1h4V3Z",
                    fill: h[2]
                }), (0, i.jsx)("path", {
                    d: "M7 15H4v1h3v-1Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z",
                    fill: A[1]
                }), (0, i.jsx)("path", {
                    d: "M7 14H4v1h3v-1Z",
                    fill: A[0]
                }), (0, i.jsx)("path", {
                    d: "M11 14H7v1h4v-1Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z",
                    fill: A[1]
                }), (0, i.jsx)("path", {
                    d: "M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z",
                    fill: A[2]
                }), (0, i.jsx)("path", {
                    d: "M5 3H4v2h1V3Z",
                    fill: A[0]
                }), (0, i.jsx)("path", {
                    d: "M11 3h-1v1h1V3Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M4 2H3v1h1V2Z",
                    fill: A[2]
                }), (0, i.jsx)("path", {
                    d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z",
                    fill: A[0]
                }), (0, i.jsx)("path", {
                    d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z",
                    fill: "url(#".concat(S, ")")
                }), (0, i.jsx)("path", {
                    d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z",
                    fill: h[1]
                }), (0, i.jsx)("path", {
                    d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z",
                    fill: h[0]
                }), (0, i.jsx)("path", {
                    d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z",
                    fill: A[2]
                }), (0, i.jsx)("path", {
                    d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z",
                    fill: h[2]
                }), (0, i.jsx)("path", {
                    d: "M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z",
                    fill: "#000"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("radialGradient", {
                        id: S,
                        cx: "0.75",
                        cy: "0.5",
                        r: "1",
                        fx: "0.75",
                        fy: "0.5",
                        children: [(0, i.jsx)("stop", {
                            stopColor: h[1],
                            offset: "30%"
                        }), (0, i.jsx)("stop", {
                            stopColor: A[1],
                            offset: "70%"
                        })]
                    })
                })]
            })
        }
}