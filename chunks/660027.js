function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("316138"),
        i = n("285363"),
        a = n("882159");

    function o(e) {
        return "html" === (0, r.default)(e) ? e : e.assignedSlot || e.parentNode || ((0, a.isShadowRoot)(e) ? e.host : null) || (0, i.default)(e)
    }
}