function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DOMAIN_MIGRATION_SUCCESS_KEY: function() {
            return u
        },
        DomainMigrationEventType: function() {
            return i
        },
        DomainMigrationMessageFrom: function() {
            return a
        },
        extractMessage: function() {
            return l
        },
        sendPostMessage: function() {
            return s
        }
    }), (r = i || (i = {}))[r.SKIP_MIGRATION = 0] = "SKIP_MIGRATION", r[r.SEND_DATA = 1] = "SEND_DATA", r[r.DATA_MIGRATED = 2] = "DATA_MIGRATED", r[r.DATA_MIGRATED_CONFIRMED = 3] = "DATA_MIGRATED_CONFIRMED", (o = a || (a = {}))[o.MIGRATION_SOURCE_DOMAIN = 0] = "MIGRATION_SOURCE_DOMAIN", o[o.MIGRATION_DESTINATION_DOMAIN = 1] = "MIGRATION_DESTINATION_DOMAIN";
    var r, o, i, a, u = "domainMigrationSuccess";

    function s(e, t, n) {
        var r = 0 === n ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
        t.postMessage({
            domainMigrationEvent: e
        }, r)
    }

    function l(e, t) {
        var n, r, o;
        return (r = e, o = 0 === t ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN, r.origin !== o || null == r.data.domainMigrationEvent) ? null : null === (n = e.data) || void 0 === n ? void 0 : n.domainMigrationEvent
    }
}