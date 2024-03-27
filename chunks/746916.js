function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCurrentUserGuildBadgeStatus: function() {
            return d
        }
    });
    var i = n("442837"),
        r = n("271383"),
        s = n("594174"),
        a = n("881952"),
        o = n("467138"),
        l = n("937111"),
        u = n("981631");

    function d(e) {
        let t = (0, o.useIsMemberVerificationManualApproval)(null != e ? e : u.EMPTY_STRING_SNOWFLAKE_ID),
            n = (0, i.useStateFromStores)([l.default, s.default, r.default], () => {
                let t = l.default.getRequest(e),
                    n = s.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = r.default.getMember(e, t.userId);
                if (!(null != i && !i.isPending) || (0, a.isActionedAndNotAcked)(t)) return t.applicationStatus
            }, [e]);
        return t ? n : void 0
    }
}