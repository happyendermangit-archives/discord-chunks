function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("47120");
    var i = n("470079"),
        r = n("866442"),
        s = n("442837"),
        a = n("410030"),
        o = n("607070"),
        l = n("168631"),
        u = n("84244");
    let d = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

    function _(e, t, n) {
        var i;
        null == e || null === (i = e.current) || void 0 === i || i.style.setProperty(t, null != n ? n : null)
    }

    function c(e, t) {
        let {
            themeElementRef: n,
            pendingThemeColors: c,
            isPreview: E,
            useDefaultClientTheme: I
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [T, f] = (0, u.default)(e, t, {
            pendingThemeColors: c,
            isPreview: E
        }), [S, h, A] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.desaturateUserColors, o.default.saturation, o.default.syncProfileThemeWithUserTheme]), m = (0, a.default)(), N = i.useCallback(() => A || I ? m : (0, l.getProfileTheme)(T), [I, A, m, T]), [p, O] = i.useState(N()), R = (0, l.useProfileThemeValues)(p), C = (0, l.useDividerColor)(p, T), g = (0, l.useMessageInputBorderColor)(p, f), L = i.useCallback((e, t) => (0, r.int2hsl)(e, S, null, t), [S]);
        i.useEffect(() => {
            O(N())
        }, [T, A, m, I, N]);
        let D = (0, l.useAvatarBorderColor)(p, T, A),
            v = null != D ? (0, r.int2hsl)(D, !1, S ? h : null) : null,
            M = e => d.forEach(t => {
                e.style.removeProperty(t)
            });
        return i.useEffect(() => {
            if (null != T && null != f && null != p && null != D && null != C && null != g) {
                let e = A && p !== m ? null == R ? void 0 : R.overlaySyncedWithUserTheme : null == R ? void 0 : R.overlay;
                _(n, "--profile-gradient-primary-color", L(T)), _(n, "--profile-gradient-secondary-color", L(f)), _(n, "--profile-gradient-button-color", L((0, l.calculateButtonColor)(T))), _(n, "--profile-gradient-overlay-color", e), _(n, "--profile-body-background-color", null == R ? void 0 : R.sectionBox), _(n, "--profile-body-background-hover", null == R ? void 0 : R.profileBodyBackgroundHover), _(n, "--profile-body-divider-color", L(C, null == R ? void 0 : R.dividerOpacity)), _(n, "--profile-avatar-border-color", L(D)), _(n, "--profile-message-input-border-color", L(g)), _(n, "--profile-note-background-color", null == R ? void 0 : R.noteBackgroundColor), _(n, "--profile-role-pill-background-color", null == R ? void 0 : R.rolePillBackgroundColor), _(n, "--profile-role-pill-border-color", null == R ? void 0 : R.rolePillBorderColor)
            } else(null == n ? void 0 : n.current) != null && M(null == n ? void 0 : n.current)
        }, [T, f, D, p, m, n, L, A, C, null == R ? void 0 : R.overlaySyncedWithUserTheme, null == R ? void 0 : R.overlay, null == R ? void 0 : R.sectionBox, null == R ? void 0 : R.profileBodyBackgroundHover, null == R ? void 0 : R.dividerOpacity, null == R ? void 0 : R.noteBackgroundColor, null == R ? void 0 : R.rolePillBackgroundColor, null == R ? void 0 : R.rolePillBorderColor, g]), {
            profileTheme: null != p ? p : m,
            primaryProfileColor: T,
            avatarBorderColor: v
        }
    }
}