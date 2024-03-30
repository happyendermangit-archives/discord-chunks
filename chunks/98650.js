function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("470079"),
        r = n("863840");

    function s(e) {
        let t = (0, r.default)(e);
        (0, i.useEffect)(() => {
            let e = requestAnimationFrame(function n() {
                var i;
                null === (i = t.current) || void 0 === i || i.call(t), e = requestAnimationFrame(n)
            });
            return () => cancelAnimationFrame(e)
        }, [])
    }
}