function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackGuildInviteNotificationAction: function() {
            return u
        },
        trackGuildInviteNotificationDismissed: function() {
            return s
        }
    });
    var r, o, i = n("140817"),
        a = n("281767");

    function u() {
        i.default.trackWithMetadata(a.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
            notification_type: "Reminder Notification",
            action: "Guild Invite",
            dismissed: !1
        })
    }

    function s() {
        i.default.trackWithMetadata(a.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
            notification_type: "Reminder Notification",
            action: "Guild Invite",
            dismissed: !0
        })
    }(r || (r = {})).REMINDER_NOTIFICATION = "Reminder Notification", (o || (o = {})).GUILD_INVITE = "Guild Invite"
}