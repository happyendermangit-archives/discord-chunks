function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getInappropriateConversationTakeoverForChannel: function() {
            return r
        },
        shouldShowTakeoverForWarnings: function() {
            return s
        }
    });
    var a = n("764828");

    function r(e) {
        let t = function(e) {
                let t = a.default.getChannelSafetyWarnings(e);
                return t.filter(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
            }(e),
            n = t.filter(e => null != e.dismiss_timestamp);
        if (n.length > 0) return null;
        let r = t.filter(e => null == e.dismiss_timestamp);
        return 1 === r.length ? r[0] : null
    }

    function s(e) {
        let t = e.filter(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
    }
}