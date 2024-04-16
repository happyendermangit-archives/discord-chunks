function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("47120");
    var i = n("470079"),
        r = n("866442"),
        s = n("442837"),
        a = n("607070"),
        o = n("792125"),
        l = n("168631");
    let u = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-secondary-alt)",
        "--profile-gradient-secondary-color": "var(--background-secondary-alt)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--button-secondary-background)",
        "--profile-avatar-border-color": "var(--background-secondary-alt)",
        "--profile-body-background-color": "var(--background-floating)",
        "--profile-body-background-hover": "var(--background-modifier-hover)",
        "--profile-body-divider-color": "var(--background-modifier-accent)",
        "--profile-message-input-border-color": "var(--background-modifier-accent)",
        "--profile-note-background-color": "var(--background-tertiary)",
        "--profile-role-pill-background-color": "var(--background-secondary-alt)",
        "--profile-role-pill-border-color": "var(--interactive-normal)"
    });

    function d(e) {
        let {
            theme: t,
            primaryColor: n,
            secondaryColor: d
        } = e, [_, c] = (0, s.useStateFromStoresArray)([a.default], () => [a.default.desaturateUserColors, a.default.syncProfileThemeWithUserTheme]), E = (0, l.useProfileThemeValues)(t), I = (0, l.useAvatarBorderColor)(t, n, c), T = (0, l.useDividerColor)(t, n), f = (0, l.useMessageInputBorderColor)(t, d), S = c ? null == E ? void 0 : E.overlaySyncedWithUserTheme : null == E ? void 0 : E.overlay;
        return {
            profileThemeStyle: (0, i.useMemo)(() => {
                if (null == n || null == d || null == E || null == I || null == T || null == f || null == S) return u;
                let e = (e, t) => (0, r.int2hsl)(e, _, null, t);
                return {
                    "--profile-gradient-primary-color": e(n),
                    "--profile-gradient-secondary-color": e(d),
                    "--profile-gradient-overlay-color": S,
                    "--profile-gradient-button-color": e((0, l.calculateButtonColor)(n)),
                    "--profile-avatar-border-color": e(I),
                    "--profile-body-background-color": E.sectionBox,
                    "--profile-body-background-hover": E.profileBodyBackgroundHover,
                    "--profile-body-divider-color": e(T, E.dividerOpacity),
                    "--profile-message-input-border-color": e(f),
                    "--profile-note-background-color": E.noteBackgroundColor,
                    "--profile-role-pill-background-color": E.rolePillBackgroundColor,
                    "--profile-role-pill-border-color": E.rolePillBorderColor
                }
            }, [n, d, I, _, T, f, S, E]),
            profileThemeClassName: (0, o.getThemeClass)(t)
        }
    }
}