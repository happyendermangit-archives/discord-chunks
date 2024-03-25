function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("446674"),
        s = n("913144"),
        l = n("599110"),
        a = n("773336"),
        r = n("49111");
    let o = {
            desktopType: a.isPlatformEmbedded ? r.DesktopNotificationTypes.ALL : r.DesktopNotificationTypes.NEVER,
            disableAllSounds: !1,
            disabledSounds: [],
            ttsType: r.TTSNotificationTypes.NEVER,
            disableUnreadBadge: !1,
            taskbarFlash: !0,
            notifyMessagesInSelectedChannel: !1
        },
        u = o;

    function d(e, t) {
        !__OVERLAY__ && l.default.track(e, t)
    }

    function c(e) {
        let {
            desktopType: t
        } = e;
        u.desktopType = t, d(r.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
            notifications_enabled: t === r.DesktopNotificationTypes.ALL
        })
    }
    class f extends i.default.DeviceSettingsStore {
        initialize(e) {
            u = {
                ...o,
                ...e
            }
        }
        getUserAgnosticState() {
            return u
        }
        getDesktopType() {
            return u.desktopType
        }
        getTTSType() {
            return u.ttsType
        }
        getDisabledSounds() {
            return u.disabledSounds
        }
        getDisableAllSounds() {
            return u.disableAllSounds
        }
        getDisableUnreadBadge() {
            return u.disableUnreadBadge
        }
        getNotifyMessagesInSelectedChannel() {
            return u.notifyMessagesInSelectedChannel
        }
        get taskbarFlash() {
            return u.taskbarFlash
        }
        isSoundDisabled(e) {
            return u.disableAllSounds || -1 !== u.disabledSounds.indexOf(e)
        }
    }
    f.displayName = "NotificationSettingsStore", f.persistKey = "notifications", f.migrations = [e => {
        let t = {
            ...e
        };
        return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || r.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = a.isPlatformEmbedded ? r.DesktopNotificationTypes.ALL : r.DesktopNotificationTypes.NEVER), t
    }];
    var T = new f(s.default, {
        NOTIFICATIONS_SET_DESKTOP_TYPE: c,
        NOTIFICATIONS_SET_TTS_TYPE: function(e) {
            let {
                ttsType: t
            } = e;
            u.ttsType = t
        },
        NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
            let {
                sounds: t
            } = e;
            u.disabledSounds = t
        },
        NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
            u.disableAllSounds = !u.disableAllSounds
        },
        NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
            let {
                enabled: t,
                source: n
            } = e;
            d(r.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                enabled: t === r.NotificationPermissionTypes.ENABLED,
                source: n
            }), t === r.NotificationPermissionTypes.BLOCKED ? c({
                desktopType: r.DesktopNotificationTypes.NEVER
            }) : t === r.NotificationPermissionTypes.ENABLED && c({
                desktopType: r.DesktopNotificationTypes.ALL
            })
        },
        NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
            let {
                disableUnreadBadge: t
            } = e;
            u.disableUnreadBadge = t
        },
        NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
            let {
                taskbarFlash: t
            } = e;
            u.taskbarFlash = t
        },
        NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
            let {
                notify: t
            } = e;
            u.notifyMessagesInSelectedChannel = t
        }
    })
}