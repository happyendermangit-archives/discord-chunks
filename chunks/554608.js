function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        MigrationStatus: function() {
            return o
        }
    });
    var d, n, c, i, o, r, f = a("442837"),
        l = a("570140");
    (d = o || (o = {}))[d.NOT_STARTED = 0] = "NOT_STARTED", d[d.IN_PROGRESS = 1] = "IN_PROGRESS", d[d.FAILED = 2] = "FAILED", d[d.SKIPPED = 3] = "SKIPPED";
    let s = 0;
    class u extends(r = f.default.Store) {
        getMigrationStatus() {
            return s
        }
    }
    i = "DomainMigrationStore", (c = "displayName") in(n = u) ? Object.defineProperty(n, c, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[c] = i, t.default = new u(l.default, {
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