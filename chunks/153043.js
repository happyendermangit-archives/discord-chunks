function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRoleSubscriptionEmoji: function() {
            return s
        },
        isPurchasableRoleSubscriptionEmoji: function() {
            return r
        },
        isUnusableRoleSubscriptionEmoji: function() {
            return a
        }
    });
    var i = n("256941");

    function s(e, t) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == t) return !1;
        let n = i.default.getSubscriptionRoles(t);
        return e.roles.some(e => n.has(e))
    }

    function r(e) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
        let t = i.default.getPurchasableSubscriptionRoles(e.guildId);
        return e.roles.some(e => t.has(e))
    }

    function a(e, t) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
        if (r(e)) {
            let n = i.default.getUserSubscriptionRoles(e.guildId),
                s = e.roles.some(e => n.has(e)),
                r = t === e.guildId,
                a = r && i.default.getUserIsAdmin(e.guildId);
            if (!(s || a)) return !0
        }
        return !1
    }
}