function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o);

    function a(e, t) {
        var n = (0, r.useRef)(e);
        (0, r.useEffect)(function() {
            n.current = e
        }, [e]), (0, r.useEffect)(function() {
            if (null !== t) {
                var e = setInterval(function() {
                    i()(null != n.current, "Missing callback"), n.current()
                }, t);
                return function() {
                    return clearInterval(e)
                }
            }
        }, [t])
    }
}