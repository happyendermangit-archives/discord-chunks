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
        u = i("651057"),
        r = i("299285");

    function d(t) {
        let e = n.useRef([]);
        return n.useEffect(() => {
            !(0, a.areArraysShallowEqual)(t, e.current) && (u.default.fetchApplications(t, !1), e.current = t)
        }, [t]), (0, l.useStateFromStoresArray)([r.default], () => t.map(t => r.default.getApplication(t)))
    }

    function s(t) {
        return d(null != t ? [t] : [])[0]
    }
}