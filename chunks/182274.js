function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isCurrentUserTeen: function() {
            return r
        }
    });
    var i = n("594174");
    let r = () => {
        var e;
        return (null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
    }
}