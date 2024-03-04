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
    var i = n("884691"),
        s = n("446674"),
        r = n("233736"),
        a = n("651057"),
        o = n("299285");

    function l(e) {
        let t = i.useRef([]);
        return i.useEffect(() => {
            !(0, r.areArraysShallowEqual)(e, t.current) && (a.default.fetchApplications(e, !1), t.current = e)
        }, [e]), (0, s.useStateFromStoresArray)([o.default], () => e.map(e => o.default.getApplication(e)))
    }

    function u(e) {
        return l(null != e ? [e] : [])[0]
    }
}