function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanBadge: function() {
            return T
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("496532"),
        s = n("72977"),
        a = n("775259"),
        o = n("907120"),
        l = n("533122"),
        u = n("874706"),
        d = n("775101"),
        _ = n("718572"),
        c = n("496223"),
        E = n("846262"),
        I = n("116175");
    let T = e => {
        let {
            badge: t,
            primaryTintColor: n,
            secondaryTintColor: T,
            ...f
        } = e;
        switch (t) {
            case I.ClanBadgeKind.SWORD:
            case I.ClanBadgeKind.SWORD_10:
            case I.ClanBadgeKind.SWORD_11:
            case I.ClanBadgeKind.SWORD_12:
            case I.ClanBadgeKind.SWORD_13:
            case I.ClanBadgeKind.SWORD_14:
            case I.ClanBadgeKind.SWORD_15:
            case I.ClanBadgeKind.SWORD_16:
            case I.ClanBadgeKind.SWORD_17:
            case I.ClanBadgeKind.SWORD_18:
            case I.ClanBadgeKind.SWORD_19:
            case I.ClanBadgeKind.SWORD_20:
                return (0, i.jsx)(_.ClanBadgeSword, {
                    primaryTintColor: n,
                    secondaryTintColor: T,
                    ...f
                });
            case I.ClanBadgeKind.WATER_DROP:
                return (0, i.jsx)(E.ClanBadgeWaterDrop, {
                    primaryTintColor: n,
                    ...f
                });
            case I.ClanBadgeKind.SKULL:
                return (0, i.jsx)(d.ClanBadgeSkull, {
                    primaryTintColor: n,
                    ...f
                });
            case I.ClanBadgeKind.TOADSTOOL:
                return (0, i.jsx)(c.ClanBadgeToadstool, {
                    primaryTintColor: n,
                    secondaryTintColor: T,
                    ...f
                });
            case I.ClanBadgeKind.MOON:
                return (0, i.jsx)(u.ClanBadgeMoon, {
                    primaryTintColor: n,
                    ...f
                });
            case I.ClanBadgeKind.LIGHTNING:
                return (0, i.jsx)(l.ClanBadgeLightning, {
                    primaryTintColor: n,
                    ...f
                });
            case I.ClanBadgeKind.LEAF:
                return (0, i.jsx)(o.ClanBadgeLeaf, {
                    primaryTintColor: n,
                    ...f
                });
            case I.ClanBadgeKind.HEART:
                return (0, i.jsx)(a.ClanBadgeHeart, {
                    primaryTintColor: n,
                    ...f
                });
            case I.ClanBadgeKind.FIRE:
                return (0, i.jsx)(s.ClanBadgeFire, {
                    primaryTintColor: n,
                    ...f
                });
            case I.ClanBadgeKind.COMPASS:
                return (0, i.jsx)(r.ClanBadgeCompass, {
                    primaryTintColor: n,
                    secondaryTintColor: T,
                    ...f
                })
        }
        return null
    }
}