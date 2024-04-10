function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateButtonColor: function() {
            return A
        },
        getProfileTheme: function() {
            return I
        },
        getValueInColorGradientByPercentage: function() {
            return T
        },
        useAvatarBorderColor: function() {
            return S
        },
        useDividerColor: function() {
            return m
        },
        useMessageInputBorderColor: function() {
            return h
        },
        useProfileThemeValues: function() {
            return E
        }
    }), n("47120");
    var i = n("470079"),
        r = n("392711"),
        s = n("866442"),
        a = n("399606"),
        o = n("692547"),
        l = n("780384"),
        u = n("607070"),
        d = n("44315"),
        _ = n("564334"),
        c = n("981631");

    function E(e) {
        let t = (0, a.useStateFromStores)([u.default], () => u.default.saturation);
        return (0, i.useMemo)(() => null == e ? null : {
            overlaySyncedWithUserTheme: o.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            overlay: o.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            sectionBox: o.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            messageInputBorder: o.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            dividerOpacity: e === o.default.themes.DARK ? .24 : .12,
            noteBackgroundColor: o.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            profileBodyBackgroundHover: o.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            rolePillBackgroundColor: o.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            rolePillBorderColor: o.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                theme: e,
                saturation: t
            }).hsl(),
            icon: o.default.colors.INTERACTIVE_NORMAL.resolve({
                theme: e,
                saturation: t
            }).hsl()
        }, [e, t])
    }

    function I(e) {
        return null == e ? null : (0, s.getDarkness)(e) > .5 ? c.ThemeTypes.DARK : c.ThemeTypes.LIGHT
    }

    function T(e, t, n) {
        let i = n / 100,
            r = 1 - i;
        return [Math.round(e[0] * r + t[0] * i), Math.round(e[1] * r + t[1] * i), Math.round(e[2] * r + t[2] * i)]
    }

    function f(e, t) {
        let n = (0, s.int2rgbArray)(e);
        if (null == t) return 0;
        let i = _.default.parseString(t);
        if (null == i) return 0;
        let r = [i.red, i.green, i.blue],
            a = [n[0], n[1], n[2]],
            o = i.alpha,
            [l, u, d] = r.map((e, t) => Math.floor(o * e + (1 - o) * a[t]));
        return (0, s.rgb2int)("rgba(".concat(l, ", ").concat(u, ", ").concat(d, ")"))
    }

    function S(e, t, n) {
        let i = E(e);
        return null == i || null == t ? null : f(t, n ? i.overlaySyncedWithUserTheme : i.overlay)
    }
    let A = (0, r.memoize)(e => {
        let t = (0, l.getContrastingColor)(e, {
            base: "#ffffff",
            contrastRatio: l.WCAGContrastRatios.HighContrastText
        });
        return (0, s.hex2int)(t)
    }, e => e);

    function h(e, t) {
        let n = E(e);
        return null != n && null != t ? f(t, null == n ? void 0 : n.messageInputBorder) : null
    }

    function m(e, t) {
        let n = (0, d.useColorValue)(c.Color.WHITE_500).hex;
        return (0, l.isThemeDark)(e) ? (0, s.hex2int)(n) : null != t ? A(t) : null
    }
}