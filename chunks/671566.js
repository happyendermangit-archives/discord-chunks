function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLaunchable: function() {
            return a
        },
        isSupportedPlatform: function() {
            return i
        }
    });
    var r = n("367602"),
        o = n("374550");

    function i() {
        return (0, o.isWindows)() || (0, o.isMac)()
    }

    function a(e) {
        var t = e.LibraryApplicationStore,
            n = e.LaunchableGameStore,
            o = e.DispatchApplicationStore,
            i = e.ConnectedAppsStore,
            a = e.applicationId,
            u = e.branchId;
        if (i.isConnected(a)) return !0;
        if (null == u && (u = a), o.isLaunchable(a, u)) return !0;
        var s = t.getLibraryApplication(a, u);
        return !(null != s && (0, r.isUserEntitledToLibraryApplication)(s)) && n.isLaunchable(a)
    }
}