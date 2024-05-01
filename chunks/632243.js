function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("710845"),
        r = n("358085"),
        s = n("579806");
    let a = new i.default("ProgressBarManager");
    t.default = new class e {
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
        constructor() {
            var e, t, n;
            e = this, n = void 0, (t = "taskID") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}