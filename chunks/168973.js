function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i, s, r, a, o = n("917351"),
        l = n.n(o),
        u = n("446674"),
        d = n("95410"),
        c = n("913144");
    n("228803");
    var _ = n("116319"),
        f = n("49111"),
        E = n("13030");
    (i = r || (r = {})).DATA_SAVER = "data_saver", i.STANDARD = "standard", i.BEST = "best", (s = a || (a = {})).VERY_LOW = "very_low", s.LOW = "low", s.MEDIUM = "medium", s.HIGH = "high", s.VERY_HIGH = "very_high";
    let h = (window.innerWidth - f.CHANNEL_SIDEBAR_WIDTH) / 2,
        g = null,
        m = {};
    class p extends u.default.DeviceSettingsStore {
        initialize(e) {
            var t;
            (m = null != e ? e : {}).darkSidebar = null !== (t = m.darkSidebar) && void 0 !== t ? t : function() {
                var e;
                let t = u.default.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
                return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e
            }()
        }
        getUserAgnosticState() {
            return m
        }
        get displayCompactAvatars() {
            var e;
            return null !== (e = m.displayCompactAvatars) && void 0 !== e && e
        }
        get lowQualityImageMode() {
            var e;
            return null !== (e = m.lowQualityImageMode) && void 0 !== e && e
        }
        get videoUploadQuality() {
            var e;
            return null !== (e = m.videoUploadQuality) && void 0 !== e ? e : "standard"
        }
        get dataSavingMode() {
            var e, t;
            return null !== (t = null !== (e = m.dataSavingMode) && void 0 !== e ? e : m.lowQualityImageMode) && void 0 !== t && t
        }
        get expressionPickerWidth() {
            var e;
            return null !== (e = m.expressionPickerWidth) && void 0 !== e ? e : E.ExpressionPickerWidths.MIN
        }
        get messageRequestSidebarWidth() {
            var e;
            return null !== (e = m.messageRequestSidebarWidth) && void 0 !== e ? e : f.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH
        }
        get threadSidebarWidth() {
            var e;
            return null !== (e = m.threadSidebarWidth) && void 0 !== e ? e : f.DEFAULT_CHAT_SIDEBAR_WIDTH
        }
        get postSidebarWidth() {
            var e;
            return null !== (e = m.postSidebarWidth) && void 0 !== e ? e : h
        }
        get callChatSidebarWidth() {
            var e;
            return null !== (e = m.callChatSidebarWidth) && void 0 !== e ? e : f.DEFAULT_CHAT_SIDEBAR_WIDTH
        }
        get homeSidebarWidth() {
            var e;
            return null !== (e = m.homeSidebarWidth) && void 0 !== e ? e : (null == g && (g = Math.max((window.innerWidth - f.CHANNEL_SIDEBAR_WIDTH) * .4, f.DEFAULT_CHAT_SIDEBAR_WIDTH)), g)
        }
        get callHeaderHeight() {
            return m.callHeaderHeight
        }
        get useSystemTheme() {
            var e;
            return null !== (e = m.useSystemTheme) && void 0 !== e ? e : _.SystemThemeState.UNSET
        }
        get activityPanelHeight() {
            return m.activityPanelHeight
        }
        get disableVoiceChannelChangeAlert() {
            var e;
            return null !== (e = m.disableVoiceChannelChangeAlert) && void 0 !== e && e
        }
        get disableEmbeddedActivityPopOutAlert() {
            var e;
            return null !== (e = m.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
        }
        get disableActivityHardwareAccelerationPrompt() {
            var e;
            return null !== (e = m.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
        }
        get disableInviteWithTextChannelActivityLaunch() {
            var e;
            return null !== (e = m.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
        }
        get disableHideSelfStreamAndVideoConfirmationAlert() {
            var e;
            return null !== (e = m.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
        }
        get pushUpsellUserSettingsDismissed() {
            var e;
            return null !== (e = m.pushUpsellDismissed) && void 0 !== e && e
        }
        get disableActivityHostLeftNitroUpsell() {
            var e;
            return null !== (e = m.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
        }
        get disableCallUserConfirmationPrompt() {
            var e;
            return null !== (e = m.disableCallUserConfirmationPrompt) && void 0 !== e && e
        }
        get disableApplicationSubscriptionCancellationSurvey() {
            var e;
            return null !== (e = m.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
        }
        get enableAndroidChatListAnimations() {
            var e;
            return null !== (e = m.enableAndroidChatListAnimations) && void 0 !== e && e
        }
        get darkSidebar() {
            var e;
            return null !== (e = m.darkSidebar) && void 0 !== e && e
        }
        get useMobileChatCustomRenderer() {
            var e;
            return null !== (e = m.useMobileChatCustomRenderer) && void 0 !== e && e
        }
        get saveCameraUploadsToDevice() {
            var e;
            return null === (e = m.saveCameraUploadsToDevice) || void 0 === e || e
        }
        get swipeToReply() {
            var e;
            return null !== (e = m.swipeToReply) && void 0 !== e && e
        }
    }
    p.displayName = "UnsyncedUserSettingsStore", p.persistKey = "UnsyncedUserSettingsStore", p.migrations = [() => {
        let e = d.default.get("UserSettingsStore");
        return d.default.remove("UserSettingsStore"), l.pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
    }];
    var S = new p(c.default, {
        UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
            m = {
                ...m,
                ...e.settings
            }
        },
        LOGOUT: function() {
            m = {
                useSystemTheme: m.useSystemTheme,
                darkSidebar: m.darkSidebar
            }
        },
        LOGIN_SUCCESS: function() {
            null == m && (m = {})
        },
        REGISTER_SUCCESS: function() {},
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return m.darkSidebar = !m.darkSidebar, !0
        }
    })
}