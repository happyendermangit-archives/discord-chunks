function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeOrientation: function() {
            return i
        },
        default: function() {
            return d
        }
    }), n("222007");
    var i, l, a, s, r = n("884691"),
        o = n("917351");

    function u(e) {
        return 2 === e || 3 === e ? 1 : 0
    }(a = i || (i = {}))[a.VERTICAL_TOP = 0] = "VERTICAL_TOP", a[a.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", a[a.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", a[a.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (s = l || (l = {}))[s.VERTICAL = 0] = "VERTICAL", s[s.HORIZONTAL = 1] = "HORIZONTAL";
    var d = e => {
        let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: i,
            minDimension: l,
            onElementResize: a,
            onElementResizeEnd: s,
            throttleDuration: d = 300,
            orientation: c,
            usePointerEvents: f = !1
        } = e, [m, p] = r.useState(!1), h = r.useRef(0), x = r.useRef(null == t ? 0 : t);
        return r.useLayoutEffect(() => {
            if (!m || null == n.current) return;

            function e(e) {
                let t = 1 === u(c) ? e.screenX : e.screenY,
                    n = 0 === c || 2 === c,
                    a = (t - h.current) * (n ? -1 : 1),
                    s = x.current + a;
                return (0, o.clamp)(s, null != l ? l : 0, null != i ? i : s)
            }
            let t = (0, o.throttle)(a, d),
                r = i => {
                    if (null == n.current) return null;
                    let l = e(i),
                        a = 1 === u(c) ? "width" : "height";
                    n.current.style[a] = "".concat(l, "px"), t(l)
                },
                E = t => {
                    p(!1);
                    let n = e(t);
                    a(n), null == s || s(n)
                },
                y = f ? "pointerup" : "mouseup",
                g = f ? "pointermove" : "mousemove",
                S = n.current.ownerDocument;
            return S.addEventListener(y, E), S.addEventListener(g, r), () => {
                S.removeEventListener(y, E), S.removeEventListener(g, r), t.cancel()
            }
        }, [m, a, l, i, c, n, d, s, f]), r.useCallback(e => {
            let t = 1 === u(c);
            null != n.current && (x.current = t ? n.current.offsetWidth : n.current.offsetHeight), h.current = t ? e.screenX : e.screenY, p(!0)
        }, [c, n])
    }
}