function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("665468"),
        u = n("966896"),
        s = n("90389"),
        l = n("294538"),
        c = n("784184"),
        f = n("994500"),
        d = n("715837");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                _(e, t, n[t])
            })
        }
        return e
    }
    var p = {
            UP: d.directionUp,
            RIGHT: d.directionRight,
            DOWN: d.directionDown,
            LEFT: d.directionLeft
        },
        m = function(e) {
            var t = e.direction,
                n = void 0 === t ? p.DOWN : t,
                o = e.width,
                m = void 0 === o ? 24 : o,
                y = e.height,
                I = void 0 === y ? 24 : y,
                h = e.color,
                O = void 0 === h ? "currentColor" : h,
                T = e.transition,
                S = void 0 === T ? d.transition : T,
                v = e.className,
                g = e.foreground,
                A = e.expanded,
                b = function(e, t) {
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
                }(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                N = (0, c.useRedesignIconContext)().enabled,
                R = n;
            if (!0 === A ? R = p.DOWN : !1 === A && (R = p.RIGHT), N) {
                var C, P, D, L = (_(D = {}, p.UP, l.ChevronSmallUpIcon), _(D, p.DOWN, a.ChevronSmallDownIcon), _(D, p.LEFT, u.ChevronSmallLeftIcon), _(D, p.RIGHT, s.ChevronSmallRightIcon), D)[R];
                return r.createElement(L, (C = E({}, b), P = (P = {
                    className: v,
                    width: m,
                    height: I,
                    color: O,
                    colorClass: g
                }, P), Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(P)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(P)).forEach(function(e) {
                    Object.defineProperty(C, e, Object.getOwnPropertyDescriptor(P, e))
                }), C))
            }
            return r.createElement("svg", E({
                className: i()(v, S, R),
                width: m,
                height: I,
                viewBox: "0 0 24 24"
            }, (0, f.default)(b)), r.createElement("path", {
                className: g,
                fill: "none",
                stroke: O,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7 10L12 15 17 10",
                "aria-hidden": !0
            }))
        };
    m.Directions = p, t.default = m
}