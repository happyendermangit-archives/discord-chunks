function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isCurrentUserTeen: function() {
            return o
        }
    });
    var r = n("208454"),
        o = function() {
            var e;
            return (null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
        }
}