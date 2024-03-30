function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isPremium: function() {
            return i
        },
        isPremiumAtLeast: function() {
            return o
        },
        isPremiumExactly: function() {
            return a
        }
    });
    var r = n("868615");

    function o(e, t) {
        return null == t || null != e && r.PremiumTypeOrder[e] >= r.PremiumTypeOrder[t]
    }

    function i(e, t) {
        return null != e && null != e.premiumType && o(e.premiumType, t)
    }

    function a(e, t) {
        return null != e && e.premiumType === t
    }
}