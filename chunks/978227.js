function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        default: function() {
            return o
        }
    });
    var n = t("470079"),
        s = t("442837"),
        i = t("749210"),
        a = t("594174");

    function o(e) {
        let l = (0, s.useStateFromStores)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
        return n.useEffect(() => {
            null == l && (null == e ? void 0 : e.creator_id) != null && i.default.requestMembersById(e.guild_id, e.creator_id)
        }, [e, l]), l
    }
}