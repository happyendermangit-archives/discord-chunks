function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("470079"),
        i = n("509172");
    let a = [];

    function o(e, t) {
        let n = (0, r.useRef)(),
            o = (0, r.useRef)(a);
        return o.current === a ? (n.current = e(), o.current = t) : !(0, i.default)(t, o.current) && (n.current = e(), o.current = t), n.current
    }
}