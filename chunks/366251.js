function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var a = n("470079"),
        r = n("445131"),
        c = n("613828"),
        o = n("160119"),
        i = n("163291");

    function f(e) {
        var t = e.children;
        return a.useEffect(function() {
            return o.default.initialize(),
                function() {
                    return o.default.cleanup()
                }
        }, []), a.createElement(r.HelmetProvider, null, a.createElement(c.Router, {
            history: (0, i.getHistory)()
        }, t))
    }
}