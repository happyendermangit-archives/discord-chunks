function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l, u, d;
    n.r(t), n.d(t, {
        InviteTypes: function() {
            return s
        },
        InviteTargetTypes: function() {
            return r
        },
        InstantInviteModalPages: function() {
            return a
        }
    }), (o = i || (i = {})).SENDING = "sending", o.SENT = "sent", o.ERROR = "error", (l = s || (s = {}))[l.GUILD = 0] = "GUILD", l[l.GROUP_DM = 1] = "GROUP_DM", l[l.FRIEND = 2] = "FRIEND", (u = r || (r = {}))[u.STREAM = 1] = "STREAM", u[u.EMBEDDED_APPLICATION = 2] = "EMBEDDED_APPLICATION", u[u.ROLE_SUBSCRIPTIONS_PURCHASE = 3] = "ROLE_SUBSCRIPTIONS_PURCHASE", (d = a || (a = {})).MAIN = "main", d.SETTINGS = "settings", d.GUEST = "guest"
}