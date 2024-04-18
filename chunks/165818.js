function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("271383"),
        a = n("246866");

    function o(e) {
        let {
            user: t,
            guild: n,
            onClose: o
        } = e, l = (0, r.useStateFromStores)([s.default], () => null != n ? s.default.getMember(n.id, t.id) : null);
        return null == n || null == l || 0 === l.roles.length ? null : (0, i.jsx)(a.default, {
            guild: n,
            user: t,
            userRoles: l.roles,
            onClose: o
        })
    }
}