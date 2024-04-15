function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuRadioItem: function() {
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
        d = n("186523"),
        _ = n("553826"),
        c = n("939350"),
        E = n("989608");

    function I(e) {
        let {
            color: t = "default",
            label: n,
            checked: s,
            subtext: I,
            disabled: T,
            isFocused: f,
            menuItemProps: S,
            action: A
        } = e, h = r.useRef(null);
        return r.useEffect(() => {
            f && (0, u.ensureItemVisible)(h)
        }, [f]), (0, i.jsxs)(o.Clickable, {
            innerRef: h,
            className: a()(E.item, E.labelContainer, c.MENU_ITEM_COLORS[t], {
                [E.disabled]: T,
                [E.focused]: f
            }),
            onClick: T ? void 0 : A,
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
                    background: E.__invalid_radio,
                    foreground: E.radioSelection
                }) : (0, i.jsx)(d.default, {
                    className: E.icon,
                    foreground: E.__invalid_radio
                })
            })]
        })
    }
}