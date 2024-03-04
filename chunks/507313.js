function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Presets: function() {
            return i
        },
        presetFromSettings: function() {
            return u
        },
        presetName: function() {
            return d
        }
    }), n("794252");
    var i, s, r = n("506838"),
        a = n("49111"),
        o = n("133335"),
        l = n("782340");

    function u(e, t) {
        return (0, r.match)([t, e]).with([a.UserNotificationSettings.ALL_MESSAGES, o.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([a.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.UNSET], () => "mentions").with([a.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([a.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.UNSET], () => "nothing").with([a.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
    }

    function d(e) {
        return (0, r.match)(e).with("all_messages", () => l.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => l.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => l.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => l.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
    }(s = i || (i = {})).ALL_MESSAGES = "all_messages", s.MENTIONS = "mentions", s.NOTHING = "nothing", s.CUSTOM = "custom"
}