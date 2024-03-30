function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        getVideoPermission: function() {
            return s
        }
    });
    var r = n("898511"),
        o = n("603473"),
        i = n("306912"),
        a = n("29884");

    function u(e) {
        return (0, r.useStateFromStores)([i.default, a.default], function() {
            return e.isPrivate() || (0, o.canStreamInChannel)(e, i.default, a.default, !1)
        }, [e])
    }

    function s(e) {
        return e.isPrivate() || (0, o.canStreamInChannel)(e, i.default, a.default, !1)
    }
}