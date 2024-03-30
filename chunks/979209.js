function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("194926"),
        i = n("898511"),
        a = n("523263"),
        u = n("622780"),
        s = n("624850"),
        l = n("179917");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var d = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

    function _(e, t, n) {
        var r;
        null == e || null === (r = e.current) || void 0 === r || r.style.setProperty(t, null != n ? n : null)
    }

    function E(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            c = n.themeElementRef,
            E = n.pendingThemeColors,
            p = n.isPreview,
            m = n.useDefaultClientTheme,
            y = f((0, l.default)(e, t, {
                pendingThemeColors: E,
                isPreview: p
            }), 2),
            I = y[0],
            h = y[1],
            O = f((0, i.useStateFromStoresArray)([u.default], function() {
                return [u.default.desaturateUserColors, u.default.saturation, u.default.syncProfileThemeWithUserTheme]
            }), 3),
            T = O[0],
            S = O[1],
            v = O[2],
            g = (0, a.default)(),
            A = r.useCallback(function() {
                return v || m ? g : (0, s.getProfileTheme)(I)
            }, [m, v, g, I]),
            b = f(r.useState(A()), 2),
            N = b[0],
            R = b[1],
            C = (0, s.useProfileThemeValues)(N),
            P = (0, s.useDividerColor)(N, I),
            D = (0, s.useMessageInputBorderColor)(N, h),
            L = r.useCallback(function(e, t) {
                return (0, o.int2hsl)(e, T, null, t)
            }, [T]);
        r.useEffect(function() {
            R(A())
        }, [I, v, g, m, A]);
        var M = (0, s.useAvatarBorderColor)(N, I, v),
            U = null != M ? (0, o.int2hsl)(M, !1, T ? S : null) : null;
        return r.useEffect(function() {
            if (null != I && null != h && null != N && null != M && null != P && null != D) {
                var e, t = v && N !== g ? null == C ? void 0 : C.overlaySyncedWithUserTheme : null == C ? void 0 : C.overlay;
                _(c, "--profile-gradient-primary-color", L(I)), _(c, "--profile-gradient-secondary-color", L(h)), _(c, "--profile-gradient-button-color", L((0, s.calculateButtonColor)(I))), _(c, "--profile-gradient-overlay-color", t), _(c, "--profile-body-background-color", null == C ? void 0 : C.sectionBox), _(c, "--profile-body-background-hover", null == C ? void 0 : C.profileBodyBackgroundHover), _(c, "--profile-body-divider-color", L(P, null == C ? void 0 : C.dividerOpacity)), _(c, "--profile-avatar-border-color", L(M)), _(c, "--profile-message-input-border-color", L(D)), _(c, "--profile-note-background-color", null == C ? void 0 : C.noteBackgroundColor), _(c, "--profile-role-pill-background-color", null == C ? void 0 : C.rolePillBackgroundColor), _(c, "--profile-role-pill-border-color", null == C ? void 0 : C.rolePillBorderColor)
            } else if ((null == c ? void 0 : c.current) != null) {
                ;
                e = null == c ? void 0 : c.current, d.forEach(function(t) {
                    e.style.removeProperty(t)
                })
            }
        }, [I, h, M, N, g, c, L, v, P, null == C ? void 0 : C.overlaySyncedWithUserTheme, null == C ? void 0 : C.overlay, null == C ? void 0 : C.sectionBox, null == C ? void 0 : C.profileBodyBackgroundHover, null == C ? void 0 : C.dividerOpacity, null == C ? void 0 : C.noteBackgroundColor, null == C ? void 0 : C.rolePillBackgroundColor, null == C ? void 0 : C.rolePillBorderColor, D]), {
            profileTheme: null != N ? N : g,
            primaryProfileColor: I,
            avatarBorderColor: U
        }
    }
}