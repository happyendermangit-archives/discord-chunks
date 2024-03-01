function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("70102");
    var i = n("605250"),
        r = n("773336"),
        s = n("49671");
    let a = new i.default("ProgressBarManager");
    var o = new class e {
        setProgress(e, t) {
            if (!(0, r.isDesktop)()) throw Error("cannot set progress from non-native");
            if (null != this.taskID && this.taskID !== e) {
                a.warn("".concat(this.taskID, " is already running. cannot set ").concat(e));
                return
            }
            this.taskID = e, s.default.window.setProgressBar(t)
        }
        clearProgress(e) {
            if (!(0, r.isDesktop)()) throw Error("cannot clear progress from non-native");
            if (null == this.taskID) {
                a.warn("cannot clear progress. No current progress running.");
                return
            }
            if (this.taskID !== e) {
                a.warn("cannot clear progress of ".concat(e, " when ").concat(this.taskID, " is running"));
                return
            }
            this.taskID = null, s.default.window.setProgressBar(-1)
        }
    }
}