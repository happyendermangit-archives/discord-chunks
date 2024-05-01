function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        statesWillNeverBeEqual: function() {
            return o
        },
        useStateFromStores: function() {
            return l
        },
        useStateFromStoresArray: function() {
            return d
        },
        useStateFromStoresObject: function() {
            return u
        }
    }), n("411104"), n("47120");
    var i = n("470079"),
        r = n("902704"),
        a = n("250919");

    function s(e, t) {
        return e === t
    }

    function o(e, t) {
        return !1
    }

    function l(e, t, n) {
        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s,
            {
                current: l
            } = (0, i.useRef)({
                stores: e,
                areStatesEqual: o,
                getStateFromStores: t,
                prevDeps: void 0,
                state: void 0
            }),
            u = l.state;
        if (null == n || !(0, r.areArraysShallowEqual)(n, l.prevDeps)) {
            let e = t();
            (null == u || !o(u, e)) && (u = e)
        }(0, i.useLayoutEffect)(() => {
            l.getStateFromStores = t, l.prevDeps = n, l.state = u
        });
        let [, d] = (0, i.useState)(null);
        return (0, i.useLayoutEffect)(() => {
            let t = () => {
                let e = l.getStateFromStores();
                !o(l.state, e) && (l.state = e, d({}))
            };
            t();
            let n = new a.BatchedStoreListener(e, t);
            return n.attach("useStateFromStores"), () => n.detach()
        }, []), u
    }

    function u(e, t, n) {
        return l(e, t, n, r.default)
    }

    function d(e, t, n) {
        return l(e, t, n, r.areArraysShallowEqual)
    }
}