function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsLocationProvider: function() {
            return d
        },
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
            value: n
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
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        let [r, o] = s.useState(n), l = s.useContext(u), d = s.useMemo(() => c(l, r), [r, l]), _ = s.useMemo(() => c(l, r.slice(0, r.length - 1)), [r, l]);
        return s.useEffect(() => {
            !a(n, r) && o(n)
        }, [n]), {
            analyticsLocations: d,
            sourceAnalyticsLocations: _,
            newestAnalyticsLocation: null !== (e = d[d.length - 1]) && void 0 !== e ? e : null
        }
    }
}