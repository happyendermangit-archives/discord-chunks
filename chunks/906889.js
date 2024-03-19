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
        }), [E, y, g] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.desaturateUserColors, r.default.saturation, r.default.syncProfileThemeWithUserTheme]), S = (0, s.default)(), C = i.useCallback(() => g || m ? S : (0, o.getProfileTheme)(h), [m, g, S, h]), [_, I] = i.useState(C()), T = (0, o.useProfileThemeValues)(_), v = (0, o.useDividerColor)(_, h), N = (0, o.useMessageInputBorderColor)(_, x), A = i.useCallback((e, t) => (0, l.int2hsl)(e, E, null, t), [E]);
        i.useEffect(() => {
            I(C())
        }, [h, g, S, m, C]);
        let O = (0, o.useAvatarBorderColor)(_, h, g),
            R = null != O ? (0, l.int2hsl)(O, !1, E ? y : null) : null,
            M = e => d.forEach(t => {
                e.style.removeProperty(t)
            });
        return i.useEffect(() => {
            if (null != h && null != x && null != _ && null != O && null != v && null != N) {
                let e = g && _ !== S ? null == T ? void 0 : T.overlaySyncedWithUserTheme : null == T ? void 0 : T.overlay;
                c(n, "--profile-gradient-primary-color", A(h)), c(n, "--profile-gradient-secondary-color", A(x)), c(n, "--profile-gradient-button-color", A((0, o.calculateButtonColor)(h))), c(n, "--profile-gradient-overlay-color", e), c(n, "--profile-body-background-color", null == T ? void 0 : T.sectionBox), c(n, "--profile-body-background-hover", null == T ? void 0 : T.profileBodyBackgroundHover), c(n, "--profile-body-divider-color", A(v, null == T ? void 0 : T.dividerOpacity)), c(n, "--profile-avatar-border-color", A(O)), c(n, "--profile-message-input-border-color", A(N)), c(n, "--profile-note-background-color", null == T ? void 0 : T.noteBackgroundColor), c(n, "--profile-role-pill-background-color", null == T ? void 0 : T.rolePillBackgroundColor), c(n, "--profile-role-pill-border-color", null == T ? void 0 : T.rolePillBorderColor)
            } else(null == n ? void 0 : n.current) != null && M(null == n ? void 0 : n.current)
        }, [h, x, O, _, S, n, A, g, v, null == T ? void 0 : T.overlaySyncedWithUserTheme, null == T ? void 0 : T.overlay, null == T ? void 0 : T.sectionBox, null == T ? void 0 : T.profileBodyBackgroundHover, null == T ? void 0 : T.dividerOpacity, null == T ? void 0 : T.noteBackgroundColor, null == T ? void 0 : T.rolePillBackgroundColor, null == T ? void 0 : T.rolePillBorderColor, N]), {
            profileTheme: null != _ ? _ : S,
            primaryProfileColor: h,
            avatarBorderColor: R
        }
    }
}