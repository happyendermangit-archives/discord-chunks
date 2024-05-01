function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = null,
        d = !1;
    class _ extends(s = o.default.Store) {
        getLastProgress() {
            return u
        }
        isRunning() {
            return d
        }
    }
    a = "DispatchApplicationLaunchSetupStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new _(l.default, {
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
            d = !0
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function(e) {
            let {
                progress: t,
                total: n,
                name: i
            } = e;
            u = {
                progress: t,
                total: n,
                name: i
            }
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
            u = null, d = !1
        }
    })
}