function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDefaultLibraryApplicationAction: function() {
            return a
        }
    });
    var i = n("804739"),
        r = n("981631");

    function a(e, t, n) {
        let a = t.getState(e.id, e.branchId),
            s = n.getQueuePosition(e.id, e.branchId),
            o = n.paused;
        if (null != a) {
            if (null == s || -1 === s) switch (a.type) {
                case r.LocalDispatchApplicationStates.INSTALLING:
                    return r.LibraryApplicationActions.INSTALL;
                case r.LocalDispatchApplicationStates.UPDATING:
                case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                    return r.LibraryApplicationActions.UPDATE
            }
            switch (a.type) {
                case r.LocalDispatchApplicationStates.INSTALLING:
                case r.LocalDispatchApplicationStates.UPDATING:
                case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                case r.LocalDispatchApplicationStates.REPAIRING:
                    if (s > 0) return r.LibraryApplicationActions.MOVE_UP;
                    if (o) return r.LibraryApplicationActions.RESUME;
                    return r.LibraryApplicationActions.PAUSE;
                case r.LocalDispatchApplicationStates.UP_TO_DATE:
                    return r.LibraryApplicationActions.PLAY;
                case r.LocalDispatchApplicationStates.UNINSTALLING:
                    return null
            }
        }
        return null != s && s > 0 ? r.LibraryApplicationActions.MOVE_UP : (0, i.isSupportedPlatform)() ? r.LibraryApplicationActions.INSTALL : null
    }
}