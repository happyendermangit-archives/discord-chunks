function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("442837"),
        r = n("41776"),
        a = n("695346"),
        s = n("314897"),
        o = n("271383"),
        l = n("699516");

    function u(e, t) {
        let n = (0, i.useStateFromStores)([s.default], () => s.default.getId() === e),
            u = (0, i.useStateFromStores)([r.default], () => null != t && r.default.isLurking(t)),
            d = a.RestrictedGuildIds.useSetting();
        return (0, i.useStateFromStores)([l.default, o.default], () => !n && !u && (l.default.isFriend(e) || null != o.default.memberOf(e).find(e => !d.includes(e))))
    }
}