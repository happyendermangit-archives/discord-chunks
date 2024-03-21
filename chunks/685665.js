function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
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

    function _() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let [o, l] = s.useState(n), _ = s.useContext(u), f = s.useMemo(() => c(_, o), [o, _]), E = s.useMemo(() => c(_, o.slice(0, o.length - 1)), [o, _]);
        s.useEffect(() => {
            !a(n, o) && l(n)
        }, [n]);
        let h = s.useCallback(e => {
            let {
                children: t
            } = e;
            return (0, i.jsx)(d, {
                currentContext: f,
                children: t
            })
        }, [f]);
        return {
            AnalyticsLocationProvider: h,
            analyticsLocations: f,
            sourceAnalyticsLocations: E,
            newestAnalyticsLocation: null !== (e = f[f.length - 1]) && void 0 !== e ? e : null
        }
    }
}