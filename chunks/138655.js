function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("47120");
    var i = n("470079"),
        r = n("120356"),
        a = n.n(r),
        s = n("866442"),
        o = n("442837"),
        l = n("607070"),
        u = n("168551"),
        d = n("792125"),
        _ = n("168631");
    let c = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-secondary-alt)",
        "--profile-gradient-secondary-color": "var(--background-secondary-alt)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--button-secondary-background)",
        "--profile-avatar-border-color": "var(--background-secondary-alt)",
        "--profile-body-background-color": "var(--background-floating)",
        "--profile-body-background-hover": "var(--background-modifier-hover)",
        "--profile-body-divider-color": "var(--background-modifier-accent)",
        "--profile-body-border-color": "var(--border-faint)",
        "--profile-message-input-border-color": "var(--background-modifier-accent)",
        "--profile-note-background-color": "var(--background-tertiary)",
        "--profile-role-pill-background-color": "var(--background-secondary-alt)",
        "--profile-role-pill-border-color": "var(--interactive-normal)"
    });

    function E(e) {
        let {
            theme: t,
            primaryColor: n,
            secondaryColor: r
        } = e, [E, I] = (0, o.useStateFromStoresArray)([l.default], () => [l.default.desaturateUserColors, l.default.syncProfileThemeWithUserTheme]), T = (0, _.useProfileThemeValues)(t), f = (0, _.useAvatarBorderColor)(t, n, I), S = (0, _.useDividerColor)(t, n), h = (0, _.useMessageInputBorderColor)(t, r), A = I ? null == T ? void 0 : T.overlaySyncedWithUserTheme : null == T ? void 0 : T.overlay;
        return {
            profileThemeStyle: (0, i.useMemo)(() => {
                if (null == n || null == r || null == T || null == f || null == S || null == h || null == A) return c;
                let e = (e, t) => (0, s.int2hsl)(e, E, null, t);
                return {
                    "--profile-gradient-primary-color": e(n),
                    "--profile-gradient-secondary-color": e(r),
                    "--profile-gradient-overlay-color": A,
                    "--profile-gradient-button-color": e((0, _.calculateButtonColor)(n)),
                    "--profile-avatar-border-color": e(f),
                    "--profile-body-background-color": T.sectionBox,
                    "--profile-body-background-hover": T.profileBodyBackgroundHover,
                    "--profile-body-divider-color": e(S, T.dividerOpacity),
                    "--profile-body-border-color": e(S, .12),
                    "--profile-message-input-border-color": e(h),
                    "--profile-note-background-color": T.noteBackgroundColor,
                    "--profile-role-pill-background-color": T.rolePillBackgroundColor,
                    "--profile-role-pill-border-color": T.rolePillBorderColor
                }
            }, [n, r, f, E, S, h, A, T]),
            profileThemeClassName: a()((0, d.getThemeClass)(t), {
                [u.CUSTOM_THEME_BACKGROUND_CLASS_NAME]: null != n,
                "custom-profile-theme": null != n
            })
        }
    }
}