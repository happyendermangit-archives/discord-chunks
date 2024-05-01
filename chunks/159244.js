function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("442837"),
        r = n("699516"),
        a = n("594174"),
        s = n("981631");
    t.default = e => {
        let t = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
            n = (0, i.useStateFromStores)([r.default], () => r.default.getRelationshipType(e.id)),
            o = e.isNonUserBot();
        return e.id !== (null == t ? void 0 : t.id) && n !== s.RelationshipTypes.BLOCKED && !o
    }
}