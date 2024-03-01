function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isPremiumAtLeast: function() {
            return r
        },
        isPremium: function() {
            return s
        },
        isPremiumExactly: function() {
            return a
        }
    });
    var i = n("646718");

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