function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTableState: function() {
            return d
        },
        buildHeaderRows: function() {
            return c
        }
    }), n("70102"), n("424973"), n("808653"), n("222007"), n("843762");
    var r = n("872834"),
        a = n("884691"),
        i = n("626619");
    let o = "row-header-column-" + Math.random().toString(36).slice(2),
        s = "row-header-column-" + Math.random().toString(36).slice(2);
    for (; o === s;) s = "row-header-column-" + Math.random().toString(36).slice(2);

    function c(e, t) {
        if (0 === t.length) return [];
        let n = [],
            r = new Map;
        for (let a of t) {
            let t = a.parentKey,
                i = [a];
            for (; t;) {
                let n = e.get(t);
                if (!n) break;
                if (r.has(n)) {
                    n.colspan++;
                    let {
                        column: e,
                        index: t
                    } = r.get(n);
                    if (t > i.length) break;
                    for (let n = t; n < i.length; n++) e.splice(n, 0, null);
                    for (let t = i.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t)
                } else n.colspan = 1, i.push(n), r.set(n, {
                    column: i,
                    index: i.length - 1
                });
                t = n.parentKey
            }
            n.push(i), a.index = n.length - 1
        }
        let a = Math.max(...n.map(e => e.length)),
            i = Array(a).fill(0).map(() => []),
            o = 0;
        for (let e of n) {
            let t = a - 1;
            for (let n of e) {
                if (n) {
                    let e = i[t],
                        r = e.reduce((e, t) => e + t.colspan, 0);
                    if (r < o) {
                        let a = {
                            type: "placeholder",
                            key: "placeholder-" + n.key,
                            colspan: o - r,
                            index: r,
                            value: null,
                            rendered: null,
                            level: t,
                            hasChildNodes: !1,
                            childNodes: [],
                            textValue: null
                        };
                        e.length > 0 && (e[e.length - 1].nextKey = a.key, a.prevKey = e[e.length - 1].key), e.push(a)
                    }
                    e.length > 0 && (e[e.length - 1].nextKey = n.key, n.prevKey = e[e.length - 1].key), n.level = t, n.colIndex = o, e.push(n)
                }
                t--
            }
            o++
        }
        let s = 0;
        for (let e of i) {
            let n = e.reduce((e, t) => e + t.colspan, 0);
            if (n < t.length) {
                let r = {
                    type: "placeholder",
                    key: "placeholder-" + e[e.length - 1].key,
                    colspan: t.length - n,
                    index: n,
                    value: null,
                    rendered: null,
                    level: s,
                    hasChildNodes: !1,
                    childNodes: [],
                    textValue: null,
                    prevKey: e[e.length - 1].key
                };
                e.push(r)
            }
            s++
        }
        return i.map((e, t) => ({
            type: "headerrow",
            key: "headerrow-" + t,
            index: t,
            value: null,
            rendered: null,
            level: 0,
            hasChildNodes: !0,
            childNodes: e,
            textValue: null
        }))
    }
    class l extends i.GridCollection {
        *[Symbol.iterator]() {
            yield* this.body.childNodes
        }
        get size() {
            return this._size
        }
        getKeys() {
            return this.keyMap.keys()
        }
        getKeyBefore(e) {
            let t = this.keyMap.get(e);
            return t ? t.prevKey : null
        }
        getKeyAfter(e) {
            let t = this.keyMap.get(e);
            return t ? t.nextKey : null
        }
        getFirstKey() {
            var e;
            return null === (e = (0, r.getFirstItem)(this.body.childNodes)) || void 0 === e ? void 0 : e.key
        }
        getLastKey() {
            var e;
            return null === (e = (0, r.getLastItem)(this.body.childNodes)) || void 0 === e ? void 0 : e.key
        }
        getItem(e) {
            return this.keyMap.get(e)
        }
        at(e) {
            let t = [...this.getKeys()];
            return this.getItem(t[e])
        }
        getTextValue(e) {
            let t = this.getItem(e);
            if (!t) return "";
            if (t.textValue) return t.textValue;
            let n = this.rowHeaderColumnKeys;
            if (n) {
                let e = [];
                for (let r of t.childNodes) {
                    let t = this.columns[r.index];
                    if (n.has(t.key) && r.textValue && e.push(r.textValue), e.length === n.size) break
                }
                return e.join(" ")
            }
            return ""
        }
        constructor(e, t, n) {
            let r, a = new Set,
                i = [];
            if (null == n ? void 0 : n.showSelectionCheckboxes) {
                let e = {
                    type: "column",
                    key: o,
                    value: null,
                    textValue: "",
                    level: 0,
                    index: (null == n ? void 0 : n.showDragButtons) ? 1 : 0,
                    hasChildNodes: !1,
                    rendered: null,
                    childNodes: [],
                    props: {
                        isSelectionCell: !0
                    }
                };
                i.unshift(e)
            }
            if (null == n ? void 0 : n.showDragButtons) {
                let e = {
                    type: "column",
                    key: s,
                    value: null,
                    textValue: "",
                    level: 0,
                    index: 0,
                    hasChildNodes: !1,
                    rendered: null,
                    childNodes: [],
                    props: {
                        isDragButtonCell: !0
                    }
                };
                i.unshift(e)
            }
            let l = [],
                u = new Map,
                d = e => {
                    switch (e.type) {
                        case "body":
                            r = e;
                            break;
                        case "column":
                            u.set(e.key, e), !e.hasChildNodes && (i.push(e), e.props.isRowHeader && a.add(e.key));
                            break;
                        case "item":
                            l.push(e);
                            return
                    }
                    for (let t of e.childNodes) d(t)
                };
            for (let t of e) d(t);
            let p = c(u, i);
            p.forEach((e, t) => l.splice(t, 0, e)), super({
                columnCount: i.length,
                items: l,
                visitNode: e => (e.column = i[e.index], e)
            }), this._size = 0, this.columns = i, this.rowHeaderColumnKeys = a, this.body = r, this.headerRows = p, this._size = [...r.childNodes].length, 0 === this.rowHeaderColumnKeys.size && ((null == n ? void 0 : n.showSelectionCheckboxes) ? (null == n ? void 0 : n.showDragButtons) ? this.rowHeaderColumnKeys.add(this.columns[2].key) : this.rowHeaderColumnKeys.add(this.columns[1].key) : this.rowHeaderColumnKeys.add(this.columns[0].key))
        }
    }
    let u = {
        ascending: "descending",
        descending: "ascending"
    };

    function d(e) {
        let [t, n] = (0, a.useState)(!1), {
            selectionMode: o = "none",
            showSelectionCheckboxes: s,
            showDragButtons: c
        } = e, d = (0, a.useMemo)(() => ({
            showSelectionCheckboxes: s && "none" !== o,
            showDragButtons: c,
            selectionMode: o,
            columns: []
        }), [e.children, s, o, c]), p = (0, r.useCollection)(e, (0, a.useCallback)(e => new l(e, null, d), [d]), d), {
            disabledKeys: f,
            selectionManager: m
        } = (0, i.useGridState)({
            ...e,
            collection: p,
            disabledBehavior: e.disabledBehavior || "selection"
        });
        return {
            collection: p,
            disabledKeys: f,
            selectionManager: m,
            showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
            sortDescriptor: e.sortDescriptor,
            isKeyboardNavigationDisabled: 0 === p.size || t,
            setKeyboardNavigationDisabled: n,
            sort(t, n) {
                var r;
                e.onSortChange({
                    column: t,
                    direction: null != n ? n : (null === (r = e.sortDescriptor) || void 0 === r ? void 0 : r.column) === t ? u[e.sortDescriptor.direction] : "ascending"
                })
            }
        }
    }

    function p(e) {
        return null
    }
    p.getCollectionNode = function*(e, t) {
        let {
            children: n,
            textValue: r,
            UNSTABLE_childItems: i
        } = e;
        yield {
            type: "item",
            props: e,
            textValue: r,
            "aria-label": e["aria-label"],
            hasChildNodes: !0,
            * childNodes() {
                if (t.showDragButtons && (yield {
                        type: "cell",
                        key: "header-drag",
                        props: {
                            isDragButtonCell: !0
                        }
                    }), t.showSelectionCheckboxes && "none" !== t.selectionMode && (yield {
                        type: "cell",
                        key: "header",
                        props: {
                            isSelectionCell: !0
                        }
                    }), "function" == typeof n) {
                    for (let e of t.columns) yield {
                        type: "cell",
                        element: n(e.key),
                        key: e.key
                    };
                    if (i)
                        for (let e of i) yield {
                            type: "item",
                            value: e
                        }
                } else {
                    let e = [],
                        r = [];
                    if (a.Children.forEach(n, n => {
                            if (n.type === p) {
                                if (e.length < t.columns.length) throw Error("All of a Row's child Cells must be positioned before any child Rows.");
                                r.push({
                                    type: "item",
                                    element: n
                                })
                            } else e.push({
                                type: "cell",
                                element: n
                            })
                        }), e.length !== t.columns.length) throw Error("Cell count must match column count. Found ".concat(e.length, " cells and ").concat(t.columns.length, " columns."));
                    yield* e, yield* r
                }
            },
            shouldInvalidate: e => e.columns.length !== t.columns.length || e.columns.some((e, n) => e.key !== t.columns[n].key) || e.showSelectionCheckboxes !== t.showSelectionCheckboxes || e.showDragButtons !== t.showDragButtons || e.selectionMode !== t.selectionMode
        }
    }
}