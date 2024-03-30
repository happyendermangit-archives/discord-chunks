function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("950175"),
        a = n("428920");

    function u() {
        var e = (0, o.useStateFromStores)([a.default], function() {
            return a.default.hasFetchedSubscriptions()
        });
        return r.useEffect(function() {
            !e && (0, i.fetchSubscriptions)()
        }, [e]), e
    }
}