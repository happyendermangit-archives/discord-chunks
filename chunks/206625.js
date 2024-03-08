function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("884691");

    function l(e, t) {
        let n = i.useRef(e);
        return i.useEffect(() => {
            function e(e) {
                null != n.current && !n.current.contains(e.target) && t()
            }
            return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [n, t]), n
    }
}