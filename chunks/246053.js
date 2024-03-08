function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("70102");
    var i, l, a = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        o = n("75196"),
        u = n("774889");
    (l = i || (i = {})).LEFT = "LEFT", l.RIGHT = "RIGHT", l.UP = "UP", l.DOWN = "DOWN", l.UP_LEFT = "UP_LEFT", l.DOWN_RIGHT = "DOWN_RIGHT";
    let d = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: i = "currentColor",
            direction: l,
            foreground: s,
            className: d,
            title: c,
            ...f
        } = e;
        return (0, a.jsxs)("svg", {
            ...(0, o.default)(f),
            width: t,
            height: n,
            className: r(d, function(e) {
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
            }(l)),
            viewBox: "0 0 24 24",
            children: [null != c ? (0, a.jsx)("title", {
                children: c
            }) : null, (0, a.jsx)("polygon", {
                className: s,
                fill: i,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
            })]
        })
    };
    d.Directions = i;
    var c = d
}