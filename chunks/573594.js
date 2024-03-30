function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("898511"),
        o = n("368995"),
        i = n("53867"),
        a = n("217014"),
        u = n("957808"),
        s = n("776982");

    function l(e, t) {
        var n = (0, r.useStateFromStores)([a.default], function() {
                return a.default.getId() === e
            }),
            l = (0, r.useStateFromStores)([o.default], function() {
                return null != t && o.default.isLurking(t)
            }),
            c = i.RestrictedGuildIds.useSetting();
        return (0, r.useStateFromStores)([s.default, u.default], function() {
            return !n && !l && (s.default.isFriend(e) || null != u.default.memberOf(e).find(function(e) {
                return !c.includes(e)
            }))
        })
    }
}