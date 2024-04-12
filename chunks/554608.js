function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        MigrationStatus: function() {
            return r
        }
    });
    var d, n, i, c, r, o, f = a("442837"),
        l = a("570140");
    (d = r || (r = {}))[d.NOT_STARTED = 0] = "NOT_STARTED", d[d.IN_PROGRESS = 1] = "IN_PROGRESS", d[d.FAILED = 2] = "FAILED", d[d.SKIPPED = 3] = "SKIPPED";
    let s = 0;
    class u extends(o = f.default.Store) {
        getMigrationStatus() {
            return s
        }
    }
    c = "DomainMigrationStore", (i = "displayName") in(n = u) ? Object.defineProperty(n, i, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[i] = c, t.default = new u(l.default, {
        DOMAIN_MIGRATION_START: function() {
            s = 1
        },
        DOMAIN_MIGRATION_FAILURE: function() {
            s = 2
        },
        DOMAIN_MIGRATION_SKIP: function() {
            s = 3
        }
    })
}