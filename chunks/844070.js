function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showAcceptedNotification: function() {
            return c
        },
        showPendingNotification: function() {
            return _
        }
    });
    var i = n("493683"),
        r = n("758059"),
        a = n("292556"),
        s = n("703656"),
        o = n("768581"),
        l = n("981631"),
        u = n("689938");

    function d(e, t, n) {
        a.default.showNotification(o.default.getUserAvatarURL(e), e.username, t, {}, {
            omitViewTracking: !0,
            omitClickTracking: !0,
            tag: e.id,
            onClick: n
        })
    }

    function _(e) {
        d(e, u.default.Messages.NOTIFICATION_PENDING_FRIEND_REQUEST, () => {
            {
                let {
                    openUserProfileModal: t
                } = n("171368");
                t({
                    userId: e.id
                })
            }(0, s.transitionTo)(l.Routes.FRIENDS), r.default.setSection(l.FriendsSections.PENDING)
        })
    }

    function c(e) {
        d(e, u.default.Messages.NOTIFICATION_ACCEPTED_FRIEND_REQUEST, () => {
            i.default.openPrivateChannel(e.id)
        })
    }
}