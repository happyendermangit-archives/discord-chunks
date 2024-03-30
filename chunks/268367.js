function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("797056"),
        s = n("689758"),
        l = n("861272"),
        c = n("960201"),
        f = n("678517"),
        d = [16, 12, 8, 12];

    function _(e) {
        var t = e.className,
            n = e.channel,
            o = e.sections,
            _ = e.activeCategoryIndex,
            E = e.filteredSectionId,
            p = e.onSectionClick,
            m = e.applicationCommandListRef,
            y = r.useRef(null),
            I = r.useCallback(function(e, t) {
                var n, r = 8;
                return (null === (n = o[t + 1]) || void 0 === n ? void 0 : n.type) === l.ApplicationCommandSectionType.BUILT_IN && (r += 8), 32 + r
            }, [o]),
            h = r.useCallback(function(e, t) {
                var n;
                if (!t) return 0 === e ? 0 : 8;
                return (null === (n = o[e + 1]) || void 0 === n ? void 0 : n.type) === l.ApplicationCommandSectionType.BUILT_IN ? 0 : 8
            }, [o]),
            O = r.useCallback(function(e, t) {
                var i = o[t];
                if (null != i) {
                    var u = (0, c.getIconComponent)(i),
                        s = i.type === l.ApplicationCommandSectionType.BUILT_IN ? 4 : 0,
                        d = 32 - 2 * s,
                        m = r.createElement(u, {
                            channel: n,
                            section: i,
                            isSelected: null != E ? i.id === E : _ === t,
                            padding: s,
                            width: d,
                            height: d,
                            selectable: !0
                        }),
                        y = i.type !== l.ApplicationCommandSectionType.BUILT_IN && t < o.length - 1 && o[t + 1].type === l.ApplicationCommandSectionType.BUILT_IN;
                    return r.createElement("div", {
                        key: i.id,
                        className: f.section
                    }, r.createElement(a.Tooltip, {
                        text: i.name,
                        position: "right"
                    }, function(e) {
                        var t = e.onClick,
                            n = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < i.length; r++) {
                                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                    }
                                }
                                return o
                            }(e, ["onClick"]);
                        return r.createElement(a.Clickable, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r, o, i;
                                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : r[o] = i
                                })
                            }
                            return e
                        }({
                            "aria-label": i.name,
                            onClick: function() {
                                p(i), null == t || t()
                            }
                        }, n), m)
                    }), y ? r.createElement("hr", {
                        className: f.builtInSeparator
                    }) : null)
                }
            }, [_, n, p, o, E]);
        return 0 === o.length ? null : r.createElement("div", {
            className: i()(t, f.wrapper)
        }, r.createElement(s.default, {
            categoryListRef: y,
            expressionsListRef: m,
            store: u.ApplicationCommandDiscoveryPickerStore,
            categories: o,
            className: f.list,
            renderCategoryListItem: O,
            rowCount: o.length,
            categoryHeight: I,
            listPadding: d,
            getScrollOffsetForIndex: h
        }))
    }
}