function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUserMaxFileSize: function() {
            return o
        }
    });
    var i = n("400205"),
        s = n("764364"),
        r = n("49111"),
        a = n("646718");

    function o(e) {
        if (null == e) return r.MAX_ATTACHMENT_SIZE;
        let t = i.default.getPremiumTypeOverride();
        return e.isStaff() && t === a.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? r.MAX_STAFF_ATTACHMENT_SIZE : null != e.premiumType && (0, s.isPremium)(e) ? a.PremiumUserLimits[e.premiumType].fileSize : r.MAX_ATTACHMENT_SIZE
    }
}