function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildPlatformedThemedEmojiColorPalette: function() {
            return o
        },
        buildEmojiColorPalette: function() {
            return l
        }
    });
    var i = n("172182"),
        s = n("284679"),
        r = n("61069");
    let a = e => {
            var t, n;
            let {
                colors: r,
                saturationFactor: a = 1
            } = e;
            if (null == r || r.length < 1) return null;
            let o = (0, s.findColorByHsv)(r),
                l = i.default.parseString("#ffffff");
            if (null == l) return null;
            let u = i.default.parseString("#36393e");
            if (null == u) return null;
            let d = i.default.parseString(o);
            if (null == d) return null;
            let c = (0, s.rawRgbToHsl)(d.red, d.blue, d.green),
                f = null !== (t = (0, s.getAccessibleColor)({
                    colors: [(0, s.getColorLightnessAdjusted)(d, .6, !0), l],
                    ratio: 3,
                    saturationFactor: a
                })) && void 0 !== t ? t : d,
                _ = null !== (n = (0, s.getAccessibleColor)({
                    colors: [(0, s.getColorLightnessAdjusted)(d, .6, !1), u],
                    ratio: 5,
                    saturationFactor: a
                })) && void 0 !== n ? n : d,
                h = (0, s.getAccessibleColor)({
                    colors: [d, l],
                    ratio: 7,
                    saturationFactor: a
                }),
                E = (0, s.getAccessibleColor)({
                    colors: [d, u],
                    ratio: 7,
                    saturationFactor: a
                });
            return {
                LIGHT: {
                    accentColor: null == h ? void 0 : h.toHexString(),
                    backgroundColor: (0, s.getSaturatedColorHex)({
                        colorRGB: f,
                        saturationFactor: a
                    }),
                    highlightColor: null == d ? void 0 : d.toHexString(),
                    opacity: (null == c ? void 0 : c.saturation) < .1 ? .35 : .1
                },
                DARK: {
                    accentColor: null == E ? void 0 : E.toHexString(),
                    backgroundColor: (0, s.getSaturatedColorHex)({
                        colorRGB: _,
                        saturationFactor: a
                    }),
                    highlightColor: null == d ? void 0 : d.toHexString(),
                    opacity: (null == c ? void 0 : c.saturation) < .1 ? .5 : .2
                }
            }
        },
        o = e => {
            let {
                colors: t,
                saturationFactor: n = 1,
                shouldProcessMobileColors: i = !1
            } = e, s = a({
                colors: t,
                saturationFactor: n
            });
            return r.default.applyPlatformToThemedEmojiColorPalette({
                palette: s,
                shouldProcessMobileColors: i
            })
        },
        l = (e, t, n) => {
            var i;
            if (null == e || e.length < 1) return null;
            let s = o({
                    colors: e,
                    saturationFactor: t
                }),
                r = n ? null == s ? void 0 : s.DARK : null == s ? void 0 : s.LIGHT;
            return {
                backgroundColor: null == r ? void 0 : r.backgroundColor,
                accentColor: null == r ? void 0 : r.accentColor,
                highlightColor: null == r ? void 0 : r.highlightColor,
                opacity: null !== (i = null == r ? void 0 : r.opacity) && void 0 !== i ? i : .15
            }
        }
}