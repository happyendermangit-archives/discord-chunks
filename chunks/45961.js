function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useExpressionPickerGridWidth: function() {
            return p
        },
        useSynchronizedScrollPositionForActiveCategoryIndex: function() {
            return m
        },
        useShowUpsellForScrollPosition: function() {
            return h
        },
        useSynchronizedActiveCategoryIndexForScrollPosition: function() {
            return x
        },
        useExpressionPickerGridKeyboardNavigation: function() {
            return E
        },
        useExpressionGrid: function() {
            return y
        },
        useKeyboardNavigation: function() {
            return g
        }
    }), n("222007"), n("424973");
    var i = n("884691"),
        l = n("917351"),
        a = n.n(l),
        s = n("880317"),
        r = n("585463"),
        o = n("617258"),
        u = n("769846"),
        d = n("246511"),
        c = n("49111");
    let f = (0, o.cssValueToNumber)(u.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        p = e => {
            let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: l,
                listPaddingLeft: s = f,
                listScrollbarWidth: r = 8
            } = e, [o, u] = i.useState(void 0), d = i.useCallback(() => {
                if (null == t.current) return null;
                u(t.current.offsetWidth - s - r)
            }, [t, s, r]);
            return i.useLayoutEffect(() => {
                d()
            }, [n, d, l]), i.useEffect(() => {
                let e = a.debounce(d, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }, [d]), o
        },
        m = e => {
            let {
                activeCategoryIndex: t,
                listRef: n,
                searchQuery: l
            } = e, a = i.useRef(l), s = i.useRef(!0);
            i.useLayoutEffect(() => {
                if ("" === l && "" !== a.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t)
                }
                a.current = l
            }, [l, t, n]), i.useLayoutEffect(() => {
                if (s.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t), s.current = !1
                }
            }, [t, n]), i.useEffect(() => {
                a.current = l
            }, [l])
        },
        h = e => {
            let {
                listRef: t,
                searchQuery: n,
                setShowUpsell: l,
                setUpsellGlowOpacity: a,
                emojiSectionDescriptors: s
            } = e, r = i.useCallback(e => {
                if ("" !== n) {
                    a(0);
                    return
                }
                if (null == t.current) return;
                let i = s.findIndex(e => e.isNitroLocked);
                if (-1 === i) {
                    a(0);
                    return
                }
                let l = t.current.getSectionDescriptors();
                if (null == l || 0 === l.length || l.length !== s.length) return;
                let r = l[i],
                    o = e + t.current.getListDimensions().height,
                    u = Math.min(Math.max((r.offset.top - (o - 250)) / 250, 0), 1);
                a(u)
            }, [n, t, s, a]), o = i.useCallback(e => {
                if ("" !== n) {
                    l(!1);
                    return
                }
                if (null == t.current) return;
                let i = t.current.getSectionDescriptors();
                if (null == i || 0 === i.length || i.length !== s.length) return;
                let a = t.current.getListDimensions().height,
                    r = e + .7 * a,
                    o = e + .85 * a,
                    u = !1,
                    d = !1;
                s.forEach((e, t) => {
                    if (!e.isNitroLocked) return;
                    let n = i[t];
                    n.offset.top <= o && n.offset.bottom >= o && (d = !0), n.offset.top <= r && n.offset.bottom >= r && (u = !0)
                }), l(d && u)
            }, [n, t, s, l]), u = i.useCallback(e => {
                o(e), r(e)
            }, [o, r]);
            return u
        },
        x = e => {
            let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: l,
                searchQuery: s,
                scrollOffset: r = 0,
                onActiveCategoryIndexChange: o,
                disableForSearch: u = !0
            } = e, d = i.useRef(c.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), f = i.useMemo(() => a.debounce(() => {
                l.current = !1
            }, 250), [l]), p = i.useMemo(() => a.debounce(e => {
                ("" === s || !u) && (window.cancelAnimationFrame(d.current), d.current = window.requestAnimationFrame(() => {
                    var i;
                    let l = null === (i = n.current) || void 0 === i ? void 0 : i.getSectionDescriptors();
                    if (null == l) return;
                    let a = l.findIndex((t, n) => {
                            let i = l[n + 1],
                                a = e + r >= t.offset.top,
                                s = null != i && e + r < i.offset.top;
                            return null != i && !a && !s || a && s || a && null == i
                        }),
                        s = -1 === a ? 0 : a;
                    t !== s && o(s)
                }))
            }, 0), [s, n, t, r, o, u]), m = i.useCallback(e => {
                l.current = !0, f(), p(e)
            }, [l, f, p]);
            return m
        },
        E = e => {
            let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: l,
                itemList: a,
                onGridNavigatorItemSelect: r,
                onGridNavigatorPositionChange: o
            } = e, u = i.useRef(!1), d = i.useCallback((e, t) => {
                let n = l[t];
                if (null != n) return n[e]
            }, [l]), c = i.useCallback(e => {
                let {
                    focusedX: t,
                    focusedY: n
                } = e;
                u.current = !0;
                let i = d(t, n);
                if (null == i) return;
                let {
                    visibleRowIndex: l,
                    columnIndex: s
                } = i;
                o(s, l), null != a.current && a.current.scrollRowIntoView(n)
            }, [d, a, o]), f = i.useCallback((e, t, n) => {
                switch (n.type) {
                    case s.ActionType.NAVIGATE_UP:
                    case s.ActionType.NAVIGATE_DOWN:
                    case s.ActionType.NAVIGATE_RIGHT:
                    case s.ActionType.NAVIGATE_LEFT:
                    case s.ActionType.NAVIGATE_INLINE_START:
                    case s.ActionType.NAVIGATE_INLINE_END:
                    case s.ActionType.NAVIGATE_START:
                    case s.ActionType.NAVIGATE_END:
                    case s.ActionType.NAVIGATE_CROSSLINE_START:
                    case s.ActionType.NAVIGATE_CROSSLINE_END:
                        c(t)
                }
            }, [c]), p = i.useCallback((e, t, n) => {
                let i = d(e, t);
                null != i && r(i, n)
            }, [d, r]), {
                dispatch: m,
                getItemProps: h,
                getRowProps: x,
                getContainerProps: E
            } = (0, s.useGridNavigator)({
                navId: n,
                columnCounts: t,
                onDispatch: f,
                onSelect: p,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }), {
                gridContainerProps: y,
                handleGridContainerKeyDown: g
            } = i.useMemo(() => {
                let e = E();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                }
            }, [E]);
            return i.useEffect(() => {
                let e = () => {
                    u.current = !1
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
            }, []), {
                gridDispatch: m,
                getItemProps: h,
                getRowProps: x,
                gridContainerProps: y,
                handleGridContainerKeyDown: g,
                isUsingKeyboardNavigation: u
            }
        };

    function y(e) {
        let {
            categories: t,
            collapsedCategories: n,
            gridWidth: l = 0,
            listPaddingRight: a = 0,
            itemNodeWidth: s,
            itemNodeMargin: r = 0
        } = e;
        return i.useMemo(() => {
            let e = Math.max(1, Math.floor((l - a + r) / (s + r))),
                i = Math.floor(Math.max(r, (l - a - s * e) / (e - 1))),
                o = [],
                u = [],
                d = [],
                c = 0,
                f = 0,
                p = 0;
            if (0 !== l) {
                let i = function(t, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = Math.ceil(t.length / e);
                    u[f] = i ? 0 : l;
                    for (let a = 0; a < l; a++) {
                        let l = a * e,
                            s = l + e,
                            r = t.slice(l, s).map((e, t) => ({
                                item: e,
                                gridSectionIndex: f,
                                rowIndex: c,
                                columnIndex: t,
                                visibleRowIndex: p,
                                category: n
                            }));
                        !i && (p++, d.push(r), o.push(r.length)), c++
                    }
                    f++
                };
                for (let e of t)
                    if (e.items.length > 0) {
                        var m;
                        i(e.items, e.categoryInfo.type, null !== (m = null == n ? void 0 : n.has("".concat(e.key))) && void 0 !== m && m)
                    }
            }
            return {
                expressionsGrid: d,
                rowCount: c,
                rowCountBySection: u,
                columnCounts: o,
                gutterWidth: i
            }
        }, [t, n, l, r, s, a])
    }

    function g(e) {
        let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: l,
            store: a,
            gridNavigatorId: s,
            onSelectItem: o
        } = e, {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: p,
            handleGridContainerKeyDown: m,
            isUsingKeyboardNavigation: h
        } = E({
            columnCounts: t,
            gridNavigatorId: s,
            itemGrid: n,
            itemList: l,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition
        });
        return i.useEffect(() => a.useStore.subscribe(e => {
            if (null == e) return;
            let {
                columnIndex: t,
                rowIndex: n,
                source: i
            } = e;
            i !== d.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && u({
                type: r.GridActionType.SET_FOCUSED_POSITION,
                x: t,
                y: n
            })
        }, e => e.inspectedExpressionPosition), [u, a]), {
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: p,
            handleGridContainerKeyDown: m,
            isUsingKeyboardNavigation: h
        }
    }
}