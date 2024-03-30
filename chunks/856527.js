function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Presets: function() {
            return o
        },
        presetFromSettings: function() {
            return l
        },
        presetName: function() {
            return c
        }
    });
    var r, o, i = n("278074"),
        a = n("281767"),
        u = n("24729"),
        s = n("941504");

    function l(e, t) {
        return (0, i.match)([t, e]).with([a.UserNotificationSettings.ALL_MESSAGES, u.UnreadSetting.ALL_MESSAGES], function() {
            return "all_messages"
        }).with([a.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.UNSET], function() {
            return "mentions"
        }).with([a.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.ONLY_MENTIONS], function() {
            return "mentions"
        }).with([a.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.UNSET], function() {
            return "nothing"
        }).with([a.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.ONLY_MENTIONS], function() {
            return "nothing"
        }).otherwise(function() {
            return "custom"
        })
    }

    function c(e) {
        return (0, i.match)(e).with("all_messages", function() {
            return s.default.Messages.NOTIFICATION_PRESET_1
        }).with("mentions", function() {
            return s.default.Messages.NOTIFICATION_PRESET_2
        }).with("nothing", function() {
            return s.default.Messages.NOTIFICATION_PRESET_3
        }).with("custom", function() {
            return s.default.Messages.NOTIFICATION_PRESET_CUSTOM
        }).exhaustive()
    }(r = o || (o = {})).ALL_MESSAGES = "all_messages", r.MENTIONS = "mentions", r.NOTHING = "nothing", r.CUSTOM = "custom"
}