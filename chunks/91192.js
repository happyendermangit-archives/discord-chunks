function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ListContainerContext: function() {
            return d
        },
        ListNavigatorContainer: function() {
            return f
        },
        ListNavigatorItem: function() {
            return E
        },
        ListNavigatorProvider: function() {
            return S
        },
        getContainerPropsFromNavigator: function() {
            return T
        },
        useListContainerProps: function() {
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
        s = n("25441"),
        a = n("536895"),
        o = n("260866");
    let l = {
            id: "NO_LIST",
            onKeyDown() {},
            orientation: a.Orientations.VERTICAL,
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
            setFocus: a
        } = r.useContext(u), l = r.useCallback(() => a(e), [e, a]);
        return r.useLayoutEffect(() => (0, s.addFocusSubscriber)(i, (t, i) => {
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

    function T(e) {
        let {
            id: t,
            containerProps: {
                onKeyDown: n,
                ref: i,
                tabIndex: r
            },
            orientation: s
        } = e;
        return {
            role: "list",
            onKeyDown: n,
            ref: i,
            [o.LIST_ID_ATTRIBUTE]: t,
            tabIndex: r
        }
    }

    function f(e) {
        let {
            children: t
        } = e;
        return t(I())
    }

    function S(e) {
        let {
            children: t,
            navigator: n
        } = e, {
            id: s,
            setFocus: a,
            containerProps: {
                onKeyDown: o,
                ref: l,
                tabIndex: _
            },
            orientation: c
        } = n, E = r.useMemo(() => ({
            id: s,
            setFocus: a
        }), [s, a]), I = r.useMemo(() => ({
            onKeyDown: o,
            orientation: c,
            ref: l,
            id: s,
            tabIndex: _
        }), [o, c, l, s, _]);
        return (0, i.jsxs)(d.Provider, {
            value: I,
            children: [(0, i.jsx)(u.Provider, {
                value: E,
                children: t
            }), " "]
        })
    }
}