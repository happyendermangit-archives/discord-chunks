function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLaunchable: function() {
            return a
        },
        isSupportedPlatform: function() {
            return s
        }
    });
    var i = n("780570"),
        r = n("358085");

    function s() {
        return (0, r.isWindows)() || (0, r.isMac)()
    }

    function a(e) {
        let {
            LibraryApplicationStore: t,
            LaunchableGameStore: n,
            DispatchApplicationStore: r,
            ConnectedAppsStore: s,
            applicationId: a,
            branchId: o
        } = e;
        if (s.isConnected(a)) return !0;
        if (null == o && (o = a), r.isLaunchable(a, o)) return !0;
        let l = t.getLibraryApplication(a, o);
        return !(null != l && (0, i.isUserEntitledToLibraryApplication)(l)) && n.isLaunchable(a)
    }
}