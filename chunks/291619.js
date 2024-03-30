function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079");
    t.default = function(e, t) {
        var n = (0, r.useRef)(e);
        (0, r.useEffect)(function() {
            n.current = e
        }, [e]), (0, r.useEffect)(function() {
            if (null !== t) {
                var e = setTimeout(function() {
                    return n.current()
                }, t);
                return function() {
                    return clearTimeout(e)
                }
            }
        }, [t, n])
    }
}