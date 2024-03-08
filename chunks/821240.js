function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSafetyAlertsSettingOrDefault: function() {
            return i
        },
        getInappropriateConversationTakeoverForChannel: function() {
            return l
        },
        shouldShowTakeoverForWarnings: function() {
            return u
        }
    });
    var a = n("374363"),
        r = n("764828"),
        s = n("217736");

    function i() {
        var e, t, n;
        let r = null === (n = null === (t = a.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n,
            i = (0, s.getUserIsTeen)("safety_warnings_setting");
        return i && r
    }

    function l(e) {
        let t = function(e) {
                let t = r.default.getChannelSafetyWarnings(e);
                return t.filter(e => e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
            }(e),
            n = t.filter(e => null != e.dismiss_timestamp);
        if (n.length > 0) return null;
        let a = t.filter(e => null == e.dismiss_timestamp);
        return 1 === a.length ? a[0] : null
    }

    function u(e) {
        let t = e.filter(e => e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
    }
}