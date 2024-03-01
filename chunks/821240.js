function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        getInappropriateConversationTakeoverForChannel: function() {
            return o
        }
    });
    var t = E("764828");

    function o(e) {
        let _ = function(e) {
                let _ = t.default.getChannelSafetyWarnings(e);
                return _.filter(e => e.type === t.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === t.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
            }(e),
            E = _.filter(e => e.type === t.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 && null != e.dismiss_timestamp);
        if (E.length > 0) return null;
        let o = _.filter(e => e.type === t.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 && null == e.dismiss_timestamp);
        return 1 === o.length ? o[0] : null
    }
}