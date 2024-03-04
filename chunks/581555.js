function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTableState: function() {
            return l
        },
        buildHeaderRows: function() {
            return c
        }
    }), n("70102"), n("424973"), n("808653"), n("222007"), n("843762");
    var r = n("872834"),
        i = n("884691"),
        o = n("626619");
    let s = "row-header-column-" + Math.random().toString(36).slice(2),
        a = "row-header-column-" + Math.random().toString(36).slice(2);
    for (; s === a;) a = "row-header-column-" + Math.random().toString(36).slice(2);

    function c(e, t) {
        if (0 === t.length) return [];
        let n = [],
            r = new Map;
        for (let i of t) {
            let t = i.parentKey,
                o = [i];
            for (; t;) {
                let n = e.get(t);
                if (!n) break;
                if (r.has(n)) {
                    n.colspan++;
                    let {
                        column: e,
                        index: t
                    } = r.get(n);
                    if (t > o.length) break;
                    for (let n = t; n < o.length; n++) e.splice(n, 0, null);
                    for (let t = o.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t)
                } else n.colspan = 1, o.push(n), r.set(n, {
                    column: o,
                    index: o.length - 1
                });
                t = n.parentKey
            }
            n.push(o), i.index = n.length - 1
        }
        let i = Math.max(...n.map(e => e.length)),
            o = Array(i).fill(0).map(() => []),
            s = 0;
        for (let e of n) {
            let t = i - 1;
            for (let n of e) {
                if (n) {
                    let e = o[t],
                        r = e.reduce((e, t) => e + t.colspan, 0);
                    if (r < s) {
                        let i = {
                            type: "placeholder",
                            key: "placeholder-" + n.key,
                            colspan: s - r,
                            index: r,
                            value: null,
                            rendered: null,
                            level: t,
                            hasChildNodes: !1,
                            childNodes: [],
                            textValue: null
                        };
                        e.length > 0 && (e[e.length - 1].nextKey = i.key, i.prevKey = e[e.length - 1].key), e.push(i)
                    }
                    e.length > 0 && (e[e.length - 1].nextKey = n.key, n.prevKey = e[e.length - 1].key), n.level = t, n.colIndex = s, e.push(n)
                }
                t--
            }
            s++
        }
        let a = 0;
        for (let e of o) {
            let n = e.reduce((e, t) => e + t.colspan, 0);
            if (n < t.length) {
                let r = {
                    type: "placeholder",
                    key: "placeholder-" + e[e.length - 1].key,
                    colspan: t.length - n,
                    index: n,
                    value: null,
                    rendered: null,
                    level: a,
                    hasChildNodes: !1,
                    childNodes: [],
                    textValue: null,
                    prevKey: e[e.length - 1].key
                };
                e.push(r)
            }
            a++
        }
        return o.map((e, t) => ({
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
    class u extends o.GridCollection {
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
            let r, i = new Set,
                o = [];
            if (null == n ? void 0 : n.showSelectionCheckboxes) {
                let e = {
                    type: "column",
                    key: s,
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
                o.unshift(e)
            }
            if (null == n ? void 0 : n.showDragButtons) {
                let e = {
                    type: "column",
                    key: a,
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
                o.unshift(e)
            }
            let u = [],
                d = new Map,
                l = e => {
                    switch (e.type) {
                        case "body":
                            r = e;
                            break;
                        case "column":
                            d.set(e.key, e), !e.hasChildNodes && (o.push(e), e.props.isRowHeader && i.add(e.key));
                            break;
                        case "item":
                            u.push(e);
                            return
                    }
                    for (let t of e.childNodes) l(t)
                };
            for (let t of e) l(t);
            let f = c(d, o);
            f.forEach((e, t) => u.splice(t, 0, e)), super({
                columnCount: o.length,
                items: u,
                visitNode: e => (e.column = o[e.index], e)
            }), this._size = 0, this.columns = o, this.rowHeaderColumnKeys = i, this.body = r, this.headerRows = f, this._size = [...r.childNodes].length, 0 === this.rowHeaderColumnKeys.size && ((null == n ? void 0 : n.showSelectionCheckboxes) ? (null == n ? void 0 : n.showDragButtons) ? this.rowHeaderColumnKeys.add(this.columns[2].key) : this.rowHeaderColumnKeys.add(this.columns[1].key) : this.rowHeaderColumnKeys.add(this.columns[0].key))
        }
    }
    let d = {
        ascending: "descending",
        descending: "ascending"
    };

    function l(e) {
        let [t, n] = (0, i.useState)(!1), {
            selectionMode: s = "none",
            showSelectionCheckboxes: a,
            showDragButtons: c
        } = e, l = (0, i.useMemo)(() => ({
            showSelectionCheckboxes: a && "none" !== s,
            showDragButtons: c,
            selectionMode: s,
            columns: []
        }), [e.children, a, s, c]), f = (0, r.useCollection)(e, (0, i.useCallback)(e => new u(e, null, l), [l]), l), {
            disabledKeys: p,
            selectionManager: h
        } = (0, o.useGridState)({
            ...e,
            collection: f,
            disabledBehavior: e.disabledBehavior || "selection"
        });
        return {
            collection: f,
            disabledKeys: p,
            selectionManager: h,
            showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
            sortDescriptor: e.sortDescriptor,
            isKeyboardNavigationDisabled: 0 === f.size || t,
            setKeyboardNavigationDisabled: n,
            sort(t, n) {
                var r;
                e.onSortChange({
                    column: t,
                    direction: null != n ? n : (null === (r = e.sortDescriptor) || void 0 === r ? void 0 : r.column) === t ? d[e.sortDescriptor.direction] : "ascending"
                })
            }
        }
    }

    function f(e) {
        return null
    }
    f.getCollectionNode = function*(e, t) {
        let {
            children: n,
            textValue: r,
            UNSTABLE_childItems: o
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
                    if (o)
                        for (let e of o) yield {
                            type: "item",
                            value: e
                        }
                } else {
                    let e = [],
                        r = [];
                    if (i.Children.forEach(n, n => {
                            if (n.type === f) {
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