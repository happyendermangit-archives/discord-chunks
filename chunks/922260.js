function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCompositeControlItem: function() {
            return d
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("697917"),
        l = n("389802"),
        u = n("639826");

    function d(e) {
        let {
            color: t = "default",
            disabled: n,
            isFocused: r,
            showDefaultFocus: d = !1,
            menuItemProps: c,
            children: _
        } = e, f = s.useRef(null);
        return s.useLayoutEffect(() => {
            if (!r) return;
            let e = f.current;
            if (null == e) return;
            (0, o.ensureItemVisible)(f);
            let t = e.querySelector('[tabindex="0"]');
            null == t || t.focus()
        }, [r]), (0, i.jsx)("div", {
            ref: f,
            className: a(u.item, l.MENU_ITEM_COLORS[t], {
                [u.disabled]: n,
                [u.focused]: d && r,
                [u.hideInteraction]: !d
            }),
            "aria-disabled": n,
            ...c,
            children: _
        })
    }
}