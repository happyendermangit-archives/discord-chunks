function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRelativeTimestamp: function() {
            return s
        },
        inNotificationCenterEnabled: function() {
            return _
        },
        incomingFriendRequestLocalItem: function() {
            return c
        },
        isMentionItem: function() {
            return d
        },
        isRemoteAcked: function() {
            return l
        },
        mobileNativeUpdateAvailableLocalItem: function() {
            return f
        }
    });
    var r = n("53867"),
        o = n("523018"),
        i = n("147421"),
        a = n("39199"),
        u = n("367053"),
        s = function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, u.default)({
                since: e,
                getFormatter: t ? u.getAbbreviatedFormatter : u.getFullFormatter
            })
        },
        l = function(e, t) {
            return e.acked || t !== r.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET && o.default.compare(t, e.id) >= 0
        };

    function c(e, t) {
        var n = o.default.fromTimestamp(new Date(t).getTime());
        return {
            acked: !1,
            forceUnacked: !0,
            other_user: e,
            kind: "notification-center-item",
            local_id: "incoming_friend_requests_".concat(e.id, "_").concat(n),
            deeplink: "https://discord.com/users/".concat(e.id),
            type: a.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
            id: n
        }
    }

    function f(e) {
        return {
            acked: !1,
            enableBadge: !0,
            id: o.default.fromTimestamp(new Date().getTime()),
            kind: "notification-center-item",
            local_id: "mobile_update_available_".concat(e.build),
            type: a.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE,
            deeplink: e.urls.install.toString()
        }
    }
    var d = function(e) {
        return e.type === a.NotificationCenterItems.RECENT_MENTION || e.type === a.NotificationCenterItems.REPLY_MENTION
    };

    function _() {
        return (0, i.inDesktopNotificationCenterExperiment)()
    }
}