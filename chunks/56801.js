function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("806966"),
        u = n("254494"),
        d = n("895924"),
        _ = n("826298"),
        c = n("47382");
    let E = [16, 12, 8, 12];

    function I(e) {
        let {
            className: t,
            channel: n,
            sections: s,
            activeCategoryIndex: I,
            filteredSectionId: T,
            onSectionClick: f,
            applicationCommandListRef: S
        } = e, h = r.useRef(null), A = r.useCallback((e, t) => {
            var n;
            let i = 8;
            return (null === (n = s[t + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN && (i += 8), 32 + i
        }, [s]), m = r.useCallback((e, t) => {
            var n;
            if (!t) return 0 === e ? 0 : 8;
            return (null === (n = s[e + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN ? 0 : 8
        }, [s]), N = r.useCallback((e, t) => {
            let r = s[t];
            if (null == r) return;
            let a = (0, _.getIconComponent)(r),
                l = r.type === d.ApplicationCommandSectionType.BUILT_IN ? 4 : 0,
                u = 32 - 2 * l,
                E = (0, i.jsx)(a, {
                    channel: n,
                    section: r,
                    isSelected: null != T ? r.id === T : I === t,
                    padding: l,
                    width: u,
                    height: u,
                    selectable: !0
                }),
                S = r.type !== d.ApplicationCommandSectionType.BUILT_IN && t < s.length - 1 && s[t + 1].type === d.ApplicationCommandSectionType.BUILT_IN;
            return (0, i.jsxs)("div", {
                className: c.section,
                children: [(0, i.jsx)(o.Tooltip, {
                    text: r.name,
                    position: "right",
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, i.jsx)(o.Clickable, {
                            "aria-label": r.name,
                            onClick: () => {
                                f(r), null == t || t()
                            },
                            ...n,
                            children: E
                        })
                    }
                }), S ? (0, i.jsx)("hr", {
                    className: c.builtInSeparator
                }) : null]
            }, r.id)
        }, [I, n, f, s, T]);
        return 0 === s.length ? null : (0, i.jsx)("div", {
            className: a()(t, c.wrapper),
            children: (0, i.jsx)(u.default, {
                categoryListRef: h,
                expressionsListRef: S,
                store: l.ApplicationCommandDiscoveryPickerStore,
                categories: s,
                className: c.list,
                renderCategoryListItem: N,
                rowCount: s.length,
                categoryHeight: A,
                listPadding: E,
                getScrollOffsetForIndex: m
            })
        })
    }
}