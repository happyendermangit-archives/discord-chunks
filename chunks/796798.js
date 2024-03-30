function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createAdvancedScroller: function() {
            return c
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

    function l(e) {
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
    }

    function c(e, t, n) {
        var o = (0, u.getScrollbarSpecs)(e);
        return r.forwardRef(function(c, f) {
            var d, _ = c.children,
                E = c.className,
                p = c.dir,
                m = void 0 === p ? "ltr" : p,
                y = c.orientation,
                I = void 0 === y ? "vertical" : y,
                h = c.fade,
                O = c.customTheme,
                T = c.paddingFix,
                S = c.style,
                v = function(e, t) {
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
                }(c, ["children", "className", "dir", "orientation", "fade", "customTheme", "paddingFix", "style"]),
                g = (0, u.useUncachedScrollerState)(),
                A = g.scrollerRef,
                b = g.getScrollerState,
                N = (0, u.useScrollSpring)(A, I);
            r.useImperativeHandle(f, function() {
                return l({
                    getScrollerNode: function() {
                        return A.current
                    },
                    getScrollerState: b
                }, (0, u.getAnimatedScrollHelpers)(A, b, N, I))
            }, [A, b, I, N]);
            var R = (0, u.usePaddingFixes)({
                paddingFix: void 0 === T || T,
                orientation: I,
                dir: m,
                className: E,
                scrollerRef: A,
                specs: o
            });
            return r.createElement("div", l({
                ref: A,
                className: i()(E, (s(d = {}, e, !0), s(d, t, void 0 !== h && h), s(d, n, void 0 !== O && O), d)),
                style: (0, u.getMergedOrientationStyles)(S, I),
                dir: m
            }, v), r.createElement(a.FocusRingScope, {
                containerRef: A
            }, _, R))
        })
    }
}