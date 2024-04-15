function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuControlItem: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("743236"),
        l = n("939350"),
        u = n("989608");

    function d(e) {
        let {
            color: t = "default",
            label: n,
            control: s,
            disabled: d,
            isFocused: _,
            showDefaultFocus: c = !1,
            menuItemProps: E,
            onClose: I
        } = e, T = r.useRef(null), f = r.useRef(null);
        r.useLayoutEffect(() => {
            var e, t, n;
            _ ? ((0, o.ensureItemVisible)(T), null === (e = f.current) || void 0 === e || e.focus()) : null === (n = f.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n)
        }, [_]);
        let S = r.useCallback(() => {
                var e, t;
                (null === (t = f.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t)) && I()
            }, [I]),
            h = s({
                onClose: I,
                disabled: d,
                isFocused: _
            }, f);
        return (0, i.jsxs)("div", {
            onClick: S,
            className: a()(u.item, l.MENU_ITEM_COLORS[t], {
                [u.disabled]: d,
                [u.focused]: c && _,
                [u.hideInteraction]: !c
            }),
            "aria-disabled": d,
            ...E,
            children: [null != n ? (0, i.jsx)("div", {
                className: u.labelContainer,
                children: (0, i.jsx)("div", {
                    className: u.label,
                    children: n
                })
            }) : null, h]
        })
    }
}