function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateButtonColor: function() {
            return h
        },
        getProfileTheme: function() {
            return p
        },
        getValueInColorGradientByPercentage: function() {
            return m
        },
        useAvatarBorderColor: function() {
            return I
        },
        useDividerColor: function() {
            return T
        },
        useMessageInputBorderColor: function() {
            return O
        },
        useProfileThemeValues: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n("194926"),
        a = n("37295"),
        u = n("447515"),
        s = n("751848"),
        l = n("622780"),
        c = n("405502"),
        f = n("622908"),
        d = n("281767");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        var t = (0, a.useStateFromStores)([l.default], function() {
            return l.default.saturation
        });
        return (0, r.useMemo)(function() {
            return null == e ? null : {
                overlaySyncedWithUserTheme: u.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                    theme: e,
                    saturation: t
                }).hsl(),
                overlay: u.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                    theme: e,
                    saturation: t
                }).hsl(),
                sectionBox: u.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                    theme: e,
                    saturation: t
                }).hsl(),
                messageInputBorder: u.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                    theme: e,
                    saturation: t
                }).hsl(),
                dividerOpacity: e === u.default.themes.DARK ? .24 : .12,
                noteBackgroundColor: u.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                    theme: e,
                    saturation: t
                }).hsl(),
                profileBodyBackgroundHover: u.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                    theme: e,
                    saturation: t
                }).hsl(),
                rolePillBackgroundColor: u.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                    theme: e,
                    saturation: t
                }).hsl(),
                rolePillBorderColor: u.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                    theme: e,
                    saturation: t
                }).hsl(),
                icon: u.default.colors.INTERACTIVE_NORMAL.resolve({
                    theme: e,
                    saturation: t
                }).hsl()
            }
        }, [e, t])
    }

    function p(e) {
        return null == e ? null : (0, i.getDarkness)(e) > .5 ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT
    }

    function m(e, t, n) {
        var r = n / 100,
            o = 1 - r;
        return [Math.round(e[0] * o + t[0] * r), Math.round(e[1] * o + t[1] * r), Math.round(e[2] * o + t[2] * r)]
    }

    function y(e, t) {
        var n, r, o = (0, i.int2rgbArray)(e);
        if (null == t) return 0;
        var a = f.default.parseString(t);
        if (null == a) return 0;
        var u = [a.red, a.green, a.blue],
            s = [o[0], o[1], o[2]],
            l = a.alpha;
        var c = (n = u.map(function(e, t) {
                return Math.floor(l * e + (1 - l) * s[t])
            }), r = 3, function(e) {
                if (Array.isArray(e)) return e
            }(n) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(n, r) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(n, r) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            d = c[0],
            E = c[1],
            p = c[2];
        return (0, i.rgb2int)("rgba(".concat(d, ", ").concat(E, ", ").concat(p, ")"))
    }

    function I(e, t, n) {
        var r = E(e);
        return null == r || null == t ? null : y(t, n ? r.overlaySyncedWithUserTheme : r.overlay)
    }
    var h = (0, o.memoize)(function(e) {
        var t = (0, s.getContrastingColor)(e, {
            base: "#ffffff",
            contrastRatio: s.WCAGContrastRatios.HighContrastText
        });
        return (0, i.hex2int)(t)
    }, function(e) {
        return e
    });

    function O(e, t) {
        var n = E(e);
        return null != n && null != t ? y(t, null == n ? void 0 : n.messageInputBorder) : null
    }

    function T(e, t) {
        var n = (0, c.useColorValue)(d.Color.WHITE_500).hex;
        return (0, s.isThemeDark)(e) ? (0, i.hex2int)(n) : null != t ? h(t) : null
    }
}