function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSearchControl: function() {
            return E
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("227645"),
        l = n("718776"),
        u = n("242670"),
        d = n("945330"),
        c = n("229915"),
        _ = n("782340"),
        f = n("523634");
    let E = s.forwardRef(function(e, t) {
        var n, r, E;
        let {
            query: h,
            onChange: g,
            loading: m = !1,
            disabled: p = !1,
            placeholder: S = _.default.Messages.SEARCH,
            "aria-label": T
        } = e, v = s.useRef(null), I = s.useRef(null);
        s.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = I.current) || void 0 === e ? void 0 : e.focus()
            },
            blur: () => {
                var e;
                return null === (e = I.current) || void 0 === e ? void 0 : e.blur()
            },
            activate: () => !1
        }), []);
        let A = (n = h, r = m, E = g, r ? (0, i.jsx)("div", {
            className: f.iconContainer,
            children: (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.SPINNING_CIRCLE,
                className: a(f.icon)
            })
        }) : n.length > 0 ? (0, i.jsx)(o.Clickable, {
            "aria-label": _.default.Messages.SEARCH_CLEAR,
            className: a(f.iconContainer, f.iconClickable),
            onClick: e => {
                e.stopPropagation(), E("")
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
                className: f.icon,
                "aria-label": _.default.Messages.CLOSE
            })
        }) : (0, i.jsx)("div", {
            className: f.iconContainer,
            children: (0, i.jsx)(c.default, {
                width: 18,
                height: 18,
                className: f.icon,
                "aria-label": _.default.Messages.SEARCH
            })
        }));
        return (0, i.jsx)(l.FocusRing, {
            focusTarget: I,
            ringTarget: v,
            offset: {
                top: 2,
                bottom: 2,
                left: 4,
                right: 4
            },
            children: (0, i.jsxs)("div", {
                className: f.container,
                ref: v,
                children: [(0, i.jsx)("input", {
                    role: "searchbox",
                    "aria-busy": m,
                    ref: I,
                    className: f.input,
                    value: h,
                    onChange: e => g(e.currentTarget.value),
                    "aria-label": T,
                    placeholder: S,
                    disabled: p
                }), A]
            })
        })
    })
}