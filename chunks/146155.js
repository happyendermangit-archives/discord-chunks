function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuRadioItem: function() {
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
        d = n("904276"),
        c = n("875436"),
        _ = n("389802"),
        f = n("639826");

    function E(e) {
        let {
            color: t = "default",
            label: n,
            checked: r,
            subtext: E,
            disabled: h,
            isFocused: g,
            menuItemProps: m,
            action: p
        } = e, S = s.useRef(null);
        return s.useEffect(() => {
            g && (0, u.ensureItemVisible)(S)
        }, [g]), (0, i.jsxs)(o.Clickable, {
            innerRef: S,
            className: a(f.item, f.labelContainer, _.MENU_ITEM_COLORS[t], {
                [f.disabled]: h,
                [f.focused]: g
            }),
            onClick: h ? void 0 : p,
            ...m,
            "aria-checked": r,
            "aria-disabled": h,
            children: [(0, i.jsxs)("div", {
                className: f.label,
                children: [(0, l.renderSubnode)(n, e), null != E && (0, i.jsx)("div", {
                    className: f.subtext,
                    children: E
                })]
            }), (0, i.jsx)("div", {
                className: f.iconContainer,
                children: r ? (0, i.jsx)(c.default, {
                    className: f.icon,
                    background: f.radio,
                    foreground: f.radioSelection
                }) : (0, i.jsx)(d.default, {
                    className: f.icon,
                    foreground: f.radio
                })
            })]
        })
    }
}