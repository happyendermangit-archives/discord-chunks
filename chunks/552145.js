function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTreeState: function() {
            return u
        }
    });
    var r = n("470079"),
        i = n("721535"),
        a = n("275857"),
        o = n("697898");
    class s {
        *[Symbol.iterator]() {
            yield* this.iterable
        }
        get size() {
            return this.keyMap.size
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
            return this.firstKey
        }
        getLastKey() {
            return this.lastKey
        }
        getItem(e) {
            return this.keyMap.get(e)
        }
        at(e) {
            let t = [...this.getKeys()];
            return this.getItem(t[e])
        }
        constructor(e, {
            expandedKeys: t
        } = {}) {
            let n;
            this.keyMap = new Map, this.iterable = e, t = t || new Set;
            let r = e => {
                if (this.keyMap.set(e.key, e), e.childNodes && ("section" === e.type || t.has(e.key)))
                    for (let t of e.childNodes) r(t)
            };
            for (let t of e) r(t);
            let i = 0;
            for (let [e, t] of this.keyMap) n ? (n.nextKey = e, t.prevKey = n.key) : (this.firstKey = e, t.prevKey = void 0), "item" === t.type && (t.index = i++), (n = t).nextKey = void 0;
            this.lastKey = null == n ? void 0 : n.key
        }
    }

    function u(e) {
        let [t, n] = (0, o.useControlledState)(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set, e.onExpandedChange), u = (0, i.useMultipleSelectionState)(e), c = (0, r.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), l = (0, a.useCollection)(e, (0, r.useCallback)(e => new s(e, {
            expandedKeys: t
        }), [t]), null);
        return (0, r.useEffect)(() => {
            null != u.focusedKey && !l.getItem(u.focusedKey) && u.setFocusedKey(null)
        }, [l, u.focusedKey]), {
            collection: l,
            expandedKeys: t,
            disabledKeys: c,
            toggleKey: e => {
                n(function(e, t) {
                    let n = new Set(e);
                    return n.has(t) ? n.delete(t) : n.add(t), n
                }(t, e))
            },
            setExpandedKeys: n,
            selectionManager: new i.SelectionManager(l, u)
        }
    }
}