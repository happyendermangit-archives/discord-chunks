function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCheckboxItem: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("1561"),
        l = n("761224"),
        u = n("743236"),
        d = n("448239"),
        _ = n("247442"),
        c = n("939350"),
        E = n("942610");

    function I(e) {
        let {
            color: t = "default",
            label: n,
            checked: s,
            subtext: I,
            disabled: T,
            isFocused: f,
            menuItemProps: S,
            action: h,
            className: A,
            focusedClassName: m
        } = e, N = r.useRef(null);
        return r.useEffect(() => {
            f && (0, u.ensureItemVisible)(N)
        }, [f]), (0, i.jsxs)(o.Clickable, {
            innerRef: N,
            className: a()(E.item, E.labelContainer, c.MENU_ITEM_COLORS[t], A, {
                [E.disabled]: T,
                [E.focused]: f,
                [null != m ? m : ""]: f
            }),
            onClick: T ? void 0 : h,
            ...S,
            "aria-checked": s,
            "aria-disabled": T,
            children: [(0, i.jsxs)("div", {
                className: E.label,
                children: [(0, l.renderSubnode)(n, e), null != I && (0, i.jsx)("div", {
                    className: E.subtext,
                    children: I
                })]
            }), (0, i.jsx)("div", {
                className: E.iconContainer,
                children: s ? (0, i.jsx)(_.default, {
                    className: E.icon,
                    background: E.checkbox,
                    foreground: E.check
                }) : (0, i.jsx)(d.default, {
                    className: E.icon,
                    foreground: E.__invalid_checkboxEmpty
                })
            })]
        })
    }
}