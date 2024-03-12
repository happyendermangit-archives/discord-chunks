function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return d
        },
        useGetOrFetchApplication: function() {
            return s
        }
    });
    var n = i("884691"),
        l = i("446674"),
        a = i("233736"),
        u = i("651057"),
        r = i("299285");

    function d(e) {
        let t = n.useRef([]);
        return n.useEffect(() => {
            !(0, a.areArraysShallowEqual)(e, t.current) && (u.default.fetchApplications(e, !1), t.current = e)
        }, [e]), (0, l.useStateFromStoresArray)([r.default], () => e.map(e => r.default.getApplication(e)))
    }

    function s(e) {
        return d(null != e ? [e] : [])[0]
    }
}