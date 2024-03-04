function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseRoleSubscriptionIAP: function() {
            return l
        }
    }), n("884691"), n("65597");
    var i = n("305961"),
        s = n("773336"),
        r = n("954224"),
        a = n("49111");
    let o = [a.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

    function l(e) {
        if (!(0, s.isIOS)()) return !1;
        let t = (0, r.getSystemVersion)();
        if (null == t || -1 === function(e, t) {
                let n = e.split(".").map(Number),
                    i = t.split(".").map(Number),
                    s = Math.max(n.length, i.length);
                for (let e = 0; e < s; e++) {
                    var r, a;
                    let t = null !== (r = n[e]) && void 0 !== r ? r : 0,
                        s = null !== (a = i[e]) && void 0 !== a ? a : 0;
                    if (t < s) return -1;
                    if (t > s) return 1
                }
                return 0
            }(t, "13.2")) return !1;
        let n = i.default.getGuild(e);
        if (null == n) return !1;
        let a = o.every(e => n.hasFeature(e));
        return !!a || !1
    }
}