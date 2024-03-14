function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TransitionStates: function() {
            return i
        },
        TransitionGroup: function() {
            return u
        }
    }), n("222007"), n("424973");
    var i, s, r = n("37983"),
        a = n("884691");
    (s = i || (i = {}))[s.MOUNTED = 0] = "MOUNTED", s[s.ENTERED = 1] = "ENTERED", s[s.YEETED = 2] = "YEETED";
    let o = {};

    function l(e) {
        return e
    }

    function u(e) {
        let {
            items: t,
            renderItem: n,
            getItemKey: i,
            wrapChildren: s = l,
            lazyCleanUpDelay: u
        } = e, d = a.useRef(-1);
        a.useLayoutEffect(() => () => clearTimeout(d.current));
        let [, c] = a.useState(o), f = a.useRef(null), _ = a.useMemo(() => {
            var e;
            let s = new Set(null === (e = f.current) || void 0 === e ? void 0 : e.keys()),
                r = new Map(f.current);
            for (let e of t) {
                let t = i(e),
                    a = r.get(t);
                if (null == a) {
                    let i = null != f.current ? 1 : 0,
                        s = () => {
                            var e, n;
                            let i = null === (e = f.current) || void 0 === e ? void 0 : e.get(t);
                            null == i || (2 === i.state ? (null === (n = f.current) || void 0 === n || n.delete(t), null != u ? (clearTimeout(d.current), d.current = setTimeout(() => c({}), u)) : c({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)))
                        },
                        r = n(t, e, i, s);
                    a = {
                        item: e,
                        children: r,
                        state: i,
                        cleanUp: s,
                        renderItem: n
                    }
                } else if (a.item !== e || a.renderItem !== n || 2 === a.state) {
                    let {
                        cleanUp: i
                    } = a, s = 2 === a.state ? 1 : a.state, r = n(t, e, s, a.cleanUp);
                    a = {
                        item: e,
                        children: r,
                        state: s,
                        cleanUp: i,
                        renderItem: n
                    }
                }
                r.set(t, a), s.delete(t)
            }
            for (let e of s) {
                let t = r.get(e);
                if (null != t) {
                    if (2 !== t.state || t.renderItem !== n) {
                        let {
                            item: i,
                            cleanUp: s
                        } = t, a = n(e, t.item, 2, t.cleanUp);
                        null != (t = {
                            item: i,
                            children: a,
                            state: 2,
                            cleanUp: s,
                            renderItem: n
                        }).children ? r.set(e, t) : r.delete(e)
                    } else r.set(e, t)
                }
            }
            return r
        }, [t, i, n, u]);
        a.useInsertionEffect(() => (f.current = _, () => {
            var e;
            return null === (e = f.current) || void 0 === e ? void 0 : e.clear()
        }), [_]);
        let E = [];
        for (let [, e] of _) E.push(e.children);
        return (0, r.jsx)(r.Fragment, {
            children: E.length > 0 ? s(E) : null
        })
    }
}