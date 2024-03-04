function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSupportedPlatform: function() {
            return r
        },
        isLaunchable: function() {
            return a
        }
    });
    var i = n("964889"),
        s = n("773336");

    function r() {
        return (0, s.isWindows)() || (0, s.isMac)()
    }

    function a(e) {
        let {
            LibraryApplicationStore: t,
            LaunchableGameStore: n,
            DispatchApplicationStore: s,
            ConnectedAppsStore: r,
            applicationId: a,
            branchId: o
        } = e;
        if (r.isConnected(a)) return !0;
        if (null == o && (o = a), s.isLaunchable(a, o)) return !0;
        let l = t.getLibraryApplication(a, o);
        return !(null != l && (0, i.isUserEntitledToLibraryApplication)(l)) && n.isLaunchable(a)
    }
}