function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseRoleSubscriptionIAP: function() {
            return s
        }
    }), n("470079"), n("37295");
    var r = n("306912"),
        o = n("374550"),
        i = n("929187"),
        a = n("281767"),
        u = [a.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

    function s(e) {
        if (!(0, o.isIOS)()) return !1;
        var t = (0, i.getSystemVersion)();
        if (null == t || -1 === function(e, t) {
                for (var n = e.split(".").map(Number), r = t.split(".").map(Number), o = Math.max(n.length, r.length), i = 0; i < o; i++) {
                    var a, u, s = null !== (a = n[i]) && void 0 !== a ? a : 0,
                        l = null !== (u = r[i]) && void 0 !== u ? u : 0;
                    if (s < l) return -1;
                    if (s > l) return 1
                }
                return 0
            }(t, "13.2")) return !1;
        var n = r.default.getGuild(e);
        return !!(null != n && u.every(function(e) {
            return n.hasFeature(e)
        })) || !1
    }
}