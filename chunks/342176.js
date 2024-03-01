function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRelativeTimestamp: function() {
            return u
        },
        isRemoteAcked: function() {
            return l
        },
        incomingFriendRequestLocalItem: function() {
            return f
        },
        mobileNativeUpdateAvailableLocalItem: function() {
            return _
        },
        isMentionItem: function() {
            return c
        },
        inNotificationCenterEnabled: function() {
            return g
        }
    });
    var s = n("845579"),
        i = n("299039"),
        r = n("913796"),
        a = n("360191"),
        o = n("581091"),
        d = n("782340");
    let u = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, o.default)({
                since: e,
                getFormatter: t ? o.getAbbreviatedFormatter : o.getFullFormatter
            })
        },
        l = (e, t) => e.acked || t !== s.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET && i.default.compare(t, e.id) >= 0;

    function f(e, t) {
        var n;
        let s = i.default.fromTimestamp(new Date(t).getTime());
        return {
            acked: !1,
            forceUnacked: !0,
            other_user: e,
            kind: "notification-center-item",
            local_id: "incoming_friend_requests_".concat(e.id, "_").concat(s),
            deeplink: "https://discord.com/users/".concat(e.id),
            type: a.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
            id: s,
            body: d.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
                username: "**".concat(null !== (n = e.globalName) && void 0 !== n ? n : e.username, "**")
            })
        }
    }

    function _(e) {
        let t = i.default.fromTimestamp(new Date().getTime());
        return {
            acked: !1,
            enableBadge: !0,
            body: "Update to build ".concat(e.build, " available!"),
            id: t,
            kind: "notification-center-item",
            local_id: "mobile_update_available_".concat(e.build),
            type: a.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE,
            deeplink: e.urls.install.toString()
        }
    }
    let c = e => e.type === a.NotificationCenterItems.RECENT_MENTION || e.type === a.NotificationCenterItems.REPLY_MENTION;

    function g() {
        return (0, r.inDesktopNotificationCenterExperiment)()
    }
}