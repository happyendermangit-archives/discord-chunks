function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        useProfileThemeValues: function() {
            return E
        },
        getProfileTheme: function() {
            return T
        },
        getValueInColorGradientByPercentage: function() {
            return A
        },
        useAvatarBorderColor: function() {
            return p
        },
        calculateButtonColor: function() {
            return R
        },
        useMessageInputBorderColor: function() {
            return v
        },
        useDividerColor: function() {
            return I
        }
    }), r("222007");
    var n = r("884691"),
        o = r("917351"),
        u = r("509043"),
        l = r("65597"),
        i = r("669491"),
        a = r("819855"),
        s = r("206230"),
        c = r("449918"),
        f = r("172182"),
        d = r("49111");

    function E(e) {
        let t = (0, l.useStateFromStores)([s.default], () => s.default.saturation);
        return (0, n.useMemo)(() => null == e ? null : {
            overlaySyncedWithUserTheme: i.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            overlay: i.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            sectionBox: i.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            messageInputBorder: i.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            dividerOpacity: e === i.default.themes.DARK ? .24 : .12,
            noteBackgroundColor: i.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            profileBodyBackgroundHover: i.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            rolePillBackgroundColor: i.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            rolePillBorderColor: i.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            icon: i.default.colors.INTERACTIVE_NORMAL.resolve({
                theme: e,
                saturation: t
            }).hsl()
        }, [e, t])
    }

    function T(e) {
        if (null == e) return null;
        let t = (0, u.getDarkness)(e);
        return t > .5 ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT
    }

    function A(e, t, r) {
        let n = r / 100,
            o = 1 - n;
        return [Math.round(e[0] * o + t[0] * n), Math.round(e[1] * o + t[1] * n), Math.round(e[2] * o + t[2] * n)]
    }

    function m(e, t) {
        let r = (0, u.int2rgbArray)(e);
        if (null == t) return 0;
        let n = f.default.parseString(t);
        if (null == n) return 0;
        let o = [n.red, n.green, n.blue],
            l = [r[0], r[1], r[2]],
            i = n.alpha,
            [a, s, c] = o.map((e, t) => Math.floor(i * e + (1 - i) * l[t]));
        return (0, u.rgb2int)("rgba(".concat(a, ", ").concat(s, ", ").concat(c, ")"))
    }

    function p(e, t, r) {
        let n = E(e);
        return null == n || null == t ? null : m(t, r ? n.overlaySyncedWithUserTheme : n.overlay)
    }
    let R = (0, o.memoize)(e => {
        let t = (0, a.getContrastingColor)(e, {
            base: "#ffffff",
            contrastRatio: a.WCAGContrastRatios.HighContrastText
        });
        return (0, u.hex2int)(t)
    }, e => e);

    function v(e, t) {
        let r = E(e);
        return null != r && null != t ? m(t, null == r ? void 0 : r.messageInputBorder) : null
    }

    function I(e, t) {
        let r = (0, c.useColorValue)(d.Color.WHITE_500).hex;
        return (0, a.isThemeDark)(e) ? (0, u.hex2int)(r) : null != t ? R(t) : null
    }
}