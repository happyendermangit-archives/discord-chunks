function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("780384"),
        r = n("147913"),
        a = n("844070"),
        s = n("981631"),
        o = n("689938");

    function l(e) {
        e.relationship.type === s.RelationshipTypes.PENDING_INCOMING && (i.AccessibilityAnnouncer.announce(o.default.Messages.FRIEND_REQUEST_PENDING_A11Y_ANNOUNCEMENT.format({
            username: e.relationship.user.username
        })), a.showPendingNotification(e.relationship.user))
    }

    function u(e) {
        let {
            user: t
        } = e;
        i.AccessibilityAnnouncer.announce(o.default.Messages.FRIEND_REQUEST_ACCEPTED_A11Y_ANNOUNCEMENT.format({
            username: t.username
        })), a.showAcceptedNotification(t)
    }
    class d extends r.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                RELATIONSHIP_ADD: l,
                FRIEND_REQUEST_ACCEPTED: u
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new d
}