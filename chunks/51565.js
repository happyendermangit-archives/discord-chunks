function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return a
        }
    }), s("222007");
    var r = s("614858"),
        o = s("883474");
    let l = new Set([r.BadgeCategory.PARTNERED, r.BadgeCategory.VERIFIED, r.BadgeCategory.VERIFIED_AND_PARTNERED, r.BadgeCategory.COMMUNITY, r.BadgeCategory.DISCOVERABLE]);

    function a(e) {
        if (null == e) return !1;
        let t = (0, o.getGuildTraits)(e),
            s = (0, r.getBadgeCategory)(t);
        return l.has(s)
    }
}