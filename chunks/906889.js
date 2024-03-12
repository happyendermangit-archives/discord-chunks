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
        }), [E, y, g] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.desaturateUserColors, r.default.saturation, r.default.syncProfileThemeWithUserTheme]), S = (0, s.default)(), C = i.useCallback(() => g || m ? S : (0, o.getProfileTheme)(h), [m, g, S, h]), [I, T] = i.useState(C()), _ = (0, o.useProfileThemeValues)(I), v = (0, o.useDividerColor)(I, h), N = (0, o.useMessageInputBorderColor)(I, x), A = i.useCallback((e, t) => (0, l.int2hsl)(e, E, null, t), [E]);
        i.useEffect(() => {
            T(C())
        }, [h, g, S, m, C]);
        let O = (0, o.useAvatarBorderColor)(I, h, g),
            R = null != O ? (0, l.int2hsl)(O, !1, E ? y : null) : null,
            M = e => d.forEach(t => {
                e.style.removeProperty(t)
            });
        return i.useEffect(() => {
            if (null != h && null != x && null != I && null != O && null != v && null != N) {
                let e = g && I !== S ? null == _ ? void 0 : _.overlaySyncedWithUserTheme : null == _ ? void 0 : _.overlay;
                c(n, "--profile-gradient-primary-color", A(h)), c(n, "--profile-gradient-secondary-color", A(x)), c(n, "--profile-gradient-button-color", A((0, o.calculateButtonColor)(h))), c(n, "--profile-gradient-overlay-color", e), c(n, "--profile-body-background-color", null == _ ? void 0 : _.sectionBox), c(n, "--profile-body-background-hover", null == _ ? void 0 : _.profileBodyBackgroundHover), c(n, "--profile-body-divider-color", A(v, null == _ ? void 0 : _.dividerOpacity)), c(n, "--profile-avatar-border-color", A(O)), c(n, "--profile-message-input-border-color", A(N)), c(n, "--profile-note-background-color", null == _ ? void 0 : _.noteBackgroundColor), c(n, "--profile-role-pill-background-color", null == _ ? void 0 : _.rolePillBackgroundColor), c(n, "--profile-role-pill-border-color", null == _ ? void 0 : _.rolePillBorderColor)
            } else(null == n ? void 0 : n.current) != null && M(null == n ? void 0 : n.current)
        }, [h, x, O, I, S, n, A, g, v, null == _ ? void 0 : _.overlaySyncedWithUserTheme, null == _ ? void 0 : _.overlay, null == _ ? void 0 : _.sectionBox, null == _ ? void 0 : _.profileBodyBackgroundHover, null == _ ? void 0 : _.dividerOpacity, null == _ ? void 0 : _.noteBackgroundColor, null == _ ? void 0 : _.rolePillBackgroundColor, null == _ ? void 0 : _.rolePillBorderColor, N]), {
            profileTheme: null != I ? I : S,
            primaryProfileColor: h,
            avatarBorderColor: R
        }
    }
}