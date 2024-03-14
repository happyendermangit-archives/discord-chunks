function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ListContainerContext: function() {
            return d
        },
        useListItem: function() {
            return c
        },
        useTreeItem: function() {
            return f
        },
        ListNavigatorItem: function() {
            return _
        },
        useListContainerProps: function() {
            return h
        },
        getContainerPropsFromNavigator: function() {
            return E
        },
        ListNavigatorContainer: function() {
            return g
        },
        ListNavigatorProvider: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("909283"),
        a = n("942367"),
        o = n("74139");
    let l = {
            id: "NO_LIST",
            onKeyDown() {},
            orientation: a.Orientations.VERTICAL,
            ref: s.createRef(),
            tabIndex: -1
        },
        u = s.createContext({
            id: "NO_LIST",
            setFocus() {}
        }),
        d = s.createContext(l);

    function c(e) {
        let [t, n] = s.useState(-1), i = s.useContext(u), {
            id: a,
            setFocus: l
        } = i, d = s.useCallback(() => l(e), [e, l]);
        return s.useLayoutEffect(() => (0, r.addFocusSubscriber)(a, (t, i) => {
            n(i && t === e ? 0 : -1)
        }), [e, a]), {
            role: "listitem",
            [o.LIST_ITEM_ID_ATTRIBUTE]: (0, o.createListItemId)(a, e),
            tabIndex: t,
            onFocus: d
        }
    }

    function f(e) {
        let t = c(e);
        return {
            ...t,
            role: "treeitem"
        }
    }

    function _(e) {
        let {
            children: t,
            id: n
        } = e, i = c(n);
        return t(i)
    }

    function h() {
        let e = s.useContext(d),
            {
                id: t,
                onKeyDown: n,
                ref: i,
                tabIndex: r
            } = e;
        return {
            role: "list",
            tabIndex: r,
            [o.LIST_ID_ATTRIBUTE]: t,
            onKeyDown: n,
            ref: i
        }
    }

    function E(e) {
        let {
            id: t,
            containerProps: {
                onKeyDown: n,
                ref: i,
                tabIndex: s
            },
            orientation: r
        } = e;
        return {
            role: "list",
            onKeyDown: n,
            ref: i,
            [o.LIST_ID_ATTRIBUTE]: t,
            tabIndex: s
        }
    }

    function g(e) {
        let {
            children: t
        } = e, n = h();
        return t(n)
    }

    function m(e) {
        let {
            children: t,
            navigator: n
        } = e, {
            id: r,
            setFocus: a,
            containerProps: {
                onKeyDown: o,
                ref: l,
                tabIndex: c
            },
            orientation: f
        } = n, _ = s.useMemo(() => ({
            id: r,
            setFocus: a
        }), [r, a]), h = s.useMemo(() => ({
            onKeyDown: o,
            orientation: f,
            ref: l,
            id: r,
            tabIndex: c
        }), [o, f, l, r, c]);
        return (0, i.jsxs)(d.Provider, {
            value: h,
            children: [(0, i.jsx)(u.Provider, {
                value: _,
                children: t
            }), " "]
        })
    }
}