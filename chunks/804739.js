function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLaunchable: function() {
            return s
        },
        isSupportedPlatform: function() {
            return a
        }
    });
    var i = n("780570"),
        r = n("358085");

    function a() {
        return (0, r.isWindows)() || (0, r.isMac)()
    }

    function s(e) {
        let {
            LibraryApplicationStore: t,
            LaunchableGameStore: n,
            DispatchApplicationStore: r,
            ConnectedAppsStore: a,
            applicationId: s,
            branchId: o
        } = e;
        if (a.isConnected(s)) return !0;
        if (null == o && (o = s), r.isLaunchable(s, o)) return !0;
        let l = t.getLibraryApplication(s, o);
        return !(null != l && (0, i.isUserEntitledToLibraryApplication)(l)) && n.isLaunchable(s)
    }
}