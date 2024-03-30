function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        DOMAIN_MIGRATION_SUCCESS_KEY: function() {
            return o
        },
        DomainMigrationEventType: function() {
            return i
        },
        DomainMigrationMessageFrom: function() {
            return r
        },
        extractMessage: function() {
            return u
        },
        sendPostMessage: function() {
            return l
        }
    }), (s = i || (i = {}))[s.SKIP_MIGRATION = 0] = "SKIP_MIGRATION", s[s.SEND_DATA = 1] = "SEND_DATA", s[s.DATA_MIGRATED = 2] = "DATA_MIGRATED", s[s.DATA_MIGRATED_CONFIRMED = 3] = "DATA_MIGRATED_CONFIRMED", (a = r || (r = {}))[a.MIGRATION_SOURCE_DOMAIN = 0] = "MIGRATION_SOURCE_DOMAIN", a[a.MIGRATION_DESTINATION_DOMAIN = 1] = "MIGRATION_DESTINATION_DOMAIN";
    let o = "domainMigrationSuccess";

    function l(e, t, n) {
        let i = 0 === n ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
        t.postMessage({
            domainMigrationEvent: e
        }, i)
    }

    function u(e, t) {
        var n;
        return ! function(e, t) {
            let n = 0 === t ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
            return e.origin === n && null != e.data.domainMigrationEvent && !0
        }(e, t) ? null : null === (n = e.data) || void 0 === n ? void 0 : n.domainMigrationEvent
    }
}