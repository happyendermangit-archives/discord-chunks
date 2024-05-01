function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140");
    t.default = {
        setDesktopType(e) {
            i.default.dispatch({
                type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
                desktopType: e
            })
        },
        setTTSType(e) {
            i.default.dispatch({
                type: "NOTIFICATIONS_SET_TTS_TYPE",
                ttsType: e
            })
        },
        setDisabledSounds(e) {
            i.default.dispatch({
                type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
                sounds: e
            })
        },
        toggleDisableAllSounds() {
            i.default.dispatch({
                type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED"
            })
        },
        setDisableUnreadBadge(e) {
            i.default.dispatch({
                type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
                disableUnreadBadge: e
            })
        },
        setTaskbarFlash(e) {
            i.default.dispatch({
                type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
                taskbarFlash: e
            })
        },
        setNotifyMessagesInSelectedChannel(e) {
            i.default.dispatch({
                type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
                notify: e
            })
        },
        setPermissionsState(e, t) {
            i.default.dispatch({
                type: "NOTIFICATIONS_SET_PERMISSION_STATE",
                enabled: e,
                source: t
            })
        },
        showNotification(e, t, n, r) {
            let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            i.default.dispatch({
                type: "NOTIFICATION_CREATE",
                icon: e,
                title: t,
                body: n,
                trackingProps: r,
                options: {
                    ...a,
                    onClick() {
                        var e;
                        null === (e = a.onClick) || void 0 === e || e.call(a), i.default.dispatch({
                            type: "NOTIFICATION_CLICK"
                        })
                    }
                }
            })
        },
        clickedNotification() {
            i.default.dispatch({
                type: "NOTIFICATION_CLICK"
            })
        }
    }
}