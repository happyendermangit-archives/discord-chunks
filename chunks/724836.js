function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createScroller: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("789978"),
        u = n("714417");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e, t) {
        var n = (0, u.getScrollbarSpecs)(e);
        return r.forwardRef(function(o, l) {
            var c, f = o.children,
                d = o.className,
                _ = o.dir,
                E = void 0 === _ ? "ltr" : _,
                p = o.orientation,
                m = void 0 === p ? "vertical" : p,
                y = o.paddingFix,
                I = o.fade,
                h = (o.onScroll, o.style),
                O = function(e, t) {
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
                }(o, ["children", "className", "dir", "orientation", "paddingFix", "fade", "onScroll", "style"]),
                T = r.useRef(null),
                S = (0, u.usePaddingFixes)({
                    paddingFix: void 0 === y || y,
                    orientation: m,
                    dir: E,
                    className: d,
                    scrollerRef: T,
                    specs: n
                });
            return r.createElement("div", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        s(e, t, n[t])
                    })
                }
                return e
            }({
                ref: function(e) {
                    "function" == typeof l ? l(e) : null != l && (l.current = e), T.current = e
                },
                className: i()(d, (s(c = {}, e, !0), s(c, t, void 0 !== I && I), c)),
                style: (0, u.getMergedOrientationStyles)(h, m),
                dir: E
            }, O), r.createElement(a.FocusRingScope, {
                containerRef: T
            }, f, S))
        })
    }
}