function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("898511"),
        o = n("935741"),
        i = n("29884"),
        a = n("162677"),
        u = n("523018"),
        s = n("353934"),
        l = n("487181");

    function c(e) {
        var t, n;
        return t = (0, r.useStateFromStoresArray)([l.default], function() {
            return u.default.keys(l.default.getStageInstancesByGuild(e))
        }, [e]), n = (0, r.useStateFromStoresArray)([o.default], function() {
            return t.map(function(e) {
                return o.default.getChannel(e)
            }).filter(a.isNotNullish)
        }, [t]), (0, r.useStateFromStoresArray)([i.default], function() {
            return n.filter(function(e) {
                return i.default.can(s.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)
            })
        }, [n])
    }
}