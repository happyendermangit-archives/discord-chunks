function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useExpressionPickerGridWidth: function() {
            return m
        },
        useSynchronizedScrollPositionForActiveCategoryIndex: function() {
            return p
        },
        useShowUpsellForScrollPosition: function() {
            return h
        },
        useSynchronizedActiveCategoryIndexForScrollPosition: function() {
            return E
        },
        useExpressionPickerGridKeyboardNavigation: function() {
            return g
        },
        useExpressionGrid: function() {
            return C
        },
        useKeyboardNavigation: function() {
            return S
        }
    }), n("222007"), n("424973");
    var l = n("884691"),
        i = n("917351"),
        a = n.n(i),
        s = n("880317"),
        r = n("585463"),
        o = n("617258"),
        u = n("769846"),
        d = n("246511"),
        c = n("49111");
    let f = (0, o.cssValueToNumber)(u.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        m = e => {
            let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: i,
                listPaddingLeft: s = f,
                listScrollbarWidth: r = 8
            } = e, [o, u] = l.useState(void 0), d = l.useCallback(() => {
                if (null == t.current) return null;
                u(t.current.offsetWidth - s - r)
            }, [t, s, r]);
            return l.useLayoutEffect(() => {
                d()
            }, [n, d, i]), l.useEffect(() => {
                let e = a.debounce(d, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }, [d]), o
        },
        p = e => {
            let {
                activeCategoryIndex: t,
                listRef: n,
                searchQuery: i
            } = e, a = l.useRef(i), s = l.useRef(!0);
            l.useLayoutEffect(() => {
                if ("" === i && "" !== a.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t)
                }
                a.current = i
            }, [i, t, n]), l.useLayoutEffect(() => {
                if (s.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t), s.current = !1
                }
            }, [t, n]), l.useEffect(() => {
                a.current = i
            }, [i])
        },
        h = e => {
            let {
                listRef: t,
                searchQuery: n,
                setShowUpsell: i,
                setUpsellGlowOpacity: a,
                emojiSectionDescriptors: s
            } = e, r = l.useCallback(e => {
                if ("" !== n) {
                    a(0);
                    return
                }
                if (null == t.current) return;
                let l = s.findIndex(e => e.isNitroLocked);
                if (-1 === l) {
                    a(0);
                    return
                }
                let i = t.current.getSectionDescriptors();
                if (null == i || 0 === i.length || i.length !== s.length) return;
                let r = i[l],
                    o = e + t.current.getListDimensions().height,
                    u = Math.min(Math.max((r.offset.top - (o - 250)) / 250, 0), 1);
                a(u)
            }, [n, t, s, a]), o = l.useCallback(e => {
                if ("" !== n) {
                    i(!1);
                    return
                }
                if (null == t.current) return;
                let l = t.current.getSectionDescriptors();
                if (null == l || 0 === l.length || l.length !== s.length) return;
                let a = t.current.getListDimensions().height,
                    r = e + .7 * a,
                    o = e + .85 * a,
                    u = !1,
                    d = !1;
                s.forEach((e, t) => {
                    if (!e.isNitroLocked) return;
                    let n = l[t];
                    n.offset.top <= o && n.offset.bottom >= o && (d = !0), n.offset.top <= r && n.offset.bottom >= r && (u = !0)
                }), i(d && u)
            }, [n, t, s, i]), u = l.useCallback(e => {
                o(e), r(e)
            }, [o, r]);
            return u
        },
        E = e => {
            let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: i,
                searchQuery: s,
                scrollOffset: r = 0,
                onActiveCategoryIndexChange: o,
                disableForSearch: u = !0
            } = e, d = l.useRef(c.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), f = l.useMemo(() => a.debounce(() => {
                i.current = !1
            }, 250), [i]), m = l.useMemo(() => a.debounce(e => {
                ("" === s || !u) && (window.cancelAnimationFrame(d.current), d.current = window.requestAnimationFrame(() => {
                    var l;
                    let i = null === (l = n.current) || void 0 === l ? void 0 : l.getSectionDescriptors();
                    if (null == i) return;
                    let a = i.findIndex((t, n) => {
                            let l = i[n + 1],
                                a = e + r >= t.offset.top,
                                s = null != l && e + r < l.offset.top;
                            return null != l && !a && !s || a && s || a && null == l
                        }),
                        s = -1 === a ? 0 : a;
                    t !== s && o(s)
                }))
            }, 0), [s, n, t, r, o, u]), p = l.useCallback(e => {
                i.current = !0, f(), m(e)
            }, [i, f, m]);
            return p
        },
        g = e => {
            let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: i,
                itemList: a,
                onGridNavigatorItemSelect: r,
                onGridNavigatorPositionChange: o
            } = e, u = l.useRef(!1), d = l.useCallback((e, t) => {
                let n = i[t];
                if (null != n) return n[e]
            }, [i]), c = l.useCallback(e => {
                let {
                    focusedX: t,
                    focusedY: n
                } = e;
                u.current = !0;
                let l = d(t, n);
                if (null == l) return;
                let {
                    visibleRowIndex: i,
                    columnIndex: s
                } = l;
                o(s, i), null != a.current && a.current.scrollRowIntoView(n)
            }, [d, a, o]), f = l.useCallback((e, t, n) => {
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
            }, [c]), m = l.useCallback((e, t, n) => {
                let l = d(e, t);
                null != l && r(l, n)
            }, [d, r]), {
                dispatch: p,
                getItemProps: h,
                getRowProps: E,
                getContainerProps: g
            } = (0, s.useGridNavigator)({
                navId: n,
                columnCounts: t,
                onDispatch: f,
                onSelect: m,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }), {
                gridContainerProps: C,
                handleGridContainerKeyDown: S
            } = l.useMemo(() => {
                let e = g();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                }
            }, [g]);
            return l.useEffect(() => {
                let e = () => {
                    u.current = !1
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
            }, []), {
                gridDispatch: p,
                getItemProps: h,
                getRowProps: E,
                gridContainerProps: C,
                handleGridContainerKeyDown: S,
                isUsingKeyboardNavigation: u
            }
        };

    function C(e) {
        let {
            categories: t,
            collapsedCategories: n,
            gridWidth: i = 0,
            listPaddingRight: a = 0,
            itemNodeWidth: s,
            itemNodeMargin: r = 0
        } = e;
        return l.useMemo(() => {
            let e = Math.max(1, Math.floor((i - a + r) / (s + r))),
                l = Math.floor(Math.max(r, (i - a - s * e) / (e - 1))),
                o = [],
                u = [],
                d = [],
                c = 0,
                f = 0,
                m = 0;
            if (0 !== i) {
                let l = function(t, n) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = Math.ceil(t.length / e);
                    u[f] = l ? 0 : i;
                    for (let a = 0; a < i; a++) {
                        let i = a * e,
                            s = i + e,
                            r = t.slice(i, s).map((e, t) => ({
                                item: e,
                                gridSectionIndex: f,
                                rowIndex: c,
                                columnIndex: t,
                                visibleRowIndex: m,
                                category: n
                            }));
                        !l && (m++, d.push(r), o.push(r.length)), c++
                    }
                    f++
                };
                for (let e of t)
                    if (e.items.length > 0) {
                        var p;
                        l(e.items, e.categoryInfo.type, null !== (p = null == n ? void 0 : n.has("".concat(e.key))) && void 0 !== p && p)
                    }
            }
            return {
                expressionsGrid: d,
                rowCount: c,
                rowCountBySection: u,
                columnCounts: o,
                gutterWidth: l
            }
        }, [t, n, i, r, s, a])
    }

    function S(e) {
        let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: i,
            store: a,
            gridNavigatorId: s,
            onSelectItem: o
        } = e, {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: m,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h
        } = g({
            columnCounts: t,
            gridNavigatorId: s,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition
        });
        return l.useEffect(() => a.useStore.subscribe(e => {
            if (null == e) return;
            let {
                columnIndex: t,
                rowIndex: n,
                source: l
            } = e;
            l !== d.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && u({
                type: r.GridActionType.SET_FOCUSED_POSITION,
                x: t,
                y: n
            })
        }, e => e.inspectedExpressionPosition), [u, a]), {
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: m,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h
        }
    }
}