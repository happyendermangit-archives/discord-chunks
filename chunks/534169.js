function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDefaultLibraryApplicationAction: function() {
            return i
        }
    });
    var r = n("671566"),
        o = n("281767");

    function i(e, t, n) {
        var i = t.getState(e.id, e.branchId),
            a = n.getQueuePosition(e.id, e.branchId),
            u = n.paused;
        if (null != i) {
            if (null == a || -1 === a) switch (i.type) {
                case o.LocalDispatchApplicationStates.INSTALLING:
                    return o.LibraryApplicationActions.INSTALL;
                case o.LocalDispatchApplicationStates.UPDATING:
                case o.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                    return o.LibraryApplicationActions.UPDATE
            }
            switch (i.type) {
                case o.LocalDispatchApplicationStates.INSTALLING:
                case o.LocalDispatchApplicationStates.UPDATING:
                case o.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                case o.LocalDispatchApplicationStates.REPAIRING:
                    if (a > 0) return o.LibraryApplicationActions.MOVE_UP;
                    if (u) return o.LibraryApplicationActions.RESUME;
                    return o.LibraryApplicationActions.PAUSE;
                case o.LocalDispatchApplicationStates.UP_TO_DATE:
                    return o.LibraryApplicationActions.PLAY;
                case o.LocalDispatchApplicationStates.UNINSTALLING:
                    return null
            }
        }
        return null != a && a > 0 ? o.LibraryApplicationActions.MOVE_UP : (0, r.isSupportedPlatform)() ? o.LibraryApplicationActions.INSTALL : null
    }
}