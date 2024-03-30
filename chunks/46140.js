function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CONSECUTIVE_HEARTBEAT_PERIOD_MS: function() {
            return l
        },
        DismissibleQuestContentFlags: function() {
            return o.DismissibleQuestContentFlags
        },
        QuestsExperimentLocations: function() {
            return r
        }
    });
    var i, r, s = n("758846"),
        a = n("70956"),
        o = n("438954");
    (i = r || (r = {})).ACTIVITY_PANEL = "quests_bar_activity_panel", i.QUESTS_MANAGER = "quests_manager", i.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", i.USE_QUESTS = "use_quests", i.STREAM_SOURCE_SELECT = "stream_source_select", i.MEMBERS_LIST = "members_list", i.QUESTS_BAR = "quests_bar";
    let l = a.default.Millis.MINUTE * s.Quests.ConsecutiveHeartbeatPeriodMinutes
}