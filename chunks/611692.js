function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("237026"),
        i = n("996757"),
        a = n("314187");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var s = Object.freeze({
        coordsMap: {},
        visibleSections: {},
        totalHeight: 0,
        gridData: {
            boundaries: [],
            coordinates: {}
        }
    });

    function l(e) {
        var t, n, l, c, f = e.sections,
            d = e.columns,
            _ = e.getItemKey,
            E = e.getItemHeight,
            p = e.getSectionHeight,
            m = e.chunkSize,
            y = void 0 === m ? 250 : m,
            I = e.getScrollerState,
            h = e.itemGutter,
            O = e.removeEdgeItemGutters,
            T = e.sectionGutter,
            S = e.padding,
            v = e.paddingVertical,
            g = e.paddingHorizontal,
            A = e.dir,
            b = (0, i.default)(),
            N = (0, r.useRef)(s);
        var R = (t = (0, r.useState)(function() {
                return new o.default
            }), n = 1, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0],
            C = I().offsetWidth,
            P = (0, a.default)({
                chunkSize: y,
                getScrollerState: I,
                forceUpdate: b
            }),
            D = P.dirty,
            L = P.chunkStart,
            M = P.chunkEnd,
            U = P.forceUpdateOnChunkChange;
        return N.current = (0, r.useMemo)(function() {
            return D > 0 ? N.current : (R.mergeProps({
                sections: f,
                columns: d,
                getItemKey: _,
                getItemHeight: E,
                getSectionHeight: p,
                bufferWidth: C,
                itemGutter: h,
                removeEdgeItemGutters: O,
                sectionGutter: T,
                padding: S,
                paddingVertical: v,
                paddingHorizontal: g,
                dir: A
            }), R.computeVisibleSections(Math.max(0, L * y), M * y), R.getState())
        }, [D, R, f, d, _, E, p, L, M, y, h, O, T, S, v, g, C, A]), l = function(e) {
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
        }({}, N.current), c = (c = {
            masonryComputer: R,
            forceUpdateOnChunkChange: U,
            forceUpdate: b
        }, c), Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(c)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e))
        }), l
    }
}