function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canReviewGuildMemberApplications: function() {
            return c
        },
        useCanReviewGuildMemberApplications: function() {
            return E
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("430824"),
        a = n("496675"),
        o = n("863249"),
        l = n("944163"),
        u = n("467138"),
        d = n("246364"),
        _ = n("981631");

    function c(e) {
        let t = s.default.getGuild(e);
        return null != t && (0, u.isMemberVerificationManualApproval)(e) && a.default.can(_.Permissions.KICK_MEMBERS, t)
    }

    function E(e) {
        let t = (0, u.useIsMemberVerificationManualApproval)(e),
            n = (0, r.useStateFromStores)([s.default], () => s.default.getGuild(e)),
            c = null != n && t && a.default.can(_.Permissions.KICK_MEMBERS, n) && n.hasVerificationGate(),
            E = (0, r.useStateFromStores)([l.default], () => l.default.get(e), [e]);
        i.useEffect(() => {
            c && o.default.fetchVerificationForm(e)
        }, [c, e]);
        let I = i.useMemo(() => {
            var e;
            return (null !== (e = null == E ? void 0 : E.formFields) && void 0 !== e ? e : []).some(e => !(0, d.isTermsFormField)(e))
        }, [null == E ? void 0 : E.formFields]);
        return c && I
    }
}