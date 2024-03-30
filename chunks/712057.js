function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildEmojiColorPalette: function() {
            return l
        },
        buildPlatformedThemedEmojiColorPalette: function() {
            return o
        }
    });
    var i = n("564334"),
        r = n("302221"),
        s = n("563114");
    let a = e => {
            var t, n;
            let {
                colors: s,
                saturationFactor: a = 1
            } = e;
            if (null == s || s.length < 1) return null;
            let o = (0, r.findColorByHsv)(s),
                l = i.default.parseString("#ffffff");
            if (null == l) return null;
            let u = i.default.parseString("#36393e");
            if (null == u) return null;
            let d = i.default.parseString(o);
            if (null == d) return null;
            let _ = (0, r.rawRgbToHsl)(d.red, d.blue, d.green),
                c = null !== (t = (0, r.getAccessibleColor)({
                    colors: [(0, r.getColorLightnessAdjusted)(d, .6, !0), l],
                    ratio: 3,
                    saturationFactor: a
                })) && void 0 !== t ? t : d,
                E = null !== (n = (0, r.getAccessibleColor)({
                    colors: [(0, r.getColorLightnessAdjusted)(d, .6, !1), u],
                    ratio: 5,
                    saturationFactor: a
                })) && void 0 !== n ? n : d,
                I = (0, r.getAccessibleColor)({
                    colors: [d, l],
                    ratio: 7,
                    saturationFactor: a
                }),
                T = (0, r.getAccessibleColor)({
                    colors: [d, u],
                    ratio: 7,
                    saturationFactor: a
                });
            return {
                LIGHT: {
                    accentColor: null == I ? void 0 : I.toHexString(),
                    backgroundColor: (0, r.getSaturatedColorHex)({
                        colorRGB: c,
                        saturationFactor: a
                    }),
                    highlightColor: null == d ? void 0 : d.toHexString(),
                    opacity: (null == _ ? void 0 : _.saturation) < .1 ? .35 : .1
                },
                DARK: {
                    accentColor: null == T ? void 0 : T.toHexString(),
                    backgroundColor: (0, r.getSaturatedColorHex)({
                        colorRGB: E,
                        saturationFactor: a
                    }),
                    highlightColor: null == d ? void 0 : d.toHexString(),
                    opacity: (null == _ ? void 0 : _.saturation) < .1 ? .5 : .2
                }
            }
        },
        o = e => {
            let {
                colors: t,
                saturationFactor: n = 1,
                shouldProcessMobileColors: i = !1
            } = e, r = a({
                colors: t,
                saturationFactor: n
            });
            return s.default.applyPlatformToThemedEmojiColorPalette({
                palette: r,
                shouldProcessMobileColors: i
            })
        },
        l = (e, t, n) => {
            var i;
            if (null == e || e.length < 1) return null;
            let r = o({
                    colors: e,
                    saturationFactor: t
                }),
                s = n ? null == r ? void 0 : r.DARK : null == r ? void 0 : r.LIGHT;
            return {
                backgroundColor: null == s ? void 0 : s.backgroundColor,
                accentColor: null == s ? void 0 : s.accentColor,
                highlightColor: null == s ? void 0 : s.highlightColor,
                opacity: null !== (i = null == s ? void 0 : s.opacity) && void 0 !== i ? i : .15
            }
        }
}