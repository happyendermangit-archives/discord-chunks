function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuInteractiveCompositeControl: function() {
            return s
        }
    });
    var i = n("37983"),
        r = n("884691");
    let s = r.forwardRef(function(e, t) {
        let {
            className: n,
            children: s
        } = e, a = r.useRef(null), o = r.useRef(null);
        return r.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                let t = a.current;
                null != t && (null == o.current && (o.current = t.querySelector('[tabindex="0"]')), null === (e = o.current) || void 0 === e || e.focus())
            },
            blur: () => {
                var e;
                return null === (e = o.current) || void 0 === e ? void 0 : e.blur()
            },
            activate: () => !1
        }), []), r.useLayoutEffect(() => {
            let e = a.current;
            if (null != e) return e.addEventListener("focusin", t), () => {
                e.removeEventListener("focusin", t)
            };

            function t(e) {
                o.current = e.target
            }
        }, []), (0, i.jsx)("div", {
            ref: a,
            className: n,
            style: {
                position: "relative"
            },
            children: s
        })
    })
}