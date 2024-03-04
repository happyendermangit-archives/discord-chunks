function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("884691"),
        i = n("48174");
    let o = [];

    function s(e, t) {
        let n = (0, r.useRef)(),
            s = (0, r.useRef)(o);
        return s.current === o ? (n.current = e(), s.current = t) : !(0, i.default)(t, s.current) && (n.current = e(), s.current = t), n.current
    }
}