function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("392711"),
        l = n.n(s),
        c = n("898511"),
        f = n("242880"),
        d = n("629815");
    n("848859");
    var _ = n("223228"),
        E = n("281767"),
        p = n("980671");

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = i || (i = {})).DATA_SAVER = "data_saver", r.STANDARD = "standard", r.BEST = "best", (o = a || (a = {})).VERY_LOW = "very_low", o.LOW = "low", o.MEDIUM = "medium", o.HIGH = "high", o.VERY_HIGH = "very_high";
    var O = (window.innerWidth - E.CHANNEL_SIDEBAR_WIDTH) / 2,
        T = null,
        S = {},
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = I(t);
                if (n) {
                    var a = I(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "initialize",
                value: function(e) {
                    var t, n, r;
                    (S = null != e ? e : {}).darkSidebar = null !== (t = S.darkSidebar) && void 0 !== t ? t : null !== (n = null == (r = c.default.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state) ? void 0 : r.darkSidebar) && void 0 !== n && n
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return S
                }
            }, {
                key: "displayCompactAvatars",
                get: function() {
                    var e;
                    return null !== (e = S.displayCompactAvatars) && void 0 !== e && e
                }
            }, {
                key: "lowQualityImageMode",
                get: function() {
                    var e;
                    return null !== (e = S.lowQualityImageMode) && void 0 !== e && e
                }
            }, {
                key: "videoUploadQuality",
                get: function() {
                    var e;
                    return null !== (e = S.videoUploadQuality) && void 0 !== e ? e : "standard"
                }
            }, {
                key: "dataSavingMode",
                get: function() {
                    var e, t;
                    return null !== (t = null !== (e = S.dataSavingMode) && void 0 !== e ? e : S.lowQualityImageMode) && void 0 !== t && t
                }
            }, {
                key: "expressionPickerWidth",
                get: function() {
                    var e;
                    return null !== (e = S.expressionPickerWidth) && void 0 !== e ? e : p.ExpressionPickerWidths.MIN
                }
            }, {
                key: "messageRequestSidebarWidth",
                get: function() {
                    var e;
                    return null !== (e = S.messageRequestSidebarWidth) && void 0 !== e ? e : E.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH
                }
            }, {
                key: "threadSidebarWidth",
                get: function() {
                    var e;
                    return null !== (e = S.threadSidebarWidth) && void 0 !== e ? e : E.DEFAULT_CHAT_SIDEBAR_WIDTH
                }
            }, {
                key: "postSidebarWidth",
                get: function() {
                    var e;
                    return null !== (e = S.postSidebarWidth) && void 0 !== e ? e : O
                }
            }, {
                key: "callChatSidebarWidth",
                get: function() {
                    var e;
                    return null !== (e = S.callChatSidebarWidth) && void 0 !== e ? e : E.DEFAULT_CHAT_SIDEBAR_WIDTH
                }
            }, {
                key: "homeSidebarWidth",
                get: function() {
                    var e;
                    return null !== (e = S.homeSidebarWidth) && void 0 !== e ? e : (null == T && (T = Math.max((window.innerWidth - E.CHANNEL_SIDEBAR_WIDTH) * .4, E.DEFAULT_CHAT_SIDEBAR_WIDTH)), T)
                }
            }, {
                key: "callHeaderHeight",
                get: function() {
                    return S.callHeaderHeight
                }
            }, {
                key: "useSystemTheme",
                get: function() {
                    var e;
                    return null !== (e = S.useSystemTheme) && void 0 !== e ? e : _.SystemThemeState.UNSET
                }
            }, {
                key: "activityPanelHeight",
                get: function() {
                    return S.activityPanelHeight
                }
            }, {
                key: "disableVoiceChannelChangeAlert",
                get: function() {
                    var e;
                    return null !== (e = S.disableVoiceChannelChangeAlert) && void 0 !== e && e
                }
            }, {
                key: "disableEmbeddedActivityPopOutAlert",
                get: function() {
                    var e;
                    return null !== (e = S.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
                }
            }, {
                key: "disableActivityHardwareAccelerationPrompt",
                get: function() {
                    var e;
                    return null !== (e = S.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
                }
            }, {
                key: "disableInviteWithTextChannelActivityLaunch",
                get: function() {
                    var e;
                    return null !== (e = S.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
                }
            }, {
                key: "disableHideSelfStreamAndVideoConfirmationAlert",
                get: function() {
                    var e;
                    return null !== (e = S.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
                }
            }, {
                key: "pushUpsellUserSettingsDismissed",
                get: function() {
                    var e;
                    return null !== (e = S.pushUpsellDismissed) && void 0 !== e && e
                }
            }, {
                key: "disableActivityHostLeftNitroUpsell",
                get: function() {
                    var e;
                    return null !== (e = S.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
                }
            }, {
                key: "disableCallUserConfirmationPrompt",
                get: function() {
                    var e;
                    return null !== (e = S.disableCallUserConfirmationPrompt) && void 0 !== e && e
                }
            }, {
                key: "disableApplicationSubscriptionCancellationSurvey",
                get: function() {
                    var e;
                    return null !== (e = S.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
                }
            }, {
                key: "enableAndroidChatListAnimations",
                get: function() {
                    var e;
                    return null !== (e = S.enableAndroidChatListAnimations) && void 0 !== e && e
                }
            }, {
                key: "darkSidebar",
                get: function() {
                    var e;
                    return null !== (e = S.darkSidebar) && void 0 !== e && e
                }
            }, {
                key: "useMobileChatCustomRenderer",
                get: function() {
                    var e;
                    return null !== (e = S.useMobileChatCustomRenderer) && void 0 !== e && e
                }
            }, {
                key: "saveCameraUploadsToDevice",
                get: function() {
                    var e;
                    return null === (e = S.saveCameraUploadsToDevice) || void 0 === e || e
                }
            }, {
                key: "swipeToReply",
                get: function() {
                    var e;
                    return null !== (e = S.swipeToReply) && void 0 !== e && e
                }
            }], m(r.prototype, o), i && m(r, i), u
        }(c.default.DeviceSettingsStore);
    y(v, "displayName", "UnsyncedUserSettingsStore"), y(v, "persistKey", "UnsyncedUserSettingsStore"), y(v, "migrations", [function() {
        var e = f.Storage.get("UserSettingsStore");
        return f.Storage.remove("UserSettingsStore"), l().pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
    }]), t.default = new v(d.default, {
        UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
            S = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        y(e, t, n[t])
                    })
                }
                return e
            }({}, S, e.settings)
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