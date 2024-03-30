function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showAcceptedNotification: function() {
            return d
        },
        showPendingNotification: function() {
            return f
        }
    });
    var r = n("651820"),
        o = n("214182"),
        i = n("572088"),
        a = n("163291"),
        u = n("299529"),
        s = n("281767"),
        l = n("941504");

    function c(e, t, n) {
        i.default.showNotification(u.default.getUserAvatarURL(e), e.username, t, {}, {
            omitViewTracking: !0,
            omitClickTracking: !0,
            tag: e.id,
            onClick: n
        })
    }

    function f(e) {
        c(e, l.default.Messages.NOTIFICATION_PENDING_FRIEND_REQUEST, function() {
            (0, n("899517").openUserProfileModal)({
                userId: e.id
            }), (0, a.transitionTo)(s.Routes.FRIENDS), o.default.setSection(s.FriendsSections.PENDING)
        })
    }

    function d(e) {
        c(e, l.default.Messages.NOTIFICATION_ACCEPTED_FRIEND_REQUEST, function() {
            r.default.openPrivateChannel(e.id)
        })
    }
}