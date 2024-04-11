function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCustomItem: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("1561"),
        l = n("743236"),
        u = n("939350"),
        d = n("989608");

    function _(e) {
        let {
            children: t,
            color: n = "default",
            isFocused: s = !1,
            disabled: _ = !1,
            keepItemStyles: c = !1,
            menuItemProps: E,
            action: I,
            dontCloseOnActionIfHoldingShiftKey: T,
            dontCloseOnAction: f,
            onClose: S
        } = e, h = r.useRef(null);
        r.useEffect(() => {
            s && (0, l.ensureItemVisible)(h)
        }, [s]);
        let A = r.useCallback(e => {
                if (null == I) return !1;
                !(e.shiftKey && T) && !f && S(), e.persist(), requestAnimationFrame(() => I(e))
            }, [I, S, T, f]),
            m = c ? a()(d.item, u.MENU_ITEM_COLORS[n], {
                [d.focused]: s
            }) : d.customItem;
        return (0, i.jsx)(o.Clickable, {
            innerRef: h,
            className: m,
            onClick: _ ? void 0 : A,
            "aria-disabled": _,
            ...E,
            children: t({
                color: n,
                disabled: _,
                isFocused: s
            })
        })
    }
}