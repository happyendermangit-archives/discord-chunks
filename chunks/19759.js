function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
            return l
        }
    });
    var i, r = n("442837"),
        s = n("570140"),
        a = n("906467");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = 360,
        u = {
            sidebarWidth: 360,
            lastOpenTabId: null,
            displayTools: !1,
            showDevWidget: !1,
            devWidgetPosition: {
                x: 0,
                y: 0
            }
        };
    class d extends(i = r.default.DeviceSettingsStore) {
        initialize(e) {
            u = null != e ? e : u, s.default.actionLogger.persist = a.default.isDeveloper
        }
        getUserAgnosticState() {
            return u
        }
        get sidebarWidth() {
            return this.displayTools ? u.sidebarWidth : 0
        }
        get lastOpenTabId() {
            var e;
            return null !== (e = u.lastOpenTabId) && void 0 !== e ? e : null
        }
        get displayTools() {
            return a.default.isDeveloper && u.displayTools
        }
        get showDevWidget() {
            return a.default.isDeveloper && u.showDevWidget
        }
        get devWidgetPosition() {
            return u.devWidgetPosition
        }
    }
    o(d, "displayName", "DevToolsSettingsStore"), o(d, "persistKey", "DevToolsSettingsStore"), t.default = new d(s.default, {
        DEV_TOOLS_SETTINGS_UPDATE: function(e) {
            a.default.isDeveloper && (u = {
                ...u,
                ...e.settings
            })
        }
    })
}