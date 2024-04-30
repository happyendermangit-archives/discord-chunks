function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanBadgeCompass: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("331595"),
        s = n("249849");
    let a = ["#be0351", "#ff2c52", "#f0f0f0"],
        o = ["#4282d8", "#47baff", "#f0f0f0"],
        l = [.1, .25, 1],
        u = [{
            base: 3,
            tint: 1
        }, {
            base: 2,
            tint: 1
        }, {
            base: 2,
            tint: 1
        }],
        d = [.1, .25, 1],
        _ = [{
            base: 3,
            tint: 1
        }, {
            base: 2,
            tint: 1
        }, {
            base: 2,
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
                    d: "M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z",
                    fill: f[1]
                }), (0, i.jsx)("path", {
                    d: "M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z",
                    fill: T[1]
                }), (0, i.jsx)("path", {
                    d: "M7 0v1h2V0H7Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M7 1v1h2V1H7Z",
                    fill: f[2]
                }), (0, i.jsx)("path", {
                    d: "M7 6v1h2V6H7Z",
                    fill: f[0]
                }), (0, i.jsx)("path", {
                    d: "M7 1H6v2h1V1ZM1 7H0v2h1V7ZM3 7V6H1v1h2ZM6 3H5v1h1V3Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M6 4H5v1h1V4ZM7 3H6v1h1V3Z",
                    fill: f[2]
                }), (0, i.jsx)("path", {
                    d: "M7 9v1h2V9H7Z",
                    fill: f[2]
                }), (0, i.jsx)("path", {
                    d: "M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M7 10H6v1h1v-1Z",
                    fill: f[2]
                }), (0, i.jsx)("path", {
                    d: "M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z",
                    fill: T[0]
                }), (0, i.jsx)("path", {
                    d: "M8 4H7v1h1V4Z",
                    fill: f[2]
                }), (0, i.jsx)("path", {
                    d: "M10 5H9v1h1V5ZM11 4h-1v1h1V4Z",
                    fill: f[0]
                }), (0, i.jsx)("path", {
                    d: "M12 10h1V9h2V7h-2V6h-1V5h-1v1h-1v1H9v2h1v1h1v1h1v-1Z",
                    fill: "#C7C7C7"
                }), (0, i.jsx)("path", {
                    d: "M15 7h-1v2h1V7Z",
                    fill: "#707070"
                }), (0, i.jsx)("path", {
                    d: "M12 6V5h-1v1h1ZM11 7V6h-1v1h1Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M11 10V9h-1v1h1ZM10 9V8H9v1h1ZM13 10V9h-1v1h1ZM12 11v-1h-1v1h1Z",
                    fill: "#707070"
                }), (0, i.jsx)("path", {
                    d: "M4 10H3V9H1V7h2V6h1V5h1v1h1v1h1v2H6v1H5v1H4v-1Z",
                    fill: "#C7C7C7"
                }), (0, i.jsx)("path", {
                    d: "M1 9h1V7H1v2Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M6 9h1V7H6v2Z",
                    fill: "#707070"
                }), (0, i.jsx)("path", {
                    d: "M5 6V5H4v1h1ZM4 7V6H3v1h1ZM5 8V7H4v1h1Z",
                    fill: "#fff"
                }), (0, i.jsx)("path", {
                    d: "M6 10V9H5v1h1ZM5 11v-1H4v1h1Z",
                    fill: "#707070"
                }), (0, i.jsx)("path", {
                    d: "M5 4H4v1h1V4ZM6 5H5v1h1V5ZM7 6H6v1h1V6ZM9 7H7v2h2V7ZM10 9H9v1h1V9ZM11 10h-1v1h1v-1ZM4 5H3v1h1V5ZM9 16v-1H7v1h2ZM7 13H6v2h1v-2ZM1 9v1h2V9H1ZM6 12H5v1h1v-1ZM5 11H4v1h1v-1ZM4 10H3v1h1v-1ZM9 3h1V1H9v2ZM15 9h1V7h-1v2ZM15 7V6h-2v1h2ZM10 4h1V3h-1v1ZM11 5h1V4h-1v1ZM10 6h1V5h-1v1ZM9 7h1V6H9v1ZM6 10h1V9H6v1ZM5 11h1v-1H5v1Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    d: "M11 5h1V4h-1v1ZM12 6h1V5h-1v1ZM9 15h1v-2H9v2ZM13 9v1h2V9h-2ZM10 13h1v-1h-1v1ZM11 12h1v-1h-1v1ZM12 11h1v-1h-1v1Z",
                    fill: "#000"
                })]
            })
        }
}