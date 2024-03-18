function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("118810"),
        s = n("446674"),
        r = n("206230"),
        o = n("719347");
    let u = e => {
        let {
            externalRef: t,
            autoPlay: n,
            playOnHover: u,
            responsive: d,
            mediaLayoutType: c,
            ...f
        } = e, p = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), m = l.useRef(null);

        function h() {
            var e;
            u && (null == m || null === (e = m.current) || void 0 === e || e.play())
        }

        function x() {
            var e;
            u && (null == m || null === (e = m.current) || void 0 === e || e.pause())
        }
        return l.useLayoutEffect(() => () => {
            let {
                current: e
            } = m;
            null != e && function(e) {
                e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                    (0, a.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, a.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                });
                try {
                    e.load()
                } catch (e) {}
            }(e)
        }, []), l.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(m.current)) : null != t && (t.current = m.current), () => {
            "function" == typeof t ? t(null) : null != t && (t.current = null)
        }), [t, m]), (0, i.jsx)("video", {
            ref: m,
            autoPlay: !p && !u && n,
            onMouseEnter: h,
            onMouseLeave: x,
            onFocus: h,
            onBlur: x,
            style: c === o.MediaLayoutType.MOSAIC ? {
                width: "100%",
                height: "100%",
                maxHeight: "inherit",
                objectFit: "cover"
            } : d ? function() {
                return {
                    maxWidth: f.width,
                    maxHeight: f.height,
                    width: "100%",
                    height: "100%"
                }
            }() : {},
            ...f
        })
    };
    var d = l.forwardRef((e, t) => (0, i.jsx)(u, {
        ...e,
        externalRef: t
    }))
}