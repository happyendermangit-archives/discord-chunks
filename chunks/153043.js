function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRoleSubscriptionEmoji: function() {
            return i
        },
        isPurchasableRoleSubscriptionEmoji: function() {
            return r
        },
        isUnusableRoleSubscriptionEmoji: function() {
            return a
        }
    });
    var s = n("256941");

    function i(e, t) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == t) return !1;
        let n = s.default.getSubscriptionRoles(t);
        return e.roles.some(e => n.has(e))
    }

    function r(e) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
        let t = s.default.getPurchasableSubscriptionRoles(e.guildId);
        return e.roles.some(e => t.has(e))
    }

    function a(e, t) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
        if (r(e)) {
            let n = s.default.getUserSubscriptionRoles(e.guildId),
                i = e.roles.some(e => n.has(e)),
                r = t === e.guildId,
                a = r && s.default.getUserIsAdmin(e.guildId);
            if (!(i || a)) return !0
        }
        return !1
    }
}