function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGridState: function() {
            return s
        },
        GridCollection: function() {
            return a
        }
    }), n("222007"), n("424973");
    var r = n("846794"),
        i = n("884691"),
        o = n("72634");

    function s(e) {
        let {
            collection: t,
            focusMode: n
        } = e, s = (0, o.useMultipleSelectionState)(e), a = (0, i.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = s.setFocusedKey;
        s.setFocusedKey = (e, i) => {
            if ("cell" === n && null != e) {
                let n = t.getItem(e);
                if ((null == n ? void 0 : n.type) === "item") {
                    var o, s;
                    let a = (0, r.getChildNodes)(n, t);
                    e = "last" === i ? null === (o = (0, r.getLastItem)(a)) || void 0 === o ? void 0 : o.key : null === (s = (0, r.getFirstItem)(a)) || void 0 === s ? void 0 : s.key
                }
            }
            c(e, i)
        };
        let u = (0, i.useMemo)(() => new o.SelectionManager(t, s), [t, s]),
            d = (0, i.useRef)(null);
        return (0, i.useEffect)(() => {
            if (null != s.focusedKey && !t.getItem(s.focusedKey)) {
                let e;
                let n = d.current.getItem(s.focusedKey),
                    i = null != n.parentKey && ("cell" === n.type || "rowheader" === n.type || "column" === n.type) ? d.current.getItem(n.parentKey) : n,
                    o = d.current.rows,
                    a = t.rows,
                    c = o.length - a.length,
                    l = Math.min(c > 1 ? Math.max(i.index - c + 1, 0) : i.index, a.length - 1);
                for (; l >= 0;) {
                    if (!u.isDisabled(a[l].key) && "headerrow" !== a[l].type) {
                        e = a[l];
                        break
                    }
                    l < a.length - 1 ? l++ : (l > i.index && (l = i.index), l--)
                }
                if (e) {
                    let o = e.hasChildNodes ? [...(0, r.getChildNodes)(e, t)] : [],
                        a = e.hasChildNodes && i !== n && n.index < o.length ? o[n.index].key : e.key;
                    s.setFocusedKey(a)
                } else s.setFocusedKey(null)
            }
            d.current = t
        }, [t, u, s, s.focusedKey]), {
            collection: t,
            disabledKeys: a,
            isKeyboardNavigationDisabled: !1,
            selectionManager: u
        }
    }
    class a {
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
                    let i, o = this.keyMap.get(t.key);
                    e.visitNode && (t = e.visitNode(t)), this.keyMap.set(t.key, t);
                    let s = new Set;
                    for (let e of t.childNodes) "cell" === e.type && null == e.parentKey && (e.parentKey = t.key), s.add(e.key), i ? (i.nextKey = e.key, e.prevKey = i.key) : e.prevKey = null, n(e), i = e;
                    if (i && (i.nextKey = null), o)
                        for (let e of o.childNodes) !s.has(e.key) && r(e)
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