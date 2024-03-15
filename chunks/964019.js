function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCheckboxItem: function() {
            return E
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("227645"),
        l = n("199285"),
        u = n("697917"),
        d = n("36562"),
        c = n("781291"),
        f = n("389802"),
        _ = n("639826");

    function E(e) {
        let {
            color: t = "default",
            label: n,
            checked: r,
            subtext: E,
            disabled: h,
            isFocused: g,
            menuItemProps: m,
            action: p,
            className: S,
            focusedClassName: v
        } = e, T = s.useRef(null);
        return s.useEffect(() => {
            g && (0, u.ensureItemVisible)(T)
        }, [g]), (0, i.jsxs)(o.Clickable, {
            innerRef: T,
            className: a(_.item, _.labelContainer, f.MENU_ITEM_COLORS[t], S, {
                [_.disabled]: h,
                [_.focused]: g,
                [null != v ? v : ""]: g
            }),
            onClick: h ? void 0 : p,
            ...m,
            "aria-checked": r,
            "aria-disabled": h,
            children: [(0, i.jsxs)("div", {
                className: _.label,
                children: [(0, l.renderSubnode)(n, e), null != E && (0, i.jsx)("div", {
                    className: _.subtext,
                    children: E
                })]
            }), (0, i.jsx)("div", {
                className: _.iconContainer,
                children: r ? (0, i.jsx)(c.default, {
                    className: _.icon,
                    background: _.checkbox,
                    foreground: _.check
                }) : (0, i.jsx)(d.default, {
                    className: _.icon,
                    foreground: _.checkboxEmpty
                })
            })]
        })
    }
}