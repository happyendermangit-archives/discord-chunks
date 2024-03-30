function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        failMigration: function() {
            return c
        },
        finishMigration: function() {
            return i
        },
        migrate: function() {
            return n
        }
    });
    var d = a("570140");

    function n() {
        d.default.wait(() => d.default.dispatch({
            type: "DOMAIN_MIGRATION_START"
        }))
    }

    function c() {
        d.default.dispatch({
            type: "DOMAIN_MIGRATION_FAILURE"
        })
    }

    function i() {
        window.location.reload()
    }
}