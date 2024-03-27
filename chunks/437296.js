function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useListState: function() {
            return s
        }
    });
    var r = n("470079"),
        i = n("721535"),
        a = n("275857");
    class o {
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
        getChildren(e) {
            let t = this.keyMap.get(e);
            return (null == t ? void 0 : t.childNodes) || []
        }
        constructor(e) {
            let t;
            this.keyMap = new Map, this.iterable = e;
            let n = e => {
                if (this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)
                    for (let t of e.childNodes) n(t)
            };
            for (let t of e) n(t);
            let r = 0;
            for (let [e, n] of this.keyMap) t ? (t.nextKey = e, n.prevKey = t.key) : (this.firstKey = e, n.prevKey = void 0), "item" === n.type && (n.index = r++), (t = n).nextKey = void 0;
            this.lastKey = null == t ? void 0 : t.key
        }
    }

    function s(e) {
        let {
            filter: t
        } = e, n = (0, i.useMultipleSelectionState)(e), s = (0, r.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), u = (0, r.useCallback)(e => new o(t ? t(e) : e), [t]), c = (0, r.useMemo)(() => ({
            suppressTextValueWarning: e.suppressTextValueWarning
        }), [e.suppressTextValueWarning]), l = (0, a.useCollection)(e, u, c), d = (0, r.useMemo)(() => new i.SelectionManager(l, n), [l, n]), f = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            if (null != n.focusedKey && !l.getItem(n.focusedKey)) {
                let e;
                let t = f.current.getItem(n.focusedKey),
                    r = [...f.current.getKeys()].map(e => {
                        let t = f.current.getItem(e);
                        return "item" === t.type ? t : null
                    }).filter(e => null !== e),
                    i = [...l.getKeys()].map(e => {
                        let t = l.getItem(e);
                        return "item" === t.type ? t : null
                    }).filter(e => null !== e),
                    a = r.length - i.length,
                    o = Math.min(a > 1 ? Math.max(t.index - a + 1, 0) : t.index, i.length - 1);
                for (; o >= 0;) {
                    if (!d.isDisabled(i[o].key)) {
                        e = i[o];
                        break
                    }
                    o < i.length - 1 ? o++ : (o > t.index && (o = t.index), o--)
                }
                n.setFocusedKey(e ? e.key : null)
            }
            f.current = l
        }, [l, d, n, n.focusedKey]), {
            collection: l,
            disabledKeys: s,
            selectionManager: d
        }
    }
}