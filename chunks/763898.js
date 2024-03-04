function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("884691");

    function s() {
        let e = i.useRef(null);
        return null === e.current && (e.current = new AbortController), i.useEffect(() => () => {
            var t;
            null === (t = e.current) || void 0 === t || t.abort()
        }, []), e.current.signal
    }
}