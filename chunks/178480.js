function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRelativeTimestamp: function() {
            return l
        },
        inNotificationCenterEnabled: function() {
            return E
        },
        incomingFriendRequestLocalItem: function() {
            return d
        },
        isMentionItem: function() {
            return c
        },
        isRemoteAcked: function() {
            return u
        },
        mobileNativeUpdateAvailableLocalItem: function() {
            return _
        }
    });
    var i = n("695346"),
        r = n("709054"),
        s = n("360629"),
        a = n("497089"),
        o = n("925928");
    let l = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, o.default)({
                since: e,
                getFormatter: t ? o.getAbbreviatedFormatter : o.getFullFormatter
            })
        },
        u = (e, t) => e.acked || t !== i.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET && r.default.compare(t, e.id) >= 0;

    function d(e, t) {
        let n = r.default.fromTimestamp(new Date(t).getTime());
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

    function _(e) {
        return {
            acked: !1,
            enableBadge: !0,
            id: r.default.fromTimestamp(new Date().getTime()),
            kind: "notification-center-item",
            local_id: "mobile_update_available_".concat(e.build),
            type: a.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE,
            deeplink: e.urls.install.toString()
        }
    }
    let c = e => e.type === a.NotificationCenterItems.RECENT_MENTION || e.type === a.NotificationCenterItems.REPLY_MENTION;

    function E() {
        return (0, s.inDesktopNotificationCenterExperiment)()
    }
}