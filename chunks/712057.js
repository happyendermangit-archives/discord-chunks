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
        a = n("563114");
    let s = e => {
            var t, n;
            let {
                colors: a,
                saturationFactor: s = 1
            } = e;
            if (null == a || a.length < 1) return null;
            let o = (0, r.findColorByHsv)(a),
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
                    saturationFactor: s
                })) && void 0 !== t ? t : d,
                E = null !== (n = (0, r.getAccessibleColor)({
                    colors: [(0, r.getColorLightnessAdjusted)(d, .6, !1), u],
                    ratio: 5,
                    saturationFactor: s
                })) && void 0 !== n ? n : d,
                I = (0, r.getAccessibleColor)({
                    colors: [d, l],
                    ratio: 7,
                    saturationFactor: s
                }),
                T = (0, r.getAccessibleColor)({
                    colors: [d, u],
                    ratio: 7,
                    saturationFactor: s
                });
            return {
                LIGHT: {
                    accentColor: null == I ? void 0 : I.toHexString(),
                    backgroundColor: (0, r.getSaturatedColorHex)({
                        colorRGB: c,
                        saturationFactor: s
                    }),
                    highlightColor: null == d ? void 0 : d.toHexString(),
                    opacity: (null == _ ? void 0 : _.saturation) < .1 ? .35 : .1
                },
                DARK: {
                    accentColor: null == T ? void 0 : T.toHexString(),
                    backgroundColor: (0, r.getSaturatedColorHex)({
                        colorRGB: E,
                        saturationFactor: s
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
            } = e, r = s({
                colors: t,
                saturationFactor: n
            });
            return a.default.applyPlatformToThemedEmojiColorPalette({
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
                a = n ? null == r ? void 0 : r.DARK : null == r ? void 0 : r.LIGHT;
            return {
                backgroundColor: null == a ? void 0 : a.backgroundColor,
                accentColor: null == a ? void 0 : a.accentColor,
                highlightColor: null == a ? void 0 : a.highlightColor,
                opacity: null !== (i = null == a ? void 0 : a.opacity) && void 0 !== i ? i : .15
            }
        }
}