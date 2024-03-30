function(e, t, n) {
    "use strict";
    var r, o, i, a, u;
    n.r(t), n.d(t, {
        FreemiumAppIconIds: function() {
            return r
        },
        PremiumAppIconIds: function() {
            return o
        }
    });
    (r || (r = {})).DEFAULT = "AppIcon", (a = o || (o = {})).BRAND_DARK = "BrandDarkIcon", a.BRAND_INVERTED = "BrandInvertedIcon", a.MATTE_LIGHT = "MatteLightIcon", a.MATTE_DARK = "MatteDarkIcon", a.PASTEL = "PastelIcon", a.PIRATE = "PirateIcon", a.CAMO = "CamoIcon", a.SUNSET = "SunsetIcon", a.GALAXY = "GalaxyIcon", a.Y2K = "Y2KIcon", a.CHERRY_BLOSSOM = "CherryBlossomIcon", a.BEANIE = "BeanieIcon", a.GAMING = "GamingIcon", a.CIRCUIT = "CircuitIcon", a.HOLO_WAVES = "HoloWavesIcon", a.BLUSH = "BlushIcon", a.ANGRY = "AngryIcon", a.MANGA = "MangaIcon", a.CONTROLLER = "ControllerIcon", a.MUSHROOM = "MushroomIcon", (u = i || (i = {})).DRIP = "DripIcon", u.SLIMY = "SlimyIcon", u.ZOMBIE = "ZombieIcon", u.CLYDE_STEIN = "ClydeSteinIcon", ! function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        };
    }({}, r, o, i)
}