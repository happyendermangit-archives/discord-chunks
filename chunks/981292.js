function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TransitionGroup: function() {
            return u
        },
        TransitionStates: function() {
            return i
        }
    }), n("47120"), n("653041");
    var i, r, a = n("735250"),
        s = n("470079");
    (r = i || (i = {}))[r.MOUNTED = 0] = "MOUNTED", r[r.ENTERED = 1] = "ENTERED", r[r.YEETED = 2] = "YEETED";
    let o = {};

    function l(e) {
        return e
    }

    function u(e) {
        let {
            items: t,
            renderItem: n,
            getItemKey: i,
            wrapChildren: r = l,
            lazyCleanUpDelay: u
        } = e, d = s.useRef(-1);
        s.useLayoutEffect(() => () => clearTimeout(d.current));
        let [, _] = s.useState(o), c = s.useRef(null), E = s.useMemo(() => {
            var e;
            let r = new Set(null === (e = c.current) || void 0 === e ? void 0 : e.keys()),
                a = new Map(c.current);
            for (let e of t) {
                let t = i(e),
                    s = a.get(t);
                if (null == s) {
                    let i = null != c.current ? 1 : 0,
                        r = () => {
                            var e, n;
                            let i = null === (e = c.current) || void 0 === e ? void 0 : e.get(t);
                            null == i || (2 === i.state ? (null === (n = c.current) || void 0 === n || n.delete(t), null != u ? (clearTimeout(d.current), d.current = setTimeout(() => _({}), u)) : _({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)))
                        },
                        a = n(t, e, i, r);
                    s = {
                        item: e,
                        children: a,
                        state: i,
                        cleanUp: r,
                        renderItem: n
                    }
                } else if (s.item !== e || s.renderItem !== n || 2 === s.state) {
                    let {
                        cleanUp: i
                    } = s, r = 2 === s.state ? 1 : s.state, a = n(t, e, r, s.cleanUp);
                    s = {
                        item: e,
                        children: a,
                        state: r,
                        cleanUp: i,
                        renderItem: n
                    }
                }
                a.set(t, s), r.delete(t)
            }
            for (let e of r) {
                let t = a.get(e);
                if (null != t) {
                    if (2 !== t.state || t.renderItem !== n) {
                        let {
                            item: i,
                            cleanUp: r
                        } = t, s = n(e, t.item, 2, t.cleanUp);
                        null != (t = {
                            item: i,
                            children: s,
                            state: 2,
                            cleanUp: r,
                            renderItem: n
                        }).children ? a.set(e, t) : a.delete(e)
                    } else a.set(e, t)
                }
            }
            return a
        }, [t, i, n, u]);
        s.useInsertionEffect(() => (c.current = E, () => {
            var e;
            return null === (e = c.current) || void 0 === e ? void 0 : e.clear()
        }), [E]);
        let I = [];
        for (let [, e] of E) I.push(e.children);
        return (0, a.jsx)(a.Fragment, {
            children: I.length > 0 ? r(I) : null
        })
    }
}