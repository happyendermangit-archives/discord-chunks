function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanBadgeToadstool: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("331595"),
        s = n("249849");
    let a = ["#be0351", "#ff2c52"],
        o = ["#ffb84b", "#ffe361"],
        l = [.12, .25],
        u = [{
            base: 5,
            tint: 1
        }, {
            base: 4,
            tint: 1
        }],
        d = [.4, .8],
        _ = [{
            base: 5,
            tint: 1
        }, {
            base: 4,
            tint: 1
        }],
        c = e => {
            let {
                width: t = 24,
                height: n = 24,
                primaryTintColor: c,
                secondaryTintColor: E,
                ...I
            } = e, {
                primaryColorsTransformed: T,
                secondaryColorsTransformed: f
            } = (0, s.getTransformedBadgeColors)({
                primaryBaseColors: a,
                primaryTintColor: c,
                primaryTintLuminances: l,
                primaryLuminanceWeights: u,
                secondaryBaseColors: o,
                secondaryTintColor: E,
                secondaryTintLuminances: d,
                secondaryLuminanceWeights: _
            });
            return (0, i.jsxs)("svg", {
                ...(0, r.default)(I),
                width: t,
                height: n,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z",
                    fill: f[1]
                }), (0, i.jsx)("path", {
                    d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z",
                    fill: T[1]
                }), (0, i.jsx)("path", {
                    d: "M12 0H4v1h8V0Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M2 7V3H1v6h2V7H2Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M15 3h-1v6h1V3Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    opacity: ".5",
                    d: "M15 6h-1v2h1V6Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M6 10H5v2h1v-2Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z",
                    fill: f[0]
                }), (0, i.jsx)("path", {
                    d: "M5 12H4v2h1v-2Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M8 6H6v2h2V6Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    opacity: ".5",
                    d: "M8 7H6v1h2V7Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M10 8H6v1h4V8Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M10 9H6v1h4V9Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M2 2H1v1h1V2Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M5 3H4v1h1V3Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z",
                    fill: "#000"
                })]
            })
        }
}