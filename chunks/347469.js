function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeOrientation: function() {
            return i
        }
    }), n("47120");
    var i, r, s, a, o = n("470079"),
        l = n("392711");

    function u(e) {
        return 2 === e || 3 === e ? 1 : 0
    }(s = i || (i = {}))[s.VERTICAL_TOP = 0] = "VERTICAL_TOP", s[s.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", s[s.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", s[s.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (a = r || (r = {}))[a.VERTICAL = 0] = "VERTICAL", a[a.HORIZONTAL = 1] = "HORIZONTAL";
    t.default = e => {
        let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: i,
            minDimension: r,
            onElementResize: s,
            onElementResizeEnd: a,
            throttleDuration: d = 300,
            orientation: _,
            usePointerEvents: c = !1
        } = e, [E, I] = o.useState(!1), T = o.useRef(0), f = o.useRef(null == t ? 0 : t);
        return o.useLayoutEffect(() => {
            if (!E || null == n.current) return;

            function e(e) {
                let t = 1 === u(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    s = (t - T.current) * (n ? -1 : 1),
                    a = f.current + s;
                return (0, l.clamp)(a, null != r ? r : 0, null != i ? i : a)
            }
            let t = (0, l.throttle)(s, d),
                o = i => {
                    if (null == n.current) return null;
                    let r = e(i),
                        s = 1 === u(_) ? "width" : "height";
                    n.current.style[s] = "".concat(r, "px"), t(r)
                },
                S = t => {
                    I(!1);
                    let n = e(t);
                    s(n), null == a || a(n)
                },
                A = c ? "pointerup" : "mouseup",
                h = c ? "pointermove" : "mousemove",
                m = n.current.ownerDocument;
            return m.addEventListener(A, S), m.addEventListener(h, o), () => {
                m.removeEventListener(A, S), m.removeEventListener(h, o), t.cancel()
            }
        }, [E, s, r, i, _, n, d, a, c]), o.useCallback(e => {
            let t = 1 === u(_);
            null != n.current && (f.current = t ? n.current.offsetWidth : n.current.offsetHeight), T.current = t ? e.screenX : e.screenY, I(!0)
        }, [_, n])
    }
}