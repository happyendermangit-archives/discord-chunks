function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("470079");

    function o(e, t) {
        var n = r.useRef(e);
        return r.useEffect(function() {
            var e = function(e) {
                null != n.current && !n.current.contains(e.target) && t()
            };
            return document.addEventListener("mousedown", e),
                function() {
                    document.removeEventListener("mousedown", e)
                }
        }, [n, t]), n
    }
}