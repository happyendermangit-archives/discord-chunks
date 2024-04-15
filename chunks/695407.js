function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSearchControl: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("1561"),
        l = n("84735"),
        u = n("922770"),
        d = n("465670"),
        _ = n("664800"),
        c = n("689938"),
        E = n("313015");
    let I = r.forwardRef(function(e, t) {
        var n, s, I;
        let {
            query: T,
            onChange: f,
            loading: S = !1,
            disabled: A = !1,
            placeholder: h = c.default.Messages.SEARCH,
            "aria-label": m
        } = e, N = r.useRef(null), O = r.useRef(null);
        r.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = O.current) || void 0 === e ? void 0 : e.focus()
            },
            blur: () => {
                var e;
                return null === (e = O.current) || void 0 === e ? void 0 : e.blur()
            },
            activate: () => !1
        }), []);
        let p = (n = T, s = S, I = f, s ? (0, i.jsx)("div", {
            className: E.iconContainer,
            children: (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.SPINNING_CIRCLE,
                className: a()(E.icon)
            })
        }) : n.length > 0 ? (0, i.jsx)(o.Clickable, {
            "aria-label": c.default.Messages.SEARCH_CLEAR,
            className: a()(E.iconContainer, E.iconClickable),
            onClick: e => {
                e.stopPropagation(), I("")
            },
            onMouseDown: e => {
                e.preventDefault(), e.stopPropagation()
            },
            focusProps: {
                offset: {
                    top: -3,
                    right: -3,
                    bottom: -3,
                    left: -3
                }
            },
            children: (0, i.jsx)(d.default, {
                width: 18,
                height: 18,
                className: E.icon,
                "aria-label": c.default.Messages.CLOSE
            })
        }) : (0, i.jsx)("div", {
            className: E.iconContainer,
            children: (0, i.jsx)(_.default, {
                width: 18,
                height: 18,
                className: E.icon,
                "aria-label": c.default.Messages.SEARCH
            })
        }));
        return (0, i.jsx)(l.FocusRing, {
            focusTarget: O,
            ringTarget: N,
            offset: {
                top: 2,
                bottom: 2,
                left: 4,
                right: 4
            },
            children: (0, i.jsxs)("div", {
                className: E.container,
                ref: N,
                children: [(0, i.jsx)("input", {
                    role: "searchbox",
                    "aria-busy": S,
                    ref: O,
                    className: E.input,
                    value: T,
                    onChange: e => f(e.currentTarget.value),
                    "aria-label": m,
                    placeholder: h,
                    disabled: A
                }), p]
            })
        })
    })
}