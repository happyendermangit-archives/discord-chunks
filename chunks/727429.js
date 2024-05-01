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
        a = n("853856"),
        s = n("981631");

    function o(e) {
        let t = (0, i.useStateFromStores)([r.default], () => r.default.getGuildId());
        return null != t ? t : e.getGuildId()
    }

    function l(e) {
        return r.default.getGuildId() !== s.FAVORITES ? e.getGuildId() : a.default.isFavorite(e.id) || e.isThread() && a.default.isFavorite(e.parent_id) ? s.FAVORITES : e.getGuildId()
    }
}