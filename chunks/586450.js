function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("986632"),
        u = n("405607"),
        d = n("524768"),
        c = n("355263"),
        f = n("960510");
    let p = [16, 12, 8, 12];

    function m(e) {
        let {
            className: t,
            channel: n,
            sections: a,
            activeCategoryIndex: m,
            filteredSectionId: h,
            onSectionClick: x,
            applicationCommandListRef: E
        } = e, y = l.useRef(null), g = l.useCallback((e, t) => {
            var n;
            let i = 8;
            return (null === (n = a[t + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN && (i += 8), 32 + i
        }, [a]), S = l.useCallback((e, t) => {
            var n;
            if (!t) return 0 === e ? 0 : 8;
            return (null === (n = a[e + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN ? 0 : 8
        }, [a]), C = l.useCallback((e, t) => {
            let l = a[t];
            if (null == l) return;
            let s = (0, c.getIconComponent)(l),
                o = l.type === d.ApplicationCommandSectionType.BUILT_IN ? 4 : 0,
                u = 32 - 2 * o,
                p = (0, i.jsx)(s, {
                    channel: n,
                    section: l,
                    isSelected: null != h ? l.id === h : m === t,
                    padding: o,
                    width: u,
                    height: u,
                    selectable: !0
                }),
                E = l.type !== d.ApplicationCommandSectionType.BUILT_IN && t < a.length - 1 && a[t + 1].type === d.ApplicationCommandSectionType.BUILT_IN;
            return (0, i.jsxs)("div", {
                className: f.section,
                children: [(0, i.jsx)(r.Tooltip, {
                    text: l.name,
                    position: "right",
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, i.jsx)(r.Clickable, {
                            "aria-label": l.name,
                            onClick: () => {
                                x(l), null == t || t()
                            },
                            ...n,
                            children: p
                        })
                    }
                }), E ? (0, i.jsx)("hr", {
                    className: f.builtInSeparator
                }) : null]
            }, l.id)
        }, [m, n, x, a, h]);
        return 0 === a.length ? null : (0, i.jsx)("div", {
            className: s(t, f.wrapper),
            children: (0, i.jsx)(u.default, {
                categoryListRef: y,
                expressionsListRef: E,
                store: o.ApplicationCommandDiscoveryPickerStore,
                categories: a,
                className: f.list,
                renderCategoryListItem: C,
                rowCount: a.length,
                categoryHeight: g,
                listPadding: p,
                getScrollOffsetForIndex: S
            })
        })
    }
}