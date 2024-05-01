function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isPremium: function() {
            return s
        },
        isPremiumAtLeast: function() {
            return r
        },
        isPremiumExactly: function() {
            return a
        }
    });
    var i = n("474936");

    function r(e, t) {
        return null == t || null != e && i.PremiumTypeOrder[e] >= i.PremiumTypeOrder[t]
    }

    function s(e, t) {
        return null != e && null != e.premiumType && r(e.premiumType, t)
    }

    function a(e, t) {
        return null != e && e.premiumType === t
    }
}