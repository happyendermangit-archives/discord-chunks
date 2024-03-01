function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSupportedPlatform: function() {
            return s
        },
        isLaunchable: function() {
            return a
        }
    });
    var i = n("964889"),
        r = n("773336");

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