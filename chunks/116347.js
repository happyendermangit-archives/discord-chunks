function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getInappropriateConversationTakeoverForChannel: function() {
            return o
        },
        getSafetyAlertsSettingOrDefault: function() {
            return a
        },
        shouldShowTakeoverForWarnings: function() {
            return l
        }
    });
    var i = n("581883"),
        r = n("359119"),
        s = n("473092");

    function a() {
        var e, t, n;
        let r = null === (n = null === (t = i.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n;
        return (0, s.getUserIsTeen)("safety_warnings_setting") && r
    }

    function o(e) {
        var t;
        let n = (t = e, r.default.getChannelSafetyWarnings(t).filter(e => e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1));
        if (n.filter(e => null != e.dismiss_timestamp).length > 0) return null;
        let i = n.filter(e => null == e.dismiss_timestamp);
        return 1 === i.length ? i[0] : null
    }

    function l(e) {
        let t = e.filter(e => e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
    }
}