function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("446674"),
        l = n("27618"),
        a = n("697218"),
        s = n("49111"),
        r = e => {
            let t = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
                n = (0, i.useStateFromStores)([l.default], () => l.default.getRelationshipType(e.id)),
                r = e.isNonUserBot();
            return e.id !== (null == t ? void 0 : t.id) && n !== s.RelationshipTypes.BLOCKED && !r
        }
}