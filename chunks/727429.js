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
    var i = n("442837"),
        r = n("914010"),
        s = n("853856"),
        a = n("981631");

    function o(e) {
        let t = (0, i.useStateFromStores)([r.default], () => r.default.getGuildId());
        return null != t ? t : e.getGuildId()
    }

    function l(e) {
        return r.default.getGuildId() !== a.FAVORITES ? e.getGuildId() : s.default.isFavorite(e.id) || e.isThread() && s.default.isFavorite(e.parent_id) ? a.FAVORITES : e.getGuildId()
    }
}