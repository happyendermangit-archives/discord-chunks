function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var a = n("913144"),
        r = {
            setDesktopType(e) {
                a.default.dispatch({
                    type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
                    desktopType: e
                })
            },
            setTTSType(e) {
                a.default.dispatch({
                    type: "NOTIFICATIONS_SET_TTS_TYPE",
                    ttsType: e
                })
            },
            setDisabledSounds(e) {
                a.default.dispatch({
                    type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
                    sounds: e
                })
            },
            toggleDisableAllSounds() {
                a.default.dispatch({
                    type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED"
                })
            },
            setDisableUnreadBadge(e) {
                a.default.dispatch({
                    type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
                    disableUnreadBadge: e
                })
            },
            setTaskbarFlash(e) {
                a.default.dispatch({
                    type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
                    taskbarFlash: e
                })
            },
            setNotifyMessagesInSelectedChannel(e) {
                a.default.dispatch({
                    type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
                    notify: e
                })
            },
            setPermissionsState(e, t) {
                a.default.dispatch({
                    type: "NOTIFICATIONS_SET_PERMISSION_STATE",
                    enabled: e,
                    source: t
                })
            },
            showNotification(e, t, n, r) {
                let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                a.default.dispatch({
                    type: "NOTIFICATION_CREATE",
                    icon: e,
                    title: t,
                    body: n,
                    trackingProps: r,
                    options: {
                        ...s,
                        onClick() {
                            var e;
                            null === (e = s.onClick) || void 0 === e || e.call(s), a.default.dispatch({
                                type: "NOTIFICATION_CLICK"
                            })
                        }
                    }
                })
            },
            clickedNotification() {
                a.default.dispatch({
                    type: "NOTIFICATION_CLICK"
                })
            }
        }
}