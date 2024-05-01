function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUserMaxFileSize: function() {
            return o
        }
    });
    var i = n("502087"),
        r = n("111361"),
        a = n("981631"),
        s = n("474936");

    function o(e) {
        if (null == e) return a.MAX_ATTACHMENT_SIZE;
        let t = i.default.getPremiumTypeOverride();
        return e.isStaff() && t === s.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? a.MAX_STAFF_ATTACHMENT_SIZE : null != e.premiumType && (0, r.isPremium)(e) ? s.PremiumUserLimits[e.premiumType].fileSize : a.MAX_ATTACHMENT_SIZE
    }
}