function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("517001"),
        a = n("305961"),
        o = n("697218"),
        l = n("565034"),
        u = n("963903");
    let d = "production" === u.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === u.Environments.STAGING;

    function c() {
        d = (0, r.isStaffEnv)(o.default.getCurrentUser())
    }
    class _ extends i.default.Store {
        initialize() {
            this.waitFor(o.default, a.default), Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => d,
                    set: () => {}
                }
            }), c(), setTimeout(() => Object.freeze(this))
        }
        getExperimentDescriptor() {
            return d ? {
                type: "developer",
                name: "discord_dev_testing",
                revision: 1,
                override: !0,
                bucket: l.ExperimentBuckets.TREATMENT_1
            } : null
        }
        constructor(...e) {
            super(...e), this.isDeveloper = !1
        }
    }
    _.displayName = "DeveloperExperimentStore";
    var f = new _(s.default, {
        CONNECTION_OPEN: c,
        OVERLAY_INITIALIZE: c,
        CURRENT_USER_UPDATE: c
    })
}