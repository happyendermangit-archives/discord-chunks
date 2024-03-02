function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("986632"),
        u = n("405607"),
        d = n("524768"),
        c = n("355263"),
        f = n("960510");
    let m = [16, 12, 8, 12];

    function p(e) {
        let {
            className: t,
            channel: n,
            sections: a,
            activeCategoryIndex: p,
            filteredSectionId: h,
            onSectionClick: E,
            applicationCommandListRef: g
        } = e, C = i.useRef(null), S = i.useCallback((e, t) => {
            var n;
            let l = 8;
            return (null === (n = a[t + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN && (l += 8), 32 + l
        }, [a]), T = i.useCallback((e, t) => {
            var n;
            if (!t) return 0 === e ? 0 : 8;
            return (null === (n = a[e + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN ? 0 : 8
        }, [a]), I = i.useCallback((e, t) => {
            let i = a[t];
            if (null == i) return;
            let s = (0, c.getIconComponent)(i),
                o = i.type === d.ApplicationCommandSectionType.BUILT_IN ? 4 : 0,
                u = 32 - 2 * o,
                m = (0, l.jsx)(s, {
                    channel: n,
                    section: i,
                    isSelected: null != h ? i.id === h : p === t,
                    padding: o,
                    width: u,
                    height: u,
                    selectable: !0
                }),
                g = i.type !== d.ApplicationCommandSectionType.BUILT_IN && t < a.length - 1 && a[t + 1].type === d.ApplicationCommandSectionType.BUILT_IN;
            return (0, l.jsxs)("div", {
                className: f.section,
                children: [(0, l.jsx)(r.Tooltip, {
                    text: i.name,
                    position: "right",
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, l.jsx)(r.Clickable, {
                            "aria-label": i.name,
                            onClick: () => {
                                E(i), null == t || t()
                            },
                            ...n,
                            children: m
                        })
                    }
                }), g ? (0, l.jsx)("hr", {
                    className: f.builtInSeparator
                }) : null]
            }, i.id)
        }, [p, n, E, a, h]);
        return 0 === a.length ? null : (0, l.jsx)("div", {
            className: s(t, f.wrapper),
            children: (0, l.jsx)(u.default, {
                categoryListRef: C,
                expressionsListRef: g,
                store: o.ApplicationCommandDiscoveryPickerStore,
                categories: a,
                className: f.list,
                renderCategoryListItem: I,
                rowCount: a.length,
                categoryHeight: S,
                listPadding: m,
                getScrollOffsetForIndex: T
            })
        })
    }
}