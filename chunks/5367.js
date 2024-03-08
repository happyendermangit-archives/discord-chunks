function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCurrentUserGuildBadgeStatus: function() {
            return d
        }
    });
    var i = n("446674"),
        l = n("26989"),
        a = n("697218"),
        s = n("591023"),
        r = n("520141"),
        o = n("982527"),
        u = n("49111");

    function d(e) {
        let t = (0, r.useIsMemberVerificationManualApproval)(null != e ? e : u.EMPTY_STRING_SNOWFLAKE_ID),
            n = (0, i.useStateFromStores)([o.default, a.default, l.default], () => {
                let t = o.default.getRequest(e),
                    n = a.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = l.default.getMember(e, t.userId),
                    r = null != i && !i.isPending;
                if (!r || (0, s.isActionedAndNotAcked)(t)) return t.applicationStatus
            }, [e]);
        return t ? n : void 0
    }
}