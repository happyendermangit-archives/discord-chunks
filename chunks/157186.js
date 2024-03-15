function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowMembershipVerificationGate: function() {
            return l
        },
        useShowMemberVerificationGate: function() {
            return u
        }
    }), n("222007");
    var i = n("446674"),
        s = n("26989"),
        r = n("305961"),
        a = n("88093"),
        o = n("697218");

    function l(e) {
        let [t, n, i, l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, a.default, o.default, s.default];
        if (null == e) return !1;
        let u = t.getGuild(e),
            {
                notClaimed: d
            } = n.getCheck(e),
            c = i.getCurrentUser(),
            f = !1;
        if (null != c) {
            var _, E;
            f = null !== (E = null === (_ = l.getMember(e, c.id)) || void 0 === _ ? void 0 : _.isPending) && void 0 !== E && E
        }
        let h = f || d;
        return h && !!(null == u ? void 0 : u.hasVerificationGate())
    }

    function u(e) {
        return (0, i.useStateFromStores)([r.default, a.default, o.default, s.default], () => null != e && l(e, [r.default, a.default, o.default, s.default]), [e])
    }
}