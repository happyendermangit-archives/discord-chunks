function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("994500"),
        l = n("33940");
    (r = o || (o = {})).LEFT = "LEFT", r.RIGHT = "RIGHT", r.UP = "UP", r.DOWN = "DOWN", r.UP_LEFT = "UP_LEFT", r.DOWN_RIGHT = "DOWN_RIGHT";
    var c = function(e) {
        var t, n, r = e.width,
            o = e.height,
            a = e.color,
            c = e.direction,
            f = e.foreground,
            d = e.className,
            _ = e.title,
            E = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
        return i.createElement("svg", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, (0, s.default)(E)), n = (n = {
            width: void 0 === r ? 24 : r,
            height: void 0 === o ? 24 : o,
            className: u()(d, function(e) {
                switch (e) {
                    case "LEFT":
                        return l.left;
                    case "RIGHT":
                        return l.right;
                    case "UP":
                        return null;
                    case "DOWN":
                        return l.down;
                    case "UP_LEFT":
                        return l.upLeft;
                    case "DOWN_RIGHT":
                        return l.downRight;
                    default:
                        throw Error("Invalid Direction ".concat(e))
                }
            }(c)),
            viewBox: "0 0 24 24"
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), null != _ ? i.createElement("title", null, _) : null, i.createElement("polygon", {
            className: f,
            fill: void 0 === a ? "currentColor" : a,
            fillRule: "nonzero",
            points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
        }))
    };
    c.Directions = o, t.default = c
}