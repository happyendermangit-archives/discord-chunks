function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("470079"),
        a = n("898511"),
        r = n("322997"),
        i = n("208454");

    function o(e) {
        var t = (0, a.useStateFromStores)([i.default], function() {
            return i.default.getUser(null == e ? void 0 : e.creator_id)
        }, [e]);
        return l.useEffect(function() {
            null == t && (null == e ? void 0 : e.creator_id) != null && r.default.requestMembersById(e.guild_id, e.creator_id)
        }, [e, t]), t
    }
}