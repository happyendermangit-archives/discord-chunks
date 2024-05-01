function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCompositeControlItem: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("743236"),
        l = n("939350"),
        u = n("942610");

    function d(e) {
        let {
            color: t = "default",
            disabled: n,
            isFocused: a,
            showDefaultFocus: d = !1,
            menuItemProps: _,
            children: c
        } = e, E = r.useRef(null);
        return r.useLayoutEffect(() => {
            if (!a) return;
            let e = E.current;
            if (null == e) return;
            (0, o.ensureItemVisible)(E);
            let t = e.querySelector('[tabindex="0"]');
            null == t || t.focus()
        }, [a]), (0, i.jsx)("div", {
            ref: E,
            className: s()(u.item, l.MENU_ITEM_COLORS[t], {
                [u.disabled]: n,
                [u.focused]: d && a,
                [u.hideInteraction]: !d
            }),
            "aria-disabled": n,
            ..._,
            children: c
        })
    }
}