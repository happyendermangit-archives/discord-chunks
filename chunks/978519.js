function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseRoleSubscriptionIAP: function() {
            return l
        }
    }), n("470079"), n("399606");
    var i = n("430824"),
        r = n("358085"),
        a = n("341653"),
        s = n("981631");
    let o = [s.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

    function l(e) {
        if (!(0, r.isIOS)()) return !1;
        let t = (0, a.getSystemVersion)();
        if (null == t || -1 === function(e, t) {
                let n = e.split(".").map(Number),
                    i = t.split(".").map(Number),
                    r = Math.max(n.length, i.length);
                for (let e = 0; e < r; e++) {
                    var a, s;
                    let t = null !== (a = n[e]) && void 0 !== a ? a : 0,
                        r = null !== (s = i[e]) && void 0 !== s ? s : 0;
                    if (t < r) return -1;
                    if (t > r) return 1
                }
                return 0
            }(t, "13.2")) return !1;
        let n = i.default.getGuild(e);
        return !!(null != n && o.every(e => n.hasFeature(e))) || !1
    }
}