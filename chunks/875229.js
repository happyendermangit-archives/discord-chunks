function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canReviewGuildMemberApplications: function() {
            return _
        },
        useCanReviewGuildMemberApplications: function() {
            return c
        }
    });
    var s = n("884691"),
        i = n("446674"),
        r = n("305961"),
        a = n("957255"),
        o = n("50926"),
        d = n("526253"),
        u = n("520141"),
        l = n("567054"),
        f = n("49111");

    function _(e) {
        let t = r.default.getGuild(e);
        return null != t && (0, u.isMemberVerificationManualApproval)(e) && a.default.can(f.Permissions.KICK_MEMBERS, t)
    }

    function c(e) {
        let t = (0, u.useIsMemberVerificationManualApproval)(e),
            n = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(e)),
            _ = null != n && t && a.default.can(f.Permissions.KICK_MEMBERS, n) && n.hasVerificationGate(),
            c = (0, i.useStateFromStores)([d.default], () => d.default.get(e), [e]);
        s.useEffect(() => {
            _ && o.default.fetchVerificationForm(e)
        }, [_, e]);
        let g = s.useMemo(() => {
            var e;
            return (null !== (e = null == c ? void 0 : c.formFields) && void 0 !== e ? e : []).some(e => !(0, l.isTermsFormField)(e))
        }, [null == c ? void 0 : c.formFields]);
        return _ && g
    }
}