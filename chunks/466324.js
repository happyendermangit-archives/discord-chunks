function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GridCollection: function() {
            return s
        },
        useGridState: function() {
            return o
        }
    });
    var r = n("275857"),
        i = n("470079"),
        a = n("721535");

    function o(e) {
        let {
            collection: t,
            focusMode: n
        } = e, o = (0, a.useMultipleSelectionState)(e), s = (0, i.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), u = o.setFocusedKey;
        o.setFocusedKey = (e, i) => {
            if ("cell" === n && null != e) {
                let n = t.getItem(e);
                if ((null == n ? void 0 : n.type) === "item") {
                    var a, o;
                    let s = (0, r.getChildNodes)(n, t);
                    e = "last" === i ? null === (a = (0, r.getLastItem)(s)) || void 0 === a ? void 0 : a.key : null === (o = (0, r.getFirstItem)(s)) || void 0 === o ? void 0 : o.key
                }
            }
            u(e, i)
        };
        let c = (0, i.useMemo)(() => new a.SelectionManager(t, o), [t, o]),
            l = (0, i.useRef)(null);
        return (0, i.useEffect)(() => {
            if (null != o.focusedKey && !t.getItem(o.focusedKey)) {
                let e;
                let n = l.current.getItem(o.focusedKey),
                    i = null != n.parentKey && ("cell" === n.type || "rowheader" === n.type || "column" === n.type) ? l.current.getItem(n.parentKey) : n,
                    a = l.current.rows,
                    s = t.rows,
                    u = a.length - s.length,
                    d = Math.min(u > 1 ? Math.max(i.index - u + 1, 0) : i.index, s.length - 1);
                for (; d >= 0;) {
                    if (!c.isDisabled(s[d].key) && "headerrow" !== s[d].type) {
                        e = s[d];
                        break
                    }
                    d < s.length - 1 ? d++ : (d > i.index && (d = i.index), d--)
                }
                if (e) {
                    let a = e.hasChildNodes ? [...(0, r.getChildNodes)(e, t)] : [],
                        s = e.hasChildNodes && i !== n && n.index < a.length ? a[n.index].key : e.key;
                    o.setFocusedKey(s)
                } else o.setFocusedKey(null)
            }
            l.current = t
        }, [t, c, o, o.focusedKey]), {
            collection: t,
            disabledKeys: s,
            isKeyboardNavigationDisabled: !1,
            selectionManager: c
        }
    }
    class s {
        *[Symbol.iterator]() {
            yield*[...this.rows]
        }
        get size() {
            return [...this.rows].length
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
            return null === (e = [...this.rows][0]) || void 0 === e ? void 0 : e.key
        }
        getLastKey() {
            var e;
            let t = [...this.rows];
            return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key
        }
        getItem(e) {
            return this.keyMap.get(e)
        }
        at(e) {
            let t = [...this.getKeys()];
            return this.getItem(t[e])
        }
        getChildren(e) {
            let t = this.keyMap.get(e);
            return (null == t ? void 0 : t.childNodes) || []
        }
        constructor(e) {
            let t;
            this.keyMap = new Map, this.keyMap = new Map, this.columnCount = null == e ? void 0 : e.columnCount, this.rows = [];
            let n = t => {
                    let i, a = this.keyMap.get(t.key);
                    e.visitNode && (t = e.visitNode(t)), this.keyMap.set(t.key, t);
                    let o = new Set;
                    for (let e of t.childNodes) "cell" === e.type && null == e.parentKey && (e.parentKey = t.key), o.add(e.key), i ? (i.nextKey = e.key, e.prevKey = i.key) : e.prevKey = null, n(e), i = e;
                    if (i && (i.nextKey = null), a)
                        for (let e of a.childNodes) !o.has(e.key) && r(e)
                },
                r = e => {
                    for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && r(t)
                };
            e.items.forEach((e, r) => {
                let i = {
                    level: 0,
                    key: "row-" + r,
                    type: "row",
                    value: void 0,
                    hasChildNodes: !0,
                    childNodes: [...e.childNodes],
                    rendered: void 0,
                    textValue: void 0,
                    ...e
                };
                t ? (t.nextKey = i.key, i.prevKey = t.key) : i.prevKey = null, this.rows.push(i), n(i), t = i
            }), t && (t.nextKey = null)
        }
    }
}