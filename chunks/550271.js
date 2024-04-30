function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanBadge: function() {
            return g
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("496532"),
        s = n("514904"),
        a = n("72977"),
        o = n("746479"),
        l = n("419643"),
        u = n("561015"),
        d = n("775259"),
        _ = n("283107"),
        c = n("907120"),
        E = n("533122"),
        I = n("874706"),
        T = n("137411"),
        f = n("775101"),
        S = n("933632"),
        h = n("158188"),
        A = n("66334"),
        m = n("215635"),
        N = n("718572"),
        p = n("496223"),
        O = n("846262"),
        R = n("926372"),
        C = n("116175");
    let g = e => {
        let {
            badge: t,
            primaryTintColor: n,
            secondaryTintColor: g,
            ...L
        } = e;
        switch (t) {
            case C.ClanBadgeKind.SWORD:
                return (0, i.jsx)(N.ClanBadgeSword, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.WATER_DROP:
                return (0, i.jsx)(O.ClanBadgeWaterDrop, {
                    primaryTintColor: n,
                    ...L
                });
            case C.ClanBadgeKind.SKULL:
                return (0, i.jsx)(f.ClanBadgeSkull, {
                    primaryTintColor: n,
                    ...L
                });
            case C.ClanBadgeKind.TOADSTOOL:
                return (0, i.jsx)(p.ClanBadgeToadstool, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.MOON:
                return (0, i.jsx)(I.ClanBadgeMoon, {
                    primaryTintColor: n,
                    ...L
                });
            case C.ClanBadgeKind.LIGHTNING:
                return (0, i.jsx)(E.ClanBadgeLightning, {
                    primaryTintColor: n,
                    ...L
                });
            case C.ClanBadgeKind.LEAF:
                return (0, i.jsx)(c.ClanBadgeLeaf, {
                    primaryTintColor: n,
                    ...L
                });
            case C.ClanBadgeKind.HEART:
                return (0, i.jsx)(d.ClanBadgeHeart, {
                    primaryTintColor: n,
                    ...L
                });
            case C.ClanBadgeKind.FIRE:
                return (0, i.jsx)(a.ClanBadgeFire, {
                    primaryTintColor: n,
                    ...L
                });
            case C.ClanBadgeKind.COMPASS:
                return (0, i.jsx)(r.ClanBadgeCompass, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.CROSSHAIRS:
                return (0, i.jsx)(s.ClanBadgeCrosshairs, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.FLOWER:
                return (0, i.jsx)(o.ClanBadgeFlower, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.FORCE:
                return (0, i.jsx)(l.ClanBadgeForce, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.GEM:
                return (0, i.jsx)(u.ClanBadgeGem, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.LAVA:
                return (0, i.jsx)(_.ClanBadgeLava, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.PSYCHIC:
                return (0, i.jsx)(T.ClanBadgePsychic, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.SMOKE:
                return (0, i.jsx)(S.ClanBadgeSmoke, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.SNOW:
                return (0, i.jsx)(h.ClanBadgeSnow, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.SOUND:
                return (0, i.jsx)(A.ClanBadgeSound, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.SUN:
                return (0, i.jsx)(m.ClanBadgeSun, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                });
            case C.ClanBadgeKind.WIND:
                return (0, i.jsx)(R.ClanBadgeWind, {
                    primaryTintColor: n,
                    secondaryTintColor: g,
                    ...L
                })
        }
        return null
    }
}