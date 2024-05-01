function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("168232"),
        o = n("430824"),
        l = n("594174"),
        u = n("987338"),
        d = n("48541");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = "production" === d.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === d.Environments.STAGING;

    function E() {
        c = (0, a.isStaffEnv)(l.default.getCurrentUser())
    }
    class I extends(i = r.default.Store) {
        initialize() {
            this.waitFor(l.default, o.default), Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => c,
                    set: () => {}
                }
            }), E(), setTimeout(() => Object.freeze(this))
        }
        getExperimentDescriptor() {
            return c ? {
                type: "developer",
                name: "discord_dev_testing",
                revision: 1,
                override: !0,
                bucket: u.ExperimentBuckets.TREATMENT_1
            } : null
        }
        constructor(...e) {
            super(...e), _(this, "isDeveloper", !1)
        }
    }
    _(I, "displayName", "DeveloperExperimentStore"), t.default = new I(s.default, {
        CONNECTION_OPEN: E,
        OVERLAY_INITIALIZE: E,
        CURRENT_USER_UPDATE: E
    })
}