function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUserMaxFileSize: function() {
            return u
        }
    });
    var r = n("442754"),
        o = n("32950"),
        i = n("281767"),
        a = n("868615");

    function u(e) {
        if (null == e) return i.MAX_ATTACHMENT_SIZE;
        var t = r.default.getPremiumTypeOverride();
        return e.isStaff() && t === a.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? i.MAX_STAFF_ATTACHMENT_SIZE : null != e.premiumType && (0, o.isPremium)(e) ? a.PremiumUserLimits[e.premiumType].fileSize : i.MAX_ATTACHMENT_SIZE
    }
}