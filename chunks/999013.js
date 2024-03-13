function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Table: function() {
            return e7
        },
        Row: function() {
            return tr
        },
        Cell: function() {
            return ti
        },
        Column: function() {
            return tt
        },
        TableHeader: function() {
            return te
        },
        TableBody: function() {
            return tn
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("597287"),
        i = n("290895"),
        o = n("884691"),
        s = n("228502"),
        a = n("817736"),
        c = n("611434"),
        u = n("336468"),
        d = n("219528"),
        l = n("581555");
    class f {
        get childNodes() {
            throw Error("childNodes is not supported")
        }
        clone() {
            let e = new f(this.type, this.key);
            return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e
        }
        constructor(e, t) {
            (0, s.default)(this, "value", null), (0, s.default)(this, "level", 0), (0, s.default)(this, "hasChildNodes", !1), (0, s.default)(this, "rendered", null), (0, s.default)(this, "textValue", ""), (0, s.default)(this, "aria-label", void 0), (0, s.default)(this, "index", 0), (0, s.default)(this, "parentKey", null), (0, s.default)(this, "prevKey", null), (0, s.default)(this, "nextKey", null), (0, s.default)(this, "firstChildKey", null), (0, s.default)(this, "lastChildKey", null), (0, s.default)(this, "props", {}), this.type = e, this.key = t
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
            (0, s.default)(this, "_firstChild", null), (0, s.default)(this, "_lastChild", null), (0, s.default)(this, "_previousSibling", null), (0, s.default)(this, "_nextSibling", null), (0, s.default)(this, "_parentNode", null), this.ownerDocument = e
        }
    }
    let v = 0;
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
            var e, t, n, r, i, o, s, a;
            let c = this.ownerDocument.getMutableNode(this);
            c.index = this.index, c.level = this.level, c.parentKey = this.parentNode instanceof g ? this.parentNode.node.key : null, c.prevKey = null !== (i = null === (e = this.previousSibling) || void 0 === e ? void 0 : e.node.key) && void 0 !== i ? i : null, c.nextKey = null !== (o = null === (t = this.nextSibling) || void 0 === t ? void 0 : t.node.key) && void 0 !== o ? o : null, c.hasChildNodes = !!this.firstChild, c.firstChildKey = null !== (s = null === (n = this.firstChild) || void 0 === n ? void 0 : n.node.key) && void 0 !== s ? s : null, c.lastChildKey = null !== (a = null === (r = this.lastChild) || void 0 === r ? void 0 : r.node.key) && void 0 !== a ? a : null
        }
        setProps(e, t, n) {
            let r = this.ownerDocument.getMutableNode(this),
                {
                    value: i,
                    textValue: o,
                    id: s,
                    ...a
                } = e;
            if (a.ref = t, r.props = a, r.rendered = n, r.value = i, r.textValue = o || ("string" == typeof n ? n : "") || e["aria-label"] || "", null != s && s !== r.key) {
                if (this.hasSetProps) throw Error("Cannot change the id of an item");
                r.key = s
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
            super(t), (0, s.default)(this, "nodeType", 8), (0, s.default)(this, "_index", 0), (0, s.default)(this, "hasSetProps", !1), this.node = new f(e, "react-aria-".concat(++v)), this.ownerDocument.startTransaction()
        }
    }
    let b = Symbol.iterator;
    class m {
        get size() {
            return this.keyMap.size
        }
        getKeys() {
            return this.keyMap.keys()
        }*[b]() {
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
            (0, s.default)(this, "keyMap", new Map), (0, s.default)(this, "firstKey", null), (0, s.default)(this, "lastKey", null), (0, s.default)(this, "frozen", !1)
        }
    }
    class y extends h {
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
            super(null), (0, s.default)(this, "nodeType", 11), (0, s.default)(this, "ownerDocument", this), (0, s.default)(this, "dirtyNodes", new Set), (0, s.default)(this, "mutatedNodes", new Set), (0, s.default)(this, "subscriptions", new Set), (0, s.default)(this, "transactionCount", 0), this.collection = e, this.collectionMutated = !0
        }
    }

    function x(e) {
        let {
            children: t,
            items: n,
            idScope: r,
            addIdAndValue: i
        } = e, s = (0, o.useMemo)(() => new WeakMap, []);
        return (0, o.useMemo)(() => {
            if (!n || "function" != typeof t) return t;
            {
                let c = [];
                for (let u of n) {
                    let n = s.get(u);
                    if (!n) {
                        if (null == (n = t(u)).key) {
                            var e, a;
                            let t = null !== (a = null !== (e = n.props.id) && void 0 !== e ? e : u.key) && void 0 !== a ? a : u.id;
                            if (null == t) throw Error("Could not determine key for item");
                            r && (t = r + ":" + t), n = (0, o.cloneElement)(n, i ? {
                                key: t,
                                id: t,
                                value: u
                            } : {
                                key: t
                            })
                        }
                        s.set(u, n)
                    }
                    c.push(n)
                }
                return c
            }
        }, [t, n, s, r, i])
    }

    function w(e) {
        return x({
            ...e,
            addIdAndValue: !0
        })
    }
    let S = (0, o.createContext)(!1);

    function k(e, t) {
        let n = (0, o.useMemo)(() => new y(t || new m), [t]),
            i = (0, o.useCallback)(e => n.subscribe(e), [n]),
            s = (0, o.useCallback)(() => n.getCollection(), [n]),
            u = (0, c.useSyncExternalStore)(i, s, s),
            d = w(e),
            l = (0, o.useMemo)(() => o.createElement(S.Provider, {
                value: !0
            }, d), [d]);
        return {
            portal: (0, r.useIsSSR)() ? null : (0, a.createPortal)(l, n),
            collection: u
        }
    }

    function E(Element, e, t) {
        let n = (0, o.useContext)(S);
        return (t = _(e, t, e.children), n) ? o.createElement(Element, {
            ref: t
        }) : null
    }

    function _(e, t, n) {
        return (0, o.useCallback)(r => {
            null == r || r.setProps(e, t, n)
        }, [e, t, n])
    }
    let M = (0, o.forwardRef)(function(e, t) {
            return o.createElement("item", {
                ref: _(e, t, e.children)
            })
        }),
        D = (0, o.createContext)(null),
        C = (0, o.createContext)(null),
        P = Symbol("callback"),
        T = Symbol("default");

    function A(e) {
        let {
            values: t,
            children: n
        } = e;
        for (let [e, r] of t) n = o.createElement(e.Provider, {
            value: r
        }, n);
        return n
    }

    function R(e) {
        let {
            className: t,
            style: n,
            children: r,
            defaultClassName: i,
            defaultChildren: s,
            values: a
        } = e;
        return (0, o.useMemo)(() => {
            let e, o, c;
            return e = "function" == typeof t ? t(a) : t, o = "function" == typeof n ? n(a) : n, {
                className: null != e ? e : i,
                style: o,
                children: c = "function" == typeof r ? r(a) : null == r ? s : r
            }
        }, [t, n, r, i, s, a])
    }

    function I(e, t, n) {
        let r = (0, o.useContext)(n) || {};
        if ("slots" in r && r.slots) {
            if (!e.slot && !r.slots[T]) throw Error("A slot prop is required");
            let t = e.slot || T;
            if (!r.slots[t]) throw Error('Invalid slot "'.concat(e.slot, '". Valid slot names are ') + new Intl.ListFormat().format(Object.keys(r.slots).map(e => '"'.concat(e, '"'))) + ".");
            r = r.slots[t]
        }
        let {
            ref: s,
            [P]: a,
            ...c
        } = r, u = (0, i.useObjectRef)((0, i.mergeRefs)(t, s)), d = (0, i.mergeProps)(c, e);
        return (0, o.useEffect)(() => {
            a && a(e)
        }, [a, e]), [d, u]
    }

    function O() {
        let [e, t] = (0, o.useState)(!0), n = (0, o.useRef)(!1), r = (0, o.useCallback)(e => {
            n.current = !0, t(!!e)
        }, []);
        return (0, i.useLayoutEffect)(() => {
            !n.current && t(!1)
        }, []), [r, e]
    }

    function j(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [n, r] = (0, o.useState)(!0);
        return N(e, n && t, (0, o.useCallback)(() => r(!1), [])), n && t
    }

    function L(e, t) {
        let [n, r] = (0, o.useState)(!1), i = (0, o.useRef)("idle");
        return !t && e.current && "idle" === i.current && (n = !0, r(!0), i.current = "exiting"), !e.current && "exited" === i.current && (i.current = "idle"), N(e, n, (0, o.useCallback)(() => {
            i.current = "exited", r(!1)
        }, [])), n
    }

    function N(e, t, n) {
        let r = (0, o.useRef)(null);
        t && e.current && (r.current = window.getComputedStyle(e.current).animation), (0, i.useLayoutEffect)(() => {
            if (t && e.current) {
                let t = window.getComputedStyle(e.current);
                if ("none" !== t.animationName && t.animation !== r.current) {
                    let t = i => {
                            i.target === e.current && (r.removeEventListener("animationend", t), a.flushSync(() => {
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
    let F = (0, o.createContext)(!1),
        B = (0, o.createContext)({}),
        z = (0, o.createContext)(null),
        K = (0, o.createContext)(null);

    function V(e) {
        var t;
        let {
            node: n,
            isCurrent: r,
            isDisabled: s
        } = e;
        return o.createElement("li", {
            ...(0, i.filterDOMProps)(n.props),
            style: n.props.style,
            className: null !== (t = n.props.className) && void 0 !== t ? t : "react-aria-Item"
        }, o.createElement(A, {
            values: [
                [z, {
                    "aria-current": r ? "page" : null,
                    isDisabled: s || r
                }],
                [B, r ? {
                    "aria-current": "page"
                } : null]
            ]
        }, n.rendered))
    }
    let U = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
        H = (0, o.createContext)({}),
        q = (0, o.createContext)({}),
        G = (0, o.createContext)({}),
        W = (0, o.createContext)({}),
        Z = (0, o.createContext)(null),
        Y = (0, o.createContext)(null),
        X = (0, o.forwardRef)(function(e, t) {
            let {
                children: n,
                style: r,
                className: s
            } = e, {
                headerProps: a,
                weekDays: c
            } = (0, o.useContext)(Y);
            return o.createElement("thead", {
                ...(0, i.filterDOMProps)(e),
                ...a,
                ref: t,
                style: r,
                className: s || "react-aria-CalendarGridHeader"
            }, o.createElement("tr", null, c.map((e, t) => o.cloneElement(n(e), {
                key: t
            }))))
        }),
        J = (0, o.forwardRef)(function(e, t) {
            let {
                children: n,
                style: r,
                className: s
            } = e;
            return o.createElement("th", {
                ...(0, i.filterDOMProps)(e),
                ref: t,
                style: r,
                className: s || "react-aria-CalendarHeaderCell"
            }, n)
        }),
        $ = (0, o.forwardRef)(function(e, t) {
            let {
                children: n,
                style: s,
                className: a
            } = e, c = (0, o.useContext)(Z), {
                startDate: d
            } = (0, o.useContext)(Y), {
                locale: l
            } = (0, r.useLocale)(), f = (0, u.getWeeksInMonth)(d, l);
            return o.createElement("tbody", {
                ...(0, i.filterDOMProps)(e),
                ref: t,
                style: s,
                className: a || "react-aria-CalendarGridBody"
            }, [...Array(f).keys()].map(e => o.createElement("tr", {
                key: e
            }, c.getDatesInWeek(e, d).map((e, t) => e ? o.cloneElement(n(e), {
                key: t
            }) : o.createElement("td", {
                key: t
            })))))
        }),
        Q = (0, o.createContext)({}),
        ee = (0, o.createContext)(null),
        et = (0, o.createContext)(null),
        en = (0, o.createContext)(null),
        er = (0, o.createContext)({}),
        ei = (0, o.createContext)(null),
        eo = (0, o.forwardRef)(function(e, t) {
            let {
                render: n
            } = (0, o.useContext)(ei);
            return o.createElement(o.Fragment, null, n(e, t))
        }),
        es = (0, o.createContext)({}),
        ea = (0, o.forwardRef)(function(e, t) {
            [e, t] = I(e, t, es);
            let n = E("header", e, t);
            return n ? n : o.createElement("header", {
                className: "react-aria-Header",
                ...e,
                ref: t
            }, e.children)
        }),
        ec = (0, o.createContext)({}),
        eu = (0, o.forwardRef)(function(e, t) {
            [e, t] = I(e, t, ec);
            let {
                elementType: n,
                orientation: s,
                style: a,
                className: c
            } = e, Element = n || "hr";
            "hr" === Element && "vertical" === s && (Element = "div");
            let {
                separatorProps: u
            } = (0, r.useSeparator)({
                elementType: n,
                orientation: s
            }), d = E("separator", e, t);
            return d ? d : o.createElement(Element, {
                ...(0, i.filterDOMProps)(e),
                ...u,
                style: a,
                className: null != c ? c : "react-aria-Separator",
                ref: t,
                slot: e.slot
            })
        }),
        ed = (0, o.createContext)(null),
        el = (0, o.createContext)(null);

    function ef(e) {
        let {
            props: t,
            listBoxRef: n
        } = e, {
            portal: r,
            collection: i
        } = k(t);
        t = {
            ...t,
            collection: i,
            children: null,
            items: null
        };
        let s = (0, d.useListState)(t);
        return o.createElement(o.Fragment, null, r, o.createElement(ep, {
            state: s,
            props: t,
            listBoxRef: n
        }))
    }

    function ep(e) {
        let t, n, s, {
                state: a,
                props: c,
                listBoxRef: u
            } = e,
            {
                dragAndDropHooks: d
            } = c,
            {
                collection: l,
                selectionManager: f
            } = a,
            p = !!(null == d ? void 0 : d.useDraggableCollectionState),
            h = !!(null == d ? void 0 : d.useDroppableCollectionState),
            {
                listBoxProps: v
            } = (0, r.useListBox)({
                ...c,
                shouldSelectOnPressUp: p || c.shouldSelectOnPressUp
            }, a, u),
            g = x({
                items: l,
                children: e => {
                    switch (e.type) {
                        case "section":
                            return o.createElement(eh, {
                                section: e
                            });
                        case "separator":
                            return o.createElement(eu, e.props);
                        case "item":
                            return o.createElement(ev, {
                                item: e
                            });
                        default:
                            throw Error("Unsupported node type in Menu: " + e.type)
                    }
                }
            }),
            b = (0, o.useRef)(p),
            m = (0, o.useRef)(h);
        b.current !== p && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), m.current !== h && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
        let y = !1,
            w = null,
            S = (0, o.useRef)(null);
        if (p && d) {
            t = d.useDraggableCollectionState({
                collection: l,
                selectionManager: f,
                preview: d.renderDragPreview ? S : void 0
            }), d.useDraggableCollection({}, t, u);
            let e = d.DragPreview;
            w = d.renderDragPreview ? o.createElement(e, {
                ref: S
            }, d.renderDragPreview) : null
        }
        if (h && d) {
            n = d.useDroppableCollectionState({
                collection: l,
                selectionManager: f
            });
            let e = c.keyboardDelegate || new r.ListKeyboardDelegate(l, "selection" === f.disabledBehavior ? new Set : f.disabledKeys, u),
                t = d.dropTargetDelegate || new d.ListDropTargetDelegate(l, u);
            s = d.useDroppableCollection({
                keyboardDelegate: e,
                dropTargetDelegate: t
            }, n, u), y = n.isDropTarget({
                type: "root"
            })
        }
        let {
            focusProps: k,
            isFocused: E,
            isFocusVisible: _
        } = (0, r.useFocusRing)(), M = R({
            className: c.className,
            style: c.style,
            defaultClassName: "react-aria-ListBox",
            values: {
                isDropTarget: y,
                isEmpty: 0 === a.collection.size,
                isFocused: E,
                isFocusVisible: _
            }
        }), D = null;
        return 0 === a.collection.size && c.renderEmptyState && (D = o.createElement("div", {
            role: "option",
            style: {
                display: "contents"
            }
        }, c.renderEmptyState())), o.createElement(r.FocusScope, null, o.createElement("div", {
            ...(0, i.filterDOMProps)(c),
            ...(0, r.mergeProps)(v, k, null == s ? void 0 : s.collectionProps),
            ...M,
            ref: u,
            slot: c.slot,
            "data-drop-target": y || void 0,
            "data-empty": 0 === a.collection.size || void 0,
            "data-focused": E || void 0,
            "data-focus-visible": _ || void 0
        }, o.createElement(A, {
            values: [
                [el, {
                    state: a,
                    shouldFocusOnHover: c.shouldFocusOnHover,
                    dragAndDropHooks: d,
                    dragState: t,
                    dropState: n
                }],
                [ec, {
                    elementType: "li"
                }],
                [ei, {
                    render: eg
                }]
            ]
        }, g), D, w))
    }

    function eh(e) {
        var t, n, s;
        let {
            section: a,
            className: c,
            style: u,
            ...d
        } = e, {
            state: l
        } = (0, o.useContext)(el), [f, p] = O(), {
            headingProps: h,
            groupProps: v
        } = (0, r.useListBoxSection)({
            heading: p,
            "aria-label": null !== (s = a["aria-label"]) && void 0 !== s ? s : void 0
        }), g = x({
            items: l.collection.getChildren(a.key),
            children: e => {
                switch (e.type) {
                    case "header": {
                        let {
                            ref: t,
                            ...n
                        } = e.props;
                        return o.createElement(ea, {
                            ...h,
                            ...n,
                            ref: (0, i.mergeRefs)(f, t)
                        }, e.rendered)
                    }
                    case "item":
                        return o.createElement(ev, {
                            item: e
                        });
                    default:
                        throw Error("Unsupported element type in Section: " + e.type)
                }
            }
        });
        return o.createElement("section", {
            ...(0, i.filterDOMProps)(d),
            ...v,
            className: c || (null === (t = a.props) || void 0 === t ? void 0 : t.className) || "react-aria-Section",
            style: u || (null === (n = a.props) || void 0 === n ? void 0 : n.style),
            ref: a.props.ref
        }, g)
    }

    function ev(e) {
        let {
            item: t
        } = e, n = (0, i.useObjectRef)(t.props.ref), {
            state: s,
            shouldFocusOnHover: a,
            dragAndDropHooks: c,
            dragState: u,
            dropState: d
        } = (0, o.useContext)(el), {
            optionProps: l,
            labelProps: f,
            descriptionProps: p,
            ...h
        } = (0, r.useOption)({
            key: t.key
        }, s, n), {
            hoverProps: v,
            isHovered: g
        } = (0, r.useHover)({
            isDisabled: a || !h.allowsSelection && !h.hasAction
        });
        a && (v = {}, g = h.isFocused);
        let b = null;
        u && c && (b = c.useDraggableItem({
            key: t.key
        }, u));
        let m = null;
        d && c && (m = c.useDroppableItem({
            target: {
                type: "item",
                key: t.key,
                dropPosition: "on"
            }
        }, d, n));
        let y = t.props,
            x = u && u.isDragging(t.key),
            w = R({
                ...y,
                id: void 0,
                children: t.rendered,
                defaultClassName: "react-aria-Item",
                values: {
                    ...h,
                    isHovered: g,
                    selectionMode: s.selectionManager.selectionMode,
                    selectionBehavior: s.selectionManager.selectionBehavior,
                    allowsDragging: !!u,
                    isDragging: x,
                    isDropTarget: null == m ? void 0 : m.isDropTarget
                }
            }),
            S = (null == c ? void 0 : c.renderDropIndicator) || (e => o.createElement(eo, {
                target: e
            }));
        return (0, o.useEffect)(() => {
            !t.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
        }, [t.textValue]), o.createElement(o.Fragment, null, (null == c ? void 0 : c.useDropIndicator) && S({
            type: "item",
            key: t.key,
            dropPosition: "before"
        }), o.createElement("div", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(y), l, v, null == b ? void 0 : b.dragProps, null == m ? void 0 : m.dropProps),
            ...w,
            ref: n,
            "data-hovered": g || void 0,
            "data-focused": h.isFocused || void 0,
            "data-focus-visible": h.isFocusVisible || void 0,
            "data-pressed": h.isPressed || void 0,
            "data-dragging": x || void 0,
            "data-drop-target": (null == m ? void 0 : m.isDropTarget) || void 0
        }, o.createElement(A, {
            values: [
                [q, {
                    slots: {
                        label: f,
                        description: p
                    }
                }]
            ]
        }, w.children)), (null == c ? void 0 : c.useDropIndicator) && null == s.collection.getKeyAfter(t.key) && S({
            type: "item",
            key: t.key,
            dropPosition: "after"
        }))
    }

    function eg(e, t) {
        t = (0, i.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, o.useContext)(el), {
            dropIndicatorProps: s,
            isHidden: a,
            isDropTarget: c
        } = n.useDropIndicator(e, r, t);
        return a ? null : o.createElement(eb, {
            ...e,
            dropIndicatorProps: s,
            isDropTarget: c,
            ref: t
        })
    }
    let eb = (0, o.forwardRef)(function(e, t) {
            let {
                dropIndicatorProps: n,
                isDropTarget: r,
                ...i
            } = e, s = R({
                ...i,
                defaultClassName: "react-aria-DropIndicator",
                values: {
                    isDropTarget: r
                }
            });
            return o.createElement("div", {
                ...n,
                ...s,
                role: "option",
                ref: t,
                "data-drop-target": r || void 0
            })
        }),
        em = (0, o.createContext)(null),
        ey = (0, o.createContext)(null);

    function ex(e) {
        var t;
        let {
            state: n,
            isExiting: s,
            ...a
        } = e, {
            popoverProps: c,
            underlayProps: u,
            arrowProps: d,
            placement: l
        } = (0, r.usePopover)({
            ...a,
            offset: null !== (t = a.offset) && void 0 !== t ? t : 8
        }, n), f = a.popoverRef, p = j(f, !!l), h = R({
            ...a,
            defaultClassName: "react-aria-Popover",
            values: {
                placement: l,
                isEntering: p,
                isExiting: s
            }
        }), v = {
            ...h.style,
            ...c.style
        };
        return o.createElement(r.Overlay, null, !a.isNonModal && o.createElement("div", {
            ...u,
            style: {
                position: "fixed",
                inset: 0
            }
        }), o.createElement("div", {
            ...(0, i.mergeProps)((0, i.filterDOMProps)(a), c),
            ...h,
            ref: f,
            slot: a.slot,
            style: v,
            "data-placement": l,
            "data-entering": p || void 0,
            "data-exiting": s || void 0
        }, !a.isNonModal && o.createElement(r.DismissButton, {
            onDismiss: n.close
        }), o.createElement(em.Provider, {
            value: {
                arrowProps: d,
                placement: l
            }
        }, h.children), o.createElement(r.DismissButton, {
            onDismiss: n.close
        })))
    }
    let ew = (0, o.createContext)(null),
        eS = (0, o.createContext)(null),
        ek = (0, o.createContext)(null),
        eE = (0, o.createContext)(null),
        e_ = (0, o.createContext)(null),
        eM = (0, o.createContext)(null),
        eD = (0, o.createContext)(null),
        eC = (0, o.forwardRef)((e, t) => {
            var n;
            let r = (0, o.useContext)(eM),
                s = null !== (n = null == r ? void 0 : r.state) && void 0 !== n ? n : (0, d.useOverlayTriggerState)(e),
                a = (0, i.useObjectRef)(t),
                c = (0, o.useRef)(null),
                u = L(a, s.isOpen),
                l = L(c, s.isOpen),
                f = u || l;
            return s.isOpen || f ? o.createElement(eP, {
                ...e,
                state: s,
                isExiting: f,
                overlayRef: a,
                modalRef: c
            }) : null
        });

    function eP(e) {
        let t = e.modalRef,
            {
                state: n
            } = e,
            {
                modalProps: s,
                underlayProps: a
            } = (0, r.useModalOverlay)(e, n, t),
            c = j(e.overlayRef),
            u = R({
                ...e,
                defaultClassName: "react-aria-ModalOverlay",
                values: {
                    isEntering: c,
                    isExiting: e.isExiting
                }
            }),
            d = (0, i.useViewportSize)(),
            l = {
                ...u.style,
                "--visual-viewport-height": d.height + "px"
            };
        return o.createElement(r.Overlay, null, o.createElement("div", {
            ...(0, i.mergeProps)((0, i.filterDOMProps)(e), a),
            ...u,
            style: l,
            ref: e.overlayRef,
            "data-entering": c || void 0,
            "data-exiting": e.isExiting || void 0
        }, o.createElement(eD.Provider, {
            value: {
                modalProps: s,
                modalRef: t,
                state: n,
                isExiting: e.isExiting,
                isDismissable: e.isDismissable
            }
        }, u.children)))
    }

    function eT(e) {
        let {
            modalProps: t,
            modalRef: n,
            isExiting: s,
            isDismissable: a,
            state: c
        } = (0, o.useContext)(eD), u = (0, o.useMemo)(() => (0, i.mergeRefs)(e.modalRef, n), [e.modalRef, n]), d = (0, i.useObjectRef)(u), l = j(d), f = R({
            ...e,
            defaultClassName: "react-aria-Modal",
            values: {
                isEntering: l,
                isExiting: s
            }
        });
        return o.createElement("div", {
            ...(0, i.mergeProps)((0, i.filterDOMProps)(e), t),
            ...f,
            ref: d,
            "data-entering": l || void 0,
            "data-exiting": s || void 0
        }, a && o.createElement(r.DismissButton, {
            onDismiss: c.close
        }), f.children)
    }
    let eA = (0, o.createContext)(null),
        eR = (0, o.createContext)({}),
        eI = (0, o.createContext)(null),
        eO = (0, o.createContext)(null),
        ej = (0, o.createContext)(null),
        eL = (0, o.createContext)(null);

    function eN(e) {
        let {
            item: t
        } = e, {
            state: n,
            dragAndDropHooks: s,
            dragState: a,
            dropState: c
        } = (0, o.useContext)(eL), u = (0, i.useObjectRef)(t.props.ref), {
            rowProps: d,
            gridCellProps: l,
            descriptionProps: f,
            ...p
        } = (0, r.useGridListItem)({
            node: t,
            shouldSelectOnPressUp: !!a
        }, n, u), {
            hoverProps: h,
            isHovered: v
        } = (0, r.useHover)({
            isDisabled: !p.allowsSelection && !p.hasAction
        }), {
            isFocusVisible: g,
            focusProps: b
        } = (0, r.useFocusRing)(), {
            checkboxProps: m
        } = (0, r.useGridListSelectionCheckbox)({
            key: t.key
        }, n), y = null;
        a && s && (y = s.useDraggableItem({
            key: t.key,
            hasDragButton: !0
        }, a));
        let x = null,
            w = (0, o.useRef)(null),
            {
                visuallyHiddenProps: S
            } = (0, r.useVisuallyHidden)();
        c && s && (x = s.useDropIndicator({
            target: {
                type: "item",
                key: t.key,
                dropPosition: "on"
            }
        }, c, w));
        let k = t.props,
            E = a && a.isDragging(t.key),
            _ = R({
                ...k,
                id: void 0,
                children: t.rendered,
                defaultClassName: "react-aria-Item",
                values: {
                    ...p,
                    isHovered: v,
                    isFocusVisible: g,
                    selectionMode: n.selectionManager.selectionMode,
                    selectionBehavior: n.selectionManager.selectionBehavior,
                    allowsDragging: !!a,
                    isDragging: E,
                    isDropTarget: null == x ? void 0 : x.isDropTarget
                }
            }),
            M = (null == s ? void 0 : s.renderDropIndicator) || (e => o.createElement(eo, {
                target: e
            })),
            D = (0, o.useRef)(null);
        return (0, o.useEffect)(() => {
            a && !D.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
        }, []), (0, o.useEffect)(() => {
            !t.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
        }, [t.textValue]), o.createElement(o.Fragment, null, (null == s ? void 0 : s.useDropIndicator) && M({
            type: "item",
            key: t.key,
            dropPosition: "before"
        }), x && !x.isHidden && o.createElement("div", {
            role: "row",
            style: {
                position: "absolute"
            }
        }, o.createElement("div", {
            role: "gridcell"
        }, o.createElement("div", {
            role: "button",
            ...S,
            ...null == x ? void 0 : x.dropIndicatorProps,
            ref: w
        }))), o.createElement("div", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(k), d, b, h, null == y ? void 0 : y.dragProps),
            ..._,
            ref: u,
            "data-hovered": v || void 0,
            "data-focused": p.isFocused || void 0,
            "data-focus-visible": g || void 0,
            "data-pressed": p.isPressed || void 0,
            "data-dragging": E || void 0,
            "data-drop-target": (null == x ? void 0 : x.isDropTarget) || void 0
        }, o.createElement("div", l, o.createElement(A, {
            values: [
                [en, m],
                [H, {
                    slots: {
                        [T]: {},
                        drag: {
                            ...null == y ? void 0 : y.dragButtonProps,
                            ref: D,
                            style: {
                                pointerEvents: "none"
                            }
                        }
                    }
                }],
                [q, {
                    slots: {
                        description: f
                    }
                }]
            ]
        }, _.children))), (null == s ? void 0 : s.useDropIndicator) && null == n.collection.getKeyAfter(t.key) && M({
            type: "item",
            key: t.key,
            dropPosition: "after"
        }))
    }

    function eF(e, t) {
        t = (0, i.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, o.useContext)(eL), s = (0, o.useRef)(null), {
            dropIndicatorProps: a,
            isHidden: c,
            isDropTarget: u
        } = n.useDropIndicator(e, r, s);
        return c ? null : o.createElement(eB, {
            ...e,
            dropIndicatorProps: a,
            isDropTarget: u,
            buttonRef: s,
            ref: t
        })
    }
    let eB = (0, o.forwardRef)(function(e, t) {
        let {
            dropIndicatorProps: n,
            isDropTarget: i,
            buttonRef: s,
            ...a
        } = e, {
            visuallyHiddenProps: c
        } = (0, r.useVisuallyHidden)(), u = R({
            ...a,
            defaultClassName: "react-aria-DropIndicator",
            values: {
                isDropTarget: i
            }
        });
        return o.createElement("div", {
            ...u,
            role: "row",
            ref: t,
            "data-drop-target": i || void 0
        }, o.createElement("div", {
            role: "gridcell"
        }, o.createElement("div", {
            ...c,
            role: "button",
            ...n,
            ref: s
        })))
    });

    function ez() {
        let {
            dragAndDropHooks: e,
            dropState: t
        } = (0, o.useContext)(eL), n = (0, o.useRef)(null), {
            dropIndicatorProps: i
        } = e.useDropIndicator({
            target: {
                type: "root"
            }
        }, t, n), s = t.isDropTarget({
            type: "root"
        }), {
            visuallyHiddenProps: a
        } = (0, r.useVisuallyHidden)();
        return !s && i["aria-hidden"] ? null : o.createElement("div", {
            role: "row",
            "aria-hidden": i["aria-hidden"],
            style: {
                position: "absolute"
            }
        }, o.createElement("div", {
            role: "gridcell"
        }, o.createElement("div", {
            role: "button",
            ...a,
            ...i,
            ref: n
        })))
    }
    let eK = (0, o.createContext)({}),
        eV = (0, o.createContext)(null),
        eU = (0, o.createContext)(null);

    function eH(e) {
        var t;
        let {
            props: n,
            collection: s,
            menuRef: a
        } = e, c = (0, d.useTreeState)({
            ...n,
            collection: s,
            children: void 0
        }), {
            menuProps: u
        } = (0, r.useMenu)(n, c, a), l = x({
            items: c.collection,
            children: e => {
                switch (e.type) {
                    case "section":
                        return o.createElement(eq, {
                            section: e
                        });
                    case "separator":
                        return o.createElement(eu, e.props);
                    case "item":
                        return o.createElement(eG, {
                            item: e
                        });
                    default:
                        throw Error("Unsupported node type in Menu: " + e.type)
                }
            }
        });
        return o.createElement("div", {
            ...(0, i.filterDOMProps)(n),
            ...u,
            ref: a,
            slot: n.slot,
            style: n.style,
            className: null !== (t = n.className) && void 0 !== t ? t : "react-aria-Menu"
        }, o.createElement(A, {
            values: [
                [eU, c],
                [ec, {
                    elementType: "div"
                }]
            ]
        }, l))
    }

    function eq(e) {
        var t, n, s;
        let {
            section: a,
            className: c,
            style: u,
            ...d
        } = e, l = (0, o.useContext)(eU), [f, p] = O(), {
            headingProps: h,
            groupProps: v
        } = (0, r.useMenuSection)({
            heading: p,
            "aria-label": null !== (s = a["aria-label"]) && void 0 !== s ? s : void 0
        }), g = x({
            items: l.collection.getChildren(a.key),
            children: e => {
                switch (e.type) {
                    case "header": {
                        let {
                            ref: t,
                            ...n
                        } = e.props;
                        return o.createElement(ea, {
                            ...h,
                            ...n,
                            ref: (0, i.mergeRefs)(f, t)
                        }, e.rendered)
                    }
                    case "item":
                        return o.createElement(eG, {
                            item: e
                        });
                    default:
                        throw Error("Unsupported element type in Section: " + e.type)
                }
            }
        });
        return o.createElement("section", {
            ...(0, i.filterDOMProps)(d),
            ...v,
            className: c || (null === (t = a.props) || void 0 === t ? void 0 : t.className) || "react-aria-Section",
            style: u || (null === (n = a.props) || void 0 === n ? void 0 : n.style),
            ref: a.props.ref
        }, g)
    }

    function eG(e) {
        let {
            item: t
        } = e, n = (0, o.useContext)(eU), s = (0, i.useObjectRef)(t.props.ref), {
            menuItemProps: a,
            labelProps: c,
            descriptionProps: u,
            keyboardShortcutProps: d,
            ...l
        } = (0, r.useMenuItem)({
            key: t.key
        }, n, s), f = t.props, {
            isFocusVisible: p,
            focusProps: h
        } = (0, r.useFocusRing)(), v = R({
            ...f,
            id: void 0,
            children: t.rendered,
            defaultClassName: "react-aria-Item",
            values: {
                ...l,
                isHovered: l.isFocused,
                isFocusVisible: p,
                selectionMode: n.selectionManager.selectionMode,
                selectionBehavior: n.selectionManager.selectionBehavior
            }
        }), g = (0, i.filterDOMProps)(f);
        return delete g.id, o.createElement("div", {
            ...(0, r.mergeProps)(g, a, h),
            ...v,
            ref: s,
            "data-hovered": l.isFocused || void 0,
            "data-focused": l.isFocused || void 0,
            "data-focus-visible": p || void 0,
            "data-pressed": l.isPressed || void 0
        }, o.createElement(A, {
            values: [
                [q, {
                    slots: {
                        label: c,
                        description: u
                    }
                }],
                [eK, d]
            ]
        }, v.children))
    }
    let eW = (0, o.createContext)(null),
        eZ = (0, o.createContext)(null),
        eY = (0, o.createContext)(null),
        eX = (0, o.createContext)(null),
        eJ = (0, o.createContext)(null),
        e$ = (0, o.createContext)(null),
        eQ = (0, o.createContext)(null),
        e0 = (0, o.createContext)(null),
        e1 = (0, o.createContext)(null),
        e2 = (0, o.createContext)(null),
        e3 = (0, o.createContext)(null),
        e8 = Symbol.iterator;
    class e6 extends m {
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
            if (this.headerRows = (0, l.buildHeaderRows)(e, this.columns), this.columnsDirty = !1, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
        }
        get columnCount() {
            return this.columns.length
        }
        get rows() {
            return [...this.getChildren(this.body.key)]
        }*[e8]() {
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
            super(...e), (0, s.default)(this, "headerRows", []), (0, s.default)(this, "columns", []), (0, s.default)(this, "rowHeaderColumnKeys", new Set), (0, s.default)(this, "head", new f("tableheader", -1)), (0, s.default)(this, "body", new f("tablebody", -2)), (0, s.default)(this, "columnsDirty", !0)
        }
    }
    let e4 = (0, o.createContext)(null),
        e5 = (0, o.createContext)(null),
        e7 = (0, o.forwardRef)(function(e, t) {
            let n, s, a;
            [e, t] = I(e, t, e4);
            let {
                portal: c,
                collection: u
            } = k(e, (0, o.useMemo)(() => new e6, [])), l = (0, d.useTableState)({
                ...e,
                collection: u,
                children: void 0
            }), {
                gridProps: f
            } = (0, r.useTable)(e, l, t), {
                dragAndDropHooks: p
            } = e, h = l.selectionManager, v = !!(null == p ? void 0 : p.useDraggableCollectionState), g = !!(null == p ? void 0 : p.useDroppableCollectionState), b = (0, o.useRef)(v), m = (0, o.useRef)(g);
            b.current !== v && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), m.current !== g && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
            let y = !1,
                x = null,
                w = (0, o.useRef)(null);
            if (v && p) {
                n = p.useDraggableCollectionState({
                    collection: u,
                    selectionManager: h,
                    preview: p.renderDragPreview ? w : void 0
                }), p.useDraggableCollection({}, n, t);
                let e = p.DragPreview;
                x = p.renderDragPreview ? o.createElement(e, {
                    ref: w
                }, p.renderDragPreview) : null
            }
            if (g && p) {
                s = p.useDroppableCollectionState({
                    collection: u,
                    selectionManager: h
                });
                let e = new r.ListKeyboardDelegate(u, "selection" === h.disabledBehavior ? new Set : h.disabledKeys, t),
                    n = p.dropTargetDelegate || new p.ListDropTargetDelegate(u, t);
                a = p.useDroppableCollection({
                    keyboardDelegate: e,
                    dropTargetDelegate: n
                }, s, t), y = s.isDropTarget({
                    type: "root"
                })
            }
            let {
                focusProps: S,
                isFocused: E,
                isFocusVisible: _
            } = (0, r.useFocusRing)(), M = R({
                className: e.className,
                style: e.style,
                defaultClassName: "react-aria-Table",
                values: {
                    isDropTarget: y,
                    isFocused: E,
                    isFocusVisible: _
                }
            }), {
                selectionBehavior: D,
                selectionMode: C,
                disallowEmptySelection: P
            } = l.selectionManager, T = (0, o.useMemo)(() => ({
                selectionBehavior: "none" === C ? null : D,
                selectionMode: C,
                disallowEmptySelection: P,
                allowsDragging: v
            }), [D, C, P, v]);
            return o.createElement(o.Fragment, null, o.createElement(A, {
                values: [
                    [e5, {
                        state: l,
                        dragAndDropHooks: p,
                        dragState: n,
                        dropState: s
                    }],
                    [ei, {
                        render: tl
                    }]
                ]
            }, o.createElement(r.FocusScope, null, o.createElement("table", {
                ...(0, i.filterDOMProps)(e),
                ...M,
                ...(0, r.mergeProps)(f, S, null == a ? void 0 : a.collectionProps),
                ref: t,
                slot: e.slot,
                "data-drop-target": y || void 0,
                "data-focused": E || void 0,
                "data-focus-visible": _ || void 0
            }, o.createElement(to, {
                collection: u
            }), o.createElement(ts, {
                collection: u,
                isDroppable: g
            }))), x), o.createElement(e9.Provider, {
                value: T
            }, c))
        }),
        e9 = (0, o.createContext)(null),
        te = (0, o.forwardRef)(function(e, t) {
            let n = w({
                    children: e.children,
                    items: e.columns
                }),
                r = "function" == typeof e.children ? e.children : null;
            return o.createElement(C.Provider, {
                value: r
            }, o.createElement("tableheader", {
                ref: _(e, t)
            }, n))
        }),
        tt = (0, o.forwardRef)(function(e, t) {
            var n;
            let r = (0, o.useContext)(C),
                i = "function" == typeof r ? r : e.children,
                s = w({
                    children: e.title || e.childColumns ? i : null,
                    items: e.childColumns
                });
            return o.createElement("column", {
                ref: _(e, t, null !== (n = e.title) && void 0 !== n ? n : e.children)
            }, s)
        }),
        tn = (0, o.forwardRef)(function(e, t) {
            let n = w(e);
            return o.createElement("tablebody", {
                ref: _(e, t)
            }, n)
        }),
        tr = (0, o.forwardRef)(function(e, t) {
            let n = w({
                    children: e.children,
                    items: e.columns,
                    idScope: e.id
                }),
                r = (0, o.useMemo)(() => ({
                    idScope: e.id
                }), [e.id]);
            return o.createElement("item", {
                ref: _(e, t)
            }, o.createElement(D.Provider, {
                value: r
            }, n))
        }),
        ti = (0, o.forwardRef)(function(e, t) {
            return o.createElement("cell", {
                ref: _(e, t, e.children)
            })
        });

    function to(e) {
        var t;
        let {
            collection: n
        } = e, s = x({
            items: n.headerRows,
            children: (0, o.useCallback)(e => {
                if ("headerrow" === e.type) return o.createElement(ta, {
                    item: e
                });
                throw Error("Unsupported node type in TableHeader: " + e.type)
            }, [])
        }), {
            rowGroupProps: a
        } = (0, r.useTableRowGroup)();
        return o.createElement("thead", {
            ...(0, i.filterDOMProps)(n.head.props),
            ...a,
            ref: n.head.props.ref,
            className: null !== (t = n.head.props.className) && void 0 !== t ? t : "react-aria-TableHeader",
            style: n.head.props.style
        }, s)
    }

    function ts(e) {
        let t, {
                collection: n,
                isDroppable: s
            } = e,
            a = x({
                items: n.rows,
                children: (0, o.useCallback)(e => {
                    if ("item" === e.type) return o.createElement(tu, {
                        item: e
                    });
                    throw Error("Unsupported node type in TableBody: " + e.type)
                }, [])
            }),
            c = n.body.props,
            u = R({
                ...c,
                id: void 0,
                children: void 0,
                defaultClassName: "react-aria-TableBody",
                values: {
                    isEmpty: 0 === n.size
                }
            });
        0 === n.size && c.renderEmptyState && (t = o.createElement("tr", {
            role: "row"
        }, o.createElement("td", {
            role: "gridcell",
            colSpan: n.columnCount
        }, c.renderEmptyState())));
        let {
            rowGroupProps: d
        } = (0, r.useTableRowGroup)();
        return o.createElement("tbody", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(c), d),
            ...u,
            ref: n.body.props.ref,
            "data-empty": 0 === n.size || void 0
        }, s && o.createElement(tp, null), a, t)
    }

    function ta(e) {
        let {
            item: t
        } = e, n = (0, o.useRef)(null), {
            state: i
        } = (0, o.useContext)(e5), {
            rowProps: s
        } = (0, r.useTableHeaderRow)({
            node: t
        }, i, n), {
            checkboxProps: a
        } = (0, r.useTableSelectAllCheckbox)(i), c = x({
            items: i.collection.getChildren(t.key),
            children: e => {
                if ("column" === e.type) return o.createElement(tc, {
                    column: e
                });
                throw Error("Unsupported node type in Row: " + e.type)
            }
        });
        return o.createElement("tr", {
            ...s,
            ref: n
        }, o.createElement(A, {
            values: [
                [en, {
                    slots: {
                        selection: a
                    }
                }]
            ]
        }, c))
    }

    function tc(e) {
        var t;
        let {
            column: n
        } = e, s = (0, i.useObjectRef)(n.props.ref), {
            state: a
        } = (0, o.useContext)(e5), {
            columnHeaderProps: c
        } = (0, r.useTableColumnHeader)({
            node: n
        }, a, s), {
            isFocused: u,
            isFocusVisible: d,
            focusProps: l
        } = (0, r.useFocusRing)(), f = n.props, p = R({
            ...f,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Column",
            values: {
                isFocused: u,
                isFocusVisible: d,
                allowsSorting: n.props.allowsSorting,
                sortDirection: (null === (t = a.sortDescriptor) || void 0 === t ? void 0 : t.column) === n.key ? a.sortDescriptor.direction : void 0
            }
        });
        return o.createElement("th", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(f), c, l),
            ...p,
            colSpan: n.colspan,
            ref: s,
            "data-focused": u || void 0,
            "data-focus-visible": d || void 0
        }, p.children)
    }

    function tu(e) {
        let t, n, {
                item: s
            } = e,
            a = (0, i.useObjectRef)(s.props.ref),
            {
                state: c,
                dragAndDropHooks: u,
                dragState: d,
                dropState: l
            } = (0, o.useContext)(e5),
            {
                rowProps: f,
                ...p
            } = (0, r.useTableRow)({
                node: s,
                shouldSelectOnPressUp: !!d
            }, c, a),
            {
                isFocused: h,
                isFocusVisible: v,
                focusProps: g
            } = (0, r.useFocusRing)(),
            {
                hoverProps: b,
                isHovered: m
            } = (0, r.useHover)({
                isDisabled: !p.allowsSelection && !p.hasAction
            }),
            {
                checkboxProps: y
            } = (0, r.useTableSelectionCheckbox)({
                key: s.key
            }, c);
        d && u && (t = u.useDraggableItem({
            key: s.key,
            hasDragButton: !0
        }, d));
        let w = (0, o.useRef)(null),
            {
                visuallyHiddenProps: S
            } = (0, r.useVisuallyHidden)();
        l && u && (n = u.useDropIndicator({
            target: {
                type: "item",
                key: s.key,
                dropPosition: "on"
            }
        }, l, w));
        let k = (null == u ? void 0 : u.renderDropIndicator) || (e => o.createElement(eo, {
                target: e
            })),
            E = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
            d && !E.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
        }, []);
        let _ = s.props,
            M = d && d.isDragging(s.key),
            D = R({
                ..._,
                id: void 0,
                defaultClassName: "react-aria-Row",
                values: {
                    ...p,
                    isHovered: m,
                    isFocused: h,
                    isFocusVisible: v,
                    selectionMode: c.selectionManager.selectionMode,
                    selectionBehavior: c.selectionManager.selectionBehavior,
                    isDragging: M,
                    isDropTarget: null == n ? void 0 : n.isDropTarget
                }
            }),
            C = x({
                items: c.collection.getChildren(s.key),
                children: e => {
                    if ("cell" === e.type) return o.createElement(td, {
                        cell: e
                    });
                    throw Error("Unsupported node type in Row: " + e.type)
                }
            });
        return o.createElement(o.Fragment, null, (null == u ? void 0 : u.useDropIndicator) && k({
            type: "item",
            key: s.key,
            dropPosition: "before"
        }), n && !n.isHidden && o.createElement("tr", {
            role: "row",
            style: {
                height: 0
            }
        }, o.createElement("td", {
            role: "gridcell",
            colSpan: c.collection.columnCount,
            style: {
                padding: 0
            }
        }, o.createElement("div", {
            role: "button",
            ...S,
            ...n.dropIndicatorProps,
            ref: w
        }))), o.createElement("tr", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(_), f, g, b, null == t ? void 0 : t.dragProps),
            ...D,
            ref: a,
            "data-hovered": m || void 0,
            "data-focused": p.isFocused || void 0,
            "data-focus-visible": v || void 0,
            "data-pressed": p.isPressed || void 0,
            "data-dragging": M || void 0,
            "data-drop-target": (null == n ? void 0 : n.isDropTarget) || void 0
        }, o.createElement(A, {
            values: [
                [en, {
                    slots: {
                        selection: y
                    }
                }],
                [H, {
                    slots: {
                        [T]: {},
                        drag: {
                            ...null == t ? void 0 : t.dragButtonProps,
                            ref: E,
                            style: {
                                pointerEvents: "none"
                            }
                        }
                    }
                }]
            ]
        }, C)), (null == u ? void 0 : u.useDropIndicator) && null == c.collection.getKeyAfter(s.key) && k({
            type: "item",
            key: s.key,
            dropPosition: "after"
        }))
    }

    function td(e) {
        let {
            cell: t
        } = e, n = (0, i.useObjectRef)(t.props.ref), {
            state: s,
            dragState: a
        } = (0, o.useContext)(e5);
        t.column = s.collection.columns[t.index];
        let {
            gridCellProps: c,
            isPressed: u
        } = (0, r.useTableCell)({
            node: t,
            shouldSelectOnPressUp: !!a
        }, s, n), {
            isFocused: d,
            isFocusVisible: l,
            focusProps: f
        } = (0, r.useFocusRing)(), p = t.props, h = R({
            ...p,
            id: void 0,
            defaultClassName: "react-aria-Cell",
            values: {
                isFocused: d,
                isFocusVisible: l,
                isPressed: u
            }
        });
        return o.createElement("td", {
            ...(0, r.mergeProps)((0, i.filterDOMProps)(p), c, f),
            ...h,
            ref: n,
            "data-focused": d || void 0,
            "data-focus-visible": l || void 0,
            "data-pressed": u || void 0
        }, h.children)
    }

    function tl(e, t) {
        t = (0, i.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, o.useContext)(e5), s = (0, o.useRef)(null), {
            dropIndicatorProps: a,
            isHidden: c,
            isDropTarget: u
        } = n.useDropIndicator(e, r, s);
        return c ? null : o.createElement(tf, {
            ...e,
            dropIndicatorProps: a,
            isDropTarget: u,
            buttonRef: s,
            ref: t
        })
    }
    let tf = (0, o.forwardRef)(function(e, t) {
        let {
            dropIndicatorProps: n,
            isDropTarget: s,
            buttonRef: a,
            ...c
        } = e, {
            state: u
        } = (0, o.useContext)(e5), {
            visuallyHiddenProps: d
        } = (0, r.useVisuallyHidden)(), l = R({
            ...c,
            defaultClassName: "react-aria-DropIndicator",
            values: {
                isDropTarget: s
            }
        });
        return o.createElement("tr", {
            ...(0, i.filterDOMProps)(e),
            ...l,
            role: "row",
            ref: t,
            "data-drop-target": s || void 0
        }, o.createElement("td", {
            role: "gridcell",
            colSpan: u.collection.columnCount,
            style: {
                padding: 0
            }
        }, o.createElement("div", {
            ...d,
            role: "button",
            ...n,
            ref: a
        })))
    });

    function tp() {
        let {
            state: e,
            dragAndDropHooks: t,
            dropState: n
        } = (0, o.useContext)(e5), i = (0, o.useRef)(null), {
            dropIndicatorProps: s
        } = t.useDropIndicator({
            target: {
                type: "root"
            }
        }, n, i), a = n.isDropTarget({
            type: "root"
        }), {
            visuallyHiddenProps: c
        } = (0, r.useVisuallyHidden)();
        return !a && s["aria-hidden"] ? null : o.createElement("tr", {
            role: "row",
            "aria-hidden": s["aria-hidden"],
            style: {
                height: 0
            }
        }, o.createElement("td", {
            role: "gridcell",
            colSpan: e.collection.columnCount,
            style: {
                padding: 0
            }
        }, o.createElement("div", {
            role: "button",
            ...c,
            ...s,
            ref: i
        })))
    }
    let th = (0, o.createContext)(null),
        tv = (0, o.createContext)(null);

    function tg(e) {
        let {
            item: t,
            state: n
        } = e, {
            key: s
        } = t, a = (0, i.useObjectRef)(t.props.ref), {
            tabProps: c,
            isSelected: u,
            isDisabled: d,
            isPressed: l
        } = (0, r.useTab)({
            key: s
        }, n, a), {
            focusProps: f,
            isFocused: p,
            isFocusVisible: h
        } = (0, r.useFocusRing)(), {
            hoverProps: v,
            isHovered: g
        } = (0, r.useHover)({
            isDisabled: d
        }), b = R({
            ...t.props,
            children: t.rendered,
            defaultClassName: "react-aria-Tab",
            values: {
                isSelected: u,
                isDisabled: d,
                isFocused: p,
                isFocusVisible: h,
                isPressed: l,
                isHovered: g
            }
        }), m = (0, i.filterDOMProps)(t.props);
        return delete m.id, o.createElement("div", {
            ...(0, r.mergeProps)(m, c, f, v, b),
            ref: a,
            "data-focus-visible": h || void 0,
            "data-pressed": l || void 0,
            "data-hovered": g || void 0
        })
    }
    let tb = (0, o.createContext)(null),
        tm = (0, o.createContext)({}),
        ty = (0, o.createContext)(null);

    function tx(e) {
        let {
            state: t,
            triggerRef: n,
            tooltipProps: s
        } = (0, o.useContext)(ty), a = (0, o.useRef)(null), {
            overlayProps: c,
            arrowProps: u,
            placement: d
        } = (0, r.useOverlayPosition)({
            placement: e.placement || "top",
            targetRef: n,
            overlayRef: a,
            offset: e.offset,
            crossOffset: e.crossOffset,
            isOpen: t.isOpen
        }), l = j(a, !!d), f = R({
            ...e,
            defaultClassName: "react-aria-Tooltip",
            values: {
                placement: d,
                isEntering: l,
                isExiting: e.isExiting
            }
        });
        e = (0, r.mergeProps)(e, c);
        let {
            tooltipProps: p
        } = (0, r.useTooltip)(e, t);
        return o.createElement("div", {
            ...(0, r.mergeProps)(s, p),
            ref: (0, i.mergeRefs)(a, e.tooltipRef),
            ...f,
            style: {
                ...f.style,
                ...c.style
            },
            "data-placement": d,
            "data-entering": l || void 0,
            "data-exiting": e.isExiting || void 0
        }, o.createElement(em.Provider, {
            value: {
                arrowProps: u,
                placement: d
            }
        }, f.children))
    }
}