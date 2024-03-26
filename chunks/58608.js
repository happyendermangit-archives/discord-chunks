function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return c
        }
    });
    var r = i("37983"),
        n = i("884691"),
        u = i("118810"),
        s = i("446674"),
        o = i("206230"),
        l = i("719347");
    let a = e => {
        let {
            externalRef: t,
            autoPlay: i,
            playOnHover: a,
            responsive: c,
            mediaLayoutType: d,
            ...f
        } = e, h = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = n.useRef(null);

        function E() {
            var e;
            a && (null == p || null === (e = p.current) || void 0 === e || e.play())
        }

        function m() {
            var e;
            a && (null == p || null === (e = p.current) || void 0 === e || e.pause())
        }
        return n.useLayoutEffect(() => () => {
            let {
                current: e
            } = p;
            null != e && function(e) {
                e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                    (0, u.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, u.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                });
                try {
                    e.load()
                } catch (e) {}
            }(e)
        }, []), n.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(p.current)) : null != t && (t.current = p.current), () => {
            "function" == typeof t ? t(null) : null != t && (t.current = null)
        }), [t, p]), (0, r.jsx)("video", {
            ref: p,
            autoPlay: !h && !a && i,
            onMouseEnter: E,
            onMouseLeave: m,
            onFocus: E,
            onBlur: m,
            style: d === l.MediaLayoutType.MOSAIC ? {
                width: "100%",
                height: "100%",
                maxHeight: "inherit",
                objectFit: "cover"
            } : c ? function() {
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
    var c = n.forwardRef((e, t) => (0, r.jsx)(a, {
        ...e,
        externalRef: t
    }))
}