function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        },
        getGuildIdForGenericRedirect: function() {
            return l
        }
    });
    var i = n("446674"),
        s = n("162771"),
        r = n("379881"),
        a = n("49111");

    function o(e) {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getGuildId());
        return null != t ? t : e.getGuildId()
    }

    function l(e) {
        return s.default.getGuildId() !== a.FAVORITES ? e.getGuildId() : r.default.isFavorite(e.id) || e.isThread() && r.default.isFavorite(e.parent_id) ? a.FAVORITES : e.getGuildId()
    }
}