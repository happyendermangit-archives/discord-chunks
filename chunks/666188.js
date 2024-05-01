function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("284363"),
        r = n("854218");
    let a = new Set([i.BadgeCategory.PARTNERED, i.BadgeCategory.VERIFIED, i.BadgeCategory.VERIFIED_AND_PARTNERED, i.BadgeCategory.COMMUNITY, i.BadgeCategory.DISCOVERABLE, i.BadgeCategory.CLAN]);

    function s(e) {
        if (null == e) return !1;
        let t = (0, r.getGuildTraits)(e),
            n = (0, i.getBadgeCategory)(t);
        return a.has(n)
    }
}