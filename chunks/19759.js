function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
            return l
        }
    });
    var i, r = n("442837"),
        a = n("570140"),
        s = n("906467");

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
            u = null != e ? e : u, a.default.actionLogger.persist = s.default.isDeveloper
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
            return s.default.isDeveloper && u.displayTools
        }
        get showDevWidget() {
            return s.default.isDeveloper && u.showDevWidget
        }
        get devWidgetPosition() {
            return u.devWidgetPosition
        }
    }
    o(d, "displayName", "DevToolsSettingsStore"), o(d, "persistKey", "DevToolsSettingsStore"), t.default = new d(a.default, {
        DEV_TOOLS_SETTINGS_UPDATE: function(e) {
            s.default.isDeveloper && (u = {
                ...u,
                ...e.settings
            })
        }
    })
}