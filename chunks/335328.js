function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("870331"),
        u = n("374550"),
        s = n("281767");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = {
            desktopType: u.isPlatformEmbedded ? s.DesktopNotificationTypes.ALL : s.DesktopNotificationTypes.NEVER,
            disableAllSounds: !1,
            disabledSounds: [],
            ttsType: s.TTSNotificationTypes.NEVER,
            disableUnreadBadge: !1,
            taskbarFlash: !0,
            notifyMessagesInSelectedChannel: !1
        },
        p = E;

    function m(e, t) {
        !__OVERLAY__ && a.default.track(e, t)
    }

    function y(e) {
        var t = e.desktopType;
        p.desktopType = t, m(s.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
            notifications_enabled: t === s.DesktopNotificationTypes.ALL
        })
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
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
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
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
                p = d({}, E, e)
            }
        }, {
            key: "getUserAgnosticState",
            value: function() {
                return p
            }
        }, {
            key: "getDesktopType",
            value: function() {
                return p.desktopType
            }
        }, {
            key: "getTTSType",
            value: function() {
                return p.ttsType
            }
        }, {
            key: "getDisabledSounds",
            value: function() {
                return p.disabledSounds
            }
        }, {
            key: "getDisableAllSounds",
            value: function() {
                return p.disableAllSounds
            }
        }, {
            key: "getDisableUnreadBadge",
            value: function() {
                return p.disableUnreadBadge
            }
        }, {
            key: "getNotifyMessagesInSelectedChannel",
            value: function() {
                return p.notifyMessagesInSelectedChannel
            }
        }, {
            key: "taskbarFlash",
            get: function() {
                return p.taskbarFlash
            }
        }, {
            key: "isSoundDisabled",
            value: function(e) {
                return p.disableAllSounds || -1 !== p.disabledSounds.indexOf(e)
            }
        }], l(r.prototype, o), i && l(r, i), u
    }(o.default.DeviceSettingsStore);
    c(I, "displayName", "NotificationSettingsStore"), c(I, "persistKey", "notifications"), c(I, "migrations", [function(e) {
        var t = d({}, e);
        return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || s.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = u.isPlatformEmbedded ? s.DesktopNotificationTypes.ALL : s.DesktopNotificationTypes.NEVER), t
    }]), t.default = new I(i.default, {
        NOTIFICATIONS_SET_DESKTOP_TYPE: y,
        NOTIFICATIONS_SET_TTS_TYPE: function(e) {
            var t = e.ttsType;
            p.ttsType = t
        },
        NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
            var t = e.sounds;
            p.disabledSounds = t
        },
        NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
            p.disableAllSounds = !p.disableAllSounds
        },
        NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
            var t = e.enabled,
                n = e.source;
            m(s.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                enabled: t === s.NotificationPermissionTypes.ENABLED,
                source: n
            }), t === s.NotificationPermissionTypes.BLOCKED ? y({
                desktopType: s.DesktopNotificationTypes.NEVER
            }) : t === s.NotificationPermissionTypes.ENABLED && y({
                desktopType: s.DesktopNotificationTypes.ALL
            })
        },
        NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
            var t = e.disableUnreadBadge;
            p.disableUnreadBadge = t
        },
        NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
            var t = e.taskbarFlash;
            p.taskbarFlash = t
        },
        NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
            var t = e.notify;
            p.notifyMessagesInSelectedChannel = t
        }
    })
}