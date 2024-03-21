function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCustomItem: function() {
            return c
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("227645"),
        l = n("697917"),
        u = n("389802"),
        d = n("639826");

    function c(e) {
        let {
            children: t,
            color: n = "default",
            isFocused: r = !1,
            disabled: c = !1,
            keepItemStyles: _ = !1,
            menuItemProps: f,
            action: E,
            dontCloseOnActionIfHoldingShiftKey: h,
            dontCloseOnAction: g,
            onClose: m
        } = e, p = s.useRef(null);
        s.useEffect(() => {
            r && (0, l.ensureItemVisible)(p)
        }, [r]);
        let S = s.useCallback(e => {
                if (null == E) return !1;
                !(e.shiftKey && h) && !g && m(), e.persist(), requestAnimationFrame(() => E(e))
            }, [E, m, h, g]),
            T = _ ? a(d.item, u.MENU_ITEM_COLORS[n], {
                [d.focused]: r
            }) : d.customItem;
        return (0, i.jsx)(o.Clickable, {
            innerRef: p,
            className: T,
            onClick: c ? void 0 : S,
            "aria-disabled": c,
            ...f,
            children: t({
                color: n,
                disabled: c,
                isFocused: r
            })
        })
    }
}