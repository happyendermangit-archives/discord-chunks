function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackGuildInviteNotificationAction: function() {
            return o
        },
        trackGuildInviteNotificationDismissed: function() {
            return l
        }
    });
    var i, s, r = n("716241"),
        a = n("49111");

    function o() {
        r.default.trackWithMetadata(a.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
            notification_type: "Reminder Notification",
            action: "Guild Invite",
            dismissed: !1
        })
    }

    function l() {
        r.default.trackWithMetadata(a.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
            notification_type: "Reminder Notification",
            action: "Guild Invite",
            dismissed: !0
        })
    }(i || (i = {})).REMINDER_NOTIFICATION = "Reminder Notification", (s || (s = {})).GUILD_INVITE = "Guild Invite"
}