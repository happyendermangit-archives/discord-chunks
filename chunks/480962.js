function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSubmenuItem: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("539907"),
        l = n("743236"),
        u = n("21340"),
        d = n("942610");

    function _(e) {
        let {
            subMenuClassName: t,
            parentItem: n,
            isFocused: a,
            menuSubmenuProps: _,
            renderSubmenu: c
        } = e, {
            focusIndex: E,
            isUsingKeyboardNavigation: I,
            ...T
        } = _, f = r.useRef(null), S = r.useRef(null), h = r.useRef(null);
        return r.useLayoutEffect(() => {
            var e;
            a && ((0, l.ensureItemVisible)(f), null === (e = h.current) || void 0 === e || e.focus())
        }, [a]), (0, i.jsxs)("div", {
            ref: f,
            className: d.__invalid_submenuContainer,
            children: [(0, i.jsx)("div", {
                ref: S
            }), n, a ? (0, i.jsx)(o.ReferencePositionLayer, {
                targetRef: S,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                fixed: !0,
                spacing: 4,
                position: "right",
                align: "top",
                children: () => (0, i.jsx)("div", {
                    className: d.submenuPaddingContainer,
                    children: (0, i.jsx)("div", {
                        className: s()(d.submenu, t),
                        ...T,
                        ref: h,
                        children: (0, i.jsx)(u.ScrollerThin, {
                            className: d.scroller,
                            children: c()
                        })
                    })
                })
            }) : null]
        })
    }
}