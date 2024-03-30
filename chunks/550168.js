function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        useGetOrFetchApplication: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("252546"),
        a = n("625864"),
        u = n("342942");

    function s(e) {
        var t = r.useRef([]);
        return r.useEffect(function() {
            !(0, i.areArraysShallowEqual)(e, t.current) && (a.default.fetchApplications(e, !1), t.current = e)
        }, [e]), (0, o.useStateFromStoresArray)([u.default], function() {
            return e.map(function(e) {
                return u.default.getApplication(e)
            })
        })
    }

    function l(e) {
        return s(null != e ? [e] : [])[0]
    }
}