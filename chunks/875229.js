function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canReviewGuildMemberApplications: function() {
            return f
        },
        useCanReviewGuildMemberApplications: function() {
            return _
        }
    });
    var i = n("884691"),
        s = n("446674"),
        r = n("305961"),
        a = n("957255"),
        o = n("50926"),
        l = n("526253"),
        u = n("520141"),
        d = n("567054"),
        c = n("49111");

    function f(e) {
        let t = r.default.getGuild(e);
        return null != t && (0, u.isMemberVerificationManualApproval)(e) && a.default.can(c.Permissions.KICK_MEMBERS, t)
    }

    function _(e) {
        let t = (0, u.useIsMemberVerificationManualApproval)(e),
            n = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(e)),
            f = null != n && t && a.default.can(c.Permissions.KICK_MEMBERS, n) && n.hasVerificationGate(),
            _ = (0, s.useStateFromStores)([l.default], () => l.default.get(e), [e]);
        i.useEffect(() => {
            f && o.default.fetchVerificationForm(e)
        }, [f, e]);
        let h = i.useMemo(() => {
            var e;
            return (null !== (e = null == _ ? void 0 : _.formFields) && void 0 !== e ? e : []).some(e => !(0, d.isTermsFormField)(e))
        }, [null == _ ? void 0 : _.formFields]);
        return f && h
    }
}