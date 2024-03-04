function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isCurrentUserTeen: function() {
            return s
        }
    });
    var i = n("697218");
    let s = () => {
        var e;
        return (null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
    }
}