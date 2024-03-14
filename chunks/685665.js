function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("714617"),
        a = n.n(r),
        o = n("917351"),
        l = n.n(o);
    let u = s.createContext([]);

    function d(e) {
        let {
            children: t,
            currentContext: n
        } = e;
        return (0, i.jsx)(u.Provider, {
            value: n,
            children: t
        })
    }

    function c(e, t) {
        if (0 === t.length) return e;
        let n = l.flatten(t);
        return [...e, ...n]
    }

    function f() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let [o, l] = s.useState(n), f = s.useContext(u), _ = s.useMemo(() => c(f, o), [o, f]), E = s.useMemo(() => c(f, o.slice(0, o.length - 1)), [o, f]);
        s.useEffect(() => {
            !a(n, o) && l(n)
        }, [n]);
        let h = s.useCallback(e => {
            let {
                children: t
            } = e;
            return (0, i.jsx)(d, {
                currentContext: _,
                children: t
            })
        }, [_]);
        return {
            AnalyticsLocationProvider: h,
            analyticsLocations: _,
            sourceAnalyticsLocations: E,
            newestAnalyticsLocation: null !== (e = _[_.length - 1]) && void 0 !== e ? e : null
        }
    }
}