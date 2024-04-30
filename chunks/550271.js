function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanBadge: function() {
            return C
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
        R = n("116175");
    let C = e => {
        let {
            badge: t,
            primaryTintColor: n,
            secondaryTintColor: C,
            ...g
        } = e;
        switch (t) {
            case R.ClanBadgeKind.SWORD:
            case R.ClanBadgeKind.SWORD_20:
                return (0, i.jsx)(N.ClanBadgeSword, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.WATER_DROP:
                return (0, i.jsx)(O.ClanBadgeWaterDrop, {
                    primaryTintColor: n,
                    ...g
                });
            case R.ClanBadgeKind.SKULL:
                return (0, i.jsx)(f.ClanBadgeSkull, {
                    primaryTintColor: n,
                    ...g
                });
            case R.ClanBadgeKind.TOADSTOOL:
                return (0, i.jsx)(p.ClanBadgeToadstool, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.MOON:
                return (0, i.jsx)(I.ClanBadgeMoon, {
                    primaryTintColor: n,
                    ...g
                });
            case R.ClanBadgeKind.LIGHTNING:
                return (0, i.jsx)(E.ClanBadgeLightning, {
                    primaryTintColor: n,
                    ...g
                });
            case R.ClanBadgeKind.LEAF:
                return (0, i.jsx)(c.ClanBadgeLeaf, {
                    primaryTintColor: n,
                    ...g
                });
            case R.ClanBadgeKind.HEART:
                return (0, i.jsx)(d.ClanBadgeHeart, {
                    primaryTintColor: n,
                    ...g
                });
            case R.ClanBadgeKind.FIRE:
                return (0, i.jsx)(a.ClanBadgeFire, {
                    primaryTintColor: n,
                    ...g
                });
            case R.ClanBadgeKind.COMPASS:
                return (0, i.jsx)(r.ClanBadgeCompass, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.CROSSHAIRS:
                return (0, i.jsx)(s.ClanBadgeCrosshairs, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.FLOWER:
                return (0, i.jsx)(o.ClanBadgeFlower, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.FORCE:
                return (0, i.jsx)(l.ClanBadgeForce, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.GEM:
                return (0, i.jsx)(u.ClanBadgeGem, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.LAVA:
                return (0, i.jsx)(_.ClanBadgeLava, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.PSYCHIC:
                return (0, i.jsx)(T.ClanBadgePsychic, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.SMOKE:
                return (0, i.jsx)(S.ClanBadgeSmoke, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.SNOW:
                return (0, i.jsx)(h.ClanBadgeSnow, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.SOUND:
                return (0, i.jsx)(A.ClanBadgeSound, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                });
            case R.ClanBadgeKind.SUN:
                return (0, i.jsx)(m.ClanBadgeSun, {
                    primaryTintColor: n,
                    secondaryTintColor: C,
                    ...g
                })
        }
        return null
    }
}