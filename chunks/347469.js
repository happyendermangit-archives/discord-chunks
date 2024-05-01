function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeOrientation: function() {
            return i
        }
    }), n("47120");
    var i, r, a, s, o = n("470079"),
        l = n("392711");

    function u(e) {
        return 2 === e || 3 === e ? 1 : 0
    }(a = i || (i = {}))[a.VERTICAL_TOP = 0] = "VERTICAL_TOP", a[a.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", a[a.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", a[a.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (s = r || (r = {}))[s.VERTICAL = 0] = "VERTICAL", s[s.HORIZONTAL = 1] = "HORIZONTAL";
    t.default = e => {
        let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: i,
            minDimension: r,
            onElementResize: a,
            onElementResizeEnd: s,
            throttleDuration: d = 300,
            orientation: _,
            usePointerEvents: c = !1
        } = e, [E, I] = o.useState(!1), T = o.useRef(0), f = o.useRef(null == t ? 0 : t);
        return o.useLayoutEffect(() => {
            if (!E || null == n.current) return;

            function e(e) {
                let t = 1 === u(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    a = (t - T.current) * (n ? -1 : 1),
                    s = f.current + a;
                return (0, l.clamp)(s, null != r ? r : 0, null != i ? i : s)
            }
            let t = (0, l.throttle)(a, d),
                o = i => {
                    if (null == n.current) return null;
                    let r = e(i),
                        a = 1 === u(_) ? "width" : "height";
                    n.current.style[a] = "".concat(r, "px"), t(r)
                },
                S = t => {
                    I(!1);
                    let n = e(t);
                    a(n), null == s || s(n)
                },
                h = c ? "pointerup" : "mouseup",
                A = c ? "pointermove" : "mousemove",
                m = n.current.ownerDocument;
            return m.addEventListener(h, S), m.addEventListener(A, o), () => {
                m.removeEventListener(h, S), m.removeEventListener(A, o), t.cancel()
            }
        }, [E, a, r, i, _, n, d, s, c]), o.useCallback(e => {
            let t = 1 === u(_);
            null != n.current && (f.current = t ? n.current.offsetWidth : n.current.offsetHeight), T.current = t ? e.screenX : e.screenY, I(!0)
        }, [_, n])
    }
}