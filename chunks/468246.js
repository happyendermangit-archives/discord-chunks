function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getInappropriateConversationTakeoverForChannel: function() {
            return u
        },
        getSafetyAlertsSettingOrDefault: function() {
            return a
        },
        shouldShowTakeoverForWarnings: function() {
            return s
        }
    });
    var r = n("851285"),
        o = n("245884"),
        i = n("115832");

    function a() {
        var e, t, n, o = null === (n = null === (t = r.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n;
        return (0, i.getUserIsTeen)("safety_warnings_setting") && o
    }

    function u(e) {
        var t, n = (t = e, o.default.getChannelSafetyWarnings(t).filter(function(e) {
            return e.type === o.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1
        }));
        if (n.filter(function(e) {
                return null != e.dismiss_timestamp
            }).length > 0) return null;
        var r = n.filter(function(e) {
            return null == e.dismiss_timestamp
        });
        return 1 === r.length ? r[0] : null
    }

    function s(e) {
        var t = e.filter(function(e) {
            return e.type === o.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1
        });
        return t.length > 0 && t.every(function(e) {
            return null == e.dismiss_timestamp
        })
    }
}