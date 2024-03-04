function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSubmenuListItem: function() {
            return u
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("222163"),
        a = n("697917"),
        o = n("124299"),
        l = n("639826");

    function u(e) {
        let {
            parentItem: t,
            isFocused: n,
            menuSubmenuProps: u,
            rows: d,
            rowHeight: c,
            onScroll: f,
            listClassName: _
        } = e, h = s.useRef(null), E = s.useRef(null), g = s.useRef(null), m = s.useRef(null), {
            isUsingKeyboardNavigation: p,
            focusIndex: S,
            ...v
        } = u;
        s.useLayoutEffect(() => {
            var e;
            n && ((0, a.ensureItemVisible)(h), null === (e = g.current) || void 0 === e || e.focus())
        }, [n]), s.useEffect(() => {
            if (n && S >= 0 && p) {
                var e;
                null === (e = m.current) || void 0 === e || e.scrollRowIntoView(S)
            }
        }, [n, p, S]);
        let T = s.useCallback(e => d[e], [d]);
        return (0, i.jsxs)("div", {
            ref: h,
            className: l.submenuContainer,
            children: [(0, i.jsx)("div", {
                ref: E
            }), t, n ? (0, i.jsx)(r.ReferencePositionLayer, {
                reference: E,
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
                        ...v,
                        ref: g,
                        children: (0, i.jsx)(o.default, {
                            ref: m,
                            className: _,
                            listPadding: [6, 0, 6, 8],
                            onScroll: f,
                            renderRow: T,
                            rowCount: d.length,
                            rowHeight: c
                        })
                    })
                })
            }) : null]
        })
    }
}