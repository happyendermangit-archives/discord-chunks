function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useExpressionGrid: function() {
            return h
        },
        useExpressionPickerGridKeyboardNavigation: function() {
            return S
        },
        useExpressionPickerGridWidth: function() {
            return E
        },
        useKeyboardNavigation: function() {
            return A
        },
        useShowUpsellForScrollPosition: function() {
            return T
        },
        useSynchronizedActiveCategoryIndexForScrollPosition: function() {
            return f
        },
        useSynchronizedScrollPositionForActiveCategoryIndex: function() {
            return I
        }
    }), n("47120"), n("653041");
    var i = n("470079"),
        r = n("392711"),
        a = n.n(r),
        s = n("739940"),
        o = n("611144"),
        l = n("468194"),
        u = n("477690"),
        d = n("691251"),
        _ = n("981631");
    let c = (0, l.cssValueToNumber)(u.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        E = e => {
            let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: r,
                listPaddingLeft: s = c,
                listScrollbarWidth: o = 8
            } = e, [l, u] = i.useState(void 0), d = i.useCallback(() => {
                if (null == t.current) return null;
                u(t.current.offsetWidth - s - o)
            }, [t, s, o]);
            return i.useLayoutEffect(() => {
                d()
            }, [n, d, r]), i.useEffect(() => {
                let e = a().debounce(d, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }, [d]), l
        },
        I = e => {
            let {
                activeCategoryIndex: t,
                listRef: n,
                searchQuery: r
            } = e, a = i.useRef(r), s = i.useRef(!0);
            i.useLayoutEffect(() => {
                if ("" === r && "" !== a.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t)
                }
                a.current = r
            }, [r, t, n]), i.useLayoutEffect(() => {
                if (s.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t), s.current = !1
                }
            }, [t, n]), i.useEffect(() => {
                a.current = r
            }, [r])
        },
        T = e => {
            let {
                listRef: t,
                searchQuery: n,
                setShowUpsell: r,
                setUpsellGlowOpacity: a,
                emojiSectionDescriptors: s
            } = e, o = i.useCallback(e => {
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
                let r = t.current.getSectionDescriptors();
                if (null == r || 0 === r.length || r.length !== s.length) return;
                let o = r[i],
                    l = e + t.current.getListDimensions().height;
                a(Math.min(Math.max((o.offset.top - (l - 250)) / 250, 0), 1))
            }, [n, t, s, a]), l = i.useCallback(e => {
                if ("" !== n) {
                    r(!1);
                    return
                }
                if (null == t.current) return;
                let i = t.current.getSectionDescriptors();
                if (null == i || 0 === i.length || i.length !== s.length) return;
                let a = t.current.getListDimensions().height,
                    o = e + .7 * a,
                    l = e + .85 * a,
                    u = !1,
                    d = !1;
                s.forEach((e, t) => {
                    if (!e.isNitroLocked) return;
                    let n = i[t];
                    n.offset.top <= l && n.offset.bottom >= l && (d = !0), n.offset.top <= o && n.offset.bottom >= o && (u = !0)
                }), r(d && u)
            }, [n, t, s, r]);
            return i.useCallback(e => {
                l(e), o(e)
            }, [l, o])
        },
        f = e => {
            let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: r,
                searchQuery: s,
                scrollOffset: o = 0,
                onActiveCategoryIndexChange: l,
                disableForSearch: u = !0
            } = e, d = i.useRef(_.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), c = i.useMemo(() => a().debounce(() => {
                r.current = !1
            }, 250), [r]), E = i.useMemo(() => a().debounce(e => {
                ("" === s || !u) && (window.cancelAnimationFrame(d.current), d.current = window.requestAnimationFrame(() => {
                    var i;
                    let r = null === (i = n.current) || void 0 === i ? void 0 : i.getSectionDescriptors();
                    if (null == r) return;
                    let a = r.findIndex((t, n) => {
                            let i = r[n + 1],
                                a = e + o >= t.offset.top,
                                s = null != i && e + o < i.offset.top;
                            return null != i && !a && !s || a && s || a && null == i
                        }),
                        s = -1 === a ? 0 : a;
                    t !== s && l(s)
                }))
            }, 0), [s, n, t, o, l, u]);
            return i.useCallback(e => {
                r.current = !0, c(), E(e)
            }, [r, c, E])
        },
        S = e => {
            let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: r,
                itemList: a,
                onGridNavigatorItemSelect: o,
                onGridNavigatorPositionChange: l
            } = e, u = i.useRef(!1), d = i.useCallback((e, t) => {
                let n = r[t];
                if (null != n) return n[e]
            }, [r]), _ = i.useCallback(e => {
                let {
                    focusedX: t,
                    focusedY: n
                } = e;
                u.current = !0;
                let i = d(t, n);
                if (null == i) return;
                let {
                    visibleRowIndex: r,
                    columnIndex: s
                } = i;
                l(s, r), null != a.current && a.current.scrollRowIntoView(n)
            }, [d, a, l]), c = i.useCallback((e, t, n) => {
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
                        _(t)
                }
            }, [_]), E = i.useCallback((e, t, n) => {
                let i = d(e, t);
                null != i && o(i, n)
            }, [d, o]), {
                dispatch: I,
                getItemProps: T,
                getRowProps: f,
                getContainerProps: S
            } = (0, s.useGridNavigator)({
                navId: n,
                columnCounts: t,
                onDispatch: c,
                onSelect: E,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }), {
                gridContainerProps: h,
                handleGridContainerKeyDown: A
            } = i.useMemo(() => {
                let e = S();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                }
            }, [S]);
            return i.useEffect(() => {
                let e = () => {
                    u.current = !1
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
            }, []), {
                gridDispatch: I,
                getItemProps: T,
                getRowProps: f,
                gridContainerProps: h,
                handleGridContainerKeyDown: A,
                isUsingKeyboardNavigation: u
            }
        };

    function h(e) {
        let {
            categories: t,
            collapsedCategories: n,
            gridWidth: r = 0,
            listPaddingRight: a = 0,
            itemNodeWidth: s,
            itemNodeMargin: o = 0
        } = e;
        return i.useMemo(() => {
            let e = Math.max(1, Math.floor((r - a + o) / (s + o))),
                i = Math.floor(Math.max(o, (r - a - s * e) / (e - 1))),
                l = [],
                u = [],
                d = [],
                _ = 0,
                c = 0,
                E = 0;
            if (0 !== r) {
                let i = function(t, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = Math.ceil(t.length / e);
                    u[c] = i ? 0 : r;
                    for (let a = 0; a < r; a++) {
                        let r = a * e,
                            s = r + e,
                            o = t.slice(r, s).map((e, t) => ({
                                item: e,
                                gridSectionIndex: c,
                                rowIndex: _,
                                columnIndex: t,
                                visibleRowIndex: E,
                                category: n
                            }));
                        !i && (E++, d.push(o), l.push(o.length)), _++
                    }
                    c++
                };
                for (let e of t)
                    if (e.items.length > 0) {
                        var I;
                        i(e.items, e.categoryInfo.type, null !== (I = null == n ? void 0 : n.has("".concat(e.key))) && void 0 !== I && I)
                    }
            }
            return {
                expressionsGrid: d,
                rowCount: _,
                rowCountBySection: u,
                columnCounts: l,
                gutterWidth: i
            }
        }, [t, n, r, o, s, a])
    }

    function A(e) {
        let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: r,
            store: a,
            gridNavigatorId: s,
            onSelectItem: l
        } = e, {
            gridDispatch: u,
            getItemProps: _,
            getRowProps: c,
            gridContainerProps: E,
            handleGridContainerKeyDown: I,
            isUsingKeyboardNavigation: T
        } = S({
            columnCounts: t,
            gridNavigatorId: s,
            itemGrid: n,
            itemList: r,
            onGridNavigatorItemSelect: l,
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
                type: o.GridActionType.SET_FOCUSED_POSITION,
                x: t,
                y: n
            })
        }, e => e.inspectedExpressionPosition), [u, a]), {
            getItemProps: _,
            getRowProps: c,
            gridContainerProps: E,
            handleGridContainerKeyDown: I,
            isUsingKeyboardNavigation: T
        }
    }
}