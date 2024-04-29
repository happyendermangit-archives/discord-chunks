function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Cell: function() {
            return ti
        },
        Column: function() {
            return tt
        },
        Row: function() {
            return tr
        },
        Table: function() {
            return e9
        },
        TableBody: function() {
            return tn
        },
        TableHeader: function() {
            return te
        }
    });
    var r = n("544323"),
        i = n("414948"),
        a = n("470079"),
        o = n("671386"),
        s = n("699581"),
        u = n("31178"),
        c = n("903646"),
        l = n("225098"),
        d = n("772566");
    class f {
        get childNodes() {
            throw Error("childNodes is not supported")
        }
        clone() {
            let e = new f(this.type, this.key);
            return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e
        }
        constructor(e, t) {
            (0, o.default)(this, "value", null), (0, o.default)(this, "level", 0), (0, o.default)(this, "hasChildNodes", !1), (0, o.default)(this, "rendered", null), (0, o.default)(this, "textValue", ""), (0, o.default)(this, "aria-label", void 0), (0, o.default)(this, "index", 0), (0, o.default)(this, "parentKey", null), (0, o.default)(this, "prevKey", null), (0, o.default)(this, "nextKey", null), (0, o.default)(this, "firstChildKey", null), (0, o.default)(this, "lastChildKey", null), (0, o.default)(this, "props", {}), this.type = e, this.key = t
        }
    }
    let p = Symbol.iterator;
    class h {
        *[p]() {
            let e = this.firstChild;
            for (; e;) yield e, e = e.nextSibling
        }
        get firstChild() {
            return this._firstChild
        }
        set firstChild(e) {
            this._firstChild = e, this.ownerDocument.markDirty(this)
        }
        get lastChild() {
            return this._lastChild
        }
        set lastChild(e) {
            this._lastChild = e, this.ownerDocument.markDirty(this)
        }
        get previousSibling() {
            return this._previousSibling
        }
        set previousSibling(e) {
            this._previousSibling = e, this.ownerDocument.markDirty(this)
        }
        get nextSibling() {
            return this._nextSibling
        }
        set nextSibling(e) {
            this._nextSibling = e, this.ownerDocument.markDirty(this)
        }
        get parentNode() {
            return this._parentNode
        }
        set parentNode(e) {
            this._parentNode = e, this.ownerDocument.markDirty(this)
        }
        appendChild(e) {
            this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), null == this.firstChild && (this.firstChild = e), this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
        }
        insertBefore(e, t) {
            if (null == t) return this.appendChild(e);
            this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), e.nextSibling = t, e.previousSibling = t.previousSibling, e.index = t.index, this.firstChild === t ? this.firstChild = e : t.previousSibling && (t.previousSibling.nextSibling = e), t.previousSibling = e, e.parentNode = t.parentNode;
            let n = t;
            for (; n;) n.index++, n = n.nextSibling;
            e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
        }
        removeChild(e) {
            if (e.parentNode !== this) return;
            this.ownerDocument.startTransaction();
            let t = e.nextSibling;
            for (; t;) t.index--, t = t.nextSibling;
            e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.removeNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
        }
        addEventListener() {}
        removeEventListener() {}
        constructor(e) {
            (0, o.default)(this, "_firstChild", null), (0, o.default)(this, "_lastChild", null), (0, o.default)(this, "_previousSibling", null), (0, o.default)(this, "_nextSibling", null), (0, o.default)(this, "_parentNode", null), this.ownerDocument = e
        }
    }
    let m = 0;
    class g extends h {
        get index() {
            return this._index
        }
        set index(e) {
            this._index = e, this.ownerDocument.markDirty(this)
        }
        get level() {
            return this.parentNode instanceof g ? this.parentNode.level + ("item" === this.node.type ? 1 : 0) : 0
        }
        updateNode() {
            var e, t, n, r, i, a, o, s;
            let u = this.ownerDocument.getMutableNode(this);
            u.index = this.index, u.level = this.level, u.parentKey = this.parentNode instanceof g ? this.parentNode.node.key : null, u.prevKey = null !== (i = null === (e = this.previousSibling) || void 0 === e ? void 0 : e.node.key) && void 0 !== i ? i : null, u.nextKey = null !== (a = null === (t = this.nextSibling) || void 0 === t ? void 0 : t.node.key) && void 0 !== a ? a : null, u.hasChildNodes = !!this.firstChild, u.firstChildKey = null !== (o = null === (n = this.firstChild) || void 0 === n ? void 0 : n.node.key) && void 0 !== o ? o : null, u.lastChildKey = null !== (s = null === (r = this.lastChild) || void 0 === r ? void 0 : r.node.key) && void 0 !== s ? s : null
        }
        setProps(e, t, n) {
            let r = this.ownerDocument.getMutableNode(this),
                {
                    value: i,
                    textValue: a,
                    id: o,
                    ...s
                } = e;
            if (s.ref = t, r.props = s, r.rendered = n, r.value = i, r.textValue = a || ("string" == typeof n ? n : "") || e["aria-label"] || "", null != o && o !== r.key) {
                if (this.hasSetProps) throw Error("Cannot change the id of an item");
                r.key = o
            }!this.hasSetProps && (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), this.hasSetProps = !0), this.ownerDocument.queueUpdate()
        }
        get style() {
            return {}
        }
        hasAttribute() {}
        setAttribute() {}
        setAttributeNS() {}
        removeAttribute() {}
        constructor(e, t) {
            super(t), (0, o.default)(this, "nodeType", 8), (0, o.default)(this, "_index", 0), (0, o.default)(this, "hasSetProps", !1), this.node = new f(e, `react-aria-${++m}`), this.ownerDocument.startTransaction()
        }
    }
    let _ = Symbol.iterator;
    class b {
        get size() {
            return this.keyMap.size
        }
        getKeys() {
            return this.keyMap.keys()
        }*[_]() {
            let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
            for (; e;) yield e, e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0
        }
        getChildren(e) {
            let t = this.keyMap;
            return {
                *[Symbol.iterator]() {
                    let n = t.get(e),
                        r = (null == n ? void 0 : n.firstChildKey) != null ? t.get(n.firstChildKey) : null;
                    for (; r;) yield r, r = null != r.nextKey ? t.get(r.nextKey) : void 0
                }
            }
        }
        getKeyBefore(e) {
            let t = this.keyMap.get(e);
            if (!t) return null;
            if (null != t.prevKey) {
                var n;
                for (t = this.keyMap.get(t.prevKey); t && "item" !== t.type && null != t.lastChildKey;) t = this.keyMap.get(t.lastChildKey);
                return null !== (n = null == t ? void 0 : t.key) && void 0 !== n ? n : null
            }
            return t.parentKey
        }
        getKeyAfter(e) {
            let t = this.keyMap.get(e);
            if (!t) return null;
            if ("item" !== t.type && null != t.firstChildKey) return t.firstChildKey;
            for (; t;) {
                if (null != t.nextKey) return t.nextKey;
                if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
                else break
            }
            return null
        }
        getFirstKey() {
            return this.firstKey
        }
        getLastKey() {
            var e;
            let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
            for (;
                (null == t ? void 0 : t.lastChildKey) != null;) t = this.keyMap.get(t.lastChildKey);
            return null !== (e = null == t ? void 0 : t.key) && void 0 !== e ? e : null
        }
        getItem(e) {
            var t;
            return null !== (t = this.keyMap.get(e)) && void 0 !== t ? t : null
        }
        at() {
            throw Error("Not implemented")
        }
        clone() {
            let e = new this.constructor;
            return e.keyMap = new Map(this.keyMap), e.firstKey = this.firstKey, e.lastKey = this.lastKey, e
        }
        addNode(e) {
            if (this.frozen) throw Error("Cannot add a node to a frozen collection");
            this.keyMap.set(e.key, e)
        }
        removeNode(e) {
            if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
            this.keyMap.delete(e)
        }
        commit(e, t) {
            if (this.frozen) throw Error("Cannot commit a frozen collection");
            this.firstKey = e, this.lastKey = t, this.frozen = !0
        }
        constructor() {
            (0, o.default)(this, "keyMap", new Map), (0, o.default)(this, "firstKey", null), (0, o.default)(this, "lastKey", null), (0, o.default)(this, "frozen", !1)
        }
    }
    class v extends h {
        createElement(e) {
            return new g(e, this)
        }
        getMutableNode(e) {
            let t = e.node;
            return !this.mutatedNodes.has(e) && (t = e.node.clone(), this.mutatedNodes.add(e), e.node = t), this.markDirty(e), t
        }
        getMutableCollection() {
            return !this.collectionMutated && (this.collection = this.collection.clone(), this.collectionMutated = !0), this.collection
        }
        markDirty(e) {
            this.dirtyNodes.add(e)
        }
        startTransaction() {
            this.transactionCount++
        }
        endTransaction() {
            this.transactionCount--
        }
        addNode(e) {
            let t = this.getMutableCollection();
            if (!t.getItem(e.node.key))
                for (let n of (t.addNode(e.node), e)) this.addNode(n);
            this.markDirty(e)
        }
        removeNode(e) {
            for (let t of e) t.parentNode = null, this.removeNode(t);
            this.getMutableCollection().removeNode(e.node.key), this.markDirty(e)
        }
        getCollection() {
            if (this.transactionCount > 0) return this.collection;
            for (let e of this.dirtyNodes) e instanceof g && e.parentNode && e.updateNode();
            if (this.dirtyNodes.clear(), this.mutatedNodes.size) {
                var e, t, n, r;
                let i = this.getMutableCollection();
                for (let e of this.mutatedNodes) e.parentNode && i.addNode(e.node);
                i.commit(null !== (n = null === (e = this.firstChild) || void 0 === e ? void 0 : e.node.key) && void 0 !== n ? n : null, null !== (r = null === (t = this.lastChild) || void 0 === t ? void 0 : t.node.key) && void 0 !== r ? r : null), this.mutatedNodes.clear()
            }
            return this.collectionMutated = !1, this.collection
        }
        queueUpdate() {
            if (0 !== this.dirtyNodes.size && !(this.transactionCount > 0))
                for (let e of this.subscriptions) e()
        }
        subscribe(e) {
            return this.subscriptions.add(e), () => this.subscriptions.delete(e)
        }
        constructor(e) {
            super(null), (0, o.default)(this, "nodeType", 11), (0, o.default)(this, "ownerDocument", this), (0, o.default)(this, "dirtyNodes", new Set), (0, o.default)(this, "mutatedNodes", new Set), (0, o.default)(this, "subscriptions", new Set), (0, o.default)(this, "transactionCount", 0), this.collection = e, this.collectionMutated = !0
        }
    }

    function y(e) {
        let {
            children: t,
            items: n,
            idScope: r,
            addIdAndValue: i
        } = e, o = (0, a.useMemo)(() => new WeakMap, []);
        return (0, a.useMemo)(() => {
            if (!n || "function" != typeof t) return t;
            {
                let u = [];
                for (let c of n) {
                    let n = o.get(c);
                    if (!n) {
                        if (null == (n = t(c)).key) {
                            var e, s;
                            let t = null !== (s = null !== (e = n.props.id) && void 0 !== e ? e : c.key) && void 0 !== s ? s : c.id;
                            if (null == t) throw Error("Could not determine key for item");
                            r && (t = r + ":" + t), n = (0, a.cloneElement)(n, i ? {
                                key: t,
                                id: t,
                                value: c
                            } : {
                                key: t
                            })
                        }
                        o.set(c, n)
                    }
                    u.push(n)
                }
                return u
            }
        }, [t, n, o, r, i])
    }

    function E(e) {
        return y({
            ...e,
            addIdAndValue: !0
        })
    }
    let S = (0, a.createContext)(!1);

    function x(e, t) {
        let n = (0, a.useMemo)(() => new v(t || new b), [t]),
            i = (0, a.useCallback)(e => n.subscribe(e), [n]),
            o = (0, a.useCallback)(() => n.getCollection(), [n]),
            c = (0, u.useSyncExternalStore)(i, o, o),
            l = E(e),
            d = (0, a.useMemo)(() => a.createElement(S.Provider, {
                value: !0
            }, l), [l]);
        return {
            portal: (0, r.useIsSSR)() ? null : (0, s.createPortal)(d, n),
            collection: c
        }
    }

    function w(e, t, n) {
        let r = (0, a.useContext)(S);
        return (n = T(t, n, t.children), r) ? a.createElement(e, {
            ref: n
        }) : null
    }

    function T(e, t, n) {
        return (0, a.useCallback)(r => {
            null == r || r.setProps(e, t, n)
        }, [e, t, n])
    }
    let C = (0, a.forwardRef)(function(e, t) {
            return a.createElement("item", {
                ref: T(e, t, e.children)
            })
        }),
        D = (0, a.createContext)(null),
        O = (0, a.createContext)(null),
        M = Symbol("callback"),
        A = Symbol("default");

    function k({
        values: e,
        children: t
    }) {
        for (let [n, r] of e) t = a.createElement(n.Provider, {
            value: r
        }, t);
        return t
    }

    function R(e) {
        let {
            className: t,
            style: n,
            children: r,
            defaultClassName: i,
            defaultChildren: o,
            values: s
        } = e;
        return (0, a.useMemo)(() => {
            let e, a, u;
            return e = "function" == typeof t ? t(s) : t, a = "function" == typeof n ? n(s) : n, {
                className: null != e ? e : i,
                style: a,
                children: u = "function" == typeof r ? r(s) : null == r ? o : r
            }
        }, [t, n, r, i, o, s])
    }

    function N(e, t, n) {
        let r = (0, a.useContext)(n) || {};
        if ("slots" in r && r.slots) {
            if (!e.slot && !r.slots[A]) throw Error("A slot prop is required");
            let t = e.slot || A;
            if (!r.slots[t]) throw Error(`Invalid slot "${e.slot}". Valid slot names are ` + new Intl.ListFormat().format(Object.keys(r.slots).map(e => `"${e}"`)) + ".");
            r = r.slots[t]
        }
        let {
            ref: o,
            [M]: s,
            ...u
        } = r, c = (0, i.useObjectRef)((0, i.mergeRefs)(t, o)), l = (0, i.mergeProps)(u, e);
        return (0, a.useEffect)(() => {
            s && s(e)
        }, [s, e]), [l, c]
    }

    function I() {
        let [e, t] = (0, a.useState)(!0), n = (0, a.useRef)(!1), r = (0, a.useCallback)(e => {
            n.current = !0, t(!!e)
        }, []);
        return (0, i.useLayoutEffect)(() => {
            !n.current && t(!1)
        }, []), [r, e]
    }

    function L(e, t = !0) {
        let [n, r] = (0, a.useState)(!0);
        return F(e, n && t, (0, a.useCallback)(() => r(!1), [])), n && t
    }

    function P(e, t) {
        let [n, r] = (0, a.useState)(!1), i = (0, a.useRef)("idle");
        return !t && e.current && "idle" === i.current && (n = !0, r(!0), i.current = "exiting"), !e.current && "exited" === i.current && (i.current = "idle"), F(e, n, (0, a.useCallback)(() => {
            i.current = "exited", r(!1)
        }, [])), n
    }

    function F(e, t, n) {
        let r = (0, a.useRef)(null);
        t && e.current && (r.current = window.getComputedStyle(e.current).animation), (0, i.useLayoutEffect)(() => {
            if (t && e.current) {
                let t = window.getComputedStyle(e.current);
                if ("none" !== t.animationName && t.animation !== r.current) {
                    let t = i => {
                            i.target === e.current && (r.removeEventListener("animationend", t), s.flushSync(() => {
                                n()
                            }))
                        },
                        r = e.current;
                    return r.addEventListener("animationend", t), () => {
                        r.removeEventListener("animationend", t)
                    }
                }
                n()
            }
        }, [e, t, n])
    }
    let B = (0, a.createContext)(!1),
        U = (0, a.createContext)({}),
        Y = (0, a.createContext)(null),
        j = (0, a.createContext)(null);

    function z({
        node: e,
        isCurrent: t,
        isDisabled: n
    }) {
        var r;
        return a.createElement("li", {
            ...(0, i.filterDOMProps)(e.props),
            style: e.props.style,
            className: null !== (r = e.props.className) && void 0 !== r ? r : "react-aria-Item"
        }, a.createElement(k, {
            values: [
                [Y, {
                    "aria-current": t ? "page" : null,
                    isDisabled: n || t
                }],
                [U, t ? {
                    "aria-current": "page"
                } : null]
            ]
        }, e.rendered))
    }
    let H = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
        G = (0, a.createContext)({}),
        V = (0, a.createContext)({}),
        $ = (0, a.createContext)({}),
        W = (0, a.createContext)({}),
        K = (0, a.createContext)(null),
        q = (0, a.createContext)(null),
        Q = (0, a.forwardRef)(function(e, t) {
            let {
                children: n,
                style: r,
                className: o
            } = e, {
                headerProps: s,
                weekDays: u
            } = (0, a.useContext)(q);
            return a.createElement("thead", {
                ...(0, i.filterDOMProps)(e),
                ...s,
                ref: t,
                style: r,
                className: o || "react-aria-CalendarGridHeader"
            }, a.createElement("tr", null, u.map((e, t) => a.cloneElement(n(e), {
                key: t
            }))))
        }),
        Z = (0, a.forwardRef)(function(e, t) {
            let {
                children: n,
                style: r,
                className: o
            } = e;
            return a.createElement("th", {
                ...(0, i.filterDOMProps)(e),
                ref: t,
                style: r,
                className: o || "react-aria-CalendarHeaderCell"
            }, n)
        }),
        X = (0, a.forwardRef)(function(e, t) {
            let {
                children: n,
                style: o,
                className: s
            } = e, u = (0, a.useContext)(K), {
                startDate: l
            } = (0, a.useContext)(q), {
                locale: d
            } = (0, r.useLocale)(), f = (0, c.getWeeksInMonth)(l, d);
            return a.createElement("tbody", {
                ...(0, i.filterDOMProps)(e),
                ref: t,
                style: o,
                className: s || "react-aria-CalendarGridBody"
            }, [...Array(f).keys()].map(e => a.createElement("tr", {
                key: e
            }, u.getDatesInWeek(e, l).map((e, t) => e ? a.cloneElement(n(e), {
                key: t
            }) : a.createElement("td", {
                key: t
            })))))
        }),
        J = (0, a.createContext)({}),
        ee = (0, a.createContext)(null),
        et = (0, a.createContext)(null),
        en = (0, a.createContext)(null),
        er = (0, a.createContext)({}),
        ei = (0, a.createContext)(null),
        ea = (0, a.forwardRef)(function(e, t) {
            let {
                render: n
            } = (0, a.useContext)(ei);
            return a.createElement(a.Fragment, null, n(e, t))
        }),
        eo = (0, a.createContext)({}),
        es = (0, a.forwardRef)(function(e, t) {
            [e, t] = N(e, t, eo);
            let n = w("header", e, t);
            return n ? n : a.createElement("header", {
                className: "react-aria-Header",
                ...e,
                ref: t
            }, e.children)
        }),
        eu = (0, a.createContext)({}),
        ec = (0, a.forwardRef)(function(e, t) {
            [e, t] = N(e, t, eu);
            let {
                elementType: n,
                orientation: o,
                style: s,
                className: u
            } = e, c = n || "hr";
            "hr" === c && "vertical" === o && (c = "div");
            let {
                separatorProps: l
            } = (0, r.useSeparator)({
                elementType: n,
                orientation: o
            }), d = w("separator", e, t);
            return d ? d : a.createElement(c, {
                ...(0, i.filterDOMProps)(e),
                ...l,
                style: s,
                className: null != u ? u : "react-aria-Separator",
                ref: t,
                slot: e.slot
            })
        }),
        el = (0, a.createContext)(null),
        ed = (0, a.createContext)(null);

    function ef({
        props: e,
        listBoxRef: t
    }) {
        let {
            portal: n,
            collection: r
        } = x(e);
        e = {
            ...e,
            collection: r,
            children: null,
            items: null
        };
        let i = (0, l.useListState)(e);
        return a.createElement(a.Fragment, null, n, a.createElement(ep, {
            state: i,
            props: e,
            listBoxRef: t
        }))
    }

    function ep({
        state: e,
        props: t,
        listBoxRef: n
    }) {
        let o, s, u, {
                dragAndDropHooks: c
            } = t,
            {
                collection: l,
                selectionManager: d
            } = e,
            f = !!(null == c ? void 0 : c.useDraggableCollectionState),
            p = !!(null == c ? void 0 : c.useDroppableCollectionState),
            {
                listBoxProps: h
            } = (0, r.useListBox)({
                ...t,
                shouldSelectOnPressUp: f || t.shouldSelectOnPressUp
            }, e, n),
            m = y({
                items: l,
                children: e => {
                    switch (e.type) {
                        case "section":
                            return a.createElement(eh, {
                                section: e
                            });
                        case "separator":
                            return a.createElement(ec, e.props);
                        case "item":
                            return a.createElement(em, {
                                item: e
                            });
                        default:
                            throw Error("Unsupported node type in Menu: " + e.type)
                    }
                }
            }),
            g = (0, a.useRef)(f),
            _ = (0, a.useRef)(p);
        g.current !== f && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), _.current !== p && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
        let b = !1,
            v = null,
            E = (0, a.useRef)(null);
        if (f && c) {
            o = c.useDraggableCollectionState({
                collection: l,
                selectionManager: d,
                preview: c.renderDragPreview ? E : void 0
            }), c.useDraggableCollection({}, o, n);
            let e = c.DragPreview;
            v = c.renderDragPreview ? a.createElement(e, {
                ref: E
            }, c.renderDragPreview) : null
        }
        if (p && c) {
            s = c.useDroppableCollectionState({
                collection: l,
                selectionManager: d
            });
            let e = t.keyboardDelegate || new r.ListKeyboardDelegate(l, "selection" === d.disabledBehavior ? new Set : d.disabledKeys, n),
                i = c.dropTargetDelegate || new c.ListDropTargetDelegate(l, n);
            u = c.useDroppableCollection({
                keyboardDelegate: e,
                dropTargetDelegate: i
            }, s, n), b = s.isDropTarget({
                type: "root"
            })
        }
        let {
            focusProps: S,
            isFocused: x,
            isFocusVisible: w
        } = (0, r.useFocusRing)(), T = R({
            className: t.className,
            style: t.style,
            defaultClassName: "react-aria-ListBox",
            values: {
                isDropTarget: b,
                isEmpty: 0 === e.collection.size,
                isFocused: x,
                isFocusVisible: w
            }
        }), C = null;
        return 0 === e.collection.size && t.renderEmptyState && (C = a.createElement("div", {
            role: "option",
            style: {
                display: "contents"
            }
        }, t.renderEmptyState())), a.createElement(r.FocusScope, null, a.createElement("div", {
            ...(0, i.filterDOMProps)(t),
            ...(0, r.mergeProps)(h, S, null == u ? void 0 : u.collectionProps),
            ...T,
            ref: n,
            slot: t.slot,
            "data-drop-target": b || void 0,
            "data-empty": 0 === e.collection.size || void 0,
            "data-focused": x || void 0,
            "data-focus-visible": w || void 0
        }, a.createElement(k, {
            values: [
                [ed, {
                    state: e,
                    shouldFocusOnHover: t.shouldFocusOnHover,
                    dragAndDropHooks: c,
                    dragState: o,
                    dropState: s
                }],
                [eu, {
                    elementType: "li"
                }],
                [ei, {
                    render: eg
                }]
            ]
        }, m), C, v))
    }

    function eh({
        section: e,
        className: t,
        style: n,
        ...o
    }) {
        var s, u, c;
        let {
            state: l
        } = (0, a.useContext)(ed), [d, f] = I(), {
            headingProps: p,
            groupProps: h
        } = (0, r.useListBoxSection)({
            heading: f,
            "aria-label": null !== (c = e["aria-label"]) && void 0 !== c ? c : void 0
        }), m = y({
            items: l.collection.getChildren(e.key),
            children: e => {
                switch (e.type) {
                    case "header": {
                        let {
                            ref: t,
                            ...n
                        } = e.props;
                        return a.createElement(es, {
                            ...p,
                            ...n,
                            ref: (0, i.mergeRefs)(d, t)
                        }, e.rendered)
                    }
                    case "item":
                        return a.createElement(em, {
                            item: e
                        });
                    default:
                        throw Error("Unsupported element type in Section: " + e.type)
                }
            }
        });
        return a.createElement("section", {
            ...(0, i.filterDOMProps)(o),
            ...h,
            className: t || (null === (s = e.props) || void 0 === s ? void 0 : s.className) || "react-aria-Section",
            style: n || (null === (u = e.props) || void 0 === u ? void 0 : u.style),
            ref: e.props.ref
        }, m)
    }

    function em({
        item: e
    }) {
        let t = (0, i.useObjectRef)(e.props.ref),
            {
                state: n,
                shouldFocusOnHover: o,
                dragAndDropHooks: s,
                dragState: u,
                dropState: c
            } = (0, a.useContext)(ed),
            {
                optionProps: l,
                labelProps: d,
                descriptionProps: f,
                ...p
            } = (0, r.useOption)({
                key: e.key
            }, n, t),
            {
                hoverProps: h,
                isHovered: m
            } = (0, r.useHover)({
                isDisabled: o || !p.allowsSelection && !p.hasAction
            });
        o && (h = {}, m = p.isFocused);
        let g = null;
        u && s && (g = s.useDraggableItem({
            key: e.key
        }, u));
        let _ = null;
        c && s && (_ = s.useDroppableItem({
            target: {
                type: "item",
                key: e.key,
                dropPosition: "on"
            }
        }, c, t));
        let b = e.props,
            v = u && u.isDragging(e.key),
            y = R({
                ...b,
                id: void 0,
                children: e.rendered,
                defaultClassName: "react-aria-Item",
                values: {
                    ...p,
                    isHovered: m,
                    selectionMode: n.selectionManager.selectionMode,
                    selectionBehavior: n.selectionManager.selectionBehavior,
                    allowsDragging: !!u,
                    isDragging: v,
                    isDropTarget: null == _ ? void 0 : _.isDropTarget
                }
            }),
            E = (null == s ? void 0 : s.renderDropIndicator) || (e => a.createElement(ea, {
                target: e
            }));
        return (0, a.useEffect)(() => {
            !e.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
        }, [e.textValue]), a.createElement(a.Fragment, null, (null == s ? void 0 : s.useDropIndicator) && E({
            type: "item",
            key: e.key,
            dropPosition: "before"
        }), a.createElement("div", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(b), l, h, null == g ? void 0 : g.dragProps, null == _ ? void 0 : _.dropProps),
            ...y,
            ref: t,
            "data-hovered": m || void 0,
            "data-focused": p.isFocused || void 0,
            "data-focus-visible": p.isFocusVisible || void 0,
            "data-pressed": p.isPressed || void 0,
            "data-dragging": v || void 0,
            "data-drop-target": (null == _ ? void 0 : _.isDropTarget) || void 0
        }, a.createElement(k, {
            values: [
                [V, {
                    slots: {
                        label: d,
                        description: f
                    }
                }]
            ]
        }, y.children)), (null == s ? void 0 : s.useDropIndicator) && null == n.collection.getKeyAfter(e.key) && E({
            type: "item",
            key: e.key,
            dropPosition: "after"
        }))
    }

    function eg(e, t) {
        t = (0, i.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, a.useContext)(ed), {
            dropIndicatorProps: o,
            isHidden: s,
            isDropTarget: u
        } = n.useDropIndicator(e, r, t);
        return s ? null : a.createElement(e_, {
            ...e,
            dropIndicatorProps: o,
            isDropTarget: u,
            ref: t
        })
    }
    let e_ = (0, a.forwardRef)(function(e, t) {
            let {
                dropIndicatorProps: n,
                isDropTarget: r,
                ...i
            } = e, o = R({
                ...i,
                defaultClassName: "react-aria-DropIndicator",
                values: {
                    isDropTarget: r
                }
            });
            return a.createElement("div", {
                ...n,
                ...o,
                role: "option",
                ref: t,
                "data-drop-target": r || void 0
            })
        }),
        eb = (0, a.createContext)(null),
        ev = (0, a.createContext)(null);

    function ey({
        state: e,
        isExiting: t,
        ...n
    }) {
        var o;
        let {
            popoverProps: s,
            underlayProps: u,
            arrowProps: c,
            placement: l
        } = (0, r.usePopover)({
            ...n,
            offset: null !== (o = n.offset) && void 0 !== o ? o : 8
        }, e), d = n.popoverRef, f = L(d, !!l), p = R({
            ...n,
            defaultClassName: "react-aria-Popover",
            values: {
                placement: l,
                isEntering: f,
                isExiting: t
            }
        }), h = {
            ...p.style,
            ...s.style
        };
        return a.createElement(r.Overlay, null, !n.isNonModal && a.createElement("div", {
            ...u,
            style: {
                position: "fixed",
                inset: 0
            }
        }), a.createElement("div", {
            ...(0, i.mergeProps)((0, i.filterDOMProps)(n), s),
            ...p,
            ref: d,
            slot: n.slot,
            style: h,
            "data-placement": l,
            "data-entering": f || void 0,
            "data-exiting": t || void 0
        }, !n.isNonModal && a.createElement(r.DismissButton, {
            onDismiss: e.close
        }), a.createElement(eb.Provider, {
            value: {
                arrowProps: c,
                placement: l
            }
        }, p.children), a.createElement(r.DismissButton, {
            onDismiss: e.close
        })))
    }
    let eE = (0, a.createContext)(null),
        eS = (0, a.createContext)(null),
        ex = (0, a.createContext)(null),
        ew = (0, a.createContext)(null),
        eT = (0, a.createContext)(null),
        eC = (0, a.createContext)(null),
        eD = (0, a.createContext)(null),
        eO = (0, a.forwardRef)((e, t) => {
            var n;
            let r = (0, a.useContext)(eC),
                o = null !== (n = null == r ? void 0 : r.state) && void 0 !== n ? n : (0, l.useOverlayTriggerState)(e),
                s = (0, i.useObjectRef)(t),
                u = (0, a.useRef)(null),
                c = P(s, o.isOpen),
                d = P(u, o.isOpen),
                f = c || d;
            return o.isOpen || f ? a.createElement(eM, {
                ...e,
                state: o,
                isExiting: f,
                overlayRef: s,
                modalRef: u
            }) : null
        });

    function eM(e) {
        let t = e.modalRef,
            {
                state: n
            } = e,
            {
                modalProps: o,
                underlayProps: s
            } = (0, r.useModalOverlay)(e, n, t),
            u = L(e.overlayRef),
            c = R({
                ...e,
                defaultClassName: "react-aria-ModalOverlay",
                values: {
                    isEntering: u,
                    isExiting: e.isExiting
                }
            }),
            l = (0, i.useViewportSize)(),
            d = {
                ...c.style,
                "--visual-viewport-height": l.height + "px"
            };
        return a.createElement(r.Overlay, null, a.createElement("div", {
            ...(0, i.mergeProps)((0, i.filterDOMProps)(e), s),
            ...c,
            style: d,
            ref: e.overlayRef,
            "data-entering": u || void 0,
            "data-exiting": e.isExiting || void 0
        }, a.createElement(eD.Provider, {
            value: {
                modalProps: o,
                modalRef: t,
                state: n,
                isExiting: e.isExiting,
                isDismissable: e.isDismissable
            }
        }, c.children)))
    }

    function eA(e) {
        let {
            modalProps: t,
            modalRef: n,
            isExiting: o,
            isDismissable: s,
            state: u
        } = (0, a.useContext)(eD), c = (0, a.useMemo)(() => (0, i.mergeRefs)(e.modalRef, n), [e.modalRef, n]), l = (0, i.useObjectRef)(c), d = L(l), f = R({
            ...e,
            defaultClassName: "react-aria-Modal",
            values: {
                isEntering: d,
                isExiting: o
            }
        });
        return a.createElement("div", {
            ...(0, i.mergeProps)((0, i.filterDOMProps)(e), t),
            ...f,
            ref: l,
            "data-entering": d || void 0,
            "data-exiting": o || void 0
        }, s && a.createElement(r.DismissButton, {
            onDismiss: u.close
        }), f.children)
    }
    let ek = (0, a.createContext)(null),
        eR = (0, a.createContext)({}),
        eN = (0, a.createContext)(null),
        eI = (0, a.createContext)(null),
        eL = (0, a.createContext)(null),
        eP = (0, a.createContext)(null);

    function eF({
        item: e
    }) {
        let {
            state: t,
            dragAndDropHooks: n,
            dragState: o,
            dropState: s
        } = (0, a.useContext)(eP), u = (0, i.useObjectRef)(e.props.ref), {
            rowProps: c,
            gridCellProps: l,
            descriptionProps: d,
            ...f
        } = (0, r.useGridListItem)({
            node: e,
            shouldSelectOnPressUp: !!o
        }, t, u), {
            hoverProps: p,
            isHovered: h
        } = (0, r.useHover)({
            isDisabled: !f.allowsSelection && !f.hasAction
        }), {
            isFocusVisible: m,
            focusProps: g
        } = (0, r.useFocusRing)(), {
            checkboxProps: _
        } = (0, r.useGridListSelectionCheckbox)({
            key: e.key
        }, t), b = null;
        o && n && (b = n.useDraggableItem({
            key: e.key,
            hasDragButton: !0
        }, o));
        let v = null,
            y = (0, a.useRef)(null),
            {
                visuallyHiddenProps: E
            } = (0, r.useVisuallyHidden)();
        s && n && (v = n.useDropIndicator({
            target: {
                type: "item",
                key: e.key,
                dropPosition: "on"
            }
        }, s, y));
        let S = e.props,
            x = o && o.isDragging(e.key),
            w = R({
                ...S,
                id: void 0,
                children: e.rendered,
                defaultClassName: "react-aria-Item",
                values: {
                    ...f,
                    isHovered: h,
                    isFocusVisible: m,
                    selectionMode: t.selectionManager.selectionMode,
                    selectionBehavior: t.selectionManager.selectionBehavior,
                    allowsDragging: !!o,
                    isDragging: x,
                    isDropTarget: null == v ? void 0 : v.isDropTarget
                }
            }),
            T = (null == n ? void 0 : n.renderDropIndicator) || (e => a.createElement(ea, {
                target: e
            })),
            C = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            o && !C.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
        }, []), (0, a.useEffect)(() => {
            !e.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
        }, [e.textValue]), a.createElement(a.Fragment, null, (null == n ? void 0 : n.useDropIndicator) && T({
            type: "item",
            key: e.key,
            dropPosition: "before"
        }), v && !v.isHidden && a.createElement("div", {
            role: "row",
            style: {
                position: "absolute"
            }
        }, a.createElement("div", {
            role: "gridcell"
        }, a.createElement("div", {
            role: "button",
            ...E,
            ...null == v ? void 0 : v.dropIndicatorProps,
            ref: y
        }))), a.createElement("div", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(S), c, g, p, null == b ? void 0 : b.dragProps),
            ...w,
            ref: u,
            "data-hovered": h || void 0,
            "data-focused": f.isFocused || void 0,
            "data-focus-visible": m || void 0,
            "data-pressed": f.isPressed || void 0,
            "data-dragging": x || void 0,
            "data-drop-target": (null == v ? void 0 : v.isDropTarget) || void 0
        }, a.createElement("div", l, a.createElement(k, {
            values: [
                [en, _],
                [G, {
                    slots: {
                        [A]: {},
                        drag: {
                            ...null == b ? void 0 : b.dragButtonProps,
                            ref: C,
                            style: {
                                pointerEvents: "none"
                            }
                        }
                    }
                }],
                [V, {
                    slots: {
                        description: d
                    }
                }]
            ]
        }, w.children))), (null == n ? void 0 : n.useDropIndicator) && null == t.collection.getKeyAfter(e.key) && T({
            type: "item",
            key: e.key,
            dropPosition: "after"
        }))
    }

    function eB(e, t) {
        t = (0, i.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, a.useContext)(eP), o = (0, a.useRef)(null), {
            dropIndicatorProps: s,
            isHidden: u,
            isDropTarget: c
        } = n.useDropIndicator(e, r, o);
        return u ? null : a.createElement(eU, {
            ...e,
            dropIndicatorProps: s,
            isDropTarget: c,
            buttonRef: o,
            ref: t
        })
    }
    let eU = (0, a.forwardRef)(function(e, t) {
        let {
            dropIndicatorProps: n,
            isDropTarget: i,
            buttonRef: o,
            ...s
        } = e, {
            visuallyHiddenProps: u
        } = (0, r.useVisuallyHidden)(), c = R({
            ...s,
            defaultClassName: "react-aria-DropIndicator",
            values: {
                isDropTarget: i
            }
        });
        return a.createElement("div", {
            ...c,
            role: "row",
            ref: t,
            "data-drop-target": i || void 0
        }, a.createElement("div", {
            role: "gridcell"
        }, a.createElement("div", {
            ...u,
            role: "button",
            ...n,
            ref: o
        })))
    });

    function eY() {
        let {
            dragAndDropHooks: e,
            dropState: t
        } = (0, a.useContext)(eP), n = (0, a.useRef)(null), {
            dropIndicatorProps: i
        } = e.useDropIndicator({
            target: {
                type: "root"
            }
        }, t, n), o = t.isDropTarget({
            type: "root"
        }), {
            visuallyHiddenProps: s
        } = (0, r.useVisuallyHidden)();
        return !o && i["aria-hidden"] ? null : a.createElement("div", {
            role: "row",
            "aria-hidden": i["aria-hidden"],
            style: {
                position: "absolute"
            }
        }, a.createElement("div", {
            role: "gridcell"
        }, a.createElement("div", {
            role: "button",
            ...s,
            ...i,
            ref: n
        })))
    }
    let ej = (0, a.createContext)({}),
        ez = (0, a.createContext)(null),
        eH = (0, a.createContext)(null);

    function eG({
        props: e,
        collection: t,
        menuRef: n
    }) {
        var o;
        let s = (0, l.useTreeState)({
                ...e,
                collection: t,
                children: void 0
            }),
            {
                menuProps: u
            } = (0, r.useMenu)(e, s, n),
            c = y({
                items: s.collection,
                children: e => {
                    switch (e.type) {
                        case "section":
                            return a.createElement(eV, {
                                section: e
                            });
                        case "separator":
                            return a.createElement(ec, e.props);
                        case "item":
                            return a.createElement(e$, {
                                item: e
                            });
                        default:
                            throw Error("Unsupported node type in Menu: " + e.type)
                    }
                }
            });
        return a.createElement("div", {
            ...(0, i.filterDOMProps)(e),
            ...u,
            ref: n,
            slot: e.slot,
            style: e.style,
            className: null !== (o = e.className) && void 0 !== o ? o : "react-aria-Menu"
        }, a.createElement(k, {
            values: [
                [eH, s],
                [eu, {
                    elementType: "div"
                }]
            ]
        }, c))
    }

    function eV({
        section: e,
        className: t,
        style: n,
        ...o
    }) {
        var s, u, c;
        let l = (0, a.useContext)(eH),
            [d, f] = I(),
            {
                headingProps: p,
                groupProps: h
            } = (0, r.useMenuSection)({
                heading: f,
                "aria-label": null !== (c = e["aria-label"]) && void 0 !== c ? c : void 0
            }),
            m = y({
                items: l.collection.getChildren(e.key),
                children: e => {
                    switch (e.type) {
                        case "header": {
                            let {
                                ref: t,
                                ...n
                            } = e.props;
                            return a.createElement(es, {
                                ...p,
                                ...n,
                                ref: (0, i.mergeRefs)(d, t)
                            }, e.rendered)
                        }
                        case "item":
                            return a.createElement(e$, {
                                item: e
                            });
                        default:
                            throw Error("Unsupported element type in Section: " + e.type)
                    }
                }
            });
        return a.createElement("section", {
            ...(0, i.filterDOMProps)(o),
            ...h,
            className: t || (null === (s = e.props) || void 0 === s ? void 0 : s.className) || "react-aria-Section",
            style: n || (null === (u = e.props) || void 0 === u ? void 0 : u.style),
            ref: e.props.ref
        }, m)
    }

    function e$({
        item: e
    }) {
        let t = (0, a.useContext)(eH),
            n = (0, i.useObjectRef)(e.props.ref),
            {
                menuItemProps: o,
                labelProps: s,
                descriptionProps: u,
                keyboardShortcutProps: c,
                ...l
            } = (0, r.useMenuItem)({
                key: e.key
            }, t, n),
            d = e.props,
            {
                isFocusVisible: f,
                focusProps: p
            } = (0, r.useFocusRing)(),
            h = R({
                ...d,
                id: void 0,
                children: e.rendered,
                defaultClassName: "react-aria-Item",
                values: {
                    ...l,
                    isHovered: l.isFocused,
                    isFocusVisible: f,
                    selectionMode: t.selectionManager.selectionMode,
                    selectionBehavior: t.selectionManager.selectionBehavior
                }
            }),
            m = (0, i.filterDOMProps)(d);
        return delete m.id, a.createElement("div", {
            ...(0, r.mergeProps)(m, o, p),
            ...h,
            ref: n,
            "data-hovered": l.isFocused || void 0,
            "data-focused": l.isFocused || void 0,
            "data-focus-visible": f || void 0,
            "data-pressed": l.isPressed || void 0
        }, a.createElement(k, {
            values: [
                [V, {
                    slots: {
                        label: s,
                        description: u
                    }
                }],
                [ej, c]
            ]
        }, h.children))
    }
    let eW = (0, a.createContext)(null),
        eK = (0, a.createContext)(null),
        eq = (0, a.createContext)(null),
        eQ = (0, a.createContext)(null),
        eZ = (0, a.createContext)(null),
        eX = (0, a.createContext)(null),
        eJ = (0, a.createContext)(null),
        e0 = (0, a.createContext)(null),
        e1 = (0, a.createContext)(null),
        e2 = (0, a.createContext)(null),
        e3 = (0, a.createContext)(null),
        e4 = Symbol.iterator;
    class e6 extends b {
        addNode(e) {
            super.addNode(e), this.columnsDirty || (this.columnsDirty = "column" === e.type), "tableheader" === e.type && (this.head = e), "tablebody" === e.type && (this.body = e)
        }
        commit(e, t) {
            this.updateColumns(), super.commit(e, t)
        }
        updateColumns() {
            if (!this.columnsDirty) return;
            this.rowHeaderColumnKeys = new Set, this.columns = [];
            let e = new Map,
                t = n => {
                    if ("column" === n.type) e.set(n.key, n), !n.hasChildNodes && (n.index = this.columns.length, this.columns.push(n), n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key));
                    for (let e of this.getChildren(n.key)) t(e)
                };
            for (let e of this.getChildren(this.head.key)) t(e);
            if (this.headerRows = (0, d.buildHeaderRows)(e, this.columns), this.columnsDirty = !1, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
        }
        get columnCount() {
            return this.columns.length
        }
        get rows() {
            return [...this.getChildren(this.body.key)]
        }*[e4]() {
            yield* this.getChildren(this.body.key)
        }
        get size() {
            return [...this.getChildren(this.body.key)].length
        }
        getFirstKey() {
            var e;
            return null === (e = [...this.getChildren(this.body.key)][0]) || void 0 === e ? void 0 : e.key
        }
        getLastKey() {
            var e;
            let t = [...this.getChildren(this.body.key)];
            return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key
        }
        getKeyAfter(e) {
            var t;
            let n = this.getItem(e);
            return (null == n ? void 0 : n.type) === "column" ? null !== (t = n.nextKey) && void 0 !== t ? t : null : super.getKeyAfter(e)
        }
        getKeyBefore(e) {
            var t, n;
            let r = this.getItem(e);
            if ((null == r ? void 0 : r.type) === "column") return null !== (n = r.prevKey) && void 0 !== n ? n : null;
            let i = super.getKeyBefore(e);
            return null != i && (null === (t = this.getItem(i)) || void 0 === t ? void 0 : t.type) === "tablebody" ? null : i
        }
        getChildren(e) {
            if (!this.getItem(e)) {
                for (let t of this.headerRows)
                    if (t.key === e) return t.childNodes
            }
            return super.getChildren(e)
        }
        clone() {
            let e = super.clone();
            return e.headerRows = this.headerRows, e.columns = this.columns, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e.body = this.body, e
        }
        getTextValue(e) {
            let t = this.getItem(e);
            if (!t) return "";
            if (t.textValue) return t.textValue;
            let n = this.rowHeaderColumnKeys,
                r = [];
            for (let t of this.getChildren(e)) {
                let e = this.columns[t.index];
                if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break
            }
            return r.join(" ")
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "headerRows", []), (0, o.default)(this, "columns", []), (0, o.default)(this, "rowHeaderColumnKeys", new Set), (0, o.default)(this, "head", new f("tableheader", -1)), (0, o.default)(this, "body", new f("tablebody", -2)), (0, o.default)(this, "columnsDirty", !0)
        }
    }
    let e5 = (0, a.createContext)(null),
        e8 = (0, a.createContext)(null),
        e9 = (0, a.forwardRef)(function(e, t) {
            let n, o, s;
            [e, t] = N(e, t, e5);
            let {
                portal: u,
                collection: c
            } = x(e, (0, a.useMemo)(() => new e6, [])), d = (0, l.useTableState)({
                ...e,
                collection: c,
                children: void 0
            }), {
                gridProps: f
            } = (0, r.useTable)(e, d, t), {
                dragAndDropHooks: p
            } = e, h = d.selectionManager, m = !!(null == p ? void 0 : p.useDraggableCollectionState), g = !!(null == p ? void 0 : p.useDroppableCollectionState), _ = (0, a.useRef)(m), b = (0, a.useRef)(g);
            _.current !== m && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), b.current !== g && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
            let v = !1,
                y = null,
                E = (0, a.useRef)(null);
            if (m && p) {
                n = p.useDraggableCollectionState({
                    collection: c,
                    selectionManager: h,
                    preview: p.renderDragPreview ? E : void 0
                }), p.useDraggableCollection({}, n, t);
                let e = p.DragPreview;
                y = p.renderDragPreview ? a.createElement(e, {
                    ref: E
                }, p.renderDragPreview) : null
            }
            if (g && p) {
                o = p.useDroppableCollectionState({
                    collection: c,
                    selectionManager: h
                });
                let e = new r.ListKeyboardDelegate(c, "selection" === h.disabledBehavior ? new Set : h.disabledKeys, t),
                    n = p.dropTargetDelegate || new p.ListDropTargetDelegate(c, t);
                s = p.useDroppableCollection({
                    keyboardDelegate: e,
                    dropTargetDelegate: n
                }, o, t), v = o.isDropTarget({
                    type: "root"
                })
            }
            let {
                focusProps: S,
                isFocused: w,
                isFocusVisible: T
            } = (0, r.useFocusRing)(), C = R({
                className: e.className,
                style: e.style,
                defaultClassName: "react-aria-Table",
                values: {
                    isDropTarget: v,
                    isFocused: w,
                    isFocusVisible: T
                }
            }), {
                selectionBehavior: D,
                selectionMode: O,
                disallowEmptySelection: M
            } = d.selectionManager, A = (0, a.useMemo)(() => ({
                selectionBehavior: "none" === O ? null : D,
                selectionMode: O,
                disallowEmptySelection: M,
                allowsDragging: m
            }), [D, O, M, m]);
            return a.createElement(a.Fragment, null, a.createElement(k, {
                values: [
                    [e8, {
                        state: d,
                        dragAndDropHooks: p,
                        dragState: n,
                        dropState: o
                    }],
                    [ei, {
                        render: td
                    }]
                ]
            }, a.createElement(r.FocusScope, null, a.createElement("table", {
                ...(0, i.filterDOMProps)(e),
                ...C,
                ...(0, r.mergeProps)(f, S, null == s ? void 0 : s.collectionProps),
                ref: t,
                slot: e.slot,
                "data-drop-target": v || void 0,
                "data-focused": w || void 0,
                "data-focus-visible": T || void 0
            }, a.createElement(ta, {
                collection: c
            }), a.createElement(to, {
                collection: c,
                isDroppable: g
            }))), y), a.createElement(e7.Provider, {
                value: A
            }, u))
        }),
        e7 = (0, a.createContext)(null),
        te = (0, a.forwardRef)(function(e, t) {
            let n = E({
                    children: e.children,
                    items: e.columns
                }),
                r = "function" == typeof e.children ? e.children : null;
            return a.createElement(O.Provider, {
                value: r
            }, a.createElement("tableheader", {
                ref: T(e, t)
            }, n))
        }),
        tt = (0, a.forwardRef)(function(e, t) {
            var n;
            let r = (0, a.useContext)(O),
                i = "function" == typeof r ? r : e.children,
                o = E({
                    children: e.title || e.childColumns ? i : null,
                    items: e.childColumns
                });
            return a.createElement("column", {
                ref: T(e, t, null !== (n = e.title) && void 0 !== n ? n : e.children)
            }, o)
        }),
        tn = (0, a.forwardRef)(function(e, t) {
            let n = E(e);
            return a.createElement("tablebody", {
                ref: T(e, t)
            }, n)
        }),
        tr = (0, a.forwardRef)(function(e, t) {
            let n = E({
                    children: e.children,
                    items: e.columns,
                    idScope: e.id
                }),
                r = (0, a.useMemo)(() => ({
                    idScope: e.id
                }), [e.id]);
            return a.createElement("item", {
                ref: T(e, t)
            }, a.createElement(D.Provider, {
                value: r
            }, n))
        }),
        ti = (0, a.forwardRef)(function(e, t) {
            return a.createElement("cell", {
                ref: T(e, t, e.children)
            })
        });

    function ta({
        collection: e
    }) {
        var t;
        let n = y({
                items: e.headerRows,
                children: (0, a.useCallback)(e => {
                    if ("headerrow" === e.type) return a.createElement(ts, {
                        item: e
                    });
                    throw Error("Unsupported node type in TableHeader: " + e.type)
                }, [])
            }),
            {
                rowGroupProps: o
            } = (0, r.useTableRowGroup)();
        return a.createElement("thead", {
            ...(0, i.filterDOMProps)(e.head.props),
            ...o,
            ref: e.head.props.ref,
            className: null !== (t = e.head.props.className) && void 0 !== t ? t : "react-aria-TableHeader",
            style: e.head.props.style
        }, n)
    }

    function to({
        collection: e,
        isDroppable: t
    }) {
        let n, o = y({
                items: e.rows,
                children: (0, a.useCallback)(e => {
                    if ("item" === e.type) return a.createElement(tc, {
                        item: e
                    });
                    throw Error("Unsupported node type in TableBody: " + e.type)
                }, [])
            }),
            s = e.body.props,
            u = R({
                ...s,
                id: void 0,
                children: void 0,
                defaultClassName: "react-aria-TableBody",
                values: {
                    isEmpty: 0 === e.size
                }
            });
        0 === e.size && s.renderEmptyState && (n = a.createElement("tr", {
            role: "row"
        }, a.createElement("td", {
            role: "gridcell",
            colSpan: e.columnCount
        }, s.renderEmptyState())));
        let {
            rowGroupProps: c
        } = (0, r.useTableRowGroup)();
        return a.createElement("tbody", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(s), c),
            ...u,
            ref: e.body.props.ref,
            "data-empty": 0 === e.size || void 0
        }, t && a.createElement(tp, null), o, n)
    }

    function ts({
        item: e
    }) {
        let t = (0, a.useRef)(null),
            {
                state: n
            } = (0, a.useContext)(e8),
            {
                rowProps: i
            } = (0, r.useTableHeaderRow)({
                node: e
            }, n, t),
            {
                checkboxProps: o
            } = (0, r.useTableSelectAllCheckbox)(n),
            s = y({
                items: n.collection.getChildren(e.key),
                children: e => {
                    if ("column" === e.type) return a.createElement(tu, {
                        column: e
                    });
                    throw Error("Unsupported node type in Row: " + e.type)
                }
            });
        return a.createElement("tr", {
            ...i,
            ref: t
        }, a.createElement(k, {
            values: [
                [en, {
                    slots: {
                        selection: o
                    }
                }]
            ]
        }, s))
    }

    function tu({
        column: e
    }) {
        var t;
        let n = (0, i.useObjectRef)(e.props.ref),
            {
                state: o
            } = (0, a.useContext)(e8),
            {
                columnHeaderProps: s
            } = (0, r.useTableColumnHeader)({
                node: e
            }, o, n),
            {
                isFocused: u,
                isFocusVisible: c,
                focusProps: l
            } = (0, r.useFocusRing)(),
            d = e.props,
            f = R({
                ...d,
                id: void 0,
                children: e.rendered,
                defaultClassName: "react-aria-Column",
                values: {
                    isFocused: u,
                    isFocusVisible: c,
                    allowsSorting: e.props.allowsSorting,
                    sortDirection: (null === (t = o.sortDescriptor) || void 0 === t ? void 0 : t.column) === e.key ? o.sortDescriptor.direction : void 0
                }
            });
        return a.createElement("th", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(d), s, l),
            ...f,
            colSpan: e.colspan,
            ref: n,
            "data-focused": u || void 0,
            "data-focus-visible": c || void 0
        }, f.children)
    }

    function tc({
        item: e
    }) {
        let t, n, o = (0, i.useObjectRef)(e.props.ref),
            {
                state: s,
                dragAndDropHooks: u,
                dragState: c,
                dropState: l
            } = (0, a.useContext)(e8),
            {
                rowProps: d,
                ...f
            } = (0, r.useTableRow)({
                node: e,
                shouldSelectOnPressUp: !!c
            }, s, o),
            {
                isFocused: p,
                isFocusVisible: h,
                focusProps: m
            } = (0, r.useFocusRing)(),
            {
                hoverProps: g,
                isHovered: _
            } = (0, r.useHover)({
                isDisabled: !f.allowsSelection && !f.hasAction
            }),
            {
                checkboxProps: b
            } = (0, r.useTableSelectionCheckbox)({
                key: e.key
            }, s);
        c && u && (t = u.useDraggableItem({
            key: e.key,
            hasDragButton: !0
        }, c));
        let v = (0, a.useRef)(null),
            {
                visuallyHiddenProps: E
            } = (0, r.useVisuallyHidden)();
        l && u && (n = u.useDropIndicator({
            target: {
                type: "item",
                key: e.key,
                dropPosition: "on"
            }
        }, l, v));
        let S = (null == u ? void 0 : u.renderDropIndicator) || (e => a.createElement(ea, {
                target: e
            })),
            x = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            c && !x.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
        }, []);
        let w = e.props,
            T = c && c.isDragging(e.key),
            C = R({
                ...w,
                id: void 0,
                defaultClassName: "react-aria-Row",
                values: {
                    ...f,
                    isHovered: _,
                    isFocused: p,
                    isFocusVisible: h,
                    selectionMode: s.selectionManager.selectionMode,
                    selectionBehavior: s.selectionManager.selectionBehavior,
                    isDragging: T,
                    isDropTarget: null == n ? void 0 : n.isDropTarget
                }
            }),
            D = y({
                items: s.collection.getChildren(e.key),
                children: e => {
                    if ("cell" === e.type) return a.createElement(tl, {
                        cell: e
                    });
                    throw Error("Unsupported node type in Row: " + e.type)
                }
            });
        return a.createElement(a.Fragment, null, (null == u ? void 0 : u.useDropIndicator) && S({
            type: "item",
            key: e.key,
            dropPosition: "before"
        }), n && !n.isHidden && a.createElement("tr", {
            role: "row",
            style: {
                height: 0
            }
        }, a.createElement("td", {
            role: "gridcell",
            colSpan: s.collection.columnCount,
            style: {
                padding: 0
            }
        }, a.createElement("div", {
            role: "button",
            ...E,
            ...n.dropIndicatorProps,
            ref: v
        }))), a.createElement("tr", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(w), d, m, g, null == t ? void 0 : t.dragProps),
            ...C,
            ref: o,
            "data-hovered": _ || void 0,
            "data-focused": f.isFocused || void 0,
            "data-focus-visible": h || void 0,
            "data-pressed": f.isPressed || void 0,
            "data-dragging": T || void 0,
            "data-drop-target": (null == n ? void 0 : n.isDropTarget) || void 0
        }, a.createElement(k, {
            values: [
                [en, {
                    slots: {
                        selection: b
                    }
                }],
                [G, {
                    slots: {
                        [A]: {},
                        drag: {
                            ...null == t ? void 0 : t.dragButtonProps,
                            ref: x,
                            style: {
                                pointerEvents: "none"
                            }
                        }
                    }
                }]
            ]
        }, D)), (null == u ? void 0 : u.useDropIndicator) && null == s.collection.getKeyAfter(e.key) && S({
            type: "item",
            key: e.key,
            dropPosition: "after"
        }))
    }

    function tl({
        cell: e
    }) {
        let t = (0, i.useObjectRef)(e.props.ref),
            {
                state: n,
                dragState: o
            } = (0, a.useContext)(e8);
        e.column = n.collection.columns[e.index];
        let {
            gridCellProps: s,
            isPressed: u
        } = (0, r.useTableCell)({
            node: e,
            shouldSelectOnPressUp: !!o
        }, n, t), {
            isFocused: c,
            isFocusVisible: l,
            focusProps: d
        } = (0, r.useFocusRing)(), f = e.props, p = R({
            ...f,
            id: void 0,
            defaultClassName: "react-aria-Cell",
            values: {
                isFocused: c,
                isFocusVisible: l,
                isPressed: u
            }
        });
        return a.createElement("td", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(f), s, d),
            ...p,
            ref: t,
            "data-focused": c || void 0,
            "data-focus-visible": l || void 0,
            "data-pressed": u || void 0
        }, p.children)
    }

    function td(e, t) {
        t = (0, i.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, a.useContext)(e8), o = (0, a.useRef)(null), {
            dropIndicatorProps: s,
            isHidden: u,
            isDropTarget: c
        } = n.useDropIndicator(e, r, o);
        return u ? null : a.createElement(tf, {
            ...e,
            dropIndicatorProps: s,
            isDropTarget: c,
            buttonRef: o,
            ref: t
        })
    }
    let tf = (0, a.forwardRef)(function(e, t) {
        let {
            dropIndicatorProps: n,
            isDropTarget: o,
            buttonRef: s,
            ...u
        } = e, {
            state: c
        } = (0, a.useContext)(e8), {
            visuallyHiddenProps: l
        } = (0, r.useVisuallyHidden)(), d = R({
            ...u,
            defaultClassName: "react-aria-DropIndicator",
            values: {
                isDropTarget: o
            }
        });
        return a.createElement("tr", {
            ...(0, i.filterDOMProps)(e),
            ...d,
            role: "row",
            ref: t,
            "data-drop-target": o || void 0
        }, a.createElement("td", {
            role: "gridcell",
            colSpan: c.collection.columnCount,
            style: {
                padding: 0
            }
        }, a.createElement("div", {
            ...l,
            role: "button",
            ...n,
            ref: s
        })))
    });

    function tp() {
        let {
            state: e,
            dragAndDropHooks: t,
            dropState: n
        } = (0, a.useContext)(e8), i = (0, a.useRef)(null), {
            dropIndicatorProps: o
        } = t.useDropIndicator({
            target: {
                type: "root"
            }
        }, n, i), s = n.isDropTarget({
            type: "root"
        }), {
            visuallyHiddenProps: u
        } = (0, r.useVisuallyHidden)();
        return !s && o["aria-hidden"] ? null : a.createElement("tr", {
            role: "row",
            "aria-hidden": o["aria-hidden"],
            style: {
                height: 0
            }
        }, a.createElement("td", {
            role: "gridcell",
            colSpan: e.collection.columnCount,
            style: {
                padding: 0
            }
        }, a.createElement("div", {
            role: "button",
            ...u,
            ...o,
            ref: i
        })))
    }
    let th = (0, a.createContext)(null),
        tm = (0, a.createContext)(null);

    function tg({
        item: e,
        state: t
    }) {
        let {
            key: n
        } = e, o = (0, i.useObjectRef)(e.props.ref), {
            tabProps: s,
            isSelected: u,
            isDisabled: c,
            isPressed: l
        } = (0, r.useTab)({
            key: n
        }, t, o), {
            focusProps: d,
            isFocused: f,
            isFocusVisible: p
        } = (0, r.useFocusRing)(), {
            hoverProps: h,
            isHovered: m
        } = (0, r.useHover)({
            isDisabled: c
        }), g = R({
            ...e.props,
            children: e.rendered,
            defaultClassName: "react-aria-Tab",
            values: {
                isSelected: u,
                isDisabled: c,
                isFocused: f,
                isFocusVisible: p,
                isPressed: l,
                isHovered: m
            }
        }), _ = (0, i.filterDOMProps)(e.props);
        return delete _.id, a.createElement("div", {
            ...(0, r.mergeProps)(_, s, d, h, g),
            ref: o,
            "data-focus-visible": p || void 0,
            "data-pressed": l || void 0,
            "data-hovered": m || void 0
        })
    }
    let t_ = (0, a.createContext)(null),
        tb = (0, a.createContext)({}),
        tv = (0, a.createContext)(null);

    function ty(e) {
        let {
            state: t,
            triggerRef: n,
            tooltipProps: o
        } = (0, a.useContext)(tv), s = (0, a.useRef)(null), {
            overlayProps: u,
            arrowProps: c,
            placement: l
        } = (0, r.useOverlayPosition)({
            placement: e.placement || "top",
            targetRef: n,
            overlayRef: s,
            offset: e.offset,
            crossOffset: e.crossOffset,
            isOpen: t.isOpen
        }), d = L(s, !!l), f = R({
            ...e,
            defaultClassName: "react-aria-Tooltip",
            values: {
                placement: l,
                isEntering: d,
                isExiting: e.isExiting
            }
        });
        e = (0, r.mergeProps)(e, u);
        let {
            tooltipProps: p
        } = (0, r.useTooltip)(e, t);
        return a.createElement("div", {
            ...(0, r.mergeProps)(o, p),
            ref: (0, i.mergeRefs)(s, e.tooltipRef),
            ...f,
            style: {
                ...f.style,
                ...u.style
            },
            "data-placement": l,
            "data-entering": d || void 0,
            "data-exiting": e.isExiting || void 0
        }, a.createElement(eb.Provider, {
            value: {
                arrowProps: c,
                placement: l
            }
        }, f.children))
    }
}