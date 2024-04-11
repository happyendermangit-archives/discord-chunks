function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSubmenuItem: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("539907"),
        l = n("743236"),
        u = n("21340"),
        d = n("989608");

    function _(e) {
        let {
            subMenuClassName: t,
            parentItem: n,
            isFocused: s,
            menuSubmenuProps: _,
            renderSubmenu: c
        } = e, {
            focusIndex: E,
            isUsingKeyboardNavigation: I,
            ...T
        } = _, f = r.useRef(null), S = r.useRef(null), A = r.useRef(null);
        return r.useLayoutEffect(() => {
            var e;
            s && ((0, l.ensureItemVisible)(f), null === (e = A.current) || void 0 === e || e.focus())
        }, [s]), (0, i.jsxs)("div", {
            ref: f,
            className: d.__invalid_submenuContainer,
            children: [(0, i.jsx)("div", {
                ref: S
            }), n, s ? (0, i.jsx)(o.ReferencePositionLayer, {
                reference: S,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                fixed: !0,
                spacing: 4,
                position: "right",
                align: "top",
                children: () => (0, i.jsx)("div", {
                    className: d.submenuPaddingContainer,
                    children: (0, i.jsx)("div", {
                        className: a()(d.submenu, t),
                        ...T,
                        ref: A,
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