function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Reference: function() {
            return u
        }
    });
    var r = n("470079"),
        i = n("820282"),
        a = n.n(i),
        o = n("663589"),
        s = n("893467");

    function u(e) {
        var t = e.children,
            n = e.innerRef,
            i = r.useContext(o.ManagerReferenceNodeSetterContext),
            u = r.useCallback(function(e) {
                (0, s.setRef)(n, e), (0, s.safeInvoke)(i, e)
            }, [n, i]);
        return r.useEffect(function() {
            return function() {
                return (0, s.setRef)(n, null)
            }
        }, []), r.useEffect(function() {
            a()(!!i, "`Reference` should not be used outside of a `Manager` component.")
        }, [i]), (0, s.unwrapArray)(t)({
            ref: u
        })
    }
}