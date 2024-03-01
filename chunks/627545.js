function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateDepthForNode: function() {
            return a
        }
    });
    var r = n("925691"),
        a = function(e) {
            if ((0, r.isHidden)(e)) return 1 / 0;
            for (var t = 0, n = e.parentNode; n;) t += 1, n = n.parentNode;
            return t
        }
}