function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        showPendingNotification: function() {
            return T
        },
        showAcceptedNotification: function() {
            return S
        }
    });
    var t = E("450911"),
        o = E("630086"),
        n = E("193990"),
        r = E("393414"),
        i = E("315102"),
        a = E("49111"),
        I = E("782340");

    function s(e, _, E) {
        n.default.showNotification(i.default.getUserAvatarURL(e), e.username, _, {}, {
            omitViewTracking: !0,
            omitClickTracking: !0,
            tag: e.id,
            onClick: E
        })
    }

    function T(e) {
        s(e, I.default.Messages.NOTIFICATION_PENDING_FRIEND_REQUEST, () => {
            {
                let {
                    openUserProfileModal: _
                } = E("401642");
                _({
                    userId: e.id
                })
            }(0, r.transitionTo)(a.Routes.FRIENDS), o.default.setSection(a.FriendsSections.PENDING)
        })
    }

    function S(e) {
        s(e, I.default.Messages.NOTIFICATION_ACCEPTED_FRIEND_REQUEST, () => {
            t.default.openPrivateChannel(e.id)
        })
    }
}