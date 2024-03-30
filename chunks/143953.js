function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("14149"),
        u = n("605094");

    function s(e) {
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
    }

    function l(e, t) {
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
    }
    var c = {
            VERTICAL: u.vertical,
            HORIZONTAL: a.horizontal,
            HORIZONTAL_REVERSE: a.horizontalReverse
        },
        f = {
            START: u.justifyStart,
            END: u.justifyEnd,
            CENTER: u.justifyCenter,
            BETWEEN: u.justifyBetween,
            AROUND: u.justifyAround
        },
        d = {
            START: u.alignStart,
            END: u.alignEnd,
            CENTER: u.alignCenter,
            STRETCH: u.alignStretch,
            BASELINE: u.alignBaseline
        },
        _ = {
            NO_WRAP: u.noWrap,
            WRAP: u.wrap,
            WRAP_REVERSE: u.wrapReverse
        },
        E = function(e) {
            var t = e.children,
                n = e.className,
                o = e.shrink,
                u = e.grow,
                c = e.basis,
                f = e.style,
                d = e.wrap,
                _ = l(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
                E = s({
                    className: n = null != n ? n : a.flexChild,
                    style: s({
                        flexGrow: u,
                        flexShrink: o,
                        flexBasis: c
                    }, f)
                }, _);
            if (!(void 0 !== d && d) && "string" != typeof t && 1 === r.Children.count(t)) {
                var p = r.Children.only(t);
                return E.style = s({}, E.style, p.props.style), E.className = i()(p.props.className, n), r.cloneElement(p, E)
            }
            return r.createElement("div", E, t)
        };
    E.defaultProps = {
        shrink: 1,
        grow: 1,
        basis: "auto",
        wrap: !1
    };
    var p = function(e) {
        var t = e.children,
            n = e.className,
            o = e.direction,
            u = void 0 === o ? c.HORIZONTAL : o,
            E = e.justify,
            p = void 0 === E ? f.START : E,
            m = e.align,
            y = void 0 === m ? d.STRETCH : m,
            I = e.wrap,
            h = void 0 === I ? _.NO_WRAP : I,
            O = e.shrink,
            T = e.grow,
            S = e.basis,
            v = e.style,
            g = l(e, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style"]);
        return r.createElement("div", s({
            style: s({
                flexShrink: O,
                flexGrow: T,
                flexBasis: S
            }, v),
            className: i()(a.flex, u, p, y, h, n)
        }, g), t)
    };
    p.defaultProps = {
        shrink: 1,
        grow: 1,
        basis: "auto"
    }, p.Child = E, p.Direction = c, p.Align = d, p.Justify = f, p.Wrap = _, t.default = p
}