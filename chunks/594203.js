function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeOrientation: function() {
            return l
        },
        default: function() {
            return d
        }
    }), n("222007");
    var l, i, a, s, r = n("884691"),
        o = n("917351");

    function u(e) {
        return 2 === e || 3 === e ? 1 : 0
    }(a = l || (l = {}))[a.VERTICAL_TOP = 0] = "VERTICAL_TOP", a[a.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", a[a.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", a[a.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (s = i || (i = {}))[s.VERTICAL = 0] = "VERTICAL", s[s.HORIZONTAL = 1] = "HORIZONTAL";
    var d = e => {
        let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: l,
            minDimension: i,
            onElementResize: a,
            onElementResizeEnd: s,
            throttleDuration: d = 300,
            orientation: c,
            usePointerEvents: f = !1
        } = e, [m, p] = r.useState(!1), h = r.useRef(0), E = r.useRef(null == t ? 0 : t);
        return r.useLayoutEffect(() => {
            if (!m || null == n.current) return;

            function e(e) {
                let t = 1 === u(c) ? e.screenX : e.screenY,
                    n = 0 === c || 2 === c,
                    a = (t - h.current) * (n ? -1 : 1),
                    s = E.current + a;
                return (0, o.clamp)(s, null != i ? i : 0, null != l ? l : s)
            }
            let t = (0, o.throttle)(a, d),
                r = l => {
                    if (null == n.current) return null;
                    let i = e(l),
                        a = 1 === u(c) ? "width" : "height";
                    n.current.style[a] = "".concat(i, "px"), t(i)
                },
                g = t => {
                    p(!1);
                    let n = e(t);
                    a(n), null == s || s(n)
                },
                S = f ? "pointerup" : "mouseup",
                C = f ? "pointermove" : "mousemove",
                T = n.current.ownerDocument;
            return T.addEventListener(S, g), T.addEventListener(C, r), () => {
                T.removeEventListener(S, g), T.removeEventListener(C, r), t.cancel()
            }
        }, [m, a, i, l, c, n, d, s, f]), r.useCallback(e => {
            let t = 1 === u(c);
            null != n.current && (E.current = t ? n.current.offsetWidth : n.current.offsetHeight), h.current = t ? e.screenX : e.screenY, p(!0)
        }, [c, n])
    }
}