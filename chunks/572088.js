function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815");
    t.default = {
        setDesktopType: function(e) {
            r.default.dispatch({
                type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
                desktopType: e
            })
        },
        setTTSType: function(e) {
            r.default.dispatch({
                type: "NOTIFICATIONS_SET_TTS_TYPE",
                ttsType: e
            })
        },
        setDisabledSounds: function(e) {
            r.default.dispatch({
                type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
                sounds: e
            })
        },
        toggleDisableAllSounds: function() {
            r.default.dispatch({
                type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED"
            })
        },
        setDisableUnreadBadge: function(e) {
            r.default.dispatch({
                type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
                disableUnreadBadge: e
            })
        },
        setTaskbarFlash: function(e) {
            r.default.dispatch({
                type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
                taskbarFlash: e
            })
        },
        setNotifyMessagesInSelectedChannel: function(e) {
            r.default.dispatch({
                type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
                notify: e
            })
        },
        setPermissionsState: function(e, t) {
            r.default.dispatch({
                type: "NOTIFICATIONS_SET_PERMISSION_STATE",
                enabled: e,
                source: t
            })
        },
        showNotification: function(e, t, n, o) {
            var i, a, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            r.default.dispatch({
                type: "NOTIFICATION_CREATE",
                icon: e,
                title: t,
                body: n,
                trackingProps: o,
                options: (i = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, o, i;
                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = i
                        })
                    }
                    return e
                }({}, u), a = (a = {
                    onClick: function() {
                        var e;
                        null === (e = u.onClick) || void 0 === e || e.call(u), r.default.dispatch({
                            type: "NOTIFICATION_CLICK"
                        })
                    }
                }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(a)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
                }), i)
            })
        },
        clickedNotification: function() {
            r.default.dispatch({
                type: "NOTIFICATION_CLICK"
            })
        }
    }
}