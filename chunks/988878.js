function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("217145"),
        r = n("429682");

    function s(e) {
        return (0, i.isIFrameModalUserEnabled)() || (0, r.isIFrameModalForGuildEnabled)(e)
    }
}