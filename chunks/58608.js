function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983"),
        i = n("884691"),
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
        } = e, m = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), p = i.useRef(null);

        function h() {
            var e;
            u && (null == p || null === (e = p.current) || void 0 === e || e.play())
        }

        function E() {
            var e;
            u && (null == p || null === (e = p.current) || void 0 === e || e.pause())
        }
        return i.useLayoutEffect(() => () => {
            let {
                current: e
            } = p;
            null != e && function(e) {
                e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                    (0, a.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, a.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                });
                try {
                    e.load()
                } catch (e) {}
            }(e)
        }, []), i.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(p.current)) : null != t && (t.current = p.current), () => {
            "function" == typeof t ? t(null) : null != t && (t.current = null)
        }), [t, p]), (0, l.jsx)("video", {
            ref: p,
            autoPlay: !m && !u && n,
            onMouseEnter: h,
            onMouseLeave: E,
            onFocus: h,
            onBlur: E,
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
    var d = i.forwardRef((e, t) => (0, l.jsx)(u, {
        ...e,
        externalRef: t
    }))
}