function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildEmojiColorPalette: function() {
            return s
        },
        buildPlatformedThemedEmojiColorPalette: function() {
            return u
        }
    });
    var r = n("622908"),
        o = n("689952"),
        i = n("278778"),
        a = function(e) {
            var t, n, i = e.colors,
                a = e.saturationFactor,
                u = void 0 === a ? 1 : a;
            if (null == i || i.length < 1) return null;
            var s = (0, o.findColorByHsv)(i),
                l = r.default.parseString("#ffffff");
            if (null == l) return null;
            var c = r.default.parseString("#36393e");
            if (null == c) return null;
            var f = r.default.parseString(s);
            if (null == f) return null;
            var d = (0, o.rawRgbToHsl)(f.red, f.blue, f.green),
                _ = null !== (t = (0, o.getAccessibleColor)({
                    colors: [(0, o.getColorLightnessAdjusted)(f, .6, !0), l],
                    ratio: 3,
                    saturationFactor: u
                })) && void 0 !== t ? t : f,
                E = null !== (n = (0, o.getAccessibleColor)({
                    colors: [(0, o.getColorLightnessAdjusted)(f, .6, !1), c],
                    ratio: 5,
                    saturationFactor: u
                })) && void 0 !== n ? n : f,
                p = (0, o.getAccessibleColor)({
                    colors: [f, l],
                    ratio: 7,
                    saturationFactor: u
                }),
                m = (0, o.getAccessibleColor)({
                    colors: [f, c],
                    ratio: 7,
                    saturationFactor: u
                });
            return {
                LIGHT: {
                    accentColor: null == p ? void 0 : p.toHexString(),
                    backgroundColor: (0, o.getSaturatedColorHex)({
                        colorRGB: _,
                        saturationFactor: u
                    }),
                    highlightColor: null == f ? void 0 : f.toHexString(),
                    opacity: (null == d ? void 0 : d.saturation) < .1 ? .35 : .1
                },
                DARK: {
                    accentColor: null == m ? void 0 : m.toHexString(),
                    backgroundColor: (0, o.getSaturatedColorHex)({
                        colorRGB: E,
                        saturationFactor: u
                    }),
                    highlightColor: null == f ? void 0 : f.toHexString(),
                    opacity: (null == d ? void 0 : d.saturation) < .1 ? .5 : .2
                }
            }
        },
        u = function(e) {
            var t = e.colors,
                n = e.saturationFactor,
                r = e.shouldProcessMobileColors,
                o = a({
                    colors: t,
                    saturationFactor: void 0 === n ? 1 : n
                });
            return i.default.applyPlatformToThemedEmojiColorPalette({
                palette: o,
                shouldProcessMobileColors: void 0 !== r && r
            })
        },
        s = function(e, t, n) {
            if (null == e || e.length < 1) return null;
            var r, o = u({
                    colors: e,
                    saturationFactor: t
                }),
                i = n ? null == o ? void 0 : o.DARK : null == o ? void 0 : o.LIGHT;
            return {
                backgroundColor: null == i ? void 0 : i.backgroundColor,
                accentColor: null == i ? void 0 : i.accentColor,
                highlightColor: null == i ? void 0 : i.highlightColor,
                opacity: null !== (r = null == i ? void 0 : i.opacity) && void 0 !== r ? r : .15
            }
        }
}