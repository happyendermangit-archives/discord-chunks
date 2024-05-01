function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("570140"),
        a = n("626135"),
        o = n("358085"),
        l = n("981631");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = {
            desktopType: o.isPlatformEmbedded ? l.DesktopNotificationTypes.ALL : l.DesktopNotificationTypes.NEVER,
            disableAllSounds: !1,
            disabledSounds: [],
            ttsType: l.TTSNotificationTypes.NEVER,
            disableUnreadBadge: !1,
            taskbarFlash: !0,
            notifyMessagesInSelectedChannel: !1
        },
        _ = d;

    function c(e, t) {
        !__OVERLAY__ && a.default.track(e, t)
    }

    function E(e) {
        let {
            desktopType: t
        } = e;
        _.desktopType = t, c(l.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
            notifications_enabled: t === l.DesktopNotificationTypes.ALL
        })
    }
    class I extends(i = r.default.DeviceSettingsStore) {
        initialize(e) {
            _ = {
                ...d,
                ...e
            }
        }
        getUserAgnosticState() {
            return _
        }
        getDesktopType() {
            return _.desktopType
        }
        getTTSType() {
            return _.ttsType
        }
        getDisabledSounds() {
            return _.disabledSounds
        }
        getDisableAllSounds() {
            return _.disableAllSounds
        }
        getDisableUnreadBadge() {
            return _.disableUnreadBadge
        }
        getNotifyMessagesInSelectedChannel() {
            return _.notifyMessagesInSelectedChannel
        }
        get taskbarFlash() {
            return _.taskbarFlash
        }
        isSoundDisabled(e) {
            return _.disableAllSounds || -1 !== _.disabledSounds.indexOf(e)
        }
    }
    u(I, "displayName", "NotificationSettingsStore"), u(I, "persistKey", "notifications"), u(I, "migrations", [e => {
        let t = {
            ...e
        };
        return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || l.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = o.isPlatformEmbedded ? l.DesktopNotificationTypes.ALL : l.DesktopNotificationTypes.NEVER), t
    }]), t.default = new I(s.default, {
        NOTIFICATIONS_SET_DESKTOP_TYPE: E,
        NOTIFICATIONS_SET_TTS_TYPE: function(e) {
            let {
                ttsType: t
            } = e;
            _.ttsType = t
        },
        NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
            let {
                sounds: t
            } = e;
            _.disabledSounds = t
        },
        NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
            _.disableAllSounds = !_.disableAllSounds
        },
        NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
            let {
                enabled: t,
                source: n
            } = e;
            c(l.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                enabled: t === l.NotificationPermissionTypes.ENABLED,
                source: n
            }), t === l.NotificationPermissionTypes.BLOCKED ? E({
                desktopType: l.DesktopNotificationTypes.NEVER
            }) : t === l.NotificationPermissionTypes.ENABLED && E({
                desktopType: l.DesktopNotificationTypes.ALL
            })
        },
        NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
            let {
                disableUnreadBadge: t
            } = e;
            _.disableUnreadBadge = t
        },
        NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
            let {
                taskbarFlash: t
            } = e;
            _.taskbarFlash = t
        },
        NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
            let {
                notify: t
            } = e;
            _.notifyMessagesInSelectedChannel = t
        }
    })
}