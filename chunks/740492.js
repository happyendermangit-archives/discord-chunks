function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o, l = n("392711"),
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
    }(i = s || (s = {})).DATA_SAVER = "data_saver", i.STANDARD = "standard", i.BEST = "best", (r = a || (a = {})).VERY_LOW = "very_low", r.LOW = "low", r.MEDIUM = "medium", r.HIGH = "high", r.VERY_HIGH = "very_high";
    let S = (window.innerWidth - I.CHANNEL_SIDEBAR_WIDTH) / 2,
        A = null,
        h = {};
    class m extends(o = d.default.DeviceSettingsStore) {
        initialize(e) {
            var t;
            (h = null != e ? e : {}).darkSidebar = null !== (t = h.darkSidebar) && void 0 !== t ? t : function() {
                var e;
                let t = d.default.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
                return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e
            }()
        }
        getUserAgnosticState() {
            return h
        }
        get displayCompactAvatars() {
            var e;
            return null !== (e = h.displayCompactAvatars) && void 0 !== e && e
        }
        get lowQualityImageMode() {
            var e;
            return null !== (e = h.lowQualityImageMode) && void 0 !== e && e
        }
        get videoUploadQuality() {
            var e;
            return null !== (e = h.videoUploadQuality) && void 0 !== e ? e : "standard"
        }
        get dataSavingMode() {
            var e, t;
            return null !== (t = null !== (e = h.dataSavingMode) && void 0 !== e ? e : h.lowQualityImageMode) && void 0 !== t && t
        }
        get expressionPickerWidth() {
            var e;
            return null !== (e = h.expressionPickerWidth) && void 0 !== e ? e : T.ExpressionPickerWidths.MIN
        }
        get messageRequestSidebarWidth() {
            var e;
            return null !== (e = h.messageRequestSidebarWidth) && void 0 !== e ? e : I.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH
        }
        get threadSidebarWidth() {
            var e;
            return null !== (e = h.threadSidebarWidth) && void 0 !== e ? e : I.DEFAULT_CHAT_SIDEBAR_WIDTH
        }
        get postSidebarWidth() {
            var e;
            return null !== (e = h.postSidebarWidth) && void 0 !== e ? e : S
        }
        get callChatSidebarWidth() {
            var e;
            return null !== (e = h.callChatSidebarWidth) && void 0 !== e ? e : I.DEFAULT_CHAT_SIDEBAR_WIDTH
        }
        get homeSidebarWidth() {
            var e;
            return null !== (e = h.homeSidebarWidth) && void 0 !== e ? e : (null == A && (A = Math.max((window.innerWidth - I.CHANNEL_SIDEBAR_WIDTH) * .4, I.DEFAULT_CHAT_SIDEBAR_WIDTH)), A)
        }
        get callHeaderHeight() {
            return h.callHeaderHeight
        }
        get useSystemTheme() {
            var e;
            return null !== (e = h.useSystemTheme) && void 0 !== e ? e : E.SystemThemeState.UNSET
        }
        get activityPanelHeight() {
            return h.activityPanelHeight
        }
        get disableVoiceChannelChangeAlert() {
            var e;
            return null !== (e = h.disableVoiceChannelChangeAlert) && void 0 !== e && e
        }
        get disableEmbeddedActivityPopOutAlert() {
            var e;
            return null !== (e = h.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
        }
        get disableActivityHardwareAccelerationPrompt() {
            var e;
            return null !== (e = h.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
        }
        get disableInviteWithTextChannelActivityLaunch() {
            var e;
            return null !== (e = h.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
        }
        get disableHideSelfStreamAndVideoConfirmationAlert() {
            var e;
            return null !== (e = h.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
        }
        get pushUpsellUserSettingsDismissed() {
            var e;
            return null !== (e = h.pushUpsellDismissed) && void 0 !== e && e
        }
        get disableActivityHostLeftNitroUpsell() {
            var e;
            return null !== (e = h.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
        }
        get disableCallUserConfirmationPrompt() {
            var e;
            return null !== (e = h.disableCallUserConfirmationPrompt) && void 0 !== e && e
        }
        get disableApplicationSubscriptionCancellationSurvey() {
            var e;
            return null !== (e = h.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
        }
        get enableAndroidChatListAnimations() {
            var e;
            return null !== (e = h.enableAndroidChatListAnimations) && void 0 !== e && e
        }
        get darkSidebar() {
            var e;
            return null !== (e = h.darkSidebar) && void 0 !== e && e
        }
        get useMobileChatCustomRenderer() {
            var e;
            return null !== (e = h.useMobileChatCustomRenderer) && void 0 !== e && e
        }
        get saveCameraUploadsToDevice() {
            var e;
            return null === (e = h.saveCameraUploadsToDevice) || void 0 === e || e
        }
        get swipeToReply() {
            var e;
            return null !== (e = h.swipeToReply) && void 0 !== e && e
        }
    }
    f(m, "displayName", "UnsyncedUserSettingsStore"), f(m, "persistKey", "UnsyncedUserSettingsStore"), f(m, "migrations", [() => {
        let e = _.Storage.get("UserSettingsStore");
        return _.Storage.remove("UserSettingsStore"), u().pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
    }]), t.default = new m(c.default, {
        UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
            h = {
                ...h,
                ...e.settings
            }
        },
        LOGOUT: function() {
            h = {
                useSystemTheme: h.useSystemTheme,
                darkSidebar: h.darkSidebar
            }
        },
        LOGIN_SUCCESS: function() {
            null == h && (h = {})
        },
        REGISTER_SUCCESS: function() {},
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return h.darkSidebar = !h.darkSidebar, !0
        }
    })
}