function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("884691"),
        l = n("509043"),
        a = n("446674"),
        s = n("841098"),
        r = n("206230"),
        o = n("388491"),
        u = n("528438");
    let d = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

    function c(e, t, n) {
        var i;
        null == e || null === (i = e.current) || void 0 === i || i.style.setProperty(t, null != n ? n : null)
    }

    function f(e, t) {
        let {
            themeElementRef: n,
            pendingThemeColors: f,
            isPreview: p,
            useDefaultClientTheme: m
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [h, x] = (0, u.default)(e, t, {
            pendingThemeColors: f,
            isPreview: p
        }), [E, y, g] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.desaturateUserColors, r.default.saturation, r.default.syncProfileThemeWithUserTheme]), S = (0, s.default)(), C = i.useCallback(() => g || m ? S : (0, o.getProfileTheme)(h), [m, g, S, h]), [_, T] = i.useState(C()), I = (0, o.useProfileThemeValues)(_), v = (0, o.useDividerColor)(_, h), A = (0, o.useMessageInputBorderColor)(_, x), N = i.useCallback((e, t) => (0, l.int2hsl)(e, E, null, t), [E]);
        i.useEffect(() => {
            T(C())
        }, [h, g, S, m, C]);
        let R = (0, o.useAvatarBorderColor)(_, h, g),
            O = null != R ? (0, l.int2hsl)(R, !1, E ? y : null) : null,
            M = e => d.forEach(t => {
                e.style.removeProperty(t)
            });
        return i.useEffect(() => {
            if (null != h && null != x && null != _ && null != R && null != v && null != A) {
                let e = g && _ !== S ? null == I ? void 0 : I.overlaySyncedWithUserTheme : null == I ? void 0 : I.overlay;
                c(n, "--profile-gradient-primary-color", N(h)), c(n, "--profile-gradient-secondary-color", N(x)), c(n, "--profile-gradient-button-color", N((0, o.calculateButtonColor)(h))), c(n, "--profile-gradient-overlay-color", e), c(n, "--profile-body-background-color", null == I ? void 0 : I.sectionBox), c(n, "--profile-body-background-hover", null == I ? void 0 : I.profileBodyBackgroundHover), c(n, "--profile-body-divider-color", N(v, null == I ? void 0 : I.dividerOpacity)), c(n, "--profile-avatar-border-color", N(R)), c(n, "--profile-message-input-border-color", N(A)), c(n, "--profile-note-background-color", null == I ? void 0 : I.noteBackgroundColor), c(n, "--profile-role-pill-background-color", null == I ? void 0 : I.rolePillBackgroundColor), c(n, "--profile-role-pill-border-color", null == I ? void 0 : I.rolePillBorderColor)
            } else(null == n ? void 0 : n.current) != null && M(null == n ? void 0 : n.current)
        }, [h, x, R, _, S, n, N, g, v, null == I ? void 0 : I.overlaySyncedWithUserTheme, null == I ? void 0 : I.overlay, null == I ? void 0 : I.sectionBox, null == I ? void 0 : I.profileBodyBackgroundHover, null == I ? void 0 : I.dividerOpacity, null == I ? void 0 : I.noteBackgroundColor, null == I ? void 0 : I.rolePillBackgroundColor, null == I ? void 0 : I.rolePillBorderColor, A]), {
            profileTheme: null != _ ? _ : S,
            primaryProfileColor: h,
            avatarBorderColor: O
        }
    }
}