function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTable: function() {
            return J
        },
        useTableCell: function() {
            return ei
        },
        useTableColumnHeader: function() {
            return ee
        },
        useTableHeaderRow: function() {
            return er
        },
        useTableRow: function() {
            return en
        },
        useTableRowGroup: function() {
            return es
        },
        useTableSelectAllCheckbox: function() {
            return eo
        },
        useTableSelectionCheckbox: function() {
            return ea
        }
    });
    var r = n("314867"),
        i = n("957533"),
        a = n("454277"),
        o = n("532953"),
        s = n("162104"),
        u = n("86256"),
        c = n("288296"),
        l = n("381798"),
        d = n("391202"),
        f = n("757257"),
        p = n("226511"),
        h = n("540793"),
        m = n("35556"),
        g = n("63816"),
        _ = n("501467"),
        b = n("395182"),
        v = n("690601"),
        y = n("584371"),
        E = n("494449"),
        S = n("354136"),
        x = n("659747"),
        w = n("336825"),
        T = n("811318"),
        C = n("365388"),
        D = n("820553"),
        O = n("340447"),
        M = n("169650"),
        A = n("593495"),
        k = n("980021"),
        R = n("44385"),
        N = n("69235"),
        I = n("205996"),
        L = n("332523"),
        P = n("145780"),
        F = n("166585"),
        B = n("770003"),
        U = n("182823"),
        Y = n("470079"),
        j = n("448302"),
        z = n("602607"),
        H = n("275857"),
        G = n("706682"),
        V = n("612001");

    function $(e) {
        return e && e.__esModule ? e.default : e
    }
    let W = new WeakMap;

    function K(e) {
        return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
    }

    function q(e, t, n) {
        let r = W.get(e);
        if (!r) throw Error("Unknown grid");
        return `${r}-${K(t)}-${K(n)}`
    }

    function Q(e, t) {
        return [...e.collection.rowHeaderColumnKeys].map(n => q(e, t, n)).join(" ")
    }
    var Z = {};
    Z = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": a.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": u.default,
        "en-US": c.default,
        "es-ES": l.default,
        "et-EE": d.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": m.default,
        "hu-HU": g.default,
        "it-IT": _.default,
        "ja-JP": b.default,
        "ko-KR": v.default,
        "lt-LT": y.default,
        "lv-LV": E.default,
        "nb-NO": S.default,
        "nl-NL": x.default,
        "pl-PL": w.default,
        "pt-BR": T.default,
        "pt-PT": C.default,
        "ro-RO": D.default,
        "ru-RU": O.default,
        "sk-SK": M.default,
        "sl-SI": A.default,
        "sr-SP": k.default,
        "sv-SE": R.default,
        "tr-TR": N.default,
        "uk-UA": I.default,
        "zh-CN": L.default,
        "zh-TW": P.default
    };
    class X extends F.GridKeyboardDelegate {
        isCell(e) {
            return "cell" === e.type || "rowheader" === e.type || "column" === e.type
        }
        getKeyBelow(e) {
            let t = this.collection.getItem(e);
            if (t) {
                if ("column" === t.type) {
                    let e = (0, H.getFirstItem)((0, H.getChildNodes)(t, this.collection));
                    if (e) return e.key;
                    let n = this.getFirstKey();
                    if (null == n) return;
                    let r = this.collection.getItem(n);
                    return (0, H.getNthItem)((0, H.getChildNodes)(r, this.collection), t.index).key
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
            for (let e of (0, H.getChildNodes)(n, this.collection))
                if ("column" === e.type) return e.key
        }
        findPreviousColumnKey(e) {
            let t = this.findPreviousKey(e.key, e => "column" === e.type);
            if (null != t) return t;
            let n = this.collection.headerRows[e.level],
                r = [...(0, H.getChildNodes)(n, this.collection)];
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
            let a = !1;
            for (; null != r;) {
                let o = n.getItem(r);
                for (let r of (0, H.getChildNodes)(o, this.collection)) {
                    let a = n.columns[r.index];
                    if (n.rowHeaderColumnKeys.has(a.key) && r.textValue) {
                        let a = r.textValue.slice(0, e.length);
                        if (0 === this.collator.compare(a, e)) return "cell" === (null != t ? n.getItem(t) : i).type ? r.key : o.key
                    }
                }
                null == (r = this.getKeyBelow(r)) && !a && (r = this.getFirstKey(), a = !0)
            }
            return null
        }
    }

    function J(e, t, n) {
        let {
            keyboardDelegate: r,
            isVirtualized: i,
            layout: a
        } = e, o = (0, z.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), {
            direction: s
        } = (0, z.useLocale)(), u = t.selectionManager.disabledBehavior, c = (0, Y.useMemo)(() => r || new X({
            collection: t.collection,
            disabledKeys: "selection" === u ? new Set : t.disabledKeys,
            ref: n,
            direction: s,
            collator: o,
            layout: a
        }), [r, t.collection, t.disabledKeys, u, n, s, o, a]), l = (0, U.useId)(e.id);
        W.set(t, l);
        let {
            gridProps: d
        } = (0, F.useGrid)({
            ...e,
            id: l,
            keyboardDelegate: c
        }, t, n);
        i && (d["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), (0, j.tableNestedRows)() && "expandedKeys" in t && (d.role = "treegrid");
        let {
            column: f,
            direction: p
        } = t.sortDescriptor || {}, h = (0, z.useLocalizedStringFormatter)($(Z), "@react-aria/table"), m = (0, Y.useMemo)(() => {
            var e;
            let n = null === (e = t.collection.columns.find(e => e.key === f)) || void 0 === e ? void 0 : e.textValue;
            return p && f ? h.format(`${p}Sort`, {
                columnName: n
            }) : void 0
        }, [p, f, t.collection.columns]), g = (0, U.useDescription)(m);
        return (0, U.useUpdateEffect)(() => {
            (0, B.announce)(m, "assertive", 500)
        }, [m]), {
            gridProps: (0, U.mergeProps)(d, g, {
                "aria-describedby": [g["aria-describedby"], d["aria-describedby"]].filter(Boolean).join(" ")
            })
        }
    }

    function ee(e, t, n) {
        var r, i;
        let a;
        let {
            node: o
        } = e, s = o.props.allowsSorting, {
            gridCellProps: u
        } = (0, F.useGridCell)({
            ...e,
            focusMode: "child"
        }, t, n), c = o.props.isSelectionCell && "single" === t.selectionManager.selectionMode, {
            pressProps: l
        } = (0, V.usePress)({
            isDisabled: !s || c,
            onPress() {
                t.sort(o.key)
            },
            ref: n
        }), {
            focusableProps: d
        } = (0, G.useFocusable)({}, n), f = null, p = (null === (r = t.sortDescriptor) || void 0 === r ? void 0 : r.column) === o.key, h = null === (i = t.sortDescriptor) || void 0 === i ? void 0 : i.direction;
        o.props.allowsSorting && !(0, U.isAndroid)() && (f = p ? h : "none");
        let m = (0, z.useLocalizedStringFormatter)($(Z), "@react-aria/table");
        s && (a = `${m.format("sortable")}`, p && h && (0, U.isAndroid)() && (a = `${a}, ${m.format(h)}`));
        let g = (0, U.useDescription)(a),
            _ = 0 === t.collection.size;
        return (0, Y.useEffect)(() => {
            _ && t.selectionManager.focusedKey === o.key && t.selectionManager.setFocusedKey(null)
        }, [_, t.selectionManager, o.key]), {
            columnHeaderProps: {
                ...(0, U.mergeProps)(u, l, d, g, _ && {
                    tabIndex: -1
                }),
                role: "columnheader",
                id: function(e, t) {
                    let n = W.get(e);
                    if (!n) throw Error("Unknown grid");
                    return `${n}-${K(t)}`
                }(t, o.key),
                "aria-colspan": o.colspan && o.colspan > 1 ? o.colspan : null,
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
            rowProps: a,
            ...o
        } = (0, F.useGridRow)(e, t, n), {
            direction: s
        } = (0, z.useLocale)();
        i && !((0, j.tableNestedRows)() && "expandedKeys" in t) ? a["aria-rowindex"] = r.index + 1 + t.collection.headerRows.length : delete a["aria-rowindex"];
        let u = {};
        if ((0, j.tableNestedRows)() && "expandedKeys" in t) {
            let e = t.keyMap.get(r.key);
            if (null != e) {
                var c, l, d;
                let n = (null === (c = e.props) || void 0 === c ? void 0 : c.UNSTABLE_childItems) || (null === (d = e.props) || void 0 === d ? void 0 : null === (l = d.children) || void 0 === l ? void 0 : l.length) > t.userColumnCount;
                u = {
                    onKeyDown: r => {
                        r.key === et.expand[s] && t.selectionManager.focusedKey === e.key && n && "all" !== t.expandedKeys && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), r.stopPropagation()) : r.key === et.collapse[s] && t.selectionManager.focusedKey === e.key && n && ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) && (t.toggleKey(e.key), r.stopPropagation())
                    },
                    "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(r.key) : void 0,
                    "aria-level": e.level,
                    "aria-posinset": e.indexOfType + 1,
                    "aria-setsize": e.level > 1 ? (0, H.getLastItem)(t.keyMap.get(null == e ? void 0 : e.parentKey).childNodes).indexOfType + 1 : (0, H.getLastItem)(t.keyMap.get(t.collection.body.key).childNodes).indexOfType + 1
                }
            }
        }
        let f = o.hasAction ? (0, U.getSyntheticLinkProps)(r.props) : {};
        return {
            rowProps: {
                ...(0, U.mergeProps)(a, u, f),
                "aria-labelledby": Q(t, r.key)
            },
            ...o
        }
    }

    function er(e, t, n) {
        let {
            node: r,
            isVirtualized: i
        } = e, a = {
            role: "row"
        };
        return i && !((0, j.tableNestedRows)() && "expandedKeys" in t) && (a["aria-rowindex"] = r.index + 1), {
            rowProps: a
        }
    }

    function ei(e, t, n) {
        let {
            gridCellProps: r,
            isPressed: i
        } = (0, F.useGridCell)(e, t, n), a = e.node.column.key;
        return t.collection.rowHeaderColumnKeys.has(a) && (r.role = "rowheader", r.id = q(t, e.node.parentKey, a)), {
            gridCellProps: r,
            isPressed: i
        }
    }

    function ea(e, t) {
        let {
            key: n
        } = e, {
            checkboxProps: r
        } = (0, F.useGridSelectionCheckbox)(e, t);
        return {
            checkboxProps: {
                ...r,
                "aria-labelledby": `${r.id} ${Q(t,n)}`
            }
        }
    }

    function eo(e) {
        let {
            isEmpty: t,
            isSelectAll: n,
            selectionMode: r
        } = e.selectionManager;
        return {
            checkboxProps: {
                "aria-label": (0, z.useLocalizedStringFormatter)($(Z), "@react-aria/table").format("single" === r ? "select" : "selectAll"),
                isSelected: n,
                isDisabled: "multiple" !== r || 0 === e.collection.size,
                isIndeterminate: !t && !n,
                onChange: () => e.selectionManager.toggleSelectAll()
            }
        }
    }

    function es() {
        return (0, F.useGridRowGroup)()
    }
}