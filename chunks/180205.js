function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        i = n("335218"),
        a = n.n(i),
        o = {};

    function s(e, t) {
        void 0 === t && (t = a());
        var n = (0, r.useRef)(o),
            i = n.current;
        return (0, r.useEffect)(function() {
            n.current = i
        }), n.current !== o && t(e, n.current) || (i = e), i
    }
}