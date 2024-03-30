function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("222961"),
        u = n("251384"),
        s = n("281767"),
        l = n("479877"),
        c = function(e) {
            var t = e.activeIndex,
                n = e.categoryListRef,
                o = e.getScrollOffsetForIndex,
                i = r.useRef(s.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID),
                a = r.useRef(t);
            return r.useEffect(function() {
                null != t && t !== a.current && (i.current !== s.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(i.current), i.current = window.requestAnimationFrame(function() {
                    if (null != n.current) {
                        var e, r = t > (null !== (e = a.current) && void 0 !== e ? e : -1),
                            u = null != o ? o(t, r) : 0;
                        n.current.scrollRowIntoView(t, {
                            animate: !0,
                            offset: u
                        }), i.current = s.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID, a.current = t
                    }
                }))
            }, [t, n, o]), {
                categoryListRef: n
            }
        };
    t.default = function(e) {
        var t = e.categoryListRef,
            n = e.expressionsListRef,
            o = e.categories,
            s = e.store,
            f = e.children,
            d = e.className,
            _ = e.listPadding,
            E = e.rowCount,
            p = e.getScrollOffsetForIndex,
            m = e.categoryHeight,
            y = e.onScroll,
            I = e.renderCategoryListItem,
            h = e.rowCountBySection,
            O = e.renderSection,
            T = s.useStore(function(e) {
                return e.activeCategoryIndex
            });
        c({
            activeIndex: T,
            categoryListRef: t,
            getScrollOffsetForIndex: p
        });
        var S = r.useCallback(function(e) {
                var t, r = u.useExpressionPickerStore.getState().searchQuery;
                s.setActiveCategoryIndex(e), "" !== r ? (0, u.setSearchQuery)("") : null === (t = n.current) || void 0 === t || t.scrollToSectionTop(e)
            }, [n, s]),
            v = r.useCallback(function(e) {
                return I(o[e], e, function() {
                    return S(e)
                }, T === e)
            }, [T, o, S, I]),
            g = r.useMemo(function() {
                return "function" == typeof m ? function(e) {
                    return m(o[e], e)
                } : m
            }, [o, m]);
        return r.createElement("div", {
            className: i()(l.wrapper, d)
        }, r.createElement(a.default, {
            listPadding: _,
            onScroll: y,
            ref: t,
            renderRow: v,
            rowCount: E,
            rowHeight: g,
            hideScrollbar: !0,
            rowCountBySection: h,
            renderSection: O
        }), null == f ? void 0 : f(S))
    }
}