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
    var i, r, s = n("367907"),
        a = n("981631");

    function o() {
        s.default.trackWithMetadata(a.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
            notification_type: "Reminder Notification",
            action: "Guild Invite",
            dismissed: !1
        })
    }

    function l() {
        s.default.trackWithMetadata(a.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
            notification_type: "Reminder Notification",
            action: "Guild Invite",
            dismissed: !0
        })
    }(i || (i = {})).REMINDER_NOTIFICATION = "Reminder Notification", (r || (r = {})).GUILD_INVITE = "Guild Invite"
}