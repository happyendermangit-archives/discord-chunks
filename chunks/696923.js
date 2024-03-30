function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isPurchasableRoleSubscriptionEmoji: function() {
            return i
        },
        isRoleSubscriptionEmoji: function() {
            return o
        },
        isUnusableRoleSubscriptionEmoji: function() {
            return a
        }
    });
    var r = n("983405");

    function o(e, t) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == t) return !1;
        var n = r.default.getSubscriptionRoles(t);
        return e.roles.some(function(e) {
            return n.has(e)
        })
    }

    function i(e) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
        var t = r.default.getPurchasableSubscriptionRoles(e.guildId);
        return e.roles.some(function(e) {
            return t.has(e)
        })
    }

    function a(e, t) {
        if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
        if (i(e)) {
            var n = r.default.getUserSubscriptionRoles(e.guildId),
                o = e.roles.some(function(e) {
                    return n.has(e)
                }),
                a = t === e.guildId && r.default.getUserIsAdmin(e.guildId);
            if (!(o || a)) return !0
        }
        return !1
    }
}