function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useExpressionGrid: function() {
            return h
        },
        useExpressionPickerGridKeyboardNavigation: function() {
            return I
        },
        useExpressionPickerGridWidth: function() {
            return E
        },
        useKeyboardNavigation: function() {
            return O
        },
        useShowUpsellForScrollPosition: function() {
            return m
        },
        useSynchronizedActiveCategoryIndexForScrollPosition: function() {
            return y
        },
        useSynchronizedScrollPositionForActiveCategoryIndex: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("657354"),
        u = n("498101"),
        s = n("805654"),
        l = n("337905"),
        c = n("512832"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var _ = (0, s.cssValueToNumber)(l.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        E = function(e) {
            var t, n, o = e.gridWrapperRef,
                a = e.containerWidth,
                u = e.showingEmptyState,
                s = e.listPaddingLeft,
                l = void 0 === s ? _ : s,
                c = e.listScrollbarWidth,
                f = void 0 === c ? 8 : c;
            var E = (t = r.useState(void 0), n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                p = E[0],
                m = E[1],
                y = r.useCallback(function() {
                    if (null == o.current) return null;
                    m(o.current.offsetWidth - l - f)
                }, [o, l, f]);
            return r.useLayoutEffect(function() {
                y()
            }, [a, y, u]), r.useEffect(function() {
                var e = i().debounce(y, 250);
                return window.addEventListener("resize", e),
                    function() {
                        return window.removeEventListener("resize", e)
                    }
            }, [y]), p
        },
        p = function(e) {
            var t = e.activeCategoryIndex,
                n = e.listRef,
                o = e.searchQuery,
                i = r.useRef(o),
                a = r.useRef(!0);
            r.useLayoutEffect(function() {
                if ("" === o && "" !== i.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t)
                }
                i.current = o
            }, [o, t, n]), r.useLayoutEffect(function() {
                if (a.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t), a.current = !1
                }
            }, [t, n]), r.useEffect(function() {
                i.current = o
            }, [o])
        },
        m = function(e) {
            var t = e.listRef,
                n = e.searchQuery,
                o = e.setShowUpsell,
                i = e.setUpsellGlowOpacity,
                a = e.emojiSectionDescriptors,
                u = r.useCallback(function(e) {
                    if ("" !== n) {
                        i(0);
                        return
                    }
                    if (null != t.current) {
                        var r = a.findIndex(function(e) {
                            return e.isNitroLocked
                        });
                        if (-1 === r) {
                            i(0);
                            return
                        }
                        var o = t.current.getSectionDescriptors();
                        if (null != o && 0 !== o.length && o.length === a.length) {
                            var u = o[r],
                                s = e + t.current.getListDimensions().height;
                            i(Math.min(Math.max((u.offset.top - (s - 250)) / 250, 0), 1))
                        }
                    }
                }, [n, t, a, i]),
                s = r.useCallback(function(e) {
                    if ("" !== n) {
                        o(!1);
                        return
                    }
                    if (null != t.current) {
                        var r = t.current.getSectionDescriptors();
                        if (null != r && 0 !== r.length && r.length === a.length) {
                            var i = t.current.getListDimensions().height,
                                u = e + .7 * i,
                                s = e + .85 * i,
                                l = !1,
                                c = !1;
                            a.forEach(function(e, t) {
                                if (e.isNitroLocked) {
                                    var n = r[t];
                                    n.offset.top <= s && n.offset.bottom >= s && (c = !0), n.offset.top <= u && n.offset.bottom >= u && (l = !0)
                                }
                            }), o(c && l)
                        }
                    }
                }, [n, t, a, o]);
            return r.useCallback(function(e) {
                s(e), u(e)
            }, [s, u])
        },
        y = function(e) {
            var t = e.activeCategoryIndex,
                n = e.listRef,
                o = e.isScrolling,
                a = e.searchQuery,
                u = e.scrollOffset,
                s = void 0 === u ? 0 : u,
                l = e.onActiveCategoryIndexChange,
                c = e.disableForSearch,
                d = void 0 === c || c,
                _ = r.useRef(f.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID),
                E = r.useMemo(function() {
                    return i().debounce(function() {
                        o.current = !1
                    }, 250)
                }, [o]),
                p = r.useMemo(function() {
                    return i().debounce(function(e) {
                        ("" === a || !d) && (window.cancelAnimationFrame(_.current), _.current = window.requestAnimationFrame(function() {
                            var r, o = null === (r = n.current) || void 0 === r ? void 0 : r.getSectionDescriptors();
                            if (null != o) {
                                var i = o.findIndex(function(t, n) {
                                        var r = o[n + 1],
                                            i = e + s >= t.offset.top,
                                            a = null != r && e + s < r.offset.top;
                                        return null != r && !i && !a || i && a || i && null == r
                                    }),
                                    a = -1 === i ? 0 : i;
                                t !== a && l(a)
                            }
                        }))
                    }, 0)
                }, [a, n, t, s, l, d]);
            return r.useCallback(function(e) {
                o.current = !0, E(), p(e)
            }, [o, E, p])
        },
        I = function(e) {
            var t = e.columnCounts,
                n = e.gridNavigatorId,
                o = e.itemGrid,
                i = e.itemList,
                u = e.onGridNavigatorItemSelect,
                s = e.onGridNavigatorPositionChange,
                l = r.useRef(!1),
                c = r.useCallback(function(e, t) {
                    var n = o[t];
                    if (null != n) return n[e]
                }, [o]),
                f = r.useCallback(function(e) {
                    var t = e.focusedX,
                        n = e.focusedY;
                    l.current = !0;
                    var r = c(t, n);
                    if (null != r) {
                        var o = r.visibleRowIndex;
                        s(r.columnIndex, o), null != i.current && i.current.scrollRowIntoView(n)
                    }
                }, [c, i, s]),
                d = r.useCallback(function(e, t, n) {
                    switch (n.type) {
                        case a.ActionType.NAVIGATE_UP:
                        case a.ActionType.NAVIGATE_DOWN:
                        case a.ActionType.NAVIGATE_RIGHT:
                        case a.ActionType.NAVIGATE_LEFT:
                        case a.ActionType.NAVIGATE_INLINE_START:
                        case a.ActionType.NAVIGATE_INLINE_END:
                        case a.ActionType.NAVIGATE_START:
                        case a.ActionType.NAVIGATE_END:
                        case a.ActionType.NAVIGATE_CROSSLINE_START:
                        case a.ActionType.NAVIGATE_CROSSLINE_END:
                            f(t)
                    }
                }, [f]),
                _ = r.useCallback(function(e, t, n) {
                    var r = c(e, t);
                    null != r && u(r, n)
                }, [c, u]),
                E = (0, a.useGridNavigator)({
                    navId: n,
                    columnCounts: t,
                    onDispatch: d,
                    onSelect: _,
                    autoFocusElement: !1,
                    useVirtualFocus: !0
                }),
                p = E.dispatch,
                m = E.getItemProps,
                y = E.getRowProps,
                I = E.getContainerProps,
                h = r.useMemo(function() {
                    var e = I();
                    return {
                        gridContainerProps: e,
                        handleGridContainerKeyDown: e.onKeyDown
                    }
                }, [I]),
                O = h.gridContainerProps,
                T = h.handleGridContainerKeyDown;
            return r.useEffect(function() {
                var e = function() {
                    l.current = !1
                };
                return window.addEventListener("mousemove", e),
                    function() {
                        return window.removeEventListener("mousemove", e)
                    }
            }, []), {
                gridDispatch: p,
                getItemProps: m,
                getRowProps: y,
                gridContainerProps: O,
                handleGridContainerKeyDown: T,
                isUsingKeyboardNavigation: l
            }
        };

    function h(e) {
        var t = e.categories,
            n = e.collapsedCategories,
            o = e.gridWidth,
            i = void 0 === o ? 0 : o,
            a = e.listPaddingRight,
            u = void 0 === a ? 0 : a,
            s = e.itemNodeWidth,
            l = e.itemNodeMargin,
            c = void 0 === l ? 0 : l;
        return r.useMemo(function() {
            var e = Math.max(1, Math.floor((i - u + c) / (s + c))),
                r = Math.floor(Math.max(c, (i - u - s * e) / (e - 1))),
                o = [],
                a = [],
                l = [],
                f = 0,
                d = 0,
                _ = 0;
            if (0 !== i) {
                var E = function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = Math.ceil(t.length / e);
                        a[d] = r ? 0 : i;
                        for (var u = 0; u < i; u++) {
                            var s = u * e,
                                c = s + e,
                                E = t.slice(s, c).map(function(e, t) {
                                    return {
                                        item: e,
                                        gridSectionIndex: d,
                                        rowIndex: f,
                                        columnIndex: t,
                                        visibleRowIndex: _,
                                        category: n
                                    }
                                });
                            !r && (_++, l.push(E), o.push(E.length)), f++
                        }
                        d++
                    },
                    p = !0,
                    m = !1,
                    y = void 0;
                try {
                    for (var I, h = t[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                        var O, T = I.value;
                        T.items.length > 0 && E(T.items, T.categoryInfo.type, null !== (O = null == n ? void 0 : n.has("".concat(T.key))) && void 0 !== O && O)
                    }
                } catch (e) {
                    m = !0, y = e
                } finally {
                    try {
                        !p && null != h.return && h.return()
                    } finally {
                        if (m) throw y
                    }
                }
            }
            return {
                expressionsGrid: l,
                rowCount: f,
                rowCountBySection: a,
                columnCounts: o,
                gutterWidth: r
            }
        }, [t, n, i, c, s, u])
    }

    function O(e) {
        var t = e.columnCounts,
            n = e.expressionsGrid,
            o = e.expressionsListRef,
            i = e.store,
            a = I({
                columnCounts: t,
                gridNavigatorId: e.gridNavigatorId,
                itemGrid: n,
                itemList: o,
                onGridNavigatorItemSelect: e.onSelectItem,
                onGridNavigatorPositionChange: i.setInspectedExpressionPosition
            }),
            s = a.gridDispatch,
            l = a.getItemProps,
            f = a.getRowProps,
            d = a.gridContainerProps,
            _ = a.handleGridContainerKeyDown,
            E = a.isUsingKeyboardNavigation;
        return r.useEffect(function() {
            return i.useStore.subscribe(function(e) {
                if (null != e) {
                    var t = e.columnIndex,
                        n = e.rowIndex;
                    e.source !== c.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && s({
                        type: u.GridActionType.SET_FOCUSED_POSITION,
                        x: t,
                        y: n
                    })
                }
            }, function(e) {
                return e.inspectedExpressionPosition
            })
        }, [s, i]), {
            getItemProps: l,
            getRowProps: f,
            gridContainerProps: d,
            handleGridContainerKeyDown: _,
            isUsingKeyboardNavigation: E
        }
    }
}