function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canReviewGuildMemberApplications: function() {
            return d
        },
        useCanReviewGuildMemberApplications: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("306912"),
        a = n("29884"),
        u = n("475720"),
        s = n("24101"),
        l = n("656167"),
        c = n("599527"),
        f = n("281767");

    function d(e) {
        var t = i.default.getGuild(e);
        return null != t && (0, l.isMemberVerificationManualApproval)(e) && a.default.can(f.Permissions.KICK_MEMBERS, t)
    }

    function _(e) {
        var t = (0, l.useIsMemberVerificationManualApproval)(e),
            n = (0, o.useStateFromStores)([i.default], function() {
                return i.default.getGuild(e)
            }),
            d = null != n && t && a.default.can(f.Permissions.KICK_MEMBERS, n) && n.hasVerificationGate(),
            _ = (0, o.useStateFromStores)([s.default], function() {
                return s.default.get(e)
            }, [e]);
        r.useEffect(function() {
            d && u.default.fetchVerificationForm(e)
        }, [d, e]);
        var E = r.useMemo(function() {
            var e;
            return (null !== (e = null == _ ? void 0 : _.formFields) && void 0 !== e ? e : []).some(function(e) {
                return !(0, c.isTermsFormField)(e)
            })
        }, [null == _ ? void 0 : _.formFields]);
        return d && E
    }
}