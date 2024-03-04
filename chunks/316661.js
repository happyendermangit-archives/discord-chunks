function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("446674"),
        s = n("913144");
    let r = null,
        a = !1;
    class o extends i.default.Store {
        getLastProgress() {
            return r
        }
        isRunning() {
            return a
        }
    }
    o.displayName = "DispatchApplicationLaunchSetupStore";
    var l = new o(s.default, {
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
            a = !0
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function(e) {
            let {
                progress: t,
                total: n,
                name: i
            } = e;
            r = {
                progress: t,
                total: n,
                name: i
            }
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
            r = null, a = !1
        }
    })
}