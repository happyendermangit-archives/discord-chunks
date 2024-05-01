function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuInteractiveCompositeControl: function() {
            return a
        }
    });
    var i = n("735250"),
        r = n("470079");
    let a = r.forwardRef(function(e, t) {
        let {
            className: n,
            children: a
        } = e, s = r.useRef(null), o = r.useRef(null);
        return r.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                let t = s.current;
                null != t && (null == o.current && (o.current = t.querySelector('[tabindex="0"]')), null === (e = o.current) || void 0 === e || e.focus())
            },
            blur: () => {
                var e;
                return null === (e = o.current) || void 0 === e ? void 0 : e.blur()
            },
            activate: () => !1
        }), []), r.useLayoutEffect(() => {
            let e = s.current;
            if (null != e) return e.addEventListener("focusin", t), () => {
                e.removeEventListener("focusin", t)
            };

            function t(e) {
                o.current = e.target
            }
        }, []), (0, i.jsx)("div", {
            ref: s,
            className: n,
            style: {
                position: "relative"
            },
            children: a
        })
    })
}