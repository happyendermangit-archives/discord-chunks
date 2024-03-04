function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("884691"),
        s = n("561744");

    function r(e) {
        let t = (0, s.default)(e);
        (0, i.useEffect)(() => {
            let e = requestAnimationFrame(function n() {
                var i;
                null === (i = t.current) || void 0 === i || i.call(t), e = requestAnimationFrame(n)
            });
            return () => cancelAnimationFrame(e)
        }, [])
    }
}