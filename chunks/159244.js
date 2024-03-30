function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("442837"),
        r = n("699516"),
        s = n("594174"),
        a = n("981631");
    t.default = e => {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
            n = (0, i.useStateFromStores)([r.default], () => r.default.getRelationshipType(e.id)),
            o = e.isNonUserBot();
        return e.id !== (null == t ? void 0 : t.id) && n !== a.RelationshipTypes.BLOCKED && !o
    }
}