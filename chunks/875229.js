function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canReviewGuildMemberApplications: function() {
            return _
        },
        useCanReviewGuildMemberApplications: function() {
            return f
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

    function _(e) {
        let t = r.default.getGuild(e);
        return null != t && (0, u.isMemberVerificationManualApproval)(e) && a.default.can(c.Permissions.KICK_MEMBERS, t)
    }

    function f(e) {
        let t = (0, u.useIsMemberVerificationManualApproval)(e),
            n = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(e)),
            _ = null != n && t && a.default.can(c.Permissions.KICK_MEMBERS, n) && n.hasVerificationGate(),
            f = (0, s.useStateFromStores)([l.default], () => l.default.get(e), [e]);
        i.useEffect(() => {
            _ && o.default.fetchVerificationForm(e)
        }, [_, e]);
        let E = i.useMemo(() => {
            var e;
            return (null !== (e = null == f ? void 0 : f.formFields) && void 0 !== e ? e : []).some(e => !(0, d.isTermsFormField)(e))
        }, [null == f ? void 0 : f.formFields]);
        return _ && E
    }
}