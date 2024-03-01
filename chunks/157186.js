function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowMembershipVerificationGate: function() {
            return d
        },
        useShowMemberVerificationGate: function() {
            return u
        }
    }), n("222007");
    var s = n("446674"),
        i = n("26989"),
        r = n("305961"),
        a = n("88093"),
        o = n("697218");

    function d(e) {
        let [t, n, s, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, a.default, o.default, i.default];
        if (null == e) return !1;
        let u = t.getGuild(e),
            {
                notClaimed: l
            } = n.getCheck(e),
            f = s.getCurrentUser(),
            _ = !1;
        if (null != f) {
            var c, g;
            _ = null !== (g = null === (c = d.getMember(e, f.id)) || void 0 === c ? void 0 : c.isPending) && void 0 !== g && g
        }
        let m = _ || l;
        return m && !!(null == u ? void 0 : u.hasVerificationGate())
    }

    function u(e) {
        return (0, s.useStateFromStores)([r.default, a.default, o.default, i.default], () => null != e && d(e, [r.default, a.default, o.default, i.default]), [e])
    }
}