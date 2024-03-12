function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var s = n("446674"),
        i = n("913144"),
        r = n("599110"),
        a = n("773336"),
        u = n("49111");
    let l = {
            desktopType: a.isPlatformEmbedded ? u.DesktopNotificationTypes.ALL : u.DesktopNotificationTypes.NEVER,
            disableAllSounds: !1,
            disabledSounds: [],
            ttsType: u.TTSNotificationTypes.NEVER,
            disableUnreadBadge: !1,
            taskbarFlash: !0,
            notifyMessagesInSelectedChannel: !1
        },
        o = l;

    function d(e, t) {
        !__OVERLAY__ && r.default.track(e, t)
    }

    function c(e) {
        let {
            desktopType: t
        } = e;
        o.desktopType = t, d(u.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
            notifications_enabled: t === u.DesktopNotificationTypes.ALL
        })
    }
    class E extends s.default.DeviceSettingsStore {
        initialize(e) {
            o = {
                ...l,
                ...e
            }
        }
        getUserAgnosticState() {
            return o
        }
        getDesktopType() {
            return o.desktopType
        }
        getTTSType() {
            return o.ttsType
        }
        getDisabledSounds() {
            return o.disabledSounds
        }
        getDisableAllSounds() {
            return o.disableAllSounds
        }
        getDisableUnreadBadge() {
            return o.disableUnreadBadge
        }
        getNotifyMessagesInSelectedChannel() {
            return o.notifyMessagesInSelectedChannel
        }
        get taskbarFlash() {
            return o.taskbarFlash
        }
        isSoundDisabled(e) {
            return o.disableAllSounds || -1 !== o.disabledSounds.indexOf(e)
        }
    }
    E.displayName = "NotificationSettingsStore", E.persistKey = "notifications", E.migrations = [e => {
        let t = {
            ...e
        };
        return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || u.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = a.isPlatformEmbedded ? u.DesktopNotificationTypes.ALL : u.DesktopNotificationTypes.NEVER), t
    }];
    var f = new E(i.default, {
        NOTIFICATIONS_SET_DESKTOP_TYPE: c,
        NOTIFICATIONS_SET_TTS_TYPE: function(e) {
            let {
                ttsType: t
            } = e;
            o.ttsType = t
        },
        NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
            let {
                sounds: t
            } = e;
            o.disabledSounds = t
        },
        NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
            o.disableAllSounds = !o.disableAllSounds
        },
        NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
            let {
                enabled: t,
                source: n
            } = e;
            d(u.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                enabled: t === u.NotificationPermissionTypes.ENABLED,
                source: n
            }), t === u.NotificationPermissionTypes.BLOCKED ? c({
                desktopType: u.DesktopNotificationTypes.NEVER
            }) : t === u.NotificationPermissionTypes.ENABLED && c({
                desktopType: u.DesktopNotificationTypes.ALL
            })
        },
        NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
            let {
                disableUnreadBadge: t
            } = e;
            o.disableUnreadBadge = t
        },
        NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
            let {
                taskbarFlash: t
            } = e;
            o.taskbarFlash = t
        },
        NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
            let {
                notify: t
            } = e;
            o.notifyMessagesInSelectedChannel = t
        }
    })
}