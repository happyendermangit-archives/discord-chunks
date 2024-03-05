function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        calculateDepthForNode: function() {
            return u
        }
    });
    var n = r("467980"),
        u = function(e) {
            if ((0, n.isHidden)(e)) return 1 / 0;
            for (var t = 0, r = e.parentNode; r;) t += 1, r = r.parentNode;
            return t
        }
}