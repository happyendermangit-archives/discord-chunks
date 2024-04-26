function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCompositeControlItem: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("743236"),
        l = n("939350"),
        u = n("942610");

    function d(e) {
        let {
            color: t = "default",
            disabled: n,
            isFocused: s,
            showDefaultFocus: d = !1,
            menuItemProps: _,
            children: c
        } = e, E = r.useRef(null);
        return r.useLayoutEffect(() => {
            if (!s) return;
            let e = E.current;
            if (null == e) return;
            (0, o.ensureItemVisible)(E);
            let t = e.querySelector('[tabindex="0"]');
            null == t || t.focus()
        }, [s]), (0, i.jsx)("div", {
            ref: E,
            className: a()(u.item, l.MENU_ITEM_COLORS[t], {
                [u.disabled]: n,
                [u.focused]: d && s,
                [u.hideInteraction]: !d
            }),
            "aria-disabled": n,
            ..._,
            children: c
        })
    }
}