function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        getGuildIdForGenericRedirect: function() {
            return s
        }
    });
    var r = n("898511"),
        o = n("63116"),
        i = n("652709"),
        a = n("281767");

    function u(e) {
        var t = (0, r.useStateFromStores)([o.default], function() {
            return o.default.getGuildId()
        });
        return null != t ? t : e.getGuildId()
    }

    function s(e) {
        return o.default.getGuildId() !== a.FAVORITES ? e.getGuildId() : i.default.isFavorite(e.id) || e.isThread() && i.default.isFavorite(e.parent_id) ? a.FAVORITES : e.getGuildId()
    }
}