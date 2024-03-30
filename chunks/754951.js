function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("898511"),
        o = n("776982"),
        i = n("208454"),
        a = n("281767");
    t.default = function(e) {
        var t = (0, r.useStateFromStores)([i.default], function() {
                return i.default.getCurrentUser()
            }),
            n = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getRelationshipType(e.id)
            }),
            u = e.isNonUserBot();
        return e.id !== (null == t ? void 0 : t.id) && n !== a.RelationshipTypes.BLOCKED && !u
    }
}