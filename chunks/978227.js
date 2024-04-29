function(e, l, n) {
    "use strict";
    n.r(l), n.d(l, {
        default: function() {
            return u
        }
    });
    var t = n("470079"),
        a = n("442837"),
        s = n("749210"),
        i = n("594174");

    function u(e) {
        let l = (0, a.useStateFromStores)([i.default], () => i.default.getUser(null == e ? void 0 : e.creator_id), [e]);
        return t.useEffect(() => {
            null == l && (null == e ? void 0 : e.creator_id) != null && s.default.requestMembersById(e.guild_id, e.creator_id)
        }, [e, l]), l
    }
}