function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691"),
        s = n("714617"),
        a = n.n(s),
        o = n("917351"),
        l = n.n(o);
    let u = r.createContext([]);

    function c(e) {
        let {
            children: t,
            currentContext: n
        } = e;
        return (0, i.jsx)(u.Provider, {
            value: n,
            children: t
        })
    }

    function d(e, t) {
        if (0 === t.length) return e;
        let n = l.flatten(t);
        return [...e, ...n]
    }

    function f() {
        for (var e, t = arguments.length, n = Array(t), s = 0; s < t; s++) n[s] = arguments[s];
        let [o, l] = r.useState(n), f = r.useContext(u), E = r.useMemo(() => d(f, o), [o, f]), p = r.useMemo(() => d(f, o.slice(0, o.length - 1)), [o, f]);
        r.useEffect(() => {
            !a(n, o) && l(n)
        }, [n]);
        let h = r.useCallback(e => {
            let {
                children: t
            } = e;
            return (0, i.jsx)(c, {
                currentContext: E,
                children: t
            })
        }, [E]);
        return {
            AnalyticsLocationProvider: h,
            analyticsLocations: E,
            sourceAnalyticsLocations: p,
            newestAnalyticsLocation: null !== (e = E[E.length - 1]) && void 0 !== e ? e : null
        }
    }
}