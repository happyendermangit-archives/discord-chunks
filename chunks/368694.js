function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var i = n("446674"),
        r = n("913144"),
        s = n("517001"),
        a = n("305961"),
        o = n("697218"),
        l = n("565034"),
        u = n("963903");
    let c = "production" === u.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === u.Environments.STAGING;

    function d() {
        c = (0, s.isStaffEnv)(o.default.getCurrentUser())
    }
    class f extends i.default.Store {
        initialize() {
            this.waitFor(o.default, a.default), Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => c
                }
            }), d(), setTimeout(() => Object.freeze(this))
        }
        getExperimentDescriptor() {
            return c ? {
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
    f.displayName = "DeveloperExperimentStore";
    var E = new f(r.default, {
        CONNECTION_OPEN: d,
        OVERLAY_INITIALIZE: d,
        CURRENT_USER_UPDATE: d
    })
}