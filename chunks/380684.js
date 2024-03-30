function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUserMaxFileSize: function() {
            return o
        }
    });
    var i = n("502087"),
        r = n("111361"),
        s = n("981631"),
        a = n("474936");

    function o(e) {
        if (null == e) return s.MAX_ATTACHMENT_SIZE;
        let t = i.default.getPremiumTypeOverride();
        return e.isStaff() && t === a.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? s.MAX_STAFF_ATTACHMENT_SIZE : null != e.premiumType && (0, r.isPremium)(e) ? a.PremiumUserLimits[e.premiumType].fileSize : s.MAX_ATTACHMENT_SIZE
    }
}