function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsLocationProvider: function() {
            return d
        },
        LocationContext: function() {
            return u
        },
        default: function() {
            return c
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("348327"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o);
    let u = r.createContext([]);

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

    function _(e, t) {
        return 0 === t.length ? e : [...e, ...l().flatten(t)]
    }

    function c() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        let [s, o] = r.useState(n), l = r.useContext(u), d = r.useMemo(() => _(l, s), [s, l]), c = r.useMemo(() => _(l, s.slice(0, s.length - 1)), [s, l]);
        return r.useEffect(() => {
            !a()(n, s) && o(n)
        }, [n]), {
            analyticsLocations: d,
            sourceAnalyticsLocations: c,
            newestAnalyticsLocation: null !== (e = d[d.length - 1]) && void 0 !== e ? e : null
        }
    }
}