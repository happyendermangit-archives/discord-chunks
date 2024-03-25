function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DismissibleQuestContentFlags: function() {
            return r.DismissibleQuestContentFlags
        },
        QuestsExperimentLocations: function() {
            return l
        },
        CONSECUTIVE_HEARTBEAT_PERIOD_MS: function() {
            return o
        }
    });
    var i, l, a = n("310694"),
        s = n("718517"),
        r = n("490788");
    (i = l || (l = {})).ACTIVITY_PANEL = "quests_bar_activity_panel", i.QUESTS_MANAGER = "quests_manager", i.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", i.USE_QUESTS = "use_quests", i.STREAM_SOURCE_SELECT = "stream_source_select", i.MEMBERS_LIST = "members_list";
    let o = s.default.Millis.MINUTE * a.Quests.ConsecutiveHeartbeatPeriodMinutes
}