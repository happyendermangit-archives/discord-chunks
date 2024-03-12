function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestsExperimentLocations: function() {
            return i
        },
        DismissibleQuestContentFlags: function() {
            return u
        },
        CONSECUTIVE_HEARTBEAT_PERIOD_MS: function() {
            return l
        }
    });
    var s, i, r = n("718517"),
        a = n("588025");
    (s = i || (i = {})).ACTIVITY_PANEL = "quests_bar_activity_panel", s.QUESTS_MANAGER = "quests_manager", s.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", s.USE_QUESTS = "use_quests", s.STREAM_SOURCE_SELECT = "stream_source_select", s.QUESTS_BAR = "quests_bar";
    let u = {
            [a.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE]: 1,
            [a.QuestContent.QUEST_BAR]: 2,
            [a.QuestContent.ACTIVITY_PANEL]: 4,
            [a.QuestContent.QUEST_LIVE_STREAM]: 8
        },
        l = 2 * r.default.Millis.MINUTE
}