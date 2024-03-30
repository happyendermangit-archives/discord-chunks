function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("470079");

    function o(e) {
        var t = r.useRef(null),
            n = r.useCallback(function(n) {
                null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
            }, [e]);
        return [t, n]
    }
}