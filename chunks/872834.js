function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCollection: function() {
            return a
        },
        getFirstItem: function() {
            return c
        },
        getLastItem: function() {
            return u
        }
    }), n("222007"), n("424973"), n("70102"), n("843762");
    var r = n("884691");
    class i {
        build(e, t) {
            return this.context = t, o(() => this.iterateCollection(e))
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
            if ("cell" === t.type && null != t.key) return "".concat(r).concat(t.key);
            let i = t.value;
            if (null != i) {
                var o;
                let e = null !== (o = i.key) && void 0 !== o ? o : i.id;
                if (null == e) throw Error("No key found for item");
                return e
            }
            return r ? "".concat(r, ".").concat(t.index) : "$.".concat(t.index)
        }
        getChildState(e, t) {
            return {
                renderer: t.renderer || e.renderer
            }
        }* getFullNode(e, t, n, i) {
            let a = e.element;
            if (!a && e.value && t && t.renderer) {
                let n = this.cache.get(e.value);
                if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
                    n.index = e.index, n.parentKey = i ? i.key : null, yield n;
                    return
                }
                a = t.renderer(e.value)
            }
            if (r.isValidElement(a)) {
                let r = a.type;
                if ("function" != typeof r && "function" != typeof r.getCollectionNode) {
                    let e = "function" == typeof a.type ? a.type.name : a.type;
                    throw Error("Unknown element <".concat(e, "> in collection."))
                }
                let o = r.getCollectionNode(a.props, this.context),
                    c = e.index,
                    u = o.next();
                for (; !u.done && u.value;) {
                    let r = u.value;
                    e.index = c;
                    let d = r.key;
                    !d && (d = r.element ? null : this.getKey(a, e, t, n));
                    let l = [...this.getFullNode({
                        ...r,
                        key: d,
                        index: c,
                        wrapper: function(e, t) {
                            return e && t ? n => e(t(n)) : e ? e : t ? t : void 0
                        }(e.wrapper, r.wrapper)
                    }, this.getChildState(t, r), n ? "".concat(n).concat(a.key) : a.key, i)];
                    for (let t of l) {
                        if (t.value = r.value || e.value, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error("Unsupported type <".concat(s(t.type), "> in <").concat(s(i.type), ">. Only <").concat(s(e.type), "> is supported."));
                        c++, yield t
                    }
                    u = o.next(l)
                }
                return
            }
            if (null == e.key) return;
            let c = this,
                u = {
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
                    childNodes: o(function*() {
                        if (!e.hasChildNodes) return;
                        let n = 0;
                        for (let r of e.childNodes())
                            for (let e of (null != r.key && (r.key = "".concat(u.key).concat(r.key)), r.index = n, c.getFullNode(r, c.getChildState(t, r), u.key, u))) n++, yield e
                    })
                };
            yield u
        }
        constructor() {
            this.cache = new WeakMap
        }
    }

    function o(e) {
        let t = [],
            n = null;
        return {
            *[Symbol.iterator]() {
                for (let e of t) yield e;
                for (let r of (!n && (n = e()), n)) t.push(r), yield r
            }
        }
    }

    function s(e) {
        return e[0].toUpperCase() + e.slice(1)
    }

    function a(e, t, n) {
        let o = (0, r.useMemo)(() => new i, []),
            {
                children: s,
                items: a,
                collection: c
            } = e;
        return (0, r.useMemo)(() => c ? c : t(o.build({
            children: s,
            items: a
        }, n)), [o, s, a, c, n, t])
    }

    function c(e) {
        return function(e, t) {
            if (t < 0) return;
            let n = 0;
            for (let r of e) {
                if (n === t) return r;
                n++
            }
        }(e, 0)
    }

    function u(e) {
        let t;
        for (let n of e) t = n;
        return t
    }
    new WeakMap
}