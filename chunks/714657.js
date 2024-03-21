function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var r = n("35092"),
        a = n("151426"),
        o = n("913144"),
        l = n("10641"),
        u = n("737292"),
        d = n("161778"),
        c = n("233069"),
        _ = n("42203"),
        f = n("697218"),
        E = n("719923"),
        h = n("158998"),
        g = n("253539"),
        m = n("941719");
    let p = !1,
        S = !0,
        v = !1;

    function T() {
        p = !0
    }

    function I() {
        S && (i = void 0), v = !1, p = !1
    }
    let A = () => {
            S = !E.default.canUseClientThemes(f.default.getCurrentUser())
        },
        C = () => {
            var e, t;
            let n = null === (t = u.default.getAppearanceSettings()) || void 0 === t ? void 0 : null === (e = t.clientThemeSettings) || void 0 === e ? void 0 : e.backgroundGradientPresetId;
            null != n && (i = m.BACKGROUND_GRADIENT_PRESETS_MAP[n])
        };
    class y extends r.default.PersistedStore {
        initialize(e) {
            null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? m.BACKGROUND_GRADIENT_PRESETS_MAP[e.gradientPresetId] : void 0), this.waitFor(f.default, d.default, _.default, u.default), this.syncWith([f.default], A), this.syncWith([u.default], C)
        }
        getState() {
            return S ? {} : {
                gradientPresetId: null == i ? void 0 : i.id
            }
        }
        get gradientPreset() {
            return i
        }
        getLinearGradient() {
            return null == this.gradientPreset ? null : (0, g.getLinearGradientForBackgroundGradient)(this.gradientPreset)
        }
        get isEditorOpen() {
            return p
        }
        get isPreview() {
            return S
        }
        get isCoachmark() {
            return v
        }
        get mobilePendingThemeIndex() {
            return s
        }
        constructor(...e) {
            super(...e), this.migrations = [e => {
                var t;
                return {
                    gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id
                }
            }]
        }
    }
    y.displayName = "ClientThemesBackgroundStore", y.persistKey = "ClientThemesBackgroundStore";
    var N = new y(o.default, {
        UPDATE_BACKGROUND_GRADIENT_PRESET: e => {
            let {
                presetId: t
            } = e;
            if (null == t) {
                i = void 0;
                return
            }
            i = m.BACKGROUND_GRADIENT_PRESETS_MAP[t]
        },
        UPDATE_MOBILE_PENDING_THEME_INDEX: e => {
            let {
                mobileThemesIndex: t
            } = e;
            if (null == t) {
                s = void 0;
                return
            }
            s = t
        },
        CLIENT_THEMES_EDITOR_OPEN: e => {
            (function() {
                p = !0
            })()
        },
        CLIENT_THEMES_EDITOR_CLOSE: e => {
            I()
        },
        RESET_PREVIEW_CLIENT_THEME: e => {
            i = void 0
        },
        CHANNEL_SELECT: e => {
            let {
                channelId: t,
                guildId: n
            } = e, i = f.default.getCurrentUser();
            if (null == t || null == n || (0, l.isDismissibleContentDismissed)(a.DismissibleContent.CLIENT_THEMES_COACHMARK) || !(0, h.ageEligibleForPremiumUpsell)(i)) return;
            let s = _.default.getChannel(t);
            null != s && (0, c.isGuildTextChannelType)(s.type) && (v = !0, function() {
                p = !0
            }())
        },
        LOGOUT: e => {
            I()
        }
    })
}