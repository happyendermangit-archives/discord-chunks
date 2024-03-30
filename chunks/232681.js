function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("699581"),
        i = Object.freeze({
            box: "border-box"
        });

    function a(e) {
        var t = e.ref,
            n = e.onUpdate,
            a = e.resizeObserver,
            u = e.listenerMap,
            s = e.key;
        (0, r.useLayoutEffect)(function() {
            var e = t.current;
            return null != e && (u.set(e, function(e) {
                    (0, o.flushSync)(function() {
                        n(e, s)
                    })
                }), a.observe(e, i)),
                function() {
                    null != e && (a.unobserve(e), u.delete(e))
                }
        }, [n, a, t, u, s])
    }
}