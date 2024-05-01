function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("353926");

    function d() {
        return !0
    }
    class _ extends(s = o.default.Store) {
        initialize() {
            this.waitFor(u.default)
        }
        getExperimentAssignment(e, t) {
            return u.default.getGuildExperimentDescriptor(t, e)
        }
    }
    a = "GuildExperimentStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new _(l.default, {
        LOGOUT: d,
        LOGIN_SUCCESS: d,
        CONNECTION_OPEN: d,
        EXPERIMENTS_FETCH_SUCCESS: d,
        OVERLAY_INITIALIZE: d,
        CACHE_LOADED: d,
        EXPERIMENTS_FETCH_FAILURE: d,
        EXPERIMENT_REGISTER_LEGACY: d,
        EXPERIMENT_OVERRIDE_BUCKET: d
    })
}