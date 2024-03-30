function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("222961"),
        i = n("251384"),
        a = n("61546"),
        u = n("501014");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e) {
        return function(e) {
            if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var c = r.forwardRef(function(e, t) {
        var n = e.store,
            s = e.hasSearchResults,
            c = e.listPadding,
            f = e.renderRow,
            d = e.renderSection,
            _ = e.renderSectionHeader,
            E = e.renderSectionFooter,
            p = e.renderInspector,
            m = e.renderEmptySearchState,
            y = e.rowCount,
            I = e.rowCountBySection,
            h = e.rowHeight,
            O = e.sectionHeaderHeight,
            T = e.sectionFooterHeight,
            S = r.useRef(!1),
            v = r.useRef(null),
            g = (0, i.useExpressionPickerStore)(function(e) {
                return e.searchQuery
            }),
            A = n.useStore(function(e) {
                return e.activeCategoryIndex
            }),
            b = (0, a.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: A,
                isScrolling: S,
                listRef: v,
                onActiveCategoryIndexChange: n.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: g
            });
        return (0, a.useSynchronizedScrollPositionForActiveCategoryIndex)({
            searchQuery: g,
            activeCategoryIndex: A,
            listRef: v
        }), r.useImperativeHandle(t, function() {
            return {
                scrollTo: function() {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = v.current) || void 0 === e ? void 0 : e.scrollTo.apply(e, l(n))
                },
                getRowDescriptors: function() {
                    var e, t;
                    return null !== (t = null === (e = v.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                },
                getSectionDescriptors: function() {
                    var e, t;
                    return null !== (t = null === (e = v.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                },
                scrollToSectionTop: function() {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = v.current) || void 0 === e ? void 0 : e.scrollToSectionTop.apply(e, l(n))
                },
                scrollRowIntoView: function() {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = v.current) || void 0 === e ? void 0 : e.scrollRowIntoView.apply(e, l(n))
                },
                getScrollerNode: function() {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = v.current) || void 0 === e ? void 0 : e.getScrollerNode.apply(e, l(n))
                },
                scrollIntoViewNode: function() {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = v.current) || void 0 === e ? void 0 : e.scrollIntoViewNode.apply(e, l(n))
                },
                getListDimensions: function() {
                    for (var e, t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return null !== (t = null === (e = v.current) || void 0 === e ? void 0 : e.getListDimensions.apply(e, l(r))) && void 0 !== t ? t : {
                        height: -1,
                        totalHeight: -1
                    }
                }
            }
        }, []), r.createElement("div", {
            className: u.wrapper
        }, g.length > 0 && !s && null != m ? m() : r.createElement(o.default, {
            role: "none presentation",
            listPadding: c,
            onScroll: b,
            renderRow: f,
            renderSection: d,
            renderSectionHeader: _,
            renderSectionFooter: E,
            rowCount: y,
            rowCountBySection: I,
            rowHeight: h,
            sectionHeaderHeight: O,
            sectionFooterHeight: T,
            stickyHeaders: !0,
            ref: v
        }), null == p ? void 0 : p())
    });
    t.default = c
}