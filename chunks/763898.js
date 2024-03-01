function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var s = n("884691");

    function i() {
        let e = s.useRef(null);
        return null === e.current && (e.current = new AbortController), s.useEffect(() => () => {
            var t;
            null === (t = e.current) || void 0 === t || t.abort()
        }, []), e.current.signal
    }
}