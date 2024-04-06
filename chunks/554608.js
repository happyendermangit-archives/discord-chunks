function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        MigrationStatus: function() {
            return o
        }
    });
    var d, n, c, i, o, r, f = a("442837"),
        s = a("570140");
    (d = o || (o = {}))[d.NOT_STARTED = 0] = "NOT_STARTED", d[d.IN_PROGRESS = 1] = "IN_PROGRESS", d[d.FAILED = 2] = "FAILED", d[d.SKIPPED = 3] = "SKIPPED";
    let l = 0;
    class u extends(r = f.default.Store) {
        getMigrationStatus() {
            return l
        }
    }
    i = "DomainMigrationStore", (c = "displayName") in(n = u) ? Object.defineProperty(n, c, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[c] = i, t.default = new u(s.default, {
        DOMAIN_MIGRATION_START: function() {
            l = 1
        },
        DOMAIN_MIGRATION_FAILURE: function() {
            l = 2
        },
        DOMAIN_MIGRATION_SKIP: function() {
            l = 3
        }
    })
}