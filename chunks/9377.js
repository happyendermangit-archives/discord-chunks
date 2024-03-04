function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDefaultLibraryApplicationAction: function() {
            return r
        }
    });
    var i = n("602043"),
        s = n("49111");

    function r(e, t, n) {
        let r = t.getState(e.id, e.branchId),
            a = n.getQueuePosition(e.id, e.branchId),
            o = n.paused;
        if (null != r) {
            if (null == a || -1 === a) switch (r.type) {
                case s.LocalDispatchApplicationStates.INSTALLING:
                    return s.LibraryApplicationActions.INSTALL;
                case s.LocalDispatchApplicationStates.UPDATING:
                case s.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                    return s.LibraryApplicationActions.UPDATE
            }
            switch (r.type) {
                case s.LocalDispatchApplicationStates.INSTALLING:
                case s.LocalDispatchApplicationStates.UPDATING:
                case s.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                case s.LocalDispatchApplicationStates.REPAIRING:
                    if (a > 0) return s.LibraryApplicationActions.MOVE_UP;
                    if (o) return s.LibraryApplicationActions.RESUME;
                    return s.LibraryApplicationActions.PAUSE;
                case s.LocalDispatchApplicationStates.UP_TO_DATE:
                    return s.LibraryApplicationActions.PLAY;
                case s.LocalDispatchApplicationStates.UNINSTALLING:
                    return null
            }
        }
        return null != a && a > 0 ? s.LibraryApplicationActions.MOVE_UP : (0, i.isSupportedPlatform)() ? s.LibraryApplicationActions.INSTALL : null
    }
}