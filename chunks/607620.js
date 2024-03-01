function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("446674"),
        i = n("913144"),
        r = n("789563");

    function u() {
        return !0
    }
    class a extends l.default.Store {
        initialize() {
            this.waitFor(r.default)
        }
        getExperimentAssignment(e, t) {
            return r.default.getGuildExperimentDescriptor(t, e)
        }
    }
    a.displayName = "GuildExperimentStore";
    var d = new a(i.default, {
        LOGOUT: u,
        LOGIN_SUCCESS: u,
        CONNECTION_OPEN: u,
        EXPERIMENTS_FETCH_SUCCESS: u,
        OVERLAY_INITIALIZE: u,
        CACHE_LOADED: u,
        EXPERIMENTS_FETCH_FAILURE: u,
        EXPERIMENT_REGISTER_LEGACY: u,
        EXPERIMENT_OVERRIDE_BUCKET: u
    })
}