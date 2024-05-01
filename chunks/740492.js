function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o, l = n("392711"),
        u = n.n(l),
        d = n("442837"),
        _ = n("433517"),
        c = n("570140");
    n("541049");
    var E = n("874893"),
        I = n("981631"),
        T = n("957825");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(i = a || (a = {})).DATA_SAVER = "data_saver", i.STANDARD = "standard", i.BEST = "best", (r = s || (s = {})).VERY_LOW = "very_low", r.LOW = "low", r.MEDIUM = "medium", r.HIGH = "high", r.VERY_HIGH = "very_high";
    let S = (window.innerWidth - I.CHANNEL_SIDEBAR_WIDTH) / 2,
        h = null,
        A = {};
    class m extends(o = d.default.DeviceSettingsStore) {
        initialize(e) {
            var t;
            (A = null != e ? e : {}).darkSidebar = null !== (t = A.darkSidebar) && void 0 !== t ? t : function() {
                var e;
                let t = d.default.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
                return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e
            }()
        }
        getUserAgnosticState() {
            return A
        }
        get displayCompactAvatars() {
            var e;
            return null !== (e = A.displayCompactAvatars) && void 0 !== e && e
        }
        get lowQualityImageMode() {
            var e;
            return null !== (e = A.lowQualityImageMode) && void 0 !== e && e
        }
        get videoUploadQuality() {
            var e;
            return null !== (e = A.videoUploadQuality) && void 0 !== e ? e : "standard"
        }
        get dataSavingMode() {
            var e, t;
            return null !== (t = null !== (e = A.dataSavingMode) && void 0 !== e ? e : A.lowQualityImageMode) && void 0 !== t && t
        }
        get expressionPickerWidth() {
            var e;
            return null !== (e = A.expressionPickerWidth) && void 0 !== e ? e : T.ExpressionPickerWidths.MIN
        }
        get messageRequestSidebarWidth() {
            var e;
            return null !== (e = A.messageRequestSidebarWidth) && void 0 !== e ? e : I.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH
        }
        get threadSidebarWidth() {
            var e;
            return null !== (e = A.threadSidebarWidth) && void 0 !== e ? e : I.DEFAULT_CHAT_SIDEBAR_WIDTH
        }
        get postSidebarWidth() {
            var e;
            return null !== (e = A.postSidebarWidth) && void 0 !== e ? e : S
        }
        get callChatSidebarWidth() {
            var e;
            return null !== (e = A.callChatSidebarWidth) && void 0 !== e ? e : I.DEFAULT_CHAT_SIDEBAR_WIDTH
        }
        get homeSidebarWidth() {
            var e;
            return null !== (e = A.homeSidebarWidth) && void 0 !== e ? e : (null == h && (h = Math.max((window.innerWidth - I.CHANNEL_SIDEBAR_WIDTH) * .4, I.DEFAULT_CHAT_SIDEBAR_WIDTH)), h)
        }
        get callHeaderHeight() {
            return A.callHeaderHeight
        }
        get useSystemTheme() {
            var e;
            return null !== (e = A.useSystemTheme) && void 0 !== e ? e : E.SystemThemeState.UNSET
        }
        get activityPanelHeight() {
            return A.activityPanelHeight
        }
        get disableVoiceChannelChangeAlert() {
            var e;
            return null !== (e = A.disableVoiceChannelChangeAlert) && void 0 !== e && e
        }
        get disableEmbeddedActivityPopOutAlert() {
            var e;
            return null !== (e = A.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
        }
        get disableActivityHardwareAccelerationPrompt() {
            var e;
            return null !== (e = A.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
        }
        get disableInviteWithTextChannelActivityLaunch() {
            var e;
            return null !== (e = A.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
        }
        get disableHideSelfStreamAndVideoConfirmationAlert() {
            var e;
            return null !== (e = A.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
        }
        get pushUpsellUserSettingsDismissed() {
            var e;
            return null !== (e = A.pushUpsellDismissed) && void 0 !== e && e
        }
        get disableActivityHostLeftNitroUpsell() {
            var e;
            return null !== (e = A.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
        }
        get disableCallUserConfirmationPrompt() {
            var e;
            return null !== (e = A.disableCallUserConfirmationPrompt) && void 0 !== e && e
        }
        get disableApplicationSubscriptionCancellationSurvey() {
            var e;
            return null !== (e = A.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
        }
        get enableAndroidChatListAnimations() {
            var e;
            return null !== (e = A.enableAndroidChatListAnimations) && void 0 !== e && e
        }
        get darkSidebar() {
            var e;
            return null !== (e = A.darkSidebar) && void 0 !== e && e
        }
        get useMobileChatCustomRenderer() {
            var e;
            return null !== (e = A.useMobileChatCustomRenderer) && void 0 !== e && e
        }
        get saveCameraUploadsToDevice() {
            var e;
            return null === (e = A.saveCameraUploadsToDevice) || void 0 === e || e
        }
        get swipeToReply() {
            var e;
            return null !== (e = A.swipeToReply) && void 0 !== e && e
        }
    }
    f(m, "displayName", "UnsyncedUserSettingsStore"), f(m, "persistKey", "UnsyncedUserSettingsStore"), f(m, "migrations", [() => {
        let e = _.Storage.get("UserSettingsStore");
        return _.Storage.remove("UserSettingsStore"), u().pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
    }]), t.default = new m(c.default, {
        UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
            A = {
                ...A,
                ...e.settings
            }
        },
        LOGOUT: function() {
            A = {
                useSystemTheme: A.useSystemTheme,
                darkSidebar: A.darkSidebar
            }
        },
        LOGIN_SUCCESS: function() {
            null == A && (A = {})
        },
        REGISTER_SUCCESS: function() {},
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return A.darkSidebar = !A.darkSidebar, !0
        }
    })
}