function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Reference: function() {
            return u
        }
    });
    var r = n("884691"),
        a = n("752961"),
        o = n.n(a),
        i = n("204748"),
        s = n("84075");

    function u(e) {
        var t = e.children,
            n = e.innerRef,
            a = r.useContext(i.ManagerReferenceNodeSetterContext),
            u = r.useCallback(function(e) {
                (0, s.setRef)(n, e), (0, s.safeInvoke)(a, e)
            }, [n, a]);
        return r.useEffect(function() {
            return function() {
                return (0, s.setRef)(n, null)
            }
        }, []), r.useEffect(function() {
            o(!!a, "`Reference` should not be used outside of a `Manager` component.")
        }, [a]), (0, s.unwrapArray)(t)({
            ref: u
        })
    }
}