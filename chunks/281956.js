function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowMembershipVerificationGate: function() {
            return l
        },
        useShowMemberVerificationGate: function() {
            return u
        }
    }), n("47120");
    var i = n("442837"),
        r = n("271383"),
        a = n("430824"),
        s = n("607744"),
        o = n("594174");

    function l(e) {
        let [t, n, i, l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, s.default, o.default, r.default];
        if (null == e) return !1;
        let u = t.getGuild(e),
            {
                notClaimed: d
            } = n.getCheck(e),
            _ = i.getCurrentUser(),
            c = !1;
        if (null != _) {
            var E, I;
            c = null !== (I = null === (E = l.getMember(e, _.id)) || void 0 === E ? void 0 : E.isPending) && void 0 !== I && I
        }
        return (c || d) && !!(null == u ? void 0 : u.hasVerificationGate())
    }

    function u(e) {
        return (0, i.useStateFromStores)([a.default, s.default, o.default, r.default], () => null != e && l(e, [a.default, s.default, o.default, r.default]), [e])
    }
}