function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ListContainerContext: function() {
            return d
        },
        ListNavigatorContainer: function() {
            return S
        },
        ListNavigatorItem: function() {
            return E
        },
        ListNavigatorProvider: function() {
            return h
        },
        getContainerPropsFromNavigator: function() {
            return f
        },
        useListContainerProps: function() {
            return T
        },
        useListContainerScrollerRef: function() {
            return I
        },
        useListItem: function() {
            return _
        },
        useTreeItem: function() {
            return c
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("25441"),
        s = n("536895"),
        o = n("260866");
    let l = {
            id: "NO_LIST",
            onKeyDown() {},
            orientation: s.Orientations.VERTICAL,
            ref: r.createRef(),
            tabIndex: -1
        },
        u = r.createContext({
            id: "NO_LIST",
            setFocus() {}
        }),
        d = r.createContext(l);

    function _(e) {
        let [t, n] = r.useState(-1), {
            id: i,
            setFocus: s
        } = r.useContext(u), l = r.useCallback(() => s(e), [e, s]);
        return r.useLayoutEffect(() => (0, a.addFocusSubscriber)(i, (t, i) => {
            n(i && t === e ? 0 : -1)
        }), [e, i]), {
            role: "listitem",
            [o.LIST_ITEM_ID_ATTRIBUTE]: (0, o.createListItemId)(i, e),
            tabIndex: t,
            onFocus: l
        }
    }

    function c(e) {
        return {
            ..._(e),
            role: "treeitem"
        }
    }

    function E(e) {
        let {
            children: t,
            id: n
        } = e;
        return t(_(n))
    }

    function I() {
        return r.useContext(d).ref
    }

    function T() {
        let {
            id: e,
            onKeyDown: t,
            ref: n,
            tabIndex: i
        } = r.useContext(d);
        return {
            role: "list",
            tabIndex: i,
            [o.LIST_ID_ATTRIBUTE]: e,
            onKeyDown: t,
            ref: n
        }
    }

    function f(e) {
        let {
            id: t,
            containerProps: {
                onKeyDown: n,
                ref: i,
                tabIndex: r
            },
            orientation: a
        } = e;
        return {
            role: "list",
            onKeyDown: n,
            ref: i,
            [o.LIST_ID_ATTRIBUTE]: t,
            tabIndex: r
        }
    }

    function S(e) {
        let {
            children: t
        } = e;
        return t(T())
    }

    function h(e) {
        let {
            children: t,
            navigator: n
        } = e, {
            id: a,
            setFocus: s,
            containerProps: {
                onKeyDown: o,
                ref: l,
                tabIndex: _
            },
            orientation: c
        } = n, E = r.useMemo(() => ({
            id: a,
            setFocus: s
        }), [a, s]), I = r.useMemo(() => ({
            onKeyDown: o,
            orientation: c,
            ref: l,
            id: a,
            tabIndex: _
        }), [o, c, l, a, _]);
        return (0, i.jsxs)(d.Provider, {
            value: I,
            children: [(0, i.jsx)(u.Provider, {
                value: E,
                children: t
            }), " "]
        })
    }
}