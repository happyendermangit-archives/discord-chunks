function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCurrentUserGuildBadgeStatus: function() {
            return c
        }
    });
    var r = n("898511"),
        o = n("957808"),
        i = n("208454"),
        a = n("745561"),
        u = n("656167"),
        s = n("917211"),
        l = n("281767");

    function c(e) {
        var t = (0, u.useIsMemberVerificationManualApproval)(null != e ? e : l.EMPTY_STRING_SNOWFLAKE_ID),
            n = (0, r.useStateFromStores)([s.default, i.default, o.default], function() {
                var t = s.default.getRequest(e),
                    n = i.default.getCurrentUser();
                if (null != n && null != t && t.userId === n.id) {
                    var r = o.default.getMember(e, t.userId);
                    if (!(null != r && !r.isPending) || (0, a.isActionedAndNotAcked)(t)) return t.applicationStatus
                }
            }, [e]);
        return t ? n : void 0
    }
}