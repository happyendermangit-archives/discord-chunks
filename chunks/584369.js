function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
            return r
        },
        default: function() {
            return d
        }
    });
    var a = n("446674"),
        i = n("913144"),
        l = n("368694");
    let r = 360,
        s = {
            sidebarWidth: r,
            lastOpenTabId: null,
            displayTools: !1,
            showDevWidget: !1,
            devWidgetPosition: {
                x: 0,
                y: 0
            }
        };
    class u extends a.default.DeviceSettingsStore {
        initialize(e) {
            s = null != e ? e : s, i.default.actionLogger.persist = l.default.isDeveloper
        }
        getUserAgnosticState() {
            return s
        }
        get sidebarWidth() {
            return this.displayTools ? s.sidebarWidth : 0
        }
        get lastOpenTabId() {
            var e;
            return null !== (e = s.lastOpenTabId) && void 0 !== e ? e : null
        }
        get displayTools() {
            return l.default.isDeveloper && s.displayTools
        }
        get showDevWidget() {
            return l.default.isDeveloper && s.showDevWidget
        }
        get devWidgetPosition() {
            return s.devWidgetPosition
        }
    }
    u.displayName = "DevToolsSettingsStore", u.persistKey = "DevToolsSettingsStore";
    var d = new u(i.default, {
        DEV_TOOLS_SETTINGS_UPDATE: function(e) {
            l.default.isDeveloper && (s = {
                ...s,
                ...e.settings
            })
        }
    })
}