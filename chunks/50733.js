function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return T
        }
    }), E("222007");
    var t = E("819855"),
        o = E("689988"),
        n = E("642754"),
        r = E("49111"),
        a = E("782340");

    function i(e) {
        e.relationship.type === r.RelationshipTypes.PENDING_INCOMING && (t.AccessibilityAnnouncer.announce(a.default.Messages.FRIEND_REQUEST_PENDING_A11Y_ANNOUNCEMENT.format({
            username: e.relationship.user.username
        })), n.showPendingNotification(e.relationship.user))
    }

    function I(e) {
        let {
            user: _
        } = e;
        t.AccessibilityAnnouncer.announce(a.default.Messages.FRIEND_REQUEST_ACCEPTED_A11Y_ANNOUNCEMENT.format({
            username: _.username
        })), n.showAcceptedNotification(_)
    }
    class s extends o.default {
        constructor(...e) {
            super(...e), this.actions = {
                RELATIONSHIP_ADD: i,
                FRIEND_REQUEST_ACCEPTED: I
            }
        }
    }
    var T = new s
}