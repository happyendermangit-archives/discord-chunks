function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i, r, s = n("735250");
    n("470079");
    var a = n("120356"),
        o = n.n(a),
        l = n("325767"),
        u = n("731253");
    (r = i || (i = {})).LEFT = "LEFT", r.RIGHT = "RIGHT", r.UP = "UP", r.DOWN = "DOWN", r.UP_LEFT = "UP_LEFT", r.DOWN_RIGHT = "DOWN_RIGHT";
    let d = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: i = "currentColor",
            direction: r,
            foreground: a,
            className: d,
            title: _,
            ...c
        } = e;
        return (0, s.jsxs)("svg", {
            ...(0, l.default)(c),
            width: t,
            height: n,
            className: o()(d, function(e) {
                switch (e) {
                    case "LEFT":
                        return u.left;
                    case "RIGHT":
                        return u.right;
                    case "UP":
                        return null;
                    case "DOWN":
                        return u.down;
                    case "UP_LEFT":
                        return u.upLeft;
                    case "DOWN_RIGHT":
                        return u.downRight;
                    default:
                        throw Error("Invalid Direction ".concat(e))
                }
            }(r)),
            viewBox: "0 0 24 24",
            children: [null != _ ? (0, s.jsx)("title", {
                children: _
            }) : null, (0, s.jsx)("polygon", {
                className: a,
                fill: i,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
            })]
        })
    };
    d.Directions = i, t.default = d
}