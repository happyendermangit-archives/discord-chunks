function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("35523"),
        o = n("374550"),
        i = n("517727");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var u = new r.default("ProgressBarManager"),
        s = function() {
            var e, t, n;

            function r() {
                var e, t, n;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), e = this, n = void 0, (t = "taskID") in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }
            return e = r, t = [{
                key: "setProgress",
                value: function(e, t) {
                    if (!(0, o.isDesktop)()) throw Error("cannot set progress from non-native");
                    if (null != this.taskID && this.taskID !== e) {
                        u.warn("".concat(this.taskID, " is already running. cannot set ").concat(e));
                        return
                    }
                    this.taskID = e, i.default.window.setProgressBar(t)
                }
            }, {
                key: "clearProgress",
                value: function(e) {
                    if (!(0, o.isDesktop)()) throw Error("cannot clear progress from non-native");
                    if (null == this.taskID) {
                        u.warn("cannot clear progress. No current progress running.");
                        return
                    }
                    if (this.taskID !== e) {
                        u.warn("cannot clear progress of ".concat(e, " when ").concat(this.taskID, " is running"));
                        return
                    }
                    this.taskID = null, i.default.window.setProgressBar(-1)
                }
            }], a(e.prototype, t), n && a(e, n), r
        }();
    t.default = new s
}