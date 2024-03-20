function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        MigrationStatus: function() {
            return d
        },
        default: function() {
            return o
        }
    });
    var s, d, n = t("446674"),
        i = t("913144");
    (s = d || (d = {}))[s.NOT_STARTED = 0] = "NOT_STARTED", s[s.IN_PROGRESS = 1] = "IN_PROGRESS", s[s.FAILED = 2] = "FAILED", s[s.SKIPPED = 3] = "SKIPPED";
    let c = 0;
    class r extends n.default.Store {
        getMigrationStatus() {
            return c
        }
    }
    r.displayName = "DomainMigrationStore";
    var o = new r(i.default, {
        DOMAIN_MIGRATION_START: function() {
            c = 1
        },
        DOMAIN_MIGRATION_FAILURE: function() {
            c = 2
        },
        DOMAIN_MIGRATION_SKIP: function() {
            c = 3
        }
    })
}