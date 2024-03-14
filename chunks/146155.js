function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuRadioItem: function() {
            return h
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
        f = n("389802"),
        _ = n("639826");

    function h(e) {
        let {
            color: t = "default",
            label: n,
            checked: r,
            subtext: h,
            disabled: E,
            isFocused: g,
            menuItemProps: m,
            action: p
        } = e, S = s.useRef(null);
        return s.useEffect(() => {
            g && (0, u.ensureItemVisible)(S)
        }, [g]), (0, i.jsxs)(o.Clickable, {
            innerRef: S,
            className: a(_.item, _.labelContainer, f.MENU_ITEM_COLORS[t], {
                [_.disabled]: E,
                [_.focused]: g
            }),
            onClick: E ? void 0 : p,
            ...m,
            "aria-checked": r,
            "aria-disabled": E,
            children: [(0, i.jsxs)("div", {
                className: _.label,
                children: [(0, l.renderSubnode)(n, e), null != h && (0, i.jsx)("div", {
                    className: _.subtext,
                    children: h
                })]
            }), (0, i.jsx)("div", {
                className: _.iconContainer,
                children: r ? (0, i.jsx)(c.default, {
                    className: _.icon,
                    background: _.radio,
                    foreground: _.radioSelection
                }) : (0, i.jsx)(d.default, {
                    className: _.icon,
                    foreground: _.radio
                })
            })]
        })
    }
}