function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DismissibleQuestContentFlags: function() {
            return u.DismissibleQuestContentFlags
        },
        QuestsExperimentLocations: function() {
            return i
        },
        CONSECUTIVE_HEARTBEAT_PERIOD_MS: function() {
            return l
        }
    });
    var s, i, r = n("310694"),
        a = n("718517"),
        u = n("490788");
    (s = i || (i = {})).ACTIVITY_PANEL = "quests_bar_activity_panel", s.QUESTS_MANAGER = "quests_manager", s.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", s.USE_QUESTS = "use_quests", s.STREAM_SOURCE_SELECT = "stream_source_select";
    let l = a.default.Millis.MINUTE * r.Quests.ConsecutiveHeartbeatPeriodMinutes
}