function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanBadgeSun: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("331595"),
        s = n("249849");
    let a = ["#ffb84b", "#ffe361", "#f0f0f0"],
        o = ["#ba3500", "#fd6214", "#f0f0f0"],
        l = [.07, .45, 1],
        u = [{
            base: 4,
            tint: 1
        }, {
            base: 3,
            tint: 1
        }, {
            base: 8,
            tint: 1
        }, {
            base: 8,
            tint: 1
        }],
        d = [.1, .4, 1],
        _ = [{
            base: 2,
            tint: 1
        }, {
            base: 1,
            tint: 2
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
                    d: "M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z",
                    fill: T[1]
                }), (0, i.jsx)("path", {
                    d: "M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M10 1H1v1h9V1Z",
                    fill: T[2]
                }), (0, i.jsx)("path", {
                    d: "M14 6h-3v1h3V6ZM11 1h-1v1h1V1Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z",
                    fill: f[2]
                }), (0, i.jsx)("path", {
                    d: "M14 5h-3v1h3V5Z",
                    fill: f[0]
                }), (0, i.jsx)("path", {
                    d: "M1 1H0v1h1V1ZM4 3H3v1h1V3ZM5 6H4v1h1V6ZM15 1h-1v1h1V1ZM16 2h-1v3h1V2Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M15 2h-1v3h1V2Z",
                    fill: f[0]
                }), (0, i.jsx)("path", {
                    d: "M16 6h-1v6h1V6Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M15 6h-1v6h1V6Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M15 5h-1v1h1V5ZM10 2H9v3h1V2ZM11 5h-1v1h1V5Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M11 4h-1v1h1V4Z",
                    fill: f[0]
                }), (0, i.jsx)("path", {
                    d: "M7 13H6v1h1v-1Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M8 12H7v1h1v-1Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M5 7H4v1h1V7ZM6 6H5v1h1V6Z",
                    fill: T[2]
                }), (0, i.jsx)("path", {
                    d: "M7 5H6v1h1V5ZM8 4H7v1h1V4Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z",
                    fill: T[2]
                }), (0, i.jsx)("path", {
                    d: "M11 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM13 10h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 12h-1v1h1v-1Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M14 2h-3v3h3V2Z",
                    fill: f[1]
                })]
            })
        }
}