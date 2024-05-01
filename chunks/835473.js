function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        useGetOrFetchApplication: function() {
            return u
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("902704"),
        a = n("728345"),
        o = n("812206");

    function l(e) {
        let t = i.useRef([]);
        return i.useEffect(() => {
            !(0, s.areArraysShallowEqual)(e, t.current) && (a.default.fetchApplications(e, !1), t.current = e)
        }, [e]), (0, r.useStateFromStoresArray)([o.default], () => e.map(e => o.default.getApplication(e)))
    }

    function u(e) {
        return l(null != e ? [e] : [])[0]
    }
}