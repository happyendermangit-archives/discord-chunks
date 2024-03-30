function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("62980");

    function i(e) {
        var t = (0, o.default)(e);
        (0, r.useEffect)(function() {
            var e = requestAnimationFrame(function n() {
                var r;
                null === (r = t.current) || void 0 === r || r.call(t), e = requestAnimationFrame(n)
            });
            return function() {
                return cancelAnimationFrame(e)
            }
        }, [])
    }
}