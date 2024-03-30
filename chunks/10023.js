function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeOrientation: function() {
            return i
        }
    });
    var r, o, i, a, u = n("470079"),
        s = n("392711");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        return 2 === e || 3 === e ? 1 : 0
    }(r = i || (i = {}))[r.VERTICAL_TOP = 0] = "VERTICAL_TOP", r[r.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", r[r.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", r[r.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (o = a || (a = {}))[o.VERTICAL = 0] = "VERTICAL", o[o.HORIZONTAL = 1] = "HORIZONTAL";
    t.default = function(e) {
        var t, n, r = e.initialElementDimension,
            o = e.resizableDomNodeRef,
            i = e.maxDimension,
            a = e.minDimension,
            f = e.onElementResize,
            d = e.onElementResizeEnd,
            _ = e.throttleDuration,
            E = void 0 === _ ? 300 : _,
            p = e.orientation,
            m = e.usePointerEvents,
            y = void 0 !== m && m;
        var I = (t = u.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            h = I[0],
            O = I[1],
            T = u.useRef(0),
            S = u.useRef(null == r ? 0 : r);
        return u.useLayoutEffect(function() {
            var e = function(e) {
                var t = 1 === c(p) ? e.screenX : e.screenY,
                    n = 0 === p || 2 === p,
                    r = (t - T.current) * (n ? -1 : 1),
                    o = S.current + r;
                return (0, s.clamp)(o, null != a ? a : 0, null != i ? i : o)
            };
            if (h && null != o.current) {
                var t = (0, s.throttle)(f, E),
                    n = function(n) {
                        if (null == o.current) return null;
                        var r = e(n),
                            i = 1 === c(p) ? "width" : "height";
                        o.current.style[i] = "".concat(r, "px"), t(r)
                    },
                    r = function(t) {
                        O(!1);
                        var n = e(t);
                        f(n), null == d || d(n)
                    },
                    u = y ? "pointerup" : "mouseup",
                    l = y ? "pointermove" : "mousemove",
                    _ = o.current.ownerDocument;
                return _.addEventListener(u, r), _.addEventListener(l, n),
                    function() {
                        _.removeEventListener(u, r), _.removeEventListener(l, n), t.cancel()
                    }
            }
        }, [h, f, a, i, p, o, E, d, y]), u.useCallback(function(e) {
            var t = 1 === c(p);
            null != o.current && (S.current = t ? o.current.offsetWidth : o.current.offsetHeight), T.current = t ? e.screenX : e.screenY, O(!0)
        }, [p, o])
    }
}