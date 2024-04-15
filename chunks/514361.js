function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var s, a = n("442837"),
        o = n("524437"),
        l = n("570140"),
        u = n("605236"),
        d = n("238514"),
        _ = n("210887"),
        c = n("131704"),
        E = n("592125"),
        I = n("594174"),
        T = n("74538"),
        f = n("51144"),
        S = n("47760"),
        h = n("469115");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let m = !1,
        N = !0,
        p = !1;

    function O() {
        m = !0
    }

    function R() {
        N && (i = void 0), p = !1, m = !1
    }
    let C = () => {
            N = !T.default.canUseClientThemes(I.default.getCurrentUser())
        },
        g = () => {
            var e, t;
            let n = null === (t = d.default.getAppearanceSettings()) || void 0 === t ? void 0 : null === (e = t.clientThemeSettings) || void 0 === e ? void 0 : e.backgroundGradientPresetId;
            null != n && (i = h.BACKGROUND_GRADIENT_PRESETS_MAP[n])
        };
    class L extends(s = a.default.PersistedStore) {
        initialize(e) {
            null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? h.BACKGROUND_GRADIENT_PRESETS_MAP[e.gradientPresetId] : void 0), this.waitFor(I.default, _.default, E.default, d.default), this.syncWith([I.default], C), this.syncWith([d.default], g)
        }
        getState() {
            return N ? {} : {
                gradientPresetId: null == i ? void 0 : i.id
            }
        }
        get gradientPreset() {
            return i
        }
        getLinearGradient() {
            return null == this.gradientPreset ? null : (0, S.getLinearGradientForBackgroundGradient)(this.gradientPreset)
        }
        get isEditorOpen() {
            return m
        }
        get isPreview() {
            return N
        }
        get isCoachmark() {
            return p
        }
        get mobilePendingThemeIndex() {
            return r
        }
        constructor(...e) {
            super(...e), A(this, "migrations", [e => {
                var t;
                return {
                    gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id
                }
            }])
        }
    }
    A(L, "displayName", "ClientThemesBackgroundStore"), A(L, "persistKey", "ClientThemesBackgroundStore"), t.default = new L(l.default, {
        UPDATE_BACKGROUND_GRADIENT_PRESET: e => {
            let {
                presetId: t
            } = e;
            if (null == t) {
                i = void 0;
                return
            }
            i = h.BACKGROUND_GRADIENT_PRESETS_MAP[t]
        },
        UPDATE_MOBILE_PENDING_THEME_INDEX: e => {
            let {
                mobileThemesIndex: t
            } = e;
            if (null == t) {
                r = void 0;
                return
            }
            r = t
        },
        CLIENT_THEMES_EDITOR_OPEN: e => {
            (function() {
                m = !0
            })()
        },
        CLIENT_THEMES_EDITOR_CLOSE: e => {
            R()
        },
        RESET_PREVIEW_CLIENT_THEME: e => {
            i = void 0
        },
        CHANNEL_SELECT: e => {
            let {
                channelId: t,
                guildId: n
            } = e, i = I.default.getCurrentUser();
            if (null == t || null == n || (0, u.isDismissibleContentDismissed)(o.DismissibleContent.CLIENT_THEMES_COACHMARK) || !(0, f.ageEligibleForPremiumUpsell)(i)) return;
            let r = E.default.getChannel(t);
            null != r && (0, c.isGuildTextChannelType)(r.type) && (p = !0, function() {
                m = !0
            }())
        },
        LOGOUT: e => {
            R()
        }
    })
}