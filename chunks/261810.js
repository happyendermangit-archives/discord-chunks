function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("884691"),
        i = n("275370"),
        o = n.n(i),
        s = {};

    function a(e, t) {
        void 0 === t && (t = o);
        var n = (0, r.useRef)(s),
            i = n.current;
        return (0, r.useEffect)(function() {
            n.current = i
        }), n.current !== s && t(e, n.current) || (i = e), i
    }
}