function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        MigrationStatus: function() {
            return s
        },
        default: function() {
            return o
        }
    });
    var d, s, n = t("446674"),
        c = t("913144");
    (d = s || (s = {}))[d.NOT_STARTED = 0] = "NOT_STARTED", d[d.IN_PROGRESS = 1] = "IN_PROGRESS", d[d.FAILED = 2] = "FAILED", d[d.SKIPPED = 3] = "SKIPPED";
    let i = 0;
    class r extends n.default.Store {
        getMigrationStatus() {
            return i
        }
    }
    r.displayName = "DomainMigrationStore";
    var o = new r(c.default, {
        DOMAIN_MIGRATION_START: function() {
            i = 1
        },
        DOMAIN_MIGRATION_FAILURE: function() {
            i = 2
        },
        DOMAIN_MIGRATION_SKIP: function() {
            i = 3
        }
    })
}