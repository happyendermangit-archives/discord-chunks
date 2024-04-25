function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSubmenuListItem: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("539907"),
        a = n("743236"),
        o = n("695464"),
        l = n("989608");

    function u(e) {
        let {
            parentItem: t,
            isFocused: n,
            menuSubmenuProps: u,
            rows: d,
            rowHeight: _,
            onScroll: c,
            listClassName: E
        } = e, I = r.useRef(null), T = r.useRef(null), f = r.useRef(null), S = r.useRef(null), {
            isUsingKeyboardNavigation: h,
            focusIndex: A,
            ...m
        } = u;
        r.useLayoutEffect(() => {
            var e;
            n && ((0, a.ensureItemVisible)(I), null === (e = f.current) || void 0 === e || e.focus())
        }, [n]), r.useEffect(() => {
            if (n && A >= 0 && h) {
                var e;
                null === (e = S.current) || void 0 === e || e.scrollRowIntoView(A)
            }
        }, [n, h, A]);
        let N = r.useCallback(e => d[e], [d]);
        return (0, i.jsxs)("div", {
            ref: I,
            className: l.__invalid_submenuContainer,
            children: [(0, i.jsx)("div", {
                ref: T
            }), t, n ? (0, i.jsx)(s.ReferencePositionLayer, {
                targetRef: T,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                fixed: !0,
                spacing: 4,
                position: "right",
                align: "top",
                children: () => d.length > 0 && (0, i.jsx)("div", {
                    className: l.submenuPaddingContainer,
                    children: (0, i.jsx)("div", {
                        className: l.submenu,
                        ...m,
                        ref: f,
                        children: (0, i.jsx)(o.default, {
                            ref: S,
                            className: E,
                            listPadding: [6, 0, 6, 8],
                            onScroll: c,
                            renderRow: N,
                            rowCount: d.length,
                            rowHeight: _
                        })
                    })
                })
            }) : null]
        })
    }
}