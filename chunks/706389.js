function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTableRowGroup: function() {
            return ea
        },
        useTable: function() {
            return Q
        },
        useTableColumnHeader: function() {
            return ee
        },
        useTableRow: function() {
            return en
        },
        useTableHeaderRow: function() {
            return er
        },
        useTableCell: function() {
            return ei
        },
        useTableSelectionCheckbox: function() {
            return eo
        },
        useTableSelectAllCheckbox: function() {
            return es
        }
    }), n("222007"), n("781738"), n("70102");
    var r = n("407304"),
        i = n("586278"),
        o = n("510050"),
        s = n("461902"),
        a = n("879618"),
        c = n("60991"),
        u = n("796207"),
        d = n("493204"),
        l = n("932266"),
        f = n("189305"),
        p = n("655726"),
        h = n("326832"),
        v = n("52456"),
        g = n("336838"),
        b = n("868010"),
        m = n("63877"),
        y = n("956686"),
        x = n("866180"),
        w = n("269442"),
        S = n("156878"),
        k = n("993905"),
        E = n("732812"),
        _ = n("770713"),
        M = n("474048"),
        D = n("385884"),
        C = n("591088"),
        P = n("88733"),
        T = n("981230"),
        A = n("785963"),
        R = n("56738"),
        I = n("406143"),
        O = n("990047"),
        j = n("910107"),
        L = n("840223"),
        N = n("721598"),
        F = n("362561"),
        B = n("240849"),
        z = n("884691"),
        K = n("787100"),
        V = n("564341"),
        U = n("846794"),
        H = n("447259"),
        q = n("388032");

    function G(e) {
        return e && e.__esModule ? e.default : e
    }
    let W = new WeakMap;

    function Z(e) {
        return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
    }

    function Y(e, t, n) {
        let r = W.get(e);
        if (!r) throw Error("Unknown grid");
        return "".concat(r, "-").concat(Z(t), "-").concat(Z(n))
    }

    function X(e, t) {
        return [...e.collection.rowHeaderColumnKeys].map(n => Y(e, t, n)).join(" ")
    }
    var J = {};
    J = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": o.default,
        "da-DK": s.default,
        "de-DE": a.default,
        "el-GR": c.default,
        "en-US": u.default,
        "es-ES": d.default,
        "et-EE": l.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": v.default,
        "hu-HU": g.default,
        "it-IT": b.default,
        "ja-JP": m.default,
        "ko-KR": y.default,
        "lt-LT": x.default,
        "lv-LV": w.default,
        "nb-NO": S.default,
        "nl-NL": k.default,
        "pl-PL": E.default,
        "pt-BR": _.default,
        "pt-PT": M.default,
        "ro-RO": D.default,
        "ru-RU": C.default,
        "sk-SK": P.default,
        "sl-SI": T.default,
        "sr-SP": A.default,
        "sv-SE": R.default,
        "tr-TR": I.default,
        "uk-UA": O.default,
        "zh-CN": j.default,
        "zh-TW": L.default
    };
    class $ extends N.GridKeyboardDelegate {
        isCell(e) {
            return "cell" === e.type || "rowheader" === e.type || "column" === e.type
        }
        getKeyBelow(e) {
            let t = this.collection.getItem(e);
            if (t) {
                if ("column" === t.type) {
                    let e = (0, U.getFirstItem)((0, U.getChildNodes)(t, this.collection));
                    if (e) return e.key;
                    let n = this.getFirstKey();
                    if (null == n) return;
                    let r = this.collection.getItem(n);
                    return (0, U.getNthItem)((0, U.getChildNodes)(r, this.collection), t.index).key
                }
                return super.getKeyBelow(e)
            }
        }
        getKeyAbove(e) {
            let t = this.collection.getItem(e);
            if (!t) return;
            if ("column" === t.type) {
                let e = this.collection.getItem(t.parentKey);
                return e && "column" === e.type ? e.key : void 0
            }
            let n = super.getKeyAbove(e);
            return null != n && "headerrow" !== this.collection.getItem(n).type ? n : this.isCell(t) ? this.collection.columns[t.index].key : this.collection.columns[0].key
        }
        findNextColumnKey(e) {
            let t = this.findNextKey(e.key, e => "column" === e.type);
            if (null != t) return t;
            let n = this.collection.headerRows[e.level];
            for (let e of (0, U.getChildNodes)(n, this.collection))
                if ("column" === e.type) return e.key
        }
        findPreviousColumnKey(e) {
            let t = this.findPreviousKey(e.key, e => "column" === e.type);
            if (null != t) return t;
            let n = this.collection.headerRows[e.level],
                r = [...(0, U.getChildNodes)(n, this.collection)];
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("column" === t.type) return t.key
            }
        }
        getKeyRightOf(e) {
            let t = this.collection.getItem(e);
            if (t) return "column" === t.type ? "rtl" === this.direction ? this.findPreviousColumnKey(t) : this.findNextColumnKey(t) : super.getKeyRightOf(e)
        }
        getKeyLeftOf(e) {
            let t = this.collection.getItem(e);
            if (t) return "column" === t.type ? "rtl" === this.direction ? this.findNextColumnKey(t) : this.findPreviousColumnKey(t) : super.getKeyLeftOf(e)
        }
        getKeyForSearch(e, t) {
            if (!this.collator) return null;
            let n = this.collection,
                r = null != t ? t : this.getFirstKey();
            if (null == r) return null;
            let i = n.getItem(r);
            "cell" === i.type && (r = i.parentKey);
            let o = !1;
            for (; null != r;) {
                let s = n.getItem(r);
                for (let r of (0, U.getChildNodes)(s, this.collection)) {
                    let o = n.columns[r.index];
                    if (n.rowHeaderColumnKeys.has(o.key) && r.textValue) {
                        let o = r.textValue.slice(0, e.length);
                        if (0 === this.collator.compare(o, e)) return "cell" === (null != t ? n.getItem(t) : i).type ? r.key : s.key
                    }
                }
                null == (r = this.getKeyBelow(r)) && !o && (r = this.getFirstKey(), o = !0)
            }
            return null
        }
    }

    function Q(e, t, n) {
        let {
            keyboardDelegate: r,
            isVirtualized: i,
            layout: o
        } = e, s = (0, V.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), {
            direction: a
        } = (0, V.useLocale)(), c = t.selectionManager.disabledBehavior, u = (0, z.useMemo)(() => r || new $({
            collection: t.collection,
            disabledKeys: "selection" === c ? new Set : t.disabledKeys,
            ref: n,
            direction: a,
            collator: s,
            layout: o
        }), [r, t.collection, t.disabledKeys, c, n, a, s, o]), d = (0, B.useId)(e.id);
        W.set(t, d);
        let {
            gridProps: l
        } = (0, N.useGrid)({
            ...e,
            id: d,
            keyboardDelegate: u
        }, t, n);
        i && (l["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), (0, K.tableNestedRows)() && "expandedKeys" in t && (l.role = "treegrid");
        let {
            column: f,
            direction: p
        } = t.sortDescriptor || {}, h = (0, V.useLocalizedStringFormatter)(G(J), "@react-aria/table"), v = (0, z.useMemo)(() => {
            var e;
            let n = null === (e = t.collection.columns.find(e => e.key === f)) || void 0 === e ? void 0 : e.textValue;
            return p && f ? h.format("".concat(p, "Sort"), {
                columnName: n
            }) : void 0
        }, [p, f, t.collection.columns]), g = (0, B.useDescription)(v);
        return (0, B.useUpdateEffect)(() => {
            (0, F.announce)(v, "assertive", 500)
        }, [v]), {
            gridProps: (0, B.mergeProps)(l, g, {
                "aria-describedby": [g["aria-describedby"], l["aria-describedby"]].filter(Boolean).join(" ")
            })
        }
    }

    function ee(e, t, n) {
        var r, i;
        let o;
        let {
            node: s
        } = e, a = s.props.allowsSorting, {
            gridCellProps: c
        } = (0, N.useGridCell)({
            ...e,
            focusMode: "child"
        }, t, n), u = s.props.isSelectionCell && "single" === t.selectionManager.selectionMode, {
            pressProps: d
        } = (0, q.usePress)({
            isDisabled: !a || u,
            onPress() {
                t.sort(s.key)
            },
            ref: n
        }), {
            focusableProps: l
        } = (0, H.useFocusable)({}, n), f = null, p = (null === (r = t.sortDescriptor) || void 0 === r ? void 0 : r.column) === s.key, h = null === (i = t.sortDescriptor) || void 0 === i ? void 0 : i.direction;
        s.props.allowsSorting && !(0, B.isAndroid)() && (f = p ? h : "none");
        let v = (0, V.useLocalizedStringFormatter)(G(J), "@react-aria/table");
        a && (o = "".concat(v.format("sortable")), p && h && (0, B.isAndroid)() && (o = "".concat(o, ", ").concat(v.format(h))));
        let g = (0, B.useDescription)(o),
            b = 0 === t.collection.size;
        return (0, z.useEffect)(() => {
            b && t.selectionManager.focusedKey === s.key && t.selectionManager.setFocusedKey(null)
        }, [b, t.selectionManager, s.key]), {
            columnHeaderProps: {
                ...(0, B.mergeProps)(c, d, l, g, b && {
                    tabIndex: -1
                }),
                role: "columnheader",
                id: function(e, t) {
                    let n = W.get(e);
                    if (!n) throw Error("Unknown grid");
                    return "".concat(n, "-").concat(Z(t))
                }(t, s.key),
                "aria-colspan": s.colspan && s.colspan > 1 ? s.colspan : null,
                "aria-sort": f
            }
        }
    }
    let et = {
        expand: {
            ltr: "ArrowRight",
            rtl: "ArrowLeft"
        },
        collapse: {
            ltr: "ArrowLeft",
            rtl: "ArrowRight"
        }
    };

    function en(e, t, n) {
        let {
            node: r,
            isVirtualized: i
        } = e, {
            rowProps: o,
            ...s
        } = (0, N.useGridRow)(e, t, n), {
            direction: a
        } = (0, V.useLocale)();
        i && !((0, K.tableNestedRows)() && "expandedKeys" in t) ? o["aria-rowindex"] = r.index + 1 + t.collection.headerRows.length : delete o["aria-rowindex"];
        let c = {};
        if ((0, K.tableNestedRows)() && "expandedKeys" in t) {
            let e = t.keyMap.get(r.key);
            if (null != e) {
                var u, d, l;
                let n = (null === (u = e.props) || void 0 === u ? void 0 : u.UNSTABLE_childItems) || (null === (l = e.props) || void 0 === l ? void 0 : null === (d = l.children) || void 0 === d ? void 0 : d.length) > t.userColumnCount;
                c = {
                    onKeyDown: r => {
                        r.key === et.expand[a] && t.selectionManager.focusedKey === e.key && n && "all" !== t.expandedKeys && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), r.stopPropagation()) : r.key === et.collapse[a] && t.selectionManager.focusedKey === e.key && n && ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) && (t.toggleKey(e.key), r.stopPropagation())
                    },
                    "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(r.key) : void 0,
                    "aria-level": e.level,
                    "aria-posinset": e.indexOfType + 1,
                    "aria-setsize": e.level > 1 ? (0, U.getLastItem)(t.keyMap.get(null == e ? void 0 : e.parentKey).childNodes).indexOfType + 1 : (0, U.getLastItem)(t.keyMap.get(t.collection.body.key).childNodes).indexOfType + 1
                }
            }
        }
        let f = s.hasAction ? (0, B.getSyntheticLinkProps)(r.props) : {};
        return {
            rowProps: {
                ...(0, B.mergeProps)(o, c, f),
                "aria-labelledby": X(t, r.key)
            },
            ...s
        }
    }

    function er(e, t, n) {
        let {
            node: r,
            isVirtualized: i
        } = e, o = {
            role: "row"
        };
        return i && !((0, K.tableNestedRows)() && "expandedKeys" in t) && (o["aria-rowindex"] = r.index + 1), {
            rowProps: o
        }
    }

    function ei(e, t, n) {
        let {
            gridCellProps: r,
            isPressed: i
        } = (0, N.useGridCell)(e, t, n), o = e.node.column.key;
        return t.collection.rowHeaderColumnKeys.has(o) && (r.role = "rowheader", r.id = Y(t, e.node.parentKey, o)), {
            gridCellProps: r,
            isPressed: i
        }
    }

    function eo(e, t) {
        let {
            key: n
        } = e, {
            checkboxProps: r
        } = (0, N.useGridSelectionCheckbox)(e, t);
        return {
            checkboxProps: {
                ...r,
                "aria-labelledby": "".concat(r.id, " ").concat(X(t, n))
            }
        }
    }

    function es(e) {
        let {
            isEmpty: t,
            isSelectAll: n,
            selectionMode: r
        } = e.selectionManager, i = (0, V.useLocalizedStringFormatter)(G(J), "@react-aria/table");
        return {
            checkboxProps: {
                "aria-label": i.format("single" === r ? "select" : "selectAll"),
                isSelected: n,
                isDisabled: "multiple" !== r || 0 === e.collection.size,
                isIndeterminate: !t && !n,
                onChange: () => e.selectionManager.toggleSelectAll()
            }
        }
    }

    function ea() {
        return (0, N.useGridRowGroup)()
    }
}