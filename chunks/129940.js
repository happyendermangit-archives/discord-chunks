function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("470079");

    function o() {
        var e = r.useRef(null);
        return null === e.current && (e.current = new AbortController), r.useEffect(function() {
            return function() {
                var t;
                null === (t = e.current) || void 0 === t || t.abort()
            }
        }, []), e.current.signal
    }
}