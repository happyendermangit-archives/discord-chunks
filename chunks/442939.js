function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
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
        r = i("651057"),
        u = i("299285");

    function d(t) {
        let e = n.useRef([]);
        return n.useEffect(() => {
            !(0, a.areArraysShallowEqual)(t, e.current) && (r.default.fetchApplications(t, !1), e.current = t)
        }, [t]), (0, l.useStateFromStoresArray)([u.default], () => t.map(t => u.default.getApplication(t)))
    }

    function s(t) {
        return d(null != t ? [t] : [])[0]
    }
}