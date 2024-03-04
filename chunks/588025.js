function(e, t, n) {
    "use strict";
    var i, s, r, a;
    n.r(t), n.d(t, {
        QuestRewardCodePlatforms: function() {
            return i
        },
        QUEST_REWARD_CODE_PLATFORMS_SET: function() {
            return o
        },
        QuestContent: function() {
            return s
        }
    }), n("222007"), (r = i || (i = {}))[r.CROSS_PLATFORM = 0] = "CROSS_PLATFORM", r[r.XBOX = 1] = "XBOX", r[r.PLAYSTATION = 2] = "PLAYSTATION", r[r.SWITCH = 3] = "SWITCH", r[r.PC = 4] = "PC";
    let o = new Set(Object.values(i).filter(e => "number" == typeof e));
    (a = s || (s = {}))[a.GIFT_INVENTORY_SETTINGS_BADGE = 0] = "GIFT_INVENTORY_SETTINGS_BADGE", a[a.QUEST_BAR = 1] = "QUEST_BAR", a[a.QUEST_INVENTORY_CARD = 2] = "QUEST_INVENTORY_CARD", a[a.QUESTS_EMBED = 3] = "QUESTS_EMBED", a[a.ACTIVITY_PANEL = 4] = "ACTIVITY_PANEL", a[a.QUEST_LIVE_STREAM = 5] = "QUEST_LIVE_STREAM"
}