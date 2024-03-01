function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
            return d
        },
        default: function() {
            return s
        }
    });
    var a = n("446674"),
        i = n("913144"),
        l = n("368694");
    let d = 360,
        r = {
            sidebarWidth: d,
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
            r = null != e ? e : r, i.default.actionLogger.persist = l.default.isDeveloper
        }
        getUserAgnosticState() {
            return r
        }
        get sidebarWidth() {
            return this.displayTools ? r.sidebarWidth : 0
        }
        get lastOpenTabId() {
            var e;
            return null !== (e = r.lastOpenTabId) && void 0 !== e ? e : null
        }
        get displayTools() {
            return l.default.isDeveloper && r.displayTools
        }
        get showDevWidget() {
            return l.default.isDeveloper && r.showDevWidget
        }
        get devWidgetPosition() {
            return r.devWidgetPosition
        }
    }
    u.displayName = "DevToolsSettingsStore", u.persistKey = "DevToolsSettingsStore";
    var s = new u(i.default, {
        DEV_TOOLS_SETTINGS_UPDATE: function(e) {
            l.default.isDeveloper && (r = {
                ...r,
                ...e.settings
            })
        }
    })
}