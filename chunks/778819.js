function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("650457"),
        o = n("376033"),
        i = new Set([r.BadgeCategory.PARTNERED, r.BadgeCategory.VERIFIED, r.BadgeCategory.VERIFIED_AND_PARTNERED, r.BadgeCategory.COMMUNITY, r.BadgeCategory.DISCOVERABLE]);

    function a(e) {
        if (null == e) return !1;
        var t = (0, o.getGuildTraits)(e),
            n = (0, r.getBadgeCategory)(t);
        return i.has(n)
    }
}