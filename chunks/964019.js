function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCheckboxItem: function() {
            return p
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("227645"),
        l = n("199285"),
        u = n("697917"),
        c = n("36562"),
        d = n("781291"),
        f = n("389802"),
        E = n("639826");

    function p(e) {
        let {
            color: t = "default",
            label: n,
            checked: s,
            subtext: p,
            disabled: h,
            isFocused: _,
            menuItemProps: S,
            action: m,
            className: T,
            focusedClassName: g
        } = e, I = r.useRef(null);
        return r.useEffect(() => {
            _ && (0, u.ensureItemVisible)(I)
        }, [_]), (0, i.jsxs)(o.Clickable, {
            innerRef: I,
            className: a(E.item, E.labelContainer, f.MENU_ITEM_COLORS[t], T, {
                [E.disabled]: h,
                [E.focused]: _,
                [null != g ? g : ""]: _
            }),
            onClick: h ? void 0 : m,
            ...S,
            "aria-checked": s,
            "aria-disabled": h,
            children: [(0, i.jsxs)("div", {
                className: E.label,
                children: [(0, l.renderSubnode)(n, e), null != p && (0, i.jsx)("div", {
                    className: E.subtext,
                    children: p
                })]
            }), (0, i.jsx)("div", {
                className: E.iconContainer,
                children: s ? (0, i.jsx)(d.default, {
                    className: E.icon,
                    background: E.checkbox,
                    foreground: E.check
                }) : (0, i.jsx)(c.default, {
                    className: E.icon,
                    foreground: E.checkboxEmpty
                })
            })]
        })
    }
}