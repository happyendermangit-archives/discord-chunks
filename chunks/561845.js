function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("446674"),
        i = n("267567"),
        a = n("845579"),
        s = n("271938"),
        r = n("26989"),
        o = n("27618");

    function u(e, t) {
        let n = (0, l.useStateFromStores)([s.default], () => s.default.getId() === e),
            u = (0, l.useStateFromStores)([i.default], () => null != t && i.default.isLurking(t)),
            d = a.RestrictedGuildIds.useSetting();
        return (0, l.useStateFromStores)([o.default, r.default], () => !n && !u && (o.default.isFriend(e) || null != r.default.memberOf(e).find(e => !d.includes(e))))
    }
}