function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getVideoPermission: function() {
            return u
        }
    });
    var a = n("446674"),
        r = n("223913"),
        s = n("305961"),
        i = n("957255");

    function l(e) {
        let t = (0, a.useStateFromStores)([s.default, i.default], () => e.isPrivate() || (0, r.canStreamInChannel)(e, s.default, i.default, !1), [e]);
        return t
    }

    function u(e) {
        return e.isPrivate() || (0, r.canStreamInChannel)(e, s.default, i.default, !1)
    }
}