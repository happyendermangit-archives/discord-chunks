function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        compareNodeOrder: function() {
            return f
        },
        getChildNodes: function() {
            return u
        },
        getFirstItem: function() {
            return c
        },
        getItemCount: function() {
            return m
        },
        getLastItem: function() {
            return d
        },
        getNthItem: function() {
            return l
        },
        useCollection: function() {
            return s
        }
    });
    var r = n("470079");
    class i {
        build(e, t) {
            return this.context = t, a(() => this.iterateCollection(e))
        }* iterateCollection(e) {
            let {
                children: t,
                items: n
            } = e;
            if ("function" == typeof t) {
                if (!n) throw Error("props.children was a function but props.items is missing");
                for (let n of e.items) yield* this.getFullNode({
                    value: n
                }, {
                    renderer: t
                })
            } else {
                let e = [];
                r.Children.forEach(t, t => {
                    e.push(t)
                });
                let n = 0;
                for (let t of e)
                    for (let e of this.getFullNode({
                            element: t,
                            index: n
                        }, {})) n++, yield e
            }
        }
        getKey(e, t, n, r) {
            if (null != e.key) return e.key;
            if ("cell" === t.type && null != t.key) return `${r}${t.key}`;
            let i = t.value;
            if (null != i) {
                var a;
                let e = null !== (a = i.key) && void 0 !== a ? a : i.id;
                if (null == e) throw Error("No key found for item");
                return e
            }
            return r ? `${r}.${t.index}` : `$.${t.index}`
        }
        getChildState(e, t) {
            return {
                renderer: t.renderer || e.renderer
            }
        }* getFullNode(e, t, n, i) {
            let s = e.element;
            if (!s && e.value && t && t.renderer) {
                let n = this.cache.get(e.value);
                if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
                    n.index = e.index, n.parentKey = i ? i.key : null, yield n;
                    return
                }
                s = t.renderer(e.value)
            }
            if (r.isValidElement(s)) {
                let r = s.type;
                if ("function" != typeof r && "function" != typeof r.getCollectionNode) {
                    let e = "function" == typeof s.type ? s.type.name : s.type;
                    throw Error(`Unknown element <${e}> in collection.`)
                }
                let a = r.getCollectionNode(s.props, this.context),
                    u = e.index,
                    c = a.next();
                for (; !c.done && c.value;) {
                    let r = c.value;
                    e.index = u;
                    let l = r.key;
                    !l && (l = r.element ? null : this.getKey(s, e, t, n));
                    let d = [...this.getFullNode({
                        ...r,
                        key: l,
                        index: u,
                        wrapper: function(e, t) {
                            return e && t ? n => e(t(n)) : e ? e : t ? t : void 0
                        }(e.wrapper, r.wrapper)
                    }, this.getChildState(t, r), n ? `${n}${s.key}` : s.key, i)];
                    for (let t of d) {
                        if (t.value = r.value || e.value, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error(`Unsupported type <${o(t.type)}> in <${o(i.type)}>. Only <${o(e.type)}> is supported.`);
                        u++, yield t
                    }
                    c = a.next(d)
                }
                return
            }
            if (null == e.key) return;
            let u = this,
                c = {
                    type: e.type,
                    props: e.props,
                    key: e.key,
                    parentKey: i ? i.key : null,
                    value: e.value,
                    level: i ? i.level + 1 : 0,
                    index: e.index,
                    rendered: e.rendered,
                    textValue: e.textValue,
                    "aria-label": e["aria-label"],
                    wrapper: e.wrapper,
                    shouldInvalidate: e.shouldInvalidate,
                    hasChildNodes: e.hasChildNodes,
                    childNodes: a(function*() {
                        if (!e.hasChildNodes) return;
                        let n = 0;
                        for (let r of e.childNodes())
                            for (let e of (null != r.key && (r.key = `${c.key}${r.key}`), r.index = n, u.getFullNode(r, u.getChildState(t, r), c.key, c))) n++, yield e
                    })
                };
            yield c
        }
        constructor() {
            this.cache = new WeakMap
        }
    }

    function a(e) {
        let t = [],
            n = null;
        return {
            *[Symbol.iterator]() {
                for (let e of t) yield e;
                for (let r of (!n && (n = e()), n)) t.push(r), yield r
            }
        }
    }

    function o(e) {
        return e[0].toUpperCase() + e.slice(1)
    }

    function s(e, t, n) {
        let a = (0, r.useMemo)(() => new i, []),
            {
                children: o,
                items: s,
                collection: u
            } = e;
        return (0, r.useMemo)(() => u ? u : t(a.build({
            children: o,
            items: s
        }, n)), [a, o, s, u, n, t])
    }

    function u(e, t) {
        return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes
    }

    function c(e) {
        return l(e, 0)
    }

    function l(e, t) {
        if (t < 0) return;
        let n = 0;
        for (let r of e) {
            if (n === t) return r;
            n++
        }
    }

    function d(e) {
        let t;
        for (let n of e) t = n;
        return t
    }

    function f(e, t, n) {
        if (t.parentKey === n.parentKey) return t.index - n.index;
        let r = [...p(e, t), t],
            i = [...p(e, n), n],
            a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
        return -1 !== a ? (t = r[a], n = i[a], t.index - n.index) : r.findIndex(e => e === n) >= 0 ? 1 : (i.findIndex(e => e === t), -1)
    }

    function p(e, t) {
        let n = [];
        for (;
            (null == t ? void 0 : t.parentKey) != null;) t = e.getItem(t.parentKey), n.unshift(t);
        return n
    }
    let h = new WeakMap;

    function m(e) {
        let t = h.get(e);
        if (null != t) return t;
        t = 0;
        let n = r => {
            for (let i of r) "section" === i.type ? n(u(i, e)) : t++
        };
        return n(e), h.set(e, t), t
    }
}