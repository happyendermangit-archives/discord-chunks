function(e, l, n) {
    "use strict";
    n.r(l), n.d(l, {
        default: function() {
            return u
        }
    });
    var t = n("884691"),
        s = n("446674"),
        a = n("851387"),
        i = n("697218");

    function u(e) {
        let l = (0, s.useStateFromStores)([i.default], () => i.default.getUser(null == e ? void 0 : e.creator_id), [e]);
        return t.useEffect(() => {
            null == l && (null == e ? void 0 : e.creator_id) != null && a.default.requestMembersById(e.guild_id, e.creator_id)
        }, [e, l]), l
    }
}