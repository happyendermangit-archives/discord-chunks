function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i, r, s, a, o = n("917351"),
        l = n.n(o),
        u = n("446674"),
        c = n("95410"),
        d = n("913144");
    n("228803");
    var f = n("116319"),
        E = n("49111"),
        p = n("13030");
    (i = s || (s = {})).DATA_SAVER = "data_saver", i.STANDARD = "standard", i.BEST = "best", (r = a || (a = {})).VERY_LOW = "very_low", r.LOW = "low", r.MEDIUM = "medium", r.HIGH = "high", r.VERY_HIGH = "very_high";
    let h = (window.innerWidth - E.CHANNEL_SIDEBAR_WIDTH) / 2,
        _ = null,
        S = {};
    class m extends u.default.DeviceSettingsStore {
        initialize(e) {
            var t;
            (S = null != e ? e : {}).darkSidebar = null !== (t = S.darkSidebar) && void 0 !== t ? t : function() {
                var e;
                let t = u.default.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
                return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e
            }()
        }
        getUserAgnosticState() {
            return S
        }
        get displayCompactAvatars() {
            var e;
            return null !== (e = S.displayCompactAvatars) && void 0 !== e && e
        }
        get lowQualityImageMode() {
            var e;
            return null !== (e = S.lowQualityImageMode) && void 0 !== e && e
        }
        get videoUploadQuality() {
            var e;
            return null !== (e = S.videoUploadQuality) && void 0 !== e ? e : "standard"
        }
        get dataSavingMode() {
            var e, t;
            return null !== (t = null !== (e = S.dataSavingMode) && void 0 !== e ? e : S.lowQualityImageMode) && void 0 !== t && t
        }
        get expressionPickerWidth() {
            var e;
            return null !== (e = S.expressionPickerWidth) && void 0 !== e ? e : p.ExpressionPickerWidths.MIN
        }
        get messageRequestSidebarWidth() {
            var e;
            return null !== (e = S.messageRequestSidebarWidth) && void 0 !== e ? e : E.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH
        }
        get threadSidebarWidth() {
            var e;
            return null !== (e = S.threadSidebarWidth) && void 0 !== e ? e : E.DEFAULT_CHAT_SIDEBAR_WIDTH
        }
        get postSidebarWidth() {
            var e;
            return null !== (e = S.postSidebarWidth) && void 0 !== e ? e : h
        }
        get callChatSidebarWidth() {
            var e;
            return null !== (e = S.callChatSidebarWidth) && void 0 !== e ? e : E.DEFAULT_CHAT_SIDEBAR_WIDTH
        }
        get homeSidebarWidth() {
            var e;
            return null !== (e = S.homeSidebarWidth) && void 0 !== e ? e : (null == _ && (_ = Math.max((window.innerWidth - E.CHANNEL_SIDEBAR_WIDTH) * .4, E.DEFAULT_CHAT_SIDEBAR_WIDTH)), _)
        }
        get callHeaderHeight() {
            return S.callHeaderHeight
        }
        get useSystemTheme() {
            var e;
            return null !== (e = S.useSystemTheme) && void 0 !== e ? e : f.SystemThemeState.UNSET
        }
        get activityPanelHeight() {
            return S.activityPanelHeight
        }
        get disableVoiceChannelChangeAlert() {
            var e;
            return null !== (e = S.disableVoiceChannelChangeAlert) && void 0 !== e && e
        }
        get disableEmbeddedActivityPopOutAlert() {
            var e;
            return null !== (e = S.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
        }
        get disableActivityHardwareAccelerationPrompt() {
            var e;
            return null !== (e = S.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
        }
        get disableInviteWithTextChannelActivityLaunch() {
            var e;
            return null !== (e = S.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
        }
        get disableHideSelfStreamAndVideoConfirmationAlert() {
            var e;
            return null !== (e = S.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
        }
        get pushUpsellUserSettingsDismissed() {
            var e;
            return null !== (e = S.pushUpsellDismissed) && void 0 !== e && e
        }
        get disableActivityHostLeftNitroUpsell() {
            var e;
            return null !== (e = S.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
        }
        get disableCallUserConfirmationPrompt() {
            var e;
            return null !== (e = S.disableCallUserConfirmationPrompt) && void 0 !== e && e
        }
        get disableApplicationSubscriptionCancellationSurvey() {
            var e;
            return null !== (e = S.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
        }
        get enableAndroidChatListAnimations() {
            var e;
            return null !== (e = S.enableAndroidChatListAnimations) && void 0 !== e && e
        }
        get darkSidebar() {
            var e;
            return null !== (e = S.darkSidebar) && void 0 !== e && e
        }
        get useMobileChatCustomRenderer() {
            var e;
            return null !== (e = S.useMobileChatCustomRenderer) && void 0 !== e && e
        }
        get saveCameraUploadsToDevice() {
            var e;
            return null === (e = S.saveCameraUploadsToDevice) || void 0 === e || e
        }
        get swipeToReply() {
            var e;
            return null !== (e = S.swipeToReply) && void 0 !== e && e
        }
    }
    m.displayName = "UnsyncedUserSettingsStore", m.persistKey = "UnsyncedUserSettingsStore", m.migrations = [() => {
        let e = c.default.get("UserSettingsStore");
        return c.default.remove("UserSettingsStore"), l.pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
    }];
    var T = new m(d.default, {
        UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
            S = {
                ...S,
                ...e.settings
            }
        },
        LOGOUT: function() {
            S = {
                useSystemTheme: S.useSystemTheme,
                darkSidebar: S.darkSidebar
            }
        },
        LOGIN_SUCCESS: function() {
            null == S && (S = {})
        },
        REGISTER_SUCCESS: function() {},
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return S.darkSidebar = !S.darkSidebar, !0
        }
    })
}