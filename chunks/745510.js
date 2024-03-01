function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("884691"),
        o = n("48174");
    let u = [];

    function c(e, t) {
        let n = (0, r.useRef)(),
            c = (0, r.useRef)(u);
        return c.current === u ? (n.current = e(), c.current = t) : !(0, o.default)(t, c.current) && (n.current = e(), c.current = t), n.current
    }
}