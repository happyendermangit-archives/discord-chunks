function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDefaultLibraryApplicationAction: function() {
            return s
        }
    });
    var i = n("804739"),
        r = n("981631");

    function s(e, t, n) {
        let s = t.getState(e.id, e.branchId),
            a = n.getQueuePosition(e.id, e.branchId),
            o = n.paused;
        if (null != s) {
            if (null == a || -1 === a) switch (s.type) {
                case r.LocalDispatchApplicationStates.INSTALLING:
                    return r.LibraryApplicationActions.INSTALL;
                case r.LocalDispatchApplicationStates.UPDATING:
                case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                    return r.LibraryApplicationActions.UPDATE
            }
            switch (s.type) {
                case r.LocalDispatchApplicationStates.INSTALLING:
                case r.LocalDispatchApplicationStates.UPDATING:
                case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                case r.LocalDispatchApplicationStates.REPAIRING:
                    if (a > 0) return r.LibraryApplicationActions.MOVE_UP;
                    if (o) return r.LibraryApplicationActions.RESUME;
                    return r.LibraryApplicationActions.PAUSE;
                case r.LocalDispatchApplicationStates.UP_TO_DATE:
                    return r.LibraryApplicationActions.PLAY;
                case r.LocalDispatchApplicationStates.UNINSTALLING:
                    return null
            }
        }
        return null != a && a > 0 ? r.LibraryApplicationActions.MOVE_UP : (0, i.isSupportedPlatform)() ? r.LibraryApplicationActions.INSTALL : null
    }
}