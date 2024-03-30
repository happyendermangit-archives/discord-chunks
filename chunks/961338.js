function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CONSECUTIVE_HEARTBEAT_PERIOD_MS: function() {
            return s
        },
        DismissibleQuestContentFlags: function() {
            return u.DismissibleQuestContentFlags
        },
        QuestsExperimentLocations: function() {
            return o
        }
    });
    var r, o, i = n("816315"),
        a = n("388990"),
        u = n("409388");
    (r = o || (o = {})).ACTIVITY_PANEL = "quests_bar_activity_panel", r.QUESTS_MANAGER = "quests_manager", r.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", r.USE_QUESTS = "use_quests", r.STREAM_SOURCE_SELECT = "stream_source_select", r.MEMBERS_LIST = "members_list", r.QUESTS_BAR = "quests_bar";
    var s = a.default.Millis.MINUTE * i.Quests.ConsecutiveHeartbeatPeriodMinutes
}